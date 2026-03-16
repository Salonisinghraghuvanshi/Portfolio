'use client'

import { useEffect, useState } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  const skillCategories = [
    {
      title: 'Video Editing & Content Creation',
      skills: [
        'Short-form video editing (Reels, Shorts)',
        'Long-form YouTube editing',
        'Podcast clip creation',
        'Storytelling and hook creation',
        'Content repurposing strategies',
        'Audience retention optimization'
      ]
    },
    {
      title: 'Social Media Strategy & Marketing',
      skills: [
        'Instagram growth strategies',
        'YouTube content optimization',
        'Content planning and scheduling',
        'Social media campaign strategy',
        'Audience engagement techniques',
        'Lead generation through content'
      ]
    },
    {
      title: 'Data Analysis & Analytics',
      skills: [
        'Excel dashboards and reporting',
        'SQL for data management',
        'Data visualization and insights',
        'KPI tracking',
        'Market research',
        'Competitor analysis'
      ]
    }
  ]

  const tools = [
    'Adobe Premiere Pro',
    'CapCut',
    'DaVinci Resolve',
    'Canva',
    'YouTube Studio',
    'Instagram Insights',
    'Google Analytics',
    'Meta Business Suite',
    'Excel',
    'Notion'
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
            SKILLS & KNOWLEDGE
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl">
            I have experience working across several domains including video editing, marketing, analytics, and social media growth.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group p-8 sm:p-10 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-black dark:hover:border-white transition-all duration-700 hover:shadow-lg dark:hover:shadow-white/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-0 h-px bg-black dark:bg-white group-hover:w-6 transition-all duration-500"></div>
              <h3 className="text-lg sm:text-xl font-light tracking-tight mb-6 sm:mb-8">
                {category.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className={`text-gray-600 dark:text-gray-400 font-light text-sm sm:text-base flex items-start gap-3 transition-all duration-500 group-hover:text-gray-800 dark:group-hover:text-gray-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 40}ms` }}
                  >
                    <span className="text-black dark:text-white mt-1 flex-shrink-0 group-hover:scale-150 transition-transform duration-300">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div
          className={`border-t border-gray-200 dark:border-gray-700 pt-12 sm:pt-16 md:pt-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-8 sm:mb-10 md:mb-12">
            Tools & Platforms
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-light text-base sm:text-lg mb-8 sm:mb-10">
            I regularly work with:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`group px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 dark:border-gray-700 rounded-lg text-center transition-all duration-500 hover:border-black dark:hover:border-white hover:shadow-md dark:hover:shadow-white/10 hover:scale-105 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-sm sm:text-base font-light relative z-10">
                  {tool}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-400 font-light text-base sm:text-lg mt-8 sm:mt-10 md:mt-12">
            These tools help me manage content production, analyze performance, and build efficient workflows.
          </p>
        </div>
      </div>
    </section>
  )
}
