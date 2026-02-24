import Link from "next/link";

const cases = [
  {
    industry: "Marketing Agency",
    headline: "5X Capacity, 2.4X Onboarding Speed",
    client: "Cleverly",
    author: "Daniel Paulino",
    whatWeDid: [
      "Rebuilt end-to-end client onboarding workflow in Monday.com",
      "Automated lead assignment and follow-up sequences",
      "Integrated LinkedIn outreach platform with CRM via Make.com",
    ],
    quote:
      "What I find most impressive is that a company like Anhmake exists! They completely transformed how we operate — we scaled from 200 to 1,000+ clients without adding headcount.",
  },
  {
    industry: "Financial Services",
    headline: "2X More Capacity From Better End-To-End Systems",
    client: "Caffeinated Accountant",
    author: "Joseph Martin",
    whatWeDid: [
      "Implemented FinancialCents as the central operations hub",
      "Built automated client intake and document collection flows",
      "Created real-time dashboards for workload visibility across the team",
    ],
    quote:
      "Their professionalism stood out. They delivered exactly what they promised and our capacity doubled within three months of launch.",
  },
  {
    industry: "B2B Services",
    headline: "From 63% to 95% On-Time Shipments",
    client: "Confidential",
    author: "Anthony Leach, COO",
    whatWeDid: [
      "Mapped and rebuilt the entire order fulfillment process",
      "Automated vendor communication and purchase order creation",
      "Built delay-alert automations and escalation workflows",
    ],
    quote:
      "The automations that they build are amazing. Our on-time delivery rate jumped from 63% to 95% in just a few weeks after implementation.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
              Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight">
              Client work and results
            </h2>
          </div>
          <Link
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-axe-dark hover:text-axe-blue transition-colors shrink-0"
          >
            VIEW ALL
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.author}
              className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300"
            >
              {/* Industry badge */}
              <span className="self-start inline-flex items-center px-3 py-1 rounded-full bg-axe-bg border border-gray-200 text-xs font-semibold text-axe-dark">
                {c.industry}
              </span>

              {/* Headline */}
              <h3 className="text-xl font-bold text-axe-dark leading-tight">
                {c.headline}
              </h3>

              {/* What We Did */}
              <div>
                <p className="text-xs font-bold text-axe-dark/40 uppercase tracking-widest mb-3">
                  What We Did
                </p>
                <ul className="space-y-2">
                  {c.whatWeDid.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-axe-dark/70">
                      <svg
                        className="w-4 h-4 text-axe-blue shrink-0 mt-0.5"
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

              {/* Divider */}
              <div className="border-t border-gray-200" />

              {/* Quote */}
              <blockquote className="text-sm text-axe-dark/70 leading-relaxed italic">
                &ldquo;{c.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-9 h-9 rounded-full bg-axe-bg border border-gray-200 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-axe-dark">
                    {c.author}
                  </p>
                  <p className="text-xs text-axe-dark/50">{c.client}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
