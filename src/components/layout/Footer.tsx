import { profile } from '../../data/profile'

const footerLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          {profile.name} — {profile.role}
        </p>
        <nav aria-label="Links do rodapé">
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-copy">
          © {year} {profile.siteUrl}
        </p>
      </div>
    </footer>
  )
}