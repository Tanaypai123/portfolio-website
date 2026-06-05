'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, ChevronRight, Layers, Users, BarChart3, Shield } from 'lucide-react'

const products = [
  {
    id: 'flowstock',
    name: 'FlowStock',
    category: 'B2B Inventory & Logistics SaaS',
    status: 'Building',
    statusColor: 'badge-purple',
    description:
      'FlowStock is a multi-tenant SaaS platform built for Indian wholesale and distribution businesses. It enables inventory management, order tracking, logistics operations, customer management, driver workflows, invoicing, analytics, and business reporting through a unified platform.',
    highlights: [
      { icon: <Layers size={14} />, text: 'Multi-tenant Architecture' },
      { icon: <Users size={14} />, text: 'Driver Management System' },
      { icon: <BarChart3 size={14} />, text: 'Analytics Dashboard' },
      { icon: <Shield size={14} />, text: 'Role-based Authentication' },
    ],
    features: [
      'Multi-tenant architecture',
      'Inventory management',
      'Order management',
      'Driver management system',
      'Customer portal',
      'OTP-based delivery verification',
      'WhatsApp & SMS notifications',
      'PDF invoice generation',
      'Analytics dashboard',
      'Business reporting',
      'Complaint management',
      'Customer lead matching',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Twilio', 'PDFKit', 'Cloudflare Pages', 'Render'],
    architecture: [
      'Role-based authentication',
      'Multi-business isolation',
      'PostgreSQL architecture',
      'API-driven backend',
      'Real-time notifications',
      'Scalable SaaS architecture',
    ],
    gradient: 'from-purple-600 to-indigo-600',
    accentColor: 'purple',
    letter: 'F',
    isPrimary: true,
  },
  {
    id: 'hireblind',
    name: 'HireBlind',
    category: 'AI-Powered Recruitment Platform',
    status: 'Completed',
    statusColor: 'badge-green',
    description:
      'HireBlind is an AI-assisted blind hiring platform that helps reduce recruitment bias through resume anonymization, explainable AI scoring, and transparent candidate ranking.',
    highlights: [
      { icon: <Shield size={14} />, text: 'PII Removal Engine' },
      { icon: <Layers size={14} />, text: 'AI Scoring Engine' },
      { icon: <BarChart3 size={14} />, text: 'Explainability Layer' },
      { icon: <Users size={14} />, text: 'Recruiter Management' },
    ],
    features: [
      'Resume anonymization',
      'PII removal engine',
      'AI-powered resume screening',
      'Explainable ranking system',
      'Human override workflow',
      'Audit logging',
      'Blind interview scheduling',
      'Candidate scoring dashboard',
      'Recruiter management',
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Claude API', 'JWT Authentication'],
    architecture: [
      'Two-stage PII removal',
      'AI scoring engine',
      'Explainability layer',
      'Audit trail system',
      'EU AI Act inspired design',
    ],
    gradient: 'from-indigo-600 to-purple-700',
    accentColor: 'indigo',
    letter: 'H',
    isPrimary: false,
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`glass-card rounded-2xl overflow-hidden border border-white/[0.06] hover:border-purple-500/20 transition-all duration-500 group ${
        product.isPrimary ? 'col-span-1 lg:col-span-2' : ''
      }`}
    >
      {product.isPrimary ? (
        /* Primary/Hero Product Layout */
        <div className="flex flex-col lg:flex-row">
          {/* Left panel */}
          <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            <div>
              {/* Product icon + name */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white font-black text-2xl shadow-lg`}
                  >
                    {product.letter}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                    <p className="text-slate-500 text-sm mt-0.5">{product.category}</p>
                  </div>
                </div>
                <span className={`badge ${product.statusColor}`}>
                  <span className={product.status === 'Building' ? 'dot-pulse' : ''} />
                  {product.status}
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm mb-8">
                {product.description}
              </p>

              {/* Highlight cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {product.highlights.map((h, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 flex items-center gap-2">
                    <span className="text-purple-400">{h.icon}</span>
                    <span className="text-slate-300 text-xs font-medium">{h.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-slate-600 text-xs font-medium uppercase tracking-wider mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col">
            <div className="mb-6">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition-colors mb-4"
              >
                <span>Key Features</span>
                <ChevronRight
                  size={14}
                  className={`transition-transform ${expanded ? 'rotate-90' : ''}`}
                />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.slice(0, expanded ? undefined : 6).map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-slate-600 text-xs font-medium uppercase tracking-wider mb-3">
                Architecture Highlights
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.architecture.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Secondary Product Layout */
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white font-black text-xl shadow-lg`}
              >
                {product.letter}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-slate-500 text-sm mt-0.5">{product.category}</p>
              </div>
            </div>
            <span className={`badge ${product.statusColor}`}>
              {product.status}
            </span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {product.highlights.map((h, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-2.5 flex items-center gap-2">
                <span className="text-indigo-400">{h.icon}</span>
                <span className="text-slate-300 text-xs font-medium">{h.text}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-6">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-wider mb-3">
              Key Features
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {product.features.slice(0, 6).map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-6">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-wider mb-3">
              Architecture
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.architecture.map((a) => (
                <span key={a} className="text-xs text-slate-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-lg">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Tech */}
          <div>
            <p className="text-slate-600 text-xs font-medium uppercase tracking-wider mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {product.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" className="section-padding relative" ref={ref}>
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge badge-purple mb-4">
            <ExternalLink size={11} />
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            Products I&apos;ve Built
          </h2>
          <p className="text-slate-400 max-w-xl text-lg">
            Real software solving real problems — not tutorials or side experiments.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
