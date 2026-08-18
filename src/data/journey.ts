export type JourneyItem = {
  index: string;
  title: string;
  detail?: string;
  description: string;
};

export const journeyIntro =
  "Minha entrada na tecnologia está sendo construída de forma prática e gradual. A faculdade me dá a base acadêmica; os estudos complementares ampliam essa base; e os projetos são onde transformo conhecimento em experiência prática.";

export const journey: JourneyItem[] = [
  {
    index: "01",
    title: "FORMAÇÃO",
    detail: "Análise e Desenvolvimento de Sistemas",
    description:
      "Cruzeiro do Sul / Braz Cubas — formação acadêmica em andamento, com base em desenvolvimento de software, programação, banco de dados e fundamentos de engenharia de software.",
  },
  {
    index: "02",
    title: "STACK TÉCNICA EM CONSTRUÇÃO",
    detail: "Backend & Database",
    description:
      "Meu principal eixo de desenvolvimento está em Backend e Banco de Dados, com estudos em Python, APIs, SQL, PostgreSQL, SQL Server e Oracle.",
  },
  {
    index: "03",
    title: "COMPLEMENTARES",
    detail: "Programação, Data & AI",
    description:
      "Além do eixo principal, mantenho estudos complementares em desenvolvimento de software, automação, Python, Data e Inteligência Artificial.",
  },
  {
    index: "04",
    title: "PRÁTICA",
    detail: "Projetos próprios",
    description:
      "Uso projetos reais como laboratório para aplicar arquitetura, banco de dados, APIs, automação, Git e boas práticas de desenvolvimento.",
  },
];
