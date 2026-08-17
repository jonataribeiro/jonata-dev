import { profile } from '../../data/profile'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="hero-eyebrow">{profile.role}</p>
        <h1 id="hero-title" className="hero-title">
          {profile.name}
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projetos">
            Ver projetos
          </a>
          <a className="btn btn-secondary" href="#contato">
            Fale comigo
          </a>
        </div>
      </div>
    </section>
  )
}