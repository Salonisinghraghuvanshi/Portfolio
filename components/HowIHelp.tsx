'use client'

import { useEffect, useState } from 'react'

export default function HowIHelp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      number: '01',
      title: 'Creating High-Retention Video Content',
      description: 'I edit and structure videos for platforms like Instagram Reels, YouTube Shorts, and long-form content so that viewers stay engaged and watch longer.'
    },
    {
      number: '02',
      title: 'Social Media Growth Strategy',
      description: 'I design content strategies that help brands grow their audience organically by focusing on storytelling, consistency, and audience psychology.'
    },
    {
      number: '03',
      title: 'Data-Driven Decision Making',
      description: 'Using analytics and performance metrics, I analyze which content works best and optimize future strategies for better results.'
    },
    {
      number: '04',
      title: 'Content Repurposing',
      description: 'I convert long content into multiple short-form pieces to increase reach across platforms.'
    },
    {
      number: '05',
      title: 'Marketing and Brand Visibility',
      description: 'I help businesses improve visibility through social media campaigns, competitor analysis, and strategic content planning.'
    }
  ]

  return (
    <section className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
            HOW I HELP PEOPLE
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl">
            I help individuals, startups, and businesses grow their digital presence and improve their content performance.
          </p>
          <p className="text-gray-800 dark:text-gray-200 font-light text-lg sm:text-xl mt-3 max-w-2xl">
            My main goal is to help brands turn ideas into impactful content and measurable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative p-6 sm:p-8 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-black dark:hover:border-white transition-all duration-500 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-white/10">
                {/* Decorative line on top left */}
                <div className="absolute top-0 left-0 w-0 h-px bg-black dark:bg-white group-hover:w-8 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 h-0 w-px bg-black dark:bg-white group-hover:h-8 transition-all duration-500"></div>
                
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl font-light text-gray-300 dark:text-gray-700 transition-colors duration-500 group-hover:text-black dark:group-hover:text-white">
                      {service.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-light tracking-tight leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed ml-12 sm:ml-14">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Approach Section */}
        <div
          className={`mt-16 sm:mt-20 md:mt-24 pt-16 sm:pt-20 md:pt-24 border-t border-gray-200 dark:border-gray-700 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-gray-600 dark:text-gray-400 font-light text-base sm:text-lg mb-3">
            My approach is always a mix of:
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight">
            CREATIVITY + ANALYTICS
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-light text-base sm:text-lg mt-4 sm:mt-6">
            Which helps businesses grow faster and more effectively.
          </p>
        </div>
      </div>
    </section>
  )
}
