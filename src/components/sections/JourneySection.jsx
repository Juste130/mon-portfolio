'use client'

import { motion } from 'framer-motion'
import Timeline from '@/components/Timeline'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

export default function JourneySection() {
  const { t } = useLanguage()

  return (
    <section id="parcours" className="py-24 section-alt border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <span className="eyebrow mb-4">
              <span className="eyebrow-number">01</span>
              {t.nav.journey}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-4 max-w-2xl">
              {t.journey.title}
            </h2>
            <p className="text-ink-soft max-w-xl text-base leading-relaxed">
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
