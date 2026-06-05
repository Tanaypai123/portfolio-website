'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, MapPin, Phone, Send, ArrowUpRight } from 'lucide-react'

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'panwadiyatanay@gmail.com',
    href: 'mailto:panwadiyatanay@gmail.com',
    description: 'Best way to reach me',
    color: 'purple',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'connectanaysharma',
    href: 'https://www.linkedin.com/in/connectanaysharma/',
    description: 'Connect professionally',
    color: 'blue',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'Tanaypai123',
    href: 'https://github.com/Tanaypai123',
    description: 'See my code & projects',
    color: 'slate',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 8824437092',
    href: 'tel:+918824437092',
    description: 'Available for calls',
    color: 'emerald',
  },
]

const colorStyles: Record<string, { bg: string; border: string; icon: string; arrow: string }> = {
  purple: {
    bg: 'bg-purple-600/10',
    border: 'border-purple-500/20',
    icon: 'text-purple-400',
    arrow: 'group-hover:text-purple-400',
  },
  blue: {
    bg: 'bg-blue-600/10',
    border: 'border-blue-500/20',
    icon: 'text-blue-400',
    arrow: 'group-hover:text-blue-400',
  },
  slate: {
    bg: 'bg-slate-600/10',
    border: 'border-slate-500/20',
    icon: 'text-slate-400',
    arrow: 'group-hover:text-slate-300',
  },
  emerald: {
    bg: 'bg-emerald-600/10',
    border: 'border-emerald-500/20',
    icon: 'text-emerald-400',
    arrow: 'group-hover:text-emerald-400',
  },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge badge-purple mb-4 mx-auto">
            <Send size={11} />
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Open to full-time roles, internships, and interesting collaboration opportunities.
            Don&apos;t hesitate to reach out.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-sm">
            <MapPin size={13} />
            Jaipur, Rajasthan, India
          </div>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <a
            href="mailto:panwadiyatanay@gmail.com"
            className="btn-primary text-base py-3.5 px-8 purple-glow-hover transition-all duration-300"
          >
            <Mail size={18} />
            Send Me an Email
          </a>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link, i) => {
            const style = colorStyles[link.color]
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="glass-card glass-card-hover rounded-xl p-5 group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${style.bg} border ${style.border} flex items-center justify-center`}>
                    <span className={style.icon}>{link.icon}</span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className={`text-slate-600 transition-colors ${style.arrow}`}
                  />
                </div>
                <p className="text-white font-semibold text-sm mb-0.5">{link.label}</p>
                <p className="text-slate-500 text-xs mb-2">{link.description}</p>
                <p className={`text-xs font-medium ${style.icon} truncate`}>{link.value}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <span className="dot-pulse" />
            <span className="text-slate-300 text-sm font-medium">
              Available for opportunities
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500 text-sm">Response within 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
