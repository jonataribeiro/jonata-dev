import { profile } from '../../data/profile'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="sobre" kicker="Sobre" title="Quem sou">
      <div className="about">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}