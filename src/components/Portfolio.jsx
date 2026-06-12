import { useState, useRef } from 'react'
import { projects } from '../data/data'
import { useScrollReveal } from '../hooks/useScrollAnimation'

const FILTERS = ['All', 'Packaging', 'Web Dev', 'Android']

/* 3-D tilt card on mouse move */
function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollReveal(0.1)
  const cardRef = useRef(null)

  const onMove = e => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width  / 2
    const cy = rect.height / 2
    const rX = ((y - cy) / cy) * -6
    const rY = ((x - cx) / cx) *  6
    card.style.transform = `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-6px)`
  }

  const onLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    }
  }

  return (
    <article
      ref={ref}
      className={`pf-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div ref={cardRef} style={{ transition: 'transform 0.15s ease', height: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Thumbnail */}
        <div
          className="pf-thumb"
          style={{ background: project.gradient }}
        >
          <span className="pf-thumb-emoji" role="img" aria-label={project.title}>
            {project.emoji}
          </span>
        </div>

        {/* Body */}
        <div className="pf-body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <p className="pf-cat" style={{ color: project.accentColor }}>
            {project.category}
          </p>
          <h3 className="pf-title">{project.title}</h3>
          <p className="pf-desc">{project.description}</p>

          <div className="pf-tags">
            {project.tags.map(t => (
              <span key={t} className="pf-tag">{t}</span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pf-link"
            style={{ color: project.accentColor, marginTop: 'auto' }}
            aria-label={`Visit ${project.title}`}
          >
            Visit Site →
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [headerRef, headerVisible] = useScrollReveal()

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="section portfolio" aria-label="Portfolio projects">
      <div className="container">

        <div
          ref={headerRef}
          className={`section-header reveal${headerVisible ? ' visible' : ''}`}
        >
          <span className="section-eyebrow">Work</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-sub">
            A snapshot of real work — packaging, web, and apps delivered to clients worldwide.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="pf-filters" role="tablist" aria-label="Filter projects by category">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`pf-filter${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
              role="tab"
              aria-selected={active === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="pf-grid" role="list">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Fiverr CTA */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a
            href="https://fiverr.com/ashipur_rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-fiverr"
          >
            ⭐ See All Work on Fiverr
          </a>
        </div>
      </div>
    </section>
  )
}
