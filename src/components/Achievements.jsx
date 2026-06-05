const achievements = [
  {
    icon: '🏆',
    rank: '#25',
    title: 'Top 25 Teams',
    event: "AUTOwn'25",
    org: 'BITS Pilani Hyderabad',
    desc: 'Selected among top 25 teams at the prestigious national-level hackathon organized by BITS Pilani Hyderabad campus.',
    rankColor: '#FBBF24',
    rankBg: 'rgba(251,191,36,0.08)',
  },
  {
    icon: '⭐',
    rank: '#5',
    title: 'Top 5',
    event: 'Innovician Hackathon',
    org: 'National Level',
    desc: 'Achieved Top 5 finish at the National Level Innovician Hackathon, competing against hundreds of teams.',
    rankColor: 'var(--accent)',
    rankBg: 'var(--accent-dim)',
  },
  {
    icon: '⚡',
    rank: '#10',
    title: 'Top 10',
    event: 'GIT Hackathon 2024',
    org: 'Software Category',
    desc: 'Ranked in Top 10 in the Software Category at GIT Hackathon 2024.',
    rankColor: '#818CF8',
    rankBg: 'rgba(79,70,229,0.12)',
  },
  {
    icon: '🚀',
    rank: '4+',
    title: 'Hackathons',
    event: 'Total Participated',
    org: 'Various Organizations',
    desc: 'Actively participated in 4+ hackathons across national and institute level competitions.',
    rankColor: '#34D399',
    rankBg: 'rgba(52,211,153,0.1)',
  },
]

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        {/* Achievements header */}
        <div className="section-header">
          <span className="section-label reveal">Achievements</span>
          <h2 className="section-title reveal reveal-delay-1">Hackathons &amp; Recognition</h2>
          <p className="section-subtitle reveal reveal-delay-2">Competitive experience building under pressure with real impact.</p>
        </div>

        {/* Achievement cards: 4 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 64 }} className="achievements-grid">
          {achievements.map((a, i) => (
            <div key={i} className={`card reveal reveal-delay-${i + 1}`} style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Icon + Rank */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: a.rankBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                  {a.icon}
                </div>
                <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: '1.6rem', color: a.rankColor, lineHeight: 1 }}>{a.rank}</span>
              </div>

              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-1)', marginBottom: 3 }}>{a.title}</h3>
                <p style={{ color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 600, marginBottom: 2 }}>{a.event}</p>
                <p style={{ color: 'var(--text-3)', fontSize: '0.75rem' }}>{a.org}</p>
              </div>

              <p style={{ color: 'var(--text-2)', fontSize: '0.82rem', lineHeight: 1.6 }}>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Open Source & Activity ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 64 }}>

          {/* Section label + heading */}
          <div className="section-header" style={{ marginBottom: 40 }}>
            <span className="section-label reveal">GitHub</span>
            <h2 className="section-title reveal reveal-delay-1" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              Open Source &amp; Activity
            </h2>
            <p className="section-subtitle reveal reveal-delay-2">
              Actively building in public — shipping real products, not just commits.
            </p>
          </div>

          {/* ── Wide GitHub Banner ── */}
          <div className="card reveal" style={{
            padding: '32px 36px', marginBottom: 20,
            background: 'linear-gradient(135deg, rgba(108,99,255,0.07) 0%, rgba(79,70,229,0.03) 100%)',
            borderColor: 'rgba(108,99,255,0.18)',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 28,
          }}>
            {/* Left: avatar + info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'linear-gradient(135deg, #6C63FF, #4F46E5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: '1.6rem', color: '#fff',
                boxShadow: '0 0 0 3px rgba(108,99,255,0.2), 0 0 0 6px rgba(108,99,255,0.06)',
                flexShrink: 0,
              }}>T</div>
              <div>
                <p style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-1)', marginBottom: 3 }}>Tanay Sharma</p>
                <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', marginBottom: 10 }}>@Tanaypai123 · Jaipur, India</p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.85rem', maxWidth: 340, lineHeight: 1.55 }}>
                  Full Stack Developer building SaaS products. B.Tech CSE @ SKIT Jaipur 2023–27.
                </p>
              </div>
            </div>

            {/* Center: stats */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { val: '10+', lbl: 'Repositories', icon: '📦' },
                { val: '2', lbl: 'Live Products', icon: '🚀' },
                { val: '4+', lbl: 'Hackathons', icon: '🏆' },
              ].map(s => (
                <div key={s.lbl} style={{
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                  borderRadius: 14, padding: '16px 20px', minWidth: 90,
                }}>
                  <div style={{ fontSize: '1.2rem', marginBottom: 6 }}>{s.icon}</div>
                  <p style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: '1.3rem', color: 'var(--accent)', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ color: 'var(--text-3)', fontSize: '0.68rem', marginTop: 4 }}>{s.lbl}</p>
                </div>
              ))}
            </div>

            {/* Right: CTA */}
            <a href="https://github.com/Tanaypai123" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '13px 26px', borderRadius: 10,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-1)', fontWeight: 600, fontSize: '0.9rem',
                textDecoration: 'none', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(108,99,255,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .achievements-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .achievements-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .repo-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
