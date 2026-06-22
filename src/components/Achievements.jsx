import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

const achievements = [
  {
    icon: '🏆',
    rank: '#25',
    title: 'Top 25 Teams',
    event: "AUTOwn'25",
    org: 'BITS Pilani Hyderabad',
    desc: 'Selected among top 25 teams at the prestigious national-level hackathon organized by BITS Pilani Hyderabad campus.',
    rankColor: 'var(--accent-dark)',
    rankBg: 'var(--accent-dim)',
  },
  {
    icon: '⭐',
    rank: '#5',
    title: 'Top 5',
    event: 'Innovician Hackathon',
    org: 'National Level',
    desc: 'Achieved Top 5 finish at the National Level Innovician Hackathon, competing against hundreds of teams.',
    rankColor: 'var(--accent-dark)',
    rankBg: 'var(--accent-dim)',
  },
  {
    icon: '⚡',
    rank: '#10',
    title: 'Top 10',
    event: 'GIT Hackathon 2024',
    org: 'Software Category',
    desc: 'Ranked in Top 10 in the Software Category at GIT Hackathon 2024.',
    rankColor: '#5C6E58', // Sage dark
    rankBg: 'rgba(143, 168, 155, 0.15)',
  },
  {
    icon: '🚀',
    rank: '4+',
    title: 'Hackathons',
    event: 'Total Participated',
    org: 'Various Organizations',
    desc: 'Actively participated in 4+ hackathons across national and institute level competitions.',
    rankColor: '#4B6B5B',
    rankBg: 'rgba(143, 168, 155, 0.15)',
  },
]

// Animated Counter component
function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0
  const prefix = value.startsWith('#') ? '#' : ''
  const suffix = value.endsWith('+') ? '+' : ''
  
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const [displayVal, setDisplayVal] = useState(prefix + '0' + suffix)

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericPart, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setDisplayVal(prefix + Math.round(latest) + suffix)
        }
      })
      return () => controls.stop()
    }
  }, [inView, numericPart, prefix, suffix])

  return <span ref={ref}>{displayVal}</span>
}

// Progressive GitHub contribution grid component
function ContributionGraph() {
  const rows = 7
  const cols = 42
  
  // Seed contribution levels consistently
  const levels = [
    [0, 1, 0, 2, 0, 1, 3, 0, 1, 0, 2, 4, 1, 0, 2, 0, 1, 2, 0, 1, 2, 3, 0, 1, 0, 1, 2, 1, 0, 3, 1, 0, 2, 0, 1, 2, 0, 1, 0, 2, 1, 0],
    [1, 2, 1, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 2, 0, 1, 0, 2, 3, 1, 0, 1, 2, 0, 3, 2, 0, 1, 2, 1, 0, 2, 3, 1, 0, 2, 1, 0, 2, 1, 0, 2],
    [2, 3, 2, 1, 0, 2, 1, 0, 3, 2, 1, 0, 2, 4, 1, 0, 2, 1, 0, 2, 3, 2, 1, 0, 2, 3, 1, 0, 2, 0, 1, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1],
    [0, 1, 3, 2, 1, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 1, 0, 1, 2, 1, 0, 2, 3, 1, 0, 2, 3, 2, 0, 1, 2, 1, 0, 2, 3, 2, 0, 1, 2, 1, 2, 3],
    [1, 0, 2, 3, 2, 1, 0, 2, 1, 0, 2, 3, 1, 0, 2, 1, 0, 2, 3, 2, 1, 0, 2, 3, 1, 0, 2, 4, 2, 1, 0, 2, 1, 0, 2, 3, 1, 0, 2, 3, 1, 0],
    [2, 1, 0, 2, 1, 0, 3, 2, 1, 0, 1, 2, 0, 1, 2, 3, 2, 1, 0, 2, 1, 0, 1, 2, 0, 3, 2, 1, 0, 2, 3, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1],
    [0, 0, 1, 0, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 1, 0, 1, 2, 1, 0, 2, 1, 0, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0, 1, 0, 2],
  ]

  const getColor = (level) => {
    switch (level) {
      case 0: return 'var(--bg)' // Background (#F3EEE7)
      case 1: return 'var(--border)' // Border (#E5D8C8)
      case 2: return '#D7C7B5' // Light bronze
      case 3: return 'var(--accent)' // Accent (#B08D69)
      case 4: return 'var(--accent-dark)' // Accent Dark (#8E704E)
      default: return 'var(--bg)'
    }
  }

  const cellVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 220, damping: 15 }
    }
  }

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      padding: '24px',
      width: '100%',
      boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
      overflow: 'hidden'
    }}>
      <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '4px' }}>
        <div className="github-grid-container" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '4.5px' }}>
          {Array.from({ length: cols }).map((_, colIdx) => (
            <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4.5px' }}>
              {Array.from({ length: rows }).map((_, rowIdx) => {
                const level = levels[rowIdx][colIdx]
                return (
                  <motion.div
                    key={rowIdx}
                    variants={cellVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: colIdx * 0.015 + rowIdx * 0.002 }}
                    style={{
                      aspectRatio: '1',
                      borderRadius: '3px',
                      background: getColor(level),
                      width: '100%',
                      border: '1px solid rgba(0,0,0,0.015)'
                    }}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, fontSize: '0.74rem', color: 'var(--text-3)', fontWeight: 550 }}>
        <span>Activity Calendar (Past year)</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>Less</span>
          <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--bg)', border: '1px solid var(--border)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--border)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#D7C7B5' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--accent)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--accent-dark)' }} />
          <span>More</span>
        </div>
      </div>
    </div>
  )
}

export default function Achievements() {
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
    <section id="achievements" style={{ background: 'var(--bg)' }}>
      <div className="container">
        
        {/* Achievements header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={scrollReveal}
          className="section-header"
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Hackathons &amp; Recognition</h2>
          <p className="section-subtitle">Competitive experience building under pressure with real impact.</p>
        </motion.div>

        {/* Achievement cards: 4 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="achievements-grid"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              variants={scrollReveal}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="card"
              style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--bg-card)' }}
            >
              {/* Icon + Rank (Counter Animation) */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: a.rankBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                  {a.icon}
                </div>
                <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: '2rem', color: a.rankColor, lineHeight: 1 }}>
                  <Counter value={a.rank} />
                </span>
              </div>

              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-1)', marginBottom: 4 }}>{a.title}</h3>
                <p style={{ color: 'var(--accent-dark)', fontSize: '0.95rem', fontWeight: 650, marginBottom: 2 }}>{a.event}</p>
                <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', fontWeight: 500 }}>{a.org}</p>
              </div>

              <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.65 }}>{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Open Source & Activity ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>

          {/* Section label + heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollReveal}
            className="section-header"
            style={{ marginBottom: 44 }}
          >
            <span className="section-label">GitHub</span>
            <h2 className="section-title">
              Open Source &amp; Activity
            </h2>
            <p className="section-subtitle">
              Actively building in public — shipping real products, not just commits.
            </p>
          </motion.div>

          {/* ── Wide GitHub Banner (Modern Analytics Dashboard) ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollReveal}
            style={{
              padding: '36px',
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
            }}
            className="github-banner-grid card"
          >
            {/* Left Column: Info & Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
              {/* Profile Block */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #B08D69, #8E704E)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: '1.4rem', color: '#fff',
                  boxShadow: '0 6px 16px rgba(176,141,105,0.2)',
                  flexShrink: 0,
                }}>T</div>
                <div>
                  <p style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: '1.4rem', color: 'var(--text-1)', marginBottom: 3 }}>Tanay Sharma</p>
                  <p style={{ color: 'var(--text-3)', fontSize: '0.88rem', fontWeight: 550 }}>@Tanaypai123 · Jaipur, India</p>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.6 }} className="github-desc">
                Full Stack Developer building SaaS products. B.Tech CSE @ SKIT Jaipur 2023–27.
              </p>

              {/* Counts Grid */}
              <div className="github-stats-grid">
                {[
                  { val: '10+', lbl: 'Repositories', icon: '📦' },
                  { val: '2', lbl: 'Live Products', icon: '🚀' },
                  { val: '4+', lbl: 'Hackathons', icon: '🏆' },
                ].map(s => (
                  <div key={s.lbl} className="github-stat-card">
                    <div className="github-stat-icon">{s.icon}</div>
                    <p className="github-stat-val">
                      <Counter value={s.val} />
                    </p>
                    <p className="github-stat-lbl">{s.lbl}</p>
                  </div>
                ))}
              </div>

              {/* View GitHub Link */}
              <div style={{ marginTop: 8 }}>
                <a href="https://github.com/Tanaypai123" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '12px 24px', borderRadius: '12px', fontSize: '0.95rem'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  View GitHub Profile
                </a>
              </div>
            </div>

            {/* Right Column: Animated Contribution Graph */}
            <div className="github-calendar-col">
              <ContributionGraph />
            </div>

          </motion.div>
        </div>
      </div>
      <style>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 80px;
        }
        .github-banner-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 36px;
          align-items: center;
          width: 100%;
          max-width: none;
        }
        .github-desc {
          max-width: 360px;
        }
        .github-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          width: 100%;
        }
        .github-stat-card {
          text-align: center;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 16px;
        }
        .github-stat-icon {
          font-size: 1.15rem;
          margin-bottom: 4px;
        }
        .github-stat-val {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--text-1);
          line-height: 1;
        }
        .github-stat-lbl {
          color: var(--text-3);
          font-size: 0.78rem;
          margin-top: 4px;
          font-weight: 550;
        }
        .github-calendar-col {
          width: 100%;
        }
        .github-grid-container {
          width: 100%;
        }
        @media (max-width: 1024px) { 
          .github-banner-grid { grid-template-columns: 1fr; gap: 32px; } 
        }
        @media (max-width: 900px) { 
          .achievements-grid { grid-template-columns: repeat(2, 1fr); } 
        }
        @media (max-width: 767px) {
          .github-calendar-col {
            display: none !important;
          }
          .github-desc {
            max-width: none;
          }
          .github-banner-grid {
            padding: 24px 20px !important;
            grid-template-columns: 1fr !important;
            width: 100% !important;
            max-width: none !important;
          }
          .github-stats-grid {
            gap: 8px !important;
          }
          .github-stat-card {
            padding: 12px 6px;
          }
          .github-stat-val {
            font-size: 1.15rem;
          }
          .github-stat-lbl {
            font-size: 0.68rem;
            line-height: 1.25;
            word-break: break-word;
            margin-top: 4px;
          }
        }
        @media (max-width: 560px) { 
          .achievements-grid { grid-template-columns: 1fr; } 
        }
      `}</style>
    </section>
  )
}
