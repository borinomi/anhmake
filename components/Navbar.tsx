"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    label: "Services",
    href: "#",
    dropdown: [
      { label: "AI and Automation", href: "/ai-automation" },
      { label: "n8n Automation", href: "/n8n-automation" },
    ],
  },
  {
    label: "Results",
    href: "#",
    dropdown: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Client Reviews", href: "/client-reviews" },
    ],
  },
  { label: "About Us", href: "/about", dropdown: [] },
  {
    label: "Resources",
    href: "#",
    dropdown: [
      { label: "Blog", href: "#" },
      { label: "Podcast", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-axe-dark text-lg shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Anhmake"
              width={32}
              height={32}
              className="object-contain"
            />
            Anhmake
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown.length > 0 && handleDropdownEnter(link.label)}
                onMouseLeave={handleDropdownLeave}
              >
                {link.dropdown.length > 0 ? (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-axe-dark hover:text-axe-blue transition-colors rounded-md"
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="menu"
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-axe-dark hover:text-axe-blue transition-colors rounded-md"
                  >
                    {link.label}
                  </Link>
                )}
                {link.dropdown.length > 0 && openDropdown === link.label && (
                  <div
                    role="menu"
                    className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50"
                    onMouseEnter={() => handleDropdownEnter(link.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm text-axe-dark hover:bg-axe-bg hover:text-axe-blue transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/free-automation-consultation"
              className="inline-flex items-center px-5 py-2.5 bg-axe-dark text-white text-sm font-semibold rounded-full hover:bg-axe-blue transition-colors duration-200"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-axe-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200" role="navigation">
            {navLinks.map((link) => (
              <div key={link.label} className="py-1">
                <Link
                  href={link.href}
                  className="block px-2 py-2 text-sm font-medium text-axe-dark hover:text-axe-blue"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-1.5 text-sm text-gray-600 hover:text-axe-blue"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-3 px-2">
              <Link
                href="/free-automation-consultation"
                className="block w-full text-center px-5 py-2.5 bg-axe-dark text-white text-sm font-semibold rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
