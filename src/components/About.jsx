import { motion } from 'framer-motion'

export default function About() {
  const scrollReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section id="about" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ alignItems: 'start' }} className="about-grid">

          {/* ── Left Column: Bio & Education ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollReveal}
          >
            <span className="section-label">About Me</span>
            <h2 className="heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: 28, lineHeight: 1.12, color: 'var(--text-1)' }}>
              Turning ideas into{' '}
              <span style={{ color: 'var(--accent-dark)' }}>production-ready</span>{' '}
              software
            </h2>
            
            <p style={{ color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 20, fontSize: '1.15rem' }}>
              I&apos;m a Full Stack Developer passionate about building scalable software products and solving real-world business challenges. I enjoy designing systems, creating intuitive user experiences, and transforming ideas into production-ready applications.
            </p>
            
            <p style={{ color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 40, fontSize: '1.15rem' }}>
              My work focuses on{' '}
              <span style={{ color: 'var(--accent-dark)', fontWeight: 550 }}>SaaS platforms</span>,{' '}
              <span style={{ color: 'var(--accent-dark)', fontWeight: 550 }}>AI-powered workflows</span>, and{' '}
              <span style={{ color: 'var(--accent-dark)', fontWeight: 550 }}>modern cloud technologies</span>.
            </p>

            {/* Education Card */}
            <div className="card" style={{ padding: '28px 32px', display: 'flex', gap: 20, alignItems: 'flex-start', background: 'var(--bg-card)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-1)', marginBottom: 5 }}>B.Tech Computer Science Engineering</p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', fontWeight: 500 }}>Swami Keshwanand Institute of Technology (SKIT)</p>
                <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', marginTop: 6, fontWeight: 500 }}>2023 – 2027</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Info Cards ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Currently Building Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={scrollReveal}
              className="card"
              style={{
                padding: '36px',
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Currently Building</span>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: '#4B6B5B', fontWeight: 600, background: 'var(--green-dim)', padding: '4px 10px', borderRadius: 999, border: '1px solid rgba(143, 168, 155, 0.2)' }}>
                  <span className="dot-live" /> Active
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #B08D69, #8E704E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: '1.45rem', color: '#fff', flexShrink: 0, boxShadow: '0 8px 20px rgba(176,141,105,0.2)' }}>F</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '1.45rem', color: 'var(--text-1)', fontFamily: "'Bricolage Grotesque',sans-serif", marginBottom: 3 }}>FlowStock</p>
                  <p style={{ color: 'var(--text-3)', fontSize: '0.92rem', fontWeight: 500 }}>B2B Inventory &amp; Logistics SaaS</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 24 }}>
                Multi-tenant platform for Indian wholesale businesses — inventory, orders, driver management, invoicing &amp; analytics.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Twilio'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', fontWeight: 550, padding: '5px 12px', borderRadius: 999, background: 'var(--accent-dim)', border: '1px solid rgba(176, 141, 105, 0.2)', color: 'var(--accent-dark)' }}>{t}</span>
                ))}
              </div>

              <a href="https://flowstock.pages.dev/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-1)', textDecoration: 'none', transition: 'gap 0.2s', cursor: 'none' }}
                onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                onMouseLeave={e => e.currentTarget.style.gap = '7px'}
              >
                View Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </motion.div>

            {/* Current Goal Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={scrollReveal}
              className="card"
              style={{ padding: '36px', background: 'var(--bg-card)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--green-dim)', border: '1px solid rgba(143, 168, 155, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4B6B5B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Current Goal</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span className="dot-live" />
                <span style={{ fontWeight: 700, fontSize: '1.35rem', color: 'var(--text-1)', fontFamily: "'Bricolage Grotesque',sans-serif" }}>Open to Opportunities</span>
              </div>

              <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 24 }}>
                Actively looking for roles where I can ship real products and grow as a software engineer.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Full-time SWE', 'Internship', 'Freelance', 'Collaboration'].map(r => (
                  <span key={r} style={{ fontSize: '0.88rem', fontWeight: 600, padding: '6px 14px', borderRadius: 999, background: 'var(--green-dim)', border: '1px solid rgba(143, 168, 155, 0.2)', color: '#4B6B5B' }}>{r}</span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        @media(max-width:900px){
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  )
}
