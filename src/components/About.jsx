export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }} className="about-grid">

          {/* ── Left ── */}
          <div>
            <span className="section-label reveal">About Me</span>
            <h2 className="heading reveal reveal-delay-1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: 24, lineHeight: 1.12 }}>
              Turning ideas into{' '}
              <span style={{ color: 'var(--accent)' }}>production-ready</span>{' '}
              software
            </h2>
            <p className="reveal reveal-delay-2" style={{ color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 18, fontSize: '1rem' }}>
              I&apos;m a Full Stack Developer passionate about building scalable software products and solving real-world business challenges. I enjoy designing systems, creating intuitive user experiences, and transforming ideas into production-ready applications.
            </p>
            <p className="reveal reveal-delay-3" style={{ color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 32, fontSize: '1rem' }}>
              My work focuses on{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 500 }}>SaaS platforms</span>,{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 500 }}>AI-powered workflows</span>, and{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 500 }}>modern cloud technologies</span>.
            </p>
            {/* Education card */}
            <div className="card reveal reveal-delay-4" style={{ padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: 3 }}>B.Tech Computer Science Engineering</p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>Swami Keshwanand Institute of Technology (SKIT)</p>
                <p style={{ color: 'var(--text-3)', fontSize: '0.78rem', marginTop: 4 }}>2023 – 2027</p>
              </div>
            </div>
          </div>

          {/* ── Right: Info cards ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Currently Building — rich card */}
            <div className="card reveal reveal-delay-2" style={{
              padding: '28px',
              background: 'linear-gradient(135deg, rgba(108,99,255,0.07) 0%, rgba(79,70,229,0.02) 100%)',
              borderColor: 'rgba(108,99,255,0.2)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Currently Building</span>
                <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', color: 'var(--green)', fontWeight: 600 }}>
                  <span className="dot-live" /> Active
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #6C63FF, #4F46E5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff', flexShrink: 0, boxShadow: '0 8px 24px rgba(108,99,255,0.35)' }}>F</div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-1)', fontFamily: "'Bricolage Grotesque',sans-serif", marginBottom: 3 }}>FlowStock</p>
                  <p style={{ color: 'var(--text-3)', fontSize: '0.8rem' }}>B2B Inventory &amp; Logistics SaaS</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-2)', fontSize: '0.855rem', lineHeight: 1.65, marginBottom: 18 }}>
                Multi-tenant platform for Indian wholesale businesses — inventory, orders, driver management, invoicing &amp; analytics.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
                {['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Twilio'].map(t => (
                  <span key={t} style={{ fontSize: '0.72rem', fontWeight: 500, padding: '4px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-3)' }}>{t}</span>
                ))}
              </div>

              <a href="https://flowstock.pages.dev/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', transition: 'gap 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                onMouseLeave={e => e.currentTarget.style.gap = '7px'}
              >
                View Live Demo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

            {/* Current Goal */}
            <div className="card reveal reveal-delay-3" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Current Goal</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span className="dot-live" />
                <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-1)', fontFamily: "'Bricolage Grotesque',sans-serif" }}>Open to Opportunities</span>
              </div>

              <p style={{ color: 'var(--text-2)', fontSize: '0.855rem', lineHeight: 1.65, marginBottom: 18 }}>
                Actively looking for roles where I can ship real products and grow as a software engineer.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Full-time SWE', 'Internship', 'Freelance', 'Collaboration'].map(r => (
                  <span key={r} style={{ fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px', borderRadius: 999, background: 'rgba(0,208,132,0.08)', border: '1px solid rgba(0,208,132,0.2)', color: 'var(--green)' }}>{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  )
}
