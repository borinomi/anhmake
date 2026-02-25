import Link from "next/link";

export default function ApproachIntro() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
          Our Approach
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight mb-6">
          Our{" "}
          <span className="text-axe-blue">proven approach</span>{" "}
          to transform your operations
        </h2>

        {/* Description */}
        <p className="text-lg text-axe-dark/70 leading-relaxed max-w-2xl mx-auto mb-10">
          We follow a structured four-phase methodology that starts with a deep
          business audit and ends with fully automated, measurable systems that
          run without you having to micromanage every process.
        </p>

        {/* CTA */}
        <Link
          href="/free-automation-consultation"
          className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full text-base hover:bg-axe-blue transition-colors duration-200"
        >
          See How It Works
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
      </div>
    </section>
  );
}
