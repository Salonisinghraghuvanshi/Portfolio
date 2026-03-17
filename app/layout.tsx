import React from "react"
import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

// const _geist = Geist({ subsets: ['latin'] })
// const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dyal Thakur | Creative Growth Strategist & Video Editor',
  description: 'Creative Growth Strategist, Video Editor, and Data Analyst helping brands grow through data-driven marketing, storytelling, and high-retention video content.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
