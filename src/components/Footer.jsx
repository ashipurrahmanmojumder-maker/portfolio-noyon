import { personalInfo } from '../data/data'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">

        {/* Logo */}
        <a href="#home" onClick={scrollTop} className="nav-logo" aria-label="Back to top">
          <span className="logo-text">{personalInfo.initials}</span>
          <span className="logo-dot" aria-hidden="true" />
        </a>

        {/* Copyright */}
        <p className="footer-copy">
          © {year} <span>{personalInfo.name}</span>. All rights reserved.
          &nbsp;·&nbsp; Designed &amp; Built with ❤️
        </p>

        {/* Back to top */}
        <a href="#home" onClick={scrollTop} className="footer-back" aria-label="Scroll to top">
          ↑ Back to top
        </a>
      </div>
    </footer>
  )
}
