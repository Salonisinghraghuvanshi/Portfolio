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

export default function Page() {
  const [showIntro, setShowIntro] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 6000) // 2.5s hello + 1s gap + 2.5s name + 1s fade

    return () => clearTimeout(timer)
  }, [])

  // Prevent hydration mismatch by not rendering until client-side
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
        <WorkTogether />
      </main>
    </>
  )
}
