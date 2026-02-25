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

        {/* CTA Button */}
        <Link
          href="/free-automation-consultation"
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
