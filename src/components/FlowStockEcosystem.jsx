import { useRef } from 'react'
import { motion } from 'framer-motion'

// Elegant vector icons matching the Stripe/Apple/Linear aesthetic
const IconEcosystem = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
)

const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const IconDashboard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)

const IconPortalGreen = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const IconPortalBlue = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
)

const IconApi = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/>
    <line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/>
    <line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/>
    <line x1="20" y1="15" x2="23" y2="15"/>
    <line x1="1" y1="9" x2="4" y2="9"/>
    <line x1="1" y1="15" x2="4" y2="15"/>
  </svg>
)

const IconDb = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
  </svg>
)

const IconTwilio = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" fill="#F22F46" />
    <circle cx="9" cy="9" r="1.8" fill="white" />
    <circle cx="15" cy="9" r="1.8" fill="white" />
    <circle cx="9" cy="15" r="1.8" fill="white" />
    <circle cx="15" cy="15" r="1.8" fill="white" />
  </svg>
)

const IconPdf = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>
)

const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

// Sub-card module icons
const IconInventory = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
)

const IconOrder = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M9 17h6M9 13h6M9 9h6"/>
  </svg>
)

const IconCustomers = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
  </svg>
)

const IconAnalytics = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const IconBilling = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
)

const IconEngineOrder = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="M12 8v4l3 3"/>
  </svg>
)

const IconEngineInventory = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <line x1="9" y1="3" x2="9" y2="21"/>
    <line x1="15" y1="3" x2="15" y2="21"/>
  </svg>
)

const IconEngineNotification = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
)

const IconEngineBilling = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
)

const IconPlaceOrders = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14"/>
  </svg>
)

const IconTrackOrders = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const IconDownloadInvoices = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
)

const IconRaiseComplaints = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const IconDeliveryUpdates = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const IconOtpVerification = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const IconRouteStatus = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconProofOfDelivery = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

export default function FlowStockEcosystem() {
  const containerRef = useRef(null)

  // Stagger reveal animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  }

  const nodeVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1, 
      transition: { duration: 1.2, ease: 'easeInOut', delay: 0.3 } 
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className="flowstock-eco-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      
      {/* ─── CSS Design System Insets & Grid Styles ─── */}
      <style>{`
        .flowstock-eco-container {
          position: relative;
          width: 100%;
          background: #F7F3EC; /* Premium light warm cream matching reference */
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 32px 20px;
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.6), 0 8px 32px rgba(142, 112, 78, 0.03);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0px;
        }

        /* Desktop Layout (3-Column Grid) */
        .eco-desktop-view {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .eco-top-header-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 20px;
          align-items: center;
          width: 100%;
          z-index: 2;
          position: relative;
        }

        .eco-main-diagram-row {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1fr;
          gap: 16px;
          position: relative;
          width: 100%;
          margin-top: 16px;
        }

        .eco-center-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          z-index: 2;
          position: relative;
        }

        .eco-integrations-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          margin-top: 16px;
          z-index: 2;
          position: relative;
        }

        .eco-bottom-core-row {
          width: 100%;
          margin-top: 16px;
          z-index: 2;
          position: relative;
        }

        /* Node Cards & Styling System */
        .eco-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.01), 0 4px 16px rgba(142, 112, 78, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }
        .eco-card:hover {
          transform: translateY(-4px) !important;
          border-color: var(--accent) !important;
          box-shadow: 0 16px 32px rgba(176, 141, 105, 0.12) !important;
        }

        .eco-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .eco-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .eco-card-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: clamp(0.75rem, 1.2vw, 0.88rem);
          color: var(--text-1);
          margin: 0;
        }

        .eco-card-subtitle {
          font-size: clamp(0.6rem, 1vw, 0.7rem);
          color: var(--text-2);
          margin: 2px 0 0 0;
          line-height: 1.25;
        }

        /* Module Rows & Internal Engines Grid */
        .eco-sub-modules-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 6px;
          margin-top: 14px;
        }

        .eco-engine-modules-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          margin-top: 14px;
        }

        .eco-sub-pill-card {
          background: rgba(176, 141, 105, 0.04);
          border: 1px solid rgba(176, 141, 105, 0.15);
          border-radius: 10px;
          padding: 8px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          text-align: center;
          transition: all 0.25s ease;
        }
        .eco-sub-pill-card:hover {
          background: rgba(176, 141, 105, 0.08);
          border-color: var(--accent);
          transform: translateY(-1px);
        }
        .eco-sub-pill-card-text {
          font-size: 0.58rem;
          font-weight: 700;
          color: var(--text-1);
          line-height: 1.15;
        }

        .eco-engine-pill-card {
          background: rgba(147, 51, 234, 0.03);
          border: 1px solid rgba(147, 51, 234, 0.14);
          border-radius: 10px;
          padding: 8px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          text-align: center;
          transition: all 0.25s ease;
        }
        .eco-engine-pill-card:hover {
          background: rgba(147, 51, 234, 0.07);
          border-color: #A855F7;
          transform: translateY(-1px);
        }
        .eco-engine-pill-card-text {
          font-size: 0.58rem;
          font-weight: 700;
          color: var(--text-1);
          line-height: 1.15;
        }

        /* Portal Colors & List Layouts */
        .portal-green-border {
          border-color: rgba(143, 168, 155, 0.35);
        }
        .portal-green-border:hover {
          border-color: var(--green);
          box-shadow: 0 12px 28px rgba(143, 168, 155, 0.08);
        }

        .portal-blue-border {
          border-color: rgba(102, 153, 204, 0.25);
        }
        .portal-blue-border:hover {
          border-color: #6699CC;
          box-shadow: 0 12px 28px rgba(102, 153, 204, 0.08);
        }

        .portal-list-items {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 14px;
        }

        .portal-list-item-green {
          background: rgba(143, 168, 155, 0.04);
          border: 1px solid rgba(143, 168, 155, 0.15);
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          font-weight: 600;
          color: #2D483A;
          transition: all 0.2s ease;
        }
        .portal-list-item-green:hover {
          background: rgba(143, 168, 155, 0.08);
          border-color: rgba(143, 168, 155, 0.4);
          transform: translateX(2px);
        }

        .portal-list-item-blue {
          background: rgba(102, 153, 204, 0.04);
          border: 1px solid rgba(102, 153, 204, 0.15);
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          font-weight: 600;
          color: #27405C;
          transition: all 0.2s ease;
        }
        .portal-list-item-blue:hover {
          background: rgba(102, 153, 204, 0.08);
          border-color: rgba(102, 153, 204, 0.4);
          transform: translateX(2px);
        }

        /* Integration specific cards styling */
        .integration-card {
          padding: 20px 14px;
          text-align: center;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          justify-content: flex-start;
          gap: 6px;
        }

        .integration-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
        }

        .integration-card .eco-card-title {
          font-size: 0.92rem;
          line-height: 1.2;
        }

        .integration-card .eco-card-subtitle {
          font-size: 0.72rem;
          color: var(--text-3);
          margin: 2px 0 8px 0;
          font-weight: 600;
          line-height: 1.2;
        }

        .integration-info-box {
          font-size: 0.7rem;
          color: var(--text-2);
          margin-top: auto; /* Push to bottom to ensure equal height alignment */
          border-top: 1px dashed var(--border);
          padding-top: 10px;
          width: 100%;
          line-height: 1.35;
        }

        /* Bottom Core Checkmarks Grid */
        .core-checklist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 24px;
        }

        .core-check-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-2);
        }

        /* Responsive Layout Switchers */
        @media (min-width: 768px) {
          .md-hidden {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .hidden-md-block {
            display: none !important;
          }
          .flowstock-eco-container {
            padding: 24px 16px;
          }
          .eco-sub-modules-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .eco-engine-modules-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      {/* ─── DESKTOP & TABLET LAYOUT ─── */}
      <div className="eco-desktop-view hidden-md-block">
        
        {/* ROW 1: Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', zIndex: 2, position: 'relative' }}>
          {/* Section Info (Top-Left) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-dark)' }}>
                <IconEcosystem />
              </span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-1)', margin: 0, fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: '-0.02em' }}>
                FlowStock Ecosystem
              </h3>
            </div>
            <p style={{ fontSize: '0.76rem', color: 'var(--text-2)', margin: 0, maxWidth: '440px', lineHeight: 1.4, fontWeight: 500 }}>
              How customers, businesses, drivers and backend services interact inside the platform.
            </p>
          </div>

          {/* Business Owner Node (Centered) */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <motion.div variants={nodeVariants} className="eco-card" style={{ width: '100%', maxWidth: '280px', padding: '12px 14px', background: 'rgba(176,141,105,0.04)', borderColor: 'rgba(176,141,105,0.2)' }}>
              <div className="eco-card-header">
                <div className="eco-icon-circle" style={{ background: '#FFFFFF', border: '1px solid rgba(176,141,105,0.2)', color: 'var(--accent-dark)' }}>
                  <IconUser />
                </div>
                <div>
                  <h4 className="eco-card-title">Business Owner</h4>
                  <p className="eco-card-subtitle">Manages multiple businesses and monitors performance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Arrow between Business Owner and Admin Dashboard */}
        <div style={{ display: 'flex', justifyContent: 'center', height: '24px', alignItems: 'center', pointerEvents: 'none', zIndex: 1 }}>
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path id="flow-bo-to-admin" d="M6 0 L6 20" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 16 L6 20 L10 16" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle r="2" fill="var(--accent-dark)">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#flow-bo-to-admin" />
              </animateMotion>
            </circle>
          </svg>
        </div>

        {/* MIDDLE ROW: Customer Portal (Left) | Dashboard + API (Center) | Driver Portal (Right) */}
        <div className="eco-main-diagram-row">
          
          {/* Absolute SVG overlay for complex lines: Dashboard to Portals, Portals to API */}
          <svg viewBox="0 0 1000 360" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            <defs>
              <marker id="arrowhead-down" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#B08D69" />
              </marker>
              <marker id="arrowhead-right" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#8FA89B" />
              </marker>
              <marker id="arrowhead-left" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 10 0 L 0 5 L 10 10 z" fill="#6699CC" />
              </marker>
            </defs>

            {/* Dashboard left shoulder to Customer Portal top center */}
            <motion.path
              id="flow-dash-to-cust"
              variants={lineVariants}
              d="M 330 35 L 156 35 L 156 80"
              fill="none"
              stroke="#B08D69"
              strokeWidth="1.2"
              markerEnd="url(#arrowhead-down)"
            />
            <circle r="2.5" fill="#B08D69">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#flow-dash-to-cust" />
              </animateMotion>
            </circle>

            {/* Dashboard right shoulder to Driver Portal top center */}
            <motion.path
              id="flow-dash-to-driver"
              variants={lineVariants}
              d="M 670 35 L 844 35 L 844 80"
              fill="none"
              stroke="#B08D69"
              strokeWidth="1.2"
              markerEnd="url(#arrowhead-down)"
            />
            <circle r="2.5" fill="#B08D69">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#flow-dash-to-driver" />
              </animateMotion>
            </circle>

            {/* Customer Portal right to Backend API left */}
            <motion.path
              id="flow-cust-to-api"
              variants={lineVariants}
              d="M 230 250 L 310 250"
              fill="none"
              stroke="#8FA89B"
              strokeWidth="1.2"
              markerEnd="url(#arrowhead-right)"
            />
            <circle r="2.5" fill="#8FA89B">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#flow-cust-to-api" />
              </animateMotion>
            </circle>

            {/* Driver Portal left to Backend API right */}
            <motion.path
              id="flow-driver-to-api"
              variants={lineVariants}
              d="M 770 250 L 690 250"
              fill="none"
              stroke="#6699CC"
              strokeWidth="1.2"
              markerEnd="url(#arrowhead-left)"
            />
            <circle r="2.5" fill="#6699CC">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#flow-driver-to-api" />
              </animateMotion>
            </circle>
          </svg>

          {/* COLUMN 1: Customer Portal */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div variants={nodeVariants} className="eco-card portal-green-border" style={{ width: '100%', padding: '16px' }}>
              <div className="eco-card-header">
                <div className="eco-icon-circle" style={{ background: 'rgba(143, 168, 155, 0.1)', color: 'var(--green)' }}>
                  <IconPortalGreen />
                </div>
                <div>
                  <h4 className="eco-card-title" style={{ color: 'var(--green)' }}>Customer Portal</h4>
                  <p className="eco-card-subtitle">Self-service for customers</p>
                </div>
              </div>

              <div className="portal-list-items">
                <div className="portal-list-item-green">
                  <IconPlaceOrders /> Place Orders
                </div>
                <div className="portal-list-item-green">
                  <IconTrackOrders /> Track Orders
                </div>
                <div className="portal-list-item-green">
                  <IconDownloadInvoices /> Download Invoices
                </div>
                <div className="portal-list-item-green">
                  <IconRaiseComplaints /> Raise Complaints
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2: Center (Dashboard + API) */}
          <div className="eco-center-column">
            
            {/* Admin Dashboard */}
            <motion.div variants={nodeVariants} className="eco-card" style={{ width: '100%', maxWidth: '440px', padding: '16px', border: '1px solid rgba(176,141,105,0.25)' }}>
              <div className="eco-card-header" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', gap: 6 }}>
                <div className="eco-icon-circle" style={{ background: 'rgba(176, 141, 105, 0.06)', color: 'var(--accent-dark)', border: '1px solid rgba(176, 141, 105, 0.15)' }}>
                  <IconDashboard />
                </div>
                <div>
                  <h4 className="eco-card-title" style={{ fontSize: '0.9rem' }}>Admin Dashboard</h4>
                  <p className="eco-card-subtitle">Complete control over business operations</p>
                </div>
              </div>

              <div className="eco-sub-modules-row">
                <div className="eco-sub-pill-card">
                  <IconInventory />
                  <span className="eco-sub-pill-card-text">Inventory<br/>Mgmt</span>
                </div>
                <div className="eco-sub-pill-card">
                  <IconOrder />
                  <span className="eco-sub-pill-card-text">Order<br/>Mgmt</span>
                </div>
                <div className="eco-sub-pill-card">
                  <IconCustomers />
                  <span className="eco-sub-pill-card-text">Customer<br/>Mgmt</span>
                </div>
                <div className="eco-sub-pill-card">
                  <IconAnalytics />
                  <span className="eco-sub-pill-card-text">Analytics &<br/>Reports</span>
                </div>
                <div className="eco-sub-pill-card">
                  <IconBilling />
                  <span className="eco-sub-pill-card-text">Billing &<br/>Ops</span>
                </div>
              </div>
            </motion.div>

            {/* Vertical connector: Dashboard to API */}
            <div style={{ display: 'flex', justifyContent: 'center', height: '36px', alignItems: 'center', pointerEvents: 'none' }}>
              <svg width="12" height="36" viewBox="0 0 12 36" fill="none">
                <path id="flow-admin-to-api" d="M6 0 L6 32" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 28 L6 32 L10 28" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle r="2" fill="var(--accent-dark)">
                  <animateMotion dur="3.5s" repeatCount="indefinite">
                    <mpath href="#flow-admin-to-api" />
                  </animateMotion>
                </circle>
              </svg>
            </div>

            {/* Backend API Node */}
            <motion.div
              variants={nodeVariants}
              className="eco-card"
              style={{ width: '100%', maxWidth: '440px', padding: '16px', border: '1px solid rgba(147, 51, 234, 0.2)' }}
              animate={{ 
                scale: [1, 1.015, 1],
                boxShadow: ['0 4px 12px rgba(147,51,234,0.02)', '0 4px 20px rgba(147,51,234,0.12)', '0 4px 12px rgba(147,51,234,0.02)'],
                borderColor: ['rgba(147, 51, 234, 0.2)', 'rgba(147, 51, 234, 0.5)', 'rgba(147, 51, 234, 0.2)'],
                transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
              }}
            >
              <div className="eco-card-header" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', gap: 6 }}>
                <div>
                  <h4 className="eco-card-title" style={{ fontSize: '0.9rem', color: '#7C3AED' }}>Backend API</h4>
                  <p className="eco-card-subtitle">Core business logic & REST APIs</p>
                </div>
              </div>

              <div className="eco-engine-modules-row">
                <div className="eco-engine-pill-card">
                  <IconEngineOrder />
                  <span className="eco-engine-pill-card-text">Order<br/>Engine</span>
                </div>
                <div className="eco-engine-pill-card">
                  <IconEngineInventory />
                  <span className="eco-engine-pill-card-text">Inventory<br/>Engine</span>
                </div>
                <div className="eco-engine-pill-card">
                  <IconEngineNotification />
                  <span className="eco-engine-pill-card-text">Notification<br/>Engine</span>
                </div>
                <div className="eco-engine-pill-card">
                  <IconEngineBilling />
                  <span className="eco-engine-pill-card-text">Billing<br/>Engine</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* COLUMN 3: Driver Portal */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div variants={nodeVariants} className="eco-card portal-blue-border" style={{ width: '100%', padding: '16px' }}>
              <div className="eco-card-header">
                <div className="eco-icon-circle" style={{ background: 'rgba(102, 153, 204, 0.1)', color: '#6699CC' }}>
                  <IconPortalBlue />
                </div>
                <div>
                  <h4 className="eco-card-title" style={{ color: '#27405C' }}>Driver Portal</h4>
                  <p className="eco-card-subtitle">Manage deliveries efficiently</p>
                </div>
              </div>

              <div className="portal-list-items">
                <div className="portal-list-item-blue">
                  <IconDeliveryUpdates /> Delivery Updates
                </div>
                <div className="portal-list-item-blue">
                  <IconOtpVerification /> OTP Verification
                </div>
                <div className="portal-list-item-blue">
                  <IconRouteStatus /> Route Status
                </div>
                <div className="portal-list-item-blue">
                  <IconProofOfDelivery /> Proof of Delivery
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Split connector: API to Integrations */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '32px', pointerEvents: 'none', position: 'relative', zIndex: 1 }}>
          <svg width="100%" height="32" viewBox="0 0 1000 32" preserveAspectRatio="none">
            {/* Define the paths with IDs for line drawing and mpath */}
            <path id="path-api-to-postgres" d="M 500 0 L 500 16 L 167 16 L 167 28" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path id="path-api-to-twilio" d="M 500 0 L 500 28" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path id="path-api-to-pdf" d="M 500 0 L 500 16 L 833 16 L 833 28" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Arrow heads at the bottom of each branch */}
            <path d="M 163 24 L 167 28 L 171 24" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 496 24 L 500 28 L 504 24" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 829 24 L 833 28 L 837 24" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Glowing dots */}
            <circle r="2.5" fill="#336791">
              <animateMotion dur="5.5s" repeatCount="indefinite">
                <mpath href="#path-api-to-postgres" />
              </animateMotion>
            </circle>
            <circle r="2.5" fill="#F22F46">
              <animateMotion dur="4.5s" repeatCount="indefinite">
                <mpath href="#path-api-to-twilio" />
              </animateMotion>
            </circle>
            <circle r="2.5" fill="var(--accent-dark)">
              <animateMotion dur="5.5s" repeatCount="indefinite">
                <mpath href="#path-api-to-pdf" />
              </animateMotion>
            </circle>
          </svg>
        </div>

        {/* ROW 3: Third-Party Integrations */}
        <div className="eco-integrations-row">
          
          {/* Integration 1: PostgreSQL */}
          <motion.div variants={nodeVariants} className="eco-card integration-card">
            <div className="integration-icon-wrapper" style={{ background: 'rgba(51, 103, 145, 0.06)', borderColor: 'rgba(51, 103, 145, 0.2)', color: '#336791' }}>
              <IconDb />
            </div>
            <h4 className="eco-card-title">PostgreSQL</h4>
            <p className="eco-card-subtitle">Database</p>
            <div className="integration-info-box">
              Secure & Scalable<br/>Data Storage
            </div>
          </motion.div>

          {/* Integration 2: Twilio */}
          <motion.div variants={nodeVariants} className="eco-card integration-card">
            <div className="integration-icon-wrapper" style={{ background: 'rgba(242, 47, 70, 0.06)', borderColor: 'rgba(242, 47, 70, 0.2)' }}>
              <IconTwilio />
            </div>
            <h4 className="eco-card-title">Twilio</h4>
            <p className="eco-card-subtitle">SMS / WhatsApp</p>
            <div className="integration-info-box">
              Real-time Notifications<br/>& OTP Delivery
            </div>
          </motion.div>

          {/* Integration 3: PDF Engine */}
          <motion.div variants={nodeVariants} className="eco-card integration-card">
            <div className="integration-icon-wrapper" style={{ background: 'rgba(176, 141, 105, 0.06)', borderColor: 'rgba(176, 141, 105, 0.25)', color: 'var(--accent-dark)' }}>
              <IconPdf />
            </div>
            <h4 className="eco-card-title">PDF Engine</h4>
            <p className="eco-card-subtitle">Invoices</p>
            <div className="integration-info-box">
              Automated Invoice<br/>Generation
            </div>
          </motion.div>

        </div>

        {/* Row of 3 dashed connector arrows pointing down to Multi-Tenant Core */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: '32px', justifyItems: 'center', alignItems: 'center', pointerEvents: 'none' }}>
          <svg width="12" height="32" viewBox="0 0 12 32" fill="none">
            <path id="flow-postgres-to-core" d="M6 0 L6 28" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 24 L6 28 L10 24" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle r="2" fill="#336791">
              <animateMotion dur="3.5s" repeatCount="indefinite">
                <mpath href="#flow-postgres-to-core" />
              </animateMotion>
            </circle>
          </svg>
          <svg width="12" height="32" viewBox="0 0 12 32" fill="none">
            <path id="flow-twilio-to-core" d="M6 0 L6 28" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 24 L6 28 L10 24" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle r="2" fill="#F22F46">
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath href="#flow-twilio-to-core" />
              </animateMotion>
            </circle>
          </svg>
          <svg width="12" height="32" viewBox="0 0 12 32" fill="none">
            <path id="flow-pdf-to-core" d="M6 0 L6 28" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 24 L6 28 L10 24" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle r="2" fill="var(--accent-dark)">
              <animateMotion dur="3.5s" repeatCount="indefinite">
                <mpath href="#flow-pdf-to-core" />
              </animateMotion>
            </circle>
          </svg>
        </div>

        {/* ROW 4: Multi-Tenant Core (Bottom Box) */}
        <div className="eco-bottom-core-row">
          <motion.div variants={nodeVariants} className="eco-card" style={{ width: '100%', padding: '20px 24px', background: 'rgba(176,141,105,0.05)', borderColor: 'rgba(176,141,105,0.25)', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
            
            {/* Left Block */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: '1 1 250px' }}>
              <div className="eco-icon-circle" style={{ background: '#FFFFFF', border: '1px solid rgba(176,141,105,0.25)', color: 'var(--accent-dark)' }}>
                <IconShield />
              </div>
              <div>
                <h4 className="eco-card-title" style={{ fontSize: '0.92rem' }}>Multi-Tenant Core</h4>
                <p className="eco-card-subtitle" style={{ fontSize: '0.72rem' }}>Built for scale, security and isolation</p>
              </div>
            </div>

            {/* Right Block (Checklist) */}
            <div style={{ flex: '1 1 350px' }}>
              <div className="core-checklist-grid">
                <div className="core-check-item">
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 800 }}>✓</span> Business Isolation
                </div>
                <div className="core-check-item">
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 800 }}>✓</span> Real-Time Sync
                </div>
                <div className="core-check-item">
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 800 }}>✓</span> Role-Based Access
                </div>
                <div className="core-check-item">
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 800 }}>✓</span> Scalable SaaS Architecture
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>


      {/* ─── MOBILE LAYOUT (VERTICAL STACK) ─── */}
      <div
        className="eco-desktop-view md-hidden"
        style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        {/* Mobile Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-dark)' }}><IconEcosystem /></span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-1)', margin: 0, fontFamily: "'Bricolage Grotesque', sans-serif" }}>FlowStock Ecosystem</h3>
          </div>
          <p style={{ fontSize: '0.76rem', color: 'var(--text-2)', margin: 0, lineHeight: 1.3 }}>
            How customers, businesses, drivers and backend services interact inside the platform.
          </p>
        </div>

        {/* 1. Business Owner */}
        <motion.div variants={nodeVariants} className="eco-card" style={{ padding: '12px 14px', background: 'rgba(176,141,105,0.04)', borderColor: 'rgba(176,141,105,0.2)' }}>
          <div className="eco-card-header">
            <div className="eco-icon-circle" style={{ background: '#FFFFFF', border: '1px solid rgba(176,141,105,0.2)', color: 'var(--accent-dark)' }}>
              <IconUser />
            </div>
            <div>
              <h4 className="eco-card-title">Business Owner</h4>
              <p className="eco-card-subtitle">Manages multiple businesses and monitors performance</p>
            </div>
          </div>
        </motion.div>

        {/* Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center', height: '20px', alignItems: 'center' }}>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none"><path d="M5 0 L5 16 M2 13 L5 16 L8 13" stroke="var(--accent)" strokeWidth="1.5"/></svg>
        </div>

        {/* 2. Admin Dashboard */}
        <motion.div variants={nodeVariants} className="eco-card" style={{ padding: '16px', border: '1px solid rgba(176,141,105,0.25)' }}>
          <div className="eco-card-header" style={{ flexDirection: 'column', textAlign: 'center', gap: 4 }}>
            <div className="eco-icon-circle" style={{ background: 'rgba(176, 141, 105, 0.06)', color: 'var(--accent-dark)' }}>
              <IconDashboard />
            </div>
            <div>
              <h4 className="eco-card-title">Admin Dashboard</h4>
              <p className="eco-card-subtitle">Complete control over business operations</p>
            </div>
          </div>
          <div className="eco-sub-modules-row">
            <div className="eco-sub-pill-card">
              <IconInventory/>
              <span className="eco-sub-pill-card-text">Inventory<br/>Mgmt</span>
            </div>
            <div className="eco-sub-pill-card">
              <IconOrder/>
              <span className="eco-sub-pill-card-text">Order<br/>Mgmt</span>
            </div>
            <div className="eco-sub-pill-card">
              <IconCustomers/>
              <span className="eco-sub-pill-card-text">Customer<br/>Mgmt</span>
            </div>
            <div className="eco-sub-pill-card">
              <IconAnalytics/>
              <span className="eco-sub-pill-card-text">Analytics &<br/>Reports</span>
            </div>
            <div className="eco-sub-pill-card" style={{ gridColumn: 'span 2' }}>
              <IconBilling/>
              <span className="eco-sub-pill-card-text">Billing &<br/>Ops</span>
            </div>
          </div>
        </motion.div>

        {/* Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center', height: '20px', alignItems: 'center' }}>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none"><path d="M5 0 L5 16 M2 13 L5 16 L8 13" stroke="var(--accent)" strokeWidth="1.5"/></svg>
        </div>

        {/* 3. Customer Portal */}
        <motion.div variants={nodeVariants} className="eco-card portal-green-border" style={{ padding: '16px' }}>
          <div className="eco-card-header">
            <div className="eco-icon-circle" style={{ background: 'rgba(143, 168, 155, 0.1)', color: 'var(--green)' }}>
              <IconPortalGreen />
            </div>
            <div>
              <h4 className="eco-card-title" style={{ color: 'var(--green)' }}>Customer Portal</h4>
              <p className="eco-card-subtitle">Self-service for customers</p>
            </div>
          </div>
          <div className="portal-list-items">
            <div className="portal-list-item-green"><IconPlaceOrders /> Place Orders</div>
            <div className="portal-list-item-green"><IconTrackOrders /> Track Orders</div>
            <div className="portal-list-item-green"><IconDownloadInvoices /> Download Invoices</div>
            <div className="portal-list-item-green"><IconRaiseComplaints /> Raise Complaints</div>
          </div>
        </motion.div>

        {/* Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center', height: '20px', alignItems: 'center' }}>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none"><path d="M5 0 L5 16 M2 13 L5 16 L8 13" stroke="var(--accent)" strokeWidth="1.5"/></svg>
        </div>

        {/* 4. Driver Portal */}
        <motion.div variants={nodeVariants} className="eco-card portal-blue-border" style={{ padding: '16px' }}>
          <div className="eco-card-header">
            <div className="eco-icon-circle" style={{ background: 'rgba(102, 153, 204, 0.1)', color: '#6699CC' }}>
              <IconPortalBlue />
            </div>
            <div>
              <h4 className="eco-card-title" style={{ color: '#27405C' }}>Driver Portal</h4>
              <p className="eco-card-subtitle">Manage deliveries efficiently</p>
            </div>
          </div>
          <div className="portal-list-items">
            <div className="portal-list-item-blue"><IconDeliveryUpdates /> Delivery Updates</div>
            <div className="portal-list-item-blue"><IconOtpVerification /> OTP Verification</div>
            <div className="portal-list-item-blue"><IconRouteStatus /> Route Status</div>
            <div className="portal-list-item-blue"><IconProofOfDelivery /> Proof of Delivery</div>
          </div>
        </motion.div>

        {/* Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center', height: '20px', alignItems: 'center' }}>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none"><path d="M5 0 L5 16 M2 13 L5 16 L8 13" stroke="var(--accent)" strokeWidth="1.5"/></svg>
        </div>

        {/* 5. Backend API */}
        <motion.div variants={nodeVariants} className="eco-card" style={{ padding: '16px', border: '1px solid rgba(147, 51, 234, 0.2)' }}>
          <div className="eco-card-header" style={{ flexDirection: 'column', textAlign: 'center', gap: 4 }}>
            <div>
              <h4 className="eco-card-title" style={{ color: '#7C3AED' }}>Backend API</h4>
              <p className="eco-card-subtitle">Core business logic & REST APIs</p>
            </div>
          </div>
          <div className="eco-engine-modules-row">
            <div className="eco-engine-pill-card">
              <IconEngineOrder/>
              <span className="eco-engine-pill-card-text">Order<br/>Engine</span>
            </div>
            <div className="eco-engine-pill-card">
              <IconEngineInventory/>
              <span className="eco-engine-pill-card-text">Inventory<br/>Engine</span>
            </div>
            <div className="eco-engine-pill-card">
              <IconEngineNotification/>
              <span className="eco-engine-pill-card-text">Notification<br/>Engine</span>
            </div>
            <div className="eco-engine-pill-card">
              <IconEngineBilling/>
              <span className="eco-engine-pill-card-text">Billing<br/>Engine</span>
            </div>
          </div>
        </motion.div>

        {/* Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center', height: '20px', alignItems: 'center' }}>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none"><path d="M5 0 L5 16 M2 13 L5 16 L8 13" stroke="var(--accent)" strokeWidth="1.5"/></svg>
        </div>

        {/* 6. Integrations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <motion.div variants={nodeVariants} className="eco-card" style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ color: '#336791', display: 'flex', alignItems: 'center' }}>
              <IconDb />
            </div>
            <div>
              <h4 className="eco-card-title" style={{ fontSize: '0.78rem' }}>PostgreSQL Database</h4>
              <p className="eco-card-subtitle" style={{ fontSize: '0.64rem' }}>Secure & Scalable Data Storage</p>
            </div>
          </motion.div>
          
          <motion.div variants={nodeVariants} className="eco-card" style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconTwilio />
            </div>
            <div>
              <h4 className="eco-card-title" style={{ fontSize: '0.78rem' }}>Twilio SMS / WhatsApp</h4>
              <p className="eco-card-subtitle" style={{ fontSize: '0.64rem' }}>Real-time Notifications & OTP Delivery</p>
            </div>
          </motion.div>

          <motion.div variants={nodeVariants} className="eco-card" style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ color: 'var(--accent-dark)', display: 'flex', alignItems: 'center' }}>
              <IconPdf />
            </div>
            <div>
              <h4 className="eco-card-title" style={{ fontSize: '0.78rem' }}>PDF Engine Invoices</h4>
              <p className="eco-card-subtitle" style={{ fontSize: '0.64rem' }}>Automated Invoice Generation</p>
            </div>
          </motion.div>
        </div>

        {/* Dashed Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center', height: '20px', alignItems: 'center' }}>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none"><path d="M5 0 L5 16 M2 13 L5 16 L8 13" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 3"/></svg>
        </div>

        {/* 7. Multi-Tenant Core */}
        <motion.div variants={nodeVariants} className="eco-card" style={{ padding: '16px', background: 'rgba(176,141,105,0.05)', borderColor: 'rgba(176,141,105,0.25)' }}>
          <div className="eco-card-header" style={{ gap: 12, marginBottom: 12 }}>
            <div className="eco-icon-circle" style={{ background: '#FFFFFF', border: '1px solid rgba(176,141,105,0.25)', color: 'var(--accent-dark)' }}>
              <IconShield />
            </div>
            <div>
              <h4 className="eco-card-title">Multi-Tenant Core</h4>
              <p className="eco-card-subtitle">Built for scale, security and isolation</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div className="core-check-item">✓ Business Isolation</div>
            <div className="core-check-item">✓ Real-Time Sync</div>
            <div className="core-check-item">✓ Role-Based Access</div>
            <div className="core-check-item">✓ Scalable SaaS Architecture</div>
          </div>
        </motion.div>

      </div>

    </motion.div>
  )
}
