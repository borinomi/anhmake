import Link from "next/link";
import CaseStudies from "@/components/CaseStudies";
import { members } from "@/components/Team";
import { stats } from "@/components/StatsBar";
import Technology from "@/components/Technology";
import Reviews from "@/components/Reviews";

export const metadata = {
  title: "n8n Automation | Anhmake",
  description:
    "The only n8n consultants who guarantee success. Expert n8n consulting, custom development, multi-AI agent workflows, self-hosting support, training, maintenance, bug fixes.",
};

const phases = [
  {
    phase: "PHASE 1",
    title: "Process Audit",
    desc: "We document your operations, analyze your technology and interview your team to suggest the best approach to hit your goals with n8n. The end result is a clear automation plan with opportunities, process maps and expected outcomes.",
  },
  {
    phase: "PHASE 2",
    title: "n8n Buildout",
    desc: "Fully done-for-you n8n development beginning with a proof of concept. We provide custom code, AI training, data standardization, integrations and automated workflows—with guaranteed on-time completion.",
  },
  {
    phase: "PHASE 3",
    title: "Launch and Iterate",
    desc: "Before launch, we run multiple cycles of testing and iteration until everything is accurate and quality. When we go live, we monitor your automations closely to ensure successful implementation.",
  },
  {
    phase: "PHASE 4",
    title: "Training, Metrics, SOPs",
    desc: "We guarantee adoption because we win buy-in from employees upfront, simplify procedures and train your team. Then, we set-up a dashboard with your most important metrics and proactively manage your automations.",
  },
];

const howPoints = [
  "We take a consultative approach so you don't miss out on hidden opportunities or fumble implementation—which drives measurable results.",
  "We specialize in the entire technology stack: CRMs, Project Management, AI, Automation, etc.",
  "We are extremely credible and competent. Our team is composed of world-class AI, automation, sales and project management leaders. We're so confident in our work, we guarantee success in our contracts.",
  "We are tech agnostic, meaning we are not married to any tools, allowing us to be flexible to your operations and only recommend what's best for you.",
];



const faqs = [
  {
    q: "What is an n8n consulting agency?",
    a: "An n8n consulting agency is a provider of n8n development services. They build end-to-end automations primarily using n8n. Their services can include: business process consulting, AI agent projects, low-code automation, LLM training, integrations, on-premise self-hosting for near-zero costs, maintenance.",
  },
  {
    q: "Why use n8n instead of alternatives?",
    a: "n8n is the most developer-friendly and lowest cost platform amongst top alternatives like Zapier and Make. It's an open-source, self-hostable workflow automation platform that gives you full control over your data, logic, and infrastructure. It's more flexible than tools like Zapier, supports custom code and complex workflows, and can scale cost-effectively.",
  },
  {
    q: "How much does custom n8n development cost?",
    a: "Costs depend on workflow complexity, integrations, and hosting setup. High end n8n developers charge $200–$400/hr. Project-based: Simple automations $1,000–$2,000 · Mid-level projects $5,000–$20,000 · Enterprise solutions $40,000+. Self-hosting can lower long-term costs significantly.",
  },
  {
    q: "What are the best use cases for n8n?",
    a: "n8n shines for multi-step cross-platform workflows such as: company-wide AI assistants, data syncs and ETL pipelines, recurring AI-powered workflows (CRM, marketing, fulfillment, scoring), reporting and alerts, and custom AI agents.",
  },
  {
    q: "How do you approach automation work with clients?",
    a: "We use a proven 4-phase approach: (1) Process Audit — deep understanding of constraints, data and processes. (2) n8n Buildout — proof of concept then rapid iteration. (3) Launch and Iterate — 10-day free iteration period post-launch. (4) Maintenance — developer on standby to monitor, fix and update automations.",
  },
];


export default function N8nAutomationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-white pt-24 pb-20 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-axe-dark/20 bg-white text-sm font-medium text-axe-dark mb-8">
            <span className="w-2 h-2 rounded-full bg-axe-blue inline-block" />
            #1 n8n Agency
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-axe-dark leading-tight mb-6">
            The only n8n consultants<br />who guarantee success
          </h1>
          <p className="text-lg text-axe-dark/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert n8n consulting, custom development, multi-AI agent workflows, self-hosting support,
            training, maintenance, bug fixes. We combine elite developers with business process consultants
            to build automations that solve big problems and drive real results.
          </p>
          <Link
            href="/free-automation-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full hover:bg-axe-blue transition-colors duration-200"
          >
            Free n8n Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-axe-blue py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach / Phases */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-axe-blue uppercase mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
              Our proven approach to n8n projects
            </h2>
            <p className="text-axe-dark/60 max-w-2xl mx-auto leading-relaxed">
              We&apos;re the only n8n agency who combines elite developers with business process consultants,
              so we only build automations that solve big problems and drive real results at scale without breaking.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((p, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 border border-axe-dark/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <span className="inline-block text-xs font-bold tracking-widest text-axe-blue uppercase mb-4">
                  {p.phase}
                </span>
                <h3 className="text-lg font-bold text-axe-dark mb-3">{p.title}</h3>
                <p className="text-sm text-axe-dark/60 leading-relaxed">{p.desc}</p>
                {i < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-axe-dark/20 text-xl">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/free-automation-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full hover:bg-axe-blue transition-colors"
            >
              Free n8n Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-axe-blue uppercase mb-3">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
              We&apos;re like hiring a senior n8n engineer and COO,<br className="hidden md:block" /> for a fraction of the cost
            </h2>
            <p className="text-axe-dark/60 mt-4">Our team is comprised of widely respected influencers in the AI automation industry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m) => (
              <div key={m.name} className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5 hover:shadow-sm transition-shadow duration-300">
                <div className="w-16 h-16 rounded-xl bg-axe-blue/10 border border-axe-blue/20 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-axe-blue">{m.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-axe-dark text-base">{m.name}</p>
                  <p className="text-sm text-axe-dark/60 mt-0.5">{m.role}</p>
                  <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-axe-blue bg-axe-blue/10 px-2.5 py-1 rounded-full">
                    {m.credential}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* Client Reviews */}
      <Reviews />

      {/* How We Outperform */}
      <section className="py-24 bg-axe-dark text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-2/5">
              <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                How we outperform other n8n agencies.
              </h2>
            </div>
            <div className="md:w-3/5 space-y-5">
              {howPoints.map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Tech Stack */}
      <Technology />

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
            <div>
              <p className="text-xs font-bold tracking-widest text-axe-blue uppercase mb-3">FAQs</p>
              <h2 className="text-3xl md:text-4xl font-bold text-axe-dark">Common Questions</h2>
            </div>
            <Link
              href="/free-automation-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full hover:bg-axe-blue transition-colors shrink-0"
            >
              FREE CONSULTATION
            </Link>
          </div>
          <div className="divide-y divide-axe-dark/10">
            {faqs.map((faq, i) => (
              <div key={i} className="py-8">
                <h3 className="font-bold text-axe-dark text-lg mb-3">{faq.q}</h3>
                <p className="text-axe-dark/60 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-axe-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">
            Experience massive productivity gains
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            You&apos;re a few AI systems away<br />from doubling your output.
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">
            Not hiring an expert n8n engineer puts your business at risk of fragile workflows that break,
            waste time and expose sensitive data. Our expert consultants ensure you automate the
            highest-leverage workflows correctly the first time.
          </p>
          <Link
            href="/free-automation-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-axe-dark font-semibold rounded-full hover:bg-axe-blue hover:text-white transition-colors"
          >
            FREE CONSULTATION
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
