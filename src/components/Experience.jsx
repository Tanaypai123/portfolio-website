const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'INOVIZE IT SOLUTIONS',
    type: 'Full Stack',
    typeColor: 'var(--accent)',
    typeBg: 'var(--accent-dim)',
    color: 'var(--accent)',
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
    typeColor: '#818CF8',
    typeBg: 'rgba(79,70,229,0.12)',
    color: '#818CF8',
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
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label reveal">Experience</span>
          <h2 className="section-title reveal reveal-delay-1">Work Experience</h2>
          <p className="section-subtitle reveal reveal-delay-2">Building real products across the full stack.</p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: 24, bottom: 24, width: 1,
            background: 'linear-gradient(to bottom, var(--accent), rgba(108,99,255,0.1))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {experiences.map((exp, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: -46, top: 28,
                  width: 14, height: 14, borderRadius: '50%',
                  background: exp.color, border: '3px solid #0D0D14',
                  boxShadow: `0 0 0 3px ${exp.color}33`,
                }} />

                <div className="card" style={{ padding: '32px 36px' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 20 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-1)', marginBottom: 5 }}>{exp.role}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: 'var(--text-2)', fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</span>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-3)', display: 'inline-block' }} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: exp.typeBg, color: exp.typeColor, border: `1px solid ${exp.typeColor}33` }}>{exp.type}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      Internship
                    </span>
                  </div>

                  {/* Bullets */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px', marginBottom: 20 }} className="exp-bullets">
                    {exp.bullets.map((b, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: '0.875rem', color: 'var(--text-2)' }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: exp.color, flexShrink: 0, marginTop: 6 }} />
                        {b}
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {exp.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .exp-bullets { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
