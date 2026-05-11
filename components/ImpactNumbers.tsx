'use client'

import { useEffect, useRef } from 'react'

const metrics = [
  { value: '9.7K+', label: 'Instagram Audience', accent: '#E1306C' },
  { value: '1.5K+', label: 'YouTube Subscribers', accent: '#FF2020' },
  { value: '3', label: 'International Markets', accent: '#0A66C2' },
  { value: '2+', label: 'Active Client Brands', accent: '#FF2020' },
  { value: '3+', label: 'Lead Gen Systems Built', accent: '#E1306C' },
  { value: '3+', label: 'Years Experience', accent: '#0A66C2' },
  { value: '100+', label: 'Projects Delivered', accent: '#FF2020' },
  { value: 'Full', label: 'Funnel Expertise', accent: '#0A66C2' },
]

export default function ImpactNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="in-root" ref={sectionRef}>
      <div className="in-orb o1" />
      <div className="in-orb o2" />
      <div className="in-orb o3" />
      <div className="in-grain" />

      <div className="in-wrap">
        <header className="in-header">
          <div className="in-eyebrow">
            <span className="in-dot" />
            Impact Numbers
          </div>

          <h2 className="in-title">
            By The<br />Numbers
          </h2>
        </header>

        <div className="in-grid">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="in-card"
              style={
                {
                  '--ac': metric.accent,
                  animationDelay: `${i * 0.08}s`,
                } as React.CSSProperties
              }
            >
              <div className="in-ring" />
              <div className="in-ring r2" />
              <span className="in-num-accent" style={{ background: metric.accent }} />
              <div className="in-card-value">{metric.value}</div>
              <div className="in-card-label">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="in-summary">
          I focus on one thing: turning attention into measurable business growth.
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
  .in-root {
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;
    font-family: var(--fb);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* Light mode (default) */
  .in-root {
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
  :root.dark .in-root {
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
  .in-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: .35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  :root.dark .in-grain {
    opacity: .5;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  /* orbs */
  .in-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(110px);
    pointer-events: none;
    z-index: 0;
  }

  /* Light mode orbs */
  .in-root .o1 {
    width: 600px;
    height: 600px;
    background: rgba(255,32,32,.06);
    top: -150px;
    right: -150px;
    animation: in-drift 22s ease-in-out infinite alternate;
  }

  .in-root .o2 {
    width: 500px;
    height: 500px;
    background: rgba(10,102,194,.06);
    bottom: -100px;
    left: -100px;
    animation: in-drift 28s ease-in-out infinite alternate-reverse;
  }

  .in-root .o3 {
    width: 320px;
    height: 320px;
    background: rgba(225,48,108,.04);
    top: 45%;
    left: 42%;
    animation: in-drift 18s ease-in-out infinite alternate;
  }

  /* Dark mode orbs */
  :root.dark .in-root .o1 { background: rgba(255,32,32,.055); }
  :root.dark .in-root .o2 { background: rgba(10,102,194,.065); }
  :root.dark .in-root .o3 { background: rgba(225,48,108,.04); }

  @keyframes in-drift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(35px,25px) scale(1.06); }
  }

  /* layout */
  .in-wrap {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 22px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 52px;
    text-align: center;
  }

  /* header */
  .in-header {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .is-visible .in-header {
    opacity: 1;
    transform: none;
  }

  /* eyebrow */
  .in-eyebrow {
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

  :root.dark .in-root .in-eyebrow {
    background: rgba(255,255,255,.04);
  }

  .in-dot {
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    animation: in-blink 2.4s ease infinite;
    display: inline-block;
  }

  @keyframes in-blink {
    0%,100% { opacity: 1; }
    50%     { opacity: .2; }
  }

  /* title */
  .in-title {
    font-family: var(--fd);
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 800;
    letter-spacing: -.025em;
    line-height: 1.12;
    margin: 0;
  }

  /* grid */
  .in-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease;
  }

  .is-visible .in-grid {
    opacity: 1;
    transform: none;
  }

  /* card */
  .in-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 22px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
    transition: transform .32s cubic-bezier(.34,1.56,.64,1), border-color .28s, box-shadow .28s;
    animation: in-fadeUp .7s ease both;
  }

  .in-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 50% 0%,
      color-mix(in srgb, var(--ac) 10%, transparent) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity .35s;
    pointer-events: none;
    border-radius: inherit;
  }

  .in-card:hover {
    transform: translateY(-6px);
    border-color: var(--ac);
    box-shadow: 0 24px 60px rgba(0,0,0,.18);
  }

  :root.dark .in-root .in-card:hover {
    box-shadow: 0 24px 60px rgba(0,0,0,.55);
  }

  .in-card:hover::before {
    opacity: 1;
  }

  @keyframes in-fadeUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* rings */
  .in-ring {
    position: absolute;
    bottom: -56px;
    right: -56px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 1px solid var(--ac, rgba(255,255,255,.08));
    opacity: .09;
    pointer-events: none;
  }

  .in-ring.r2 {
    bottom: -80px;
    right: -80px;
    width: 190px;
    height: 190px;
    opacity: .04;
  }

  /* accent dot */
  .in-num-accent {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: inline-block;
  }

  .in-card-value {
    font-family: var(--fd);
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: -.04em;
    color: var(--ac);
    line-height: 1;
  }

  .in-card-label {
    font-size: 11px;
    color: var(--muted);
    font-weight: 400;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  /* summary */
  .in-summary {
    font-size: 16px;
    font-style: italic;
    color: var(--muted);
    font-weight: 400;
    max-width: 520px;
    text-align: center;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease;
  }

  .is-visible .in-summary {
    opacity: 1;
    transform: none;
  }

  /* responsive */
  @media (max-width: 860px) {
    .in-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    .in-wrap {
      padding: 64px 16px 80px;
      gap: 34px;
    }

    .in-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .in-card {
      padding: 18px 14px;
    }

    .in-card-value {
      font-size: 1.5rem;
    }

    .in-card-label {
      font-size: 10px;
    }

    .in-summary {
      font-size: 14px;
    }
  }
`
