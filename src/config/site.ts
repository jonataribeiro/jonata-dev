/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DO PORTFÓLIO — Jônata Ribeiro
 * ============================================================
 *  Edite este arquivo para personalizar TODO o conteúdo do site
 *  sem precisar mexer nos componentes. Cada seção do portfólio
 *  consome dados daqui.
 *
 *  Tom de voz: profissional, direto, pragmático, maduro.
 *  Destaque: experiência operacional como diferencial analítico.
 *
 *  Dica: depois de editar, salve o arquivo — o Vite recarrega
 *  automaticamente no preview.
 * ============================================================
 */

export const site = {
  /** Identidade pessoal */
  name: "Jônata Ribeiro",
  fullName: "Jônata Emerson da Silva",
  role: "Desenvolvedor Full-Stack em formação",
  domain: "jonataribeiro.dev",
  email: "jonataribeiro.dev@gmail.com",
  emailAlt: "jonata.dev@hotmail.com",
  phone: "+55 11 97472-6780",
  location: "João Pessoa, Paraíba — Brasil",
  available: true,

  /** WhatsApp — formato internacional, apenas números (55 + DDD + número) */
  whatsapp: {
    number: "5511974726780",
    message:
      "Olá, Jônata! Vi seu portfólio em jonataribeiro.dev e gostaria de conversar sobre uma oportunidade.",
  },

  /** Redes sociais — deixe vazio "" para esconder o ícone */
  social: {
    github: "https://github.com/jonataribeiro",
    linkedin: "https://www.linkedin.com/in/jonataribeiro",
  },

  /** Currículo em PDF — arquivo em /public/curriculo.pdf */
  resumeUrl: "/curriculo.pdf",
} as const;

/** Texto principal da Hero */
export const hero = {
  greeting: "Olá, eu sou",
  headline: "Jônata Ribeiro",
  subheadline: "Analista e Desenvolvedor Full-Stack em construção",
  description:
    "Construo software com a mesma disciplina que aplico no serviço público: precisão, processo e responsabilidade. Foco em React, TypeScript e Node.js — não para apenas rodar, mas para durar.",
} as const;

/** Seção Sobre — tom maduro, transição como evolução estratégica */
export const about = {
  title: "Transição estratégica para o desenvolvimento de software.",
  paragraphs: [
    "Minha base profissional foi construída no setor operacional do serviço público, onde precisão e disciplina não são opcionais — são o padrão. Trouxe essa mentalidade para o desenvolvimento web: não escrevo código apenas para rodar, mas para durar.",
    "Minha transição para Full-Stack não é uma mudança de rota, mas uma expansão da minha capacidade de resolver problemas. Como servidor público, aprendi a lidar com fluxos complexos e prazos críticos. Agora, aplico essa mesma resiliência na construção de aplicações escaláveis com React, TypeScript e Node.js.",
    "Não sou um iniciante curioso — sou um profissional focado em resultados, em busca de desafios onde a técnica encontra a utilidade real.",
  ],
} as const;

/**
 * Stack de tecnologias.
 * `level`: "uso" (uso no dia a dia / projetos) | "estudo" (aprofundando agora)
 * Edite livremente — os cards renderizam a partir desta lista.
 */
export const stack = [
  {
    title: "Frontend — em uso",
    level: "uso" as const,
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Dados — em uso",
    level: "uso" as const,
    items: ["Node.js", "Express", "REST APIs", "Git & GitHub"],
  },
  {
    title: "Estudando — SQL & Dados",
    level: "estudo" as const,
    items: ["SQL", "PostgreSQL", "MySQL", "Modelagem de dados", "Queries & Joins"],
  },
  {
    title: "Estudando — Avançado",
    level: "estudo" as const,
    items: ["Next.js", "Testes (Vitest)", "Clean Code", "Inglês técnico", "Figma"],
  },
] as const;

/** Filosofia de Código — três princípios pessoais */
export const philosophy = {
  intro:
    "Eu acredito que um desenvolvedor não se define apenas pelo que sabe, mas pelo como ele resolve. Para mim, todo projeto segue três regras:",
  pillars: [
    {
      number: "01",
      title: "Legibilidade",
      text: "Se o código não for fácil de manter, ele não está pronto. Clareza vence esperteza.",
    },
    {
      number: "02",
      title: "Performance",
      text: "A experiência do usuário é a métrica mais importante. Cada decisão técnica é medida por ela.",
    },
    {
      number: "03",
      title: "Propósito",
      text: "Tecnologia é ferramenta. O objetivo final é sempre resolver um problema real.",
    },
  ],
} as const;

/** Trajetória — operacional como diferencial analítico */
export const timeline = [
  {
    type: "experience" as const,
    period: "2024 — Atual",
    title: "Desenvolvimento Full-Stack | Formação Estruturada",
    org: "Projeto pessoal — jonataribeiro.dev",
    description:
      "Foco total em arquitetura de software, padrões de projeto e Clean Code. Construção deste portfólio como ambiente real de testes para arquitetura escalável: React, TypeScript, design system próprio e refinamento iterativo de cada detalhe.",
  },
  {
    type: "education" as const,
    period: "2023 — Atual",
    title: "Estudos estruturados em Engenharia de Software",
    org: "Autodidata + cursos técnicos",
    description:
      "Rotina diária dedicada a JavaScript, TypeScript, React, Node.js e SQL. Foco em fundamentos sólidos, boas práticas, testes e construção de projetos reais — não apenas tutoriais.",
  },
  {
    type: "experience" as const,
    period: "Atual",
    title: "Servidor Público | Área Operacional",
    org: "João Pessoa — PB",
    description:
      "Gestão de processos, resolução de problemas sob pressão e otimização de fluxos de trabalho. A base analítica que hoje me permite depurar sistemas complexos com a mesma clareza que aplico na gestão pública.",
  },
  {
    type: "experience" as const,
    period: "Trajetória",
    title: "Primeiros passos na tecnologia",
    org: "Estudos autodidatas",
    description:
      "Contato inicial com lógica de programação, HTML, CSS e otimização de hardware. A base prática que despertou o interesse em construir software de qualidade.",
  },
] as const;

/** Projetos em destaque */
type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    title: "jonataribeiro.dev — Este portfólio",
    description:
      "Site pessoal construído do zero com React, TypeScript, Tailwind e Framer Motion. Design system próprio, mobile-first, com foco em performance, acessibilidade e código legível. Ambiente real de testes para arquitetura escalável.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
    github: "#",
    live: "https://jonataribeiro.dev",
    featured: true,
  },
  {
    title: "Estudos em React (em construção)",
    description:
      "Coleção de mini-projetos em React + TypeScript praticando hooks, gerenciamento de estado, consumo de APIs e componentização.",
    tags: ["React", "TypeScript", "Hooks", "REST APIs"],
    github: "#",
    live: "",
  },
  {
    title: "API Node + SQL (em construção)",
    description:
      "Estudo prático de backend com Node.js e Express, modelagem de banco SQL, autenticação e documentação de endpoints.",
    tags: ["Node.js", "Express", "PostgreSQL", "REST"],
    github: "#",
    live: "",
  },
  {
    title: "Landing pages de prática",
    description:
      "Páginas estáticas e responsivas para reforçar HTML semântico, CSS moderno e animações sutis.",
    tags: ["HTML", "CSS", "Responsivo"],
    github: "#",
    live: "",
  },
];
