import Link from "next/link";

export const cases = [
  {
    industry: "Construction & Engineering",
    headline: "Hours of Reporting Reduced to Minutes with Custom API Workflows",
    client: "Hoa Binh",
    author: "Operations Team",
    whatWeDid: [
      "Designed custom APIs and automated workflows to replace manual Excel-based reporting",
      "Eliminated repetitive chart creation, distribution, and review cycles",
      "Freed up staff time to focus on higher-value strategic tasks",
    ],
    quote:
      "Our teams were spending hours every day creating, sending, and reviewing Excel charts for internal logistics. Anhmake built custom APIs and workflows that eliminated all of that — now our people focus on work that actually moves the needle.",
  },
  {
    industry: "Manufacturing",
    headline: "Real-Time Production Visibility, Zero Manual Reporting",
    client: "YS Corp",
    author: "Production Management",
    whatWeDid: [
      "Automated capture of frequently changing production floor data into a central database",
      "Eliminated manual data collection, consolidation, and report generation",
      "Built real-time dashboards for instant production status visibility",
    ],
    quote:
      "Our staff used to spend countless hours manually updating, compiling, and formatting production data into reports. Now everything flows into the database automatically and the entire team can see results on a live dashboard. Productivity has never been higher.",
  },
  {
    industry: "Advertising & Design",
    headline: "From Hours of Manual Work to Minutes with Custom Scripts",
    client: "WeGrid",
    author: "CEO",
    whatWeDid: [
      "Analyzed existing design tool workflows for pamphlet and namecard production",
      "Built custom scripts tailored to their current software environment",
      "Reduced repetitive layout and formatting tasks from hours to minutes",
    ],
    quote:
      "Creating ad pamphlets and namecards used to take us hours of tedious manual work. Anhmake designed scripts that plug right into the tools we already use — what took hours now takes just a few minutes. It's been a game-changer for our team.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
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
              <span className="self-start inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-axe-dark">
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
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 shrink-0"
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
