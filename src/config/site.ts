/**
 * ============================================================
 * CONFIGURAÇÃO CENTRAL DO PORTFÓLIO — Jônata Ribeiro
 * ============================================================
 */

export const site = {
  /** Identidade pessoal */
  name: "Jônata Ribeiro",
  fullName: "Jônata Emerson da Silva Ribeiro",
  role: "Desenvolvedor Full-Stack em formação",
  domain: "jonataribeiro.dev",
  email: "jonataribeiro.dev@gmail.com",
  emailAlt: "jonata.dev@hotmail.com",
  phone: "+55 11 97472-6780",
  location: "João Pessoa, Paraíba — Brasil",
  available: true,

  /** * WhatsApp 
   * O link api.whatsapp.com/send funciona tanto para mobile quanto web
   */
  whatsapp: {
    number: "5511974726780",
    message: "Olá, Jônata! Vi seu portfólio em jonataribeiro.dev e gostaria de conversar sobre uma oportunidade profissional.",
  },

  /** Redes sociais */
  social: {
    github: "https://github.com/jonataribeiro",
    linkedin: "https://www.linkedin.com/in/jonataribeiro",
  },

  /** Currículo em PDF */
  resumeUrl: "/curriculo.pdf",
} as const;

/** * AJUSTE TÉCNICO NO COMPONENTE DE CONTATO:
 * Para garantir que o link do WhatsApp funcione em todos os lugares, 
 * certifique-se que o seu Contact.tsx usa este formato de link:
 * * const whatsappHref = `https://api.whatsapp.com/send?phone=${site.whatsapp.number}&text=${encodeURIComponent(site.whatsapp.message)}`;
 */

/** Texto principal da Hero */
export const hero = {
  greeting: "Olá, eu sou",
  headline: "Jônata Ribeiro",
  subheadline: "Analista e Desenvolvedor Full-Stack em construção",
  description:
    "Construindo software com a mesma disciplina que aplico no serviço público: precisão, processo e responsabilidade. Foco em React, TypeScript, SQL Server, Oracle Developer, MySql — não para apenas rodar, mas para durar.",
} as const;

/** Seção Sobre */
export const about = {
  title: "Transição estratégica para Análise de Dados e o desenvolvimento Web.",
  paragraphs: [
    "Minha transição para o desenvolvimento Web Full-Stack é uma evolução natural da minha vocação por resultados. No setor operacional, aprendi que a eficácia é fruto de disciplina, método e um compromisso real com quem recebe o trabalho. Hoje, levo essa responsabilidade para cada linha de código que escrevo. Utilizo React, TypeScript e Node.js com um objetivo claro: construir soluções digitais que sejam, antes de tudo, sólidas, úteis e feitas para durar.",
    "Para mim, o desenvolvimento de software é uma ferramenta de impacto. Busco desafios que exijam não apenas conhecimento técnico, mas o compromisso de traduzir complexidade em soluções funcionais, úteis e feitas para durar."
  ],
} as const;

/** Stack de tecnologias */
export const stack = [
  {
    title: "Frontend — estudando",
    level: "uso" as const,
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3", "Fastify"],
  },
  {
    title: "Backend — em uso",
    level: "uso" as const,
    items: ["Node.js", "Express", "REST APIs", "Docker", "Git & GitHub"],
  },
  {
    title: "Banco de Dados — SQL & Dados | Intermediário",
    level: "estudo" as const,
    items: ["SQL", "Oracle Developer", "MySQL", "Prisma ORM", "Queries & Joins"],
  },
  {
    title: "Estudando — Intermediário",
    level: "estudo" as const,
    items: ["Next.js", "Testes (Vitest)", "Inglês técnico"],
  },
] as const;

/** Filosofia de Código */
export const philosophy = {
  intro: "Eu acredito que um desenvolvedor não se define apenas pelo que sabe, mas pelo como ele resolve. Para mim, todo projeto segue três regras:",
  pillars: [
    { number: "01", title: "Legibilidade", text: "Se o código não for fácil de manter, ele não está pronto. Clareza vence esperteza." },
    { number: "02", title: "Performance", text: "A experiência do usuário é a métrica mais importante. Cada decisão técnica é medida por ela." },
    { number: "03", title: "Propósito", text: "Tecnologia é ferramenta. O objetivo final é sempre resolver um problema real." },
  ],
} as const;

/** Trajetória */
export const timeline = [
  {
    type: "experience" as const,
    period: "2024 — Atual",
    title: "Analista de Sistemas | Desenvolvimento Full-Stack",
    org: "Projeto pessoal — jonataribeiro.dev",
    description: "Foco total em arquitetura de software, padrões de projeto e Clean Code. Construção deste portfólio como ambiente real de testes para arquitetura escalável.",
  },
  {
    type: "education" as const,
    period: "2023 — Atual",
    title: "Estudos estruturados em Desenvolvedor Web e Analista de Sistemas",
    org: "Aprendizado contínuo",
    description: "Rotina diária dedicada a JavaScript, TypeScript, React, Node.js, SQL Server, Oracle Database, MySql e Python.",
  },
  {
    type: "experience" as const,
    period: "Atual",
    title: "Servidor Público | Área Operacional",
    org: "João Pessoa — PB",
    description: "Minha formação técnica é acompanhada por um estudo diário e prático das tecnologias que utilizo.",
  },
  {
    type: "experience" as const,
    period: "Trajetória",
    title: "Primeiros passos na tecnologia",
    org: "Aprendizado autodidata",
    description: "Contato inicial com SQL Server, Oracle Database, HTML, CSS e Python.",
  },
] as const;

/** Projetos */
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
    description: "Site pessoal construído do zero com React, TypeScript, Tailwind e Framer Motion. Foco em performance e acessibilidade.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/jonataribeiro/seu-repositorio", // Substitua pelo link do repo deste projeto
    live: "https://jonataribeiro.dev",
    featured: true,
  },
  {
    title: "Estudos em React",
    description: "Mini-projetos praticando hooks, gerenciamento de estado e APIs.",
    tags: ["React", "TypeScript", "REST APIs"],
    github: "https://github.com/jonataribeiro/seu-repo-react",
    live: "",
  },
  {
    title: "API Node + SQL",
    description: "Estudo de backend com Node.js, Express e modelagem SQL.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/jonataribeiro/seu-repo-node",
    live: "",
  },
];