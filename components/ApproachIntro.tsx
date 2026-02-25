import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ApproachIntro() {
  const t = useTranslations("ApproachIntro");
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
          {t("badge")}
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight mb-6">
          {t("heading1")}{" "}
          <span className="text-axe-blue">{t("heading2")}</span>{" "}
          {t("heading3")}
        </h2>
        <p className="text-lg text-axe-dark/70 leading-relaxed max-w-2xl mx-auto mb-10">
          {t("description")}
        </p>
        <Link
          href="/free-automation-consultation"
          className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full text-base hover:bg-axe-blue transition-colors duration-200"
        >
          {t("cta")}
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
