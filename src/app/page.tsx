import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UseCaseCard, InsightCard } from "@/components/HomeCards";

const capabilities = [
  {
    title: "AI Strategy & Diagnostics",
    desc: "We assess your operations, identify the highest-value AI opportunities, and build a roadmap your leadership team can act on — from plant floor to C-suite.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
  },
  {
    title: "Data Enablement",
    desc: "We connect your OT/IT systems, historians, MES, and ERP data into a unified layer that AI models can actually use. Clean, reliable, and production-ready.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    title: "Managed AI Solutions",
    desc: "We architect, build, and operate AI agents and automation tailored to your process — predictive maintenance, yield optimization, quality control, and beyond.",
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&q=80",
  },
  {
    title: "Proof of Concept",
    desc: "We co-develop and validate high-impact AI use cases in your environment, proving ROI in weeks — not quarters. Know exactly where to invest before you scale.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  },
  {
    title: "Workforce Enablement",
    desc: "Embed AI fluency across your plant leadership and frontline teams. We build the internal capability so your people and technology grow stronger together.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  },
];

const useCases = [
  { icon: "⚙", title: "Predictive Maintenance", desc: "Detects failure patterns before they interrupt production. Converts maintenance from reactive to continuous and data-driven." },
  { icon: "📈", title: "Yield Optimization", desc: "Identifies waste and variation at the source. Improves output quality while reducing scrap and rework cost." },
  { icon: "🏭", title: "Quality & Compliance", desc: "Monitors production parameters and regulatory signals in real time. Builds audit trails and enforces standards automatically." },
  { icon: "🔗", title: "Supply Chain Intelligence", desc: "Combines demand signals, supplier data, and logistics constraints to guide procurement, scheduling, and inventory decisions." },
  { icon: "👷", title: "Workforce Productivity", desc: "Supports shift handoffs, quality reporting, and knowledge capture inside existing plant systems. Raises throughput without headcount." },
  { icon: "💰", title: "Cost & Margin", desc: "Analyzes spend, contracts, and operations to surface leakage and inefficiency. Prioritizes actions that lower run rate and improve margin." },
  { icon: "📅", title: "Planning & Scheduling", desc: "Moves production planning from weekly cycles to continuous AI-driven optimization. Reduces changeovers, idle time, and expedite costs." },
  { icon: "🛡", title: "Safety & Risk", desc: "Tracks near-miss patterns, environmental signals, and compliance thresholds in real time. Surfaces risk before incidents occur." },
];

const partners = [
  "PTC", "Rockwell", "Siemens", "SAP", "Honeywell",
  "Microsoft Azure", "AWS", "Databricks", "Palantir", "OSIsoft",
  "PTC", "Rockwell", "Siemens", "SAP", "Honeywell",
  "Microsoft Azure", "AWS", "Databricks", "Palantir", "OSIsoft",
];

const beliefs = [
  "We believe AI should reduce operational risk, not introduce it.",
  "We believe the best AI is invisible — it just makes your operations faster and more reliable.",
  "We believe ROI should be measurable within 90 days, not 3 years.",
  "We believe manufacturing expertise and AI expertise must be in the same room.",
];

const insights = [
  { tag: "STRATEGY / APR 2025", title: "Why Most Manufacturing AI Projects Fail in Year One", desc: "The pattern is consistent: leadership signs off on AI, a pilot launches, results are mixed, and momentum dies. Here is what separates the pilots that scale from the ones that stall.", href: "/proof" },
  { tag: "OPERATIONS / MAR 2025", title: "Predictive Maintenance Is Not a Software Problem", desc: "Most vendors sell the algorithm. The real work is building the data pipeline, cleaning sensor history, and connecting the output to your CMMS. We explain the full stack.", href: "/how-it-works" },
  { tag: "WORKFORCE / FEB 2025", title: "Your Operators Are Your AI Strategy", desc: "The plants achieving the fastest AI ROI are not the most technologically advanced — they are the ones where frontline operators trust and use the tools they are given.", href: "/about" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ background: "#F9F9F9", paddingTop: "72px" }}>

        {/* HERO */}
        <section style={{ background: "#F9F9F9", padding: "110px 40px 100px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px" }}>
            <div style={{ flex: "1 1 55%", minWidth: "280px" }}>
              <h1 style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "clamp(44px, 6.25vw, 80px)", lineHeight: 1, letterSpacing: "-3.2px", color: "#131313", marginBottom: "32px" }}>
                Forge turns your manufacturing operations into a competitive advantage with AI.
              </h1>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.4px", color: "#444", marginBottom: "40px", maxWidth: "520px" }}>
                AI transformation built on operational precision, plant-floor expertise, and measurable outcomes. We deliver strategy, process automation, and workforce enablement that drive throughput, margin, and resilience.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Link href="/contact" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "15px", color: "white", background: "#131313", padding: "14px 28px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  Book Strategy Call
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, background: "white" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Link>
                <Link href="/how-it-works" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "15px", color: "#131313", border: "1px solid #131313", padding: "14px 28px", textDecoration: "none" }}>
                  How It Works
                </Link>
              </div>
            </div>
            <div style={{ flex: "1 1 35%", minWidth: "260px", maxWidth: "420px" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80" alt="Manufacturing operations" fill style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section style={{ background: "#FFFFFF", padding: "100px 40px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "56px" }}>
              <div>
                <span className="label-mono" style={{ marginBottom: "16px" }}>CAPABILITIES</span>
                <h2 style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "35px", letterSpacing: "-1.28px", color: "#131313" }}>What We Deliver</h2>
              </div>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "16px", color: "#555", lineHeight: "1.6", maxWidth: "480px" }}>
                We design and deliver AI solutions that solve real manufacturing challenges, create measurable outcomes, and build capabilities that last inside your organization.
              </p>
            </div>
            {capabilities.map((cap, i) => (
              <div key={i} style={{ display: "flex", flexWrap: "wrap", flexDirection: i % 2 === 0 ? "row" : "row-reverse", borderTop: "1px solid #E5E5E5", borderBottom: i === capabilities.length - 1 ? "1px solid #E5E5E5" : "none" }}>
                <div style={{ flex: "1 1 40%", minWidth: "260px", position: "relative", minHeight: "300px" }}>
                  <Image src={cap.img} alt={cap.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ flex: "1 1 55%", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }}>
                  <span className="label-mono" style={{ color: "#CCC" }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "28px", lineHeight: "31px", letterSpacing: "-1.12px", color: "#131313" }}>{cap.title}</h3>
                  <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "1.6", color: "#555", maxWidth: "440px" }}>{cap.desc}</p>
                  <Link href="/services" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "13px", color: "#131313", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section style={{ background: "#F9F9F9", padding: "100px 40px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "56px" }}>
              <span className="label-mono" style={{ marginBottom: "16px" }}>USE CASES</span>
              <h2 style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "35px", letterSpacing: "-1.28px", color: "#131313" }}>Where we create value</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: "16px" }}>
              {useCases.map((uc, i) => <UseCaseCard key={i} {...uc} />)}
            </div>
          </div>
        </section>

        {/* TECH PARTNERS */}
        <section style={{ background: "#FFFFFF", padding: "80px 0", overflow: "hidden" }}>
          <div style={{ padding: "0 40px", marginBottom: "40px", textAlign: "center" }}>
            <span className="label-mono" style={{ marginBottom: "12px", display: "block", textAlign: "center" }}>PLATFORM INDEPENDENT</span>
            <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "24px", letterSpacing: "-0.8px", color: "#131313" }}>We work across your existing stack</p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ display: "flex", alignItems: "center", gap: "72px", width: "max-content" }}>
              {partners.map((p, i) => (
                <span key={i} style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.3px", color: "#BBBBBB", whiteSpace: "nowrap" }}>{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ background: "#F9F9F9", padding: "100px 40px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "64px" }}>
            <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
              <span className="label-mono" style={{ marginBottom: "24px" }}>HANDS-ON APPROACH AND EXPERTISE</span>
              <h2 style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.05, letterSpacing: "-1.5px", color: "#131313", marginBottom: "24px" }}>
                The partner your operations have been waiting for
              </h2>
              <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "1.6", color: "#555", marginBottom: "36px", maxWidth: "500px" }}>
                We bring together plant-floor experience, operational leadership, and deep AI capability to build what your manufacturing business actually needs — not a proof of concept, but a lasting competitive edge.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
                {beliefs.map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: 20, height: 20, background: "#D2E9FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.5 6L6.5 2" stroke="#1A6FCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "15px", color: "#444", lineHeight: "1.5" }}>{b}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "14px", color: "white", background: "#131313", padding: "12px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                About Us
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, background: "white" }}>
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </Link>
            </div>
            <div style={{ flex: "1 1 40%", minWidth: "260px", position: "relative", minHeight: "500px" }}>
              <Image src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80" alt="Forge team" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section style={{ background: "#FFFFFF", padding: "100px 40px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", marginBottom: "56px" }}>
              <div>
                <span className="label-mono" style={{ marginBottom: "16px" }}>LATEST INSIGHTS</span>
                <h2 style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: "35px", letterSpacing: "-1.28px", color: "#131313" }}>From the plant floor</h2>
              </div>
              <Link href="/proof" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "13px", color: "#131313", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Discover more
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
              {insights.map((ins, i) => <InsightCard key={i} {...ins} />)}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
