import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import flowstockImg from '../flowstock.png'

export default function FlowStockLivePreview() {
  const [mode, setMode] = useState('tour') // 'tour' or 'live'
  const [activeTab, setActiveTab] = useState(0) // 0: Dashboard, 1: Inventory, 2: Orders, 3: Analytics

  // Auto-play interval for the product tour
  useEffect(() => {
    if (mode !== 'tour') return
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % 4)
    }, 3500)
    return () => clearInterval(interval)
  }, [mode])

  // Float animation using Framer Motion
  const floatTransition = {
    y: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }

  const tabLabels = ['Dashboard', 'Inventory', 'Orders', 'Analytics']

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={floatTransition}
      whileHover={{ scale: 1.03 }}
      style={{
        width: '100%',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border)',
        borderRadius: '20px',
        boxShadow: '0 20px 48px rgba(0, 0, 0, 0.035)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        aspectRatio: '1.35',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default'
      }}
      className="flowstock-live-preview-box"
    >
      {/* Browser Bar */}
      <div style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        {/* Three Window Controls */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f' }} />
        </div>

        {/* URL Bar */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1.5px solid var(--border)',
          borderRadius: '8px',
          fontSize: '0.74rem',
          color: 'var(--text-2)',
          padding: '4px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: 600,
          letterSpacing: '0.01em',
          flexGrow: 1,
          maxWidth: '240px',
          justifyContent: 'center',
          margin: '0 auto'
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span>flowstock.pages.dev</span>
        </div>

        {/* Live Indicator, Tour/Live Switcher, and Expand CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Pulsing Live Dot */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(96, 143, 123, 0.08)',
            border: '1px solid rgba(96, 143, 123, 0.15)',
            padding: '3px 8px',
            borderRadius: '6px',
            fontSize: '0.68rem',
            fontWeight: 700,
            color: '#4B6B5B'
          }}>
            <span className="live-dot-pulsing" style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#608F7B',
              display: 'inline-block'
            }} />
            <span>LIVE</span>
          </div>

          {/* Selector Switch (Tour / Live App) */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '2px',
            borderRadius: '8px',
            display: 'flex',
            gap: '2px'
          }}>
            <button
              onClick={() => setMode('tour')}
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '4px 10px',
                border: 'none',
                borderRadius: '6px',
                background: mode === 'tour' ? 'var(--accent)' : 'transparent',
                color: mode === 'tour' ? '#fff' : 'var(--text-2)',
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              Tour
            </button>
            <button
              onClick={() => setMode('live')}
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '4px 10px',
                border: 'none',
                borderRadius: '6px',
                background: mode === 'live' ? 'var(--accent)' : 'transparent',
                color: mode === 'live' ? '#fff' : 'var(--text-2)',
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              Live App
            </button>
          </div>

          {/* Expand CTA Link Button with Tooltip */}
          <div className="tooltip-container" style={{ position: 'relative' }}>
            <a
              href="https://flowstock.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="expand-btn"
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '6px 12px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: 'var(--text-1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="expand-btn-icon">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
              <span>Expand</span>
            </a>
            <span className="tooltip-text">Open Full Application</span>
          </div>
        </div>
      </div>

      {/* Browser Body */}
      <div style={{ flexGrow: 1, position: 'relative', overflow: 'hidden', background: '#FDFDFD', display: 'flex', flexDirection: 'column' }}>
        {mode === 'live' ? (
          <iframe
            src="https://flowstock.pages.dev/landing"
            title="FlowStock Live App"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block'
            }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Tour Sub-Tabs */}
            <div style={{
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              padding: '0 12px',
              gap: '2px',
              overflowX: 'auto'
            }}>
              {tabLabels.map((label, idx) => (
                <button
                  key={label}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: activeTab === idx ? 750 : 550,
                    padding: '10px 14px',
                    border: 'none',
                    background: 'transparent',
                    color: activeTab === idx ? 'var(--accent-dark)' : 'var(--text-3)',
                    borderBottom: activeTab === idx ? '2px solid var(--accent)' : '2px solid transparent',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Slideshow Content */}
            <div style={{ flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.div
                    key="tab-dashboard"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                  >
                    <img
                      src={flowstockImg}
                      alt="FlowStock Dashboard"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      background: 'rgba(0,0,0,0.65)',
                      color: '#fff',
                      fontSize: '0.62rem',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontWeight: 500
                    }}>
                      Actual App Dashboard
                    </div>
                  </motion.div>
                )}

                {activeTab === 1 && (
                  <motion.div
                    key="tab-inventory"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%', height: '100%', display: 'flex', background: '#F8F9FA' }}
                  >
                    {/* Simulated App Sidebar */}
                    <div style={{ width: '50px', borderRight: '1px solid #EAEAEA', background: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '12px', gap: '14px' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--accent-dim)' }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#EAEAEA' }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: 'var(--accent)', opacity: 0.7 }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#EAEAEA' }} />
                    </div>

                    {/* Inventory Main Panel */}
                    <div style={{ flexGrow: 1, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#111' }}>Stock Inventory</span>
                        <span style={{ fontSize: '0.68rem', padding: '2px 8px', background: 'var(--accent-dim)', color: 'var(--accent-dark)', borderRadius: '6px', fontWeight: 700 }}>4 Items Low</span>
                      </div>

                      {/* Mock Table */}
                      <div style={{ background: '#FFF', border: '1px solid #E5E5E5', borderRadius: '8px', overflow: 'hidden' }}>
                        {/* Table Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', background: '#FAFBFB', borderBottom: '1px solid #E5E5E5', padding: '6px 10px', fontSize: '0.64rem', fontWeight: 700, color: '#555' }}>
                          <span>Product Item</span>
                          <span>Stock Level</span>
                          <span style={{ textAlign: 'right' }}>Status</span>
                        </div>
                        {/* Items */}
                        {[
                          { name: 'Premium Basmati Rice', level: 85, color: '#608F7B', status: 'In Stock' },
                          { name: 'Refined Sunflower Oil', level: 25, color: '#D7C7B5', status: 'Low Stock' },
                          { name: 'Chana Dal Premium', level: 90, color: '#608F7B', status: 'In Stock' },
                          { name: 'Refined White Sugar', level: 0, color: '#FF6b6b', status: 'Out of Stock' }
                        ].map((item, idx) => (
                          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', borderBottom: idx < 3 ? '1px solid #EFEFEF' : 'none', padding: '7px 10px', fontSize: '0.68rem', alignItems: 'center' }}>
                            <span style={{ fontWeight: 650, color: '#222' }}>{item.name}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <div style={{ width: '32px', height: '4px', background: '#EEE', borderRadius: '2px', overflow: 'hidden' }}>
                                <div style={{ width: `${item.level}%`, height: '100%', background: item.color }} />
                              </div>
                              <span style={{ fontSize: '0.58rem', color: '#666' }}>{item.level}%</span>
                            </div>
                            <span style={{
                              textAlign: 'right',
                              fontWeight: 700,
                              fontSize: '0.58rem',
                              color: item.status === 'In Stock' ? '#4B6B5B' : item.status === 'Low Stock' ? '#8E704E' : '#C92A2A'
                            }}>{item.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 2 && (
                  <motion.div
                    key="tab-orders"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%', height: '100%', display: 'flex', background: '#F8F9FA' }}
                  >
                    {/* Simulated App Sidebar */}
                    <div style={{ width: '50px', borderRight: '1px solid #EAEAEA', background: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '12px', gap: '14px' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--accent-dim)' }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: 'var(--accent)', opacity: 0.7 }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#EAEAEA' }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#EAEAEA' }} />
                    </div>

                    {/* Orders Main Panel */}
                    <div style={{ flexGrow: 1, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#111' }}>Live Order Stream</span>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <span style={{ fontSize: '0.58rem', padding: '2px 6px', background: '#EAEAEA', borderRadius: '4px', fontWeight: 600 }}>Filter: All</span>
                        </div>
                      </div>

                      {/* Mock pipeline list */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {[
                          { id: 'ORD-5924', client: 'Delhi Logistics Hub', value: '₹24,500', status: 'Out for Delivery', badgeBg: 'rgba(96,143,123,0.12)', badgeColor: '#4B6B5B' },
                          { id: 'ORD-5923', client: 'Jaipur Super Stockist', value: '₹118,200', status: 'Assigned Driver', badgeBg: 'rgba(176,141,105,0.12)', badgeColor: '#8E704E' },
                          { id: 'ORD-5922', client: 'Bikaner Grocery Mart', value: '₹8,900', status: 'Delivered', badgeBg: '#E9ECEF', badgeColor: '#495057' }
                        ].map((ord) => (
                          <div key={ord.id} style={{ background: '#FFF', border: '1px solid #E5E5E5', borderRadius: '8px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ fontSize: '0.64rem', fontWeight: 700, color: 'var(--text-3)' }}>{ord.id}</span>
                              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#111' }}>{ord.client}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--accent-dark)' }}>{ord.value}</span>
                              <span style={{
                                fontSize: '0.58rem',
                                fontWeight: 700,
                                padding: '3px 8px',
                                borderRadius: '5px',
                                background: ord.badgeBg,
                                color: ord.badgeColor
                              }}>{ord.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 3 && (
                  <motion.div
                    key="tab-analytics"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%', height: '100%', display: 'flex', background: '#F8F9FA' }}
                  >
                    {/* Simulated App Sidebar */}
                    <div style={{ width: '50px', borderRight: '1px solid #EAEAEA', background: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '12px', gap: '14px' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--accent-dim)' }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#EAEAEA' }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#EAEAEA' }} />
                      <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: 'var(--accent)', opacity: 0.7 }} />
                    </div>

                    {/* Analytics Main Panel */}
                    <div style={{ flexGrow: 1, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#111' }}>Business Metrics Overview</span>

                      {/* Top stat rows */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                        {[
                          { lbl: 'Gross Value', val: '₹3.42L' },
                          { lbl: 'Total Orders', val: '1,420' },
                          { lbl: 'Completion', val: '98.4%' }
                        ].map((stat, idx) => (
                          <div key={idx} style={{ background: '#FFF', border: '1px solid #E5E5E5', borderRadius: '6px', padding: '6px 8px' }}>
                            <p style={{ fontSize: '0.54rem', color: 'var(--text-3)', fontWeight: 600 }}>{stat.lbl}</p>
                            <p style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--accent-dark)', marginTop: '2px' }}>{stat.val}</p>
                          </div>
                        ))}
                      </div>

                      {/* Chart container */}
                      <div style={{ flexGrow: 1, background: '#FFF', border: '1px solid #E5E5E5', borderRadius: '8px', padding: '8px', display: 'flex', flexDirection: 'column', justifyBetween: 'center' }}>
                        <span style={{ fontSize: '0.58rem', fontWeight: 700, color: '#666', marginBottom: '4px' }}>Monthly Sales (Last 6 Months)</span>
                        <div style={{ width: '100%', flexGrow: 1, position: 'relative', minHeight: '60px' }}>
                          {/* Elegant Mock SVG Line Chart */}
                          <svg viewBox="0 0 100 35" style={{ width: '100%', height: '100%' }}>
                            <defs>
                              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path d="M 0 30 Q 20 10, 40 25 T 80 15 T 100 5 L 100 35 L 0 35 Z" fill="url(#chartGrad)" />
                            <path d="M 0 30 Q 20 10, 40 25 T 80 15 T 100 5" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
                            {/* Points */}
                            <circle cx="20" cy="18" r="1.5" fill="var(--accent-dark)" />
                            <circle cx="40" cy="25" r="1.5" fill="var(--accent-dark)" />
                            <circle cx="60" cy="18" r="1.5" fill="var(--accent-dark)" />
                            <circle cx="80" cy="15" r="1.5" fill="var(--accent-dark)" />
                            <circle cx="100" cy="5" r="1.5" fill="var(--accent-dark)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      {/* CSS overrides for pulsing green live indicator dot, tooltips, and hover effects */}
      <style>{`
        .live-dot-pulsing {
          animation: pulse-live-dot 1.8s ease-in-out infinite;
        }
        @keyframes pulse-live-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.35);
            opacity: 0.45;
          }
        }
        .flowstock-live-preview-box:hover {
          box-shadow: 0 30px 72px rgba(0, 0, 0, 0.08) !important;
          border-color: rgba(176, 141, 105, 0.3) !important;
        }
        .expand-btn {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .expand-btn:hover {
          transform: translateY(-2px) scale(1.03);
          border-color: rgba(176, 141, 105, 0.4) !important;
          background: var(--accent) !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(176, 141, 105, 0.35) !important;
        }
        .expand-btn-icon {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .expand-btn:hover .expand-btn-icon {
          transform: rotate(15deg);
        }
        .tooltip-container {
          position: relative;
          display: inline-block;
        }
        .tooltip-text {
          visibility: hidden;
          width: 140px;
          background-color: #222;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;
          position: absolute;
          z-index: 100;
          bottom: 135%;
          left: 50%;
          margin-left: -70px;
          opacity: 0;
          transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          transform: scale(0.95) translateY(4px);
          font-size: 0.68rem;
          font-weight: 600;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .tooltip-container:hover .tooltip-text {
          visibility: visible;
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      `}</style>
    </motion.div>
  )
}
