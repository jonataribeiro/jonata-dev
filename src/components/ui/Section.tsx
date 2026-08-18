import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { MaskReveal } from './MaskReveal'

type SectionProps = {
  id: string
  kicker: string
  title: ReactNode
  children: ReactNode
  exit?: boolean
}

export function Section({ id, kicker, title, children, exit = false }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal exit={exit}>
          <div className="section-head">
            <p className="section-kicker">{kicker}</p>
            <MaskReveal>
              <h2 id={`${id}-title`} className="section-title">
                {title}
              </h2>
            </MaskReveal>
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  )
}