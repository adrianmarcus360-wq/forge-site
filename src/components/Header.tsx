"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  { label: "Services",     href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries",   href: "/industries" },
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
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      transition: "background 0.35s, backdrop-filter 0.35s, border-color 0.35s",
    }}>
      <div style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "0 40px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        gap: "40px",
      }}>

        {/* Wordmark */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", marginRight: "auto" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="0" y="0" width="20" height="2.5" fill="white"/>
            <rect x="0" y="0" width="2.5" height="20" fill="white"/>
            <rect x="0" y="8.75" width="12" height="2.5" fill="rgba(255,107,0,0.9)"/>
          </svg>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.18em",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}>Forge</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
          {NAV.map(l => (
            <Link key={l.href} href={l.href} className="forge-nav-link">{l.label}</Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "#ff6b00",
            padding: "10px 20px",
            textDecoration: "none",
            transition: "background 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#e05e00"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#ff6b00"}
        >
          Book alignment session
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px", marginLeft: "auto" }}
          aria-label="Menu"
        >
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "white", transition: "all 0.22s", transform: open ? "rotate(45deg) translateY(6.5px)" : "none" }}/>
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "white", opacity: open ? 0 : 1, transition: "opacity 0.15s" }}/>
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "white", transition: "all 0.22s", transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none" }}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mobile-nav" style={{
          background: "rgba(8,8,8,0.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "24px 40px 36px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {NAV.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  transition: "color 0.2s",
                }}
              >{l.label}</Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                display: "inline-flex",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                color: "#080808",
                background: "#FFFFFF",
                padding: "11px 20px",
                textDecoration: "none",
                alignSelf: "flex-start",
                marginTop: "20px",
              }}
            >Start a pilot</Link>
          </div>
        </div>
      )}
    </header>
  );
}
