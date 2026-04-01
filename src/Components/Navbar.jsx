import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Our Story', href: '#about' },
  { label: 'Solution Lab', href: '#skills' },
  { label: 'Clients', href: '#portfolio' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Blog', href: '#resume' },
]

function Navbar() {
  return (
    <motion.header
      className="topbar"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="topbar-nav" aria-label="Primary">
        <div className="topbar-links topbar-links-left">
          {navLinks.slice(0, 3).map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="topbar-brand" href="#home" aria-label="Sooraj S home">
          <span className="topbar-brand-mark" aria-hidden="true" />
        </a>

        <div className="topbar-links topbar-links-right">
          {navLinks.slice(3).map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="topbar-cta" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar
