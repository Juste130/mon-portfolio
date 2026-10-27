'use client'

import { motion } from 'framer-motion'
import { GitPullRequest, GitMerge, Github, Gitlab, ExternalLink } from 'lucide-react'
import { contributions } from '@/data/contributions'
import { useLanguage } from '@/context/LanguageContext'
import { fadeInUp, stagger } from '@/lib/animations'

export default function OpenSourceSection() {
  const { t } = useLanguage()

  return (
    <section id="open-source" className="py-24 section-alt border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-10">
            <span className="eyebrow mb-4">
              <span className="eyebrow-number">04</span>
              {t.nav.openSource}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-4 max-w-2xl">
              {t.openSource.title}
            </h2>
            <p className="text-ink-soft max-w-xl text-base leading-relaxed">
              {t.openSource.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {contributions.map((pr) => {
              const isMerged = pr.status === 'merged'
              const StatusIcon = isMerged ? GitMerge : GitPullRequest
              return (
                <motion.div key={pr.id} variants={fadeInUp} className="project-card">
                  <div className="flex items-center justify-between mb-4 gap-3">
                    <span className={`chip ${isMerged ? 'chip-accent' : ''}`}>
                      <StatusIcon size={12} />
                      {isMerged ? t.openSource.merged : t.openSource.open}
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                      #{pr.number}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-ink-soft mb-2 break-all">
                    {pr.repo}
                  </p>

                  <h3 className="font-display text-lg text-ink mb-2 break-words">
                    {pr.title}
                  </h3>

                  <p className="text-sm text-ink-soft leading-relaxed mb-4 flex-grow">
                    {t.openSource.items[pr.id]}
                  </p>

                  <p className="font-mono text-[0.65rem] uppercase tracking-wide text-muted mb-5">
                    {pr.tags.join(' · ')}
                  </p>

                  <div className="flex gap-4 mt-auto pt-4 border-t border-border">
                    <a
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink hover:text-accent transition-colors"
                    >
                      <ExternalLink size={13} />
                      {t.openSource.viewPr}
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <a
              href="https://github.com/search?q=is%3Apr+author%3AJuste130+-user%3AJuste130&type=pullrequests"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <Github className="w-4 h-4" />
              {t.openSource.allPrs}
            </a>
            <p className="flex items-center gap-2 font-mono text-xs text-muted">
              <Gitlab size={14} className="shrink-0" />
              {t.openSource.gitlabNote}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
