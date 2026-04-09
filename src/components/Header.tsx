"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  { label: "Services",     href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries",   href: "/industries" },
  { label: "Proof",        href: "/proof" },
  { label: "About",        href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? "rgba(244,241,235,0.95)" : "rgba(244,241,235,0)",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid #D4D0C8" : "1px solid transparent",
      transition: "all 0.35s ease",
    }}>
      <div style={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "0 48px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        {/* Wordmark */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <rect x="0" y="0" width="22" height="2.5" fill="#1C1C1A"/>
            <rect x="0" y="0" width="2.5" height="22" fill="#1C1C1A"/>
            <rect x="0" y="9.75" width="13" height="2.5" fill="#1B5E6B"/>
          </svg>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 400,
            fontSize: "13px",
            letterSpacing: "0.22em",
            color: "#1C1C1A",
            textTransform: "uppercase",
          }}>Forge</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: "36px" }}>
          {NAV.map(l => (
            <Link key={l.href} href={l.href} className="forge-nav-link">{l.label}</Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "14px" }}>
          <Link href="/contact" className="forge-btn-primary" style={{ fontSize: "12px" }}>
            Book a Strategy Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px" }}
          aria-label="Menu"
        >
          <span style={{ display: "block", width: "20px", height: "1.5px", background: "#1C1C1A", transition: "all 0.2s", transform: open ? "rotate(45deg) translateY(6.5px)" : "none" }}/>
          <span style={{ display: "block", width: "20px", height: "1.5px", background: "#1C1C1A", opacity: open ? 0 : 1 }}/>
          <span style={{ display: "block", width: "20px", height: "1.5px", background: "#1C1C1A", transition: "all 0.2s", transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none" }}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mobile-nav" style={{
          background: "#F4F1EB",
          borderTop: "1px solid #D4D0C8",
          padding: "28px 48px 36px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {NAV.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#1C1C1A",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >{l.label}</Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="forge-btn-primary"
              style={{ alignSelf: "flex-start", marginTop: "8px" }}
            >Book a Strategy Call</Link>
          </div>
        </div>
      )}
    </header>
  );
}
