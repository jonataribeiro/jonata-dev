export type Project = {
  title: string
  subtitle?: string
  category: string
  description: string
  tags: string[]
  attributes: string[]
  links: {
    label: string
    href: string
  }[]
}

export const projects: Project[] = [
  {
    title: 'PORTFÓLIO PROFISSIONAL',
    subtitle: 'JONATARIBEIRO.DEV',
    category: 'PERSONAL ENGINEERING / PORTFOLIO',
    description:
      'Este site é também um dos meus primeiros laboratórios de engenharia.\n\nA aplicação foi construída para representar meu posicionamento profissional e, ao mesmo tempo, colocar em prática conceitos de desenvolvimento moderno: arquitetura de frontend, TypeScript, responsividade, acessibilidade, performance, SEO e controle de versão.\n\nMais importante que a interface é o processo por trás dela: planejar, construir, testar, corrigir e evoluir uma aplicação real.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS', 'Git', 'GitHub'],
    attributes: [
      'Arquitetura',
      'Performance',
      'Responsividade',
      'Acessibilidade',
      'SEO',
      'Experiência de usuário',
      'Organização de código',
    ],
    links: [],
  },
]