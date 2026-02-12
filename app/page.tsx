'use client'

import { useEffect, useState } from 'react'
import Intro from '@/components/Intro'
import Hero from '@/components/Hero'
import VideoGrid from '@/components/VideoGrid'
import About from '@/components/About'
import WorkTogether from '@/components/WorkTogether'

export default function Page() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 6000) // 2.5s hello + 1s gap + 2.5s name + 1s fade

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showIntro && <Intro />}
      
      <main className={`w-full bg-white text-black transition-opacity duration-500 ${
        showIntro ? 'opacity-0' : 'opacity-100'
      }`}>
        <Hero />
        <VideoGrid />
        <About />
        <WorkTogether />
      </main>
    </>
  )
}