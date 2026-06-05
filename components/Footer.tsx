'use client'

import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.05] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copy */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <Code2 size={13} className="text-white" />
              </div>
              <span className="font-bold text-white text-sm">
                Tanay<span className="text-purple-500">.</span>
              </span>
            </div>
            <p className="text-slate-600 text-xs flex items-center gap-1.5">
              Designed & Built by Tanay Sharma
              <Heart size={10} className="text-purple-500 fill-purple-500" />
            </p>
            <p className="text-slate-700 text-xs">© {year} · All rights reserved</p>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6">
            {['#about', '#products', '#experience', '#skills', '#achievements', '#contact'].map(
              (href) => (
                <a
                  key={href}
                  href={href}
                  className="text-slate-500 hover:text-slate-300 text-xs capitalize transition-colors"
                >
                  {href.slice(1)}
                </a>
              )
            )}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              {
                href: 'https://github.com/Tanaypai123',
                icon: <Github size={16} />,
                label: 'GitHub',
              },
              {
                href: 'https://www.linkedin.com/in/connectanaysharma/',
                icon: <Linkedin size={16} />,
                label: 'LinkedIn',
              },
              {
                href: 'mailto:panwadiyatanay@gmail.com',
                icon: <Mail size={16} />,
                label: 'Email',
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
