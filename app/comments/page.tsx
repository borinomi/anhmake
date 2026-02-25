"use client";

import { useState } from "react";
import { reviews } from "@/components/Reviews";

const CARDS_VISIBLE = 3;

export default function ClientReviewsPage() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / CARDS_VISIBLE);
  const visible = reviews.slice(
    page * CARDS_VISIBLE,
    page * CARDS_VISIBLE + CARDS_VISIBLE
  );

  return (
    <main className="pt-16">
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-axe-dark">
                Comments
              </h1>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm text-axe-dark/50">
                {page + 1} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Previous reviews"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-axe-dark hover:text-white hover:border-axe-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                aria-label="Next reviews"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-axe-dark hover:text-white hover:border-axe-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((review, i) => (
              <article
                key={`${page}-${i}`}
                className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <blockquote className="text-axe-dark/80 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-axe-blue/10 border border-axe-blue/20 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-axe-dark">{review.reviewer}</p>
                    <p className="text-xs text-axe-dark/50">{review.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Page dots */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Review pages">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === page}
                aria-label={`Page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === page ? "bg-axe-dark w-6" : "bg-axe-dark/20 w-2 hover:bg-axe-dark/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
