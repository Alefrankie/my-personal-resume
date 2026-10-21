# my-personal-resume

Personal resume of Alefrank J. Martínez, built with Astro. English (default), Spanish and European Portuguese, with a downloadable PDF per language generated from the same content.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npx playwright install chromium` | Install the browser used to render PDFs (once) |
| `npm run dev` | Dev server at `http://localhost:4321/my-personal-resume/` |
| `npm run build` | Build the site and the PDFs into `dist/` |
| `npm run pdf` | Regenerate PDFs only (needs a previous `astro build`); also copies them to `public/pdf/` for the dev server |

## Content

All copy lives in `src/data/` (`en.ts` is the source of truth; `es.ts` and `pt.ts` translate it). Pages and PDFs read from there, so the web page and the PDF never disagree.

- Web page: `src/pages/{index,es,pt}`, `src/layouts/`, `src/components/web/`
- PDF: `src/pages/print/[lang].astro`, `src/components/pdf/`, `scripts/generate-pdf.mjs`

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds site and PDFs and publishes to GitHub Pages. `SITE_URL` and `BASE_PATH` come from the Pages configuration; for a custom domain set `BASE_PATH=/`.
