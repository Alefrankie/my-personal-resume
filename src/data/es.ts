import type { Resume } from './types';

// Spanish translation of en.ts (neutral professional register, legible en España y Latinoamérica).
// Never use em dashes in copy (owner preference).
export const es: Resume = {
	locale: 'es',
	meta: {
		title: 'Alefrank J. Martínez | Senior Software Engineer, desarrollo asistido por IA',
		description:
			'Ingeniero full-stack sénior (TypeScript, Node/NestJS, React) con enfoque agent-first: especificaciones, arquitectura y revisión para el desarrollo asistido por IA. Residente en Portugal.',
	},
	name: 'Alefrank J. Martínez',
	headline: 'Senior Software Engineer · Desarrollo asistido por IA',
	tagline: 'Full-stack TypeScript · Node/NestJS · React · Arquitectura hexagonal',
	location: 'Faro, Algarve, Portugal',
	availability:
		'Disponible para jornada parcial o colaboración por contrato (20 h/semana, horario WET/CET). Abierto a jornada completa.',
	summary:
		'Ingeniero de software sénior con más de 6 años construyendo sistemas full-stack en TypeScript. Uso IA en mi trabajo diario desde que apareció GitHub Copilot y, desde 2026, trabajo agent-first: convierto la arquitectura y el conocimiento del dominio en especificaciones y documentación que los agentes de IA ejecutan, y después reviso cada cambio en seguridad, límites de la arquitectura hexagonal (puertos y adaptadores) y diseño SOLID. La IA amplía lo que sé; el criterio de ingeniería sigue siendo mío.',
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
			role: 'Senior Software Engineer, desarrollo asistido por IA',
			company: 'Stack IT',
			start: '2023',
			current: true,
			summary:
				'Ingeniero sénior que lidera un equipo de 4 personas en 4 proyectos de cliente, todos con contrato renovado; desde febrero de 2026, al frente del cambio hacia un desarrollo agéntico guiado por especificaciones.',
			highlights: [
				'Llevé la entrega a un desarrollo agéntico guiado por especificaciones: specs de la base de código, contexto en AGENTS.md y CLAUDE.md, y flujos de trabajo de agentes reutilizables.',
				'Delego alrededor del 90 % del trabajo de implementación mecánica en agentes de IA; el diseño, el código crítico y la revisión final siguen siendo míos.',
				'Convertí reglas de arquitectura, prácticas de seguridad y conocimiento del dominio en documentación que los agentes de IA siguen, de modo que el listón de calidad se mantiene aunque se escriba menos código a mano.',
				'Superviso y reviso todos los cambios generados por IA; exijo arquitectura hexagonal, revisión de seguridad y pruebas antes del merge.',
				'Supervisé y evalué a becarios, facilité Scrum y realicé entrevistas técnicas para el equipo.',
			],
			stack: ['TypeScript', 'Node.js', 'NestJS', 'React', 'React Native', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Claude Code', 'GitHub Copilot'],
		},
		{
			role: 'Back-End Developer',
			company: 'Maraveca Telecomunicaciones',
			start: '2022',
			highlights: [
				'Diseñé y construí servicios de back end para un proveedor de telecomunicaciones.',
				'Trabajé con los desarrolladores de front end en los contratos de API y su integración.',
				'Participé en el diseño de la base de datos.',
			],
			stack: ['TypeScript', 'Angular', 'MySQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Gobernación del Estado Falcón',
			start: '2021',
			highlights: [
				'Desarrollé aplicaciones web del sector público a partir de requisitos levantados con las partes interesadas.',
				'Realicé revisiones de código y mentoricé a desarrolladores junior.',
			],
			stack: ['TypeScript', 'React', 'Svelte', 'CakePHP', 'PostgreSQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'VJC Imports',
			start: '2021',
			highlights: [
				'Lideré el desarrollo del sistema de inventario y facturación de la empresa.',
				'Trabajé directamente con el cliente para mantener el alcance alineado y entregar a tiempo.',
			],
			stack: ['TypeScript', 'Svelte', 'React', 'Next.js', 'MongoDB'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Alcaldía del Municipio Miranda',
			start: '2020',
			highlights: [
				'Mantuve y optimicé aplicaciones web municipales.',
				'Recogí comentarios de los usuarios finales y realicé pruebas de aseguramiento de la calidad.',
			],
			stack: ['CakePHP', 'JavaScript', 'PostgreSQL'],
		},
	],
	projects: [],
	skills: [
		{
			label: 'Desarrollo asistido por IA',
			items: ['Claude Code', 'GitHub Copilot', 'Desarrollo guiado por especificaciones', 'Contexto para agentes (AGENTS.md, CLAUDE.md)', 'Revisión de código con IA'],
		},
		{ label: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Kotlin'] },
		{ label: 'Back end', items: ['Node.js', 'NestJS', 'Express', 'CakePHP'] },
		{ label: 'Front end', items: ['React', 'Angular', 'Svelte', 'Next.js'] },
		{ label: 'Móvil', items: ['React Native', 'Kotlin'] },
		{ label: 'Datos', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
		{ label: 'Cloud y DevOps', items: ['AWS', 'DigitalOcean', 'Terraform', 'Docker'] },
		{ label: 'Arquitectura y práctica', items: ['Hexagonal (puertos y adaptadores)', 'SOLID', 'Código seguro', 'Scrum', 'Git/GitHub'] },
	],
	education: [
		{
			title: 'Ingeniería de Sistemas',
			institution: 'Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional (UNEFA)',
		},
		{ title: 'Técnico en Mantenimiento y Reparación de Computadoras', institution: 'Instituto Josefa Camejo' },
		{
			title: 'Técnico en Administración de Empresas Computarizada',
			institution: 'ATCE (Academia Técnica de Capacitación Empresarial)',
		},
	],
	languages: [
		{ name: 'Español', level: 'Nativo' },
		{ name: 'Inglés', level: 'B1 (MCER)', note: 'Trabajo escrito a diario en inglés: especificaciones, documentación y pull requests.' },
		{ name: 'Portugués', level: 'Básico' },
	],
	ui: {
		summary: 'Perfil',
		experience: 'Experiencia',
		projects: 'Proyectos destacados',
		skills: 'Competencias',
		education: 'Formación',
		languages: 'Idiomas',
		contact: 'Contacto',
		present: 'Actualidad',
		downloadPdf: 'Descargar PDF',
		languageSwitch: 'Idioma',
		photoAlt: 'Retrato de Alefrank J. Martínez',
		updated: 'Actualizado',
	},
	updatedAt: '2026-10-21',
};
