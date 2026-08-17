import { profile } from '../../data/profile'

const navItems = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#formacao', label: 'Formação' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
] as const

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio">
          {profile.firstName}
          <span>.dev</span>
        </a>
        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}