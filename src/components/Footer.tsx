import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/how-it-works", label: "How Forge Works" },
  { href: "/proof", label: "Proof" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-graphite text-ivory/80">
      <div className="max-w-wide mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-semibold text-ivory block mb-4">
              Forge
            </span>
            <p className="text-sm leading-relaxed text-ivory/50 max-w-xs">
              Premium AI transformation for manufacturing.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-1">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-ivory/40 mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ivory/60 hover:text-ivory transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-ivory/40 mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="text-sm text-ivory/60 hover:text-ivory transition-colors duration-200"
              >
                Book a strategy call
              </Link>
              <Link
                href="/contact"
                className="text-sm text-ivory/60 hover:text-ivory transition-colors duration-200"
              >
                Discuss a pilot
              </Link>
              <span className="text-sm text-ivory/40 mt-2">
                LinkedIn →
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-ivory/30">
            © {new Date().getFullYear()} Forge. All rights reserved.
          </p>
          <p className="text-xs text-ivory/30">
            Premium AI transformation for manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
}
