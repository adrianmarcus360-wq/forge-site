"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── Data ─────────────────────────────────────────────────── */

const DELIVERABLES = [
  {
    num: "01",
    title: "Sales & revenue operations",
    body: "Sales account intelligence, CRM cleanup and follow-up automation, quote intake workflows, and customer expansion dashboards — built for the way your sales team actually works.",
    img: "/media/precision.jpg",
    imgAlt: "Precision machined components — CNC detail",
    rev: false,
  },
  {
    num: "02",
    title: "Plant & shift operations",
    body: "Daily production dashboards, shift handoff reporting, bottleneck tracking, and SOP search — built to give operators and managers the information they need without extra work.",
    img: "/media/kuka.jpg",
    imgAlt: "KUKA industrial robots — precision automation",
    rev: true,
  },
  {
    num: "03",
    title: "Quality & maintenance",
    body: "Audit prep assistants, nonconformance summaries, work order intelligence, and downtime pattern dashboards — systems that reduce manual effort and surface what actually needs attention.",
    img: "/media/cnc.jpg",
    imgAlt: "CNC machining — coolant and precision tooling",
    rev: false,
  },
  {
    num: "04",
    title: "Executive visibility",
    body: "A single view across sales, operations, quality, maintenance, and customer risk. Weekly AI briefings. Multi-plant comparisons. Leadership finally has the visibility they have been asking for.",
    img: "/media/operators.jpg",
    imgAlt: "Human hands operating precision manufacturing equipment",
    rev: true,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Opportunity Map",
    timing: "Layer 1",
    body: "We identify where AI can create value across every department. Sales, operations, quality, maintenance, and leadership — every high-value opportunity surfaced and prioritized.",
  },
  {
    num: "02",
    title: "Workflow + Data Layer",
    timing: "Layer 2",
    body: "We connect the system to the real work. CRM, spreadsheets, emails, SOPs, reports, ERP, MES, CMMS — whatever your team actually uses is what the system runs on.",
  },
  {
    num: "03",
    title: "AI Agents + Dashboards",
    timing: "Layer 3",
    body: "We build systems that help your people research, summarize, route, report, decide, and act. Useful tools, not demos — built around the specific problems your team identified.",
  },
  {
    num: "04",
    title: "Human-in-the-Loop",
    timing: "Layer 4",
    body: "We help staff, manage, and support the people needed to keep the system accurate and adopted. The technology works because people are accountable for it.",
  },
];

const OUTCOMES = [
  "AI does not fail because the technology is impossible.",
  "It fails because most companies do not know where to apply it.",
  "Teams are already overloaded and cannot take on new systems.",
  "Most solutions are built without enough operational context.",
  "Forge combines strategy, workflow design, AI, and human support.",
  "The system keeps improving after launch — not just at go-live.",
];

const INDUSTRIES = [
  {
    name: "Plastics & packaging",
    desc: "High-throughput operations where even small improvements in shift visibility, quality tracking, or CRM follow-up compound fast.",
    img: "/media/robot-arm.jpg",
  },
  {
    name: "Automotive suppliers",
    desc: "Complex quality and compliance requirements that benefit most from automated documentation, audit prep, and nonconformance tracking.",
    img: "/media/automotive.jpg",
  },
  {
    name: "Food & beverage",
    desc: "Yield, regulatory, and changeover complexity that creates natural, high-value opportunities for AI-assisted reporting and decision support.",
    img: "/media/operators.jpg",
  },
  {
    name: "Heavy industrial & process",
    desc: "Asset-intensive environments where work order intelligence, downtime pattern analysis, and executive visibility change how decisions get made.",
    img: "/media/cnc.jpg",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Header />

      {/* ══ 1. HERO — video background ════════════════════════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          background: "var(--dark)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.65,
            zIndex: 0,
          }}
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — keep movement visible, darken for text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,12,0.5) 0%, rgba(10,10,12,0.38) 30%, rgba(10,10,12,0.72) 65%, rgba(10,10,12,0.96) 90%, var(--dark) 100%)",
            zIndex: 1,
          }}
        />

        {/* Grid texture overlay */}
        <div
          className="grid-bg"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            opacity: 0.6,
          }}
        />

        {/* Hero content */}
        <div
          className="forge-hero-content"
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "1240px",
            margin: "0 auto",
            width: "100%",
            padding: "160px 40px 96px",
          }}
        >
          {/* Label */}
          <span className="section-label-orange" style={{ marginBottom: "32px" }}>
            AI execution for manufacturing teams
          </span>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(52px, 8vw, 108px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              maxWidth: "880px",
              marginBottom: "40px",
            }}
          >
            AI execution for<br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>manufacturing teams.</span>
          </h1>

          {/* Sub */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(16px, 1.6vw, 20px)",
              lineHeight: 1.65,
              color: "var(--text-muted)",
              maxWidth: "520px",
              marginBottom: "48px",
            }}
          >
            Forge helps manufacturers identify, build, and operate practical AI systems that improve sales, operations, quality, maintenance, and leadership visibility.
            We do not sell generic AI strategy. We help your team turn real workflows, existing data, and day-to-day bottlenecks into working systems your people can actually use.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "80px" }}>
            <Link href="/contact" className="forge-btn-orange">
              Book an AI Opportunity Session
            </Link>
            <Link href="/how-it-works" className="forge-btn-orange-ghost">
              See Where Forge Can Help →
            </Link>
          </div>

          {/* Capability strip */}
          <div
            style={{
              display: "flex",
              gap: "0",
              flexWrap: "wrap",
              paddingTop: "28px",
              borderTop: "1px solid var(--border-dark)",
            }}
          >
            {[
              "Sales & CRM intelligence",
              "Operations dashboards",
              "Quality & maintenance AI",
              "Executive visibility",
            ].map((cap, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                  paddingRight: "36px",
                  paddingBottom: "4px",
                }}
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 2. STATS BAND ══════════════════════════════════════════ */}
      <section
        className="grid-bg"
        style={{
          background: "var(--dark)",
          borderTop: "1px solid var(--border-dark)",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div
          className="forge-stats-grid"
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {[
            {
              n: "10–25",
              unit: "AI use cases found",
              desc: "Every Opportunity Sprint surfaces 10–25 possible AI applications across sales, operations, quality, maintenance, and leadership.",
            },
            {
              n: "3–5",
              unit: "priorities identified",
              desc: "We rank every opportunity by value and feasibility, then focus on the top 3–5 that can move fastest.",
            },
            {
              n: "30–45",
              unit: "days to clarity",
              desc: "From kickoff to a clear roadmap, prioritized use cases, and your first system identified. No multi-year ramp.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="forge-stat-item"
              style={{
                padding: "72px 0",
                paddingRight: i < 2 ? "56px" : "0",
                paddingLeft: i > 0 ? "56px" : "0",
                borderRight: i < 2 ? "1px solid var(--border-dark)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(44px, 5.5vw, 80px)",
                  letterSpacing: "-0.03em",
                  color: "var(--orange)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "20px",
                }}
              >
                {s.unit}
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  maxWidth: "240px",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. DELIVERABLES ════════════════════════════════════════ */}
      <section style={{ background: "var(--dark)", borderBottom: "1px solid var(--border-dark)" }}>
        <div className="forge-section-header" style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 40px 0" }}>
          <span className="section-label-orange">What we do</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 60px)",
              letterSpacing: "-0.028em",
              color: "var(--text-primary)",
              lineHeight: 1.02,
              maxWidth: "640px",
              marginBottom: "64px",
            }}
          >
            Forge builds practical AI systems for manufacturing companies.
          </h2>
        </div>

        {/* Deliverable rows */}
        <div className="forge-section-content" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 40px" }}>
          {DELIVERABLES.map((d) => (
            <div
              key={d.num}
              className={`deliverable-row${d.rev ? " rev" : ""}`}
            >
              {/* Text side */}
              <div className="d-text">
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    color: "var(--orange)",
                    display: "block",
                    marginBottom: "20px",
                  }}
                >
                  {d.num}
                </span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(20px, 2.2vw, 28px)",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.72,
                    maxWidth: "380px",
                  }}
                >
                  {d.body}
                </p>
              </div>

              {/* Image side */}
              <div className="d-img img-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.img}
                  alt={d.imgAlt}
                  className="blend-lum"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.4,
                  }}
                />
                {/* Orange tint overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(255,107,0,0.06) 0%, transparent 60%)",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 5. HOW IT WORKS ════════════════════════════════════════ */}
      <section
        className="grid-bg forge-section-pad"
        style={{
          background: "var(--card-dark)",
          padding: "100px 40px",
          borderTop: "1px solid var(--border-dark)",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label-orange">The Forge System</span>

          <div className="forge-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border-dark)" }}>
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="forge-step-item"
                style={{
                  padding: "56px 48px",
                  background: "var(--card-dark)",
                  position: "relative",
                  transition: "background 0.3s",
                }}
              >
                {/* Orange connector dot */}
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--orange)",
                    marginBottom: "32px",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--orange)",
                    marginBottom: "6px",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(24px, 2.5vw, 36px)",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.025em",
                    marginBottom: "6px",
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                    marginBottom: "24px",
                  }}
                >
                  {s.timing}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. OUTCOMES ════════════════════════════════════════════ */}
      <section
        className="forge-section-pad"
        style={{
          background: "var(--dark)",
          padding: "100px 40px",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label-orange">Why Forge</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 60px)",
              letterSpacing: "-0.028em",
              color: "var(--text-primary)",
              lineHeight: 1.02,
              maxWidth: "560px",
              marginBottom: "64px",
            }}
          >
            Why most AI fails — and why Forge does not.
          </h2>

          <div
            className="forge-outcomes-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderTop: "1px solid var(--border-dark)",
            }}
          >
            {OUTCOMES.map((o, i) => (
              <div
                key={i}
                className="forge-outcome-item"
                style={{
                  padding: "36px 0",
                  paddingRight: i % 2 === 0 ? "64px" : "0",
                  paddingLeft: i % 2 === 1 ? "64px" : "0",
                  borderBottom: "1px solid var(--border-dark)",
                  borderLeft: i % 2 === 1 ? "1px solid var(--border-dark)" : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    color: "var(--orange)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    marginTop: "4px",
                    flexShrink: 0,
                  }}
                >
                  /
                </span>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(16px, 1.8vw, 22px)",
                    color: "var(--text-primary)",
                    lineHeight: 1.35,
                  }}
                >
                  {o}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. INDUSTRIES ══════════════════════════════════════════ */}
      <section
        className="forge-section-pad"
        style={{
          background: "var(--dark)",
          padding: "100px 40px",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label-orange">Where we work</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 60px)",
              letterSpacing: "-0.028em",
              color: "var(--text-primary)",
              lineHeight: 1.02,
              maxWidth: "600px",
              marginBottom: "48px",
            }}
          >
            Built exclusively<br />for manufacturers.
          </h2>

          <div
            className="forge-industries-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "var(--border-dark)",
            }}
          >
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="industry-tile">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ind.img} alt={ind.name} />
                <div className="tile-overlay" />
                <div className="tile-content">
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.015em",
                      marginBottom: "8px",
                    }}
                  >
                    {ind.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. ENGAGEMENT TIERS ════════════════════════════════════ */}
      <section
        className="grid-bg forge-section-pad"
        style={{
          background: "var(--card-dark)",
          padding: "100px 40px",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label-orange">Where to start</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 60px)",
              letterSpacing: "-0.028em",
              color: "var(--text-primary)",
              lineHeight: 1.02,
              maxWidth: "560px",
              marginBottom: "64px",
            }}
          >
            Two ways to begin.<br />Both lead to working systems.
          </h2>

          <div
            className="forge-steps-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "var(--border-dark)",
            }}
          >
            {[
              {
                tier: "AI Opportunity Sprint",
                detail: "30–45 days · stakeholder interviews · roadmap",
                desc: "We map high-value AI opportunities across your business, review your tools and data, prioritize the top 3–5 use cases, and deliver a practical roadmap with a clear first system to build.",
              },
              {
                tier: "Starter Build Package",
                detail: "1 agent · 1 dashboard · 1 operating workflow",
                desc: "After the Opportunity Sprint, we build the first working system. One AI agent, one dashboard, and one operating workflow — built around your top-priority use case and ready for your team to use.",
              },
              {
                tier: "Full Program",
                detail: "Multi-agent · multi-site · operator network",
                desc: "A complete AI operations layer across departments and locations — with shared executive visibility, coordinated dashboards, and operators embedded at every level.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="forge-step-item"
                style={{
                  padding: "52px 44px",
                  background: "var(--card-dark)",
                  borderTop: i === 0 ? "2px solid var(--orange)" : "2px solid var(--border-dark)",
                  transition: "border-top-color 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = 'var(--orange)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = i === 0 ? 'var(--orange)' : 'var(--border-dark)'; }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                    marginBottom: "16px",
                  }}
                >
                  {p.detail}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "26px",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    marginBottom: "18px",
                  }}
                >
                  {p.tier}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    lineHeight: 1.68,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. FINAL CTA ═══════════════════════════════════════════ */}
      <section
        className="forge-cta-section"
        style={{
          position: "relative",
          background: "var(--dark)",
          padding: "140px 40px",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/automotive.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            mixBlendMode: "luminosity",
            opacity: 0.18,
            zIndex: 0,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)",
            zIndex: 1,
          }}
        />

        {/* Grid */}
        <div
          className="grid-bg"
          style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}
        />

        <div className="forge-cta-inner" style={{ position: "relative", zIndex: 3, maxWidth: "780px", margin: "0 auto" }}>
          <span className="section-label-orange" style={{ justifyContent: "center" }}>
            Start here
          </span>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 6.5vw, 88px)",
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              lineHeight: 0.98,
              marginBottom: "32px",
            }}
          >
            The Opportunity Sprint<br />is where it{" "}
            <span style={{ color: "var(--orange)" }}>starts.</span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.25)" }}>Everything else follows.</span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "17px",
              color: "var(--text-muted)",
              lineHeight: 1.65,
              marginBottom: "48px",
              maxWidth: "480px",
              margin: "0 auto 48px",
            }}
          >
            A focused 30–45 day engagement to uncover where AI can create immediate value inside your manufacturing business — and build the roadmap to get there.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="forge-btn-orange">
              Book an AI Opportunity Session
            </Link>
            <Link href="/how-it-works" className="forge-btn-orange-ghost">
              See How Forge Works →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
