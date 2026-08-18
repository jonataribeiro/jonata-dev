import { curriculoUrl, profile } from '../../data/profile'
import { Icon } from '../ui/Icon'
import { TechIcon } from '../ui/TechIcon'

export function Footer() {
  const year = new Date().getFullYear()
  const email = profile.channels[0]

  const contactLinks = [
    ...profile.social,
    ...(email ? [email] : []),
    profile.whatsapp,
  ]

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-brand">
            {profile.firstName.toUpperCase()}
            <span> {profile.lastName.toUpperCase()}</span>
          </p>
          <p className="footer-role">{profile.role}</p>
        </div>

        <p className="footer-built">
          <span className="footer-built-label">Construído e personalizado com</span>
          <span className="footer-built-list">
            {profile.builtWith.map((tech) => (
              <span key={tech} className="footer-built-item">
                <TechIcon tech={tech} size={12} />
                {tech}
              </span>
            ))}
            e IA aplicada ao processo de desenvolvimento
          </span>
        </p>

        <ul className="footer-social" aria-label="Contatos">
          {contactLinks.map((channel) => {
            const external = /^https?:/.test(channel.href)
            return (
              <li key={channel.href}>
                <a
                  href={channel.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={channel.label}
                  title={channel.label}
                  className="whatsapp-hover"
                >
                  <Icon name={channel.icon} size={17} />
                </a>
              </li>
            )
          })}
        </ul>

        <p className="footer-copy">
          © {year} {profile.name}
          <span className="footer-copy-sep">·</span>
          <a href={curriculoUrl} download>
            Currículo
          </a>
        </p>
      </div>
    </footer>
  )
}