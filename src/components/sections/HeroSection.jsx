'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Code2, Cpu, MapPin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left – Text */}
          <div>
            {/* Availability badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t.hero.available || 'Available for new projects'}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black font-[family-name:var(--font-space-grotesk)] text-slate-900 leading-[1.1] mb-4"
            >
              {t.hero.greeting}<br />
              <span className="text-blue-600">Juste HOUEZO</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
              {t.hero.subtitle}
            </motion.p>

            {/* Identity pills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 text-sm font-semibold rounded-full border border-cyan-200">
                <Code2 size={15} />
                {t.hero.fullstack}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 text-violet-700 text-sm font-semibold rounded-full border border-violet-200">
                <Cpu size={15} />
                {t.hero.blockchain}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full">
                <MapPin size={13} />
                Bénin 🇧🇯
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="#projets" className="btn-primary">
                {t.hero.viewProjects}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.contactMe}
              </a>
            </motion.div>
          </div>

          {/* Right – Photo */}
          <motion.div variants={fadeInUp} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-100 via-violet-100 to-cyan-100 opacity-60 blur-sm" />
              {/* Photo container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/profile.webp"
                  alt="Juste HOUEZO – Full-Stack & Blockchain Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating card – Fullstack */}
              <div className="hidden sm:flex absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100 items-center gap-3 animate-float z-10">
                <div className="w-9 h-9 rounded-xl bg-cyan-100 flex items-center justify-center">
                  <Code2 size={18} className="text-cyan-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Full-Stack</p>
                  <p className="text-sm text-slate-800 font-bold">Frontend Focused</p>
                </div>
              </div>
              {/* Floating card – Blockchain */}
              <div className="hidden sm:flex absolute -top-5 -right-8 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100 items-center gap-3 animate-float z-10" style={{ animationDelay: '3s' }}>
                <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Cpu size={18} className="text-violet-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Blockchain</p>
                  <p className="text-sm text-slate-800 font-bold">EVM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
