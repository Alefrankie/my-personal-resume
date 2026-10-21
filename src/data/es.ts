import type { Resume } from './types';

// Spanish translation of en.ts (neutral professional register, legible en España y Latinoamérica).
// Never use em dashes in copy (owner preference).
export const es: Resume = {
	locale: 'es',
	meta: {
		title: 'Alefrank J. Martínez | Senior Software Engineer, lidero un equipo que desarrolla con agentes de IA',
		description:
			'Ingeniero full-stack sénior en TypeScript (Node/NestJS, React), en Portugal. Escribe las especificaciones con las que trabajan los agentes de IA y revisa el código que producen.',
	},
	name: 'Alefrank J. Martínez',
	headline: 'Senior Software Engineer · Lidero un equipo que desarrolla con agentes de IA',
	tagline: 'Full-stack TypeScript · Node/NestJS · React · Arquitectura hexagonal',
	location: 'Faro, Algarve, Portugal',
	availability:
		'Disponible para jornada parcial o colaboración por contrato (20 h/semana, horario WET/CET). Abierto a jornada completa.',
	summary:
		'Ingeniero de software sénior con más de 6 años en full-stack TypeScript (Node/NestJS, React). Uso IA en el trabajo desde que salió GitHub Copilot. Desde febrero de 2026, la mayor parte de la implementación la hacen agentes de IA: yo escribo las especificaciones y la documentación con las que trabajan, me quedo con el diseño y el código crítico, y reviso cada cambio antes del merge en seguridad, límites de la arquitectura hexagonal y SOLID.',
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
				'Lidero un equipo de 4 personas en 4 proyectos de cliente, y los 4 han renovado. Desde febrero de 2026 estoy pasando al equipo a un desarrollo guiado por especificaciones con agentes de IA.',
			highlights: [
				'Construí la capa de contexto para agentes que usa el equipo: specs del código, archivos AGENTS.md y CLAUDE.md, y flujos de agentes reutilizables.',
				'Delego cerca del 90 % de la implementación mecánica en agentes de IA, y me quedo con el diseño, el código crítico y la revisión final.',
				'Bloqueo cada cambio generado por IA con revisión de código, pruebas, un paso de seguridad y verificación de límites hexagonales antes del merge.',
			],
			stack: ['TypeScript', 'Node.js', 'NestJS', 'React', 'React Native', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Claude Code', 'GitHub Copilot'],
		},
		{
			role: 'Back-End Developer',
			company: 'Maraveca Telecomunicaciones',
			start: '2022',
			highlights: [
				'Sustituí la paginación visual que cargaba los cerca de 7.000 clientes antes de mostrarlos (unos 5 minutos por carga) por paginación en el servidor, eliminando esa espera.',
				'Migré las consultas SQL crudas, expuestas a inyección, a Sequelize ORM en todo el back end, cerrando ese hueco de seguridad.',
				'Construí una función para que los clientes de fibra óptica vieran la velocidad de su conexión en tiempo real.',
			],
			stack: ['TypeScript', 'Angular', 'MySQL', 'Sequelize'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Gobernación del Estado Falcón',
			start: '2021',
			highlights: [
				'Desarrollé aplicaciones web para la gobernación, levantando los requisitos directamente con las partes interesadas.',
				'Realicé revisiones de código y fui mentor de desarrolladores junior.',
			],
			stack: ['TypeScript', 'React', 'Svelte', 'CakePHP', 'PostgreSQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'VJC Imports',
			start: '2021',
			highlights: [
				'Lideré el desarrollo del sistema de inventario y facturación de la empresa.',
				'Trabajé directamente con el cliente para gestionar el alcance y las fechas de entrega.',
			],
			stack: ['TypeScript', 'Svelte', 'React', 'Next.js', 'MongoDB'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Alcaldía del Municipio Miranda',
			start: '2020',
			highlights: [
				'Mantuve y optimicé las aplicaciones web de la alcaldía.',
				'Recopilé la opinión de los usuarios finales y ejecuté pruebas de QA.',
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
		{ label: 'Lenguajes', items: ['TypeScript', 'JavaScript'] },
		{ label: 'Back end', items: ['Node.js', 'NestJS', 'Express', 'CakePHP'] },
		{ label: 'Front end', items: ['React', 'Angular', 'Svelte', 'Next.js'] },
		{ label: 'Móvil', items: ['React Native', 'Kotlin'] },
		{ label: 'Datos', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
		{ label: 'Cloud y DevOps', items: ['AWS', 'DigitalOcean', 'Terraform', 'Docker'] },
		{ label: 'Arquitectura y práctica', items: ['Arquitectura hexagonal', 'SOLID', 'Código seguro', 'Scrum', 'Git/GitHub'] },
	],
	education: [
		{
			title: 'Ingeniería de Sistemas',
			institution: 'Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional (UNEFA)',
		},
	],
	languages: [
		{ name: 'Español', level: 'Nativo' },
		{ name: 'Inglés', level: 'B1 (MCER)', note: 'Escribo en inglés a diario: especificaciones, documentación y pull requests.' },
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
