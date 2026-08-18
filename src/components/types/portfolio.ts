export interface SiteConfig {
  name: string;
  fullName: string;
  role: string;
  domain: string;
  email: string;
  emailAlt: string;
  phone: string;
  location: string;
  available: boolean;
  whatsapp: {
    number: string;
    message: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
  resumeUrl: string;
  [key: string]: any;
}

export interface HeroConfig {
  greeting: string;
  headline: string;
  subheadline: string;
  description: string;
}

export interface AboutConfig {
  title: string;
  paragraphs: string[];
}

export interface StackCategory {
  readonly title: string;
  readonly level: 'uso' | 'estudo';
  readonly items: readonly string[];
}

export interface TimelineItem {
  readonly type: 'education' | 'experience';
  readonly period: string;
  readonly title: string;
  readonly org: string;
  readonly description: string;
}

export interface Project {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly github?: string;
  readonly live?: string;
  readonly featured?: boolean;
}