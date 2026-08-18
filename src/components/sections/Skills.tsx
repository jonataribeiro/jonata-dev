import { skillRows } from '../../data/skills'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { SkillRow } from './SkillRow'

const principal = skillRows.filter((row) => row.category !== 'COMPLEMENTARY')
const complementary = skillRows.filter((row) => row.category === 'COMPLEMENTARY')

export function Skills() {
  return (
    <Section id="direcao" kicker="02 — STACK TÉCNICA EM CONSTRUÇÃO" title="STACK TÉCNICA EM CONSTRUÇÃO" exit>
      <p className="skill-intro">
        <span className="skill-intro-lead">Uma base técnica que estou construindo na prática.</span>
        <span className="skill-intro-sub">
          Meu foco principal está em Backend, Banco de Dados e Dados, com Python, APIs, SQL e
          diferentes tecnologias de persistência. Frontend e outras ferramentas entram como
          complemento para transformar essas competências em produtos reais.
        </span>
      </p>
      <ul className="skill-rows">
        <li className="skill-group">
          <p className="skill-group-label is-primary">PRINCIPAL</p>
        </li>
        {principal.map((row, index) => (
          <Reveal as="li" key={row.index} className="skill-line" delay={index * 70}>
            <SkillRow row={row} />
          </Reveal>
        ))}
        <li className="skill-group">
          <p className="skill-group-label">COMPLEMENTAR</p>
        </li>
        {complementary.map((row, index) => (
          <Reveal
            as="li"
            key={row.index}
            className="skill-line"
            delay={(principal.length + index) * 70}
          >
            <SkillRow row={row} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}