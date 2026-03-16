'use client'

import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Video Editing & Content Creation',
    accent: '#FF2020',
    skills: [
      'Short-form video editing (Reels, Shorts)',
      'Long-form YouTube editing',
      'Podcast clip creation',
      'Storytelling and hook creation',
      'Content repurposing strategies',
      'Audience retention optimization',
    ],
  },
  {
    title: 'Social Media Strategy & Marketing',
    accent: '#E1306C',
    skills: [
      'Instagram growth strategies',
      'YouTube content optimization',
      'Content planning and scheduling',
      'Social media campaign strategy',
      'Audience engagement techniques',
      'Lead generation through content',
    ],
  },
  {
    title: 'Data Analysis & Analytics',
    accent: '#0A66C2',
    skills: [
      'Excel dashboards and reporting',
      'SQL for data management',
      'Data visualization and insights',
      'KPI tracking',
      'Market research',
      'Competitor analysis',
    ],
  },
]

const tools = [
  { label: 'Adobe Premiere Pro', accent: '#FF2020' },
  { label: 'CapCut',             accent: '#E1306C' },
  { label: 'DaVinci Resolve',    accent: '#0A66C2' },
  { label: 'Canva',              accent: '#FF2020' },
  { label: 'YouTube Studio',     accent: '#FF2020' },
  { label: 'Instagram Insights', accent: '#E1306C' },
  { label: 'Google Analytics',   accent: '#0A66C2' },
  { label: 'Meta Business Suite',accent: '#0A66C2' },
  { label: 'Excel',              accent: '#0A66C2' },
  { label: 'Notion',             accent: '#E1306C' },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('is-visible'); observer.disconnect() }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');`}</style>

      <section className="sk-root" ref={sectionRef}>
        <div className="sk-orb o1" />
        <div className="sk-orb o2" />
        <div className="sk-orb o3" />
        <div className="sk-grain" />

        <div className="sk-wrap">

          {/* ── HEADER ── */}
          <header className="sk-header">
            <div className="sk-eyebrow">
              <span className="sk-dot" />
              Expertise
            </div>
            <h2 className="sk-title">Skills &amp;<br />Knowledge</h2>
            <p className="sk-sub">
              Experience across video editing, marketing, analytics, and social
              media growth — applied together for maximum impact.
            </p>
          </header>

          {/* ── SKILL CATEGORY CARDS ── */}
          <div className="sk-grid">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className="sk-card"
                style={{ '--ac': cat.accent, animationDelay: `${i * 0.12}s` } as React.CSSProperties}
              >
                <div className="sk-ring" />
                <div className="sk-ring r2" />

                {/* icon area */}
                <div className="sk-card-top">
                  <span className="sk-accent-dot" style={{ background: cat.accent }} />
                </div>

                <h3 className="sk-cat-title">{cat.title}</h3>
                <div className="sk-card-divider" />

                <ul className="sk-list">
                  {cat.skills.map((skill, j) => (
                    <li key={j} className="sk-list-item">
                      <span className="sk-bullet" style={{ background: cat.accent }} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── TOOLS ── */}
          <div className="sk-tools-section">
            <div className="sk-section-label">
              <span className="sk-dot" />
              Tools &amp; Platforms
            </div>

            <h3 className="sk-tools-title">I regularly work with</h3>

            <div className="sk-tools-grid">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="sk-tool-chip"
                  style={{ '--ac': tool.accent, animationDelay: `${i * 0.07}s` } as React.CSSProperties}
                >
                  <span className="sk-tool-dot" style={{ background: tool.accent }} />
                  {tool.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── SUMMARY ── */}
          <div className="sk-summary">
            <p>
              These tools help me manage content production, analyze performance,
              and build efficient workflows.
            </p>
          </div>

        </div>

        <style>{css}</style>
      </section>
    </>
  )
}

const css = `
  .sk-root {
    --bg:      #f8f9fb;
    --surface: #ffffff;
    --border:  rgba(0,0,0,0.08);
    --text:    #0d1017;
    --muted:   rgba(13,16,23,0.48);
    --faint:   rgba(13,16,23,0.15);
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;
    background: var(--bg);
    color: var(--text);
    font-family: var(--fb);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* grain */
  .sk-grain {
    position:fixed;inset:0;pointer-events:none;z-index:0;opacity:.35;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  /* orbs */
  .sk-orb { position:fixed;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0; }
  .sk-root .o1 { width:600px;height:600px;background:rgba(255,32,32,.06);top:-160px;right:-160px;animation:sk-drift 22s ease-in-out infinite alternate; }
  .sk-root .o2 { width:500px;height:500px;background:rgba(10,102,194,.06);bottom:-100px;left:-100px;animation:sk-drift 28s ease-in-out infinite alternate-reverse; }
  .sk-root .o3 { width:320px;height:320px;background:rgba(225,48,108,.04);top:46%;left:44%;animation:sk-drift 18s ease-in-out infinite alternate; }
  @keyframes sk-drift { from{transform:translate(0,0)scale(1)} to{transform:translate(35px,25px)scale(1.06)} }

  /* layout */
  .sk-wrap {
    position:relative;z-index:1;
    max-width:1100px;margin:0 auto;
    padding:80px 22px 100px;
    display:flex;flex-direction:column;gap:64px;
  }

  /* ── header ── */
  .sk-header {
    opacity:0;transform:translateY(28px);
    transition:opacity .8s ease, transform .8s ease;
  }
  .is-visible .sk-header { opacity:1;transform:none; }

  .sk-eyebrow {
    display:inline-flex;align-items:center;gap:8px;
    font-size:10.5px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);
    background:rgba(0,0,0,.04);border:1px solid var(--border);
    padding:6px 16px;border-radius:100px;margin-bottom:26px;
  }
  .sk-dot {
    width:6px;height:6px;background:#22c55e;border-radius:50%;
    animation:sk-blink 2.4s ease infinite;display:inline-block;
  }
  @keyframes sk-blink { 0%,100%{opacity:1}50%{opacity:.2} }

  .sk-title {
    font-family:var(--fd);
    font-size:clamp(3rem,8vw,5.5rem);
    font-weight:800;letter-spacing:-.04em;line-height:.93;
    margin-bottom:22px;
    background:linear-gradient(140deg,#07090e 35%,rgba(7,9,14,.45));
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  }
  .sk-sub {
    font-size:15px;color:var(--muted);font-weight:300;line-height:1.7;
    max-width:520px;margin:0;
  }

  /* ── skill cards ── */
  .sk-grid {
    display:grid;grid-template-columns:repeat(3,1fr);gap:16px;
    opacity:0;transform:translateY(20px);
    transition:opacity .8s .1s ease, transform .8s .1s ease;
  }
  .is-visible .sk-grid { opacity:1;transform:none; }

  .sk-card {
    background:var(--surface);border:1px solid var(--border);border-radius:var(--r);
    padding:26px;display:flex;flex-direction:column;
    position:relative;overflow:hidden;
    box-shadow:0 2px 12px rgba(0,0,0,.04);
    transition:transform .32s cubic-bezier(.34,1.56,.64,1), border-color .28s, box-shadow .28s;
    animation:sk-fadeUp .7s ease both;
  }
  .sk-card::before {
    content:'';position:absolute;inset:0;
    background:radial-gradient(ellipse at 80% 0%, color-mix(in srgb, var(--ac) 7%, transparent) 0%, transparent 68%);
    opacity:0;transition:opacity .35s;pointer-events:none;border-radius:inherit;
  }
  .sk-card:hover { transform:translateY(-7px);border-color:var(--ac);box-shadow:0 28px 60px rgba(0,0,0,.10); }
  .sk-card:hover::before { opacity:1; }
  @keyframes sk-fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }

  .sk-ring {
    position:absolute;bottom:-56px;right:-56px;width:170px;height:170px;
    border-radius:50%;border:1px solid var(--ac,rgba(0,0,0,.08));opacity:.12;pointer-events:none;
  }
  .sk-ring.r2 { bottom:-88px;right:-88px;width:230px;height:230px;opacity:.05; }

  .sk-card-top { margin-bottom:14px; }
  .sk-accent-dot { width:8px;height:8px;border-radius:50%;display:inline-block; }

  .sk-cat-title {
    font-family:var(--fd);font-size:17px;font-weight:700;
    letter-spacing:-.02em;margin-bottom:0;line-height:1.3;
  }
  .sk-card-divider { height:1px;background:var(--border);margin:16px 0; }

  .sk-list { list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:9px; }
  .sk-list-item {
    display:flex;align-items:flex-start;gap:9px;
    font-size:13px;color:var(--muted);font-weight:300;line-height:1.5;
    transition:color .2s;
  }
  .sk-card:hover .sk-list-item { color:var(--text); }
  .sk-bullet {
    width:5px;height:5px;border-radius:50%;margin-top:5px;flex-shrink:0;
    opacity:.7;
  }

  /* ── tools ── */
  .sk-tools-section {
    opacity:0;transform:translateY(20px);
    transition:opacity .8s .15s ease, transform .8s .15s ease;
  }
  .is-visible .sk-tools-section { opacity:1;transform:none; }

  .sk-section-label {
    display:inline-flex;align-items:center;gap:8px;
    font-size:10.5px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);
    background:rgba(0,0,0,.04);border:1px solid var(--border);
    padding:6px 16px;border-radius:100px;margin-bottom:22px;
  }
  .sk-tools-title {
    font-family:var(--fd);font-size:clamp(1.5rem,3vw,2.2rem);
    font-weight:700;letter-spacing:-.03em;margin-bottom:20px;
  }

  .sk-tools-grid {
    display:flex;flex-wrap:wrap;gap:10px;
  }
  .sk-tool-chip {
    display:inline-flex;align-items:center;gap:8px;
    font-size:13px;color:var(--text);font-weight:400;
    background:var(--surface);border:1px solid var(--border);
    padding:8px 16px;border-radius:100px;
    box-shadow:0 1px 6px rgba(0,0,0,.04);
    transition:transform .28s cubic-bezier(.34,1.56,.64,1), border-color .25s, box-shadow .25s, color .2s;
    cursor:default;
    animation:sk-fadeUp .6s ease both;
  }
  .sk-tool-chip:hover {
    transform:translateY(-3px);
    border-color:var(--ac);
    box-shadow:0 10px 28px rgba(0,0,0,.09);
    color:var(--ac);
  }
  .sk-tool-dot {
    width:6px;height:6px;border-radius:50%;flex-shrink:0;opacity:.8;
  }

  /* ── summary ── */
  .sk-summary {
    border-top:1px solid var(--border);padding-top:40px;
    opacity:0;transition:opacity .8s .2s ease;
  }
  .is-visible .sk-summary { opacity:1; }
  .sk-summary p {
    font-size:15px;color:var(--muted);font-weight:300;line-height:1.7;
    max-width:560px;margin:0;
  }

  /* ── responsive ── */
  @media(max-width:860px) { .sk-grid { grid-template-columns:repeat(2,1fr); } }
  @media(max-width:560px) { .sk-grid { grid-template-columns:1fr; } }
`