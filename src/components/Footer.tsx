"use client";
import Link from "next/link";

const COLS = [
  {
    title: "Services",
    links: [
      { label: "Predictive Maintenance", href: "/services" },
      { label: "Smart Factory",          href: "/services" },
      { label: "Quality Intelligence",   href: "/services" },
      { label: "Multi-Plant Model",      href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Industries",   href: "/industries" },
      { label: "Proof",        href: "/proof" },
      { label: "About",        href: "/about" },
      { label: "Contact",      href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0F3A42" }}>
      {/* Final CTA band */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ maxWidth: "600px" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: "20px" }}>
              Get Started
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
              If your plants already know they need help, Forge is built for that moment.
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", flexShrink: 0 }}>
            <Link href="/contact" className="forge-btn-primary" style={{ background: "#FFFFFF", color: "#0F3A42" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#EBF4F6"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#FFFFFF"}
            >Book a Strategy Call</Link>
            <Link href="/contact" className="forge-btn-outline-light">Discuss a Pilot</Link>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div style={{ padding: "60px 48px 48px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="0" y="0" width="22" height="2.5" fill="white"/>
                <rect x="0" y="0" width="2.5" height="22" fill="white"/>
                <rect x="0" y="9.75" width="13" height="2.5" fill="rgba(255,255,255,0.5)"/>
              </svg>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "13px", letterSpacing: "0.22em", textTransform: "uppercase", color: "white" }}>Forge</span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "280px" }}>
              A premium AI transformation firm for manufacturers. Built around outcomes, not experiments.
            </p>
          </div>

          {/* Nav columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "20px" }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map(l => (
                  <Link key={l.label} href={l.href} className="forge-footer-link">{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Forge. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms"].map(l => (
              <Link key={l} href="/contact" className="forge-footer-link" style={{ fontSize: "10px", letterSpacing: "0.05em" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
