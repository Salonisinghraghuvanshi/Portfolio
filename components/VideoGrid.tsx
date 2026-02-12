'use client'

import { useEffect, useState } from 'react'

interface Video {
  id: number
  title: string
  description: string
  width: string
  height: string
  left: string
  top: string
}

export default function VideoGrid() {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    // Generate random positioned videos
    const videoData: Video[] = [
      {
        id: 1,
        title: 'HAYDEN HILLIER-SMITH | 3 EDITING SECRETS',
        description: 'MOTION DESIGN',
        width: 'w-80',
        height: 'h-48',
        left: 'left-[5%]',
        top: 'top-[100px]',
      },
      {
        id: 2,
        title: 'TALKING HEAD VIDEO | REVIEW',
        description: 'VIDEO EDITING & MOTION DESIGN',
        width: 'w-96',
        height: 'h-52',
        left: 'left-[25%]',
        top: 'top-[350px]',
      },
      {
        id: 3,
        title: 'ZHONG | 32 MILLION SUBSCRIBERS',
        description: 'VIDEO EDITING',
        width: 'w-72',
        height: 'h-44',
        left: 'left-[60%]',
        top: 'top-[200px]',
      },
      {
        id: 4,
        title: 'THOMAS WEBB | PROMOTIONAL VIDEO',
        description: 'VIDEO EDITING',
        width: 'w-80',
        height: 'h-48',
        left: 'left-[10%]',
        top: 'top-[600px]',
      },
      {
        id: 5,
        title: 'PROMOTIONAL CONTENT',
        description: 'MOTION DESIGN',
        width: 'w-96',
        height: 'h-52',
        left: 'left-[50%]',
        top: 'top-[750px]',
      },
    ]

    setVideos(videoData)
  }, [])

  return (
    <section id="portfolio" className="relative w-full bg-white py-24 px-6 min-h-screen">
      <div className="relative h-screen">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`absolute ${video.width} ${video.height} ${video.left} ${video.top} transition-all duration-500 hover:scale-105 cursor-pointer group`}
          >
            {/* Video Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-black/20">
                <div className="text-center text-white">
                  <div className="text-sm font-light">▶</div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs font-light tracking-widest">{video.title}</p>
              <p className="text-gray-300 text-xs mt-1 font-light">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Button */}
      <div className="flex justify-center pt-32">
        <a
          href="#portfolio-section"
          className="px-12 py-4 border border-black text-black font-light tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          PORTFOLIO
        </a>
      </div>
    </section>
  )
}
