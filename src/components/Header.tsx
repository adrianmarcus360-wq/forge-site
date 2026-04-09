"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "SERVICES", href: "/services" },
  { label: "HOW IT WORKS", href: "/how-it-works" },
  { label: "INDUSTRIES", href: "/industries" },
  { label: "PROOF", href: "/proof" },
  { label: "ABOUT", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "white", boxShadow: scrolled ? "0 1px 0 #E5E5E5" : "none", transition: "box-shadow 0.3s" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" fill="#131313"/>
            <text x="6" y="20" fill="white" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: "bold", fontSize: "16px" }}>F</text>
          </svg>
          <span style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "18px", color: "#131313", letterSpacing: "-0.5px" }}>Forge</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hidden lg:flex">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#131313", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.5"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
            >{l.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:flex" style={{ alignItems: "center", gap: "16px" }}>
          <Link href="/contact" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "14px", color: "white", background: "#131313", padding: "10px 20px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            Book Strategy Call
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, background: "white" }}>
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px" }}>
          <span style={{ display: "block", width: "20px", height: "1.5px", background: "#131313", transition: "all 0.2s", transform: mobileOpen ? "rotate(45deg) translateY(6.5px)" : "none" }}/>
          <span style={{ display: "block", width: "20px", height: "1.5px", background: "#131313", opacity: mobileOpen ? 0 : 1 }}/>
          <span style={{ display: "block", width: "20px", height: "1.5px", background: "#131313", transition: "all 0.2s", transform: mobileOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }}/>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden nav-overlay" style={{ background: "white", borderTop: "1px solid #E5E5E5", padding: "24px 40px 32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "14px", letterSpacing: "0.06em", color: "#131313", textDecoration: "none" }}>{l.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "14px", color: "white", background: "#131313", padding: "12px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}>
              Book Strategy Call
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, background: "white" }}>
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
