'use client'

import { useEffect, useState } from 'react'
import { Camera, Cloud, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const NAV_ITEMS = [
  { label: 'PORTFOLIO',  href: '#portfolio'  },
  { label: 'CONTACT',    href: '#contact'    },
  { label: 'MARKETING',  href: '#marketing'  },
]

export default function Hero() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled]   = useState(false)
  const [isVisible, setIsVisible]     = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [mounted, setMounted]         = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 7000)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!mounted) return null

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    // Small timeout lets the menu close animation finish before scrolling
    setTimeout(() => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <section className="min-h-screen w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-between py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">

      {/* ── Header ── */}
      <header
        className={`w-full flex items-center justify-between max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-xs sm:text-sm font-light tracking-widest hover:opacity-60 transition-opacity"
        >
          Dyal Thakur
        </a>

        <Camera size={18} className="text-black dark:text-white" />

        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-black dark:text-white hover:opacity-60 transition-opacity p-1"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Menu toggle */}
          <button
            className="text-xs sm:text-sm font-light tracking-widest hover:opacity-60 transition-opacity"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            MENU
          </button>
        </div>
      </header>

      {/* ── Full-screen nav overlay ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-black flex flex-col items-center justify-center gap-10 transition-colors duration-300">
          {/* Close */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-6 text-xs tracking-widest font-light text-black dark:text-white hover:opacity-60 transition-opacity"
          >
            CLOSE
          </button>

          {/* Nav links */}
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
              className="text-3xl sm:text-4xl font-light tracking-widest hover:opacity-60 transition-opacity text-black dark:text-white"
            >
              {label}
            </a>
          ))}

          {/* About — scroll to top of intro section */}
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNavClick('#about') }}
            className="text-3xl sm:text-4xl font-light tracking-widest hover:opacity-60 transition-opacity text-black dark:text-white"
          >
            ABOUT
          </a>
        </div>
      )}

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl">
        <div className="w-full text-center px-2">
          <h1 className="font-light tracking-tight leading-tight">

            <span className={`flex items-center justify-center gap-2 sm:gap-3 text-[clamp(1.75rem,8vw,5rem)] transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              VIDEO EDITOR
              <span className="w-6 sm:w-10 md:w-14 h-px bg-black dark:bg-white inline-block align-middle shrink-0" />
            </span>

            <span className={`flex items-center justify-center gap-2 sm:gap-3 text-[clamp(1.75rem,8vw,5rem)] transition-all duration-1000 ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="w-6 sm:w-10 md:w-14 h-px bg-black dark:bg-white inline-block align-middle shrink-0" />
              MOTION DESIGNER
            </span>

            <span className={`flex items-center justify-center gap-2 sm:gap-3 text-[clamp(1.75rem,8vw,5rem)] transition-all duration-1000 ease-out delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="w-6 sm:w-10 md:w-14 h-px bg-black dark:bg-white inline-block align-middle shrink-0" />
              STORYTELLER
            </span>

          </h1>
        </div>
      </div>

      {/* ── Footer Navigation ── */}
      <nav
        className={`w-full flex items-center justify-between max-w-7xl mx-auto transition-all duration-1000 ease-out delay-[800ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
            className="text-xs sm:text-sm font-light tracking-widest hover:opacity-60 transition-opacity"
          >
            {label}
          </a>
        ))}
      </nav>

    </section>
  )
}