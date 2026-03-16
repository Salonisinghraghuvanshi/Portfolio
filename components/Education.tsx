'use client'

import { useEffect, useState } from 'react'

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Himachal Pradesh Technical University (HPTU)',
      period: '2022 – 2024',
      cgpa: 'CGPA: 7.14',
      highlight: true
    },
    {
      degree: 'Bachelor of Science (B.Sc) in Mathematics',
      school: 'Himachal Pradesh University (HPU)',
      period: '2019 – 2022',
      cgpa: 'CGPA: 8.18'
    }
  ]

  const mentorship = [
    'Python for data analysis',
    'Machine learning fundamentals',
    'Data visualization',
    'Analytical problem solving'
  ]

  return (
    <section className="w-full min-h-screen bg-black dark:bg-white text-white dark:text-black py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
            EDUCATION
          </h2>
          <p className="text-gray-400 dark:text-gray-600 font-light text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl">
            I have a strong academic background in mathematics, technology, and data analysis, which supports my analytical and strategic thinking.
          </p>
        </div>

        {/* Degrees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`relative p-6 sm:p-8 border border-gray-600 dark:border-gray-400 rounded-lg hover:border-white dark:hover:border-black transition-all duration-500 ${edu.highlight ? 'border-l-4 border-l-white dark:border-l-black' : ''}`}>
                <div className="absolute top-0 left-0 w-0 h-px bg-white dark:bg-black group-hover:w-6 transition-all duration-500"></div>
                <h3 className="text-lg sm:text-xl font-light tracking-tight mb-2 group-hover:text-gray-200 dark:group-hover:text-gray-800 transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 dark:text-gray-700 font-light text-sm sm:text-base mb-3 group-hover:text-gray-100 dark:group-hover:text-gray-600 transition-colors duration-300">
                  {edu.school}
                </p>
                <div className="flex flex-col gap-2 text-gray-400 dark:text-gray-600 font-light text-sm group-hover:text-gray-300 dark:group-hover:text-gray-500 transition-colors duration-300">
                  <span>{edu.period}</span>
                  <span className={`${edu.highlight ? 'font-normal text-white dark:text-black' : ''}`}>{edu.cgpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship */}
        <div
          className={`border-t border-gray-700 dark:border-gray-300 pt-12 sm:pt-16 md:pt-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight">
              Data Science Mentorship Program (2024)
            </h3>
            <p className="text-gray-400 dark:text-gray-600 font-light text-sm sm:text-base mt-3 sm:mt-4">
              Where I studied:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {mentorship.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <span className="text-white dark:text-black mt-1 flex-shrink-0">•</span>
                <p className="text-gray-300 dark:text-gray-700 font-light text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-400 dark:text-gray-600 font-light text-base sm:text-lg mt-8 sm:mt-10 md:mt-12">
            This combination of technical education and creative skills allows me to approach digital marketing and content creation in a unique way.
          </p>
        </div>
      </div>
    </section>
  )
}
