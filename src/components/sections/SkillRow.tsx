import { useRef, type MouseEvent } from 'react'
import type { SkillRow as SkillRowData } from '../../data/skills'
import { TechIcon } from '../ui/TechIcon'

type SkillRowProps = {
  row: SkillRowData
}

export function SkillRow({ row }: SkillRowProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = ref.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    element.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    element.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} className="skill-row" onMouseMove={handleMove}>
      <span className="skill-index">{row.index}</span>
      <div className="skill-main">
        <h3 className="skill-name">{row.category}</h3>
        <p className="skill-sub">{row.description}</p>
      </div>
      <ul className="skill-tags">
        {row.items.map((item) => (
          <li key={item}>
            <span className="skill-tag">
              <TechIcon tech={item} size={13} />
              {item}
            </span>
          </li>
        ))}
      </ul>
      <span className="skill-arrow" aria-hidden="true">
        →
      </span>
    </div>
  )
}