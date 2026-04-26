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
  fullName: "Jônata Emerson da Silva",
  role: "Analista & Desenvolvedor Web em formação",
  domain: "jonataribeiro.dev",
  email: "jonataribeiro.dev@gmail.com",
  emailAlt: "jonata.dev@hotmail.com",
  phone: "+55 11 97472-6780",
  location: "João Pessoa, Paraíba — Brasil",
  available: true, // Mostra o badge "Disponível para oportunidades"

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
  subheadline: "Em transição para o desenvolvimento web full-stack",
  description:
    "Servidor público concursado em João Pessoa-PB, dedicado diariamente aos estudos em React, Node.js e bancos de dados SQL. Construo este portfólio como vitrine viva da minha jornada — cada linha de código aqui é fruto de disciplina, rigor técnico e da busca pela primeira oportunidade no mercado de tecnologia.",
} as const;

/** Seção Sobre */
export const about = {
  paragraphs: [
    "Sou Jônata Emerson da Silva, analista e desenvolvedor em formação, vivendo em João Pessoa, Paraíba. Como servidor público concursado, equilibro a responsabilidade da vida pública com uma rotina disciplinada de estudos em desenvolvimento web — uma transição de carreira construída com método, paciência e foco em qualidade técnica.",
    "Minha jornada na programação é marcada por rigor acadêmico: estudo React, TypeScript, Node.js e bancos de dados SQL com a mesma seriedade que aplico nos processos administrativos. Acredito que clareza na escrita, pensamento analítico e atenção ao detalhe são habilidades que se transferem diretamente para o código limpo e para a documentação de sistemas.",
    "Este portfólio é, antes de tudo, a prova viva desse processo. Cada componente, animação e linha aqui foi pensada, refeita e refinada por mim como parte do aprendizado. Busco a primeira oportunidade no mercado de tecnologia para contribuir com pragmatismo, dedicação e a vontade real de evoluir junto com um time.",
  ],
} as const;

/** Stack de tecnologias — foco no que estudo, não no que "domino" */
export const stack = [
  {
    title: "Estudando — Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
  },
  {
    title: "Estudando — Backend & Dados",
    items: ["Node.js", "Express", "REST APIs", "SQL", "PostgreSQL"],
  },
  {
    title: "Ferramentas do dia a dia",
    items: ["Git & GitHub", "VS Code", "Figma", "Vercel", "Postman"],
  },
  {
    title: "Aprofundando agora",
    items: ["Next.js", "Testes (Vitest)", "Clean Code", "Inglês técnico"],
  },
] as const;

/** Trajetória — destaque para a transição de carreira */
export const timeline = [
  {
    type: "experience" as const,
    period: "2024 — Atual",
    title: "Construção deste portfólio & projetos de estudo",
    org: "Projeto pessoal",
    description:
      "Desenvolvimento contínuo deste site como vitrine viva do aprendizado: arquitetura em React + TypeScript, design system próprio e refinamento iterativo de cada detalhe.",
  },
  {
    type: "education" as const,
    period: "2023 — Atual",
    title: "Transição para Desenvolvimento Web Full-Stack",
    org: "Estudos estruturados (autodidata + cursos)",
    description:
      "Rotina diária de estudos em JavaScript, TypeScript, React, Node.js e SQL. Foco em fundamentos sólidos, boas práticas e construção de projetos reais para entrar no mercado.",
  },
  {
    type: "experience" as const,
    period: "Atual",
    title: "Servidor Público Concursado",
    org: "João Pessoa — PB",
    description:
      "Atuação com responsabilidade pública, documentação de sistemas, estruturação de processos administrativos e visão analítica para resolução de problemas estruturais.",
  },
  {
    type: "experience" as const,
    period: "Trajetória",
    title: "Primeiros passos na tecnologia",
    org: "Estudos autodidatas",
    description:
      "Contato inicial com lógica de programação, HTML, CSS e otimização de hardware. Base prática que despertou o interesse em construir software de qualidade.",
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
      "Site pessoal construído do zero com React, TypeScript, Tailwind e Framer Motion. Design system próprio, totalmente responsivo, com foco em performance, acessibilidade e código legível. É a vitrine viva do meu aprendizado.",
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
