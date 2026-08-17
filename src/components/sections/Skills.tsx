import { skillGroups } from '../../data/skills'
import { Section } from '../ui/Section'

export function Skills() {
  return (
    <Section id="skills" kicker="Competências" title="Skills">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.category} className="skill-card">
            <h3>{group.category}</h3>
            <p>{group.description}</p>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="tag">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}