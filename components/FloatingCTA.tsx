import Link from 'next/link'

export default function FloatingCTA() {
  return (
    <Link
      href="/free-automation-consultation"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Book Free Consultation"
    >
      <div className="relative w-24 h-24 animate-float">

        {/* Full background circle */}
        <div className="absolute inset-0 rounded-full bg-axe-dark group-hover:scale-105 transition-transform duration-300" />

        {/* Rotating text ring — on top of background */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full animate-spin-slow"
          aria-hidden="true"
        >
          <defs>
            <path
              id="circle-path"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="fill-white text-[11px] font-semibold tracking-widest uppercase">
            <textPath href="#circle-path" startOffset="0%">
              BOOK FREE CONSULTATION • BOOK FREE CONSULTATION •
            </textPath>
          </text>
        </svg>

        {/* Center arrow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-axe-blue rounded-full flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

      </div>
    </Link>
  )
}
