'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

const FILTERS = ['all', 'frontend', 'fullstack', 'web3']

export default function ProjectsSection() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.profiles?.includes(activeFilter))

  return (
    <section id="projets" className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-10">
            <span className="eyebrow mb-4">
              <span className="eyebrow-number">03</span>
              {t.nav.projects}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-4 max-w-2xl">
              {t.projects.title}
            </h2>
            <p className="text-ink-soft max-w-xl text-base leading-relaxed">
              {t.projects.subtitle}
            </p>
          </motion.div>

          {/* Filters — chaque profil visé (frontend / fullstack / web3) trouve ses preuves */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 mb-10 border-b border-border pb-1">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              >
                {t.projects.filters[filter]}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8"
            >
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
