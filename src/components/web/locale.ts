import { defaultLocale, locales, withBase, type Locale } from '../../data';

/** Public path of the resume in a given locale: "/" for English, "/es/", "/pt/" (under the site base). */
export function localePath(locale: Locale): string {
	return withBase(locale === defaultLocale ? '/' : `/${locale}/`);
}

/** Endonym shown in the language switch and used as the link's accessible name. */
export const localeName: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
	pt: 'Português',
};

/** Two-letter label rendered in the switch. */
export const localeShort: Record<Locale, string> = {
	en: 'EN',
	es: 'ES',
	pt: 'PT',
};

/** BCP 47 tag for `<html lang>`. The Portuguese copy is European Portuguese. */
export const localeTag: Record<Locale, string> = {
	en: 'en',
	es: 'es',
	pt: 'pt-PT',
};

/** Broader tag for hreflang, so Portuguese speakers outside Portugal still match. */
export const localeHreflang: Record<Locale, string> = {
	en: 'en',
	es: 'es',
	pt: 'pt',
};

/** Open Graph locale codes. */
export const localeOg: Record<Locale, string> = {
	en: 'en_US',
	es: 'es_ES',
	pt: 'pt_PT',
};

export { locales, defaultLocale };
export type { Locale };
