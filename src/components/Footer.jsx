'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-paper-soft border-t border-border text-ink-soft mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg text-ink">
              Juste Houezo<span className="text-accent">.</span>
            </p>
            <p className="font-mono text-xs uppercase tracking-widest mt-1">
              Frontend · Fullstack · Web3
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Juste130"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://twitter.com/Juste130"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle"
              aria-label="Twitter"
            >
              <Twitter size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/juste-houezo/"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center font-mono text-xs text-muted">
          {t.footer.text.replace('{year}', new Date().getFullYear())}
        </div>
      </div>
    </footer>
  )
}
