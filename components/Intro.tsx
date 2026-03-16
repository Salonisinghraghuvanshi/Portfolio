'use client'

import { useEffect, useState } from 'react'

export default function Intro() {
  // stages: 0=hello visible, 1=name visible, 2=curtain closing
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2500)
    const t2 = setTimeout(() => setStage(2), 5000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes i-drift {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(35px,25px) scale(1.06); }
        }
        @keyframes i-blink {
          0%,100% { opacity:1; } 50% { opacity:.2; }
        }
        @keyframes i-in {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes i-out {
          from { opacity:1; transform: translateY(0); }
          to   { opacity:0; transform: translateY(-24px); }
        }
      `}</style>

      <div style={{
        position:'fixed', inset:0, zIndex:9999,
        background:'#07090e',
        display:'flex', alignItems:'center', justifyContent:'center',
        overflow:'hidden',
        fontFamily:"'DM Sans', sans-serif",
      }}>

        {/* Orbs */}
        <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'rgba(255,32,32,.06)', filter:'blur(110px)', top:-150, right:-150, animation:'i-drift 22s ease-in-out infinite alternate', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'rgba(10,102,194,.07)', filter:'blur(110px)', bottom:-100, left:-100, animation:'i-drift 28s ease-in-out infinite alternate-reverse', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:320, height:320, borderRadius:'50%', background:'rgba(225,48,108,.04)', filter:'blur(110px)', top:'45%', left:'42%', animation:'i-drift 18s ease-in-out infinite alternate', pointerEvents:'none' }} />

        {/* Grain */}
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none', zIndex:0, opacity:.5,
          backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }} />

        {/* ── HELLO ── */}
        <div style={{
          position:'absolute',
          display:'flex', flexDirection:'column', alignItems:'center', gap:20,
          textAlign:'center', padding:'0 24px',
          zIndex:1,
          animation: stage === 0 ? 'i-in .7s ease both' : 'i-out .6s ease both',
          pointerEvents: stage === 0 ? 'auto' : 'none',
        }}>
          {/* eyebrow */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            fontSize:10.5, fontWeight:500, letterSpacing:'.18em', textTransform:'uppercase',
            color:'rgba(237,240,247,.42)',
            background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.07)',
            padding:'6px 16px', borderRadius:100,
          }}>
            <span style={{ width:6, height:6, background:'#4ade80', borderRadius:'50%', animation:'i-blink 2.4s ease infinite', display:'inline-block' }} />
            Welcome
          </div>

          {/* word */}
          <h1 style={{
            fontFamily:"'Syne', sans-serif",
            fontSize:'clamp(4.5rem, 16vw, 12rem)',
            fontWeight:800, letterSpacing:'-.04em', lineHeight:.9,
            margin:0,
            background:'linear-gradient(140deg,#fff 35%,rgba(255,255,255,.4))',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
          }}>
            HELLO!
          </h1>

          {/* bar */}
          <div style={{ width:48, height:3, borderRadius:3, background:'rgba(255,255,255,.25)' }} />
        </div>

        {/* ── I AM DYAL ── */}
        <div style={{
          position:'absolute',
          display:'flex', flexDirection:'column', alignItems:'center', gap:20,
          textAlign:'center', padding:'0 24px',
          zIndex:1,
          animation: stage === 1 ? 'i-in .7s ease both'
                   : stage >= 2  ? 'i-out .6s ease both'
                   : undefined,
          opacity: stage === 0 ? 0 : undefined,
          pointerEvents: stage === 1 ? 'auto' : 'none',
        }}>
          {/* eyebrow */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            fontSize:10.5, fontWeight:500, letterSpacing:'.18em', textTransform:'uppercase',
            color:'rgba(237,240,247,.42)',
            background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.07)',
            padding:'6px 16px', borderRadius:100,
          }}>
            <span style={{ width:6, height:6, background:'#4ade80', borderRadius:'50%', animation:'i-blink 2.4s ease infinite', display:'inline-block' }} />
            Creative Director
          </div>

          {/* word */}
          <h1 style={{
            fontFamily:"'Syne', sans-serif",
            fontSize:'clamp(3.5rem, 13vw, 10rem)',
            fontWeight:800, letterSpacing:'-.04em', lineHeight:.9,
            margin:0,
            display:'flex', alignItems:'baseline', gap:'.1em',
          }}>
            <span style={{
              fontWeight:400, fontSize:'.46em', letterSpacing:'.06em',
              color:'rgba(237,240,247,.38)', WebkitTextFillColor:'rgba(237,240,247,.38)',
              alignSelf:'center',
            }}>
              I AM
            </span>
            <span style={{
              background:'linear-gradient(135deg,#FF2020,#E1306C)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>
              DYAL
            </span>
          </h1>

          {/* bar */}
          <div style={{ width:48, height:3, borderRadius:3, background:'linear-gradient(90deg,#FF2020,#E1306C)' }} />
        </div>

        {/* ── Dark curtain ── */}
        <div style={{
          position:'absolute', inset:0, zIndex:10,
          background:'#07090e',
          opacity: stage === 2 ? 1 : 0,
          transition:'opacity 1s ease',
          pointerEvents: stage === 2 ? 'auto' : 'none',
        }} />

      </div>
    </>
  )
}