'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, GitBranch, Star, GitFork } from 'lucide-react'

const repos = [
  {
    name: 'FlowStock',
    description: 'Multi-tenant B2B Inventory & Logistics SaaS platform for Indian wholesale businesses.',
    stars: '⭐',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    url: 'https://github.com/Tanaypai123',
    isPrivate: true,
  },
  {
    name: 'HireBlind',
    description: 'AI-powered blind hiring platform with resume anonymization and explainable scoring.',
    stars: '⭐',
    tech: ['React', 'Claude API', 'Supabase'],
    url: 'https://github.com/Tanaypai123',
    isPrivate: true,
  },
  {
    name: 'News App',
    description: 'Responsive news website with category filtering built with NewsAPI integration.',
    stars: '⭐',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/Tanaypai123',
    isPrivate: false,
  },
]

export default function GitHub() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="github" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge badge-purple mb-4">
            <Github size={11} />
            GitHub
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            Open Source & Activity
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Code speaks louder than words.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl">
                  T
                </div>
                <div>
                  <p className="text-white font-bold">Tanay Sharma</p>
                  <p className="text-slate-500 text-sm">@Tanaypai123</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Repos', value: '10+' },
                  { label: 'Projects', value: '2' },
                  { label: 'Hackathons', value: '4+' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-white/[0.03] rounded-xl p-3">
                    <p className="text-white font-bold text-lg">{stat.value}</p>
                    <p className="text-slate-600 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Full Stack Developer building SaaS products. B.Tech CSE @ SKIT Jaipur.
              </p>
            </div>

            <a
              href="https://github.com/Tanaypai123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 justify-center text-sm"
            >
              <Github size={15} />
              View GitHub Profile
            </a>
          </motion.div>

          {/* Repository Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {repos.map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card glass-card-hover rounded-xl p-5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <GitBranch size={15} className="text-purple-400" />
                      <h3 className="text-white font-semibold">{repo.name}</h3>
                      {repo.isPrivate && (
                        <span className="text-xs text-slate-500 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded">
                          Private
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{repo.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {repo.tech.map((t) => (
                        <span key={t} className="tech-tag text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-slate-500 hover:text-purple-400 transition-colors flex-shrink-0"
                    aria-label={`View ${repo.name} on GitHub`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Activity note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card rounded-xl p-5 flex items-center gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <Star size={15} className="text-purple-400" />
              </div>
              <div>
                <p className="text-slate-300 text-sm font-medium">Actively Building</p>
                <p className="text-slate-500 text-xs mt-0.5">
                  Currently working on FlowStock — committing regularly
                </p>
              </div>
              <a
                href="https://github.com/Tanaypai123"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto btn-secondary text-xs py-1.5 px-3"
              >
                Follow
                <ExternalLink size={12} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
