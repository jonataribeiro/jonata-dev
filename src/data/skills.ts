export type SkillGroup = {
  category: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    description: 'Desenvolvimento de APIs e automação de processos.',
    items: ['Python', 'APIs', 'Automação'],
  },
  {
    category: 'Banco de Dados',
    description: 'Modelagem, consultas e administração de banco de dados.',
    items: ['SQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'DBA'],
  },
  {
    category: 'Data & AI',
    description: 'Engenharia e análise de dados com inteligência artificial.',
    items: ['Data', 'AI'],
  },
]