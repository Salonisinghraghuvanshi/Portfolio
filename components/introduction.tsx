'use client'

import { useEffect, useState } from 'react'

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Introduction with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-8 sm:mb-10 md:mb-12">
              DYAL SWAROOP
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-6 sm:mb-8">
              I am a Creative Growth Strategist, Video Editor, and Data Analyst who focuses on helping brands and businesses grow through data-driven marketing, storytelling, and high-retention video content.
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-6 sm:mb-8">
              I specialize in combining creative content with analytics to build strong online presence, grow audiences, and improve engagement. My work focuses on understanding how people interact with digital content and then using that insight to create strategies that attract attention, retain viewers, and convert audiences into customers.
            </p>
          </div>

          {/* Right side - Image */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Decorative border frame */}
              <div className="absolute -inset-4 sm:-inset-6 border-2 border-black dark:border-white opacity-20 dark:opacity-20"></div>
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] group">
                <img
                  src="./me.png"
                  alt="Dyal Swaroop - Creative Growth Strategist and Video Editor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Work */}
        <div
          className={`w-full border-t border-gray-200 dark:border-gray-700 pt-12 sm:pt-16 md:pt-20 mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <h3 className="text-lg sm:text-xl font-light tracking-widest uppercase text-gray-500 dark:text-gray-500 mb-10 sm:mb-12">
            Currently
          </h3>

          <div className="space-y-8 sm:space-y-12">
            {[
              {
                title: 'Data Management Executive',
                company: 'Oceaniek Technology India',
                description: 'I manage data processes, reporting systems, and analytical tasks that support business decisions.'
              },
              {
                title: 'Co-Founder',
                company: 'The Healing Groov (Wellness Startup)',
                description: 'I handle marketing strategy, social media growth, competitor research, and content production.'
              }
            ].map((role, index) => (
              <div
                key={index}
                className={`relative pl-6 sm:pl-8 border-l-2 border-black dark:border-white transition-all duration-700 hover:pl-8 sm:hover:pl-10 group ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="absolute -left-3.5 top-1 w-5 h-5 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full transition-all duration-500 group-hover:scale-125"></div>
                <h4 className="text-lg sm:text-xl font-light tracking-tight mb-2 sm:mb-3">
                  {role.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-light text-sm mb-3 sm:mb-4">
                  {role.company}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-light text-base leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div
          className={`w-full border-t border-gray-200 dark:border-gray-700 pt-12 sm:pt-16 md:pt-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
            Through these experiences, I have developed the ability to work across multiple domains including marketing strategy, video production, analytics, and business growth.
          </p>
        </div>
      </div>
    </section>
  )
}
