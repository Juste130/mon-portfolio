'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Timeline() {
  const { t } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative pl-8 border-l border-border">
        {t.journey.experiences.map((exp) => (
          <div key={exp.id} className="mb-10 relative">
            <span className="timeline-dot" />

            <span className="font-mono text-xs text-muted tracking-widest uppercase">
              {exp.year}
            </span>

            <h3 className="mt-1 font-display text-lg text-ink">
              {exp.title}
            </h3>

            <span className="inline-block mt-1.5 mb-3 chip">
              {exp.role}
            </span>

            <p className="text-ink-soft leading-relaxed text-sm">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
