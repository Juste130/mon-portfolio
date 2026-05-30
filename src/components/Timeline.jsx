'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Timeline() {
  const { t } = useLanguage()

  const categoryColors = {
    'Freelancer':   { dot: 'bg-blue-500',   badge: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200' },
    'Indépendant':  { dot: 'bg-blue-500',   badge: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200' },
    'Fullstack Developer':       { dot: 'bg-cyan-500',  badge: 'bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200' },
    'Développeur Fullstack':     { dot: 'bg-cyan-500',  badge: 'bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200' },
    'Blockchain Developer':      { dot: 'bg-purple-500',badge: 'bg-purple-50 text-purple-700 ring-1 ring-purple-200' },
    'Développeur Blockchain':    { dot: 'bg-purple-500',badge: 'bg-purple-50 text-purple-700 ring-1 ring-purple-200' },
    'Training & Incubation':     { dot: 'bg-violet-500',badge: 'bg-violet-50 text-violet-700 ring-1 ring-violet-200' },
    'Formation & Incubation':    { dot: 'bg-violet-500',badge: 'bg-violet-50 text-violet-700 ring-1 ring-violet-200' },
    'Academic':                  { dot: 'bg-emerald-500',badge: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' },
    'Académique':                { dot: 'bg-emerald-500',badge: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' },
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative pl-8 border-l-2 border-slate-200">
        {t.journey.experiences.map((exp) => {
          const colors = categoryColors[exp.role] || { dot: 'bg-slate-400', badge: 'bg-slate-100 text-slate-600' }
          return (
            <div key={exp.id} className="mb-10 relative group">
              {/* Dot */}
              <span className={`absolute -left-[45px] top-1.5 w-3.5 h-3.5 rounded-full ${colors.dot} ring-4 ring-white shadow-sm`} />

              {/* Year chip */}
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                {exp.year}
              </span>

              <h3 className="mt-1 text-lg font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)]">
                {exp.title}
              </h3>

              <span className={`inline-block mt-1.5 mb-3 px-3 py-1 text-xs font-semibold rounded-full ${colors.badge}`}>
                {exp.role}
              </span>

              <p className="text-slate-600 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
