export type SkillRow = {
  index: string
  category: string
  description: string
  items: string[]
}

export const skillRows: SkillRow[] = [
  {
    index: '01',
    category: 'BACKEND',
    description: 'APIs, serviços e automação de processos.',
    items: ['Python', 'APIs', 'Automation'],
  },
  {
    index: '02',
    category: 'DATABASE',
    description: 'Modelagem, consultas e administração.',
    items: ['PostgreSQL', 'SQL Server', 'Oracle', 'SQL', 'DBA'],
  },
  {
    index: '03',
    category: 'DATA',
    description: 'Dados estruturados e análise de informação.',
    items: ['SQL', 'Data Engineering', 'Analytics'],
  },
  {
    index: '04',
    category: 'AI',
    description: 'Inteligência artificial aplicada a problemas reais.',
    items: ['Artificial Intelligence', 'LLMs', 'Automation'],
  },
  {
    index: '05',
    category: 'COMPLEMENTARY',
    description: 'Ferramentas de apoio para transformar as competências em produtos reais.',
    items: [
      'React',
      'TypeScript',
      'Vite',
      'HTML',
      'CSS',
      'Git/GitHub',
      'Docker',
      'VS Code',
      'Beekeeper Studio',
    ],
  },
]