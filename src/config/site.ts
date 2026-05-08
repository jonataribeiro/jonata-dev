import { 
  SiteConfig, 
  HeroConfig, 
  AboutConfig, 
  StackCategory, 
  TimelineItem, 
  Project 
} from "../types/portfolio";

export const site: SiteConfig = {
  name: "Jônata Ribeiro",
  fullName: "Jônata Emerson da Silva Ribeiro",
  role: "Desenvolvedor Full-Stack em formação",
  domain: "jonataribeiro.tech",
  email: "jonataribeiro.tech@gmail.com",
  emailAlt: "jonata.dev@hotmail.com",
  phone: "+55 11 97472-6780",
  location: "João Pessoa, Paraíba — Brasil",
  available: true,
  whatsapp: {
    number: "5511974726780",
    message: "Olá, Jônata! Vi seu portfólio em jonataribeiro.tech e gostaria de conversar sobre uma oportunidade profissional.",
  },
  social: {
    github: "https://github.com/jonataribeiro",
    linkedin: "https://www.linkedin.com/in/jonataribeiro",
  },
  resumeUrl: "/curriculo.pdf",
};

export const hero: HeroConfig = {
  greeting: "Olá, eu sou",
  headline: "Jônata Ribeiro",
  subheadline: "Analista e Desenvolvedor Full-Stack em construção",
  description: "Construindo software com a mesma disciplina que aplico no serviço público: precisão, processo e responsabilidade. Foco em React, TypeScript, SQL Server, Oracle Developer, MySql — Sigo em constante evolução, sempre buscando novos desafios e o que há de melhor para aprender.",
};

export const about: AboutConfig = {
  title: "Transição estratégica para Análise de Dados e o Desenvolvimento Web.",
  paragraphs: [
    "Minha transição para o Desenvolvimento Web Full-Stack é uma evolução natural da minha vocação por resultados. No setor operacional, aprendi que a eficácia é fruto de disciplina, método e um compromisso real com quem recebe o trabalho. Hoje, levo essa responsabilidade para cada linha de código que escrevo.",
    "Para mim, o desenvolvimento de software é uma ferramenta de impacto. Busco desafios que exijam não apenas conhecimento técnico, mas o compromisso de traduzir complexidade em soluções funcionais, úteis e feitas para durar."
  ],
};

export const stack: readonly StackCategory[] = [
  {
    title: "Frontend — estudando",
    level: "uso",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3", "Fastify"],
  },
  {
    title: "Backend — em uso",
    level: "uso",
    items: ["Node.js", "Express", "REST APIs", "Docker"],
  },
  {
    title: "Banco de Dados — SQL & Dados | Intermediário",
    level: "estudo",
    items: ["SQL", "Oracle Developer", "MySQL", "Prisma ORM", "Queries & Joins"],
  },
  {
    title: "Outros Estudos — Intermediário",
    level: "estudo",
    items: ["Next.js", "Testes (Vitest)", "Git & GitHub", "Inglês técnico"],
  },
];

export const timeline: readonly TimelineItem[] = [
  {
    type: "experience",
    period: "2024 — Atual",
    title: "Analista de Sistemas | Desenvolvimento Full-Stack",
    org: "Projeto pessoal — jonataribeiro.tech",
    description: "Construção deste portfólio como ambiente real de testes para arquitetura escalável. Foco total em arquitetura de software, padrões de projeto e Clean Code",
  },
  {
    type: "education",
    period: "2023 — Atual",
    title: "Estudos estruturados em Desenvolvedor Web e Analista de Sistemas",
    org: "Aprendizado contínuo",
    description: "Rotina diária dedicada a JavaScript, TypeScript, React, Node.js, SQL Server, Oracle Database, MySql e Python.",
  },
  {
    type: "experience",
    period: "Atual",
    title: "Servidor Público | Área Operacional",
    org: "João Pessoa — PB",
    description: "Atuação no setor operacional do serviço público, onde desenvolvi uma forte cultura de responsabilidade, disciplina no cumprimento de metas e excelência no atendimento às demandas.",
  },
  {
    type: "experience",
    period: "Trajetória",
    title: "Primeiros passos na tecnologia",
    org: "Aprendizado autodidata",
    description: "Minha formação técnica é acompanhada por um estudo diário e prático das tecnologias que utilizo. Contato inicial com SQL Server, Oracle Database, HTML, CSS e Python.",
  },
];

export const projects: readonly Project[] = [
  {
    title: "Portfólio Profissional — jonataribeiro.tech",
    description: "Site-Portfólio Profissional construído e personalizado do zero com React, TypeScript, Tailwind e Framer Motion. Foco em performance e acessibilidade.",
    tags: ["React", "VS Code", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/jonataribeiro/meu-portfolio",
    live: "https://www.linkedin.com/in/jonataribeiro",
    featured: true,
  },
  {
    title: "Estudos em React - Full Stack",
    description: "Construção deste portfólio como ambiente real de testes para arquitetura escalável.",
    tags: ["React", "TypeScript", "Node.js", "REST APIs"],
    github: "https://github.com/jonataribeiro/estudos-html-css",
  },
  {
    title: "API Node + Banco de Dados SQL",
    description: "Estudo de backend com Node.js, Express, Prisma, sistemas de Modelagem e SQL.",
    tags: ["Oracle Developer", "Prisma", "MySQL", "SQL Server"],
    github: "https://github.com/jonataribeiro/estudos",
  },
];