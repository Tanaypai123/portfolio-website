import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MAILTO } from '../config.js'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          setActive('#' + e.target.id)
        }
      }),
      { threshold: 0.25, rootMargin: '-20% 0px -60% 0px' }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      background: scrolled ? 'rgba(250, 250, 248, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid #EAEAEA' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: scrolled ? '14px 32px' : '22px 32px', transition: 'padding 0.4s' }}>
        {/* Logo */}
        <a href="#" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#111111', letterSpacing: '-0.02em' }}>
          <span style={{ color: 'var(--accent-dark)' }}>&lt;/&gt;</span> Tanay<span style={{ color: 'var(--accent-dark)' }}>.</span>
        </a>

        {/* Desktop links with active indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', position: 'relative' }} className="nav-desktop">
          {links.map(l => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--text-1)' : 'var(--text-2)',
                  position: 'relative',
                  transition: 'color 0.3s',
                  cursor: 'none',
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(199, 169, 139, 0.15)',
                      border: '1px solid rgba(199, 169, 139, 0.25)',
                      borderRadius: '10px',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href={MAILTO} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.85rem', borderRadius: '10px' }}>
            Hire Me
          </a>
          
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(m => !m)}
            className="nav-hamburger"
            style={{ background: 'none', border: 'none', color: 'var(--text-2)', padding: 6, display: 'none' }}
            aria-label="Menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen
                ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
                : <><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          background: '#FAFAF8',
          borderTop: '1px solid var(--border)',
          padding: '12px 32px 32px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                color: active === l.href ? 'var(--accent-dark)' : 'var(--text-2)',
                fontSize: '0.95rem',
                fontWeight: 500,
                borderBottom: '1px solid var(--border)',
                cursor: 'none',
              }}
            >{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
