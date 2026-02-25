import Link from "next/link";
import { useTranslations } from "next-intl";

const rowKeys = [
  { problemKey: "row1Problem", solutionKey: "row1Solution", outcomeKey: "row1Outcome" },
  { problemKey: "row2Problem", solutionKey: "row2Solution", outcomeKey: "row2Outcome" },
  { problemKey: "row3Problem", solutionKey: "row3Solution", outcomeKey: "row3Outcome" },
  { problemKey: "row4Problem", solutionKey: "row4Solution", outcomeKey: "row4Outcome" },
  { problemKey: "row5Problem", solutionKey: "row5Solution", outcomeKey: "row5Outcome" },
  { problemKey: "row6Problem", solutionKey: "row6Solution", outcomeKey: "row6Outcome" },
  { problemKey: "row7Problem", solutionKey: "row7Solution", outcomeKey: "row7Outcome" },
];

export default function Outcomes() {
  const t = useTranslations("Outcomes");
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight">
            {t("heading1")}{" "}
            <span className="text-axe-blue">{t("heading2")}</span>
          </h2>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-axe-dark text-white">
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest">{t("colProblems")}</div>
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest border-l border-white/10">{t("colSolutions")}</div>
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest border-l border-white/10">{t("colOutcomes")}</div>
          </div>
          {rowKeys.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}>
              <div className="px-6 py-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 shrink-0">
                  <svg className="w-3 h-3 text-red-500" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-sm text-axe-dark/70">{t(row.problemKey as never)}</span>
              </div>
              <div className="px-6 py-4 flex items-center border-l border-gray-100">
                <span className="text-sm text-axe-dark font-medium">{t(row.solutionKey as never)}</span>
              </div>
              <div className="px-6 py-4 flex items-center gap-3 border-l border-gray-100">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 shrink-0">
                  <svg className="w-3 h-3 text-green-600" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm text-axe-dark font-medium">{t(row.outcomeKey as never)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
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
      </div>
    </section>
  );
}
