'use client'

import { useEffect, useState } from 'react'
import { Cloud } from 'lucide-react'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 7000)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center justify-between py-16 px-6">
      {/* Header */}
      <header 
        className={`w-full flex items-center justify-between max-w-7xl mx-auto mb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="text-md font-light tracking-widest">Dyal Thakur</div>
        <Cloud size={24} className="text-black" />
        <div className="text-md font-light tracking-widest">MENU</div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl">
        <div className="space-y-8 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight">
            <span 
              className={`inline-block transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              VIDEO EDITOR
              <span className="inline-block mx-3 w-16 h-0.5 bg-black align-middle"></span>
            </span>
            <br />
            <span 
              className={`inline-block transition-all duration-1000 ease-out delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block mr-3 w-16 h-0.5 bg-black align-middle"></span>
              MOTION DESIGNER
            </span>
            <br />
            <span 
              className={`inline-block transition-all duration-1000 ease-out delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block mr-3 w-16 h-0.5 bg-black align-middle"></span>
              STORYTELLER
            </span>
          </h1>
        </div>
      </div>

      {/* Footer Navigation */}
      <nav 
        className={`w-full flex items-center justify-between max-w-7xl mx-auto transition-all duration-1000 ease-out delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <a href="#portfolio" className="text-sm font-light tracking-widest hover:opacity-60 transition-opacity">
          PORTFOLIO
        </a>
        <a href="#contact" className="text-sm font-light tracking-widest hover:opacity-60 transition-opacity">
          CONTACT
        </a>
        <a href="#shop" className="text-sm font-light tracking-widest hover:opacity-60 transition-opacity">
          SHOP
        </a>
      </nav>
    </section>
  )
}