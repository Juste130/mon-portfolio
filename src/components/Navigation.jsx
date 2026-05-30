'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Globe } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home,     path: '#home' },
    { name: t.nav.journey,  path: '#parcours' },
    { name: t.nav.skills,   path: '#competences' },
    { name: t.nav.projects, path: '#projets' },
    { name: t.nav.contact,  path: '#contact' },
  ]

  const scrollTo = (e, path) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const el = document.querySelector(path)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="text-xl font-black tracking-tight font-[family-name:var(--font-space-grotesk)] text-slate-900"
          >
            Juste<span className="text-blue-600">Dev</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => scrollTo(e, item.path)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
              >
                {item.name}
              </a>
            ))}

            {/* Language switcher */}
            <button
              onClick={toggleLanguage}
              className="ml-4 flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-700 border border-slate-200 rounded-lg hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              <Globe size={14} />
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs font-bold text-slate-600 border border-slate-200 rounded-lg px-2 py-1.5"
            >
              <Globe size={13} />
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-700 rounded-lg hover:bg-slate-100"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-slate-100">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => scrollTo(e, item.path)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}