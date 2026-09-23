'use client'

import { motion } from 'framer-motion'
import { Github, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="eyebrow justify-center mb-6">
            <span className="eyebrow-number">04</span>
            {t.nav.contact}
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-ink mb-5"
          >
            {t.contact.title}
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-ink-soft text-base leading-relaxed mb-10">
            {t.contact.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:houezojuste0@gmail.com"
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              {t.contact.email}
            </a>
            <a
              href="https://github.com/Juste130"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <Github className="w-4 h-4" />
              {t.contact.github}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
