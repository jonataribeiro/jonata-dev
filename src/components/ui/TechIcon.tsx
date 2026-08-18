import type { IconType } from 'react-icons'
import {
  SiPython,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiVite,
  SiHtml5,
  SiCss,
  SiBeekeeperstudio,
} from 'react-icons/si'
import { VscVscode, VscDatabase } from 'react-icons/vsc'

type TechIconProps = {
  tech: string
  size?: number
}

const iconByTech: Record<string, IconType> = {
  python: SiPython,
  'node.js': SiNodedotjs,
  nodejs: SiNodedotjs,
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  postgresql: SiPostgresql,
  'sql server': VscDatabase,
  oracle: VscDatabase,
  mongodb: SiMongodb,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  'git/github': SiGithub,
  vite: SiVite,
  html: SiHtml5,
  css: SiCss,
  'vs code': VscVscode,
  beekeeper: SiBeekeeperstudio,
  'beekeeper studio': SiBeekeeperstudio,
}

export function TechIcon({ tech, size = 13 }: TechIconProps) {
  const IconComponent = iconByTech[tech.trim().toLowerCase()]
  if (!IconComponent) return null
  return <IconComponent size={size} aria-hidden="true" focusable="false" className="tech-icon" />
}