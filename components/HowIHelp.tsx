'use client'

import { useEffect, useRef, type CSSProperties } from 'react'

const services = [
  {
    number: '01',
    title: 'Creating High-Retention Video Content',
    accent: '#FF2020',
    description:
      'I edit and structure videos for platforms like Instagram Reels, YouTube Shorts, and long-form content so that viewers stay engaged and watch longer.',
  },
  {
    number: '02',
    title: 'Social Media Growth Strategy',
    accent: '#E1306C',
    description:
      'I design content strategies that help brands grow their audience organically by focusing on storytelling, consistency, and audience psychology.',
  },
  {
    number: '03',
    title: 'Data-Driven Decision Making',
    accent: '#0A66C2',
    description:
      'Using analytics and performance metrics, I analyze which content works best and optimize future strategies for better results.',
  },
  {
    number: '04',
    title: 'Content Repurposing',
    accent: '#FF2020',
    description:
      'I convert long content into multiple short-form pieces to increase reach across platforms.',
  },
  {
    number: '05',
    title: 'Marketing and Brand Visibility',
    accent: '#E1306C',
    description:
      'I help businesses improve visibility through social media campaigns, competitor analysis, and strategic content planning.',
  },
]

export default function HowIHelp() {
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
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hiw-root" ref={sectionRef}>
      {/* Subtle ambient orbs */}
      <div className="hiw-orb o1" />
      <div className="hiw-orb o2" />
      <div className="hiw-orb o3" />

      {/* Grain overlay */}
      <div className="hiw-grain" />

      <div className="hiw-wrap">
        {/* ── HEADER ── */}
        <header className="hiw-header">
          <div className="hiw-eyebrow">
            <span className="hiw-dot" />
            Services
          </div>

          <h2 className="hiw-title">
            How I Help
            <br />
            People
          </h2>

          <p className="hiw-sub">
            I help individuals, startups, and businesses grow their digital
            presence and improve their content performance.
          </p>
          <p className="hiw-sub hiw-sub--em">
            My main goal: turn ideas into impactful content and measurable growth.
          </p>
        </header>

        {/* ── CARDS GRID ── */}
        <div className="hiw-grid">
          {services.map((s, i) => (
            <div
              key={s.number}
              className="hiw-card"
              style={
                {
                  '--ac': s.accent,
                  animationDelay: `${i * 0.1}s`,
                } as CSSProperties
              }
            >
              {/* decorative rings */}
              <div className="hiw-ring" />
              <div className="hiw-ring r2" />

              {/* accent dot */}
              <span className="hiw-num-dot" style={{ background: s.accent }} />

              <div className="hiw-num">{s.number}</div>
              <div className="hiw-card-divider" />
              <h3 className="hiw-card-title">{s.title}</h3>
              <p className="hiw-card-desc">{s.description}</p>
            </div>
          ))}
        </div>

        {/* ── APPROACH FOOTER ── */}
        <div className="hiw-approach">
          <p className="hiw-approach-label">My approach is always a mix of</p>
          <h3 className="hiw-approach-headline">
            <span style={{ color: '#FF2020' }}>Creativity</span>
            <span className="hiw-plus"> + </span>
            <span style={{ color: '#0A66C2' }}>Analytics</span>
          </h3>
          <p className="hiw-approach-sub">
            Which helps businesses grow faster and more effectively.
          </p>
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
  .hiw-root {
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;
    font-family: var(--fb);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    transition: background-color 300ms ease, color 300ms ease;
  }

  /* Light mode (default) */
  .hiw-root {
    --bg: #f8f9fb;
    --surface: #ffffff;
    --border: rgba(0, 0, 0, 0.08);
    --text: #0d1017;
    --muted: rgba(13, 16, 23, 0.68);
    --faint: rgba(13, 16, 23, 0.15);
    --soft-bg: rgba(13, 16, 23, 0.04);
    --ring: rgba(13, 16, 23, 0.08);
    --ring-2: rgba(13, 16, 23, 0.05);
    --shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    --shadow-hover: 0 28px 60px rgba(0, 0, 0, 0.10);
    --title-grad-1: #07090e;
    --title-grad-2: rgba(7, 9, 14, 0.45);
    background: var(--bg);
    color: var(--text);
  }

  /* Dark mode */
  :root.dark .hiw-root {
    --bg: #07090e;
    --surface: #0d1017;
    --border: rgba(255, 255, 255, 0.07);
    --text: #edf0f7;
    --muted: rgba(237, 240, 247, 0.72);
    --faint: rgba(237, 240, 247, 0.15);
    --soft-bg: rgba(255, 255, 255, 0.04);
    --ring: rgba(255, 255, 255, 0.08);
    --ring-2: rgba(255, 255, 255, 0.04);
    --shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    --shadow-hover: 0 28px 60px rgba(0, 0, 0, 0.45);
    --title-grad-1: #ffffff;
    --title-grad-2: rgba(255, 255, 255, 0.38);
    background: var(--bg);
    color: var(--text);
  }

  /* grain */
  .hiw-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  :root.dark .hiw-grain {
    opacity: 0.35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  /* orbs */
  .hiw-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }

  /* Light mode orbs */
  .hiw-root .o1 {
    width: 600px;
    height: 600px;
    background: rgba(255, 32, 32, 0.06);
    top: -160px;
    right: -160px;
    animation: hiw-drift 22s ease-in-out infinite alternate;
  }

  .hiw-root .o2 {
    width: 500px;
    height: 500px;
    background: rgba(10, 102, 194, 0.06);
    bottom: -100px;
    left: -100px;
    animation: hiw-drift 28s ease-in-out infinite alternate-reverse;
  }

  .hiw-root .o3 {
    width: 320px;
    height: 320px;
    background: rgba(225, 48, 108, 0.04);
    top: 46%;
    left: 44%;
    animation: hiw-drift 18s ease-in-out infinite alternate;
  }

  /* Dark mode orbs */
  :root.dark .hiw-root .o1 { background: rgba(255, 32, 32, 0.06); }
  :root.dark .hiw-root .o2 { background: rgba(10, 102, 194, 0.06); }
  :root.dark .hiw-root .o3 { background: rgba(225, 48, 108, 0.04); }

  @keyframes hiw-drift {
    from { transform: translate(0, 0) scale(1); }
    to { transform: translate(35px, 25px) scale(1.06); }
  }

  /* layout */
  .hiw-wrap {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 22px 100px;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  /* ── header ── */
  .hiw-header {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .is-visible .hiw-header {
    opacity: 1;
    transform: none;
  }

  .hiw-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--soft-bg);
    border: 1px solid var(--border);
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 26px;
  }

  .hiw-dot {
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    animation: hiw-blink 2.4s ease infinite;
    display: inline-block;
  }

  @keyframes hiw-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.2; }
  }

  .hiw-title {
    font-family: var(--fd);
    font-size: clamp(2.8rem, 7vw, 5.2rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 0.93;
    margin-bottom: 22px;
    background: linear-gradient(140deg, var(--title-grad-1) 35%, var(--title-grad-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hiw-sub {
    font-size: 15px;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.7;
    max-width: 520px;
    margin: 0 0 8px;
  }

  .hiw-sub--em {
    color: var(--text);
    font-weight: 400;
  }

  /* ── grid ── */
  .hiw-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease;
  }

  @media (min-width: 640px) {
    .hiw-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .hiw-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .is-visible .hiw-grid {
    opacity: 1;
    transform: none;
  }

  /* card */
  .hiw-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 26px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: transform 0.32s cubic-bezier(.34,1.56,.64,1), border-color 0.28s, box-shadow 0.28s;
    animation: hiw-fadeUp 0.7s ease both;
  }

  .hiw-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 80% 0%,
      color-mix(in srgb, var(--ac) 7%, transparent) 0%,
      transparent 68%
    );
    opacity: 0;
    transition: opacity 0.35s;
    pointer-events: none;
    border-radius: inherit;
  }

  .hiw-card:hover {
    transform: translateY(-7px);
    border-color: var(--ac);
    box-shadow: var(--shadow-hover);
  }

  .hiw-card:hover::before {
    opacity: 1;
  }

  @keyframes hiw-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* rings inside card */
  .hiw-ring {
    position: absolute;
    bottom: -56px;
    right: -56px;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 1px solid var(--ac, rgba(0,0,0,.08));
    opacity: 0.12;
    pointer-events: none;
  }

  .hiw-ring.r2 {
    bottom: -88px;
    right: -88px;
    width: 230px;
    height: 230px;
    opacity: 0.05;
  }

  .hiw-num-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 12px;
    flex-shrink: 0;
  }

  .hiw-num {
    font-family: var(--fd);
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--ac);
    line-height: 1;
    margin-bottom: 0;
  }

  .hiw-card-divider {
    height: 1px;
    background: var(--border);
    margin: 16px 0;
  }

  .hiw-card-title {
    font-family: var(--fd);
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
    line-height: 1.3;
    color: var(--text);
  }

  .hiw-card-desc {
    font-size: 13.5px;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.65;
    flex: 1;
    margin: 0;
  }

  /* ── approach ── */
  .hiw-approach {
    border-top: 1px solid var(--border);
    padding-top: 48px;
    opacity: 0;
    transition: opacity 0.8s 0.2s ease;
  }

  .is-visible .hiw-approach {
    opacity: 1;
  }

  .hiw-approach-label {
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 500;
    margin-bottom: 14px;
  }

  .hiw-approach-headline {
    font-family: var(--fd);
    font-size: clamp(2rem, 5vw, 3.8rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    margin: 0 0 14px;
    line-height: 1;
    color: var(--text);
  }

  .hiw-plus {
    color: var(--muted);
    margin: 0 8px;
  }

  .hiw-approach-sub {
    font-size: 15px;
    color: var(--muted);
    font-weight: 300;
    max-width: 380px;
    line-height: 1.65;
    margin: 0;
  }

  /* ── responsive ── */
  @media (max-width: 860px) {
    .hiw-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    .hiw-grid {
      grid-template-columns: 1fr;
    }
  }
`