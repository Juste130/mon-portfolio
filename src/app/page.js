'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { categorizedSkills } from '@/data/skills'
import { tools } from '@/data/tools'
import { projects } from '@/data/projects'
import ToolIcon from '@/components/ToolIcon'
import ProjectCard from '@/components/ProjectCard'
import Timeline from '@/components/Timeline'
import { ArrowRight, Github, Mail, Code2, Cpu, MapPin, Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(categorizedSkills[0].category)
  const { t } = useLanguage()

  return (
    <div className="pt-20">

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
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
                    src="/profile.jpg"
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
                    <p className="text-xs text-slate-400 font-medium">Full-Stack</p>
                    <p className="text-sm text-slate-800 font-bold">Frontend Focused</p>
                  </div>
                </div>
                {/* Floating card – Blockchain */}
                <div className="hidden sm:flex absolute -top-5 -right-8 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100 items-center gap-3 animate-float z-10" style={{ animationDelay: '3s' }}>
                  <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center">
                    <Cpu size={18} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Blockchain</p>
                    <p className="text-sm text-slate-800 font-bold">EVM Expert</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PARCOURS
      ═══════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════
          COMPÉTENCES & OUTILS
      ═══════════════════════════════════════ */}
      <section id="competences" className="py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full border border-emerald-200 mb-4 uppercase tracking-wider">
                {t.nav.skills}
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-space-grotesk)] text-slate-900 mb-4">
                {t.skills.title}
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
                {t.skills.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Skills */}
              <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-3">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5">
                  {t.skills.expertise}
                </h3>
                {categorizedSkills.map((cat) => (
                  <div
                    key={cat.category}
                    onMouseEnter={() => setActiveSkill(cat.category)}
                    className={`skill-category ${activeSkill === cat.category ? 'active' : ''}`}
                  >
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      {cat.category === 'Frontend'      && <span className="text-cyan-500">🎨</span>}
                      {cat.category === 'Backend'       && <span className="text-emerald-500">⚙️</span>}
                      {cat.category === 'Blockchain (EVM)' && <span className="text-violet-500">⛓️</span>}
                      {cat.category === 'Outils & IA'   && <span className="text-orange-500">🤖</span>}
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                            activeSkill === cat.category
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Tools */}
              <motion.div variants={fadeInUp} className="lg:col-span-7">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5">
                  {t.skills.environment}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {tools.map((tool) => (
                    <ToolIcon key={tool.name} name={tool.name} icon={tool.icon} color={tool.color} image={tool.image} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROJETS
      ═══════════════════════════════════════ */}
      <section id="projets" className="py-24 section-alt">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600 text-xs font-bold rounded-full border border-pink-200 mb-4 uppercase tracking-wider">
                {t.nav.projects}
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-space-grotesk)] text-slate-900 mb-4">
                {t.projects.title}
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
                {t.projects.subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={fadeInUp} className="h-full">
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════ */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-200 mb-6 uppercase tracking-wider">
              {t.nav.contact}
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black font-[family-name:var(--font-space-grotesk)] text-slate-900 mb-5"
            >
              {t.contact.title}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-slate-500 text-base leading-relaxed mb-10">
              {t.contact.subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="mailto:justeholuezo@gmail.com"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t.contact.email}
              </a>
              <a
                href="https://github.com/Juste130"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                <Github className="w-4 h-4 mr-2" />
                {t.contact.github}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}