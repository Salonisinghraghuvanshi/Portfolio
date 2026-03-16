'use client'

import { useEffect, useRef } from 'react'

const whatsappLink = `https://api.whatsapp.com/send/?phone=%2B917018968973&text&type=phone_number&app_absent=0`

export default function WorkTogether() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('is-visible'); observer.disconnect() }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');`}</style>

      <section className="wt-root" ref={sectionRef}>
        <div className="wt-orb o1" />
        <div className="wt-orb o2" />
        <div className="wt-orb o3" />
        <div className="wt-grain" />

        <div className="wt-wrap">

          {/* eyebrow */}
          <div className="wt-eyebrow">
            <span className="wt-dot" />
            Let's Connect
          </div>

          {/* heading */}
          <h2 className="wt-title">
            Let's Work<br />Together!
          </h2>

          {/* video */}
          <div className="wt-video-wrap">
            <div className="wt-video-ring r1" />
            <div className="wt-video-ring r2" />
            <div className="wt-video-inner">
              <video
                src="/video.mp4"
                autoPlay loop muted playsInline
                className="wt-video"
              />
              <div className="wt-video-overlay" />
            </div>
          </div>

          {/* availability chip */}
          <div className="wt-avail">
            <span className="wt-avail-dot" />
            Available for freelance &amp; collaborations
          </div>

          {/* WhatsApp CTA — same as SocialShowcase wa-btn */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="wt-btn"
          >
            <svg className="wt-wa-icon" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get in Touch
            <span className="wt-pulse" />
          </a>

        </div>

        <style>{css}</style>
      </section>
    </>
  )
}

const css = `
  .wt-root {
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
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    position: relative;
  }

  /* grain */
  .wt-grain {
    position:fixed;inset:0;pointer-events:none;z-index:0;opacity:.5;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  /* orbs */
  .wt-orb { position:fixed;border-radius:50%;filter:blur(110px);pointer-events:none;z-index:0; }
  .wt-root .o1 { width:600px;height:600px;background:rgba(18,140,126,.07);top:-150px;right:-150px;animation:wt-drift 22s ease-in-out infinite alternate; }
  .wt-root .o2 { width:500px;height:500px;background:rgba(10,102,194,.06);bottom:-100px;left:-100px;animation:wt-drift 28s ease-in-out infinite alternate-reverse; }
  .wt-root .o3 { width:320px;height:320px;background:rgba(37,211,102,.04);top:45%;left:42%;animation:wt-drift 18s ease-in-out infinite alternate; }
  @keyframes wt-drift { from{transform:translate(0,0)scale(1)} to{transform:translate(35px,25px)scale(1.06)} }

  /* layout */
  .wt-wrap {
    position:relative;z-index:1;
    max-width:700px;margin:0 auto;width:100%;
    padding:80px 22px 100px;
    display:flex;flex-direction:column;
    align-items:center;gap:36px;text-align:center;
  }

  /* eyebrow */
  .wt-eyebrow {
    display:inline-flex;align-items:center;gap:8px;
    font-size:10.5px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);
    background:rgba(255,255,255,.04);border:1px solid var(--border);
    padding:6px 16px;border-radius:100px;
    opacity:0;transform:translateY(16px);
    transition:opacity .7s ease, transform .7s ease;
  }
  .is-visible .wt-eyebrow { opacity:1;transform:none; }

  .wt-dot {
    width:6px;height:6px;background:#4ade80;border-radius:50%;
    animation:wt-blink 2.4s ease infinite;display:inline-block;
  }
  @keyframes wt-blink { 0%,100%{opacity:1}50%{opacity:.2} }

  /* title */
  .wt-title {
    font-family:var(--fd);
    font-size:clamp(3rem,9vw,6.5rem);
    font-weight:800;letter-spacing:-.04em;line-height:.92;
    margin:0;
    background:linear-gradient(140deg,#fff 35%,rgba(255,255,255,.38));
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
    opacity:0;transform:translateY(24px);
    transition:opacity .8s .1s ease, transform .8s .1s ease;
  }
  .is-visible .wt-title { opacity:1;transform:none; }

  /* video */
  .wt-video-wrap {
    position:relative;display:flex;align-items:center;justify-content:center;
    opacity:0;transform:scale(.9);
    transition:opacity .9s .2s ease, transform .9s .2s ease;
  }
  .is-visible .wt-video-wrap { opacity:1;transform:scale(1); }

  .wt-video-ring {
    position:absolute;border-radius:50%;pointer-events:none;
    border:1px solid rgba(37,211,102,.15);
  }
  .wt-video-ring.r1 { width:240px;height:240px;animation:wt-ripple 3s ease-in-out infinite; }
  .wt-video-ring.r2 { width:300px;height:300px;border-color:rgba(37,211,102,.07);animation:wt-ripple 3s ease-in-out infinite .6s; }
  @keyframes wt-ripple { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.05);opacity:.5} }

  .wt-video-inner {
    position:relative;
    width:clamp(140px,28vw,200px);height:clamp(140px,28vw,200px);
    border-radius:50%;overflow:hidden;
    border:1px solid rgba(37,211,102,.25);
    box-shadow:0 0 40px rgba(37,211,102,.12), 0 24px 60px rgba(0,0,0,.6);
  }
  .wt-video { width:100%;height:100%;object-fit:cover;display:block; }
  .wt-video-overlay {
    position:absolute;inset:0;
    background:linear-gradient(135deg, rgba(37,211,102,.08), transparent 60%);
    pointer-events:none;
  }

  /* availability */
  .wt-avail {
    display:inline-flex;align-items:center;gap:8px;
    font-size:12px;color:var(--muted);font-weight:400;
    background:rgba(255,255,255,.04);border:1px solid var(--border);
    padding:6px 16px;border-radius:100px;
    opacity:0;transition:opacity .7s .35s ease;
  }
  .is-visible .wt-avail { opacity:1; }
  .wt-avail-dot {
    width:6px;height:6px;background:#25D366;border-radius:50%;
    animation:wt-blink 2s ease infinite;display:inline-block;
  }

  /* WhatsApp button — lifted directly from SocialShowcase */
  .wt-btn {
    display:inline-flex;align-items:center;gap:12px;
    background:#128C7E;color:#fff;text-decoration:none;
    font-family:var(--fb);font-size:15px;font-weight:500;
    padding:14px 32px;border-radius:100px;
    border:1.5px solid rgba(255,255,255,0.15);
    transition:background .25s, transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s;
    position:relative;overflow:hidden;
    opacity:0;transform:translateY(16px);
    transition:background .25s, transform .25s cubic-bezier(.34,1.56,.64,1),
                box-shadow .25s, opacity .7s .4s ease;
  }
  .is-visible .wt-btn { opacity:1;transform:translateY(0); }
  .wt-btn::before {
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,.08),transparent);pointer-events:none;
  }
  .wt-btn:hover { background:#075E54;transform:translateY(-3px) scale(1.03);box-shadow:0 16px 48px rgba(18,140,126,.45); }
  .wt-btn:active { transform:scale(0.97); }

  .wt-wa-icon { width:22px;height:22px;flex-shrink:0; }
  .wt-pulse {
    width:8px;height:8px;background:#25D366;border-radius:50%;
    flex-shrink:0;animation:wt-blink 2s ease infinite;display:inline-block;
  }
`