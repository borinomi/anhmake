import Link from "next/link";
import { cases } from "@/components/CaseStudies";

export const metadata = {
  title: "AI and Automation | Anhmake",
  description:
    "We analyze your business for opportunities to install AI and automations that slash your costs, scale processes and revenue. 100% done-for-you agency.",
};

const steps = [
  {
    step: "STEP 1",
    title: "We map out your processes",
    desc: "We'll create a visual map of all your systems, manual tasks and apps.",
  },
  {
    step: "STEP 2",
    title: "We find areas to add AI and automate",
    desc: "We audit your workflows to pinpoint opportunities with the highest ROI.",
  },
  {
    step: "STEP 3",
    title: "We build and test",
    desc: "We use a mix of custom code, AI tools, Zapier, Make.com and your tech stack.",
  },
  {
    step: "STEP 4",
    title: "We manage and iterate",
    desc: "Every client we work with grows, so there's always new things to automate.",
  },
];

const useCases = [
  {
    title: "Sales and marketing automation",
    desc: "Content creation, full-funnel automation, lead routing, CRM, outbound, payments, contracts and much more.",
  },
  {
    title: "Image, voice, text recognition and analysis",
    desc: "Analyze and parse documents, biometrics, emotion, facial, products, videos and more to summarize or automate actions.",
  },
  {
    title: "Predictive analytics",
    desc: "Data-driven decision making through risk analytics, demand or inventory forecasting and other future planning tasks.",
  },
  {
    title: "Conversational AI",
    desc: "Prompt engineering, automatic replies and more for customer service, sales, chat bots, front-office and marketing.",
  },
  {
    title: "Project management",
    desc: "We connect all manual, repetitive steps in a process, from task handoff to completion—onboarding, admin, accounting, invoicing.",
  },
  {
    title: "Staff augmentation",
    desc: "Save employees hours a day by automating their most tedious daily tasks. We've even replaced entire teams of virtual assistants.",
  },
  {
    title: "Data silos",
    desc: "We automate data entry, collection, cleansing and reporting from nuanced and silo'd locations for fast and accurate decision making.",
  },
  {
    title: "Customer service",
    desc: "Most customer service questions and responses are similar and repetitive. As a result, most CS tasks can be automated.",
  },
  {
    title: "Connect apps",
    desc: "Most of your apps can be integrated with each-other for instant handoffs of data and consolidation of information.",
  },
];

const technologies = [
  { name: "OpenAI", icon: "/icons/openai.png", desc: "The company that invented ChatGPT and other popular AI models. We're constantly testing its newest innovations." },
  { name: "Claude", icon: "/icons/claude.png", desc: "Anthropic's frontier AI model — one of the most capable and safety-focused AI assistants we use to build intelligent automation workflows." },
  { name: "Google Gemini", icon: "/icons/gemini.png", desc: "Google's official AI project and competitor to Chat GPT." },
  { name: "n8n", icon: "/icons/n8n.png", desc: "A powerful open-source workflow automation tool we use to build complex, scalable automations fully tailored to your business." },
  { name: "Python / JS", icon: "/icons/python.svg", desc: "We also use Python and JavaScript to write custom scripting for more complex workflows." },
];

const whyPoints = [
  {
    title: "You can't automate everything",
    desc: "AI enhances an automated process by allowing you to analyze data, make predictions, make decisions and create things.",
  },
  {
    title: "AI isn't helpful in all scenarios",
    desc: "Every company is nuanced and requires highly-skilled or creative work that AI can't displace.",
  },
  {
    title: "AI requires manual commands",
    desc: "For example, ChatGPT requires manual prompts and editing. We can automate the steps before and after it.",
  },
  {
    title: "Manual commands require people and skill",
    desc: "People create bottlenecks and make errors, causing delays in task-handoffs and inconsistent quality.",
  },
];



const apps = [
  { name: "Gmail", icon: "/icons/gmail.png" },
  { name: "Slack", icon: "/icons/slack.png" },
  { name: "Zoom", icon: "/icons/zoom.png" },
  { name: "Google Drive", icon: "/icons/google-drive.png" },
  { name: "Teams", icon: "/icons/ms-teams.png" },
  { name: "Excel", icon: "/icons/excel.png" },
  { name: "Discord", icon: "/icons/discord.png" },
  { name: "Outlook", icon: "/icons/outlook.png" },
  { name: "Notion", icon: "/icons/notion.png" },
  { name: "Airtable", icon: "/icons/airtable.svg" },
];

export default function AIAutomationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-white pt-24 pb-20 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-axe-dark/20 bg-white text-sm font-medium text-axe-dark mb-8">
            <span className="w-2 h-2 rounded-full bg-axe-blue inline-block" />
            #1 AI Automation Agency
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-axe-dark leading-tight mb-6">
            The #1 AI and<br />Automation Agency
          </h1>
          <p className="text-lg text-axe-dark/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            We combine artificial intelligence with automation to create incredibly efficient processes
            that connect your apps and automate actions between them—replacing manual work for massive
            gains in bandwidth, quality, speed and customer experience. Fully custom and done-for-you.
          </p>
          <Link
            href="/free-automation-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full hover:bg-axe-blue transition-colors duration-200"
          >
            FREE CONSULTATION
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-axe-blue py-14 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-5xl md:text-6xl font-bold mb-3">10,000+</p>
          <p className="text-xl md:text-2xl font-medium opacity-80">
            Hours of <span className="underline underline-offset-4">manual</span> work have been replaced
            with AI and Automation for our clients
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
              How our AI and Automation agency works
            </h2>
            <p className="text-axe-dark/60 max-w-2xl mx-auto">
              We get under the hood of your business and find opportunities to replace the most manual,
              repetitive and expensive bottlenecks with AI-powered, automated processes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 text-center border border-axe-dark/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <span className="inline-block text-xs font-bold tracking-widest text-axe-blue uppercase mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-axe-dark mb-3">{s.title}</h3>
                <p className="text-sm text-axe-dark/60 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
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
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
              The endless use cases of AI and Automation
            </h2>
            <p className="text-axe-dark/60 max-w-2xl mx-auto">
              Our clients make their employees 10X more efficient by taking tedious, repetitive tasks
              off their plate. We are industry agnostic.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-axe-dark/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-axe-blue/10 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d3d8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-axe-dark mb-2">{uc.title}</h3>
                <p className="text-sm text-axe-dark/60 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/free-automation-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full hover:bg-axe-blue transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
              AI and Automation technologies we are experts in
            </h2>
            <p className="text-axe-dark/60 max-w-2xl mx-auto">
              We've built complete processes using every one of these tools. There are countless
              more tools in the market which we have experience with or are capable of integrating.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-axe-dark/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4">
                <div className="h-10 flex items-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="max-h-10 max-w-[140px] w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-axe-dark mb-2">{tech.name}</h3>
                  <p className="text-sm text-axe-dark/60 leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Connections */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
                We connect to all your apps
              </h2>
              <p className="text-axe-dark/60 leading-relaxed">
                Plus thousands more through APIs, custom code and web hooks.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-5 gap-4">
                {apps.map((app, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md border border-axe-dark/5 flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:scale-110 transition-all duration-200">
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-axe-dark/50 font-medium text-center leading-tight">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI + Automation */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <p className="text-xs font-bold tracking-widest text-axe-blue uppercase mb-4">Learn</p>
              <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-6">
                Why AI must be combined with Automation
              </h2>
              <Link
                href="https://www.youtube.com/watch?v=oWzM1xEvCa8"
                target="_blank"
                className="inline-flex items-center gap-2 text-axe-blue font-semibold hover:gap-3 transition-all"
              >
                Video training
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2 space-y-6">
              {whyPoints.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-axe-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1d3d8c" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-axe-dark mb-1">{p.title}</h3>
                    <p className="text-sm text-axe-dark/60 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
              Our clients achieve operational excellence
            </h2>
            <p className="text-axe-dark/60">Hear what they have to say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-axe-dark/5 shadow-sm">
                <p className="text-axe-dark/70 text-sm leading-relaxed mb-6">&ldquo;{c.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-axe-dark text-sm">{c.author}</p>
                  <p className="text-xs text-axe-dark/40">{c.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
