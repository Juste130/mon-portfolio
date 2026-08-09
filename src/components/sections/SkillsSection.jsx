'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { categorizedSkills } from '@/data/skills'
import { tools } from '@/data/tools'
import ToolIcon from '@/components/ToolIcon'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(categorizedSkills[0].category)
  const { t } = useLanguage()

  return (
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
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5">
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
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5">
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
  )
}
