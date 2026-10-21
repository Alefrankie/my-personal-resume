import type { Resume } from './types';

// Source of truth for content. es.ts and pt.ts translate this file 1:1.
// Never use em dashes in copy (owner preference).
export const en: Resume = {
	locale: 'en',
	meta: {
		title: 'Alefrank J. Martínez | Senior Software Engineer, team lead building with AI agents',
		description:
			'Senior full-stack TypeScript engineer (Node/NestJS, React) in Portugal. Writes the specs AI coding agents work from and reviews the code they produce.',
	},
	name: 'Alefrank J. Martínez',
	headline: 'Senior Software Engineer · Team lead building with AI agents',
	tagline: 'Full-stack TypeScript · Node/NestJS · React · Hexagonal architecture',
	location: 'Faro, Algarve, Portugal',
	availability: 'Available for part-time or contract work (20 h/week, WET/CET hours). Open to full-time.',
	summary:
		"Senior software engineer with 6+ years of full-stack TypeScript (Node/NestJS, React). I've used AI at work since GitHub Copilot came out. Since February 2026 most of my implementation is done by AI agents: I write the specs and project docs they work from, keep the design and the critical code for myself, and review every change before merge for security, hexagonal (ports and adapters) boundaries and SOLID.",
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
			summary: 'I lead a team of 4 on 4 client projects, and every one of those clients has extended its contract. Since February 2026 I have been moving the team to spec-driven development with AI agents.',
			highlights: [
				'Set up what the agents need: codebase specs, AGENTS.md and CLAUDE.md files, and agent workflows the team reuses.',
				'AI agents now do about 90% of the mechanical implementation. I do the design, the critical code and the final review.',
				'Wrote our architecture rules, security practices and domain knowledge into docs the agents follow, which keeps code quality where it was with less code written by hand.',
				'Review all AI-generated code before merge and require tests, a security review and clean hexagonal boundaries.',
				'Supervised and evaluated interns, ran Scrum and interviewed candidates for the team.',
			],
			stack: ['TypeScript', 'Node.js', 'NestJS', 'React', 'React Native', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Claude Code', 'GitHub Copilot'],
		},
		{
			role: 'Back-End Developer',
			company: 'Maraveca Telecomunicaciones',
			start: '2022',
			highlights: [
				'Designed and built back-end services for a telecom provider.',
				'Worked out API contracts and integration with the front-end developers.',
				'Helped design the database.',
			],
			stack: ['TypeScript', 'Angular', 'MySQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Gobernación del Estado Falcón',
			start: '2021',
			highlights: [
				'Built web applications for the state government from requirements gathered with stakeholders.',
				'Did code reviews and mentored junior developers.',
			],
			stack: ['TypeScript', 'React', 'Svelte', 'CakePHP', 'PostgreSQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'VJC Imports',
			start: '2021',
			highlights: [
				"Led development of the company's inventory and billing system.",
				'Dealt directly with the client on scope and delivery dates.',
			],
			stack: ['TypeScript', 'Svelte', 'React', 'Next.js', 'MongoDB'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Alcaldía del Municipio Miranda',
			start: '2020',
			highlights: [
				"Maintained and optimized the municipality's web applications.",
				'Collected feedback from end users and did QA testing.',
			],
			stack: ['CakePHP', 'JavaScript', 'PostgreSQL'],
		},
	],
	projects: [],
	skills: [
		{ label: 'AI-assisted development', items: ['Claude Code', 'GitHub Copilot', 'Spec-driven development', 'Agent context (AGENTS.md, CLAUDE.md)', 'AI code review'] },
		{ label: 'Languages', items: ['TypeScript', 'JavaScript'] },
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
		{ name: 'English', level: 'B1 (CEFR)', note: 'I write in English every day: specs, documentation and pull requests.' },
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
