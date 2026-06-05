'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Zap, Target, BookOpen } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="badge badge-purple">
            <User size={11} />
            About Me
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Turning ideas into{' '}
              <span className="gradient-text">production-ready</span>{' '}
              software
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-6"
            >
              I&apos;m a Full Stack Developer passionate about building scalable software
              products and solving real-world business challenges. I enjoy designing
              systems, creating intuitive user experiences, and transforming ideas
              into production-ready applications.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
            >
              My work focuses on{' '}
              <span className="text-purple-400 font-medium">SaaS platforms</span>,{' '}
              <span className="text-purple-400 font-medium">AI-powered workflows</span>, and{' '}
              <span className="text-purple-400 font-medium">modern cloud technologies</span>.
            </motion.p>

            {/* Education card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-xl p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen size={18} className="text-purple-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">B.Tech Computer Science Engineering</p>
                <p className="text-slate-400 text-sm mt-0.5">
                  Swami Keshwanand Institute of Technology (SKIT)
                </p>
                <p className="text-slate-600 text-xs mt-1">2023 – 2027</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Currently section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-4"
          >
            {/* Currently Building */}
            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <Zap size={16} className="text-purple-400" />
                </div>
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  Currently Building
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  F
                </div>
                <div>
                  <p className="text-white font-bold text-xl">FlowStock</p>
                  <p className="text-slate-500 text-sm">B2B Inventory & Logistics SaaS</p>
                </div>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                  <BookOpen size={16} className="text-indigo-400" />
                </div>
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  Currently Learning
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Data Structures & Algorithms', 'System Design', 'Cloud Technologies'].map(
                  (item) => (
                    <span key={item} className="skill-pill text-sm">
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Current Goal */}
            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-600/20 flex items-center justify-center">
                  <Target size={16} className="text-emerald-400" />
                </div>
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  Current Goal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="dot-pulse" />
                <span className="text-white font-semibold">
                  Software Engineering Role
                </span>
              </div>
              <p className="text-slate-500 text-sm mt-2">
                Actively looking for full-time & internship opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
