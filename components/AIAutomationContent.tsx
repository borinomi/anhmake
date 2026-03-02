"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

const steps = [
  { stepKey: "step1Label", titleKey: "step1Title", descKey: "step1Desc" },
  { stepKey: "step2Label", titleKey: "step2Title", descKey: "step2Desc" },
  { stepKey: "step3Label", titleKey: "step3Title", descKey: "step3Desc" },
  { stepKey: "step4Label", titleKey: "step4Title", descKey: "step4Desc" },
];

const useCases = [
  { titleKey: "useCase1Title", descKey: "useCase1Desc" },
  { titleKey: "useCase2Title", descKey: "useCase2Desc" },
  { titleKey: "useCase3Title", descKey: "useCase3Desc" },
  { titleKey: "useCase4Title", descKey: "useCase4Desc" },
  { titleKey: "useCase5Title", descKey: "useCase5Desc" },
  { titleKey: "useCase6Title", descKey: "useCase6Desc" },
];

const technologies = [
  { nameKey: "tech1Name", icon: "/icons/openai.png", descKey: "tech1Desc" },
  { nameKey: "tech2Name", icon: "/icons/claude.png", descKey: "tech2Desc" },
  { nameKey: "tech3Name", icon: "/icons/gemini.png", descKey: "tech3Desc" },
  { nameKey: "tech4Name", icon: "/icons/n8n.png", descKey: "tech4Desc" },
  { nameKey: "tech5Name", icon: "/icons/python.svg", descKey: "tech5Desc" },
];

const whyPoints = [
  { titleKey: "why1Title", descKey: "why1Desc" },
  { titleKey: "why2Title", descKey: "why2Desc" },
  { titleKey: "why3Title", descKey: "why3Desc" },
  { titleKey: "why4Title", descKey: "why4Desc" },
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

export default function AIAutomationContent() {
  const t = useTranslations("AIAutomation");

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-white pt-24 pb-20 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-axe-dark/20 bg-white text-sm font-medium text-axe-dark mb-8">
            <span className="w-2 h-2 rounded-full bg-axe-blue inline-block" />
            {t("heroBadge")}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-axe-dark leading-tight mb-6 whitespace-pre-line">
            {t("heroTitle")}
            <br />
            {t("heroTitle2")}
          </h1>
          <p className="text-lg text-axe-dark/60 max-w-2xl mx-auto mb-10 leading-relaxed whitespace-pre-line">
            {t("heroDesc")}
          </p>
          <Link
            href="/free-automation-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full hover:bg-axe-blue transition-colors duration-200"
          >
            {t("heroCta")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-axe-blue py-14 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-5xl md:text-6xl font-bold mb-3 whitespace-pre-line">{t("statsTitle")}</p>
          <p className="text-xl md:text-2xl font-medium opacity-80 whitespace-pre-line">
            {t.rich("statsDesc", {
              highlight: (chunks) => <span className="underline underline-offset-4">{chunks}</span>,
            })}
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4 whitespace-pre-line">
              {t("howTitle")}
            </h2>
            <p className="text-axe-dark/60 max-w-2xl mx-auto whitespace-pre-line">
              {t("howDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 text-center border border-axe-dark/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <span className="inline-block text-xs font-bold tracking-widest text-axe-blue uppercase mb-4">
                  {t(s.stepKey as never)}
                </span>
                <h3 className="text-lg font-bold text-axe-dark mb-3">{t(s.titleKey as never)}</h3>
                <p className="text-sm text-axe-dark/60 leading-relaxed">{t(s.descKey as never)}</p>
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
              {t("howCta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
              {t("useCasesTitle")}
            </h2>
            <p className="text-axe-dark/60 max-w-2xl mx-auto">
              {t("useCasesDesc")}
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
                <h3 className="text-base font-bold text-axe-dark mb-2">{t(uc.titleKey as never)}</h3>
                <p className="text-sm text-axe-dark/60 leading-relaxed">{t(uc.descKey as never)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/free-automation-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full hover:bg-axe-blue transition-colors"
            >
              {t("useCasesCta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
              {t("techTitle")}
            </h2>
            <p className="text-axe-dark/60 max-w-2xl mx-auto">
              {t("techDesc")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-axe-dark/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4">
                <div className="h-10 flex items-center">
                  <img
                    src={tech.icon}
                    alt={t(tech.nameKey as never)}
                    className="max-h-10 max-w-[140px] w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-axe-dark mb-2">{t(tech.nameKey as never)}</h3>
                  <p className="text-sm text-axe-dark/60 leading-relaxed">{t(tech.descKey as never)}</p>
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
                {t("appsTitle")}
              </h2>
              <p className="text-axe-dark/60 leading-relaxed">
                {t("appsDesc")}
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
              <p className="text-xs font-bold tracking-widest text-axe-blue uppercase mb-4">{t("whyBadge")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-6">
                {t("whyTitle")}
              </h2>
              <Link
                href="https://youtu.be/3InbsACC68o"
                target="_blank"
                className="inline-flex items-center gap-2 text-axe-blue font-semibold hover:gap-3 transition-all"
              >
                {t("whyVideo")}
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
                    <h3 className="font-bold text-axe-dark mb-1">{t(p.titleKey as never)}</h3>
                    <p className="text-sm text-axe-dark/60 leading-relaxed">{t(p.descKey as never)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
