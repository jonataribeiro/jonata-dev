import { projects } from '../../data/projects'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { ProjectRow } from './ProjectRow'

const placeholderSlots = ['01', '02', '03']

export function Projects() {
  return (
    <Section id="projetos" kicker="04 — PROJETOS" title="Onde estudo vira software." exit>
      <p className="work-intro">
        Cada projeto aqui representa uma etapa do meu aprendizado — mas não apenas um exercício. São
        ambientes onde testo decisões técnicas, erro, refaço e transformo conceitos em algo que
        realmente funciona.
      </p>
      {projects.length === 0 ? (
        <ul className="project-rows" aria-hidden="true">
          {placeholderSlots.map((slot) => (
            <li key={slot} className="project-line">
              <div className="project-row">
                <span className="project-num">{slot}</span>
                <div className="project-main">
                  <span className="project-blank-line" />
                  <span className="project-blank-line project-blank-short" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="project-rows">
          {projects.map((project, index) => (
            <Reveal
              as="li"
              key={project.title}
              className="project-line"
              direction="right"
              delay={index * 70}
            >
              <ProjectRow
                project={project}
                num={String(index + 1).padStart(2, '0')}
              />
            </Reveal>
          ))}
        </ul>
      )}
    </Section>
  )
}