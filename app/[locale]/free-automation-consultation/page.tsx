import type { Metadata } from "next";
import CalendlyEmbed from "./CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book Your Free Consultation | Anhmake",
  description:
    "Book a free 30-minute call and discover exactly where your business can improve.",
};

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Free, no-commitment 30-minute strategy call",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Full audit of your current business operations",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path
          d="M13 10V3L4 14h7v7l9-11h-7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Identify your top automation opportunities with the highest ROI",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 10m0 10V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Custom roadmap tailored to your specific business",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Talk directly with a senior automation engineer",
  },
];

const stats = [
  { value: "350+", label: "Workflows built" },
  { value: "10k+", label: "Hours saved" },
  { value: "30+", label: "Clients served" },
];

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-axe-bg">
      {/* Hero top bar */}
      <section className="bg-axe-dark py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-white/10 text-xs font-semibold text-white/70 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-axe-blue inline-block" />
            Free · No commitment
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Book your free consultation
          </h1>
          <p className="mt-4 text-white/60 text-lg leading-relaxed">
            Book a free 30-minute call and discover exactly where your business can improve.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* LEFT — info panel */}
          <div className="lg:col-span-2 space-y-8">

            {/* What you'll get */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-lg font-bold text-axe-dark mb-6">
                What you&apos;ll get on this call
              </h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-axe-blue/10 text-axe-blue shrink-0">
                      {b.icon}
                    </span>
                    <span className="text-sm text-axe-dark/75 leading-relaxed pt-1">
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="bg-axe-dark rounded-2xl p-8">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">
                Our track record
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-white/50 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>


          </div>

          {/* RIGHT — Calendly embed */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <CalendlyEmbed />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
