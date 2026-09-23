'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { Globe, Moon, Sun } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-paper/90 backdrop-blur-md border-border py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="font-display text-xl tracking-tight text-ink"
          >
            Juste Houezo<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => scrollTo(e, item.path)}
                className="link-underline font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center gap-2 ml-2">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
                className="theme-toggle"
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <button
                onClick={toggleLanguage}
                aria-label={language === 'en' ? 'Passer le site en français' : 'Switch site to English'}
                className="theme-toggle font-mono text-[0.7rem] font-bold w-auto px-3 gap-1.5"
              >
                <Globe size={13} />
                {language === 'en' ? 'FR' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
              className="theme-toggle"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'Passer le site en français' : 'Switch site to English'}
              className="theme-toggle font-mono text-[0.65rem] font-bold w-auto px-2.5 gap-1"
            >
              <Globe size={12} />
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="theme-toggle"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
          <div id="mobile-menu" className="md:hidden mt-3 py-3 border-t border-border">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => scrollTo(e, item.path)}
                  className="px-1 py-2.5 font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-accent transition-colors"
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
