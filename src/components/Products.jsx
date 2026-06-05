import { useState } from 'react'

const products = [
  {
    id: 'flowstock',
    name: 'FlowStock',
    tagline: 'B2B Inventory & Logistics SaaS',
    letter: 'F',
    status: 'Building',
    statusClass: 'badge-yellow',
    demoUrl: 'https://flowstock.pages.dev/',
    description: 'FlowStock is a multi-tenant SaaS platform built for Indian wholesale and distribution businesses. Enables inventory management, order tracking, logistics operations, customer management, driver workflows, invoicing, analytics, and business reporting.',
    pills: [
      { icon: '⬡', label: 'Multi-tenant Architecture' },
      { icon: '🚗', label: 'Driver Management System' },
      { icon: '📊', label: 'Analytics Dashboard' },
      { icon: '🔒', label: 'Role-based Auth' },
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Twilio', 'PDFKit', 'Cloudflare Pages', 'Render'],
    features: ['Multi-tenant architecture', 'Order management', 'Customer portal', 'Inventory management', 'Driver management system', 'OTP-based delivery verification', 'WhatsApp & SMS notifications', 'PDF invoice generation', 'Analytics dashboard', 'Business reporting', 'Complaint management', 'Customer lead matching'],
    architecture: ['Role-based authentication', 'PostgreSQL architecture', 'Real-time notifications', 'Multi-business isolation', 'API-driven backend', 'Scalable SaaS architecture'],
    gradient: 'linear-gradient(135deg, #6C63FF, #4F46E5)',
  },
  {
    id: 'hireblind',
    name: 'HireBlind',
    tagline: 'AI-Powered Recruitment Platform',
    letter: 'H',
    status: 'Completed',
    statusClass: 'badge-green',
    demoUrl: 'https://hire-blind-git-main-tanaypai123s-projects.vercel.app/',
    description: 'HireBlind is an AI-assisted blind hiring platform that helps reduce recruitment bias through resume anonymization, explainable AI scoring, and transparent candidate ranking.',
    pills: [
      { icon: '🛡️', label: 'PII Removal Engine' },
      { icon: '🤖', label: 'AI Scoring Engine' },
      { icon: '🔍', label: 'Explainability Layer' },
      { icon: '👥', label: 'Recruiter Management' },
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Claude API', 'JWT Auth'],
    features: ['Resume anonymization', 'PII removal engine', 'AI-powered resume screening', 'Explainable ranking system', 'Human override workflow', 'Audit logging', 'Blind interview scheduling', 'Candidate scoring dashboard', 'Recruiter management'],
    architecture: ['Two-stage PII removal', 'AI scoring engine', 'Explainability layer', 'Audit trail system', 'EU AI Act inspired design'],
    gradient: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
  },
]

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card" style={{
      borderLeft: '3px solid var(--accent)',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s, transform 0.3s',
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 24px 80px rgba(108,99,255,0.14)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }} className="product-inner">

        {/* Left panel */}
        <div style={{ padding: '36px 32px', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Logo + name */}
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: product.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff', boxShadow: '0 8px 24px rgba(108,99,255,0.3)', flexShrink: 0 }}>{product.letter}</div>
                <div>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: '1.35rem', color: 'var(--text-1)', lineHeight: 1.1 }}>{product.name}</h3>
                  <p style={{ color: 'var(--text-3)', fontSize: '0.8rem', marginTop: 3 }}>{product.tagline}</p>
                </div>
              </div>
              <span className={`badge ${product.statusClass}`} style={{ flexShrink: 0, marginLeft: 8 }}>
                {product.status === 'Building' && <span className="dot-live" />}
                {product.status}
              </span>
            </div>
            <p style={{ color: 'var(--text-2)', fontSize: '0.875rem', lineHeight: 1.7 }}>{product.description}</p>
          </div>

          {/* Feature pills 2x2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {product.pills.map(p => (
              <div key={p.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ fontSize: '0.9rem' }}>{p.icon}</span>
                <span style={{ fontSize: '0.73rem', fontWeight: 500, color: 'var(--text-2)' }}>{p.label}</span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-3)', marginBottom: 10 }}>Tech Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {product.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Key Features */}
          <div>
            <button
              onClick={() => setExpanded(x => !x)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', padding: 0, cursor: 'none', marginBottom: 14 }}
            >
              <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-3)' }}>Key Features</p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px',
              maxHeight: expanded ? '400px' : '180px', overflow: 'hidden', transition: 'max-height 0.4s ease',
            }}>
              {product.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.85rem', color: 'var(--text-2)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 5 }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-3)', marginBottom: 14 }}>Architecture Highlights</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}>
              {product.architecture.map(a => (
                <div key={a} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.85rem', color: 'var(--text-2)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', flexShrink: 0, marginTop: 5 }} />
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 12, marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
            {product.demoUrl && (
              <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '9px 20px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                Live Demo
              </a>
            )}
            <a href="https://github.com/Tanaypai123" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '9px 18px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
      <style>{`.product-inner{@media(max-width:900px){grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}

export default function Products() {
  return (
    <section id="products">
      <div className="container">
        <div className="section-header">
          <span className="section-label reveal">Featured Products</span>
          <h2 className="section-title reveal reveal-delay-1">Products I&apos;ve Built</h2>
          <p className="section-subtitle reveal reveal-delay-2">Real software solving real problems — not tutorials or side experiments.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {products.map((p, i) => (
            <div key={p.id} className={`reveal reveal-delay-${i + 1}`}><ProductCard product={p} /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
