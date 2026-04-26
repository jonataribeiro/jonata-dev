/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DO PORTFÓLIO
 * ============================================================
 *  Edite este arquivo para personalizar TODO o conteúdo do site
 *  sem precisar mexer nos componentes. Cada seção do portfólio
 *  consome dados daqui.
 *
 *  Dica: depois de editar, salve o arquivo — o Vite recarrega
 *  automaticamente no preview.
 * ============================================================
 */

export const site = {
  /** Identidade pessoal */
  name: "Jônata Ribeiro",
  role: "Desenvolvedor Front-End",
  domain: "jonataribeiro.dev",
  email: "contato@jonataribeiro.dev",
  location: "Brasil",
  available: true, // Mostra o badge "Disponível para oportunidades"

  /** WhatsApp — formato internacional, apenas números (ex.: 55 + DDD + número) */
  whatsapp: {
    number: "5511999999999", // ⚠️ TROQUE pelo seu número real
    message: "Olá Jônata! Vi seu portfólio e gostaria de conversar.",
  },

  /** Redes sociais — deixe vazio "" para esconder o ícone */
  social: {
    github: "https://github.com/jonataribeiro",
    linkedin: "https://linkedin.com/in/jonataribeiro",
  },

  /** Currículo em PDF — coloque seu arquivo em /public/curriculo.pdf */
  resumeUrl: "/curriculo.pdf",
} as const;

/** Texto principal da Hero */
export const hero = {
  greeting: "Olá, mundo. Eu sou",
  headline: "Jônata Ribeiro",
  subheadline: "Construindo experiências web modernas",
  description:
    "Desenvolvedor focado em criar interfaces limpas, performáticas e acessíveis. Apaixonado por código bem escrito, design intencional e por transformar ideias em produtos reais.",
} as const;

/** Seção Sobre */
export const about = {
  paragraphs: [
    "Sou desenvolvedor em formação, focado em desenvolvimento web moderno com JavaScript, TypeScript e o ecossistema React. Acredito que o melhor código é aquele que outras pessoas conseguem ler, evoluir e confiar.",
    "Cada projeto que construo é um passo intencional: aprendo uma ferramenta nova, refino um conceito de design ou resolvo um problema real. Meu objetivo é entrar no mercado e contribuir desde o primeiro dia.",
    "Quando não estou codando, estudo UI/UX, arquitetura de software e boas práticas que me ajudam a crescer como profissional.",
  ],
} as const;

/** Stack de tecnologias */
export const stack = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Dados",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Supabase"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Postman"],
  },
  {
    title: "Estudando agora",
    items: ["Testes (Vitest)", "Docker", "Arquitetura limpa", "Inglês técnico"],
  },
] as const;

/** Timeline acadêmica e profissional */
export const timeline = [
  {
    type: "experience" as const,
    period: "2024 — Atual",
    title: "Projetos pessoais & Open Source",
    org: "Autônomo",
    description:
      "Desenvolvendo aplicações web com React e TypeScript, contribuindo em projetos open source e construindo um portfólio sólido.",
  },
  {
    type: "education" as const,
    period: "2023 — Atual",
    title: "Análise e Desenvolvimento de Sistemas",
    org: "Sua Faculdade aqui",
    description:
      "Graduação com foco em programação, banco de dados, arquitetura de sistemas e metodologias ágeis.",
  },
  {
    type: "education" as const,
    period: "2023",
    title: "Formação Front-End Completa",
    org: "Plataforma de cursos (Rocketseat / Origamid / Alura — ajuste)",
    description:
      "Curso intensivo de HTML, CSS, JavaScript, React, TypeScript, Git e boas práticas de desenvolvimento web.",
  },
  {
    type: "experience" as const,
    period: "2022",
    title: "Início na programação",
    org: "Estudos autodidatas",
    description:
      "Primeiro contato com lógica de programação, HTML e CSS. Construção dos primeiros sites estáticos.",
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
    title: "Dashboard Analytics",
    description:
      "Painel de métricas em tempo real com gráficos interativos, filtros avançados e tema escuro. Construído com foco em performance e acessibilidade.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "API de Tarefas",
    description:
      "REST API com autenticação JWT, validação, testes automatizados e documentação Swagger.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    github: "#",
    live: "",
  },
  {
    title: "E-commerce SPA",
    description:
      "Loja virtual com carrinho persistente, checkout simulado e integração com API de produtos.",
    tags: ["React", "Context API", "Stripe", "Vite"],
    github: "#",
    live: "#",
  },
  {
    title: "Landing Pages",
    description:
      "Coleção de landing pages responsivas e animadas para portfólios, SaaS e produtos digitais.",
    tags: ["HTML", "CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
];
