'use client'

import { useEffect, useRef } from 'react'

const caseStudies = [
  {
    number: '01',
    company: 'Solace Healing Center',
    accent: '#E1306C',
    tags: ['Meta Ads', 'Instagram Strategy', 'Email Marketing', 'Funnel Design', 'Content Strategy', 'Canva'],
    context: 'A wellness brand with weak digital lead flow and inconsistent online visibility.',
    objective: 'Turn online attention into booked consultations.',
    whatWasBuilt: [
      { layer: 'Funnel Layer', desc: 'Meta Ads campaign (Cold → Warm → Conversion targeting)' },
      { layer: 'Content Engine', desc: 'Instagram Reels strategy for organic audience growth' },
      { layer: 'Conversion Path', desc: 'Landing Page + WhatsApp conversion flow' },
      { layer: 'Nurturing System', desc: 'Email sequence (Mailchimp) for lead follow-up' },
    ],
    results: [
      'Structured lead generation pipeline built from scratch',
      'Improved conversion efficiency through end-to-end funnel design',
      'Increased inbound inquiries via content and ads working in synergy',
      'Reduced cost per lead through better audience targeting on Meta',
      'Consistent brand visibility established across platforms',
    ],
  },
  {
    number: '02',
    company: 'TechiHire (Job Platform)',
    accent: '#0A66C2',
    link: 'https://techihire.com/',
    tags: ['LinkedIn Outreach', 'SEO', 'Email Marketing', 'Content Strategy', 'Hook Copywriting'],
    context: 'An early-stage hiring platform needing job engagement and platform visibility.',
    objective: 'Build a scalable candidate acquisition funnel.',
    whatWasBuilt: [
      { layer: 'Distribution', desc: 'Content-driven job promotion across social channels' },
      { layer: 'Acquisition', desc: 'LinkedIn outreach funnel for candidate targeting' },
      { layer: 'SEO', desc: 'Search-optimized job post structuring for discoverability' },
      { layer: 'Retention', desc: 'Email-based job alert distribution system' },
      { layer: 'Engagement', desc: 'Hook-based content to improve listing click-through rates' },
    ],
    results: [
      'Increased job discoverability through multi-channel distribution',
      'Improved platform engagement via content-led traffic growth',
      'Built an early-stage growth distribution system scalable for future campaigns',
      'Established email list as a repeatable traffic source',
    ],
  },
  {
    number: '03',
    company: 'Personal Brand Growth System',
    accent: '#FF2020',
    tags: ['Instagram Growth', 'YouTube Strategy', 'Content Repurposing', 'Hook Engineering'],
    context: 'Turn content output into audience, authority, and inbound leads.',
    objective: 'Build a reusable content growth system from scratch.',
    whatWasBuilt: [
      { layer: 'Hook System', desc: 'Hook-based short-form content for maximum scroll-stop performance' },
      { layer: 'Repurposing Engine', desc: 'Long-form → Shorts → Carousels → Posts transformation' },
      { layer: 'Platform Strategy', desc: 'Platform-specific growth strategy for Instagram and YouTube' },
      { layer: 'Engagement Framework', desc: 'Convert viewers into followers optimization' },
    ],
    results: [
      '📈 Instagram: 9,700+ followers built through systematic content strategy',
      '▶️ YouTube: 1,500+ subscribers with high-retention content',
      '🌍 Global Reach: Audience from UK, Australia, Canada, India',
      '🔁 Repeatable: Built a reusable system, not one-off viral content',
    ],
  },
]

export default function CaseStudies() {
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
    <section className="cs-root" ref={sectionRef} id="case-studies">
      <div className="cs-orb o1" />
      <div className="cs-orb o2" />
      <div className="cs-orb o3" />
      <div className="cs-grain" />

      <div className="cs-wrap">
        <header className="cs-header">
          <div className="cs-eyebrow">
            <span className="cs-dot" />
            Case Studies
          </div>

          <h2 className="cs-title">
            Proof of<br />Thinking
          </h2>
        </header>

        <div className="cs-grid">
          {caseStudies.map((study, i) => (
            <div
              key={study.number}
              className="cs-card"
              style={
                {
                  '--ac': study.accent,
                  animationDelay: `${i * 0.1}s`,
                } as React.CSSProperties
              }
            >
              <div className="cs-ring" />
              <div className="cs-ring r2" />
              <span className="cs-num">{study.number}</span>

              <div className="cs-card-content">
                <div className="cs-left">
                  <h3 className="cs-company">{study.company}</h3>
                  {study.link && (
                    <a href={study.link} target="_blank" rel="noopener noreferrer" className="cs-link">
                      Visit Site →
                    </a>
                  )}

                  <p className="cs-context">{study.context}</p>

                  <div className="cs-objective">
                    <h4 className="cs-objective-label">Objective</h4>
                    <p className="cs-objective-text">{study.objective}</p>
                  </div>

                  <div className="cs-built">
                    <h4 className="cs-built-label">What Was Built</h4>
                    <div className="cs-built-grid">
                      {study.whatWasBuilt.map((item, j) => (
                        <div key={j} className="cs-built-item">
                          <span className="cs-built-layer">{item.layer}:</span>
                          <span className="cs-built-desc">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cs-right">
                  <div className="cs-tags">
                    {study.tags.map((tag) => (
                      <span key={tag} className="cs-tag" style={{ '--ac': study.accent } as React.CSSProperties}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="cs-results">
                    <h4 className="cs-results-label">Results</h4>
                    <ul className="cs-results-list">
                      {study.results.map((result, j) => (
                        <li key={j} className="cs-result-item">
                          <span className="cs-result-bullet" style={{ background: study.accent }} />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{css}</style>
    </section>
  )
}

const css = `
  .cs-root {
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;
    font-family: var(--fb);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* Light mode */
  .cs-root {
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
  :root.dark .cs-root {
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
  .cs-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: .35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  :root.dark .cs-grain {
    opacity: .35;
  }

  /* orbs */
  .cs-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }

  .cs-root .o1 {
    width: 600px;
    height: 600px;
    background: rgba(255, 32, 32, 0.06);
    top: -160px;
    right: -160px;
    animation: cs-drift 22s ease-in-out infinite alternate;
  }

  .cs-root .o2 {
    width: 500px;
    height: 500px;
    background: rgba(10, 102, 194, 0.06);
    bottom: -100px;
    left: -100px;
    animation: cs-drift 28s ease-in-out infinite alternate-reverse;
  }

  .cs-root .o3 {
    width: 320px;
    height: 320px;
    background: rgba(225, 48, 108, 0.04);
    top: 46%;
    left: 44%;
    animation: cs-drift 18s ease-in-out infinite alternate;
  }

  @keyframes cs-drift {
    from { transform: translate(0, 0) scale(1); }
    to { transform: translate(35px, 25px) scale(1.06); }
  }

  /* layout */
  .cs-wrap {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 22px 100px;
    display: flex;
    flex-direction: column;
    gap: 52px;
  }

  /* header */
  .cs-header {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .is-visible .cs-header {
    opacity: 1;
    transform: none;
  }

  .cs-eyebrow {
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

  :root.dark .cs-root .cs-eyebrow {
    background: rgba(255,255,255,.04);
  }

  .cs-dot {
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    animation: cs-blink 2.4s ease infinite;
    display: inline-block;
  }

  @keyframes cs-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.2; }
  }

  .cs-title {
    font-family: var(--fd);
    font-size: clamp(2.8rem, 7vw, 5.2rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 0.93;
    margin-bottom: 0;
  }

  /* grid */
  .cs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease;
  }

  .is-visible .cs-grid {
    opacity: 1;
    transform: none;
  }

  /* card */
  .cs-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 36px 32px;
    position: relative;
    overflow: hidden;
    transition: transform .32s cubic-bezier(.34,1.56,.64,1), border-color .28s, box-shadow .28s;
    animation: cs-fadeUp .7s ease both;
  }

  .cs-card::before {
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

  .cs-card:hover {
    transform: translateY(-7px);
    border-color: var(--ac);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.10);
  }

  :root.dark .cs-root .cs-card:hover {
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.45);
  }

  .cs-card:hover::before {
    opacity: 1;
  }

  @keyframes cs-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* rings */
  .cs-ring {
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

  .cs-ring.r2 {
    bottom: -88px;
    right: -88px;
    width: 230px;
    height: 230px;
    opacity: 0.05;
  }

  .cs-num {
    position: absolute;
    top: 20px;
    right: 28px;
    font-family: var(--fd);
    font-size: 6rem;
    font-weight: 800;
    color: var(--ac);
    opacity: 0.06;
    line-height: 1;
    pointer-events: none;
  }

  /* content layout */
  .cs-card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    position: relative;
    z-index: 1;
  }

  .cs-left, .cs-right {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .cs-company {
    font-family: var(--fd);
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--text);
  }

  .cs-link {
    font-size: 13px;
    color: var(--ac);
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s;
  }

  .cs-link:hover {
    opacity: 0.7;
  }

  .cs-context {
    font-size: 14px;
    color: var(--muted);
    line-height: 1.6;
    margin: 0;
  }

  .cs-objective, .cs-built, .cs-results {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .cs-objective-label, .cs-built-label, .cs-results-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ac);
    margin: 0;
  }

  .cs-objective-text {
    font-size: 15px;
    color: var(--text);
    font-weight: 500;
    line-height: 1.6;
    margin: 0;
  }

  .cs-built-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .cs-built-item {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.55;
  }

  .cs-built-layer {
    color: var(--text);
    font-weight: 500;
  }

  .cs-built-desc {
    color: var(--muted);
  }

  /* tags */
  .cs-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .cs-tag {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    padding: 5px 12px;
    border-radius: 100px;
    transition: border-color .2s, color .2s;
  }

  .cs-tag:hover {
    border-color: var(--ac);
    color: var(--ac);
  }

  /* results */
  .cs-results-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .cs-result-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: var(--muted);
    line-height: 1.6;
  }

  .cs-result-bullet {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-top: 6px;
    flex-shrink: 0;
    opacity: 0.8;
  }

  /* responsive */
  @media (max-width: 900px) {
    .cs-card-content {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  @media (max-width: 640px) {
    .cs-wrap {
      padding: 64px 16px 80px;
      gap: 40px;
    }

    .cs-card {
      padding: 24px 18px;
    }

    .cs-company {
      font-size: 1.4rem;
    }

    .cs-num {
      font-size: 3rem;
      top: 12px;
      right: 16px;
    }

    .cs-card-content {
      grid-template-columns: 1fr;
    }

    .cs-tags {
      gap: 6px;
    }

    .cs-tag {
      font-size: 10px;
      padding: 4px 10px;
    }
  }
`
