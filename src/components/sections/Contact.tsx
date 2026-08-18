import { profile } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { MaskReveal } from '../ui/MaskReveal'
import { Magnetic } from '../ui/Magnetic'
import { Icon } from '../ui/Icon'

export function Contact() {
  const channels = [...profile.channels, ...profile.social]

  return (
    <section id="contato" className="contact-section" aria-labelledby="contato-title">
      <div className="container">
        <Reveal exit>
          <div className="contact-inner">
            <div className="contact-glow" aria-hidden="true" />
            <p className="section-kicker">05 — CONTATO</p>
            <MaskReveal>
              <h2 id="contato-title" className="contact-title">
                Se existe um problema, <span className="neon">existe algo para construir.</span>
              </h2>
            </MaskReveal>
            <div className="contact-sub">
              <p>
                Estou em busca da minha primeira oportunidade profissional em tecnologia,
                especialmente em posições relacionadas a Backend, Banco de Dados e desenvolvimento de
                software.
              </p>
              <p>
                Se você procura alguém que gosta de entender o problema antes de escrever o código,
                estou aberto a conversar.
              </p>
            </div>
            <p className="contact-sign-name">
              {profile.firstName.toUpperCase()} {profile.lastName.toUpperCase()}
            </p>
            <p className="contact-sign-role">{profile.role}</p>
            <p className="contact-sign-domain">{profile.siteUrl}</p>
            <div className="contact-actions">
              <Magnetic>
                <a
                  className="btn btn-primary contact-cta"
                  href={profile.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vamos conversar?
                </a>
              </Magnetic>
              {channels.length > 0 ? (
                <ul className="contact-channels">
                  {channels.map((channel) => {
                    const external = /^https?:/.test(channel.href)
                    return (
                      <li key={channel.href}>
                        <a
                          href={channel.href}
                          {...(external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          <Icon name={channel.icon} size={18} />
                          <span>
                            <strong>{channel.label}</strong>
                            <span>{channel.value}</span>
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}