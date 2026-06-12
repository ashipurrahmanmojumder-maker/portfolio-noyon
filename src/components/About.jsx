import { useEffect } from 'react'
import { personalInfo, languages } from '../data/data'
import { useScrollReveal, useCountUp } from '../hooks/useScrollAnimation'


function StatBubble({ icon, number, label, delay }) {
  const [ref, visible] = useScrollReveal(0.3)
  const [display, startCount] = useCountUp(number)
  useEffect(() => { if (visible) startCount() }, [visible, startCount])
  return (
    <div ref={ref} className={`astat-card reveal${visible ? ' visible' : ''}`} style={{ transitionDelay: delay }}>
      <div className="astat-icon">{icon}</div>
      <div className="astat-num">{display}</div>
      <div className="astat-label">{label}</div>
    </div>
  )
}

export default function About() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [leftRef,   leftVisible]   = useScrollReveal()
  const [rightRef,  rightVisible]  = useScrollReveal()

  return (
    <section id="about" className="section about" aria-label="About Asifur Rahman Noyon">
      <div className="container">

        <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">The Person Behind the Work</h2>
        </div>

        <div className="about-v2-grid">

          {/* ── LEFT: Text content ── */}
          <div ref={leftRef} className={`about-v2-text reveal-left${leftVisible ? ' visible' : ''}`}>

            <p className="about-greeting">
              <span className="greeting-wave">👋</span>
              Hello, I'm
            </p>

            <h2 className="about-big-name">
              Asifur Rahman <span className="gradient-gold">Noyon</span>
            </h2>

            <p className="about-role-tag">
              📦 Packaging Designer &nbsp;·&nbsp; 📱 Android Developer &nbsp;·&nbsp; 🌐 Web Developer
            </p>

            <p className="about-bio">{personalInfo.bio}</p>

            {/* CTA Buttons */}
            <div className="about-btns">
              <a href="#contact" className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                💼 Hire Me
              </a>
              <a
                href="/cv-asifur-rahman-noyon.pdf"
                download
                className="btn btn-outline"
                aria-label="Download CV"
              >
                📄 Download CV
              </a>
            </div>

            {/* Stats row */}
            <div className="about-stats">
              {personalInfo.stats.map((s, i) => (
                <StatBubble key={i} icon={s.icon} number={s.number} label={s.label} delay={`${i * 0.1}s`} />
              ))}
            </div>

            {/* Languages */}
            <div style={{ marginTop: 32 }}>
              <p className="lang-heading">Languages</p>
              <div className="lang-chips">
                {languages.map((l, i) => (
                  <div key={i} className="lang-chip" title={`${l.percent}% proficiency`}>
                    <span>{l.flag}</span>
                    <span>{l.name}</span>
                    <span className="lang-lvl">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Profile photo ── */}
          <div ref={rightRef} className={`about-v2-photo reveal-right${rightVisible ? ' visible' : ''}`}>

            {/* Decorative rings */}
            <div className="photo-ring-outer" aria-hidden="true" />
            <div className="photo-ring-inner" aria-hidden="true" />

            {/* Photo frame */}
            <div className="photo-frame">
              <img
                src="/images/profile.png"
                alt="Asifur Rahman Noyon — Packaging Designer & IT Expert"
                className="profile-img"
              />
            </div>

            {/* Available badge */}
            <div className="photo-badge">
              <span className="badge-dot" aria-hidden="true" />
              {personalInfo.available ? 'Available for Work' : 'Currently Busy'}
            </div>

            {/* Floating skill chips around photo */}
            <div className="photo-chip photo-chip-tl">📦 Packaging</div>
            <div className="photo-chip photo-chip-tr">📱 Android</div>
            <div className="photo-chip photo-chip-bl">🌐 MERN Stack</div>
            <div className="photo-chip photo-chip-br">🤖 AI Expert</div>
          </div>
        </div>
      </div>
    </section>
  )
}
