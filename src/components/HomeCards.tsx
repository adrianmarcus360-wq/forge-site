"use client";
import Link from "next/link";

export function UseCaseCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div
      style={{ background: "#FFFFFF", borderRadius: "4px", padding: "24px", display: "flex", flexDirection: "column", gap: "8px", minHeight: "160px", border: "1px solid transparent", transition: "border-color 0.2s, background-color 0.2s", cursor: "default" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D2E9FE"; (e.currentTarget as HTMLElement).style.backgroundColor = "#F5FAFF"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "transparent"; (e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF"; }}
    >
      <div style={{ width: 32, height: 32, background: "#D2E9FE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", borderRadius: "4px", marginBottom: "4px" }}>{icon}</div>
      <h4 style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "-0.5px", color: "#131313" }}>{title}</h4>
      <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", color: "#666" }}>{desc}</p>
    </div>
  );
}

export function InsightCard({ tag, title, desc, href }: { tag: string; title: string; desc: string; href: string }) {
  return (
    <Link href={href} style={{ background: "#F9F9F9", padding: "32px", textDecoration: "none", display: "block", borderBottom: "2px solid transparent", transition: "border-color 0.2s, transform 0.2s" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = "#131313"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
    >
      <p className="label-mono" style={{ marginBottom: "20px", color: "#999" }}>{tag}</p>
      <h3 style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "24px", letterSpacing: "-0.6px", color: "#131313", marginBottom: "12px" }}>{title}</h3>
      <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", color: "#666" }}>{desc}</p>
    </Link>
  );
}
