'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

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
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772881443/prototype-H_ik19zo.mp4',
    position: 'left',
  },
  {
    id: 2,
    title: 'TALKING HEAD VIDEO | REVIEW',
    description: 'VIDEO EDITING & MOTION DESIGN',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772881607/copy_1925A47A-A58C-4077-B16D-F41B86835EE0_uav00g.mov',
    position: 'right',
  },
  {
    id: 3,
    title: 'ZHONG | 32 MILLION SUBSCRIBERS',
    description: 'VIDEO EDITING',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772881381/copy_935D9E68-8C3B-42BF-8B2F-66F5DE1C59FB_x3ndik.mov',
    position: 'center',
  },
  {
    id: 4,
    title: 'THOMAS WEBB | PROMOTIONAL VIDEO',
    description: 'VIDEO EDITING',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772883496/video_1_e1te4m.mp4',
    position: 'left',
  },
  {
    id: 5,
    title: 'PROMOTIONAL CONTENT',
    description: 'MOTION DESIGN',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772883514/copy_C0774FF6-0902-4AC4-82E9-9445EB821455_kewobn.mp4',
    position: 'right',
  },
  {
    id: 6,
    title: 'BRAND STORY | CINEMATIC EDIT',
    description: 'VIDEO EDITING & MOTION DESIGN',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772883934/IMG_4239_orye4u.mp4',
    position: 'center',
  },
]

export default function VideoGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [openVideo, setOpenVideo] = useState<Video | null>(null)
  const [animState, setAnimState] = useState<'entering' | 'open' | 'exiting' | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  // Open modal with animation
  const handleOpen = useCallback((video: Video) => {
    setOpenVideo(video)
    setAnimState('entering')
    // After enter animation completes, set to 'open'
    setTimeout(() => setAnimState('open'), 600)
  }, [])

  // Close modal with exit animation
  const handleClose = useCallback(() => {
    setAnimState('exiting')
    setTimeout(() => {
      setOpenVideo(null)
      setAnimState(null)
    }, 400)
  }, [])

  // Play with sound when modal opens
  useEffect(() => {
    if (animState === 'open' && modalVideoRef.current) {
      modalVideoRef.current.muted = false
      modalVideoRef.current.volume = 0.85
      modalVideoRef.current.play().catch(() => {
        // Autoplay with sound blocked — try muted fallback
        if (modalVideoRef.current) {
          modalVideoRef.current.muted = true
          modalVideoRef.current.play()
        }
      })
    }
    if (animState === 'exiting' && modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
  }, [animState])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openVideo) handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openVideo, handleClose])

  // Lock scroll when modal open
  useEffect(() => {
    if (openVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [openVideo])

  return (
    <>
      {/* Inject keyframes */}
      <style>{`
        @keyframes modalEnter {
          0%   { opacity: 0; transform: rotate(-8deg) scale(0.35); }
          60%  { opacity: 1; transform: rotate(2deg) scale(1.04); }
          80%  { transform: rotate(-1deg) scale(0.98); }
          100% { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        @keyframes modalExit {
          0%   { opacity: 1; transform: rotate(0deg) scale(1); }
          100% { opacity: 0; transform: rotate(6deg) scale(0.4); }
        }
        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes backdropOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes titleSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .modal-entering {
          animation: modalEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .modal-open {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }
        .modal-exiting {
          animation: modalExit 0.4s cubic-bezier(0.55, 0, 1, 0.45) forwards;
        }
        .backdrop-in {
          animation: backdropIn 0.35s ease forwards;
        }
        .backdrop-out {
          animation: backdropOut 0.4s ease forwards;
        }
        .title-in {
          animation: titleSlideUp 0.5s ease 0.45s both;
        }
      `}</style>

      <section
        id="portfolio"
        className="relative w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto">
          {videos.map((video) => {
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
                onClick={() => handleOpen(video)}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Thumbnail video (muted, autoplay) */}
                <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black aspect-video md:aspect-auto md:h-[280px] lg:h-[320px] relative">
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Play icon overlay */}
                  <div
                    className={`
                      absolute inset-0 flex items-center justify-center
                      transition-opacity duration-300
                      opacity-0 group-hover:opacity-100
                    `}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
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

      {/* Fullscreen Modal */}
      {openVideo && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8
            ${animState === 'exiting' ? 'backdrop-out' : 'backdrop-in'}
          `}
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={handleClose}
        >
          {/* Modal content */}
          <div
            className={`
              relative w-full max-w-5xl
              ${animState === 'entering' ? 'modal-entering' : ''}
              ${animState === 'open' ? 'modal-open' : ''}
              ${animState === 'exiting' ? 'modal-exiting' : ''}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="
                absolute -top-12 right-0 text-white/70 hover:text-white
                transition-colors duration-200 flex items-center gap-2
                text-xs tracking-widest font-light
              "
            >
              <span>CLOSE</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video player */}
            <div className="w-full rounded-2xl overflow-hidden bg-black shadow-2xl aspect-video">
              <video
                ref={modalVideoRef}
                src={openVideo.src}
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title below */}
            <div className={`mt-4 sm:mt-6 ${animState === 'exiting' ? '' : 'title-in'}`}>
              <p className="text-white text-xs sm:text-sm font-light tracking-widest">
                {openVideo.title}
              </p>
              <p className="text-gray-400 text-xs mt-1 font-light tracking-wider">
                {openVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}