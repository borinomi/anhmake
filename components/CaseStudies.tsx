import { useTranslations } from "next-intl";

export const cases = [
  {
    industryKey: "case1Industry",
    headlineKey: "case1Headline",
    client: "Hoa Binh",
    authorKey: "case1Author",
    whatWeDidKeys: ["case1Did1", "case1Did2", "case1Did3"],
    quoteKey: "case1Quote",
  },
  {
    industryKey: "case2Industry",
    headlineKey: "case2Headline",
    client: "YS Corp",
    authorKey: "case2Author",
    whatWeDidKeys: ["case2Did1", "case2Did2", "case2Did3"],
    quoteKey: "case2Quote",
  },
  {
    industryKey: "case3Industry",
    headlineKey: "case3Headline",
    client: "WeGrid",
    authorKey: "case3Author",
    whatWeDidKeys: ["case3Did1", "case3Did2", "case3Did3"],
    quoteKey: "case3Quote",
  },
];

export default function CaseStudies() {
  const t = useTranslations("CaseStudies");
  return (
    <section id="case-studies" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
              {t("badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight">
              {t("heading")}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.client}
              className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300"
            >
              <span className="self-start inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-axe-dark">
                {t(c.industryKey as never)}
              </span>
              <h3 className="text-xl font-bold text-axe-dark leading-tight">
                {t(c.headlineKey as never)}
              </h3>
              <div>
                <p className="text-xs font-bold text-axe-dark/40 uppercase tracking-widest mb-3">
                  {t("whatWeDid")}
                </p>
                <ul className="space-y-2">
                  {c.whatWeDidKeys.map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm text-axe-dark/70">
                      <svg className="w-4 h-4 text-axe-blue shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t(key as never)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200" />
              <blockquote className="text-sm text-axe-dark/70 leading-relaxed italic">
                &ldquo;{t(c.quoteKey as never)}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-axe-dark">{t(c.authorKey as never)}</p>
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
