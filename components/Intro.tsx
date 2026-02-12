'use client'

import { useEffect, useState } from 'react'

export default function Intro() {
  const [stage, setStage] = useState(-1) // -1: initial, 0: hello, 1: name, 2: fade
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger hello fade-in after mount
    setMounted(true)
    const initialTimer = setTimeout(() => setStage(0), 100)
    
    return () => clearTimeout(initialTimer)
  }, [])

  useEffect(() => {
    if (stage === 0) {
      const helloTimer = setTimeout(() => setStage(1), 2500)
      return () => clearTimeout(helloTimer)
    }
  }, [stage])

  useEffect(() => {
    if (stage === 1) {
      const nameTimer = setTimeout(() => setStage(2), 2500)
      return () => clearTimeout(nameTimer)
    }
  }, [stage])

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      {/* Hello */}
      <div
        className={`absolute transition-all duration-1000 ease-in ${
          stage >= 0 && stage < 1
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4'
        }`}
      >
        <h1 className="text-8xl md:text-9xl font-light tracking-tight text-black">
          HELLO!
        </h1>
      </div>

      {/* Name - with 1s delay */}
      <div
        className={`absolute transition-all duration-1000 ease-in ${
          stage === 1
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        }`}
        style={stage === 0 ? { transitionDelay: '1000ms' } : {}}
      >
        <h1 className="text-8xl md:text-9xl font-light tracking-tight text-black">
          I AM <span className="font-normal">DYAL</span>
        </h1>
      </div>

      {/* Fade to white */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-1000 ease-in pointer-events-none ${
          stage === 2 ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}