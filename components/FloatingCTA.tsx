import Link from 'next/link'

export default function FloatingCTA() {
  return (
    <Link
      href="/free-automation-consultation"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Book Free Consultation"
    >
      <div className="relative w-24 h-24 animate-float">
        {/* Rotating text ring */}
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
          <text className="fill-axe-dark text-[11px] font-semibold tracking-widest uppercase">
            <textPath href="#circle-path" startOffset="0%">
              BOOK FREE CONSULTATION • BOOK FREE CONSULTATION •
            </textPath>
          </text>
        </svg>

        {/* Center circle — sized to cover text path (radius 37 out of viewBox 100 → 74% of 96px = ~71px) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[74px] h-[74px] bg-axe-dark rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
            <svg
              width="20"
              height="20"
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
