'use client'

import { useEffect, useRef } from 'react'

const words = [
  { text: 'VIDEO', accent: null },
  { text: 'EDITOR', accent: null },
  { text: '|', accent: null },
  { text: 'CREATIVE', accent: '#FF2020' },
  { text: 'DIRECTOR', accent: null },
  { text: '|', accent: null },
  { text: 'SHORT-FORM', accent: '#E1306C' },
  { text: 'CONTENT', accent: null },
  { text: 'SPECIALIST', accent: null },
  { text: '|', accent: null },
  { text: 'HELPING', accent: null },
  { text: 'BRANDS', accent: null },
  { text: 'AND', accent: null },
  { text: 'CREATORS', accent: null },
  { text: 'GROW', accent: '#0A66C2' },
  { text: 'WITH', accent: null },
  { text: 'HIGH-IMPACT', accent: null },
  { text: 'VIDEO', accent: null },
  { text: 'CONTENT.', accent: null },
]

export default function About() {
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
    <>
      <section className="ab-root" ref={sectionRef}>
        <div className="ab-orb o1" />
        <div className="ab-orb o2" />
        <div className="ab-orb o3" />
        <div className="ab-grain" />

        <div className="ab-wrap">
          <div className="ab-eyebrow">
            <span className="ab-dot" />
            About
          </div>

          <h2 className="ab-headline">
            {words.map((w, i) => (
              <span
                key={i}
                className={`ab-word ${w.accent ? 'is-accent' : 'is-plain'}`}
                style={
                  {
                    '--delay': `${i * 0.04}s`,
                    '--ac': w.accent ?? 'inherit',
                  } as React.CSSProperties
                }
              >
                <span
                  className="ab-word-inner"
                  style={w.accent ? { color: w.accent } : {}}
                >
                  {w.text}
                </span>{' '}
              </span>
            ))}
          </h2>

          {/* stats row */}
          <div className="ab-stats">
            {[
              { value: '6+', label: 'Years Experience', accent: '#FF2020' },
              { value: 'Top 1%', label: 'Creator Networks', accent: '#E1306C' },
              { value: '100+', label: 'Projects Delivered', accent: '#0A66C2' },
            ].map((s, i) => (
              <div
                key={i}
                className="ab-stat-card"
                style={
                  {
                    '--ac': s.accent,
                    animationDelay: `${0.6 + i * 0.12}s`,
                  } as React.CSSProperties
                }
              >
                <div className="ab-ring" />
                <div className="ab-ring r2" />
                <div className="ab-stat-val">{s.value}</div>
                <div className="ab-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{css}</style>
      </section>
    </>
  )
}

const css = `
  .ab-root {
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;
    font-family: var(--fb);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    position: relative;
  }

  /* Light mode (default) */
  .ab-root {
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
  :root.dark .ab-root {
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
  .ab-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: .35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  :root.dark .ab-grain {
    opacity: .5;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  /* orbs */
  .ab-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(110px);
    pointer-events: none;
    z-index: 0;
  }

  /* Light mode orbs */
  .ab-root .o1 {
    width: 600px;
    height: 600px;
    background: rgba(255,32,32,.06);
    top: -150px;
    right: -150px;
    animation: ab-drift 22s ease-in-out infinite alternate;
  }

  .ab-root .o2 {
    width: 500px;
    height: 500px;
    background: rgba(10,102,194,.06);
    bottom: -100px;
    left: -100px;
    animation: ab-drift 28s ease-in-out infinite alternate-reverse;
  }

  .ab-root .o3 {
    width: 320px;
    height: 320px;
    background: rgba(225,48,108,.04);
    top: 45%;
    left: 42%;
    animation: ab-drift 18s ease-in-out infinite alternate;
  }

  /* Dark mode orbs */
  :root.dark .ab-root .o1 { background: rgba(255,32,32,.055); }
  :root.dark .ab-root .o2 { background: rgba(10,102,194,.065); }
  :root.dark .ab-root .o3 { background: rgba(225,48,108,.04); }

  @keyframes ab-drift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(35px,25px) scale(1.06); }
  }

  /* layout */
  .ab-wrap {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
    padding: 80px 22px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 52px;
    text-align: center;
  }

  /* eyebrow */
  .ab-eyebrow {
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
    opacity: 0;
    transform: translateY(16px);
    transition: opacity .7s ease, transform .7s ease;
  }

  :root.dark .ab-root .ab-eyebrow {
    background: rgba(255,255,255,.04);
  }

  .is-visible .ab-eyebrow {
    opacity: 1;
    transform: none;
  }

  .ab-dot {
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    animation: ab-blink 2.4s ease infinite;
    display: inline-block;
  }

  @keyframes ab-blink {
    0%,100% { opacity: 1; }
    50%     { opacity: .2; }
  }

  /* headline */
  .ab-headline {
    font-family: var(--fd);
    font-size: clamp(2rem, 5.5vw, 4.2rem);
    font-weight: 800;
    letter-spacing: -.025em;
    line-height: 1.12;
    margin: 0;
  }

  /* per-word reveal */
  .ab-word {
    display: inline;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity .5s ease, transform .5s ease;
    transition-delay: var(--delay);
  }

  .is-visible .ab-word {
    opacity: 1;
    transform: none;
  }

  .ab-word-inner {
    display: inline;
    transition: color .3s ease;
  }

  /* plain words - LIGHT MODE */
  .ab-word.is-plain .ab-word-inner {
    background: linear-gradient(140deg, #0d1017 20%, rgba(13,16,23,.62) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* plain words - DARK MODE */
  :root.dark .ab-root .ab-word.is-plain .ab-word-inner {
    background: linear-gradient(140deg, #ffffff 35%, rgba(255,255,255,.5) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* accent words keep their solid accent color */
  .ab-word.is-accent .ab-word-inner {
    background: none !important;
    -webkit-background-clip: initial;
    background-clip: initial;
    -webkit-text-fill-color: unset;
  }

  /* stats */
  .ab-stats {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .8s .5s ease, transform .8s .5s ease;
  }

  .is-visible .ab-stats {
    opacity: 1;
    transform: none;
  }

  .ab-stat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 22px 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    position: relative;
    overflow: hidden;
    min-width: 150px;
    transition: transform .32s cubic-bezier(.34,1.56,.64,1), border-color .28s, box-shadow .28s;
    animation: ab-fadeUp .7s ease both;
  }

  .ab-stat-card::before {
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

  .ab-stat-card:hover {
    transform: translateY(-6px);
    border-color: var(--ac);
    box-shadow: 0 24px 60px rgba(0,0,0,.18);
  }

  :root.dark .ab-root .ab-stat-card:hover {
    box-shadow: 0 24px 60px rgba(0,0,0,.55);
  }

  .ab-stat-card:hover::before {
    opacity: 1;
  }

  @keyframes ab-fadeUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .ab-ring {
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

  .ab-ring.r2 {
    bottom: -80px;
    right: -80px;
    width: 190px;
    height: 190px;
    opacity: .04;
  }

  .ab-stat-val {
    font-family: var(--fd);
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -.04em;
    color: var(--ac);
    line-height: 1;
  }

  .ab-stat-label {
    font-size: 11px;
    color: var(--muted);
    font-weight: 400;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  /* responsive */
  @media (max-width: 768px) {
    .ab-wrap {
      gap: 40px;
      padding: 72px 18px 90px;
    }

    .ab-headline {
      font-size: clamp(1.8rem, 8vw, 3rem);
      line-height: 1.18;
    }

    .ab-stats {
      gap: 12px;
    }

    .ab-stat-card {
      min-width: calc(50% - 8px);
      padding: 20px 18px;
    }

    .ab-stat-val {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 560px) {
    .ab-root {
      min-height: auto;
    }

    .ab-wrap {
      padding: 64px 16px 80px;
      gap: 34px;
    }

    .ab-headline {
      font-size: clamp(1.55rem, 8.2vw, 2.3rem);
      line-height: 1.22;
    }

    .ab-stats {
      width: 100%;
      flex-direction: column;
      gap: 10px;
    }

    .ab-stat-card {
      width: 100%;
      min-width: 100%;
    }

    .ab-stat-label {
      font-size: 10px;
    }
  }
`