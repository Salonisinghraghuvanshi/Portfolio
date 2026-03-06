'use client'

import { useRef, useState } from 'react'

interface Video {
  id: number
  title: string
  description: string
  src: string
  position: 'left' | 'right' | 'center'
}

const videos: Video[] = [
  {
    id: 1,
    title: 'HAYDEN HILLIER-SMITH | 3 EDITING SECRETS',
    description: 'MOTION DESIGN',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    position: 'left',
  },
  {
    id: 2,
    title: 'TALKING HEAD VIDEO | REVIEW',
    description: 'VIDEO EDITING & MOTION DESIGN',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    position: 'right',
  },
  {
    id: 3,
    title: 'ZHONG | 32 MILLION SUBSCRIBERS',
    description: 'VIDEO EDITING',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    position: 'center',
  },
  {
    id: 4,
    title: 'THOMAS WEBB | PROMOTIONAL VIDEO',
    description: 'VIDEO EDITING',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    position: 'left',
  },
  {
    id: 5,
    title: 'PROMOTIONAL CONTENT',
    description: 'MOTION DESIGN',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    position: 'right',
  },
  {
    id: 6,
    title: 'BRAND STORY | CINEMATIC EDIT',
    description: 'VIDEO EDITING & MOTION DESIGN',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    position: 'center',
  },
]

export default function VideoGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="portfolio" className="relative w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">

      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto">
        {videos.map((video) => {
          // On mobile: full width centered. On md+: use position offsets.
          const desktopPositionClass =
            video.position === 'left'
              ? 'md:mr-auto md:ml-0 lg:ml-8'
              : video.position === 'right'
              ? 'md:ml-auto md:mr-0 lg:mr-8'
              : 'md:mx-auto'

          return (
            <div
              key={video.id}
              className={`
                w-full mx-auto
                md:w-[480px] lg:w-[520px]
                ${desktopPositionClass}
                transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105
                cursor-pointer group relative
              `}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Video */}
              <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black aspect-video md:aspect-auto md:h-[280px] lg:h-[320px]">
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Video Info — always visible on mobile, hover on md+ */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0
                  bg-black/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4
                  transition-opacity duration-300 rounded-b-xl sm:rounded-b-2xl
                  opacity-100 md:opacity-0 md:group-hover:opacity-100
                `}
              >
                <p className="text-white text-[10px] sm:text-xs font-light tracking-widest leading-relaxed">
                  {video.title}
                </p>
                <p className="text-gray-300 text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-light">
                  {video.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Portfolio Button */}
      <div className="flex justify-center mt-16 sm:mt-20 md:mt-24">
        <a
          href="#portfolio-section"
          className="
            px-8 sm:px-10 md:px-12 py-3 sm:py-4
            border border-black text-black
            font-light tracking-widest text-xs sm:text-sm
            hover:bg-black hover:text-white
            transition-all duration-300
            w-full max-w-xs sm:w-auto text-center
          "
        >
          PORTFOLIO
        </a>
      </div>
    </section>
  )
}