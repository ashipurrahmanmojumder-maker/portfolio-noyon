import { useState, useEffect } from 'react'
import packagingData from '../data/packagingData.json'

export default function PackagingDetailPage({ project, onClose }) {
  const [imgFailed, setImgFailed] = useState(false)
  const [visible, setVisible]     = useState(false)

  /* Slide-in on mount */
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  /* Close on Escape key */
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 380)        // wait for slide-out animation
  }

  /* Navigate prev / next */
  const currentIndex = packagingData.findIndex(p => p.id === project.id)
  const prevProject  = packagingData[currentIndex - 1] || null
  const nextProject  = packagingData[currentIndex + 1] || null

  return (
    <div className={`pdp-backdrop${visible ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label={`Project: ${project.title}`}>
      <div className={`pdp-panel${visible ? ' open' : ''}`}>

        {/* ── Sticky top bar ── */}
        <div className="pdp-topbar">
          <button className="pdp-back" onClick={handleClose} aria-label="Back to gallery">
            <span className="pdp-back-arrow">←</span>
            Back to Gallery
          </button>
          <span className="pdp-breadcrumb">
            Packaging Design &nbsp;/&nbsp; <strong>{project.title}</strong>
          </span>
          <button className="pdp-close-x" onClick={handleClose} aria-label="Close">✕</button>
        </div>

        {/* ── Scrollable content ── */}
        <div className="pdp-scroll">

          {/* ── Hero image ── */}
          <div className="pdp-hero">
            {!imgFailed ? (
              <img
                src={project.image}
                alt={project.title}
                className="pdp-hero-img"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div
                className="pdp-hero-placeholder"
                style={{ background: project.placeholderGradient }}
              >
                <span className="pdp-hero-emoji">{project.placeholder}</span>
              </div>
            )}
            {/* Category badge over image */}
            <span className="pdp-cat-badge">{project.category}</span>
          </div>

          {/* ── Main content ── */}
          <div className="pdp-body container">

            <div className="pdp-content-grid">

              {/* Left: title + description */}
              <div className="pdp-main">
                <h1 className="pdp-title">{project.title}</h1>

                <div className="pdp-meta-row">
                  <div className="pdp-meta-item">
                    <span className="pdp-meta-label">Client</span>
                    <span className="pdp-meta-val">{project.client}</span>
                  </div>
                  <div className="pdp-meta-item">
                    <span className="pdp-meta-label">Category</span>
                    <span className="pdp-meta-val">{project.category}</span>
                  </div>
                  <div className="pdp-meta-item">
                    <span className="pdp-meta-label">Location</span>
                    <span className="pdp-meta-val">UAE / Global</span>
                  </div>
                </div>

                <div className="pdp-divider" />

                <h2 className="pdp-section-heading">About This Project</h2>
                <p className="pdp-description">{project.description}</p>

                <h2 className="pdp-section-heading">Services Provided</h2>
                <div className="pdp-tags">
                  {project.tags.map(t => (
                    <span key={t} className="pdp-tag">{t}</span>
                  ))}
                </div>

                <h2 className="pdp-section-heading">What's Included</h2>
                <ul className="pdp-includes">
                  <li>✅ Print-ready source files (Adobe Illustrator / PDF)</li>
                  <li>✅ Structural dieline template</li>
                  <li>✅ Full brand colour & typography specs</li>
                  <li>✅ High-resolution mockup previews</li>
                  <li>✅ Unlimited revisions until satisfied</li>
                </ul>
              </div>

              {/* Right: sidebar CTA */}
              <div className="pdp-sidebar">
                <div className="pdp-cta-card">
                  <p className="pdp-cta-label">Interested in similar work?</p>
                  <h3 className="pdp-cta-heading">Let's Design<br />Your Packaging</h3>
                  <a
                    href="https://fiverr.com/ashipur_rahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary pdp-fiverr-btn"
                  >
                    ⭐ Order on Fiverr
                  </a>
                  <a
                    href="mailto:asifurrahman.noyon@gmail.com?subject=Packaging Design Enquiry"
                    className="btn btn-outline pdp-email-btn"
                  >
                    ✉️ Email Me
                  </a>
                  <div className="pdp-trust">
                    <span>📦 100+ Brands Designed</span>
                    <span>🇦🇪 Based in UAE</span>
                    <span>⚡ Fast Delivery</span>
                  </div>
                </div>

                {/* Designer card */}
                <div className="pdp-designer-card">
                  <img src="/images/profile.png" alt="Asifur Rahman Noyon" className="pdp-designer-img" />
                  <div>
                    <p className="pdp-designer-name">Asifur Rahman Noyon</p>
                    <p className="pdp-designer-role">Packaging Designer · UAE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Prev / Next navigation ── */}
            <div className="pdp-nav-row">
              {prevProject ? (
                <button className="pdp-nav-btn pdp-nav-prev" onClick={() => { setImgFailed(false); onClose(prevProject) }}>
                  <span>← Previous</span>
                  <strong>{prevProject.title}</strong>
                </button>
              ) : <div />}

              {nextProject ? (
                <button className="pdp-nav-btn pdp-nav-next" onClick={() => { setImgFailed(false); onClose(nextProject) }}>
                  <strong>{nextProject.title}</strong>
                  <span>Next →</span>
                </button>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
