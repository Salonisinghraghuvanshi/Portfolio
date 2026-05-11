'use client'

import React, { useEffect, useRef } from 'react'

const steps = [
  { label: 'DATA', accent: '#0A66C2' },
  { label: 'STRATEGY', accent: '#E1306C' },
  { label: 'CONTENT', accent: '#FF2020' },
  { label: 'GROWTH', accent: '#4ade80' },
]

export default function MyApproach() {
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
    <section id="marketing" className="ap-root" ref={sectionRef}>
      <div className="ap-orb o1" />
      <div className="ap-orb o2" />
      <div className="ap-orb o3" />
      <div className="ap-grain" />

      <div className="ap-wrap">
        {/* EYEBROW */}
        <div className="ap-eyebrow">
          <span className="ap-dot" />
          Philosophy
        </div>

        {/* OPENING QUOTE */}
        <div className="ap-quote">
          <p className="ap-quote-line1">
            Most marketers list skills. Top 1% operators sell —
          </p>
          <p className="ap-quote-line2">
            outcomes, systems, and proof of thinking.
          </p>
        </div>

        {/* TITLE */}
        <div className="ap-title-block">
          <h2 className="ap-title">My Approach</h2>
          <p className="ap-sub">My approach is simple:</p>
        </div>

        {/* STEPS */}
        <div className="ap-steps">
          {steps.map((step, i) => (
            <div
              key={i}
              className="ap-step-wrap"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div
                className="ap-step"
                style={{ '--ac': step.accent } as React.CSSProperties}
              >
                <span className="ap-step-num">0{i + 1}</span>

                <div className="ap-ring" />
                <div className="ap-ring r2" />

                <span
                  className="ap-step-accent-dot"
                  style={{ background: step.accent }}
                />
                <span className="ap-step-label">{step.label}</span>

                <div className="ap-step-bar" />
              </div>

              {i < steps.length - 1 && (
                <div className="ap-connector">
                  <div
                    className="ap-connector-line"
                    style={{ background: step.accent }}
                  />
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{ color: step.accent, opacity: 0.6 }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CLOSING */}
        <div className="ap-closing">
          <p>
            I don&apos;t run campaigns. I design growth infrastructure — combining
            analytics with creativity to build systems that generate leads,
            sales, and predictable growth.
          </p>
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
  .ap-root {
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;
    font-family: var(--fb);
    min-height: auto;
    overflow: hidden;
    position: relative;
    isolation: isolate;
  }

  /* Light mode */
  .ap-root {
    --bg: #f8f9fb;
    --surface: rgba(255,255,255,0.82);
    --border: rgba(0,0,0,0.08);
    --text: #0d1017;
    --muted: rgba(13,16,23,0.62);
    --faint: rgba(13,16,23,0.15);
    background: var(--bg);
    color: var(--text);
    transition: background-color 300ms ease, color 300ms ease;
  }

  /* Dark mode */
  :root.dark .ap-root {
    --bg: #07090e;
    --surface: rgba(13,16,23,0.78);
    --border: rgba(255,255,255,0.08);
    --text: #edf0f7;
    --muted: rgba(237,240,247,0.62);
    --faint: rgba(237,240,247,0.15);
    background: var(--bg);
    color: var(--text);
  }

  /* grain */
  .ap-grain {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  /* orbs */
  .ap-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(110px);
    pointer-events: none;
    z-index: 0;
  }

  .ap-root .o1 {
    width: 600px;
    height: 600px;
    background: rgba(255, 32, 32, 0.055);
    top: -150px;
    right: -150px;
    animation: ap-drift 22s ease-in-out infinite alternate;
  }

  .ap-root .o2 {
    width: 500px;
    height: 500px;
    background: rgba(10, 102, 194, 0.065);
    bottom: -100px;
    left: -100px;
    animation: ap-drift 28s ease-in-out infinite alternate-reverse;
  }

  .ap-root .o3 {
    width: 320px;
    height: 320px;
    background: rgba(225, 48, 108, 0.04);
    top: 45%;
    left: 42%;
    animation: ap-drift 18s ease-in-out infinite alternate;
  }

  @keyframes ap-drift {
    from { transform: translate(0, 0) scale(1); }
    to { transform: translate(35px, 25px) scale(1.06); }
  }

  /* layout */
  .ap-wrap {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    padding: 100px 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 52px;
    text-align: center;
  }

  /* eyebrow */
  .ap-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    background: rgba(255,255,255,0.5);
    border: 1px solid var(--border);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 6px 16px;
    border-radius: 100px;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  :root.dark .ap-eyebrow {
    background: rgba(255,255,255,0.03);
  }

  .is-visible .ap-eyebrow {
    opacity: 1;
    transform: none;
  }

  .ap-dot {
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    animation: ap-blink 2.4s ease infinite;
    display: inline-block;
  }

  @keyframes ap-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.2; }
  }

  /* quote */
  .ap-quote {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease;
    max-width: 640px;
  }

  .is-visible .ap-quote {
    opacity: 1;
    transform: none;
  }

  .ap-quote-line1 {
    font-size: 16px;
    color: var(--muted);
    font-weight: 400;
    line-height: 1.7;
    margin: 0 0 6px;
  }

  .ap-quote-line2 {
    font-size: 18px;
    color: var(--text);
    font-weight: 500;
    line-height: 1.7;
    margin: 0;
  }

  /* title */
  .ap-title-block {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s 0.15s ease, transform 0.8s 0.15s ease;
  }

  .is-visible .ap-title-block {
    opacity: 1;
    transform: none;
  }

  .ap-title {
    font-family: var(--fd);
    font-size: clamp(2.8rem, 8vw, 5.5rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 0.95;
    margin: 0 0 16px;
    color: var(--text);
  }

  .ap-sub {
    font-size: 14px;
    color: var(--muted);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;
  }

  /* steps */
  .ap-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0;
    opacity: 0;
    transform: translateY(24px) scale(0.97);
    transition: opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease;
    width: 100%;
  }

  .is-visible .ap-steps {
    opacity: 1;
    transform: none;
  }

  .ap-step-wrap {
    display: flex;
    align-items: center;
    animation: ap-fadeUp 0.7s ease both;
  }

  .ap-step {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 28px 24px 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 200px;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.05);
    transition:
      transform 0.32s cubic-bezier(.34,1.56,.64,1),
      border-color 0.28s,
      box-shadow 0.28s;
    cursor: default;
  }

  .ap-step::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 50% 0%,
      color-mix(in srgb, var(--ac) 12%, transparent) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.35s;
    pointer-events: none;
    border-radius: inherit;
  }

  .ap-step:hover {
    transform: translateY(-8px);
    border-color: var(--ac);
    box-shadow: 0 24px 60px rgba(0,0,0,0.12);
  }

  .ap-step:hover::before {
    opacity: 1;
  }

  @keyframes ap-fadeUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* rings */
  .ap-ring {
    position: absolute;
    bottom: -56px;
    right: -56px;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 1px solid var(--ac, rgba(255,255,255,0.08));
    opacity: 0.09;
    pointer-events: none;
  }

  .ap-ring.r2 {
    bottom: -88px;
    right: -88px;
    width: 230px;
    height: 230px;
    opacity: 0.04;
  }

  .ap-step-num {
    position: absolute;
    top: 10px;
    right: 14px;
    font-family: var(--fd);
    font-size: 3rem;
    font-weight: 800;
    color: var(--ac);
    opacity: 0.08;
    line-height: 1;
    pointer-events: none;
    letter-spacing: -0.05em;
  }

  .ap-step-accent-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 14px;
  }

  .ap-step-label {
    font-family: var(--fd);
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: var(--text);
    position: relative;
    z-index: 1;
  }

  .ap-step-bar {
    width: 28px;
    height: 2px;
    border-radius: 2px;
    background: var(--ac);
    margin-top: 12px;
    transition: width 0.3s ease;
  }

  .ap-step:hover .ap-step-bar {
    width: 48px;
  }

  /* connector */
  .ap-connector {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 6px;
    flex-shrink: 0;
  }

  .ap-connector-line {
    width: 24px;
    height: 1px;
    opacity: 0.3;
  }

  /* closing */
  .ap-closing {
    border-top: 1px solid var(--border);
    padding-top: 40px;
    max-width: 620px;
    opacity: 0;
    transition: opacity 0.8s 0.3s ease;
  }

  .is-visible .ap-closing {
    opacity: 1;
  }

  .ap-closing p {
    font-size: 15px;
    color: var(--muted);
    font-weight: 400;
    line-height: 1.7;
    margin: 0;
  }

  /* responsive */
  @media (max-width: 980px) {
    .ap-wrap {
      padding: 80px 20px;
      gap: 44px;
    }

    .ap-steps {
      gap: 12px;
    }

    .ap-connector {
      display: none;
    }

    .ap-step {
      width: 160px;
      padding: 22px 18px 18px;
    }

    .ap-step-label {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 640px) {
    .ap-wrap {
      padding: 64px 16px;
      gap: 36px;
    }

    .ap-title {
      font-size: clamp(2.2rem, 12vw, 3.6rem);
      line-height: 1;
    }

    .ap-quote-line1 {
      font-size: 14px;
    }

    .ap-quote-line2 {
      font-size: 16px;
    }

    .ap-steps {
      flex-direction: column;
      gap: 10px;
    }

    .ap-step {
      width: 100%;
      max-width: 320px;
    }

    .ap-closing p {
      font-size: 14px;
    }
  }
`
