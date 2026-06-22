import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'INOVIZE IT SOLUTIONS',
    type: 'Full Stack',
    typeColor: 'var(--accent-dark)',
    typeBg: 'var(--accent-dim)',
    color: 'var(--accent-dark)',
    bullets: [
      'Developed React applications with modern UI/UX',
      'Built REST APIs using Node.js and Express.js',
      'Worked across frontend and backend systems',
      'Gained production-level development experience',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    role: 'Summer Internship',
    company: 'Kistenchosoftware',
    type: 'Frontend',
    typeColor: '#5C6E58',
    typeBg: 'rgba(143, 168, 155, 0.12)',
    color: '#8FA89B',
    bullets: [
      'Developed a News Website using NewsAPI integration',
      'Implemented category filtering and search',
      'Built responsive frontend using HTML, CSS and JavaScript',
      'Delivered a clean, user-friendly news experience',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'NewsAPI'],
  },
]

export default function Experience() {
  const containerRef = useRef(null)
  
  // Progress tracker for drawing the timeline line on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 70%']
  })
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const scrollReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section id="experience" style={{ background: 'var(--bg)' }}>
      <div className="container">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={scrollReveal}
          className="section-header"
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Building real products across the full stack.</p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} style={{ position: 'relative', paddingLeft: 48, maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Background Line */}
          <div style={{
            position: 'absolute', left: 0, top: 12, bottom: 12, width: '2px',
            background: 'var(--border)',
          }} />

          {/* Active Drawing Line */}
          <motion.div style={{
            position: 'absolute', left: 0, top: 12, bottom: 12, width: '2px',
            background: 'var(--accent)',
            scaleY,
            originY: 0,
          }} />

          {/* Experience Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {experiences.map((exp, i) => {
              const cardRef = useRef(null)
              const { scrollYProgress: cardProgress } = useScroll({
                target: cardRef,
                offset: ['start 85%', 'start 50%']
              })
              const dotScale = useTransform(cardProgress, [0, 1], [0.8, 1.25])
              const dotBorder = useTransform(cardProgress, [0, 1], ['rgba(0,0,0,0)', exp.color])

              return (
                <div key={i} ref={cardRef} style={{ position: 'relative' }}>
                  
                  {/* Timeline Dot (Scale and Border animation on scroll) */}
                  <motion.div style={{
                    position: 'absolute', left: -54, top: 28,
                    width: 14, height: 14, borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '3px solid var(--border)',
                    borderColor: dotBorder,
                    boxShadow: `0 0 0 4px ${exp.color}12`,
                    scale: dotScale,
                    zIndex: 2,
                  }} />

                  {/* Card Content with scroll reveal */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={scrollReveal}
                    className="card"
                    style={{ padding: '32px 36px', background: 'var(--bg-card)' }}
                  >
                    {/* Card Header */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 24 }}>
                      <div>
                        <h3 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: '1.4rem', color: 'var(--text-1)', marginBottom: 6 }}>{exp.role}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ color: 'var(--text-2)', fontWeight: 600, fontSize: '1.05rem' }}>{exp.company}</span>
                          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-3)', display: 'inline-block' }} />
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: exp.typeBg, color: exp.typeColor, border: `1px solid ${exp.color}20` }}>{exp.type}</span>
                        </div>
                      </div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-3)', display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        Internship
                      </span>
                    </div>

                    {/* Bullets (2-column layout) */}
                    <div className="exp-bullets">
                      {exp.bullets.map((b, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.55 }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: exp.color, flexShrink: 0, marginTop: 8 }} />
                          {b}
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {exp.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <style>{`
        .exp-bullets {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 28px;
          margin-bottom: 24px;
        }
        @media (max-width: 768px) {
          .exp-bullets { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
