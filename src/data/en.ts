import type { Resume } from './types';

// Source of truth for content. es.ts and pt.ts translate this file 1:1.
// Never use em dashes in copy (owner preference).
export const en: Resume = {
	locale: 'en',
	meta: {
		title: 'Alefrank J. Martínez | Senior Software Engineer, AI-Assisted Development',
		description:
			'Senior full-stack engineer (TypeScript, Node/NestJS, React) working agent-first: specs, architecture and review for AI-assisted development. Based in Portugal.',
	},
	name: 'Alefrank J. Martínez',
	headline: 'Senior Software Engineer · AI-Assisted Development',
	tagline: 'Full-stack TypeScript · Node/NestJS · React · Hexagonal architecture',
	location: 'Faro, Algarve, Portugal',
	availability: 'Available for part-time or contract work (20 h/week, WET/CET hours). Open to full-time.',
	summary:
		"Senior software engineer with 6+ years building full-stack TypeScript systems. I have used AI in my daily work since GitHub Copilot launched, and since 2026 I work agent-first: I turn architecture and domain knowledge into specs and documentation that AI agents execute, then review every change for security, hexagonal (ports and adapters) boundaries and SOLID design. AI extends what I know; the engineering judgment stays mine.",
	contact: [
		{ kind: 'email', label: 'Email', text: 'alefrank.m@gmail.com', href: 'mailto:alefrank.m@gmail.com' },
		{ kind: 'phone', label: 'WhatsApp', text: '+351 936 404 829', href: 'https://wa.me/351936404829' },
		{
			kind: 'linkedin',
			label: 'LinkedIn',
			text: 'linkedin.com/in/alefrank-martinez',
			href: 'https://www.linkedin.com/in/alefrank-martinez/',
		},
		{ kind: 'github', label: 'GitHub', text: 'github.com/alefrankie', href: 'https://github.com/alefrankie' },
	],
	experience: [
		{
			role: 'Senior Software Engineer, AI-Assisted Development',
			company: 'Stack IT',
			start: '2023',
			current: true,
			summary: 'Senior engineer leading a team of 4 across 4 client engagements, all with extended contracts; since February 2026, leading the shift to agentic, spec-driven development.',
			highlights: [
				'Moved delivery to agentic, spec-driven development: codebase specs, AGENTS.md and CLAUDE.md context, and reusable agent workflows.',
				'Delegate about 90% of mechanical implementation work to AI agents; I own the design, the critical code and the final review.',
				'Turned architecture rules, security practices and domain knowledge into documentation that AI agents follow, so the quality bar holds while less code is written by hand.',
				'Supervise and review all AI-generated changes; enforce hexagonal architecture, security review and tests before merge.',
				'Supervised and evaluated interns, ran Scrum and conducted technical interviews for the team.',
			],
			stack: ['TypeScript', 'Node.js', 'NestJS', 'React', 'React Native', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Claude Code', 'GitHub Copilot'],
		},
		{
			role: 'Back-End Developer',
			company: 'Maraveca Telecomunicaciones',
			start: '2022',
			highlights: [
				'Designed and built back-end services for a telecom provider.',
				'Worked with front-end developers on API contracts and integration.',
				'Contributed to database design.',
			],
			stack: ['TypeScript', 'Angular', 'MySQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Gobernación del Estado Falcón',
			start: '2021',
			highlights: [
				'Built public-sector web applications from requirements gathered with stakeholders.',
				'Ran code reviews and mentored junior developers.',
			],
			stack: ['TypeScript', 'React', 'Svelte', 'CakePHP', 'PostgreSQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'VJC Imports',
			start: '2021',
			highlights: [
				'Led development of the company inventory and billing system.',
				'Worked directly with the client to keep scope aligned and deliver on schedule.',
			],
			stack: ['TypeScript', 'Svelte', 'React', 'Next.js', 'MongoDB'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Alcaldía del Municipio Miranda',
			start: '2020',
			highlights: [
				'Maintained and optimized municipal web applications.',
				'Gathered end-user feedback and ran quality assurance testing.',
			],
			stack: ['CakePHP', 'JavaScript', 'PostgreSQL'],
		},
	],
	projects: [],
	skills: [
		{ label: 'AI-assisted development', items: ['Claude Code', 'GitHub Copilot', 'Spec-driven development', 'Agent context (AGENTS.md, CLAUDE.md)', 'AI code review'] },
		{ label: 'Languages', items: ['TypeScript', 'JavaScript', 'Kotlin'] },
		{ label: 'Back end', items: ['Node.js', 'NestJS', 'Express', 'CakePHP'] },
		{ label: 'Front end', items: ['React', 'Angular', 'Svelte', 'Next.js'] },
		{ label: 'Mobile', items: ['React Native', 'Kotlin'] },
		{ label: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
		{ label: 'Cloud and DevOps', items: ['AWS', 'DigitalOcean', 'Terraform', 'Docker'] },
		{ label: 'Architecture and practice', items: ['Hexagonal (ports and adapters)', 'SOLID', 'Secure coding', 'Scrum', 'Git/GitHub'] },
	],
	education: [
		{ title: 'Systems Engineering', institution: 'National Experimental University of the Armed Forces (UNEFA)' },
		{ title: 'Technician in Computer Maintenance and Repair', institution: 'Josefa Camejo Institute' },
		{ title: 'Technician in Computerized Business Administration', institution: 'ATCE (Business Training Technical Academy)' },
	],
	languages: [
		{ name: 'Spanish', level: 'Native' },
		{ name: 'English', level: 'B1 (CEFR)', note: 'Daily written work in English: specs, documentation, pull requests.' },
		{ name: 'Portuguese', level: 'Basic' },
	],
	ui: {
		summary: 'Profile',
		experience: 'Experience',
		projects: 'Selected projects',
		skills: 'Skills',
		education: 'Education',
		languages: 'Languages',
		contact: 'Contact',
		present: 'Present',
		downloadPdf: 'Download PDF',
		languageSwitch: 'Language',
		photoAlt: 'Portrait of Alefrank J. Martínez',
		updated: 'Updated',
	},
	updatedAt: '2026-10-21',
};
