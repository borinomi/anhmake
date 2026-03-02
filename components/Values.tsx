"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const quotes = [
  {
    authorKey: "quote1Author",
    roleKey: "quote1Role",
    initialsKey: "quote1Initials",
    textKey: "quote1Text",
  },
  {
    authorKey: "quote2Author",
    roleKey: "quote2Role",
    initialsKey: "quote2Initials",
    textKey: "quote2Text",
  },
];

export default function Values() {
  const [active, setActive] = useState(0);
  const t = useTranslations("Values");
  const current = quotes[active];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-axe-dark">
            {t("heading")}
          </h2>
        </div>

        {/* Slider */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 min-h-[260px] flex flex-col justify-between shadow-sm">
          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-axe-dark leading-relaxed mb-8">
            &ldquo;{t(current.textKey as never)}&rdquo;
          </blockquote>

          {/* Author + Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-axe-blue/10 border border-axe-blue/20 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-axe-blue">
                  {t(current.initialsKey as never)}
                </span>
              </div>
              <div>
                <p className="font-bold text-axe-dark text-sm">
                  {t(current.authorKey as never)}
                </p>
                <p className="text-xs text-axe-dark/50">{t(current.roleKey as never)}</p>
              </div>
            </div>

            {/* Dots + arrows */}
            <div className="flex items-center gap-3">
              {/* Dots */}
              <div className="flex gap-1.5" role="tablist" aria-label="Quote navigation">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Quote ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === active
                        ? "bg-axe-dark w-5"
                        : "bg-axe-dark/20 hover:bg-axe-dark/40"
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <button
                onClick={() =>
                  setActive((prev) => (prev - 1 + quotes.length) % quotes.length)
                }
                aria-label="Previous quote"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-axe-dark hover:text-white hover:border-axe-dark transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 4L6 8l4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setActive((prev) => (prev + 1) % quotes.length)
                }
                aria-label="Next quote"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-axe-dark hover:text-white hover:border-axe-dark transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
