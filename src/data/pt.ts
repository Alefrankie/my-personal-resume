import type { Resume } from './types';

// European Portuguese (pt-PT) translation of en.ts. Portugal norms: "equipa", "utilizador", "ficheiro".
// Never use em dashes in copy (owner preference).
export const pt: Resume = {
	locale: 'pt',
	meta: {
		title: 'Alefrank J. Martínez | Senior Software Engineer, lidero uma equipa que desenvolve com agentes de IA',
		description:
			'Engenheiro full-stack sénior em TypeScript (Node/NestJS, React), em Portugal. Escreve as especificações com que os agentes de IA trabalham e revê o código que produzem.',
	},
	name: 'Alefrank J. Martínez',
	headline: 'Senior Software Engineer · Lidero uma equipa que desenvolve com agentes de IA',
	tagline: 'Full-stack TypeScript · Node/NestJS · React · Arquitetura hexagonal',
	location: 'Faro, Algarve, Portugal',
	availability:
		'Disponível para trabalho a tempo parcial ou em regime de prestação de serviços (20 h/semana, horário WET/CET). Aberto a tempo inteiro.',
	summary:
		'Engenheiro de software sénior com mais de 6 anos em full-stack TypeScript (Node/NestJS, React). Uso IA no trabalho desde que saiu o GitHub Copilot. Desde fevereiro de 2026, a maior parte da implementação é feita por agentes de IA: escrevo as especificações e a documentação com que trabalham, fico com o desenho e o código crítico, e revejo cada alteração antes do merge quanto a segurança, fronteiras da arquitetura hexagonal e SOLID.',
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
			role: 'Senior Software Engineer, desenvolvimento assistido por IA',
			company: 'Stack IT',
			start: '2023',
			current: true,
			summary:
				'Lidero uma equipa de 4 pessoas em 4 projetos de cliente, e as 4 renovaram. Desde fevereiro de 2026 estou a passar a equipa para desenvolvimento orientado por especificações com agentes de IA.',
			highlights: [
				'Construí a camada de contexto para agentes que a equipa usa: specs do código, ficheiros AGENTS.md e CLAUDE.md, e fluxos de agentes reutilizáveis.',
				'Delego cerca de 90 % da implementação mecânica em agentes de IA, ficando com o desenho, o código crítico e a revisão final.',
				'Bloqueio cada alteração gerada por IA com revisão de código, testes, uma verificação de segurança e checagem dos limites hexagonais antes do merge.',
			],
			stack: ['TypeScript', 'Node.js', 'NestJS', 'React', 'React Native', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Claude Code', 'GitHub Copilot'],
		},
		{
			role: 'Back-End Developer',
			company: 'Maraveca Telecomunicaciones',
			start: '2022',
			highlights: [
				'Substituí a paginação visual que carregava os cerca de 7.000 clientes antes de os mostrar (cerca de 5 minutos por carregamento) por paginação no servidor, eliminando essa espera.',
				'Migrei as queries SQL em bruto, expostas a injeção, para Sequelize ORM em todo o back end, fechando essa lacuna de segurança.',
				'Construí uma funcionalidade para os clientes de fibra ótica verem a velocidade da sua ligação em tempo real.',
			],
			stack: ['TypeScript', 'Angular', 'MySQL', 'Sequelize'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Gobernación del Estado Falcón',
			start: '2021',
			highlights: [
				'Desenvolvi aplicações web para o governo estadual, levantando os requisitos diretamente com as partes interessadas.',
				'Realizei revisões de código e acompanhei programadores júnior.',
			],
			stack: ['TypeScript', 'React', 'Svelte', 'CakePHP', 'PostgreSQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'VJC Imports',
			start: '2021',
			highlights: [
				'Liderei o desenvolvimento do sistema de inventário e faturação da empresa.',
				'Trabalhei diretamente com o cliente para gerir o âmbito e os prazos de entrega.',
			],
			stack: ['TypeScript', 'Svelte', 'React', 'Next.js', 'MongoDB'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Alcaldía del Municipio Miranda',
			start: '2020',
			highlights: [
				'Mantive e otimizei as aplicações web do município.',
				'Recolhi a opinião dos utilizadores finais e executei testes de QA.',
			],
			stack: ['CakePHP', 'JavaScript', 'PostgreSQL'],
		},
	],
	projects: [],
	skills: [
		{
			label: 'Desenvolvimento assistido por IA',
			items: ['Claude Code', 'GitHub Copilot', 'Desenvolvimento orientado por especificações', 'Contexto para agentes (AGENTS.md, CLAUDE.md)', 'Revisão de código com IA'],
		},
		{ label: 'Linguagens', items: ['TypeScript', 'JavaScript'] },
		{ label: 'Back end', items: ['Node.js', 'NestJS', 'Express', 'CakePHP'] },
		{ label: 'Front end', items: ['React', 'Angular', 'Svelte', 'Next.js'] },
		{ label: 'Mobile', items: ['React Native', 'Kotlin'] },
		{ label: 'Dados', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
		{ label: 'Cloud e DevOps', items: ['AWS', 'DigitalOcean', 'Terraform', 'Docker'] },
		{ label: 'Arquitetura e prática', items: ['Arquitetura hexagonal', 'SOLID', 'Código seguro', 'Scrum', 'Git/GitHub'] },
	],
	education: [
		{
			title: 'Engenharia de Sistemas',
			institution: 'Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional (UNEFA)',
		},
	],
	languages: [
		{ name: 'Espanhol', level: 'Nativo' },
		{ name: 'Inglês', level: 'B1 (QECR)', note: 'Escrevo em inglês todos os dias: especificações, documentação e pull requests.' },
		{ name: 'Português', level: 'Básico' },
	],
	ui: {
		summary: 'Perfil',
		experience: 'Experiência',
		projects: 'Projetos em destaque',
		skills: 'Competências',
		education: 'Formação',
		languages: 'Idiomas',
		contact: 'Contacto',
		present: 'Atualidade',
		downloadPdf: 'Transferir PDF',
		languageSwitch: 'Idioma',
		photoAlt: 'Retrato de Alefrank J. Martínez',
		updated: 'Atualizado',
	},
	updatedAt: '2026-10-21',
};
