'use client'

import { useEffect, useState } from 'react'
import { Cloud } from 'lucide-react'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center justify-between py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <header
        className={`
          w-full flex items-center justify-between max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}
      >
        <div className="text-xs sm:text-sm md:text-md font-light tracking-widest">
          Dyal Thakur
        </div>
        <Cloud size={20} className="text-black sm:w-6 sm:h-6" />
        {/* Desktop menu label / Mobile hamburger */}
        <button
          className="text-xs sm:text-sm md:text-md font-light tracking-widest hover:opacity-60 transition-opacity"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          MENU
        </button>
      </header>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-10 right-6 text-xs tracking-widest font-light"
          >
            CLOSE
          </button>
          {['PORTFOLIO', 'CONTACT', 'SHOP'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-3xl sm:text-4xl font-light tracking-widest hover:opacity-60 transition-opacity"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl px-2">
        <div className="text-center">
          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            font-light tracking-tight leading-tight sm:leading-snug
          ">
            {/* Line 1 */}
            <span
              className={`
                flex items-center justify-center gap-2 sm:gap-3 flex-wrap
                transition-all duration-1000 ease-out delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              VIDEO EDITOR
              <span className="w-8 sm:w-12 md:w-16 h-0.5 bg-black inline-block align-middle"></span>
            </span>

            {/* Line 2 */}
            <span
              className={`
                flex items-center justify-center gap-2 sm:gap-3 flex-wrap
                transition-all duration-1000 ease-out delay-[400ms]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              <span className="w-8 sm:w-12 md:w-16 h-0.5 bg-black inline-block align-middle"></span>
              MOTION DESIGNER
            </span>

            {/* Line 3 */}
            <span
              className={`
                flex items-center justify-center gap-2 sm:gap-3 flex-wrap
                transition-all duration-1000 ease-out delay-[600ms]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              <span className="w-8 sm:w-12 md:w-16 h-0.5 bg-black inline-block align-middle"></span>
              STORYTELLER
            </span>
          </h1>
        </div>
      </div>

      {/* Footer Navigation */}
      <nav
        className={`
          w-full flex items-center justify-center sm:justify-between
          gap-6 sm:gap-0
          max-w-7xl mx-auto mt-8 sm:mt-0
          transition-all duration-1000 ease-out delay-[800ms]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        {[
          { label: 'PORTFOLIO', href: '#portfolio' },
          { label: 'CONTACT', href: '#contact' },
          { label: 'SHOP', href: '#shop' },
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