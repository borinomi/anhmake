const points = [
  {
    title: "Consultative approach, not transactional",
    body: "We take the time to understand your business at a deep level before recommending any technology. We diagnose before we prescribe — which means you get solutions that actually fit.",
  },
  {
    title: "Knowing tools isn't the hard part. Understanding how a business actually runs — that is",
    body: "We build automation solutions on top of your existing tech stack. No unnecessary replacements, no over-engineering. Just practical implementations that get results without adding complexity or cost.",
  },
  {
    title: "We don't just use AI. We build it",
    body: "While most automation agencies stop at prompt engineering and off-the-shelf AI tools, we have hands-on experience building custom AI systems — designed around your specific workflows, data, and business logic.",
  },
  {
    title: "Tech agnostic — we pick what's right for you",
    body: "We have no vendor quotas or preferred tools to push. We evaluate your specific needs and select the best technology for your situation, not the one that pays us the highest referral fee.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
            Our Approach
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight">
            How we{" "}
            <span className="text-axe-blue">outperform</span>{" "}
            every competitor.
          </h2>
        </div>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex gap-5 p-7 bg-white border border-gray-200 rounded-2xl hover:shadow-sm transition-shadow duration-300"
            >
              {/* Check icon */}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-axe-blue/10 text-axe-blue shrink-0 mt-0.5">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4"
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
              </span>
              <div>
                <h3 className="font-bold text-axe-dark text-base mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-axe-dark/65 leading-relaxed">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
