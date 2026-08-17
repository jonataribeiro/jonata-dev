import { projects } from '../../data/projects'
import { Section } from '../ui/Section'
import { EmptyState } from '../ui/EmptyState'
import { Icon } from '../ui/Icon'

export function Projects() {
  return (
    <Section id="projetos" kicker="Portfólio" title="Projetos">
      {projects.length === 0 ? (
        <EmptyState message="Os projetos serão publicados em breve." />
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span className="tag">{tag}</span>
                  </li>
                ))}
              </ul>
              <ul className="project-links">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <Icon name="external" size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}