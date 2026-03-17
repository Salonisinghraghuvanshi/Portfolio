'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

interface Video {
  id: number
  title: string
  description: string
  src: string
  position: 'left' | 'right' | 'center'
  accent: string
}

const videos: Video[] = [
  {
    id: 6,
    title: 'BRAND STORY | CINEMATIC EDIT',
    description: 'VIDEO EDITING & MOTION DESIGN',
    src: 'https://res.cloudinary.com/dbcxbzqr5/video/upload/v1773748463/IMG_4356_lqoz9q.mov',
    position: 'left',
    accent: '#0A66C2',
  },
  {
    id: 2,
    title: 'REAL STATE COMMERCIAL VIDEO',
    description: 'VIDEO EDITING & MOTION DESIGN',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772881607/copy_1925A47A-A58C-4077-B16D-F41B86835EE0_uav00g.mov',
    position: 'right',
    accent: '#E1306C',
  },
  {
    id: 3,
    title: 'BRAND PORMOTION VIDEO',
    description: 'AI CONTENT CREATION',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772881381/copy_935D9E68-8C3B-42BF-8B2F-66F5DE1C59FB_x3ndik.mov',
    position: 'center',
    accent: '#0A66C2',
  },
  {
    id: 1,
    title: 'STARTUP PITCH VIDEO',
    description: 'MOTION DESIGN',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772881443/prototype-H_ik19zo.mp4',
    position: 'left',
    accent: '#FF2020',
  },
  {
    id: 4,
    title: 'BRAND PORTFOLIO VIDEO',
    description: 'STORY TELLING | EXPLAINATION',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772883496/video_1_e1te4m.mp4',
    position: 'right',
    accent: '#FF2020',
  },
  {
    id: 5,
    title: 'MARKETING CONTENT',
    description: 'AI VIDEO CREATION',
    src: 'https://res.cloudinary.com/dnuvogfln/video/upload/v1772883514/copy_C0774FF6-0902-4AC4-82E9-9445EB821455_kewobn.mp4',
    position: 'center',
    accent: '#E1306C',
  },
]

export default function VideoGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [openVideo, setOpenVideo] = useState<Video | null>(null)
  const [animState, setAnimState] = useState<'entering' | 'open' | 'exiting' | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  const handleOpen = useCallback((video: Video) => {
    setOpenVideo(video)
    setAnimState('entering')
    setTimeout(() => setAnimState('open'), 600)
  }, [])

  const handleClose = useCallback(() => {
    setAnimState('exiting')
    setTimeout(() => {
      setOpenVideo(null)
      setAnimState(null)
    }, 400)
  }, [])

  useEffect(() => {
    if (animState === 'open' && modalVideoRef.current) {
      modalVideoRef.current.muted = false
      modalVideoRef.current.volume = 0.85
      modalVideoRef.current.play().catch(() => {
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openVideo) handleClose()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openVideo, handleClose])

  useEffect(() => {
    document.body.style.overflow = openVideo ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [openVideo])

  return (
    <>
      <style>{`
        @keyframes vg-modalEnter {
          0%   { opacity:0; transform:rotate(-8deg) scale(0.35); }
          60%  { opacity:1; transform:rotate(2deg) scale(1.04); }
          80%  { transform:rotate(-1deg) scale(0.98); }
          100% { opacity:1; transform:rotate(0deg) scale(1); }
        }
        @keyframes vg-modalExit {
          0%   { opacity:1; transform:rotate(0deg) scale(1); }
          100% { opacity:0; transform:rotate(6deg) scale(0.4); }
        }
        @keyframes vg-backdropIn  { from{opacity:0} to{opacity:1} }
        @keyframes vg-backdropOut { from{opacity:1} to{opacity:0} }
        @keyframes vg-titleSlide  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes vg-fadeUp      { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes vg-drift       { from{transform:translate(0,0)scale(1)} to{transform:translate(35px,25px)scale(1.06)} }
        @keyframes vg-blink       { 0%,100%{opacity:1} 50%{opacity:.2} }

        .vg-modal-entering { animation: vg-modalEnter 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .vg-modal-open     { opacity:1; transform:rotate(0deg) scale(1); }
        .vg-modal-exiting  { animation: vg-modalExit 0.4s cubic-bezier(0.55,0,1,0.45) forwards; }
        .vg-backdrop-in    { animation: vg-backdropIn 0.35s ease forwards; }
        .vg-backdrop-out   { animation: vg-backdropOut 0.4s ease forwards; }
        .vg-title-in       { animation: vg-titleSlide 0.5s ease 0.45s both; }
      `}</style>

      <section id="portfolio" className="vg-root">
        {/* Orbs */}
        <div className="vg-orb o1" />
        <div className="vg-orb o2" />
        <div className="vg-orb o3" />
        <div className="vg-grain" />

        <div className="vg-wrap">
          {/* ── HEADER ── */}
          <header className="vg-header">
            <div className="vg-eyebrow">
              <span className="vg-dot" />
              Portfolio
            </div>

            <h2 className="vg-title">
              Selected
              <br />
              Work
            </h2>

            <p className="vg-sub">Click any video to watch with sound.</p>
          </header>

          {/* ── VIDEO CARDS ── */}
          <div className="vg-grid">
            {videos.map((video, i) => {
              const posClass =
                video.position === 'left'
                  ? 'vg-pos-left'
                  : video.position === 'right'
                  ? 'vg-pos-right'
                  : 'vg-pos-center'

              return (
                <div
                  key={video.id}
                  className={`vg-card-wrap ${posClass}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onClick={() => handleOpen(video)}
                  onMouseEnter={() => setHoveredId(video.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className="vg-card"
                    style={{ '--ac': video.accent } as React.CSSProperties}
                  >
                    {/* ring decorations */}
                    <div className="vg-ring" />
                    <div className="vg-ring r2" />

                    {/* thumbnail */}
                    <div className="vg-thumb">
                      <video
                        src={video.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="vg-video"
                      />

                      {/* play overlay */}
                      <div
                        className={`vg-play-overlay ${
                          hoveredId === video.id ? 'is-hovered' : ''
                        }`}
                      >
                        <div className="vg-play-btn">
                          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* accent bar */}
                      <div
                        className="vg-thumb-bar"
                        style={{ background: video.accent }}
                      />
                    </div>

                    {/* info footer */}
                    <div className="vg-info">
                      <div className="vg-info-left">
                        <span
                          className="vg-info-accent-dot"
                          style={{ background: video.accent }}
                        />
                        <div>
                          <p className="vg-info-title">{video.title}</p>
                          <p className="vg-info-desc">{video.description}</p>
                        </div>
                      </div>

                      <svg
                        className="vg-arr"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── PORTFOLIO BUTTON ── */}
          {/* <div className="vg-cta-wrap">
            <a href="#portfolio-section" className="vg-cta-btn">
              View Full Portfolio
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div> */}
        </div>

        {/* ── MODAL ── */}
        {openVideo && (
          <div
            className={`vg-backdrop ${
              animState === 'exiting' ? 'vg-backdrop-out' : 'vg-backdrop-in'
            }`}
            onClick={handleClose}
          >
            <div
              className={`vg-modal ${
                animState === 'entering'
                  ? 'vg-modal-entering'
                  : animState === 'open'
                  ? 'vg-modal-open'
                  : animState === 'exiting'
                  ? 'vg-modal-exiting'
                  : ''
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* close */}
              <button className="vg-modal-close" onClick={handleClose}>
                <span>CLOSE</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* player */}
              <div className="vg-modal-player">
                <video
                  ref={modalVideoRef}
                  src={openVideo.src}
                  controls
                  playsInline
                  className="vg-modal-video"
                />
                <div className="vg-modal-bar" style={{ background: openVideo.accent }} />
              </div>

              {/* title */}
              <div
                className={animState === 'exiting' ? '' : 'vg-title-in'}
                style={{ marginTop: '20px' }}
              >
                <p className="vg-modal-title">{openVideo.title}</p>
                <p className="vg-modal-desc">{openVideo.description}</p>
              </div>
            </div>
          </div>
        )}

        <style>{css}</style>
      </section>
    </>
  )
}

const css = `
  .vg-root {
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;
    font-family: var(--fb);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* Light mode (default) */
  .vg-root {
    --bg:      #f8f9fb;
    --surface: #ffffff;
    --border:  rgba(0,0,0,0.08);
    --text:    #0d1017;
    --muted:   rgba(13,16,23,0.48);
    --faint:   rgba(13,16,23,0.15);
    background: var(--bg);
    color: var(--text);
    transition: background-color 300ms ease, color 300ms ease;
  }

  /* Dark mode */
  :root.dark .vg-root {
    --bg:      #07090e;
    --surface: #0d1017;
    --border:  rgba(255,255,255,0.07);
    --text:    #edf0f7;
    --muted:   rgba(237,240,247,0.42);
    --faint:   rgba(237,240,247,0.15);
    background: var(--bg);
    color: var(--text);
  }

  /* grain */
  .vg-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: .35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  :root.dark .vg-grain {
    opacity: .5;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  /* orbs */
  .vg-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(110px);
    pointer-events: none;
    z-index: 0;
  }

  .vg-root .o1 {
    width: 600px;
    height: 600px;
    background: rgba(255,32,32,.06);
    top: -150px;
    right: -150px;
    animation: vg-drift 22s ease-in-out infinite alternate;
  }

  .vg-root .o2 {
    width: 500px;
    height: 500px;
    background: rgba(10,102,194,.06);
    bottom: -100px;
    left: -100px;
    animation: vg-drift 28s ease-in-out infinite alternate-reverse;
  }

  .vg-root .o3 {
    width: 320px;
    height: 320px;
    background: rgba(225,48,108,.04);
    top: 45%;
    left: 42%;
    animation: vg-drift 18s ease-in-out infinite alternate;
  }

  :root.dark .vg-root .o1 { background: rgba(255,32,32,.055); }
  :root.dark .vg-root .o2 { background: rgba(10,102,194,.065); }
  :root.dark .vg-root .o3 { background: rgba(225,48,108,.04); }

  /* layout */
  .vg-wrap {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 22px 100px;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  /* header */
  .vg-header {}

  .vg-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 26px;
  }

  :root.dark .vg-root .vg-eyebrow {
    background: rgba(255,255,255,.04);
  }

  .vg-dot {
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    animation: vg-blink 2.4s ease infinite;
    display: inline-block;
  }

  .vg-title {
    font-family: var(--fd);
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 800;
    letter-spacing: -.04em;
    line-height: .93;
    margin-bottom: 18px;
    color: var(--text);
  }

  /* Light mode title */
  .vg-root .vg-title {
    background: linear-gradient(140deg, #0d1017 20%, rgba(13,16,23,.65) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Dark mode title */
  :root.dark .vg-root .vg-title {
    background: linear-gradient(140deg, #ffffff 30%, rgba(255,255,255,.38) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .vg-sub {
    font-size: 14px;
    color: var(--muted);
    font-weight: 300;
    margin: 0;
  }

  /* grid */
  .vg-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* card wrapper */
  .vg-card-wrap {
    width: 100%;
    animation: vg-fadeUp .7s ease both;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .vg-card-wrap { width: 500px; }
    .vg-pos-left   { margin-right: auto; }
    .vg-pos-right  { margin-left: auto; }
    .vg-pos-center { margin: 0 auto; }
  }

  /* card */
  .vg-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r);
    overflow: hidden;
    position: relative;
    transition: transform .32s cubic-bezier(.34,1.56,.64,1), border-color .28s, box-shadow .28s;
  }

  .vg-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 80% 0%, color-mix(in srgb, var(--ac) 9%, transparent) 0%, transparent 68%);
    opacity: 0;
    transition: opacity .35s;
    pointer-events: none;
    z-index: 1;
    border-radius: inherit;
  }

  .vg-card-wrap:hover .vg-card {
    transform: translateY(-6px);
    border-color: var(--ac);
    box-shadow: 0 28px 72px rgba(0,0,0,.18);
  }

  :root.dark .vg-root .vg-card-wrap:hover .vg-card {
    box-shadow: 0 28px 72px rgba(0,0,0,.55);
  }

  .vg-card-wrap:hover .vg-card::before { opacity: 1; }

  /* rings */
  .vg-ring {
    position: absolute;
    bottom: -56px;
    right: -56px;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 1px solid var(--ac, rgba(255,255,255,.08));
    opacity: .09;
    pointer-events: none;
    z-index: 0;
  }

  .vg-ring.r2 {
    bottom: -88px;
    right: -88px;
    width: 230px;
    height: 230px;
    opacity: .04;
  }

  /* thumbnail */
  .vg-thumb {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #000;
  }

  .vg-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .6s ease;
  }

  .vg-card-wrap:hover .vg-video { transform: scale(1.04); }

  /* play overlay */
  .vg-play-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity .3s;
    z-index: 2;
  }

  .vg-play-overlay.is-hovered { opacity: 1; }

  .vg-play-btn {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(255,255,255,.15);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,.35);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .25s cubic-bezier(.34,1.56,.64,1), background .2s;
  }

  .vg-card-wrap:hover .vg-play-btn {
    transform: scale(1.1);
    background: rgba(255,255,255,.22);
  }

  /* accent bar */
  .vg-thumb-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    opacity: 0;
    transition: opacity .3s;
    z-index: 3;
  }

  .vg-card-wrap:hover .vg-thumb-bar { opacity: 1; }

  /* info row */
  .vg-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    gap: 12px;
    position: relative;
    z-index: 2;
  }

  .vg-info-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .vg-info-accent-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .vg-info-title {
    font-family: var(--fd);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .06em;
    color: var(--text);
    line-height: 1.3;
    margin: 0;
  }

  .vg-info-desc {
    font-size: 10.5px;
    color: var(--muted);
    font-weight: 300;
    letter-spacing: .08em;
    margin: 3px 0 0;
  }

  .vg-arr {
    color: var(--faint);
    transition: color .2s, transform .2s;
    flex-shrink: 0;
  }

  .vg-card-wrap:hover .vg-arr {
    color: var(--ac);
    transform: translate(3px,-3px);
  }

  /* cta */
  .vg-cta-wrap {
    display: flex;
    justify-content: center;
  }

  .vg-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 100px;
    font-family: var(--fb);
    font-size: 13px;
    font-weight: 500;
    border: 1px solid var(--border);
    color: var(--text);
    background: var(--surface);
    text-decoration: none;
    transition: background .2s, border-color .2s, transform .28s cubic-bezier(.34,1.56,.64,1), box-shadow .2s;
  }

  .vg-cta-btn:hover {
    background: rgba(13,16,23,.04);
    border-color: rgba(13,16,23,.18);
    transform: translateY(-3px);
  }

  :root.dark .vg-root .vg-cta-btn {
    border: 1px solid rgba(255,255,255,.2);
    background: rgba(255,255,255,.04);
  }

  :root.dark .vg-root .vg-cta-btn:hover {
    background: rgba(255,255,255,.08);
    border-color: rgba(255,255,255,.4);
  }

  /* modal backdrop */
  .vg-backdrop {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(0,0,0,0.93);
  }

  /* modal */
  .vg-modal {
    position: relative;
    width: 100%;
    max-width: 900px;
  }

  .vg-modal-close {
    position: absolute;
    top: -44px;
    right: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(237,240,247,.6);
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--fb);
    font-size: 11px;
    letter-spacing: .14em;
    transition: color .2s;
  }

  .vg-modal-close:hover { color: #ffffff; }

  .vg-modal-player {
    width: 100%;
    border-radius: var(--r);
    overflow: hidden;
    background: #000;
    aspect-ratio: 16 / 9;
    border: 1px solid rgba(255,255,255,.08);
    box-shadow: 0 40px 100px rgba(0,0,0,.8);
    position: relative;
  }

  .vg-modal-video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .vg-modal-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    z-index: 2;
  }

  .vg-modal-title {
    font-family: var(--fd);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .06em;
    color: #edf0f7;
    margin: 0 0 4px;
  }

  .vg-modal-desc {
    font-size: 11px;
    color: rgba(237,240,247,.6);
    letter-spacing: .1em;
    font-weight: 300;
    margin: 0;
  }

  @media (max-width: 560px) {
    .vg-info-title { font-size: 10px; }
    .vg-modal-close { top: -38px; font-size: 10px; }
  }
`