'use client'

import { useEffect, useRef, useState } from 'react'

const roles = [
  {
    title: 'Founder',
    company: 'Saswa Hill Technology',
    accent: '#FF2020',
    description:
      'I own my startup as an IT company where we provide IT services with education in nature.',
  },
  {
    title: 'Co-Founder',
    company: 'The Healing Groov (Wellness Startup)',
    accent: '#E1306C',
    description:
      'I handle marketing strategy, social media growth, competitor research, and content production.',
  },
  {
    title: 'Data Management Executive',
    company: 'Oceaniek Technology India',
    accent: '#0A66C2',
    description:
      'I manage data processes, reporting systems, and analytical tasks that support business decisions.',
  },
]

const tags = [
  'Creative Growth Strategist',
  'Video Editor',
  'Data Analyst',
  'Storyteller',
]

export default function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Google Fonts – same pair as SocialShowcase */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');`}</style>

      <section id="about"  className="intro-root" ref={sectionRef}>
        {/* Ambient orbs */}
        <div className="intro-orb o1" />
        <div className="intro-orb o2" />
        <div className="intro-orb o3" />

        <div className="intro-wrap">

          {/* ── HERO SPLIT ─────────────────────────────────── */}
          <div className={`intro-hero ${visible ? 'is-visible' : ''}`}>

            {/* Left – text */}
            <div className="intro-text">
              <div className="intro-eyebrow">
                <span className="intro-dot" />
                Creative &amp; Growth
              </div>

              <h2 className="intro-name">
                Dyal<br />Thakur
              </h2>

              <p className="intro-bio">
                I am a Creative Growth Strategist, Video Editor, and Data Analyst who
                helps brands grow through data-driven marketing, storytelling, and
                high-retention video content.
              </p>
              <p className="intro-bio" style={{ marginTop: '1rem' }}>
                I specialize in blending creative content with analytics to build strong
                online presence, grow audiences, and convert viewers into customers.
              </p>

              {/* Tag chips – same language as SocialShowcase chips */}
              <div className="intro-chips">
                {tags.map((t) => (
                  <span key={t} className="intro-chip">{t}</span>
                ))}
              </div>
            </div>

            {/* Right – photo */}
            <div className="intro-photo-wrap">
              <div className="intro-photo-ring r1" />
              <div className="intro-photo-ring r2" />
              <div className="intro-photo-inner">
                <img
                  src="./me.png"
                  alt="Dyal Thakur"
                  className="intro-photo"
                />
                <div className="intro-photo-overlay" />
              </div>
            </div>
          </div>

          {/* ── CURRENTLY SECTION ──────────────────────────── */}
          <div className={`intro-currently ${visible ? 'is-visible' : ''}`}>
            <div className="intro-section-label">
              <span className="intro-dot" />
              Currently
            </div>

            <div className="intro-cards">
              {roles.map((role, i) => (
                <div
                  key={i}
                  className="intro-role-card"
                  style={{ '--ac': role.accent, animationDelay: `${0.1 + i * 0.12}s` } as React.CSSProperties}
                >
                  <div className="intro-role-ring" />
                  <div className="intro-role-ring r2" />

                  {/* accent dot */}
                  <span className="intro-role-dot" style={{ background: role.accent }} />

                  <div className="intro-role-title">{role.title}</div>
                  <div className="intro-role-company">{role.company}</div>
                  <div className="intro-role-divider" />
                  <p className="intro-role-desc">{role.description}</p>

                  <span className="intro-role-cta">View more ›</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── FOOTER SUMMARY ─────────────────────────────── */}
          <div className={`intro-summary ${visible ? 'is-visible' : ''}`}>
            <p>
              Through these experiences I have developed the ability to work across
              multiple domains — marketing strategy, video production, analytics, and
              business growth.
            </p>
          </div>

        </div>

        <style>{css}</style>
      </section>
    </>
  )
}

// ─── Scoped CSS ───────────────────────────────────────────────────────────────
const css = `
  .intro-root {
    --bg:      #07090e;
    --surface: #0d1017;
    --border:  rgba(255,255,255,0.07);
    --text:    #edf0f7;
    --muted:   rgba(237,240,247,0.42);
    --faint:   rgba(237,240,247,0.15);
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

  /* grain overlay */
  .intro-root::after {
    content:'';position:fixed;inset:0;pointer-events:none;z-index:0;opacity:.5;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  /* orbs */
  .intro-orb { position:fixed;border-radius:50%;filter:blur(110px);pointer-events:none;z-index:0; }
  .intro-root .o1 { width:600px;height:600px;background:rgba(255,32,32,.05);top:-150px;right:-150px;animation:intro-drift 22s ease-in-out infinite alternate; }
  .intro-root .o2 { width:500px;height:500px;background:rgba(10,102,194,.06);bottom:-100px;left:-100px;animation:intro-drift 28s ease-in-out infinite alternate-reverse; }
  .intro-root .o3 { width:320px;height:320px;background:rgba(225,48,108,.04);top:50%;left:45%;animation:intro-drift 18s ease-in-out infinite alternate; }
  @keyframes intro-drift { from{transform:translate(0,0)scale(1)} to{transform:translate(35px,25px)scale(1.06)} }

  /* layout */
  .intro-wrap {
    position:relative;z-index:1;
    max-width:1100px;margin:0 auto;
    padding:80px 22px 100px;
    display:flex;flex-direction:column;gap:72px;
  }

  /* ── hero split ── */
  .intro-hero {
    display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;
    opacity:0;transform:translateY(28px);
    transition:opacity .8s ease, transform .8s ease;
  }
  .intro-hero.is-visible { opacity:1;transform:none; }

  /* eyebrow */
  .intro-eyebrow {
    display:inline-flex;align-items:center;gap:8px;
    font-size:10.5px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);
    background:rgba(255,255,255,.04);border:1px solid var(--border);
    padding:6px 16px;border-radius:100px;margin-bottom:26px;
  }
  .intro-dot {
    width:6px;height:6px;background:#4ade80;border-radius:50%;
    animation:intro-blink 2.4s ease infinite;display:inline-block;
  }
  @keyframes intro-blink { 0%,100%{opacity:1}50%{opacity:.2} }

  /* name */
  .intro-name {
    font-family:var(--fd);
    font-size:clamp(3rem,7vw,5.5rem);
    font-weight:800;letter-spacing:-.04em;line-height:.93;
    margin-bottom:22px;
    background:linear-gradient(140deg,#fff 35%,rgba(255,255,255,.38));
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  }

  .intro-bio {
    font-size:15px;color:var(--muted);font-weight:300;line-height:1.7;
    margin:0;
  }

  /* chips */
  .intro-chips { display:flex;flex-wrap:wrap;gap:8px;margin-top:24px; }
  .intro-chip {
    font-size:11px;color:var(--muted);
    background:rgba(255,255,255,.04);border:1px solid var(--border);
    padding:4px 12px;border-radius:100px;
  }

  /* photo */
  .intro-photo-wrap {
    position:relative;display:flex;justify-content:center;align-items:center;
    opacity:0;transform:scale(.95);
    transition:opacity .9s .2s ease, transform .9s .2s ease;
  }
  .intro-hero.is-visible .intro-photo-wrap { opacity:1;transform:scale(1); }

  .intro-photo-ring {
    position:absolute;border-radius:50%;border:1px solid rgba(255,255,255,.08);pointer-events:none;
    width:340px;height:340px;
  }
  .intro-photo-ring.r2 { width:440px;height:440px;border-color:rgba(255,255,255,.04); }

  .intro-photo-inner {
    position:relative;width:260px;border-radius:var(--r);overflow:hidden;
    aspect-ratio:3/4;
    border:1px solid var(--border);
    box-shadow:0 32px 80px rgba(0,0,0,.6);
  }
  .intro-photo-inner:hover .intro-photo { transform:scale(1.05); }

  .intro-photo {
    width:100%;height:100%;object-fit:cover;
    transition:transform .7s ease;
    display:block;
  }
  .intro-photo-overlay {
    position:absolute;inset:0;
    background:linear-gradient(to top, rgba(7,9,14,.55) 0%, transparent 60%);
    pointer-events:none;
  }

  /* ── currently ── */
  .intro-currently {
    opacity:0;transform:translateY(20px);
    transition:opacity .8s .1s ease, transform .8s .1s ease;
  }
  .intro-currently.is-visible { opacity:1;transform:none; }

  .intro-section-label {
    display:inline-flex;align-items:center;gap:8px;
    font-size:10.5px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);
    background:rgba(255,255,255,.04);border:1px solid var(--border);
    padding:6px 16px;border-radius:100px;margin-bottom:32px;
  }

  .intro-cards {
    display:grid;grid-template-columns:repeat(3,1fr);gap:16px;
  }

  /* role card – mirrors .card from SocialShowcase */
  .intro-role-card {
    background:var(--surface);border:1px solid var(--border);border-radius:var(--r);
    padding:26px;display:flex;flex-direction:column;position:relative;overflow:hidden;
    cursor:default;
    transition:transform .32s cubic-bezier(.34,1.56,.64,1), border-color .28s, box-shadow .28s;
    animation:intro-fadeUp .7s ease both;
  }
  .intro-role-card::before {
    content:'';position:absolute;inset:0;
    background:radial-gradient(ellipse at 80% 0%, color-mix(in srgb, var(--ac) 9%, transparent) 0%, transparent 68%);
    opacity:0;transition:opacity .35s;pointer-events:none;border-radius:inherit;
  }
  .intro-role-card:hover { transform:translateY(-7px);border-color:var(--ac);box-shadow:0 28px 72px rgba(0,0,0,.55); }
  .intro-role-card:hover::before { opacity:1; }
  @keyframes intro-fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }

  /* decorative rings inside card */
  .intro-role-ring {
    position:absolute;bottom:-56px;right:-56px;width:170px;height:170px;
    border-radius:50%;border:1px solid var(--ac,#fff);opacity:.09;pointer-events:none;
  }
  .intro-role-ring.r2 { bottom:-88px;right:-88px;width:230px;height:230px;opacity:.04; }

  .intro-role-dot {
    width:8px;height:8px;border-radius:50%;display:inline-block;margin-bottom:14px;flex-shrink:0;
  }
  .intro-role-title {
    font-family:var(--fd);font-size:19px;font-weight:700;letter-spacing:-.02em;margin-bottom:4px;
  }
  .intro-role-company {
    font-size:12px;color:var(--muted);margin-bottom:0;
  }
  .intro-role-divider { height:1px;background:var(--border);margin:16px 0; }
  .intro-role-desc {
    font-size:13.5px;color:var(--muted);font-weight:300;line-height:1.65;flex:1;margin:0;
  }
  .intro-role-cta {
    display:inline-flex;align-items:center;gap:6px;
    margin-top:18px;padding:7px 16px;border-radius:100px;
    font-size:12px;font-weight:500;border:1px solid var(--ac,rgba(255,255,255,.2));
    color:var(--ac,var(--muted));background:transparent;
    align-self:flex-start;cursor:pointer;
    transition:background .2s, color .2s;
  }
  .intro-role-card:hover .intro-role-cta { background:var(--ac);color:#fff; }

  /* ── summary ── */
  .intro-summary {
    border-top:1px solid var(--border);padding-top:40px;
    opacity:0;transition:opacity .8s .2s ease;
  }
  .intro-summary.is-visible { opacity:1; }
  .intro-summary p {
    font-size:15px;color:var(--muted);font-weight:300;line-height:1.7;
    max-width:640px;margin:0;
  }

  /* ── responsive ── */
  @media(max-width:900px) {
    .intro-hero { grid-template-columns:1fr; }
    .intro-photo-wrap { order:-1; }
    .intro-photo-inner { width:200px; }
    .intro-photo-ring { width:260px;height:260px; }
    .intro-photo-ring.r2 { width:320px;height:320px; }
  }
  @media(max-width:760px) {
    .intro-cards { grid-template-columns:1fr; }
  }
`