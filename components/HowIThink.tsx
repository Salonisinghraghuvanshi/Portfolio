'use client'

import { useEffect, useRef } from 'react'

export default function HowIThink() {
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
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="ht-root" ref={sectionRef} id="thinking">
      <div className="ht-orb o1" />
      <div className="ht-orb o2" />
      <div className="ht-orb o3" />
      <div className="ht-grain" />

      <div className="ht-wrap">
        <header className="ht-header">
          <div className="ht-eyebrow">
            <span className="ht-dot" />
            Philosophy
          </div>

          <h2 className="ht-title">
            How I<br />Think
          </h2>
        </header>

        <div className="ht-comparison">
          <div className="ht-column ht-left">
            <h3 className="ht-column-head ht-wrong">❌ Most Marketers Ask:</h3>
            <ul className="ht-list">
              <li className="ht-list-item">
                <span className="ht-bullet" />
                How do I get more views?
              </li>
              <li className="ht-list-item">
                <span className="ht-bullet" />
                How do I get more followers?
              </li>
              <li className="ht-list-item">
                <span className="ht-bullet" />
                What type of content should I post?
              </li>
              <li className="ht-list-item">
                <span className="ht-bullet" />
                How do I go viral?
              </li>
            </ul>
          </div>

          <div className="ht-column ht-right">
            <h3 className="ht-column-head ht-correct">✅ I Ask:</h3>
            <ul className="ht-list">
              <li className="ht-list-item">
                <span className="ht-bullet" />
                How does attention become a lead?
              </li>
              <li className="ht-list-item">
                <span className="ht-bullet" />
                How does a lead become revenue?
              </li>
              <li className="ht-list-item">
                <span className="ht-bullet" />
                Where exactly does the funnel break?
              </li>
              <li className="ht-list-item">
                <span className="ht-bullet" />
                How do we automate and scale this system?
              </li>
            </ul>
          </div>
        </div>

        <div className="ht-closing">
          I don&apos;t run campaigns. I design growth infrastructure.
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
  .ht-root {
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;
    font-family: var(--fb);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* Light mode */
  .ht-root {
    --bg: #f8f9fb;
    --surface: #ffffff;
    --border: rgba(0, 0, 0, 0.08);
    --text: #0d1017;
    --muted: rgba(13, 16, 23, 0.68);
    --faint: rgba(13, 16, 23, 0.15);
    background: var(--bg);
    color: var(--text);
  }

  /* Dark mode */
  :root.dark .ht-root {
    --bg: #07090e;
    --surface: #0d1017;
    --border: rgba(255, 255, 255, 0.07);
    --text: #edf0f7;
    --muted: rgba(237, 240, 247, 0.72);
    --faint: rgba(237, 240, 247, 0.15);
    background: var(--bg);
    color: var(--text);
  }

  /* grain */
  .ht-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: .35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  :root.dark .ht-grain {
    opacity: .35;
  }

  /* orbs */
  .ht-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }

  .ht-root .o1 {
    width: 600px;
    height: 600px;
    background: rgba(255, 32, 32, 0.06);
    top: -160px;
    right: -160px;
    animation: ht-drift 22s ease-in-out infinite alternate;
  }

  .ht-root .o2 {
    width: 500px;
    height: 500px;
    background: rgba(10, 102, 194, 0.06);
    bottom: -100px;
    left: -100px;
    animation: ht-drift 28s ease-in-out infinite alternate-reverse;
  }

  .ht-root .o3 {
    width: 320px;
    height: 320px;
    background: rgba(225, 48, 108, 0.04);
    top: 46%;
    left: 44%;
    animation: ht-drift 18s ease-in-out infinite alternate;
  }

  @keyframes ht-drift {
    from { transform: translate(0, 0) scale(1); }
    to { transform: translate(35px, 25px) scale(1.06); }
  }

  /* layout */
  .ht-wrap {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 22px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    text-align: center;
  }

  /* header */
  .ht-header {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .is-visible .ht-header {
    opacity: 1;
    transform: none;
  }

  .ht-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 26px;
  }

  :root.dark .ht-root .ht-eyebrow {
    background: rgba(255,255,255,.04);
  }

  .ht-dot {
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    animation: ht-blink 2.4s ease infinite;
    display: inline-block;
  }

  @keyframes ht-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.2; }
  }

  .ht-title {
    font-family: var(--fd);
    font-size: clamp(2.8rem, 7vw, 5.2rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 0.93;
    margin: 0;
  }

  /* comparison */
  .ht-comparison {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    max-width: 900px;
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease;
  }

  .is-visible .ht-comparison {
    opacity: 1;
    transform: none;
  }

  .ht-comparison::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 80% 0%,
      rgba(255, 32, 32, 0.07) 0%,
      transparent 68%
    );
    opacity: 0;
    transition: opacity 0.35s;
    pointer-events: none;
    border-radius: var(--r);
  }

  .ht-comparison:hover::before {
    opacity: 1;
  }

  .ht-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    z-index: 1;
  }

  .ht-column-head {
    font-family: var(--fd);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0 0 12px;
    line-height: 1.4;
  }

  .ht-wrong {
    color: var(--muted);
  }

  .ht-correct {
    color: #4ade80;
  }

  .ht-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .ht-list-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
    color: var(--muted);
    line-height: 1.6;
    text-align: left;
  }

  .ht-bullet {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-top: 6px;
    flex-shrink: 0;
    opacity: 0.6;
    background: currentColor;
  }

  .ht-correct .ht-list-item {
    color: var(--text);
  }

  /* closing quote */
  .ht-closing {
    font-family: var(--fd);
    font-size: clamp(1.4rem, 3.5vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text);
    text-align: center;
    max-width: 680px;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease;
  }

  .is-visible .ht-closing {
    opacity: 1;
    transform: none;
  }

  /* responsive */
  @media (max-width: 900px) {
    .ht-wrap {
      padding: 64px 20px 80px;
      gap: 48px;
    }

    .ht-comparison {
      grid-template-columns: 1fr;
      gap: 32px;
      padding: 32px;
    }
  }

  @media (max-width: 640px) {
    .ht-wrap {
      padding: 52px 16px 64px;
      gap: 36px;
    }

    .ht-comparison {
      grid-template-columns: 1fr;
      gap: 28px;
      padding: 24px 18px;
    }

    .ht-column-head {
      font-size: 12px;
      margin-bottom: 10px;
    }

    .ht-list-item {
      font-size: 13px;
    }

    .ht-closing {
      font-size: clamp(1.1rem, 8vw, 1.6rem);
    }
  }
`
