import { experiences } from '../data/data'
import { useScrollReveal } from '../hooks/useScrollAnimation'

function TimelineItem({ exp, index }) {
  const [ref, visible] = useScrollReveal(0.15)

  return (
    <div
      ref={ref}
      className={`tl-item reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Left card (odd) OR spacer (even) */}
      {index % 2 === 0
        ? <div className="tl-card">
            <CardContent exp={exp} />
          </div>
        : <div className="tl-space" aria-hidden="true" />
      }

      {/* Centre dot */}
      <div className="tl-mid" aria-hidden="true">
        <div className="tl-dot" />
      </div>

      {/* Right card (even) OR spacer (odd) */}
      {index % 2 === 1
        ? <div className="tl-card">
            <CardContent exp={exp} />
          </div>
        : <div className="tl-space" aria-hidden="true" />
      }
    </div>
  )
}

function CardContent({ exp }) {
  return (
    <>
      <div className="tl-period">
        {exp.icon} {exp.period}
        {exp.current && <span className="current-badge">● Current</span>}
      </div>

      <h3 className="tl-title">{exp.title}</h3>

      {exp.companyUrl
        ? <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="tl-company">
            {exp.company} ↗
          </a>
        : <p className="tl-company">{exp.company}</p>
      }

      {exp.location && (
        <p className="tl-location">📍 {exp.location}</p>
      )}

      <ul className="tl-points">
        {exp.points.map((pt, j) => (
          <li key={j} className="tl-point">{pt}</li>
        ))}
      </ul>
    </>
  )
}

export default function Experience() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section id="experience" className="section experience" aria-label="Work experience">
      <div className="container">

        <div
          ref={headerRef}
          className={`section-header reveal${headerVisible ? ' visible' : ''}`}
        >
          <span className="section-eyebrow">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-sub">
            From founding startups in Bangladesh to designing for luxury brands in UAE.
          </p>
        </div>

        <div className="timeline" role="list">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
