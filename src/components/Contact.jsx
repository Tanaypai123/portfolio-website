import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT, MAILTO, WHATSAPP } from '../config.js'

/* ─── Icons ─── */
const IconEmail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)
const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const IconGitHub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)
const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z"/>
  </svg>
)

const navLinks = ['#about', '#products', '#experience', '#skills', '#achievements', '#contact']

/* ─── Info contact cards ─── */
const infoCards = [
  {
    icon: <IconEmail />,
    label: 'Email',
    value: CONTACT.email,
    sub: 'Opens email client',
    href: MAILTO,
    color: 'var(--accent-dark)',
    bg: 'var(--accent-dim)',
    border: 'var(--border-accent)',
    external: false,
  },
  {
    icon: <IconLinkedIn />,
    label: 'LinkedIn',
    value: 'connectanaysharma',
    sub: 'Connect professionally',
    href: CONTACT.linkedin,
    color: '#60A5FA',
    bg: 'rgba(96, 165, 250, 0.1)',
    border: 'rgba(96, 165, 250, 0.2)',
    external: true,
  },
  {
    icon: <IconGitHub />,
    label: 'GitHub',
    value: 'Tanaypai123',
    sub: 'See my code & projects',
    href: CONTACT.github,
    color: 'var(--text-1)',
    bg: 'rgba(0,0,0,0.03)',
    border: 'rgba(0,0,0,0.07)',
    external: true,
  },
  {
    icon: <IconPhone />,
    label: 'Phone',
    value: `+${CONTACT.phone}`,
    sub: 'Available for calls',
    href: `tel:+${CONTACT.phone}`,
    color: '#4B6B5B',
    bg: 'var(--green-dim)',
    border: 'rgba(143, 168, 155, 0.2)',
    external: false,
  },
]

// Magnetic Button Wrapper
function MagneticButton({ children, href, style, variant }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    const maxDist = 80
    const dist = Math.hypot(distanceX, distanceY)
    if (dist < maxDist) {
      setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: 'inline-block' }}
    >
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="btn"
        style={{
          ...style,
          cursor: 'none',
          boxShadow: variant === 'primary' 
            ? '0 10px 24px rgba(0,0,0,0.06)' 
            : '0 10px 24px rgba(37,211,102,0.15)',
        }}
      >
        {children}
      </a>
    </motion.div>
  )
}

export default function Contact() {
  const scrollReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  }

  return (
    <>
      <section id="contact" style={{ paddingBottom: 0, background: 'var(--bg)' }}>
        <div className="container">

          {/* Centered Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollReveal}
            style={{ textAlign: 'center', marginBottom: 56, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <span className="section-label">Get in Touch</span>
            <h2 className="heading" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              marginBottom: 20,
              textAlign: 'center',
              lineHeight: 1.15,
              color: 'var(--text-1)'
            }}>
              Let&apos;s Build Something
              <br />
              <span style={{ color: 'var(--accent-dark)', display: 'block', textAlign: 'center' }}>Together</span>
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1.15rem', maxWidth: 540, margin: '0 auto 16px', lineHeight: 1.6 }}>
              Open to full-time roles, internships, freelance projects, and interesting collaboration opportunities.
            </p>
            <p style={{ color: 'var(--text-3)', fontSize: '0.95rem', fontWeight: 550 }}>
              📍 Jaipur, Rajasthan, India
            </p>
          </motion.div>

          {/* Primary CTA Buttons (Magnetic) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollReveal}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 48 }}
          >
            {/* Email CTA */}
            <MagneticButton
              href={MAILTO}
              variant="primary"
              style={{
                background: 'var(--text-1)',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '14px 32px',
                fontSize: '1.1rem'
              }}
            >
              <IconEmail />
              Send Me an Email
            </MagneticButton>

            {/* WhatsApp CTA */}
            <MagneticButton
              href={WHATSAPP}
              variant="whatsapp"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                border: 'none',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '14px 32px',
                fontSize: '1.1rem'
              }}
            >
              <IconWhatsApp />
              Chat on WhatsApp
            </MagneticButton>
          </motion.div>

          {/* Pre-fill note */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollReveal}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}
          >
            <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', textAlign: 'center', maxWidth: 400, lineHeight: 1.6, fontWeight: 500 }}>
              Both buttons auto-fill a message for you — just hit send. 🚀
            </p>
          </motion.div>

          {/* Info cards grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="contact-grid"
          >
            {infoCards.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                aria-label={`${c.label}: ${c.value}`}
                variants={scrollReveal}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="card"
                style={{ padding: '28px 24px', display: 'block', background: 'var(--bg-card)', cursor: 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: c.bg, border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color }}>
                    {c.icon}
                  </div>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
                <p style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 4 }}>{c.label}</p>
                <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', marginBottom: 10, fontWeight: 500 }}>{c.sub}</p>
                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-1)', wordBreak: 'break-all' }}>{c.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Status pill */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollReveal}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 100 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 999, padding: '10px 24px', boxShadow: 'var(--shadow)' }}>
              <span className="dot-live" />
              <span style={{ color: 'var(--text-2)', fontSize: '0.9rem', fontWeight: 550 }}>Available for opportunities</span>
              <span style={{ color: 'var(--text-3)' }}>·</span>
              <span style={{ color: 'var(--text-3)', fontSize: '0.88rem', fontWeight: 500 }}>Response within 24h</span>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 0', background: 'var(--bg)' }}>
          <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <a href="#" style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-1)', display: 'block', marginBottom: 6, letterSpacing: '-0.02em', cursor: 'none' }}>
                <span style={{ color: 'var(--accent-dark)' }}>&lt;/&gt;</span> Tanay<span style={{ color: 'var(--accent-dark)' }}>.</span>
              </a>
              <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', fontWeight: 500 }}>
                Designed &amp; Built by Tanay Sharma 💜 &copy; 2026
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {navLinks.map(href => (
                <a key={href} href={href} style={{ color: 'var(--text-3)', fontSize: '0.9rem', fontWeight: 550, padding: '6px 12px', borderRadius: 8, transition: 'all 0.2s', textTransform: 'capitalize', cursor: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-1)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.background = 'transparent' }}
                >{href.slice(1)}</a>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { href: CONTACT.github, label: 'GitHub', icon: <IconGitHub /> },
                { href: CONTACT.linkedin, label: 'LinkedIn', icon: <IconLinkedIn /> },
                { href: MAILTO, label: 'Email Tanay', icon: <IconEmail /> },
                { href: WHATSAPP, label: 'WhatsApp Tanay', icon: <IconWhatsApp /> },
              ].map(s => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--bg-card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-3)', transition: 'all 0.25s', outline: 'none', cursor: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-dark)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-dim)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
        </footer>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) {
          .contact-grid { grid-template-columns: 1fr; }
          #contact .cta-row { flex-direction: column; align-items: stretch; }
          #contact .cta-row a { justify-content: center; width: 100%; }
        }
      `}</style>
    </>
  )
}
