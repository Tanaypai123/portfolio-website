import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// SVG Icons matching original design
const GH = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
const LI = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const ML = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
const DL = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
const EL = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>

// Magnetic Button Wrapper
function MagneticButton({ children, href, className, style, download }) {
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

    const maxDist = 70
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

  const Element = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: 'inline-block' }}
    >
      <Element href={href} className={className} style={{ ...style, cursor: 'none' }} download={download}>
        {children}
      </Element>
    </motion.div>
  )
}

export default function Hero({ photoUrl, resumeUrl }) {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setShowSticky(window.scrollY > 300)
      } else {
        setShowSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Title reveal animation variants
  const wordVariants = {
    hidden: { y: '100%' },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  }

  // Floating stats cards animation variants
  const float1 = {
    animate: {
      y: [0, -6, 0],
      x: [0, 4, 0],
      transition: { duration: 5, ease: 'easeInOut', repeat: Infinity }
    }
  }

  const float2 = {
    animate: {
      y: [0, 7, 0],
      x: [0, -3, 0],
      transition: { duration: 4.5, ease: 'easeInOut', repeat: Infinity }
    }
  }

  const float3 = {
    animate: {
      y: [0, -5, 0],
      x: [0, -5, 0],
      transition: { duration: 6, ease: 'easeInOut', repeat: Infinity }
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-grid">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Available badge */}
            <div style={{ marginBottom: 28 }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--green-dim)',
                border: '1px solid rgba(143, 168, 155, 0.25)',
                borderRadius: 999,
                padding: '6px 16px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#4B6B5B'
              }}>
                <span className="dot-live" />
                Open to Opportunities · Jaipur, India
              </span>
            </div>

            {/* Title (Line-by-line Reveal - Scaled up) */}
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="heading" 
              style={{ fontSize: 'clamp(5rem, 10vw, 9rem)', marginBottom: 24, letterSpacing: '-0.04em', lineHeight: 0.95 }}
            >
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span variants={wordVariants} style={{ display: 'inline-block', color: 'var(--text-1)' }}>
                  Tanay
                </motion.span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span variants={wordVariants} style={{ display: 'inline-block', color: 'var(--accent-dark)' }}>
                  Sharma
                </motion.span>
              </span>
            </motion.h1>

            {/* Subtitle (Scaled up) */}
            <p style={{ fontSize: 'clamp(1.35rem, 2vw, 2rem)', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 720, marginBottom: 32 }}>
              Building software products that solve <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>real business problems.</strong>
            </p>

            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
              {['⚡ Full Stack Developer', '🎓 B.Tech CSE @ SKIT Jaipur', '🚀 Open to SWE Opportunities'].map(p => (
                <span key={p} style={{
                  padding: '8px 18px', borderRadius: 999, fontSize: '0.9rem', fontWeight: 500,
                  background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-2)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.01)'
                }}>{p}</span>
              ))}
            </div>

            {/* CTA Buttons - Magnetic */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 44, alignItems: 'center' }}>
              <MagneticButton href="#products" className="btn btn-primary" style={{ borderRadius: '12px' }}>
                View Products <EL />
              </MagneticButton>
              
              <MagneticButton href={resumeUrl} download="Tanay_Sharma_Resume.pdf" className="btn btn-ghost" style={{ borderRadius: '12px', background: 'var(--bg-card)' }}>
                <DL /> Download Resume
              </MagneticButton>
              
              <MagneticButton href="#contact" className="btn btn-ghost" style={{ borderRadius: '12px', background: 'var(--bg-card)' }}>
                <ML /> Contact Me
              </MagneticButton>
            </div>

            {/* Social row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: 'var(--text-3)', fontSize: '0.92rem', marginRight: 6 }}>Find me on</span>
              {[
                { icon: <GH />, label: 'GitHub', href: 'https://github.com/Tanaypai123' },
                { icon: <LI />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/connectanaysharma/' },
                { icon: <ML />, label: 'Email', href: 'mailto:panwadiyatanay@gmail.com' },
              ].map((s, i) => (
                <span key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {i > 0 && <span style={{ color: 'var(--text-3)', margin: '0 4px' }}>·</span>}
                  <a href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-3)', fontSize: '0.95rem', transition: 'color 0.2s', cursor: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-dark)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                  >
                    {s.icon} {s.label}
                  </a>
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right Content: Photo + Stats cards ── */}
          <div className="hero-photo-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <div className="hero-image-outer">
              
              {/* Profile Image with scale reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="hero-image-box"
                style={{ background: 'var(--bg-card)' }}
              >
                {photoUrl ? (
                  <img src={photoUrl} alt="Tanay Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'var(--bg-card)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700,
                    fontSize: '5rem', color: 'var(--accent-dark)',
                    letterSpacing: '-0.02em',
                  }}>TS</div>
                )}
              </motion.div>

              {/* DESKTOP ONLY: Floating Stat Card 1: Repositories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="hidden-md-block stat-card-1"
              >
                <motion.div
                  variants={float1}
                  animate="animate"
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px',
                    padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10,
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>📦</span>
                  <div>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-1)', lineHeight: 1.1 }}>10+</p>
                    <p style={{ fontSize: '0.68rem', color: 'var(--text-3)' }}>Repositories</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* DESKTOP ONLY: Floating Stat Card 2: Live Products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="hidden-md-block stat-card-2"
              >
                <motion.div
                  variants={float2}
                  animate="animate"
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px',
                    padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10,
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>🚀</span>
                  <div>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-1)', lineHeight: 1.1 }}>2</p>
                    <p style={{ fontSize: '0.68rem', color: 'var(--text-3)' }}>Live Products</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* DESKTOP ONLY: Floating Stat Card 3: Hackathons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden-md-block stat-card-3"
              >
                <motion.div
                  variants={float3}
                  animate="animate"
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px',
                    padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10,
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>🏆</span>
                  <div>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-1)', lineHeight: 1.1 }}>4+</p>
                    <p style={{ fontSize: '0.68rem', color: 'var(--text-3)' }}>Hackathons</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile Hero Layout (Viewport < 768px) ── */}
      <div className="mobile-hero-container">
        {/* 1. Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 4 }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--green-dim)',
            border: '1px solid rgba(143, 168, 155, 0.25)',
            borderRadius: 999,
            padding: '6px 16px',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: '#4B6B5B'
          }}>
            <span className="dot-live" />
            Open to Opportunities · Jaipur, India
          </span>
        </motion.div>

        {/* 2. Tanay Sharma Name */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="heading"
          style={{
            fontSize: 'clamp(3rem, 12vw, 4.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span variants={wordVariants} style={{ display: 'inline-block', color: 'var(--text-1)' }}>
              Tanay
            </motion.span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span variants={wordVariants} style={{ display: 'inline-block', color: 'var(--accent-dark)' }}>
              Sharma
            </motion.span>
          </span>
        </motion.h1>

        {/* 3. Subtitle / Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-dark)', marginBottom: 8, fontFamily: "'Bricolage Grotesque', sans-serif", textAlign: 'center' }}>
            Full Stack Developer
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.5, maxWidth: '440px', margin: '0 auto', textAlign: 'center' }}>
            Building software products that solve <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>real business problems.</strong>
          </p>
        </motion.div>

        {/* 4. Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, width: '100%' }}
        >
          {[
            { label: 'Full Stack Developer', icon: '⚡' },
            { label: 'B.Tech CSE @ SKIT Jaipur', icon: '🎓' },
            { label: 'Open to SWE Opportunities', icon: '🚀' }
          ].map(p => (
            <span key={p.label} style={{
              padding: '8px 18px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 550,
              background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-2)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.01)', display: 'inline-flex', alignItems: 'center', gap: 6
            }}>
              <span>{p.icon}</span> {p.label}
            </span>
          ))}
        </motion.div>

        {/* 5. Profile Photo & Stats Grid */}
        <div className="mobile-profile-stats-row">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="mobile-profile-box"
          >
            {photoUrl ? (
              <img src={photoUrl} alt="Tanay Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                background: 'var(--bg-card)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700,
                fontSize: '3rem', color: 'var(--accent-dark)',
              }}>TS</div>
            )}
          </motion.div>

          {/* Stats Column */}
          <div className="mobile-stats-column">
            {[
              { val: '10+', lbl: 'Repositories', icon: '📦', delay: 0.6 },
              { val: '2', lbl: 'Live Products', icon: '🚀', delay: 0.7 },
              { val: '4+', lbl: 'Hackathons', icon: '🏆', delay: 0.8 }
            ].map(s => (
              <motion.div
                key={s.lbl}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: s.delay }}
                className="mobile-stat-card"
              >
                <span className="mobile-stat-icon">{s.icon}</span>
                <div className="mobile-stat-text">
                  <p className="mobile-stat-val">{s.val}</p>
                  <p className="mobile-stat-lbl">{s.lbl}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 7. Buttons (Primary CTA Row) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: '440px' }}
        >
          {/* Row 1: View Projects */}
          <a href="#products" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%', borderRadius: '12px', padding: '12px 24px', cursor: 'none' }}>
            View Projects <EL />
          </a>

          {/* Row 2: Resume & Contact side-by-side */}
          <div style={{ display: 'flex', gap: 12, width: '100%' }}>
            <a href={resumeUrl} download="Tanay_Sharma_Resume.pdf" className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center', borderRadius: '12px', padding: '12px 16px', background: 'var(--bg-card)', cursor: 'none', fontSize: '0.9rem' }}>
              <DL /> Resume
            </a>
            <a href="#contact" className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center', borderRadius: '12px', padding: '12px 16px', background: 'var(--bg-card)', cursor: 'none', fontSize: '0.9rem' }}>
              <ML /> Contact
            </a>
          </div>
        </motion.div>

        {/* 8. Social Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, flexWrap: 'wrap', marginTop: 8 }}
        >
          <span style={{ color: 'var(--text-3)', fontSize: '0.85rem', marginRight: 4 }}>Find me on</span>
          {[
            { icon: <GH />, label: 'GitHub', href: 'https://github.com/Tanaypai123' },
            { icon: <LI />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/connectanaysharma/' },
            { icon: <ML />, label: 'Email', href: 'mailto:panwadiyatanay@gmail.com' },
          ].map((s, i) => (
            <span key={s.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              {i > 0 && <span style={{ color: 'var(--text-3)', margin: '0 4px' }}>·</span>}
              <a href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-3)', fontSize: '0.85rem', cursor: 'none' }}
              >
                {s.icon} {s.label}
              </a>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Sticky Mobile CTA Bar (Viewport < 768px) ── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="sticky-cta-bar"
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'var(--bg-card)',
              borderTop: '1px solid var(--border)',
              padding: '12px 20px',
              boxShadow: '0 -8px 30px rgba(0,0,0,0.06)',
              zIndex: 9999,
              display: 'flex',
              gap: 12
            }}
          >
            <a href="#products" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px', borderRadius: '10px', cursor: 'none' }}>
              View Projects
            </a>
            <a href={resumeUrl} download="Tanay_Sharma_Resume.pdf" className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px', borderRadius: '10px', background: 'var(--bg-card)', cursor: 'none' }}>
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 100px;
          background: var(--bg);
        }
        .hero-image-outer {
          position: relative;
          width: 360px;
          height: 360px;
        }
        .hero-image-box {
          width: 360px;
          height: 360px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 20px 50px rgba(0,0,0,0.04);
          position: relative;
          z-index: 2;
        }
        .stat-card-1 {
          position: absolute;
          top: 25px;
          left: -80px;
          z-index: 3;
        }
        .stat-card-2 {
          position: absolute;
          top: 158px;
          right: -80px;
          z-index: 3;
        }
        .stat-card-3 {
          position: absolute;
          bottom: 25px;
          left: -80px;
          z-index: 3;
        }
        
        /* Mobile layout styling defaults */
        .mobile-hero-container {
          display: none;
        }
        .mobile-profile-stats-row {
          display: none;
        }
        .sticky-cta-bar {
          display: none;
        }
        
        /* Desktop visibility logic matching hidden md:block / md:hidden */
        @media (min-width: 768px) {
          .md-hidden {
            display: none !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-image-outer {
            width: 300px;
            height: 300px;
          }
          .hero-image-box {
            width: 300px;
            height: 300px;
          }
          .stat-card-1 {
            top: 20px;
            left: -55px;
          }
          .stat-card-2 {
            top: 128px;
            right: -55px;
          }
          .stat-card-3 {
            bottom: 20px;
            left: -55px;
          }
        }
        
        @media (max-width: 767px) {
          .hero-section {
            display: block !important;
            min-height: auto !important;
            padding-top: 50px !important;
            padding-bottom: 40px !important;
          }
          .hero-grid {
            display: none !important;
          }
          .hero-section .container {
            display: none !important;
          }
          .mobile-hero-container {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
            gap: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 20px;
            padding-right: 20px;
            box-sizing: border-box;
          }
          .mobile-profile-stats-row {
            display: flex !important;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 440px;
            gap: 16px;
            margin: 0 auto;
          }
          .mobile-profile-box {
            width: clamp(130px, 42vw, 180px) !important;
            height: clamp(130px, 42vw, 180px) !important;
            max-width: none !important;
            max-height: none !important;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid var(--border);
            box-shadow: 0 16px 36px rgba(0,0,0,0.04);
            position: relative;
            flex-shrink: 0;
          }
          .mobile-stats-column {
            display: flex !important;
            flex-direction: column;
            gap: 8px;
            flex: 1;
            width: 100%;
          }
          .mobile-stat-card {
            background: var(--bg-card);
            border: 1.5px solid var(--border);
            border-radius: 14px;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: var(--shadow);
            flex: 1;
            justify-content: flex-start;
          }
          .mobile-stat-icon {
            font-size: 1.2rem;
            display: flex;
            align-items: center;
          }
          .mobile-stat-text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
          .mobile-stat-val {
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            font-size: 0.95rem;
            color: var(--text-1);
            line-height: 1.1;
          }
          .mobile-stat-lbl {
            font-size: 0.65rem;
            color: var(--text-3);
            font-weight: 600;
            margin-top: 1px;
          }
          .sticky-cta-bar {
            display: flex !important;
          }
          /* Shift the scroll to top button up so it doesn't collide with the sticky bar */
          button[aria-label="Scroll to top"] {
            bottom: 80px !important;
          }
        }
      `}</style>
    </section>
  )
}
