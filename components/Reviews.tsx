"use client";

import { useState } from "react";

const reviews = [
  {
    quote: "Anhmake did great work.",
    reviewer: "Founder & CEO",
    company: "Advertising & Marketing Company",
    rating: 5,
  },
  {
    quote: "Their professionalism stood out above anything else.",
    reviewer: "Owner",
    company: "BK Accounting Group LLC",
    rating: 5,
  },
  {
    quote: "They provided an amazing service.",
    reviewer: "CEO",
    company: "Social Media Marketing Agency",
    rating: 5,
  },
  {
    quote:
      "I was impressed by the level of personalization and attention to detail they brought to our project.",
    reviewer: "Engineering Manager",
    company: "Insurance Company",
    rating: 5,
  },
  {
    quote: "The automations that they build are amazing.",
    reviewer: "Owner",
    company: "Gulf Coast Limb and Brace",
    rating: 5,
  },
  {
    quote:
      "Their ability to create automated solutions that saved us dozens of hours per week was remarkable.",
    reviewer: "Executive",
    company: "Proven Marketing Solutions",
    rating: 5,
  },
  {
    quote: "They delivered what they promised, on time and on budget.",
    reviewer: "Managing Partner",
    company: "Stonegate Legal Services",
    rating: 5,
  },
  {
    quote: "They were very responsive and knowledgeable throughout the project.",
    reviewer: "Owner",
    company: "J Signs and Graphics",
    rating: 5,
  },
  {
    quote:
      "They had excellent communication and kept us informed every step of the way.",
    reviewer: "IT",
    company: "Zoweh",
    rating: 5,
  },
  {
    quote:
      "Their expertise, coupled with exceptional customer service, made this one of our best vendor experiences.",
    reviewer: "Executive",
    company: "Web Brilliant Company",
    rating: 5,
  },
  {
    quote:
      "We're impressed with their knowledge of automation and how they applied it to our specific industry.",
    reviewer: "CEO & Founder",
    company: "Client Acquisition Firm",
    rating: 5,
  },
  {
    quote:
      "Service delivery was great and exceeded our expectations on every metric.",
    reviewer: "Executive",
    company: "The Growth Center",
    rating: 5,
  },
  {
    quote:
      "What I find most impressive is that a company like Anhmake exists! They completely changed how we operate.",
    reviewer: "VP of Operations",
    company: "Cleverly",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const CARDS_VISIBLE = 3;

export default function Reviews() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / CARDS_VISIBLE);
  const visible = reviews.slice(
    page * CARDS_VISIBLE,
    page * CARDS_VISIBLE + CARDS_VISIBLE
  );

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 border border-axe-dark/20 rounded-full text-xs font-semibold text-axe-dark tracking-wider uppercase bg-white">
              Clutch Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-axe-dark">
              Anhmake Clutch Reviews
            </h2>
            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-5xl font-bold text-axe-dark">4.7</span>
              <div>
                <StarRating count={5} />
                <p className="text-sm text-axe-dark/50 mt-1">
                  13 verified reviews
                </p>
              </div>
            </div>
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
                setPage((p) => Math.min(totalPages - 1, p + 1))
              }
              disabled={page >= totalPages - 1}
              aria-label="Next reviews"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-axe-dark hover:text-white hover:border-axe-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((review, i) => (
            <article
              key={`${page}-${i}`}
              className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <StarRating count={review.rating} />

              <blockquote className="text-axe-dark/80 text-sm leading-relaxed flex-1 italic">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full bg-axe-blue/10 border border-axe-blue/20 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-axe-dark">
                    {review.reviewer}
                  </p>
                  <p className="text-xs text-axe-dark/50">{review.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Page dots */}
        <div
          className="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Review pages"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === page}
              aria-label={`Page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === page
                  ? "bg-axe-dark w-6"
                  : "bg-axe-dark/20 w-2 hover:bg-axe-dark/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
