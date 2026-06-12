import { education, awards } from '../data/data'
import { useScrollReveal } from '../hooks/useScrollAnimation'

function EduCard({ item, index }) {
  const [ref, visible] = useScrollReveal(0.15)

  return (
    <div
      ref={ref}
      className={`edu-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="edu-card-icon" aria-hidden="true">{item.icon}</div>
      <div>
        <h3 className="edu-degree">{item.degree}</h3>
        <p className="edu-inst">{item.institution}</p>
        <div className="edu-badges">
          {item.year && <span className="edu-year">{item.year}</span>}
          {item.gpa  && <span className="edu-gpa">GPA {item.gpa}</span>}
          {item.type === 'certificate' && (
            <span className="edu-cert">Certificate</span>
          )}
        </div>
      </div>
    </div>
  )
}

function AwardCard({ award, index }) {
  const [ref, visible] = useScrollReveal(0.2)

  return (
    <div
      ref={ref}
      className={`award-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Spinning conic glow */}
      <div className="award-glow" aria-hidden="true" />

      <div className="award-inner">
        <span className="award-icon" role="img" aria-label="Trophy">{award.icon}</span>
        <h3 className="award-title">{award.title}</h3>
        <p className="award-org">{award.org} · {award.year}</p>
        <p className="award-desc">{award.description}</p>
      </div>
    </div>
  )
}

export default function Education() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section id="education" className="section education" aria-label="Education and awards">
      <div className="container">

        <div
          ref={headerRef}
          className={`section-header reveal${headerVisible ? ' visible' : ''}`}
        >
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">Education &amp; Awards</h2>
          <p className="section-sub">
            Academic foundations, certified training, and recognition for innovation.
          </p>
        </div>

        <div className="edu-grid">

          {/* Education cards */}
          <div>
            <div className="edu-cards">
              {education.map((item, i) => (
                <EduCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="award-wrap">
            {awards.map((award, i) => (
              <AwardCard key={i} award={award} index={i} />
            ))}

            {/* Soft skills chips */}
            <div
              className="edu-card"
              style={{ flexDirection: 'column', gap: 14 }}
            >
              <p style={{ fontSize: 13, color: 'var(--text-400)', textTransform: 'uppercase', letterSpacing: 2, fontFamily: 'var(--font-mono)' }}>
                Soft Skills
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Creative', 'Detail-Oriented', 'Self-Motivated', 'Fast Learner', 'Entrepreneurial', 'Problem Solver', 'Team Player', 'AI-Savvy'].map(skill => (
                  <span
                    key={skill}
                    className="tool-tag"
                    style={{ fontSize: 12 }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
