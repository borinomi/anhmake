"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import { stats } from "@/components/StatsBar";
import Technology from "@/components/Technology";

const phases = [
  { labelKey: "phase1Label", titleKey: "phase1Title", descKey: "phase1Desc" },
  { labelKey: "phase2Label", titleKey: "phase2Title", descKey: "phase2Desc" },
  { labelKey: "phase3Label", titleKey: "phase3Title", descKey: "phase3Desc" },
  { labelKey: "phase4Label", titleKey: "phase4Title", descKey: "phase4Desc" },
];

const howPoints = [
  "why1",
  "why2",
  "why3",
  "why4",
];

const faqs = [
  { qKey: "faq1Q", aKey: "faq1A" },
  { qKey: "faq2Q", aKey: "faq2A" },
  { qKey: "faq3Q", aKey: "faq3A" },
  { qKey: "faq4Q", aKey: "faq4A" },
  { qKey: "faq5Q", aKey: "faq5A" },
];

export default function N8nAutomationContent() {
  const t = useTranslations("N8nAutomation");

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-white pt-24 pb-20 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-axe-dark/20 bg-white text-sm font-medium text-axe-dark mb-8">
            <span className="w-2 h-2 rounded-full bg-axe-blue inline-block" />
            {t("heroBadge")}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-axe-dark leading-tight mb-6">
            {t("heroTitle")}
            <br />
            {t("heroTitle2")}
          </h1>
          <p className="text-lg text-axe-dark/60 max-w-2xl mx-auto mb-10 leading-relaxed">
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
      <section className="bg-axe-blue py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/70 font-medium">{t(stat.key as "workflows" | "clients" | "hours")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach / Phases */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-axe-blue uppercase mb-3">{t("approachBadge")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-axe-dark mb-4">
              {t("approachTitle")}
            </h2>
            <p className="text-axe-dark/60 max-w-2xl mx-auto leading-relaxed">
              {t("approachDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((p, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 border border-axe-dark/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <span className="inline-block text-xs font-bold tracking-widest text-axe-blue uppercase mb-4">
                  {t(p.labelKey as never)}
                </span>
                <h3 className="text-lg font-bold text-axe-dark mb-3">{t(p.titleKey as never)}</h3>
                <p className="text-sm text-axe-dark/60 leading-relaxed">{t(p.descKey as never)}</p>
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
              {t("approachCta")}
            </Link>
          </div>
        </div>
      </section>

      <Team />
      <CaseStudies />

      {/* How We Outperform */}
      <section className="py-24 bg-axe-dark text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-2/5">
              <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">{t("whyBadge")}</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {t("whyTitle")}
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
                  <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">{t(point as never)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Technology />

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
            <div>
              <p className="text-xs font-bold tracking-widest text-axe-blue uppercase mb-3">{t("faqsBadge")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-axe-dark">{t("faqsTitle")}</h2>
            </div>
            <Link
              href="/free-automation-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full hover:bg-axe-blue transition-colors shrink-0"
            >
              {t("faqsCta")}
            </Link>
          </div>
          <div className="divide-y divide-axe-dark/10">
            {faqs.map((faq, i) => (
              <div key={i} className="py-8">
                <h3 className="font-bold text-axe-dark text-lg mb-3">{t(faq.qKey as never)}</h3>
                <p className="text-axe-dark/60 leading-relaxed text-sm whitespace-pre-line">{t(faq.aKey as never)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
