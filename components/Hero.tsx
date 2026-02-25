import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-36">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-axe-dark leading-tight tracking-tight mb-6">
          {t("heading1")}{" "}
          <span className="inline-block bg-axe-blue text-white px-3 py-1 rounded-md leading-snug">
            {t("heading2")}
          </span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-axe-dark/70 max-w-2xl mx-auto leading-relaxed">
          {t("subtext")}
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/free-automation-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-axe-dark text-white font-semibold rounded-full text-base hover:bg-axe-blue transition-colors duration-200 shadow-lg"
          >
            {t("cta")}
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-axe-blue/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-axe-blue/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}
