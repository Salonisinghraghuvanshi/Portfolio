'use client'

interface PageLoaderProps {
  isVisible?: boolean;
}

export default function PageLoader({ isVisible = true }: PageLoaderProps) {
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-white dark:bg-black transition-colors duration-300 animate-fadeIn">
      {/* Animated spinner */}
      <div className="relative w-16 h-16">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-black dark:border-t-white"
          style={{
            animation: 'spin 1.2s linear infinite',
          }}
        />
        
        {/* Middle rotating ring - offset */}
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-r-black dark:border-r-white"
          style={{
            animation: 'spin 1.8s linear infinite reverse',
          }}
        />
        
        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black dark:bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Loading text */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <div className="absolute bottom-32 text-center">
        <p className="text-black dark:text-white text-sm font-medium tracking-wide animate-pulse">
          Loading<span className="inline-block ml-0.5">.</span><span className="inline-block ml-0.5">.</span><span className="inline-block ml-0.5">.</span>
        </p>
      </div>
    </div>
  )
}
