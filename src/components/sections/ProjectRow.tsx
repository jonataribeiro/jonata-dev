import { useRef, type MouseEvent } from 'react'
import type { Project } from '../../data/projects'
import { Icon } from '../ui/Icon'

type ProjectRowProps = {
  project: Project
  num: string
}

export function ProjectRow({ project, num }: ProjectRowProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = ref.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    element.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    element.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} className="project-row" onMouseMove={handleMove}>
      <span className="project-num">{num}</span>
      <div className="project-main">
        <div className="project-topline">
          <span className="project-category">{project.category}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        {project.subtitle ? (
          <p className="project-subtitle">{project.subtitle}</p>
        ) : null}
        {project.description.split('\n\n').map((paragraph) => (
          <p key={paragraph} className="project-description">
            {paragraph}
          </p>
        ))}
        <ul className="project-tech">
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="project-tech-tag">{tag}</span>
            </li>
          ))}
        </ul>
        {project.links.length > 0 ? (
          <div className="project-cta-row">
            {project.links.map((link) => (
              <a
                key={link.href}
                className="project-cta"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <Icon name="external" size={14} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <div className="project-preview" aria-hidden="true">
        <p className="project-spec-label">O QUE ESTOU TESTANDO</p>
        <ul className="project-spec-list">
          {project.attributes.map((attribute) => (
            <li key={attribute} className="project-spec-item">
              <span className="project-spec-dot" />
              <span>{attribute}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}