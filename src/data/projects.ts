export type Project = {
  title: string
  description: string
  tags: string[]
  links: {
    label: string
    href: string
  }[]
}

export const projects: Project[] = []