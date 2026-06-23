import { useState } from 'react'
import { motion } from 'framer-motion'
import flowstockImg from '../flowstock.png'
import hireblindImg from '../hireblind.png'
import FlowStockEcosystem from './FlowStockEcosystem'
import HireBlindArchitecture from './HireBlindArchitecture'
import FlowStockLivePreview from './FlowStockLivePreview'

const products = [
  {
    id: 'flowstock',
    name: 'FlowStock',
    tagline: 'B2B Inventory & Logistics SaaS',
    letter: 'F',
    status: 'Building',
    statusClass: 'badge-yellow',
    demoUrl: 'https://flowstock.pages.dev/',
    image: flowstockImg,
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
    gradient: 'linear-gradient(135deg, #B08D69, #8E704E)',
  },
  {
    id: 'hireblind',
    name: 'HireBlind',
    tagline: 'AI-Powered Recruitment Platform',
    letter: 'H',
    status: 'Completed',
    statusClass: 'badge-green',
    demoUrl: 'https://hire-blind-git-main-tanaypai123s-projects.vercel.app/',
    image: hireblindImg,
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
    gradient: 'linear-gradient(135deg, #5C6E58, #8FA89B)',
  },
]

function BrowserFrame({ src, alt }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.03)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      position: 'relative'
    }}>
      {/* Browser Bar */}
      <div style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        userSelect: 'none'
      }}>
        {/* Three Window Controls */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--border)' }} />
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--border)' }} />
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--border)' }} />
        </div>
        {/* URL Bar */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          fontSize: '0.76rem',
          color: 'var(--text-3)',
          padding: '4px 24px',
          flexGrow: 1,
          textAlign: 'center',
          maxWidth: '320px',
          margin: '0 auto',
          fontWeight: 500,
        }}>
          {alt === 'FlowStock' ? 'flowstock.pages.dev' : 'hireblind.vercel.app'}
        </div>
      </div>
      {/* Zoomable Image Container */}
      <div style={{ overflow: 'hidden', position: 'relative', width: '100%', aspectRatio: '1.5' }}>
        <motion.img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="card"
      style={{
        overflow: 'hidden',
        background: 'var(--bg-card)',
        borderRadius: '24px',
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: 36,
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ alignItems: 'start' }} className="product-inner">

        {/* ── Left Side: Details & Features ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          {/* Logo & Header */}
          <div className="product-card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: product.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontWeight: 700, fontSize: '1.45rem', color: '#fff',
                boxShadow: '0 8px 18px rgba(0,0,0,0.05)', flexShrink: 0
              }}>
                {product.letter}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: '1.6rem', color: 'var(--text-1)', lineHeight: 1.15 }}>{product.name}</h3>
                <p style={{ color: 'var(--text-3)', fontSize: '0.95rem', fontWeight: 550, marginTop: 4 }}>{product.tagline}</p>
              </div>
            </div>
            <span className={`badge ${product.statusClass}`} style={{ flexShrink: 0, padding: '5px 12px' }}>
              {product.status === 'Building' && <span className="dot-live" />}
              {product.status}
            </span>
          </div>

          {/* Description */}
          <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.75 }}>
            {product.description}
          </p>

          {/* Feature Pills */}
          <div className="product-pills-grid">
            {product.pills.map(p => (
              <div key={p.label} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '0.95rem' }}>{p.icon}</span>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-2)' }}>{p.label}</span>
              </div>
            ))}
          </div>

          {/* Collapsible Key Features */}
          <div>
            <button
              onClick={() => setExpanded(x => !x)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '8px 0', cursor: 'none' }}
            >
              <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-3)' }}>Key Features</p>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            
            <motion.div
              initial={false}
              animate={{ height: expanded ? 'auto' : '150px' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="product-features-grid"
              style={{
                overflow: 'hidden',
                marginTop: 8
              }}
            >
              {product.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.45 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 7 }} />
                  {f}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Architecture Highlights */}
          {product.id !== 'flowstock' && (
            <div>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-3)', marginBottom: 12 }}>Architecture Highlights</p>
              <div className="product-architecture-grid">
                {product.architecture.map(a => (
                  <div key={a} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.45 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--text-3)', flexShrink: 0, marginTop: 7 }} />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-3)', marginBottom: 12 }}>Tech Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {product.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
            {product.demoUrl && (
              <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.95rem', padding: '10px 22px', borderRadius: '10px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                Live Demo
              </a>
            )}
            <a href="https://github.com/Tanaypai123" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.95rem', padding: '10px 22px', borderRadius: '10px', background: 'var(--bg-card)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        {/* ── Right Side: Screenshot mockup or Ecosystem ── */}
        <div style={{ width: '100%' }}>
          {product.id === 'flowstock' ? (
            <FlowStockEcosystem />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <BrowserFrame src={product.image} alt={product.name} />
              <HireBlindArchitecture />
            </div>
          )}
        </div>

      </div>
      <style>{`
        .product-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        .product-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
        }
        .product-pills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .product-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 16px;
        }
        .product-architecture-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 16px;
        }
        @media(max-width:960px){
          .product-inner { grid-template-columns: 1fr; gap: 36px; }
        }
        @media(max-width:767px){
          .product-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .product-pills-grid,
          .product-features-grid,
          .product-architecture-grid {
            grid-template-columns: 1fr;
          }
        }
        @media(max-width:480px){
          .card { padding: 24px !important; }
        }
      `}</style>
    </motion.div>
  )
}

function FlowStockCaseStudy({ product }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="card flowstock-case-study"
      style={{
        overflow: 'hidden',
        background: 'var(--bg-card)',
        borderRadius: '24px',
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ─── SECTION 1: HERO ARCHITECTURE ─── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        
        {/* Top Split Layout: Details & Live Preview */}
        <div className="flowstock-hero-grid">
          
          {/* Left Panel: App Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Header Title Block */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: product.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontWeight: 700, fontSize: '1.6rem', color: '#fff',
                boxShadow: '0 8px 20px rgba(176,141,105,0.15)', flexShrink: 0
              }}>
                {product.letter}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: '1.95rem', color: 'var(--text-1)', lineHeight: 1.1 }}>{product.name}</h3>
                <p style={{ color: 'var(--text-3)', fontSize: '1.05rem', fontWeight: 600, marginTop: 4 }}>{product.tagline}</p>
              </div>
            </div>
            
            {/* Project Overview */}
            <p style={{ color: 'var(--text-2)', fontSize: '1.08rem', lineHeight: 1.8, margin: 0 }}>
              {product.description}
            </p>

            {/* CTAs and Status Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                {product.demoUrl && (
                  <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '8px 18px', borderRadius: '8px' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    Live Demo
                  </a>
                )}
                <a href="https://github.com/Tanaypai123" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.9rem', padding: '8px 18px', borderRadius: '8px', background: 'var(--bg-card)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  GitHub
                </a>
              </div>

              <span className={`badge ${product.statusClass}`} style={{ padding: '6px 14px', fontSize: '0.85rem', flexShrink: 0 }}>
                <span className="dot-live" style={{ marginRight: 6 }} />
                {product.status}
              </span>
            </div>
          </div>

          {/* Right Panel: Live Product Preview Browser */}
          <div style={{ width: '100%' }}>
            <FlowStockLivePreview />
          </div>

        </div>

        {/* Full Width Ecosystem Diagram */}
        <div style={{ width: '100%', marginTop: 8 }}>
          <FlowStockEcosystem />
        </div>
      </div>

      {/* ─── SECTION 3: CORE MODULES ─── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-3)' }}>Core Modules</h4>
        <div className="case-study-modules-grid">
          {product.pills.map(p => (
            <div key={p.label} style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 2px 10px rgba(0,0,0,0.015)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', color: 'var(--accent-dark)', flexShrink: 0 }}>
                {p.icon}
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-1)', lineHeight: 1.3 }}>
                {p.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SECTION 4: KEY FEATURES ─── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-3)' }}>Key Features</h4>
        
        {/* Always Visible Key Features (First 3) */}
        <div className="case-study-features-grid">
          {product.features.slice(0, 3).map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.98rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginTop: 9, flexShrink: 0 }} />
              {f}
            </div>
          ))}
        </div>

        {/* Collapsible Key Features (Remaining 9) */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : '0px', opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <div className="case-study-features-grid" style={{ paddingTop: 8 }}>
            {product.features.slice(3).map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.98rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginTop: 9, flexShrink: 0 }} />
                {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highly Visible Toggle Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 4 }}>
          <button
            onClick={() => setExpanded(x => !x)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent-dark)',
              cursor: 'none',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'var(--accent-dim)',
              border: '1px solid var(--border-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(176, 141, 105, 0.2)'
              e.currentTarget.style.borderColor = 'var(--accent-dark)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--accent-dim)'
              e.currentTarget.style.borderColor = 'var(--border-accent)'
            }}
          >
            <span>{expanded ? 'Show Less' : `+ Show ${product.features.length - 3} More Features`}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ─── SECTION 5: TECH STACK ─── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-3)' }}>Tech Stack</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {product.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>
      </div>

      <style>{`
        .case-study-modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 16px;
        }
        .case-study-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px 24px;
        }
        .flowstock-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }
        @media(max-width:960px){
          .flowstock-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media(max-width:767px){
          .flowstock-case-study { padding: 24px 20px !important; gap: 32px !important; }
        }
      `}</style>
    </motion.div>
  )
}

export default function Products() {
  const scrollReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section id="products" style={{ background: 'var(--bg)' }}>
      <div className="container">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={scrollReveal}
          className="section-header"
        >
          <span className="section-label">Featured Products</span>
          <h2 className="section-title">Products I&apos;ve Built</h2>
          <p className="section-subtitle">Real software solving real problems — not tutorials or side experiments.</p>
        </motion.div>

        {/* Products List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={scrollReveal}
              transition={{ delay: i * 0.1 }}
            >
              {p.id === 'flowstock' ? (
                <FlowStockCaseStudy product={p} />
              ) : (
                <ProductCard product={p} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
