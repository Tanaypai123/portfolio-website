'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Star, Zap, Users } from 'lucide-react'

const achievements = [
  {
    icon: <Trophy size={22} />,
    title: 'Top 25 Teams',
    event: "AUTOwn'25",
    org: 'BITS Pilani Hyderabad',
    description: 'Selected among top 25 teams at the prestigious national-level hackathon organized by BITS Pilani Hyderabad campus.',
    color: 'yellow',
    rank: '#25',
  },
  {
    icon: <Star size={22} />,
    title: 'Top 5',
    event: 'Innovician Hackathon',
    org: 'National Level',
    description: 'Achieved Top 5 finish at the National Level Innovician Hackathon, competing against hundreds of teams.',
    color: 'purple',
    rank: '#5',
  },
  {
    icon: <Zap size={22} />,
    title: 'Top 10',
    event: 'GIT Hackathon 2024',
    org: 'Software Category',
    description: 'Ranked in the Top 10 in the Software Category at GIT Hackathon 2024.',
    color: 'indigo',
    rank: '#10',
  },
  {
    icon: <Users size={22} />,
    title: '4+ Hackathons',
    event: 'Total Participated',
    org: 'Various Organizations',
    description: 'Actively participated in 4+ hackathons across national and institute level competitions.',
    color: 'emerald',
    rank: '4+',
  },
]

const colorStyles: Record<string, { bg: string; border: string; text: string; rank: string }> = {
  yellow: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    text: 'text-yellow-400',
    rank: 'text-yellow-300',
  },
  purple: {
    bg: 'bg-purple-600/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    rank: 'text-purple-300',
  },
  indigo: {
    bg: 'bg-indigo-600/10',
    border: 'border-indigo-500/20',
    text: 'text-indigo-400',
    rank: 'text-indigo-300',
  },
  emerald: {
    bg: 'bg-emerald-600/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    rank: 'text-emerald-300',
  },
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="section-padding relative" ref={ref}>
      {/* Subtle bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[300px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.04) 0%, transparent 70%)',
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
            <Trophy size={11} />
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            Hackathons & Recognition
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Competitive experience building under pressure with real impact.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => {
            const style = colorStyles[a.color]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col"
              >
                {/* Rank badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl ${style.bg} border ${style.border} flex items-center justify-center`}>
                    <span className={style.text}>{a.icon}</span>
                  </div>
                  <span className={`text-2xl font-black ${style.rank}`}>{a.rank}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{a.title}</h3>
                <p className={`font-semibold text-sm mb-0.5 ${style.text}`}>{a.event}</p>
                <p className="text-slate-600 text-xs mb-4">{a.org}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{a.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
