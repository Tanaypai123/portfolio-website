const GH = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
const LI = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const ML = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
const DL = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
const EL = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>

export default function Hero({ photoUrl, resumeUrl }) {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 64, alignItems: 'center' }} className="hero-grid">

          {/* ── Left ── */}
          <div>
            {/* Available badge */}
            <div className="hero-anim hero-anim-1" style={{ marginBottom: 28 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(0,208,132,0.08)', border: '1px solid rgba(0,208,132,0.2)',
                borderRadius: 999, padding: '6px 16px', fontSize: '0.8rem', fontWeight: 500, color: '#00D084'
              }}>
                <span className="dot-live" />
                Open to Opportunities · Jaipur, India
              </span>
            </div>

            {/* Name */}
            <h1 className="heading hero-anim hero-anim-2" style={{ fontSize: 'clamp(3.2rem, 8vw, 5.8rem)', marginBottom: 16, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#F5F5F7', display: 'block' }}>Tanay</span>
              <span style={{ color: 'var(--accent)', display: 'block' }}>Sharma</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-anim hero-anim-3" style={{ fontSize: '1.15rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 520, marginBottom: 24 }}>
              Building software products that solve <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>real business problems.</strong>
            </p>

            {/* Pills */}
            <div className="hero-anim hero-anim-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
              {['⚡ Full Stack Developer', '🎓 B.Tech CSE @ SKIT Jaipur', '🚀 Open to SWE Opportunities'].map(p => (
                <span key={p} style={{
                  padding: '7px 16px', borderRadius: 999, fontSize: '0.82rem', fontWeight: 500,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-2)'
                }}>{p}</span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-anim hero-anim-5" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 40 }}>
              <a href="#products" className="btn btn-primary">View Products <EL /></a>
              <a href={resumeUrl} download="Tanay_Sharma_Resume.pdf" className="btn btn-ghost"><DL /> Download Resume</a>
              <a href="#contact" className="btn btn-ghost"><ML /> Contact Me</a>
            </div>

            {/* Social row */}
            <div className="hero-anim hero-anim-6" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: 'var(--text-3)', fontSize: '0.82rem', marginRight: 6 }}>Find me on</span>
              {[
                { icon: <GH />, label: 'GitHub', href: 'https://github.com/Tanaypai123' },
                { icon: <LI />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/connectanaysharma/' },
                { icon: <ML />, label: 'Email', href: 'mailto:panwadiyatanay@gmail.com' },
              ].map((s, i) => (
                <span key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {i > 0 && <span style={{ color: 'var(--text-3)', margin: '0 4px' }}>·</span>}
                  <a href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-3)', fontSize: '0.85rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                  >
                    {s.icon} {s.label}
                  </a>
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="hero-anim hero-anim-7 hero-photo-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ position: 'relative', width: 280, height: 280 }}>
              {/* Glow behind photo */}
              <div style={{
                position: 'absolute', inset: -20, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(108,99,255,0.25) 0%, transparent 70%)',
                filter: 'blur(30px)', animation: 'photo-in 1s 0.65s both',
              }} />
              {/* Photo or placeholder */}
              <div style={{
                width: 280, height: 280, borderRadius: '50%', overflow: 'hidden',
                border: '2px solid rgba(108,99,255,0.3)',
                boxShadow: '0 0 0 8px rgba(108,99,255,0.06), 0 32px 80px rgba(0,0,0,0.5)',
                animation: 'photo-in 0.9s 0.6s cubic-bezier(0.22,1,0.36,1) both',
                position: 'relative', zIndex: 1,
              }}>
                {photoUrl ? (
                  <img src={photoUrl} alt="Tanay Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
                    fontSize: '5rem', color: 'rgba(108,99,255,0.6)',
                    letterSpacing: '-0.02em',
                  }}>TS</div>
                )}
              </div>
              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: 10, right: -10, zIndex: 2,
                background: 'rgba(13,13,20,0.9)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(108,99,255,0.3)', borderRadius: 12,
                padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 7,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                animation: 'photo-in 0.9s 0.8s cubic-bezier(0.22,1,0.36,1) both',
              }}>
                <span style={{ fontSize: '1.1rem' }}>⚡</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-1)' }}>Full Stack Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes photo-in {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-wrap { display: none !important; }
        }
      `}</style>
    </section>
  )
}
