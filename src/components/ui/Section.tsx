import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  kicker: string
  title: string
  children: ReactNode
}

export function Section({ id, kicker, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <p className="section-kicker">{kicker}</p>
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}