"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  en: "EN",
  ko: "KO",
  ja: "JA",
  vi: "VI",
};

export default function Navbar() {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const langTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect current locale from pathname
  const currentLocale = routing.locales.find((loc) => pathname.startsWith(`/${loc}`)) ?? routing.defaultLocale;

  const navLinks = [
    {
      label: t("services"),
      href: "#",
      dropdown: [
        { label: t("aiAutomation"), href: "/ai-automation" },
        { label: t("n8nAutomation"), href: "/n8n-automation" },
      ],
    },
    {
      label: t("results"),
      href: "#",
      dropdown: [
        { label: t("caseStudies"), href: "/case-studies" },
        { label: t("clientComments"), href: "/comments" },
      ],
    },
    { label: t("aboutUs"), href: "/about", dropdown: [] },
  ];

  const handleDropdownEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleLangEnter = () => {
    if (langTimer.current) clearTimeout(langTimer.current);
    setLangOpen(true);
  };

  const handleLangLeave = () => {
    langTimer.current = setTimeout(() => setLangOpen(false), 150);
  };

  const switchLocale = (locale: string) => {
    // Replace current locale prefix in pathname
    const segments = pathname.split("/");
    const isLocalePrefix = routing.locales.includes(segments[1] as "en" | "ko" | "ja" | "vi");
    if (isLocalePrefix) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    const newPath = segments.join("/") || "/";
    router.push(newPath);
    setLangOpen(false);
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
          <Link href="/" className="flex items-center gap-2 font-semibold text-axe-dark text-lg shrink-0">
            <Image src="/logo.png" alt="Anhmake" width={32} height={32} className="object-contain" />
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
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                      viewBox="0 0 16 16" fill="none" aria-hidden="true"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <Link href={link.href} className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-axe-dark hover:text-axe-blue transition-colors rounded-md">
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
                      <Link key={item.label} href={item.href} role="menuitem" className="block px-4 py-2.5 text-sm text-axe-dark hover:bg-axe-bg hover:text-axe-blue transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Language switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div
              className="relative"
              onMouseEnter={handleLangEnter}
              onMouseLeave={handleLangLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-axe-dark hover:text-axe-blue transition-colors rounded-md border border-gray-200">
                🌐 {localeLabels[currentLocale]}
                <svg className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {langOpen && (
                <div
                  className="absolute top-full right-0 mt-1 w-32 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50"
                  onMouseEnter={handleLangEnter}
                  onMouseLeave={handleLangLeave}
                >
                  {routing.locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => switchLocale(locale)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-axe-bg hover:text-axe-blue ${
                        locale === currentLocale ? "font-bold text-axe-blue" : "text-axe-dark"
                      }`}
                    >
                      {locale === "en" && "🇺🇸 English"}
                      {locale === "ko" && "🇰🇷 한국어"}
                      {locale === "ja" && "🇯🇵 日本語"}
                      {locale === "vi" && "🇻🇳 Tiếng Việt"}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/free-automation-consultation"
              className="inline-flex items-center px-5 py-2.5 bg-axe-dark text-white text-sm font-semibold rounded-full hover:bg-axe-blue transition-colors duration-200"
            >
              {t("freeConsultation")}
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
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200" role="navigation">
            {navLinks.map((link) => (
              <div key={link.label} className="py-1">
                <Link href={link.href} className="block px-2 py-2 text-sm font-medium text-axe-dark hover:text-axe-blue" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
                {link.dropdown.map((item) => (
                  <Link key={item.label} href={item.href} className="block px-4 py-1.5 text-sm text-gray-600 hover:text-axe-blue" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            {/* Mobile language switcher */}
            <div className="px-2 pt-2 pb-1">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Language</p>
              <div className="flex gap-2 flex-wrap">
                {routing.locales.map((locale) => (
                  <button
                    key={locale}
                    onClick={() => { switchLocale(locale); setMobileOpen(false); }}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      locale === currentLocale ? "bg-axe-blue text-white border-axe-blue" : "text-axe-dark border-gray-200 hover:border-axe-blue"
                    }`}
                  >
                    {locale === "en" && "🇺🇸 EN"}
                    {locale === "ko" && "🇰🇷 KO"}
                    {locale === "ja" && "🇯🇵 JA"}
                    {locale === "vi" && "🇻🇳 VI"}
                  </button>
                ))}
              </div>
            </div>
            <div className="pt-3 px-2">
              <Link
                href="/free-automation-consultation"
                className="block w-full text-center px-5 py-2.5 bg-axe-dark text-white text-sm font-semibold rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                {t("freeConsultation")}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
