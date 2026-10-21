#!/usr/bin/env node
// Generates the downloadable resume PDFs from the built print pages.
//
// Pipeline: serve dist/ over a throwaway node:http server -> discover each built print
// page (/print/ for the default locale, /print/{locale}/ for the rest) -> open it in
// Chromium (Playwright) -> page.pdf() -> write the same bytes to dist/pdf/ and public/pdf/
// (the public copy is what `astro dev` serves and what gets committed).
//
// Run after `astro build`. Requires dist/ to exist.

import { createReadStream } from 'node:fs';
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const DIST = join(ROOT, 'dist');
const PRINT_DIR = join(DIST, 'print');
const OUT_DIRS = [join(DIST, 'pdf'), join(ROOT, 'public', 'pdf')];
const FILE_BASE = 'alefrank-martinez-resume';
// Must match `base` in astro.config.mjs: built pages reference assets under it.
const BASE_PATH = (process.env.BASE_PATH ?? '/my-personal-resume').replace(/\/+$/, '');
const MAX_PAGES = 2;

const MIME = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.webp': 'image/webp',
	'.ico': 'image/x-icon',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.ttf': 'font/ttf',
	'.otf': 'font/otf',
	'.pdf': 'application/pdf',
	'.txt': 'text/plain; charset=utf-8',
	'.xml': 'application/xml',
};

function fail(message) {
	console.error(`\n[pdf] ${message}\n`);
	process.exit(1);
}

async function isFile(path) {
	try {
		return (await stat(path)).isFile();
	} catch {
		return false;
	}
}

/** Maps a request path to a file inside root, without escaping it. */
async function resolveFile(root, urlPath) {
	const decoded = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
	const candidate = resolve(root, `.${normalize(decoded)}`);
	if (candidate !== root && !candidate.startsWith(root + sep)) return null;

	if (await isFile(candidate)) return candidate;
	const indexed = join(candidate, 'index.html');
	if (await isFile(indexed)) return indexed;
	const htmlSibling = `${candidate}.html`;
	if (await isFile(htmlSibling)) return htmlSibling;
	return null;
}

/** Tiny static file server over the built site. Resolves with { origin, close }. */
async function serveDist(root) {
	const server = createServer((req, res) => {
		const url = req.url ?? '/';
		const inBase = BASE_PATH === '' || url === BASE_PATH || url.startsWith(`${BASE_PATH}/`);
		const path = inBase ? url.slice(BASE_PATH.length) || '/' : null;
		(path ? resolveFile(root, path) : Promise.resolve(null))
			.then((file) => {
				if (!file) {
					res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
					res.end('Not found');
					return;
				}
				res.writeHead(200, {
					'content-type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream',
					'cache-control': 'no-store',
				});
				createReadStream(file).pipe(res);
			})
			.catch((error) => {
				res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
				res.end(String(error));
			});
	});

	await new Promise((ok, no) => {
		server.once('error', no);
		server.listen(0, '127.0.0.1', ok);
	});

	const { port } = server.address();
	return {
		origin: `http://127.0.0.1:${port}`,
		close: () => new Promise((ok) => server.close(ok)),
	};
}

/**
 * Page count straight from the PDF bytes: count the page objects, falling back
 * to the /Count entry of the page tree.
 */
function pdfPageCount(bytes) {
	const text = Buffer.from(bytes).toString('latin1');
	const pageObjects = text.match(/\/Type\s*\/Page(?![a-zA-Z])/g);
	if (pageObjects && pageObjects.length > 0) return pageObjects.length;

	let fromTree = 0;
	for (const match of text.matchAll(/\/Count\s+(\d+)/g)) {
		fromTree = Math.max(fromTree, Number(match[1]));
	}
	return fromTree || 0;
}

function hasTitleMetadata(bytes) {
	return Buffer.from(bytes).toString('latin1').includes('/Title');
}

/**
 * Print pages to render, taken from the routes `astro build` actually emitted, not from
 * a hardcoded locale list: the default locale lives at dist/print/index.html (no locale
 * segment in the URL, so /print/en/ doesn't 404 under Astro's i18n routing in dev), and
 * every other locale gets its own dist/print/{locale}/index.html. Each page embeds
 * <meta name="x-print-locale"> so its locale survives even though the URL doesn't carry
 * it for the default case.
 */
async function discoverPrintPages() {
	const pages = [];

	async function consider(urlPath, dir) {
		const file = join(dir, 'index.html');
		if (!(await isFile(file))) return;
		const html = await readFile(file, 'utf8');
		const match = html.match(/<meta\s+name="x-print-locale"\s+content="([^"]*)"/);
		if (!match) return;
		pages.push({ locale: match[1], urlPath });
	}

	await consider('/print/', PRINT_DIR);

	let entries;
	try {
		entries = await readdir(PRINT_DIR, { withFileTypes: true });
	} catch {
		entries = [];
	}
	for (const entry of entries.filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
		await consider(`/print/${entry.name}/`, join(PRINT_DIR, entry.name));
	}

	return pages;
}

async function main() {
	if (!(await isFile(join(DIST, 'index.html')))) {
		fail(`dist/ is missing or incomplete (no ${join('dist', 'index.html')}). Run "npm run build:site" first.`);
	}

	let pages;
	try {
		pages = await discoverPrintPages();
	} catch {
		pages = [];
	}
	if (pages.length === 0) {
		fail('No print routes found in dist/print/. Check src/pages/print/index.astro, src/pages/print/[lang].astro and rebuild.');
	}

	for (const dir of OUT_DIRS) await mkdir(dir, { recursive: true });

	const { origin, close } = await serveDist(DIST);
	const browser = await chromium.launch();
	const results = [];

	try {
		const context = await browser.newContext();
		for (const { locale, urlPath } of pages) {
			const url = `${origin}${BASE_PATH}${urlPath}`;
			const page = await context.newPage();
			const response = await page.goto(url, { waitUntil: 'networkidle' });
			if (!response || !response.ok()) {
				throw new Error(`${url} returned ${response ? response.status() : 'no response'}`);
			}

			await page.emulateMedia({ media: 'print' });
			await page.evaluate(() => document.fonts.ready.then(() => true));

			const title = await page.title();
			const bytes = await page.pdf({
				format: 'A4',
				printBackground: true,
				preferCSSPageSize: true,
				tagged: true,
				displayHeaderFooter: false,
			});
			await page.close();

			const fileName = `${FILE_BASE}-${locale}.pdf`;
			for (const dir of OUT_DIRS) await writeFile(join(dir, fileName), bytes);

			results.push({
				locale,
				fileName,
				pages: pdfPageCount(bytes),
				kb: Math.round(bytes.length / 102.4) / 10,
				title,
				titled: hasTitleMetadata(bytes),
			});
		}
	} finally {
		await browser.close();
		await close();
	}

	console.log('[pdf] generated:');
	for (const result of results) {
		const metadata = result.titled ? 'title set' : 'no title metadata';
		console.log(`[pdf]   ${result.fileName}  ${result.pages} page(s)  ${result.kb} KB  (${metadata})`);
	}
	console.log(`[pdf] written to ${OUT_DIRS.map((dir) => dir.replace(ROOT + sep, '')).join(' and ')}`);

	const tooLong = results.filter((result) => result.pages > MAX_PAGES);
	for (const result of tooLong) {
		console.warn(`[pdf] WARNING: ${result.fileName} is ${result.pages} pages, target is ${MAX_PAGES}.`);
	}
}

main().catch((error) => {
	fail(error instanceof Error ? (error.stack ?? error.message) : String(error));
});
