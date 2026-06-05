/* Tech logos as inline SVGs — brand colors, no external deps */
const logos = {
  'HTML': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M5 3l1.8 20.2L16 26l9.2-2.8L27 3z" fill="#E34F26"/><path d="M16 24.5l7.4-2.1 1.6-17.4H16z" fill="#EF652A"/><path d="M16 13.5h-4l-.3-3.5H16V6.5H8l.8 9H16zm0 7l-.1.1-3.7-1-.2-2.6H9.1l.4 5L16 24v-3.5z" fill="#fff"/><path d="M16 13.5v3.5h3.7l-.4 4-3.3.9V25l6.2-1.7.1-.7 1-10.5H16z" fill="#fff"/></svg>,
  'CSS': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M5 3l1.8 20.2L16 26l9.2-2.8L27 3z" fill="#1572B6"/><path d="M16 24.5l7.4-2.1 1.6-17.4H16z" fill="#33A9DC"/><path d="M16 13.5H9.8l.2 2.1H16V13.5zm-5.8-4H16V7.4H9.9l.3 2.1zM16 19.8l-.1.1-3.3-.9-.2-2.3H10l.4 4.5L16 22.8V19.8z" fill="#fff"/><path d="M16 13.5v2.1h5.8l-.5 5.1-5.3 1.5V25l6.2-1.7.1-.7 1-10.5H16z" fill="#fff"/></svg>,
  'JavaScript': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M3 3h26v26H3z" fill="#F7DF1E"/><path d="M20.8 23.7c.5.8 1.1 1.4 2.2 1.4 1 0 1.6-.5 1.6-1.1 0-.8-.6-1.1-1.7-1.5l-.6-.2c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.5.5 3.3 1.8l-1.8 1.1c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.5 1.4l.6.2c2 .9 3.1 1.7 3.1 3.6 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.2-2.4l1.8-1zm-9.5.3c.3.6.6 1.1 1.3 1.1.7 0 1.1-.3 1.1-1.3v-7h2.2v7.1c0 2.1-1.2 3.1-3 3.1-1.6 0-2.5-.8-3-1.9l1.4-.9z" fill="#000"/></svg>,
  'TypeScript': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M3 3h26v26H3z" fill="#3178C6"/><path d="M14.5 16.5H12V15h7v1.5h-2.5V23H15V16.5zm6 4.3c.5.8 1.1 1.3 2 1.3.8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.3-1.3l-.5-.2c-1.5-.6-2.4-1.4-2.4-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.5 2.8 1.5l-1.5.9c-.3-.5-.7-.8-1.3-.8-.6 0-.9.3-.9.8 0 .6.4.8 1.2 1.2l.5.2c1.8.8 2.7 1.5 2.7 3.1 0 1.8-1.4 2.7-3.2 2.7-1.8 0-3-.9-3.6-2.1l1.6-.7z" fill="#fff"/></svg>,
  'React': <svg viewBox="0 0 32 32" width="16" height="16"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1.2" fill="none"><ellipse cx="16" cy="16" rx="11" ry="4.5"/><ellipse cx="16" cy="16" rx="11" ry="4.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="11" ry="4.5" transform="rotate(120 16 16)"/></g></svg>,
  'Tailwind CSS': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M9 13c1-4 3.5-6 7-6 5.5 0 6 4 9 4.5-1 4-3.5 6-7 6-5.5 0-6-4-9-4.5zm-7 9c1-4 3.5-6 7-6 5.5 0 6 4 9 4.5-1 4-3.5 6-7 6-5.5 0-6-4-9-4.5z" fill="#06B6D4"/></svg>,
  'Node.js': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3zm0 2.3l9.5 5.2v10.4L16 26.7l-9.5-5.8V10.5L16 5.3z" fill="#339933"/><path d="M14.9 19.8V12l5.4 3.9-5.4 3.9z" fill="#339933"/></svg>,
  'Express.js': <svg viewBox="0 0 32 32" width="16" height="16"><text x="2" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="12" fill="#fff">EXP</text></svg>,
  'PostgreSQL': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M16 4C10 4 6 8 6 14c0 5 3 8 7 9v2h6v-2c4-1 7-4 7-9 0-6-4-10-10-10z" fill="#4169E1"/><path d="M13 12h6v8h-6z" fill="#fff" opacity=".3"/><circle cx="13" cy="11" r="1.5" fill="#fff"/><circle cx="19" cy="11" r="1.5" fill="#fff"/></svg>,
  'Supabase': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M17 4l-12 14h11v10l12-14H17z" fill="#3ECF8E"/></svg>,
  'Git': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M29.5 14.5L17.5 2.5a1.7 1.7 0 00-2.4 0L12.7 5l3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 11-1.2 1.2l-2.7-2.7v7a2 2 0 11-1.6 0V11a2 2 0 01-1.1-2.6L11.7 5.6l-9.2 9.2a1.7 1.7 0 000 2.4l12 12a1.7 1.7 0 002.4 0l12.6-12.6a1.7 1.7 0 000-2.1z" fill="#F05032"/></svg>,
  'GitHub': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M16 3C9 3 3 9 3 16c0 5.8 3.8 10.8 9 12.5.7.1.9-.3.9-.6v-2.2c-3.7.8-4.5-1.6-4.5-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3 1.4 3.8 1.1.1-.8.5-1.4.8-1.7-2.9-.3-6-1.5-6-6.5 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.7.1-3.5 0 0 1.1-.3 3.5 1.3 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.4-1.6 3.5-1.3 3.5-1.3.7 1.8.3 3.2.1 3.5.8.9 1.3 2.1 1.3 3.5 0 5-3.1 6.2-6 6.5.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.9.6C25.2 26.8 29 21.8 29 16 29 9 23 3 16 3z" fill="#E6EDF3"/></svg>,
  'Postman': <svg viewBox="0 0 32 32" width="16" height="16"><circle cx="16" cy="16" r="13" fill="#FF6C37"/><path d="M21 12l-8 4 8 4V12z" fill="#fff"/></svg>,
  'VS Code': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M23 4L9 17 4 13 2 15l5 5L2 27l2 2 6-5 14 8V4l-1-.1zM22 25l-10-7 10-7v14z" fill="#007ACC"/></svg>,
  'Cloudflare Pages': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M22 20H10a5 5 0 010-10c.3 0 .6 0 .9.1A7 7 0 0124 16c0 .3 0 .5-.1.8A4 4 0 0126 20h-4z" fill="#F38020"/></svg>,
  'Render': <svg viewBox="0 0 32 32" width="16" height="16"><rect x="6" y="6" width="20" height="20" rx="4" fill="#46E3B7"/><path d="M11 21V11l10 10H11z" fill="#0D0D14"/></svg>,
  'Twilio': <svg viewBox="0 0 32 32" width="16" height="16"><circle cx="16" cy="16" r="13" fill="#F22F46"/><circle cx="11" cy="12" r="2.5" fill="#fff"/><circle cx="21" cy="12" r="2.5" fill="#fff"/><circle cx="11" cy="20" r="2.5" fill="#fff"/><circle cx="21" cy="20" r="2.5" fill="#fff"/></svg>,
  'PDFKit': <svg viewBox="0 0 32 32" width="16" height="16"><rect x="6" y="4" width="20" height="24" rx="2" fill="#E53E3E"/><path d="M10 12h12M10 16h12M10 20h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  'Google Maps API': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M16 3a9 9 0 00-7 14.6L16 29l7-11.4A9 9 0 0016 3zm0 12a3 3 0 110-6 3 3 0 010 6z" fill="#34A853"/><path d="M16 3a9 9 0 019 9c0 2.5-1 4.8-2.7 6.5" fill="#FBBC04"/><path d="M25 12a9 9 0 01-9 9" fill="#4285F4"/></svg>,
  'Claude API': <svg viewBox="0 0 32 32" width="16" height="16"><circle cx="16" cy="16" r="13" fill="#C96442"/><text x="8" y="21" fontFamily="sans-serif" fontWeight="bold" fontSize="11" fill="#fff">AI</text></svg>,
  'JWT Auth': <svg viewBox="0 0 32 32" width="16" height="16"><path d="M16 4l-3 9h-9l7 5-3 9 8-6 8 6-3-9 7-5h-9z" fill="#D63AFF" opacity=".8"/></svg>,
}

const SkillPill = ({ name }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 7,
    padding: '6px 12px', borderRadius: 999,
    fontSize: '0.78rem', fontWeight: 500,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--text-2)',
    transition: 'all 0.2s',
    cursor: 'default',
  }}
    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)'; e.currentTarget.style.color = 'var(--text-1)' }}
    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--text-2)' }}
  >
    {logos[name] && (
      <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{logos[name]}</span>
    )}
    {name}
  </span>
)

const categories = [
  {
    label: 'Frontend',
    color: 'var(--accent)', bg: 'var(--accent-dim)', border: 'var(--border-accent)',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    color: '#818CF8', bg: 'rgba(79,70,229,0.12)', border: 'rgba(79,70,229,0.25)',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    skills: ['Node.js', 'Express.js'],
  },
  {
    label: 'Database',
    color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.2)',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>,
    skills: ['PostgreSQL', 'Supabase'],
  },
  {
    label: 'Tools',
    color: '#FBBF24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.2)',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    label: 'Cloud & Deployment',
    color: '#60A5FA', bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.2)',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    skills: ['Cloudflare Pages', 'Render'],
  },
  {
    label: 'Integrations',
    color: '#F472B6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.2)',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    skills: ['Twilio', 'PDFKit', 'Google Maps API'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label reveal">Skills</span>
          <h2 className="section-title reveal reveal-delay-1">Tech Stack</h2>
          <p className="section-subtitle reveal reveal-delay-2">Tools and technologies I use to build full-stack products from idea to production.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="skills-grid">
          {categories.map((cat, i) => (
            <div key={cat.label} className={`card reveal reveal-delay-${(i % 3) + 1}`} style={{ padding: '28px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: cat.bg, border: `1px solid ${cat.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cat.color, flexShrink: 0 }}>
                  {cat.icon}
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--text-2)' }}>{cat.label}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map(skill => <SkillPill key={skill} name={skill} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
