'use client'

import { motion } from 'framer-motion'
import { categorizedSkills } from '@/data/skills'
import { tools } from '@/data/tools'
import ToolIcon from '@/components/ToolIcon'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

const CATEGORY_MAP = {
  Frontend: 'frontend',
  Backend: 'web2',
  'Blockchain (EVM)': 'web3',
}

export default function SkillsSection() {
  const { t } = useLanguage()

  const byKey = Object.fromEntries(
    categorizedSkills
      .filter((cat) => CATEGORY_MAP[cat.category])
      .map((cat) => [CATEGORY_MAP[cat.category], cat.items])
  )
  const workflowItems = categorizedSkills.find((cat) => cat.category === 'Outils & IA')?.items || []

  const columns = [
    { key: 'frontend', ...t.capabilities.frontend, items: byKey.frontend },
    { key: 'web2', ...t.capabilities.web2, items: byKey.web2 },
    { key: 'web3', ...t.capabilities.web3, items: byKey.web3 },
  ]

  return (
    <section id="competences" className="py-24 section-alt border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <span className="eyebrow mb-4">
              <span className="eyebrow-number">02</span>
              {t.capabilities.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-4 max-w-2xl">
              {t.capabilities.title}
            </h2>
            <p className="text-ink-soft max-w-xl text-base leading-relaxed">
              {t.capabilities.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {columns.map((col) => (
              <motion.div key={col.key} variants={fadeInUp} className="capability-block">
                <h3 className="font-display text-xl text-ink mb-3">
                  {col.label}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-5">
                  {col.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {col.items?.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Environment / tools */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-5">
              {t.skills.environment}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
              {tools.map((tool) => (
                <ToolIcon key={tool.name} name={tool.name} icon={tool.icon} color={tool.color} image={tool.image} />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {workflowItems.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
