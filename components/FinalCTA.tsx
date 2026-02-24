import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-axe-dark relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-axe-blue/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-axe-blue/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle */}
        <p className="text-axe-blue text-sm font-bold uppercase tracking-widest mb-4">
          Reach Operational Excellence
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
          You&apos;re a few systems away from doubling your profit margins.
        </h2>

        {/* Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
          {/* Not hiring */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
              Without Anhmake
            </p>
            <ul className="space-y-2.5">
              {[
                "Waste time on manual tasks",
                "Break things trying to fix things",
                "Hire more people to solve capacity",
                "Stay stuck in the day-to-day grind",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                  <svg
                    className="w-4 h-4 text-red-400 shrink-0 mt-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 4l8 8M12 4L4 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hiring */}
          <div className="bg-axe-blue/20 border border-axe-blue/30 rounded-2xl p-6">
            <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-3">
              With Anhmake
            </p>
            <ul className="space-y-2.5">
              {[
                "Actually solve root-cause problems",
                "Build systems that scale automatically",
                "Double capacity without doubling headcount",
                "Work on your business, not in it",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-green-400 shrink-0 mt-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-10 py-5 bg-white text-axe-dark font-bold rounded-full text-base hover:bg-axe-blue hover:text-white transition-colors duration-200 shadow-xl"
        >
          Book a Free Consultation
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <p className="mt-4 text-sm text-white/40">
          No commitment required. 30-minute strategy call.
        </p>
      </div>
    </section>
  );
}
