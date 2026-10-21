import type { Resume } from './types';

// European Portuguese (pt-PT) translation of en.ts. Portugal norms: "equipa", "utilizador", "ficheiro".
// Never use em dashes in copy (owner preference).
export const pt: Resume = {
	locale: 'pt',
	meta: {
		title: 'Alefrank J. Martínez | Senior Software Engineer, desenvolvimento assistido por IA',
		description:
			'Engenheiro full-stack sénior (TypeScript, Node/NestJS, React) com abordagem agent-first: especificações, arquitetura e revisão para desenvolvimento assistido por IA. Baseado em Portugal.',
	},
	name: 'Alefrank J. Martínez',
	headline: 'Senior Software Engineer · Desenvolvimento assistido por IA',
	tagline: 'Full-stack TypeScript · Node/NestJS · React · Arquitetura hexagonal',
	location: 'Faro, Algarve, Portugal',
	availability:
		'Disponível para trabalho a tempo parcial ou em regime de prestação de serviços (20 h/semana, horário WET/CET). Aberto a tempo inteiro.',
	summary:
		'Engenheiro de software sénior com mais de 6 anos a construir sistemas full-stack em TypeScript. Uso IA no trabalho diário desde o lançamento do GitHub Copilot e, desde 2026, trabalho agent-first: transformo a arquitetura e o conhecimento do domínio em especificações e documentação que os agentes de IA executam e, depois, reviso cada alteração quanto a segurança, fronteiras da arquitetura hexagonal (portos e adaptadores) e desenho SOLID. A IA amplia aquilo que sei; o critério de engenharia continua a ser meu.',
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
				'Engenheiro sénior a liderar uma equipa de 4 pessoas em 4 projetos de cliente, todos com contrato renovado; desde fevereiro de 2026, à frente da mudança para um desenvolvimento agêntico orientado por especificações.',
			highlights: [
				'Levei a entrega para um desenvolvimento agêntico orientado por especificações: specs da base de código, contexto em AGENTS.md e CLAUDE.md e fluxos de trabalho de agentes reutilizáveis.',
				'Delego cerca de 90 % do trabalho de implementação mecânica em agentes de IA; o desenho, o código crítico e a revisão final continuam a ser meus.',
				'Transformei regras de arquitetura, práticas de segurança e conhecimento do domínio em documentação que os agentes de IA seguem, de modo que o nível de qualidade se mantém mesmo escrevendo menos código à mão.',
				'Superviso e reviso todas as alterações geradas por IA; garanto arquitetura hexagonal, revisão de segurança e testes antes do merge.',
				'Supervisionei e avaliei estagiários, conduzi Scrum e realizei entrevistas técnicas para a equipa.',
			],
			stack: ['TypeScript', 'Node.js', 'NestJS', 'React', 'React Native', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Claude Code', 'GitHub Copilot'],
		},
		{
			role: 'Back-End Developer',
			company: 'Maraveca Telecomunicaciones',
			start: '2022',
			highlights: [
				'Desenhei e construí serviços de back end para um operador de telecomunicações.',
				'Trabalhei com os programadores de front end nos contratos de API e na respetiva integração.',
				'Participei no desenho da base de dados.',
			],
			stack: ['TypeScript', 'Angular', 'MySQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Gobernación del Estado Falcón',
			start: '2021',
			highlights: [
				'Desenvolvi aplicações web do setor público a partir de requisitos levantados com as partes interessadas.',
				'Fiz revisões de código e acompanhei programadores júnior.',
			],
			stack: ['TypeScript', 'React', 'Svelte', 'CakePHP', 'PostgreSQL'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'VJC Imports',
			start: '2021',
			highlights: [
				'Liderei o desenvolvimento do sistema de inventário e faturação da empresa.',
				'Trabalhei diretamente com o cliente para manter o âmbito alinhado e entregar dentro do prazo.',
			],
			stack: ['TypeScript', 'Svelte', 'React', 'Next.js', 'MongoDB'],
		},
		{
			role: 'Full-Stack Developer',
			company: 'Alcaldía del Municipio Miranda',
			start: '2020',
			highlights: [
				'Mantive e otimizei aplicações web municipais.',
				'Recolhi o feedback dos utilizadores finais e realizei testes de garantia de qualidade.',
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
		{ label: 'Linguagens', items: ['TypeScript', 'JavaScript', 'Kotlin'] },
		{ label: 'Back end', items: ['Node.js', 'NestJS', 'Express', 'CakePHP'] },
		{ label: 'Front end', items: ['React', 'Angular', 'Svelte', 'Next.js'] },
		{ label: 'Mobile', items: ['React Native', 'Kotlin'] },
		{ label: 'Dados', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
		{ label: 'Cloud e DevOps', items: ['AWS', 'DigitalOcean', 'Terraform', 'Docker'] },
		{ label: 'Arquitetura e prática', items: ['Hexagonal (portos e adaptadores)', 'SOLID', 'Código seguro', 'Scrum', 'Git/GitHub'] },
	],
	education: [
		{
			title: 'Engenharia de Sistemas',
			institution: 'Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional (UNEFA)',
		},
		{ title: 'Técnico de Manutenção e Reparação de Computadores', institution: 'Instituto Josefa Camejo' },
		{
			title: 'Técnico de Gestão de Empresas Informatizada',
			institution: 'ATCE (Academia Técnica de Capacitación Empresarial)',
		},
	],
	languages: [
		{ name: 'Espanhol', level: 'Nativo' },
		{ name: 'Inglês', level: 'B1 (QECR)', note: 'Trabalho escrito diariamente em inglês: especificações, documentação e pull requests.' },
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
