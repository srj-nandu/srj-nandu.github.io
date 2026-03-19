const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <nav className="site-nav">
      <a className="brand-mark" href="#root" aria-label="Sooraj S home">
        Sooraj S
      </a>

      <div className="nav-links">
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>

      <a className="nav-cta" href="mailto:srj.nandu@gmail.com">
        Get in touch
      </a>
    </nav>
  )
}

export default Header
