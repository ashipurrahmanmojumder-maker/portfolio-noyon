import { useEffect, useRef } from 'react'
import { designSkills, techSkills, tools } from '../data/data'
import { useScrollReveal } from '../hooks/useScrollAnimation'

/* Single animated skill bar */
function SkillBar({ name, level, icon, type, delay }) {
  const [ref, visible] = useScrollReveal(0.2)
  const fillRef = useRef(null)

  useEffect(() => {
    if (visible && fillRef.current) {
      // Small timeout so CSS transition fires after mount
      setTimeout(() => {
        if (fillRef.current) fillRef.current.style.width = `${level}%`
      }, 80)
    }
  }, [visible, level])

  return (
    <div
      ref={ref}
      className={`skill-item reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div className="skill-row">
        <span className="skill-name">
          <span className="skill-emoji" aria-hidden="true">{icon}</span>
          {name}
        </span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar" role="progressbar" aria-valuenow={level} aria-valuemin="0" aria-valuemax="100" aria-label={name}>
        <div
          ref={fillRef}
          className={`skill-fill ${type === 'design' ? 'design-bar' : 'tech-bar'}`}
          style={{ width: '0%', transitionDelay: delay }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [headerRef, headerVisible]   = useScrollReveal()
  const [designRef, designVisible]   = useScrollReveal()
  const [techRef, techVisible]       = useScrollReveal()
  const [toolsRef, toolsVisible]     = useScrollReveal()

  return (
    <section id="skills" className="section skills" aria-label="Skills and tools">
      <div className="container">

        {/* Header */}
        <div
          ref={headerRef}
          className={`section-header reveal${headerVisible ? ' visible' : ''}`}
        >
          <span className="section-eyebrow">Expertise</span>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <p className="section-sub">
            A unique blend of creative design and full-stack technical ability.
          </p>
        </div>

        <div className="skills-grid">

          {/* Design Skills */}
          <div
            ref={designRef}
            className={`reveal-left${designVisible ? ' visible' : ''}`}
          >
            <div className="cat-header">
              <div className="cat-icon design" aria-hidden="true">🎨</div>
              <h3 className="cat-title gradient-gold">Design Skills</h3>
            </div>

            {designSkills.map((s, i) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                icon={s.icon}
                type="design"
                delay={`${i * 0.1}s`}
              />
            ))}
          </div>

          {/* Tech Skills */}
          <div
            ref={techRef}
            className={`reveal-right${techVisible ? ' visible' : ''}`}
          >
            <div className="cat-header">
              <div className="cat-icon tech" aria-hidden="true">💻</div>
              <h3 className="cat-title gradient-tech">Tech Skills</h3>
            </div>

            {techSkills.map((s, i) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                icon={s.icon}
                type="tech"
                delay={`${i * 0.1}s`}
              />
            ))}
          </div>
        </div>

        {/* Tools chips */}
        <div
          ref={toolsRef}
          className={`tools-wrap reveal${toolsVisible ? ' visible' : ''}`}
        >
          <p className="tools-label">Technologies &amp; Tools I Work With</p>
          <div className="tools-row">
            {tools.map((t, i) => (
              <span
                key={t}
                className="tool-tag"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
