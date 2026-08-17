import { education } from '../../data/education'
import { Section } from '../ui/Section'
import { EmptyState } from '../ui/EmptyState'

export function Education() {
  return (
    <Section id="formacao" kicker="Trajetória" title="Formação">
      {education.length === 0 ? (
        <EmptyState message="A formação será publicada em breve." />
      ) : (
        <ol className="timeline">
          {education.map((item) => (
            <li key={item.title} className="timeline-item">
              <span className="timeline-period">{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      )}
    </Section>
  )
}