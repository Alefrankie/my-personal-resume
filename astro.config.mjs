// @ts-check
import { defineConfig } from 'astro/config';

// Deployed origin and base path. Canonical, Open Graph and hreflang alternates are built
// from them. Defaults target GitHub Pages (https://alefrankie.github.io/my-personal-resume/);
// the deploy workflow passes the real values, and a custom domain only needs SITE_URL + BASE_PATH=/.
const site = process.env.SITE_URL ?? 'https://alefrankie.github.io';
const base = process.env.BASE_PATH ?? '/my-personal-resume';

// https://astro.build/config
export default defineConfig({
	site,
	base: base || '/',
	i18n: {
		locales: ['en', 'es', 'pt'],
		defaultLocale: 'en',
		// English stays at "/", the others get "/es/" and "/pt/".
		routing: { prefixDefaultLocale: false },
	},
});
