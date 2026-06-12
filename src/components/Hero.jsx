import { useEffect, useRef } from 'react'
import { personalInfo } from '../data/data'
import { useTypewriter } from '../hooks/useScrollAnimation'

/* ── Deterministic particles so SSR/hydration won't mismatch ── */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  x:   `${(i * 4.7 + 3) % 100}%`,
  s:   `${(i % 3) + 2}px`,
  dur: `${14 + (i % 8)}s`,
  dl:  `${(i * 0.7) % 6}s`,
}))

/* ── 3-D wireframe box faces ── */
const BOX_FACES = ['front','back','left','right','top','bottom']

export default function Hero() {
  const role = useTypewriter(personalInfo.roles, 95, 48, 2200)
  const heroRef = useRef(null)

  /* Subtle parallax on mouse move */
  useEffect(() => {
    const scene = heroRef.current?.querySelector('.hero-3d-scene')
    if (!scene) return
    const onMove = e => {
      const { innerWidth: W, innerHeight: H } = window
      const rx = ((e.clientY / H) - 0.5) * 10
      const ry = ((e.clientX / W) - 0.5) * 14
      scene.style.transform = `translateY(-50%) rotateX(${rx}deg) rotateY(${ry}deg)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const handleScroll = e => {
    e.preventDefault()
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" ref={heroRef} aria-label="Introduction">

      {/* ── Ambient background ── */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="particles">
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{ '--x': p.x, '--s': p.s, '--dur': p.dur, '--dl': p.dl }}
            />
          ))}
        </div>
      </div>

      {/* ── SIGNATURE: rotating 3D wireframe package box ── */}
      <div className="hero-3d-scene" aria-hidden="true">
        <div className="orbit-ring" />
        <div className="orbit-ring-2" />
        <div className="box-3d">
          {BOX_FACES.map(f => (
            <div key={f} className={`box-face ${f}`} />
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="hero-content container">
        <div className="hero-inner">

          {/* Eyebrow */}
          <p className="hero-eyebrow" aria-hidden="true">
            Creative &amp; Technical Expert
          </p>

          {/* Name */}
          <h1 className="hero-name">
            {personalInfo.firstName}
            <br />
            <span className="last">{personalInfo.lastName}</span>
          </h1>

          {/* Typewriter role */}
          <div className="hero-role-line" aria-label={`Role: ${role}`}>
            <span>{role}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </div>

          {/* Tagline */}
          <p className="hero-tagline">
            📦 Packaging &amp; Brand Identity &nbsp;•&nbsp; 📱 Android Dev (Java/Firebase)
            <br />
            🌐 MERN Stack &nbsp;•&nbsp; 🤖 AI Expert &nbsp;•&nbsp; 📍 Abu Dhabi, UAE
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#portfolio" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View Portfolio →
            </a>
            <a
              href="https://fiverr.com/ashipur_rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fiverr"
            >
              ⭐ Order on Fiverr
            </a>
            <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Hire Me
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-stats" aria-label="Quick stats">
            {personalInfo.stats.map((s, i) => (
              <div key={i} className="h-stat">
                <span className="h-stat-num">{s.number}</span>
                <span className="h-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="scroll-cue" onClick={handleScroll} aria-label="Scroll to About">
        <span>Scroll</span>
        <div className="scroll-line" />
      </a>
    </section>
  )
}
