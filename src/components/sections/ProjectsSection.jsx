'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
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
  )
}
