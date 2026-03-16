'use client'

import { useEffect, useState } from 'react'

export default function MyApproach() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full min-h-screen bg-black dark:bg-white text-white dark:text-black py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        {/* Opening Statement */}
        <div
          className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 dark:text-gray-600 font-light text-base sm:text-lg mb-4 sm:mb-6">
            I believe that great content alone is not enough —
          </p>
          <p className="text-gray-300 dark:text-gray-700 font-light text-lg sm:text-xl">
            it needs strategy, data, and storytelling.
          </p>
        </div>

        {/* Main Section Title */}
        <div
          className={`mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
            MY APPROACH
          </h2>
          <p className="text-gray-400 dark:text-gray-600 font-light text-base sm:text-lg mt-4 sm:mt-6">
            My approach is simple:
          </p>
        </div>

        {/* Approach Steps */}
        <div
          className={`mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {['DATA', 'STRATEGY', 'CONTENT', 'GROWTH'].map((step, index) => (
              <div key={index} className="flex items-center justify-center gap-6 md:gap-8">
                <div
                  className={`group relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-widest cursor-default transition-all duration-500 hover:text-gray-300 dark:hover:text-gray-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {step}
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white dark:bg-black group-hover:w-full transition-all duration-500"></div>
                </div>
                {index < 3 && <div className="hidden sm:block w-8 h-px bg-gray-600 dark:bg-gray-400 transition-all duration-500 group-hover:w-12"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-gray-300 dark:text-gray-700 font-light text-base sm:text-lg leading-relaxed">
            By combining analytics with creativity, I help brands create content that not only looks good but also delivers real results.
          </p>
        </div>
      </div>
    </section>
  )
}
