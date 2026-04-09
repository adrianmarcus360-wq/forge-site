"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand */}
          <div>
            <span className="text-[15px] font-semibold tracking-[0.25em] uppercase text-stone">
              Forge
            </span>
            <p className="text-[13px] text-steel/40 mt-3 max-w-xs leading-relaxed">
              Premium AI transformation for manufacturers who care about uptime.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.15em] uppercase text-steel/40 hover:text-teal transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-steel/30 tracking-wide">
            © {new Date().getFullYear()} Forge. All rights reserved.
          </p>
          <p className="text-[11px] text-steel/20 tracking-wide">
            Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
