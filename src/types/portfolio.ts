export interface SiteConfig {
  name: string
  fullName: string
  role: string
  domain: string
  email: string
  emailAlt: string
  phone: string
  location: string
  available: boolean
  whatsapp: {
    number: string
    message: string
  }
  social: {
    github: string
    linkedin: string
  }
  resumeUrl: string
}

export interface HeroConfig {
  greeting: string
  headline: string
  subheadline: string
  description: string
}

export interface AboutConfig {
  title: string
  paragraphs: string[]
}

export interface StackCategory {
  title: string
  level: string
  items: string[]
}

export interface TimelineItem {
  type: "experience" | "education"
  period: string
  title: string
  org: string
  description: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  live?: string
  featured?: boolean
}