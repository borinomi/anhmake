const phases = [
  {
    number: "01",
    title: "Business Audit",
    description:
      "We start by deeply analyzing your current operations, identifying bottlenecks, redundant processes, and untapped opportunities. You get a clear roadmap of what to fix and in what order.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Systems Buildout",
    description:
      "We design and implement the core operational systems your business needs: project management, CRMs, reporting dashboards, and communication frameworks that give you full visibility and control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI and Automation",
    description:
      "We layer intelligent automations on top of your systems using tools like n8n and custom AI models. Repetitive tasks are eliminated. Your team focuses on high-value work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Training, Metrics, SOPs",
    description:
      "We don't just build and leave. We train your team, document every process with clear SOPs, and set up metrics so you can track performance and continue improving after we're done.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Phases() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {phases.map((phase) => (
          <article
            key={phase.number}
            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Phase badge + icon */}
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-axe-dark">
                Phase {phase.number}
              </span>
              <span className="text-axe-blue group-hover:text-axe-dark transition-colors">
                {phase.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-axe-dark mb-3">
              {phase.title}
            </h3>

            {/* Description */}
            <p className="text-axe-dark/65 leading-relaxed text-sm">
              {phase.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
