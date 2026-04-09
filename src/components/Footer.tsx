"use client";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#090909" }}>
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
          <div>
            <p style={{ fontFamily: "Fragment Mono, monospace", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "16px" }}>Ready to transform your operations?</p>
            <h2 style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", color: "white", letterSpacing: "-1.5px", lineHeight: 1.1, maxWidth: "520px" }}>Start the conversation</h2>
          </div>
          <Link href="/contact" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "15px", color: "#131313", background: "white", padding: "14px 28px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            Book Strategy Call
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, background: "#131313" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
      </div>

      <div style={{ padding: "60px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "48px" }}>
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="white"/><text x="6" y="20" fill="#090909" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: "bold", fontSize: "16px" }}>F</text></svg>
              <span style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "18px", color: "white", letterSpacing: "-0.5px" }}>Forge</span>
            </div>
            <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: "1.6", maxWidth: "300px" }}>AI transformation built for the plant floor. We help manufacturing leaders turn operational data into measurable competitive advantage.</p>
          </div>
          {[
            { title: "Services", links: [["AI Strategy", "/services"], ["Process AI", "/services"], ["Predictive Maintenance", "/services"], ["Quality & Compliance", "/services"], ["Supply Chain AI", "/services"]] },
            { title: "Company", links: [["How It Works", "/how-it-works"], ["Industries", "/industries"], ["Proof", "/proof"], ["About", "/about"], ["Contact", "/contact"]] },
          ].map(col => (
            <div key={col.title}>
              <p style={{ fontFamily: "Fragment Mono, monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} style={{ fontFamily: "Satoshi, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "white"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}
                  >{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: "1200px", margin: "40px auto 0", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <p style={{ fontFamily: "Fragment Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>\u00A9 {year} Forge. All rights reserved.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map(l => (
              <Link key={l} href="/contact" style={{ fontFamily: "Fragment Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.2)", textDecoration: "none", letterSpacing: "0.05em" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
