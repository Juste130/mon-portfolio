'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg font-[family-name:var(--font-space-grotesk)]">
              Juste<span className="text-blue-400">Dev</span>
            </p>
            <p className="text-sm mt-1">Full-Stack & Blockchain Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Juste130"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/Juste130"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/juste-houezo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          {t.footer.text.replace('{year}', new Date().getFullYear())}
        </div>
      </div>
    </footer>
  )
}