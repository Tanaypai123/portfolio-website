'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'INOVIZE IT SOLUTIONS',
    period: 'Internship',
    type: 'Full Stack',
    color: 'purple',
    highlights: [
      'Developed React applications with modern UI/UX',
      'Built REST APIs using Node.js and Express.js',
      'Worked across frontend and backend systems',
      'Gained production-level development experience',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    role: 'Summer Internship',
    company: 'Kistenchosoftware',
    period: 'Summer Internship',
    type: 'Frontend',
    color: 'indigo',
    highlights: [
      'Developed a News Website using NewsAPI integration',
      'Implemented category filtering and search',
      'Built responsive frontend using HTML, CSS and JavaScript',
      'Delivered a clean, user-friendly news experience',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'NewsAPI'],
  },
]

const colorMap: Record<string, string> = {
  purple: 'from-purple-600 to-purple-700',
  indigo: 'from-indigo-600 to-indigo-700',
}

const badgeColorMap: Record<string, string> = {
  purple: 'bg-purple-600/10 border-purple-500/20 text-purple-400',
  indigo: 'bg-indigo-600/10 border-indigo-500/20 text-indigo-400',
}

const dotColorMap: Record<string, string> = {
  purple: 'bg-purple-500',
  indigo: 'bg-indigo-500',
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge badge-purple mb-4">
            <Briefcase size={11} />
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            Work Experience
          </h2>
          <p className="text-slate-400 text-lg">
            Building real products across the full stack.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/50 via-indigo-600/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-6 md:gap-10 relative"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10 hidden md:flex items-start justify-center w-10">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${colorMap[exp.color]} flex items-center justify-center shadow-lg mt-5`}
                  >
                    <Briefcase size={16} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-card glass-card-hover rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-300 font-semibold text-sm">{exp.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${badgeColorMap[exp.color]}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-2 gap-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <div className={`w-1.5 h-1.5 rounded-full ${dotColorMap[exp.color]} flex-shrink-0 mt-1.5`} />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
