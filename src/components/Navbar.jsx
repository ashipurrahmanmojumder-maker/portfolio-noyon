import { useState, useEffect } from 'react'
import { personalInfo, navLinks } from '../data/data'
import { useNavScroll } from '../hooks/useScrollAnimation'
import { useTheme } from '../contexts/ThemeContext'

export default function Navbar() {
  const { scrolled, activeSection } = useNavScroll()
  const { toggle, isDark }          = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">

        {/* ── Logo ── */}
        <a href="#home" className="nav-logo" onClick={e => handleNav(e, '#home')} aria-label="Home">
          <span className="logo-text">{personalInfo.initials}</span>
          <span className="logo-dot" aria-hidden="true" />
        </a>

        {/* ── Desktop + Mobile nav links ── */}
        <ul className={`nav-links${mobileOpen ? ' open' : ''}`} role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Hire Me — visible only inside mobile full-screen menu */}
          <li className="nav-hire-mobile">
            <a href="#contact" className="nav-hire" onClick={e => handleNav(e, '#contact')}>
              Hire Me ✉️
            </a>
          </li>
        </ul>

        {/* ── Right cluster: theme toggle + single Hire Me ── */}
        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light Mode' : 'Dark Mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* ONE Hire Me button on desktop */}
          <a
            href="#contact"
            className="nav-hire"
            onClick={e => handleNav(e, '#contact')}
          >
            Hire Me ✉️
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
