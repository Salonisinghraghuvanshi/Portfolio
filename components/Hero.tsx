'use client'

import { useEffect, useState } from 'react'
import { Cloud, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function Hero() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 7000)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-between py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">

      {/* Header */}
      <header
        className={`
          w-full flex items-center justify-between max-w-7xl mx-auto
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}
      >
        <div className="text-xs sm:text-sm font-light tracking-widest">
          Dyal Swaroop
        </div>
        <Cloud size={18} className="text-black dark:text-white" />
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-black dark:text-white hover:opacity-60 transition-opacity p-1"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="text-xs sm:text-sm font-light tracking-widest hover:opacity-60 transition-opacity"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            MENU
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-black flex flex-col items-center justify-center gap-10 transition-colors duration-300">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-6 text-xs tracking-widest font-light text-black dark:text-white"
          >
            CLOSE
          </button>
          {['PORTFOLIO', 'CONTACT', 'Marketing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-3xl sm:text-4xl font-light tracking-widest hover:opacity-60 transition-opacity text-black dark:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl">
        <div className="w-full text-center px-2">
          <h1 className="font-light tracking-tight leading-tight">

            {/* Line 1 */}
            <span
              className={`
                flex items-center justify-center gap-2 sm:gap-3
                text-[clamp(1.75rem,8vw,5rem)]
                transition-all duration-1000 ease-out delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              VIDEO EDITOR
              <span className="w-6 sm:w-10 md:w-14 h-px bg-black dark:bg-white inline-block align-middle shrink-0"></span>
            </span>

            {/* Line 2 */}
            <span
              className={`
                flex items-center justify-center gap-2 sm:gap-3
                text-[clamp(1.75rem,8vw,5rem)]
                transition-all duration-1000 ease-out delay-[400ms]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              <span className="w-6 sm:w-10 md:w-14 h-px bg-black dark:bg-white inline-block align-middle shrink-0"></span>
              MOTION DESIGNER
            </span>

            {/* Line 3 */}
            <span
              className={`
                flex items-center justify-center gap-2 sm:gap-3
                text-[clamp(1.75rem,8vw,5rem)]
                transition-all duration-1000 ease-out delay-[600ms]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              <span className="w-6 sm:w-10 md:w-14 h-px bg-black dark:bg-white inline-block align-middle shrink-0"></span>
              STORYTELLER
            </span>

          </h1>
        </div>
      </div>

      {/* Footer Navigation */}
      <nav
        className={`
          w-full flex items-center justify-between
          max-w-7xl mx-auto
          transition-all duration-1000 ease-out delay-[800ms]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        {[
          { label: 'PORTFOLIO', href: '#portfolio' },
          { label: 'CONTACT', href: '#contact' },
          { label: 'Marketing', href: '#Marketing' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-xs sm:text-sm font-light tracking-widest hover:opacity-60 transition-opacity"
          >
            {label}
          </a>
        ))}
      </nav>
    </section>
  )
}
