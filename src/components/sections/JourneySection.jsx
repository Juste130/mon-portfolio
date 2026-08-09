'use client'

import { motion } from 'framer-motion'
import Timeline from '@/components/Timeline'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

export default function JourneySection() {
  const { t } = useLanguage()

  return (
    <section id="parcours" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full border border-indigo-200 mb-4 uppercase tracking-wider">
              {t.nav.journey}
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-space-grotesk)] text-slate-900 mb-4">
              {t.journey.title}
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              {t.journey.subtitle}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Timeline />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
