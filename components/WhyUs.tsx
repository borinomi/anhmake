import { useTranslations } from "next-intl";

const pointKeys = [
  { titleKey: "point1Title", bodyKey: "point1Body" },
  { titleKey: "point2Title", bodyKey: "point2Body" },
  { titleKey: "point3Title", bodyKey: "point3Body" },
  { titleKey: "point4Title", bodyKey: "point4Body" },
];

export default function WhyUs() {
  const t = useTranslations("WhyUs");
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark leading-tight">
            {t("heading1")}{" "}
            <span className="text-axe-blue">{t("heading2")}</span>{" "}
            {t("heading3")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pointKeys.map((point, i) => (
            <div key={i} className="flex gap-5 p-7 bg-white border border-gray-200 rounded-2xl hover:shadow-sm transition-shadow duration-300">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-axe-blue/10 text-axe-blue shrink-0 mt-0.5">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-axe-dark text-base mb-2">
                  {t(point.titleKey as never)}
                </h3>
                <p className="text-sm text-axe-dark/65 leading-relaxed">
                  {t(point.bodyKey as never)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
