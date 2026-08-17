import { profile } from '../../data/profile'
import { Section } from '../ui/Section'
import { Icon } from '../ui/Icon'

export function Contact() {
  return (
    <Section id="contato" kicker="Contato" title="Vamos conversar?">
      {profile.channels.length === 0 ? (
        <div className="contact">
          <p>
            Obrigado pelo interesse! Em breve os canais de contato estarão
            disponíveis neste site.
          </p>
          <p className="contact-domain">{profile.siteUrl}</p>
        </div>
      ) : (
        <ul className="contact-list">
          {profile.channels.map((channel) => (
            <li key={channel.href}>
              <a href={channel.href} target="_blank" rel="noopener noreferrer">
                <Icon name={channel.icon} size={20} aria-hidden="true" />
                <span>
                  <strong>{channel.label}</strong>
                  <span>{channel.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}