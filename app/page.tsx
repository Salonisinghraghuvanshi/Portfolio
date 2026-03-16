'use client'

import { useEffect, useState } from 'react'
import Intro from '@/components/Intro'
import Hero from '@/components/Hero'
import Introduction from '@/components/introduction'
import HowIHelp from '@/components/HowIHelp'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import MyApproach from '@/components/MyApproach'
import VideoGrid from '@/components/VideoGrid'
import About from '@/components/About'
import WorkTogether from '@/components/WorkTogether'
import SocialShowcase from '@/components/socialMedia'

// ── Scroll-to-top button ───────────────────────────────────────────────────
function ScrollToTop({ visible }: { visible: boolean }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        right: 20,
        bottom: 28,
        zIndex: 9000,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: '#0d1017',
        border: '1px solid rgba(255,255,255,.10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(0,0,0,.5)',
        opacity: visible && show ? 1 : 0,
        transform: visible && show ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity .4s ease, transform .4s ease, border-color .2s, box-shadow .2s',
        pointerEvents: visible && show ? 'auto' : 'none',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.transform = 'translateY(-4px)'
        el.style.borderColor = '#FF2020'
        el.style.boxShadow = '0 12px 32px rgba(255,32,32,.3)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'rgba(255,255,255,.10)'
        el.style.boxShadow = '0 8px 24px rgba(0,0,0,.5)'
      }}
    >
      <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function Page() {
  const [showIntro, setShowIntro] = useState(true)
  const [mounted, setMounted]     = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setShowIntro(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <main className="w-full bg-white text-black">
        <Hero />
        <Introduction />
        <HowIHelp />
        <Education />
        <Skills />
        <MyApproach />
        <VideoGrid />
        <About />
        <SocialShowcase />
        <WorkTogether />
      </main>
    )
  }

  return (
    <>
      {showIntro && <Intro />}

      <main className={`w-full bg-white text-black transition-opacity duration-500 ${
        showIntro ? 'opacity-0' : 'opacity-100'
      }`}>
        <Hero />
        <Introduction />
        <HowIHelp />
        <Education />
        <Skills />
        <MyApproach />
        <VideoGrid />
        <About />
        <SocialShowcase />
        <WorkTogether />
      </main>

      <ScrollToTop visible={!showIntro} />
    </>
  )
}