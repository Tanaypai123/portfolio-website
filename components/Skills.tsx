'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, Database, Wrench, Cloud, Plug } from 'lucide-react'

const skillCategories = [
  {
    label: 'Frontend',
    icon: <Code2 size={16} />,
    color: 'purple',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    icon: <Server size={16} />,
    color: 'indigo',
    skills: ['Node.js', 'Express.js'],
  },
  {
    label: 'Database',
    icon: <Database size={16} />,
    color: 'violet',
    skills: ['PostgreSQL', 'Supabase'],
  },
  {
    label: 'Tools',
    icon: <Wrench size={16} />,
    color: 'blue',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    label: 'Cloud & Deployment',
    icon: <Cloud size={16} />,
    color: 'cyan',
    skills: ['Cloudflare Pages', 'Render'],
  },
  {
    label: 'Integrations',
    icon: <Plug size={16} />,
    color: 'pink',
    skills: ['Twilio', 'PDFKit', 'Google Maps API'],
  },
]

const colorStyles: Record<string, { icon: string; border: string; bg: string }> = {
  purple: {
    icon: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-600/10',
  },
  indigo: {
    icon: 'text-indigo-400',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-600/10',
  },
  violet: {
    icon: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-600/10',
  },
  blue: {
    icon: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-600/10',
  },
  cyan: {
    icon: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-600/10',
  },
  pink: {
    icon: 'text-pink-400',
    border: 'border-pink-500/20',
    bg: 'bg-pink-600/10',
  },
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge badge-purple mb-4">
            <Code2 size={11} />
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            Tech Stack
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Tools and technologies I use to build full-stack products from idea to production.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const style = colorStyles[cat.color]
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card glass-card-hover rounded-2xl p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl ${style.bg} border ${style.border} flex items-center justify-center`}>
                    <span className={style.icon}>{cat.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    {cat.label}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
