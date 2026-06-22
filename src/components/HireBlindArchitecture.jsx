import { motion } from 'framer-motion'

// Elegant vector icons matching the Stripe/Linear aesthetic
const IconCandidate = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const IconBrain = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 6v6l3 3" />
  </svg>
)

const IconEye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M3 12h.01M21 12h.01M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9z" />
  </svg>
)

const IconPortal = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

export default function HireBlindArchitecture() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const pipeline = [
    {
      title: 'Candidate Profile',
      subtitle: 'Uploads raw resume containing PII metadata',
      color: 'var(--text-3)',
      bg: 'rgba(142, 112, 78, 0.05)',
      icon: <IconCandidate />
    },
    {
      title: 'PII Removal Engine',
      subtitle: 'Anonymizes names, contact info, and gender clues',
      color: '#5C6E58',
      bg: 'rgba(92, 110, 88, 0.06)',
      icon: <IconShield />
    },
    {
      title: 'AI Scoring Engine',
      subtitle: 'Evaluates skillset alignment on blinded profiles',
      color: '#B08D69',
      bg: 'rgba(176, 141, 105, 0.06)',
      icon: <IconBrain />
    },
    {
      title: 'Explainability Layer',
      subtitle: 'Generates transparent reasoning for rank matching',
      color: '#6699CC',
      bg: 'rgba(102, 153, 204, 0.06)',
      icon: <IconEye />
    },
    {
      title: 'Recruiter Portal',
      subtitle: 'Allows recruiters to review blinded candidates',
      color: 'var(--text-1)',
      bg: 'rgba(17, 17, 17, 0.04)',
      icon: <IconPortal />
    }
  ]

  return (
    <motion.div
      className="hireblind-arch-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{
        width: '100%',
        background: '#F7F3EC',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '24px 20px',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6), 0 8px 24px rgba(142, 112, 78, 0.02)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        marginTop: 8
      }}
    >
      <div style={{ paddingLeft: 2 }}>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-1)', margin: 0, fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          AI Recruitment Pipeline
        </h4>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-2)', margin: '2px 0 0 0', lineHeight: 1.3 }}>
          How candidate resumes are ingested, anonymized, and transparently evaluated.
        </p>
      </div>

      {/* Vertical Pipeline Items */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {pipeline.map((item, idx) => (
          <div key={item.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {/* Card Item */}
            <motion.div
              variants={itemVariants}
              className="hb-arch-card"
              style={{
                width: '100%',
                background: '#FFFFFF',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                boxShadow: '0 1px 2px rgba(0,0,0,0.01)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 2,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: item.bg,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {item.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <h5 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>
                  {item.title}
                </h5>
                <p style={{ fontSize: '0.66rem', color: 'var(--text-2)', margin: 0, lineHeight: 1.2 }}>
                  {item.subtitle}
                </p>
              </div>
            </motion.div>

            {/* Vertical connector arrow (only if not the last item) */}
            {idx < pipeline.length - 1 && (
              <div style={{ height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                  <path id={`hb-flow-arrow-${idx}`} d="M5 0 L5 14" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M2 11 L5 14 L8 11" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle r="1.5" fill="var(--accent-dark)">
                    <animateMotion dur="2.5s" repeatCount="indefinite">
                      <mpath href={`#hb-flow-arrow-${idx}`} />
                    </animateMotion>
                  </circle>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tech Stack Row */}
      <div
        style={{
          borderTop: '1px dashed var(--border)',
          paddingTop: 12,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 6
        }}
      >
        <span style={{ fontSize: '0.66rem', fontWeight: 700, color: 'var(--text-3)', marginRight: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Stack:
        </span>
        {['PostgreSQL', 'Claude API', 'JWT Auth'].map(tech => (
          <span
            key={tech}
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '3px 8px',
              fontSize: '0.66rem',
              fontWeight: 650,
              color: 'var(--text-2)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <style>{`
        .hb-arch-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent) !important;
          box-shadow: 0 8px 18px rgba(176, 141, 105, 0.08) !important;
        }
      `}</style>
    </motion.div>
  )
}
