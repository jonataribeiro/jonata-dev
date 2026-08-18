import { profile } from '../../data/profile'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

export function About() {
  return (
    <Section
      id="sobre"
      kicker="01 — SOBRE"
      title="Engenharia de software começa antes do código."
      exit
    >
      <div className="scene-rule" aria-hidden="true">
        <span />
      </div>
      <div className="about-layout">
        <Reveal direction="left">
          <div className="about-main">
            {profile.about.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'about-lead' : undefined}>
                {paragraph}
              </p>
            ))}
            <p className="about-signature">// jonataribeiro.dev</p>
          </div>
        </Reveal>
        <Reveal direction="right" delay={120}>
          <aside className="about-highlights">
            {profile.aboutHighlights.map((highlight) => (
              <div key={highlight.title} className="about-highlight">
                <span className="about-highlight-idx">{highlight.index}</span>
                <h3 className="about-highlight-title">{highlight.title}</h3>
                <p className="about-highlight-desc">{highlight.description}</p>
              </div>
            ))}
          </aside>
        </Reveal>
      </div>
    </Section>
  )
}