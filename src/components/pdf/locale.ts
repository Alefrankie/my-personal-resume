import type { Locale } from '../../data/types';

/** BCP 47 tag for the print document's `<html lang>` and for Intl.DateTimeFormat.
 *  The Portuguese copy is European Portuguese. Mirrors `localeTag` in
 *  src/components/web/locale.ts; kept as a separate copy so the pdf/** tree has
 *  no dependency on web/**. */
export const printLocaleTag: Record<Locale, string> = { en: 'en', es: 'es', pt: 'pt-PT' };
