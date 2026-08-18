export type ContactChannel = {
  label: string
  value: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'whatsapp'
}

export const curriculoUrl = `${import.meta.env.BASE_URL}curriculo.pdf`

export const profile = {
  name: 'Jônata Ribeiro',
  firstName: 'Jônata',
  lastName: 'Ribeiro',
  siteUrl: 'https://jonataribeiro.dev',
  role: 'Backend • Database • Data • AI',
  intro:
    'Construo a parte invisível do software — APIs, bancos de dados e automação que fazem as coisas funcionarem por baixo da superfície.',
  about: [
    'Antes de pensar em código, gosto de entender o problema.',
    'É daí que começa meu interesse por tecnologia: compreender o contexto, organizar os dados, pensar na estrutura e então construir uma solução que realmente faça sentido.',
    'Hoje concentro meus estudos em Backend e Banco de Dados, trabalhando com Python, APIs, SQL, PostgreSQL, SQL Server e Oracle. Também estudo automação, Data e Inteligência Artificial como extensões desse caminho.',
    'O objetivo é construir uma base técnica sólida — entendendo o que acontece por trás da aplicação, desde a regra de negócio e a API até os dados que sustentam o sistema.',
  ],
  aboutHighlights: [
    {
      index: '01',
      title: 'PENSAMENTO DE ENGENHARIA',
      description: 'Problemas, contexto e arquitetura antes de qualquer linha de código.',
    },
    {
      index: '02',
      title: 'DADOS COMO FUNDAMENTO',
      description: 'Decisões técnicas guiadas pelos dados reais de cada situação.',
    },
    {
      index: '03',
      title: 'ESTUDO DIÁRIO',
      description: 'Prática constante em backend, dados e inteligência artificial.',
    },
  ],
  whatsapp: {
    label: 'WhatsApp',
    value: '11974726780',
    href: 'https://wa.me/5511974726780?text=Ol%C3%A1%2C%20J%C3%B4nata!%20Vi%20seu%20portf%C3%B3lio%20em%20jonataribeiro.dev%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20profissional.',
    icon: 'whatsapp',
  } as ContactChannel,
  channels: [
    {
      label: 'E-mail',
      value: 'contato@jonataribeiro.dev',
      href: 'mailto:contato@jonataribeiro.dev',
      icon: 'mail',
    },
    {
      label: 'E-mail',
      value: 'contato@jonataribeiro.tech',
      href: 'mailto:contato@jonataribeiro.tech',
      icon: 'mail',
    },
    {
      label: 'Gmail',
      value: 'jonataribeiro.dev@gmail.com',
      href: 'mailto:jonataribeiro.dev@gmail.com',
      icon: 'mail',
    },
  ] as ContactChannel[],
  social: [
    {
      label: 'GitHub',
      value: 'github.com/jonataribeiro',
      href: 'https://github.com/jonataribeiro',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/jonataribeiro',
      href: 'https://www.linkedin.com/in/jonataribeiro',
      icon: 'linkedin',
    },
  ] as ContactChannel[],
  builtWith: ['React', 'TypeScript', 'Vite', 'CSS', 'VS Code', 'Git/GitHub'] as const,
} as const