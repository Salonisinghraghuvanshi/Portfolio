'use client'

export default function WorkTogether() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '7018968973'
  const whatsappLink = `https://api.whatsapp.com/send/?phone=%2B917018968973&text&type=phone_number&app_absent=0`

  return (
    <section className="relative w-full bg-black text-white min-h-screen flex flex-col items-center justify-center py-20 sm:py-28 md:py-32 px-4 sm:px-6 overflow-hidden">

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-8 sm:gap-10 md:gap-12 max-w-4xl w-full">

        {/* Heading */}
        <h2 className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          font-light tracking-tight leading-tight text-white
          px-2
        ">
          LET'S WORK TOGETHER!
        </h2>

        {/* Looping Muted Video */}
        <div className="flex-shrink-0">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="block rounded-lg object-cover"
            style={{
              width: 'clamp(140px, 30vw, 220px)',
              height: 'clamp(140px, 30vw, 220px)',
            }}
          />
        </div>

        {/* WhatsApp CTA Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2 sm:gap-3
            px-8 sm:px-10 md:px-12
            py-3 sm:py-4
            border border-white text-white
            font-light tracking-widest
            text-xs sm:text-sm
            hover:bg-white hover:text-black
            transition-all duration-300
            w-full max-w-xs sm:w-auto
          "
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.237-3.285 2.144-1.831 1.814-2.956 4.233-2.956 6.969 0 2.736 1.125 5.155 2.956 6.969 1.815 1.81 4.243 2.935 6.979 2.935 1.237 0 2.45-.194 3.622-.574l.043-.013 3.666.959-.96-3.646-.013-.043c.379-1.172.574-2.385.574-3.622 0-2.736-1.125-5.155-2.956-6.969-1.815-1.81-4.243-2.935-6.979-2.935z" />
          </svg>
          GET IN TOUCH
        </a>

        <p className="text-gray-400 font-light text-sm sm:text-base px-4">
          Available for freelance projects and collaborations
        </p>
      </div>
    </section>
  )
}