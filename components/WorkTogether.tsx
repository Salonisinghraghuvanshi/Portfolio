'use client'

import { useEffect, useRef } from 'react'

export default function WorkTogether() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = canvas.offsetWidth * dpr
    canvas.height = canvas.offsetHeight * dpr
    ctx.scale(dpr, dpr)

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight
    let animationId: number

    const drawDiamond = (time: number) => {
      // Clear canvas
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      const centerX = width / 2
      const centerY = height / 2
      const size = 60
      const rotation = (time * 0.0005) % (Math.PI * 2)

      // Save context
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Draw glowing diamond
      const gradient = ctx.createLinearGradient(-size, -size, size, size)
      gradient.addColorStop(0, 'rgba(100, 150, 255, 0.8)')
      gradient.addColorStop(0.5, 'rgba(150, 200, 255, 1)')
      gradient.addColorStop(1, 'rgba(100, 150, 255, 0.8)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.moveTo(0, -size)
      ctx.lineTo(size, 0)
      ctx.lineTo(0, size)
      ctx.lineTo(-size, 0)
      ctx.closePath()
      ctx.fill()

      // Draw diamond outline
      ctx.strokeStyle = 'rgba(200, 220, 255, 0.6)'
      ctx.lineWidth = 2
      ctx.stroke()

      // Add glow effect
      ctx.shadowColor = 'rgba(100, 150, 255, 0.5)'
      ctx.shadowBlur = 20
      ctx.fillStyle = 'rgba(150, 180, 255, 0.3)'
      ctx.fill()

      ctx.restore()

      animationId = requestAnimationFrame(drawDiamond)
    }

    animationId = requestAnimationFrame(drawDiamond)

    return () => cancelAnimationFrame(animationId)
  }, [])

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`

  return (
    <section className="relative w-full bg-black text-white min-h-screen flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
      {/* Animated Diamond Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ display: 'block' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center space-y-16 max-w-4xl">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white">
          LET'S WORK TOGETHER!
        </h2>

        {/* WhatsApp CTA Button */}
        <div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 border border-white text-white font-light tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.237-3.285 2.144-1.831 1.814-2.956 4.233-2.956 6.969 0 2.736 1.125 5.155 2.956 6.969 1.815 1.81 4.243 2.935 6.979 2.935 1.237 0 2.45-.194 3.622-.574l.043-.013 3.666.959-.96-3.646-.013-.043c.379-1.172.574-2.385.574-3.622 0-2.736-1.125-5.155-2.956-6.969-1.815-1.81-4.243-2.935-6.979-2.935z" />
            </svg>
            GET IN TOUCH
          </a>
        </div>

        <p className="text-gray-400 font-light">
          Available for freelance projects and collaborations
        </p>
      </div>
    </section>
  )
}
