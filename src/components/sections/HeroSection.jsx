'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-[90vh] flex items-center border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left – Text (masthead) */}
          <div className="lg:col-span-8">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-8 font-mono text-xs uppercase tracking-widest text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {t.hero.available}
              <span className="text-border">/</span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} />
                Bénin
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-6xl md:text-7xl text-ink leading-[1.05] mb-8"
            >
              {t.hero.greeting}<br />
              Juste Houezo<span className="text-accent">.</span>
            </motion.h1>

            {/* Role positioning line — scannable by role-specific recruiters */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8 font-mono text-xs md:text-sm uppercase tracking-widest">
              <span className="text-ink font-bold">{t.hero.roleFrontend}</span>
              <span className="text-border">—</span>
              <span className="text-ink font-bold">{t.hero.roleFullstack}</span>
              <span className="text-border">—</span>
              <span className="text-ink font-bold">{t.hero.roleWeb3}</span>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-xl text-ink-soft mb-10 max-w-xl leading-relaxed">
              {t.hero.subtitleLead}{' '}
              {t.hero.subtitleWeb2}{' '}
              {t.hero.subtitleWeb3}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="#projets" className="btn-primary">
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.contactMe}
              </a>
            </motion.div>
          </div>

          {/* Right – Photo, cadre fin, pas de dégradé flottant */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs">
              <div className="relative w-full aspect-[4/5] border border-border overflow-hidden">
                <Image
                  src="/profile.webp"
                  alt="Juste HOUEZO – Frontend, Fullstack & Web3 Developer"
                  fill
                  className="object-cover object-top grayscale-[15%]"
                  priority
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                <span>Juste Houezo</span>
                <span>FE / Web2 / Web3</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
