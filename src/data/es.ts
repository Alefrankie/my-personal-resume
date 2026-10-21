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
		'Ingeniero de software sénior con más de 6 años en full-stack TypeScript (Node/NestJS, React). Uso IA en el trabajo desde que salió GitHub Copilot. Desde febrero de 2026, la mayor parte de la implementación la hacen agentes de IA: yo escribo las especificaciones y la documentación con las que trabajan, me quedo con el diseño y el código crítico, y reviso cada cambio antes del merge en seguridad, límites de la arquitectura hexagonal (puertos y adaptadores) y SOLID.',
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
				'Lidero un equipo de 4 personas en 4 proyectos de cliente, y todos esos clientes han renovado su contrato. Desde febrero de 2026 estoy pasando al equipo a un desarrollo guiado por especificaciones con agentes de IA.',
			highlights: [
				'Preparé lo que necesitan los agentes: specs del código, archivos AGENTS.md y CLAUDE.md, y flujos de agentes que el equipo reutiliza.',
				'Los agentes de IA hacen ahora cerca del 90 % de la implementación mecánica. El diseño, el código crítico y la revisión final los hago yo.',
				'Puse por escrito nuestras reglas de arquitectura, prácticas de seguridad y conocimiento del dominio para que los agentes las sigan; así la calidad del código se mantiene aunque se escriba menos a mano.',
				'Reviso todo el código generado por IA antes del merge y exijo pruebas, revisión de seguridad y respeto a la arquitectura hexagonal.',
				'Supervisé y evalué a becarios, llevé Scrum e hice entrevistas técnicas a candidatos para el equipo.',
			],
			stack: ['TypeScript', 'Node.js', 'NestJS', 'React', 'React Native', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Claude Code', 'GitHub Copilot'],
		},
		{
			role: 'Back-End Developer',
			company: 'Maraveca Telecomunicaciones',
			start: '2022',
			highlights: [
				'Diseñé y desarrollé servicios de back end para un proveedor de telecomunicaciones.',
				'Definí con los desarrolladores de front end los contratos de API y la integración.',
				'Ayudé a diseñar la base de datos.',
			],
			stack: ['TypeScript', 'Angular', 'MySQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Gobernación del Estado Falcón',
			start: '2021',
			highlights: [
				'Desarrollé aplicaciones web para la gobernación a partir de requisitos levantados con las partes interesadas.',
				'Hice revisiones de código y fui mentor de desarrolladores junior.',
			],
			stack: ['TypeScript', 'React', 'Svelte', 'CakePHP', 'PostgreSQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'VJC Imports',
			start: '2021',
			highlights: [
				'Lideré el desarrollo del sistema de inventario y facturación de la empresa.',
				'Traté directamente con el cliente el alcance y las fechas de entrega.',
			],
			stack: ['TypeScript', 'Svelte', 'React', 'Next.js', 'MongoDB'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Alcaldía del Municipio Miranda',
			start: '2020',
			highlights: [
				'Mantuve y optimicé las aplicaciones web de la alcaldía.',
				'Recogí la opinión de los usuarios finales e hice pruebas de QA.',
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
