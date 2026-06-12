import { useState } from 'react'
import { personalInfo } from '../data/data'
import { useScrollReveal } from '../hooks/useScrollAnimation'

const CONTACT_ITEMS = [
  { icon: '📧', label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
  { icon: '📞', label: 'Phone',    value: personalInfo.phone,    href: `tel:${personalInfo.phone.replace(/\s/g,'')}` },
  { icon: '📍', label: 'Location', value: personalInfo.location, href: 'https://maps.google.com/?q=Abu+Dhabi+UAE' },
  { icon: '⭐', label: 'Fiverr',   value: `fiverr.com/${personalInfo.fiverrHandle}`, href: personalInfo.fiverr },
]

const SOCIALS = [
  { icon: '💼', label: 'Fiverr',  href: personalInfo.fiverr },
  { icon: '✉️', label: 'Email',   href: `mailto:${personalInfo.email}` },
  { icon: '📱', label: 'WhatsApp', href: `https://wa.me/${personalInfo.phone.replace(/[\s+]/g,'')}` },
]

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm]     = useState(INITIAL)
  const [sent, setSent]     = useState(false)
  const [error, setError]   = useState('')

  const [headerRef, headerVisible] = useScrollReveal()
  const [infoRef, infoVisible]     = useScrollReveal()
  const [formRef, formVisible]     = useScrollReveal()

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    const { name, email, subject, message } = form

    // Basic validation
    if (!name || !email || !message) {
      setError('Please fill in all required fields.')
      return
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')

    // Open mailto — works without a backend
    const body = encodeURIComponent(
      `Hi Asifur,\n\nMy name is ${name}.\n\n${message}\n\nBest regards,\n${name}\n${email}`
    )
    const sub  = encodeURIComponent(subject || `Portfolio Enquiry from ${name}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${sub}&body=${body}`

    setSent(true)
    setForm(INITIAL)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="section contact" aria-label="Contact">
      <div className="container">

        {/* Header */}
        <div
          ref={headerRef}
          className={`section-header reveal${headerVisible ? ' visible' : ''}`}
        >
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-sub">
            Available for packaging design projects, web development, and Android apps.
          </p>
        </div>

        <div className="contact-grid">

          {/* ── Left: info ── */}
          <div
            ref={infoRef}
            className={`reveal-left${infoVisible ? ' visible' : ''}`}
          >
            <p className="contact-tagline">
              Have a project in mind?<br />
              <span className="gradient-gold">Let's make it happen.</span>
            </p>
            <p className="contact-desc">
              Whether you need luxury packaging design for your UAE brand, a full e-commerce
              website, or an Android app — I deliver end-to-end solutions with precision and creativity.
              Reach out and let's talk.
            </p>

            {/* Contact items */}
            <div className="contact-items">
              {CONTACT_ITEMS.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="c-item"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="c-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <p className="c-label">{item.label}</p>
                    <p className="c-val">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="socials" aria-label="Social links">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            ref={formRef}
            className={`reveal-right${formVisible ? ' visible' : ''}`}
          >
            <div className="contact-form">
              <form onSubmit={onSubmit} noValidate aria-label="Contact form">

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name" className="form-label">
                      Your Name <span aria-hidden="true" style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={onChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email" className="form-label">
                      Email Address <span aria-hidden="true" style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={onChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cf-subject" className="form-label">Subject</label>
                  <input
                    id="cf-subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="Packaging Design for My Brand"
                    value={form.subject}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cf-message" className="form-label">
                    Message <span aria-hidden="true" style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    className="form-input"
                    placeholder="Tell me about your project — the more detail, the better!"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                </div>

                {/* Error */}
                {error && (
                  <p
                    role="alert"
                    style={{
                      color: '#F87171',
                      fontSize: 13,
                      marginBottom: 16,
                      padding: '10px 14px',
                      background: 'rgba(248,113,113,0.08)',
                      border: '1px solid rgba(248,113,113,0.25)',
                      borderRadius: 8,
                    }}
                  >
                    ⚠️ {error}
                  </p>
                )}

                {/* Success */}
                {sent && (
                  <p
                    role="status"
                    style={{
                      color: 'var(--green)',
                      fontSize: 13,
                      marginBottom: 16,
                      padding: '10px 14px',
                      background: 'rgba(34,197,94,0.08)',
                      border: '1px solid rgba(34,197,94,0.25)',
                      borderRadius: 8,
                    }}
                  >
                    ✅ Your email client should open — thanks for reaching out!
                  </p>
                )}

                <button type="submit" className="form-btn">
                  Send Message ✉️
                </button>

                <p style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: 'var(--text-400)' }}>
                  Or email directly: <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--gold)' }}>{personalInfo.email}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
