import { journey, journeyIntro } from '../../data/journey'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

export function Journey() {
  return (
    <Section
      id="journey"
      kicker="03 — TRAJETÓRIA"
      title={
        <>
          De onde estou partindo. <span className="neon">Para onde estou construindo meu caminho.</span>
        </>
      }
      exit
    >
      <p className="journey-intro">{journeyIntro}</p>
      <ol className="journey-list">
        {journey.map((item, index) => (
          <Reveal
            as="li"
            key={item.title}
            className="journey-item"
            direction="right"
            delay={index * 70}
          >
            <article className="journey-card">
              <span className="journey-index">{item.index}</span>
              <div className="journey-main">
                <h3 className="journey-title">{item.title}</h3>
                {item.detail ? <p className="journey-detail">{item.detail}</p> : null}
                <p className="journey-description">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}