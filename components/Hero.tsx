'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download, ExternalLink } from 'lucide-react'

const floatingOrbs = [
  { size: 300, top: '10%', left: '5%', delay: 0, duration: 8 },
  { size: 200, top: '60%', right: '8%', delay: 2, duration: 10 },
  { size: 150, top: '30%', right: '25%', delay: 4, duration: 7 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* Ambient orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: (orb as any).left,
            right: (orb as any).right,
            background: `radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="badge badge-green">
              <span className="dot-pulse" />
              Open to Opportunities
            </span>
            <span className="text-slate-500 text-sm flex items-center gap-1.5">
              <MapPin size={13} />
              Jaipur, Rajasthan, India
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-white">Tanay</span>
            <br />
            <span className="gradient-text">Sharma</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mb-8 leading-relaxed"
          >
            Building software products that solve{' '}
            <span className="text-slate-200 font-medium">real business problems.</span>
          </motion.p>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              '⚡ Full Stack Developer',
              '🎓 B.Tech CSE @ SKIT Jaipur',
              '🚀 Open to SWE Opportunities',
            ].map((pill) => (
              <span
                key={pill}
                className="px-4 py-2 rounded-full text-sm text-slate-300 bg-white/[0.04] border border-white/[0.08]"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a href="#products" className="btn-primary">
              View Products
              <ExternalLink size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-5"
          >
            <span className="text-slate-600 text-sm">Find me on</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Tanaypai123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
              >
                <Github size={18} className="group-hover:text-purple-400 transition-colors" />
                GitHub
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://www.linkedin.com/in/connectanaysharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
              >
                <Linkedin size={18} className="group-hover:text-purple-400 transition-colors" />
                LinkedIn
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="mailto:panwadiyatanay@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
              >
                <Mail size={18} className="group-hover:text-purple-400 transition-colors" />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
