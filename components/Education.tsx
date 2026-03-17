'use client'

import { useEffect, useRef } from 'react'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Himachal Pradesh Technical University (HPTU)',
    period: '2022 – 2024',
    cgpa: '7.14',
    accent: '#FF2020',
  },
  {
    degree: 'Bachelor of Science (B.Sc) in Mathematics',
    school: 'Himachal Pradesh University (HPU)',
    period: '2019 – 2022',
    cgpa: '8.18',
    accent: '#0A66C2',
  },
]

const mentorship = [
  { label: 'Python for data analysis', accent: '#FF2020' },
  { label: 'Machine learning fundamentals', accent: '#E1306C' },
  { label: 'Data visualization', accent: '#0A66C2' },
  { label: 'Analytical problem solving', accent: '#FF2020' },
]

export default function Education() {
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
    <>
      <section className="edu-root" ref={sectionRef}>
        {/* ambient orbs */}
        <div className="edu-orb o1" />
        <div className="edu-orb o2" />
        <div className="edu-orb o3" />

        {/* grain overlay */}
        <div className="edu-grain" />

        <div className="edu-wrap">
          {/* ── HEADER ── */}
          <header className="edu-header">
            <div className="edu-eyebrow">
              <span className="edu-dot" />
              Background
            </div>

            <h2 className="edu-title">Education</h2>

            <p className="edu-sub">
              A strong academic foundation in mathematics, technology, and data
              analysis — fuelling analytical and strategic thinking.
            </p>
          </header>

          {/* ── DEGREE CARDS ── */}
          <div className="edu-grid">
            {education.map((edu, i) => (
              <div
                key={i}
                className="edu-card"
                style={
                  {
                    '--ac': edu.accent,
                    animationDelay: `${i * 0.12}s`,
                  } as React.CSSProperties
                }
              >
                <div className="edu-ring" />
                <div className="edu-ring r2" />

                <span
                  className="edu-accent-dot"
                  style={{ background: edu.accent }}
                />

                <div className="edu-cgpa">{edu.cgpa}</div>
                <div className="edu-cgpa-label">CGPA</div>

                <div className="edu-card-divider" />

                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>

                <div className="edu-chips">
                  <span className="edu-chip">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── MENTORSHIP ── */}
          <div className="edu-mentorship">
            <div className="edu-section-label">
              <span className="edu-dot" />
              Mentorship
            </div>

            <h3 className="edu-mentor-title">
              Data Science Mentorship Program
              <span className="edu-mentor-year"> 2024</span>
            </h3>

            <p className="edu-mentor-sub">Topics covered:</p>

            <div className="edu-mentor-grid">
              {mentorship.map((item, i) => (
                <div
                  key={i}
                  className="edu-mentor-card"
                  style={
                    {
                      '--ac': item.accent,
                      animationDelay: `${0.08 + i * 0.1}s`,
                    } as React.CSSProperties
                  }
                >
                  <div className="edu-ring" />
                  <span
                    className="edu-accent-dot"
                    style={{ background: item.accent }}
                  />
                  <p className="edu-mentor-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SUMMARY ── */}
          <div className="edu-summary">
            <p className="edu-summary-label">Why it matters</p>
            <h3 className="edu-summary-headline">
              <span style={{ color: '#FF2020' }}>Logic</span>
              <span className="edu-plus"> + </span>
              <span style={{ color: '#0A66C2' }}>Creativity</span>
            </h3>
            <p className="edu-summary-text">
              This combination of technical education and creative skills allows
              me to approach digital marketing and content creation in a uniquely
              analytical way.
            </p>
          </div>
        </div>

        <style>{css}</style>
      </section>
    </>
  )
}

const css = `
  .edu-root {
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;
    font-family: var(--fb);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* Light mode (default) */
  .edu-root {
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
  :root.dark .edu-root {
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
  .edu-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: .35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  :root.dark .edu-grain {
    opacity: .35;
  }

  /* orbs */
  .edu-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }

  .edu-root .o1 {
    width: 600px;
    height: 600px;
    background: rgba(255,32,32,.06);
    top: -160px;
    right: -160px;
    animation: edu-drift 22s ease-in-out infinite alternate;
  }

  .edu-root .o2 {
    width: 500px;
    height: 500px;
    background: rgba(10,102,194,.06);
    bottom: -100px;
    left: -100px;
    animation: edu-drift 28s ease-in-out infinite alternate-reverse;
  }

  .edu-root .o3 {
    width: 320px;
    height: 320px;
    background: rgba(225,48,108,.04);
    top: 46%;
    left: 44%;
    animation: edu-drift 18s ease-in-out infinite alternate;
  }

  @keyframes edu-drift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(35px,25px) scale(1.06); }
  }

  /* layout */
  .edu-wrap {
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
  .edu-header {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity .8s ease, transform .8s ease;
  }

  .is-visible .edu-header {
    opacity: 1;
    transform: none;
  }

  .edu-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--muted);
    background: rgba(0,0,0,.04);
    border: 1px solid var(--border);
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 26px;
  }

  .edu-dot {
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    animation: edu-blink 2.4s ease infinite;
    display: inline-block;
  }

  @keyframes edu-blink {
    0%,100% { opacity: 1; }
    50%     { opacity: .2; }
  }

  .edu-title {
    font-family: var(--fd);
    font-size: clamp(2.8rem, 7vw, 5.2rem);
    font-weight: 800;
    letter-spacing: -.04em;
    line-height: .93;
    margin-bottom: 22px;
    background: linear-gradient(140deg, #07090e 35%, rgba(7,9,14,.45));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  :root.dark .edu-title {
    background: linear-gradient(140deg, #ffffff 35%, rgba(255,255,255,.38));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .edu-sub {
    font-size: 15px;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.7;
    max-width: 560px;
    margin: 0;
  }

  /* ── degree cards ── */
  .edu-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .8s .1s ease, transform .8s .1s ease;
  }

  @media (min-width: 700px) {
    .edu-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .is-visible .edu-grid {
    opacity: 1;
    transform: none;
  }

  .edu-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 28px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,.04);
    transition: transform .32s cubic-bezier(.34,1.56,.64,1), border-color .28s, box-shadow .28s;
    animation: edu-fadeUp .7s ease both;
  }

  .edu-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 80% 0%, color-mix(in srgb, var(--ac) 8%, transparent) 0%, transparent 68%);
    opacity: 0;
    transition: opacity .35s;
    pointer-events: none;
    border-radius: inherit;
  }

  .edu-card:hover {
    transform: translateY(-7px);
    border-color: var(--ac);
    box-shadow: 0 28px 60px rgba(0,0,0,.10);
  }

  .edu-card:hover::before {
    opacity: 1;
  }

  @keyframes edu-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .edu-ring {
    position: absolute;
    bottom: -56px;
    right: -56px;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 1px solid var(--ac, rgba(0,0,0,.08));
    opacity: .12;
    pointer-events: none;
  }

  .edu-ring.r2 {
    bottom: -88px;
    right: -88px;
    width: 230px;
    height: 230px;
    opacity: .05;
  }

  .edu-accent-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 14px;
    flex-shrink: 0;
  }

  .edu-cgpa {
    font-family: var(--fd);
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -.05em;
    color: var(--ac);
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .edu-cgpa-label {
    font-size: 11px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 4px;
  }

  .edu-card-divider {
    height: 1px;
    background: var(--border);
    margin: 18px 0;
  }

  .edu-degree {
    font-family: var(--fd);
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -.02em;
    margin-bottom: 8px;
    line-height: 1.35;
  }

  .edu-school {
    font-size: 13px;
    color: var(--muted);
    margin: 0;
    line-height: 1.6;
  }

  .edu-chips {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  .edu-chip {
    font-size: 11px;
    color: var(--muted);
    background: rgba(0,0,0,.04);
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 100px;
  }

  /* ── mentorship ── */
  .edu-mentorship {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .8s .15s ease, transform .8s .15s ease;
  }

  .is-visible .edu-mentorship {
    opacity: 1;
    transform: none;
  }

  .edu-section-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--muted);
    background: rgba(0,0,0,.04);
    border: 1px solid var(--border);
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 24px;
  }

  .edu-mentor-title {
    font-family: var(--fd);
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 700;
    letter-spacing: -.03em;
    margin-bottom: 6px;
    line-height: 1.15;
  }

  .edu-mentor-year {
    font-family: var(--fd);
    font-size: .72em;
    color: var(--muted);
    font-weight: 400;
    margin-left: 4px;
  }

  .edu-mentor-sub {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 20px;
    font-weight: 300;
  }

  .edu-mentor-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media (min-width: 560px) {
    .edu-mentor-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .edu-mentor-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .edu-mentor-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,.04);
    transition: transform .32s cubic-bezier(.34,1.56,.64,1), border-color .28s, box-shadow .28s;
    animation: edu-fadeUp .7s ease both;
  }

  .edu-mentor-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 80% 0%, color-mix(in srgb, var(--ac) 8%, transparent) 0%, transparent 68%);
    opacity: 0;
    transition: opacity .35s;
    pointer-events: none;
    border-radius: inherit;
  }

  .edu-mentor-card:hover {
    transform: translateY(-5px);
    border-color: var(--ac);
    box-shadow: 0 20px 50px rgba(0,0,0,.10);
  }

  .edu-mentor-card:hover::before {
    opacity: 1;
  }

  .edu-mentor-label {
    font-size: 13px;
    color: var(--text);
    font-weight: 400;
    line-height: 1.55;
    margin: 8px 0 0;
  }

  /* ── summary ── */
  .edu-summary {
    border-top: 1px solid var(--border);
    padding-top: 48px;
    opacity: 0;
    transition: opacity .8s .2s ease;
  }

  .is-visible .edu-summary {
    opacity: 1;
  }

  .edu-summary-label {
    font-size: 11px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 500;
    margin-bottom: 14px;
  }

  .edu-summary-headline {
    font-family: var(--fd);
    font-size: clamp(2rem, 5vw, 3.8rem);
    font-weight: 800;
    letter-spacing: -.04em;
    margin: 0 0 14px;
    line-height: 1;
  }

  .edu-plus {
    color: var(--muted);
    margin: 0 8px;
  }

  .edu-summary-text {
    font-size: 15px;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.7;
    max-width: 600px;
    margin: 0;
  }

  /* ── responsive ── */
  @media (max-width: 560px) {
    .edu-wrap {
      padding: 70px 18px 90px;
      gap: 54px;
    }

    .edu-card,
    .edu-mentor-card {
      padding: 20px;
    }

    .edu-cgpa {
      font-size: 2.5rem;
    }
  }
`