// Shared content contract. Every locale file (en.ts, es.ts, pt.ts) must satisfy `Resume`.
// UI strings live in `ui` so components never hardcode copy.

export type Locale = 'en' | 'es' | 'pt';

export const locales: Locale[] = ['en', 'es', 'pt'];
export const defaultLocale: Locale = 'en';

export interface Job {
	role: string;
	company: string;
	/** e.g. "2023" */
	start: string;
	/** e.g. "2024", or `ui.present` text when ongoing (set `current: true`) */
	end?: string;
	current?: boolean;
	location?: string;
	/** One-line context for the role, optional */
	summary?: string;
	highlights: string[];
	stack: string[];
}

export interface Project {
	name: string;
	description: string;
	url?: string;
	stack: string[];
}

export interface SkillGroup {
	label: string;
	items: string[];
}

export interface Education {
	title: string;
	institution: string;
	note?: string;
}

export interface Language {
	name: string;
	level: string;
	/** Short evidence line, optional */
	note?: string;
}

export interface ContactLink {
	kind: 'email' | 'phone' | 'linkedin' | 'github' | 'web';
	label: string;
	text: string;
	href: string;
}

export interface Resume {
	locale: Locale;
	meta: { title: string; description: string };
	name: string;
	headline: string;
	/** Short line under the headline: stack and focus */
	tagline: string;
	location: string;
	availability: string;
	summary: string;
	contact: ContactLink[];
	experience: Job[];
	projects: Project[];
	skills: SkillGroup[];
	education: Education[];
	languages: Language[];
	ui: {
		summary: string;
		experience: string;
		projects: string;
		skills: string;
		education: string;
		languages: string;
		contact: string;
		present: string;
		downloadPdf: string;
		languageSwitch: string;
		photoAlt: string;
		updated: string;
	};
	/** ISO date of last content update, shown on page and PDF */
	updatedAt: string;
}
