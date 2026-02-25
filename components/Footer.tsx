import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "AI and Automation", href: "#" },
  { label: "Project Management and CRMs", href: "#" },
];

const companyLinks = [
  { label: "Case Studies", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Podcast", href: "#" },
];

const socialLinks = [
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.726-8.84L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.52.85-6.374 2.495-8.423C5.845 1.339 8.598.157 12.18.133h.013c2.311.016 4.378.639 6.146 1.851 1.71 1.176 2.98 2.875 3.774 5.051l-2.202.806c-.615-1.683-1.589-3.014-2.896-3.957-1.336-.963-2.967-1.457-4.847-1.469-2.917.02-5.1.921-6.488 2.679C4.3 6.879 3.672 9.243 3.672 12.068c0 2.822.628 5.186 1.867 7.027 1.39 1.757 3.574 2.659 6.493 2.679 2.587-.018 4.39-.675 5.356-1.953.772-1.02 1.163-2.594 1.163-4.68v-.004c-.02-.014-.042-.027-.063-.041-.67 1.007-1.62 1.559-2.836 1.641-.27.018-.54.027-.808.027-1.58 0-2.97-.476-3.913-1.34-.992-.909-1.494-2.184-1.458-3.692.034-1.449.537-2.662 1.455-3.504.918-.841 2.2-1.271 3.714-1.24 1.174.023 2.136.345 2.867.959.284.238.53.506.74.799.118-.558.181-1.152.181-1.773v-.252l2.163.054v.198c0 1.052-.126 2.047-.375 2.963.274.714.413 1.502.413 2.346 0 2.603-.545 4.56-1.62 5.818-1.248 1.462-3.278 2.204-6.034 2.204zm.55-12.387c-.875-.017-1.576.207-2.084.665-.488.44-.74 1.077-.762 1.892-.022.843.209 1.49.687 1.923.489.443 1.2.668 2.11.668.206 0 .413-.01.617-.029.914-.064 1.57-.508 1.952-1.32.113-.24.195-.5.248-.774-.338-.693-.549-1.489-.549-2.35 0-.169.009-.336.026-.501a3.437 3.437 0 00-.245-.174c-.394-.256-.885-.389-1.484-.4h-.516z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-axe-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-white text-lg mb-4"
            >
              <Image
                src="/logo.png"
                alt="Anhmake"
                width={32}
                height={32}
                className="object-contain brightness-0 invert"
              />
              Anhmake
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
            We audit your business, organize your operations and implement AI automations to reduce manual work and help your work effectively.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-axe-blue hover:text-white transition-colors duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2025 Anhmake. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
