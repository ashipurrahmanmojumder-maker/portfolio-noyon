import { useState } from 'react'
import packagingData from '../data/packagingData.json'
import { useScrollReveal } from '../hooks/useScrollAnimation'
import PackagingDetailPage from './PackagingDetailPage'

const allCats = ['All', ...new Set(packagingData.map(p => p.category))]

function PackCard({ item, index, onSelect }) {
  const [ref, visible]        = useScrollReveal(0.1)
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <article
      ref={ref}
      className={`pkg-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* ── Thumbnail ── */}
      <div className="pkg-thumb">
        {!imgFailed ? (
          <img
            src={item.image}
            alt={item.title}
            onError={() => setImgFailed(true)}
            loading="lazy"
          />
        ) : (
          <div className="pkg-placeholder" style={{ background: item.placeholderGradient }}>
            <span className="pkg-placeholder-emoji" role="img" aria-label={item.title}>
              {item.placeholder}
            </span>
          </div>
        )}

        {/* Clickable hover overlay */}
        <button
          className="pkg-overlay"
          onClick={() => onSelect(item)}
          aria-label={`View details for ${item.title}`}
        >
          <div className="pkg-overlay-inner">
            <span className="pkg-view-icon">👁</span>
            <span className="pkg-view-text">View Project</span>
          </div>
        </button>

        <span className="pkg-cat-badge">{item.category}</span>
      </div>

      {/* ── Body ── */}
      <div className="pkg-body">
        <h3 className="pkg-title">{item.title}</h3>
        <p className="pkg-client">📌 {item.client}</p>
        <p className="pkg-desc">{item.description}</p>
        <div className="pkg-tags">
          {item.tags.map(t => <span key={t} className="pkg-tag">{t}</span>)}
        </div>
        <button className="pkg-view-btn" onClick={() => onSelect(item)}>
          View Full Details →
        </button>
      </div>
    </article>
  )
}

export default function PackagingGallery() {
  const [active, setActive]              = useState('All')
  const [selectedProject, setSelected]  = useState(null)
  const [headerRef, headerVisible]       = useScrollReveal()

  const filtered = active === 'All'
    ? packagingData
    : packagingData.filter(p => p.category === active)

  /* Handles both close and prev/next (next project passed as arg) */
  const handleClose = (nextProject = null) => {
    if (nextProject && typeof nextProject === 'object') {
      setSelected(nextProject)
    } else {
      setSelected(null)
    }
  }

  return (
    <>
      <section id="packaging" className="section packaging-gallery" aria-label="Packaging design portfolio">
        <div className="container">

          <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
            <span className="section-eyebrow">📦 Packaging Portfolio</span>
            <h2 className="section-title">Design Gallery</h2>
            <p className="section-sub">
              100+ brands designed — boxes, bags, labels &amp; complete brand identities for UAE &amp; global clients.
            </p>
          </div>

          {/* Filters */}
          <div className="pf-filters" role="tablist" aria-label="Filter by category">
            {allCats.map(cat => (
              <button
                key={cat}
                className={`pf-filter${active === cat ? ' active' : ''}`}
                onClick={() => setActive(cat)}
                role="tab"
                aria-selected={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="pkg-grid">
            {filtered.map((item, i) => (
              <PackCard
                key={item.id}
                item={item}
                index={i}
                onSelect={setSelected}
              />
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a
              href="https://fiverr.com/ashipur_rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              ⭐ Order Packaging Design on Fiverr
            </a>
          </div>
        </div>
      </section>

      {/* Detail page — rendered as slide-in overlay */}
      {selectedProject && (
        <PackagingDetailPage
          project={selectedProject}
          onClose={handleClose}
        />
      )}
    </>
  )
}
