"use client";

import { useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Chip {
  label: string;
  id?: string;
  shortFormat?: boolean; // true = format as 1.2K / 223.5K
  value?: number; // raw number for count-up animation
}

interface Platform {
  id: string;
  name: string;
  handle: string;
  url: string;
  colorClass: string;
  iconBg: string;
  statId: string;
  statValue: number;
  statLabel: string;
  chips: Chip[];
  ctaLabel: string;
  icon: React.ReactNode;
}

// ─── Static Data — update these numbers when your stats change ───────────────

const PLATFORMS: Platform[] = [
  {
    id: "youtube",
    name: "YouTube",
    handle: "@dyal_thakur",
    url: "https://youtube.com/@dyal_thakur?si=seZvdBa_-QQ4zT6E",
    colorClass: "yt",
    iconBg: "linear-gradient(135deg,#FF2020,#8B0000)",
    statId: "yt-subs",
    statValue: 1456,
    statLabel: "Subscribers",
    chips: [
      { label: "views", id: "yt-views", value: 223475, shortFormat: true },
      { label: "videos", id: "yt-vids", value: 864 },
    ],
    ctaLabel: "Subscribe",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@dream_chaser1089",
    url: "https://www.instagram.com/dream_chaser1089?igsh=MXA0Z2NpMWg3NDJ6Mg==",
    colorClass: "ig",
    iconBg: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    statId: "ig-followers",
    statValue: 9631,
    statLabel: "Followers",
    chips: [{ label: "posts", id: "ig-posts", value: 319 }],
    ctaLabel: "Follow",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "dyal-thakur-b5179a2a1",
    url: "https://www.linkedin.com/in/dyal-thakur-b5179a2a1",
    colorClass: "li",
    iconBg: "linear-gradient(135deg,#0A66C2,#004182)",
    statId: "li-connections",
    statValue: 1346,
    statLabel: "Connections",
    chips: [{ label: "Professional network" }],
    ctaLabel: "Connect",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toLocaleString();
}

function countUp(
  el: HTMLElement,
  target: number,
  suffix: string,
  shortFmt: boolean,
  duration = 1500
) {
  const t0 = performance.now();

  const tick = (now: number) => {
    const p = Math.min((now - t0) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const val = Math.round(ease * target);

    el.textContent = (shortFmt ? fmt(val) : val.toLocaleString()) + suffix;

    if (p < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowIcon = () => (
  <svg
    className="arr"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ─── Platform Card ────────────────────────────────────────────────────────────

function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <a
      className={`card ${platform.colorClass}`}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="ring" />
      <div className="ring r2" />

      {/* Header */}
      <div className="ct">
        <div className="iw" style={{ background: platform.iconBg }}>
          {platform.icon}
        </div>
        <ArrowIcon />
      </div>

      <div className="pn">{platform.name}</div>
      <div className="ph">{platform.handle}</div>
      <div className="dv" />

      {/* Main stat */}
      <div className="sr">
        <span className="sn" id={platform.statId}>
          {platform.statValue.toLocaleString()}
        </span>
        <span className="sl">{platform.statLabel}</span>
      </div>

      {/* Chips */}
      <div className="chips">
        {platform.chips.map((chip, i) => (
          <span key={i} className="chip" id={chip.id}>
            {chip.value !== undefined
              ? `${chip.shortFormat ? fmt(chip.value) : chip.value.toLocaleString()} ${chip.label}`
              : chip.label}
          </span>
        ))}
      </div>

      {/* CTA */}
      <span className="cta">
        {platform.ctaLabel} <ChevronIcon />
      </span>
    </a>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SocialShowcase() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const runAnimations = () => {
      PLATFORMS.forEach((p) => {
        const el = document.getElementById(p.statId);
        if (el) countUp(el, p.statValue, "", false);

        p.chips.forEach((chip) => {
          if (chip.id && chip.value !== undefined) {
            const chipEl = document.getElementById(chip.id);
            if (chipEl) {
              countUp(chipEl, chip.value, ` ${chip.label}`, chip.shortFormat ?? false);
            }
          }
        });
      });
    };

    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          runAnimations();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="contact" className="sc-root">
        {/* Ambient orbs */}
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />

        <div className="wrap">
          {/* Hero */}
          <header className="hero">
            <div className="eyebrow">
              <span className="dot" />
              Find me across the internet
            </div>

            <h1 className="hero-name">Dyal Thakur</h1>

            <p className="hero-sub">
              Dream chaser. Creator. Connect with me on my platforms.
            </p>
          </header>

          {/* Cards */}
          <div className="grid" ref={gridRef}>
            {PLATFORMS.map((p) => (
              <PlatformCard key={p.id} platform={p} />
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="wa-wrap">
            <a
              className="wa-btn"
              href="https://wa.me/917018968973"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="wa-icon" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
              <span className="wa-pulse" />
            </a>
          </div>

          <footer className="sc-footer">
            <p>
              Update stats in <code>PLATFORMS</code> array inside{" "}
              <code>SocialShowcase.tsx</code>
            </p>
          </footer>
        </div>

        {/* Scoped styles */}
        <style>{styles}</style>
      </div>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = `
  .sc-root {
    --yt: #FF2020;
    --ig: #E1306C;
    --li: #0A66C2;
    --fd: 'Syne', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --r: 22px;

    font-family: var(--fb);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* LIGHT MODE (default) */
  .sc-root {
    --bg: #f8f9fb;
    --surface: rgba(255,255,255,0.92);
    --surface-strong: #ffffff;
    --border: rgba(15,23,42,0.08);
    --text: #0d1017;
    --muted: rgba(13,16,23,0.62);
    --faint: rgba(13,16,23,0.22);
    --soft-chip: rgba(15,23,42,0.04);
    --hero-grad-1: #0d1017;
    --hero-grad-2: #475569;
    --card-shadow: 0 18px 48px rgba(15,23,42,0.08);

    background: var(--bg);
    color: var(--text);
    transition: background-color 300ms ease, color 300ms ease;
  }

  /* DARK MODE (supports html.dark OR parent .dark) */
  html.dark .sc-root,
  .dark .sc-root {
    --bg: #07090e;
    --surface: rgba(13,16,23,0.9);
    --surface-strong: #0d1017;
    --border: rgba(255,255,255,0.07);
    --text: #edf0f7;
    --muted: rgba(237,240,247,0.56);
    --faint: rgba(237,240,247,0.18);
    --soft-chip: rgba(255,255,255,0.04);
    --hero-grad-1: #ffffff;
    --hero-grad-2: rgba(255,255,255,0.42);
    --card-shadow: 0 28px 72px rgba(0,0,0,0.45);

    background: var(--bg);
    color: var(--text);
  }

  /* grain */
  .sc-root::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: .35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  html.dark .sc-root::after,
  .dark .sc-root::after {
    opacity: .5;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  /* orbs */
  .sc-root .orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(110px);
    pointer-events: none;
    z-index: 0;
  }

  /* Light mode orbs */
  .sc-root .o1 {
    width: 600px;
    height: 600px;
    background: rgba(255,32,32,.06);
    top: -150px;
    right: -150px;
    animation: sc-drift 22s ease-in-out infinite alternate;
  }

  .sc-root .o2 {
    width: 500px;
    height: 500px;
    background: rgba(10,102,194,.06);
    bottom: -100px;
    left: -100px;
    animation: sc-drift 28s ease-in-out infinite alternate-reverse;
  }

  .sc-root .o3 {
    width: 320px;
    height: 320px;
    background: rgba(225,48,108,.04);
    top: 45%;
    left: 42%;
    animation: sc-drift 18s ease-in-out infinite alternate;
  }

  /* Dark mode orbs */
  html.dark .sc-root .o1,
  .dark .sc-root .o1 { background: rgba(255,32,32,.055); }

  html.dark .sc-root .o2,
  .dark .sc-root .o2 { background: rgba(10,102,194,.065); }

  html.dark .sc-root .o3,
  .dark .sc-root .o3 { background: rgba(225,48,108,.04); }

  @keyframes sc-drift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(35px,25px) scale(1.06); }
  }

  /* layout */
  .sc-root .wrap {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 22px 100px;
  }

  /* hero */
  .sc-root .hero {
    text-align: center;
    margin-bottom: 68px;
    animation: sc-fadeUp .75s ease both;
  }

  .sc-root .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--surface);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border);
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 26px;
  }

  .sc-root .dot {
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    animation: sc-blink 2.4s ease infinite;
    display: inline-block;
  }

  @keyframes sc-blink {
    0%,100% { opacity: 1; }
    50% { opacity: .2; }
  }

  .sc-root .hero-name {
    font-family: var(--fd);
    font-size: clamp(3rem, 8vw, 5.8rem);
    font-weight: 800;
    letter-spacing: -.04em;
    line-height: .94;
    margin-bottom: 18px;
    background: linear-gradient(140deg, var(--hero-grad-1) 35%, var(--hero-grad-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .sc-root .hero-sub {
    font-size: 15px;
    color: var(--muted);
    font-weight: 400;
    max-width: 420px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* grid */
  .sc-root .grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 16px;
  }

  @media (max-width: 820px) {
    .sc-root .grid { grid-template-columns: 1fr; }
  }

  @media (min-width: 821px) and (max-width: 1060px) {
    .sc-root .grid { grid-template-columns: repeat(2,1fr); }
  }

  /* card */
  .sc-root .card {
    background: var(--surface);
    backdrop-filter: blur(18px);
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 26px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    box-shadow: var(--card-shadow);
    transition:
      transform .32s cubic-bezier(.34,1.56,.64,1),
      border-color .28s,
      box-shadow .28s,
      background .28s;
  }

  .sc-root .card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--glow, transparent);
    opacity: 0;
    transition: opacity .35s;
    pointer-events: none;
    border-radius: inherit;
  }

  .sc-root .card:hover {
    transform: translateY(-7px);
    border-color: var(--ac);
    box-shadow: 0 24px 70px rgba(0,0,0,.14);
  }

  html.dark .sc-root .card:hover,
  .dark .sc-root .card:hover {
    box-shadow: 0 28px 72px rgba(0,0,0,.55);
  }

  .sc-root .card:hover::before { opacity: 1; }

  .sc-root .card:nth-child(1) { animation: sc-fadeUp .7s .08s ease both; }
  .sc-root .card:nth-child(2) { animation: sc-fadeUp .7s .20s ease both; }
  .sc-root .card:nth-child(3) { animation: sc-fadeUp .7s .32s ease both; }

  @keyframes sc-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* rings */
  .sc-root .ring {
    position: absolute;
    bottom: -56px;
    right: -56px;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 1px solid var(--ac);
    opacity: .09;
    pointer-events: none;
  }

  .sc-root .r2 {
    bottom: -88px;
    right: -88px;
    width: 230px;
    height: 230px;
    opacity: .04;
  }

  /* card top */
  .sc-root .ct {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 22px;
  }

  .sc-root .iw {
    width: 52px;
    height: 52px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.18);
  }

  .sc-root .arr {
    color: var(--faint);
    transition: color .2s, transform .2s;
  }

  .sc-root .card:hover .arr {
    color: var(--ac);
    transform: translate(3px,-3px);
  }

  .sc-root .pn {
    font-family: var(--fd);
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -.025em;
    margin-bottom: 3px;
  }

  .sc-root .ph {
    font-size: 12px;
    color: var(--muted);
    word-break: break-word;
  }

  /* divider */
  .sc-root .dv {
    height: 1px;
    background: var(--border);
    margin: 18px 0;
  }

  /* stat */
  .sc-root .sr {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }

  .sc-root .sn {
    font-family: var(--fd);
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: -.05em;
    color: var(--ac);
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .sc-root .sl {
    font-size: 13px;
    color: var(--muted);
  }

  .sc-root .chips {
    display: flex;
    gap: 8px;
    margin-top: 11px;
    flex-wrap: wrap;
  }

  .sc-root .chip {
    font-size: 11px;
    color: var(--muted);
    background: var(--soft-chip);
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 100px;
    backdrop-filter: blur(8px);
  }

  /* cta */
  .sc-root .cta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 20px;
    padding: 9px 18px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid var(--ac);
    color: var(--ac);
    background: transparent;
    transition: background .2s, color .2s, transform .2s;
    text-decoration: none;
    align-self: flex-start;
    cursor: pointer;
  }

  .sc-root .card:hover .cta {
    background: var(--ac);
    color: #fff;
    transform: translateY(-1px);
  }

  /* platform colours */
  .sc-root .yt {
    --ac: var(--yt);
    --glow: radial-gradient(ellipse at 80% 0%, rgba(255,32,32,.09) 0%, transparent 68%);
  }

  .sc-root .ig {
    --ac: var(--ig);
    --glow: radial-gradient(ellipse at 80% 0%, rgba(225,48,108,.09) 0%, transparent 68%);
  }

  .sc-root .li {
    --ac: var(--li);
    --glow: radial-gradient(ellipse at 80% 0%, rgba(10,102,194,.11) 0%, transparent 68%);
  }

  /* whatsapp */
  .sc-root .wa-wrap {
    display: flex;
    justify-content: center;
    margin-top: 48px;
    animation: sc-fadeUp .8s .4s ease both;
  }

  .sc-root .wa-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(135deg, #128C7E, #0f766e);
    color: #fff;
    text-decoration: none;
    font-family: var(--fb);
    font-size: 15px;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.12);
    transition:
      background .25s,
      transform .25s cubic-bezier(.34,1.56,.64,1),
      box-shadow .25s;
    position: relative;
    overflow: hidden;
    box-shadow: 0 14px 36px rgba(18,140,126,0.22);
  }

  .sc-root .wa-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,.12), transparent);
    pointer-events: none;
  }

  .sc-root .wa-btn:hover {
    background: linear-gradient(135deg, #0f766e, #075E54);
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 16px 42px rgba(18,140,126,0.34);
  }

  .sc-root .wa-btn:active {
    transform: scale(0.97);
  }

  .sc-root .wa-icon {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  .sc-root .wa-pulse {
    width: 8px;
    height: 8px;
    background: #25D366;
    border-radius: 50%;
    flex-shrink: 0;
    animation: sc-blink 2s ease infinite;
    display: inline-block;
  }

  /* footer */
  .sc-root .sc-footer {
    text-align: center;
    margin-top: 60px;
    font-size: 11.5px;
    color: var(--faint);
    letter-spacing: .04em;
    animation: sc-fadeUp .9s .5s ease both;
  }

  .sc-root .sc-footer code {
    font-size: 11px;
    background: var(--soft-chip);
    padding: 2px 6px;
    border-radius: 6px;
    color: var(--muted);
    border: 1px solid var(--border);
  }
`;