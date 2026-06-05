import { useState, useEffect } from 'react'
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
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) }),
      { threshold: 0.35 }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(13,13,20,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 28px' }}>
        {/* Logo */}
        <a href="#" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '1.15rem', color: '#F5F5F7' }}>
          <span style={{ color: 'var(--accent)' }}>&lt;/&gt;</span> Tanay<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              padding: '7px 14px', borderRadius: 8, fontSize: '0.87rem', fontWeight: 500,
              color: active === l.href ? 'var(--accent)' : 'var(--text-2)',
              background: active === l.href ? 'var(--accent-dim)' : 'transparent',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { if (active !== l.href) e.target.style.color = '#F5F5F7' }}
              onMouseLeave={e => { if (active !== l.href) e.target.style.color = 'var(--text-2)' }}
            >{l.label}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href={MAILTO} className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '0.85rem' }}>
            Hire Me
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(m => !m)}
            className="nav-hamburger"
            style={{ background: 'none', border: 'none', color: 'var(--text-2)', padding: 6 }}
            aria-label="Menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
          background: 'rgba(13,13,20,0.97)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border)', padding: '20px 28px 28px',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: 'var(--text-2)', fontSize: '1rem', fontWeight: 500, borderBottom: '1px solid var(--border)' }}
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
