export type ContactChannel = {
  label: string
  value: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
}

export const profile = {
  name: 'Jonata Ribeiro',
  firstName: 'Jonata',
  lastName: 'Ribeiro',
  siteUrl: 'https://jonataribeiro.dev',
  role: 'Backend • Data • AI',
  tagline:
    'Construindo sistemas, APIs e pipelines de dados com foco em performance, confiabilidade e inteligência artificial.',
  about: [
    'Desenvolvedor com foco em Backend, Dados e Inteligência Artificial.',
    'Trabalho com Python, APIs, SQL e bancos de dados relacionais como PostgreSQL, SQL Server e Oracle, além de administração de banco de dados e automação de processos.',
    'Tenho interesse em construir soluções que transformam dados em decisões, com qualidade, segurança e escalabilidade.',
  ],
  channels: [] as ContactChannel[],
} as const