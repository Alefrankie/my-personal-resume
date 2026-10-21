import type { Locale, Resume } from './types';
import { en } from './en';
import { es } from './es';
import { pt } from './pt';

export * from './types';

const resumes: Record<Locale, Resume> = { en, es, pt };

export function getResume(locale: Locale): Resume {
	return resumes[locale];
}

/** Prefixes a root-relative path with the configured base (e.g. "/my-personal-resume"). */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	return `${base}/${path.replace(/^\/+/, '')}`;
}

/** Public URL of the generated PDF for a locale (built by scripts/generate-pdf.mjs). */
export function pdfUrl(locale: Locale): string {
	return withBase(`/pdf/alefrank-martinez-resume-${locale}.pdf`);
}
