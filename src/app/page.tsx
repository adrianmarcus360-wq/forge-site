"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── Data ─────────────────────────────────────────────────── */

const DELIVERABLES = [
  {
    num: "01",
    title: "Alignment session",
    body: "We sit with leaders across every department — not to pitch, but to listen. Together we surface where AI can save time, reduce cost, or eliminate friction, then rank every opportunity by time and cost to value.",
    img: "/media/precision.jpg",
    imgAlt: "Precision machined components — CNC detail",
    rev: false,
  },
  {
    num: "02",
    title: "Custom AI agents",
    body: "Internal knowledge agents, automated briefings, competitor tracking, scheduling logic — built around the specific problems your team identified in alignment. Nothing templated, nothing speculative.",
    img: "/media/kuka.jpg",
    imgAlt: "KUKA industrial robots — precision automation",
    rev: true,
  },
  {
    num: "03",
    title: "Operations dashboards",
    body: "Every agent comes with visibility. Dashboards configured for whoever needs to see it — plant managers, team leads, or the executive suite. Multiple locations, multiple access levels.",
    img: "/media/cnc.jpg",
    imgAlt: "CNC machining — coolant and precision tooling",
    rev: false,
  },
  {
    num: "04",
    title: "Embedded operators",
    body: "We hire and train the people who run your system. Two humans in the loop minimum — managing every agent, every output, every edge case. The technology works because people are accountable for it.",
    img: "/media/operators.jpg",
    imgAlt: "Human hands operating precision manufacturing equipment",
    rev: true,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Align",
    timing: "Week 1",
    body: "Your leadership. Every department. One structured session to surface what AI could change and what each opportunity is worth. We leave with a ranked list — you leave with clarity.",
  },
  {
    num: "02",
    title: "Build",
    timing: "Weeks 2–6",
    body: "Agents and dashboards built around exactly what came out of alignment. Not a template — the specific solutions your team said they needed, built to fit how your operation actually works.",
  },
  {
    num: "03",
    title: "Operate",
    timing: "Month 2 onward",
    body: "Trained operators embedded into your team to run the system. You stay in control of the decisions; we keep the agents running, accurate, and improving.",
  },
];

const OUTCOMES = [
  "Your people spend less time on things agents can handle.",
  "Leadership gets the visibility they've been asking for.",
  "Every agent built around a real problem — not a demo use case.",
  "A system that gets used, because trained people are running it.",
  "Faster path to AI value than hiring a unicorn.",
  "A model that grows as you identify the next problem.",
];

const INDUSTRIES = [
  {
    name: "Plastics & packaging",
    desc: "High-throughput operations where even small efficiency improvements compound quickly across shifts and lines.",
    img: "/media/robot-arm.jpg",
  },
  {
    name: "Automotive suppliers",
    desc: "Complex quality and compliance requirements that benefit most from automated tracking, alerts, and visibility.",
    img: "/media/automotive.jpg",
  },
  {
    name: "Food & beverage",
    desc: "Yield, regulatory, and changeover complexity that creates natural, high-value opportunities for agent automation.",
    img: "/media/operators.jpg",
  },
  {
    name: "Heavy industrial & process",
    desc: "Asset-intensive environments where better information systems change how decisions get made at every level.",
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
            AI execution for manufacturing
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
            We find where AI<br />moves your{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>operation.</span>
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
            Every engagement starts with an alignment session — not a pitch.
            We surface where AI closes the gap, then build and operate the system
            that closes it.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "80px" }}>
            <Link href="/contact" className="forge-btn-orange">
              Book an alignment session
            </Link>
            <Link href="/how-it-works" className="forge-btn-orange-ghost">
              See how Forge works →
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
              "Alignment sessions",
              "Custom AI agents",
              "Operations dashboards",
              "Embedded operators",
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
              n: "1",
              unit: "alignment session",
              desc: "Every engagement starts here. One structured session with your leadership to surface every AI opportunity and rank it by impact.",
            },
            {
              n: "2+",
              unit: "operators embedded",
              desc: "Trained humans in the loop running every agent and dashboard we build — minimum. More for larger programs.",
            },
            {
              n: "30–45",
              unit: "days to first agent",
              desc: "From alignment session to your first AI agent live in your operation. No multi-year ramp.",
            },
          ].map((s, i) => (
            <div
              key={i}
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
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 40px 0" }}>
          <span className="section-label-orange">What we deliver</span>
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
            Four things every<br />Forge engagement includes.
          </h2>
        </div>

        {/* Deliverable rows */}
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 40px" }}>
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
        className="grid-bg"
        style={{
          background: "var(--card-dark)",
          padding: "100px 40px",
          borderTop: "1px solid var(--border-dark)",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label-orange">Three stages, one engagement</span>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border-dark)" }}>
            {STEPS.map((s) => (
              <div
                key={s.num}
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
        style={{
          background: "var(--dark)",
          padding: "100px 40px",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label-orange">What changes</span>
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
            What the right<br />model creates.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderTop: "1px solid var(--border-dark)",
            }}
          >
            {OUTCOMES.map((o, i) => (
              <div
                key={i}
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
            Exclusively built<br />for manufacturing.
          </h2>

          <div
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
        className="grid-bg"
        style={{
          background: "var(--card-dark)",
          padding: "100px 40px",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label-orange">Engagement structure</span>
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
            Start focused.<br />Expand as you grow.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "var(--border-dark)",
            }}
          >
            {[
              {
                tier: "Core",
                detail: "1 agent · 1 dashboard · 2 operators",
                desc: "One alignment session surfaces the highest-value problem. One agent solves it. One dashboard tracks it. Two trained operators run it.",
              },
              {
                tier: "Expanded",
                detail: "3–5 agents · multi-dashboard · larger team",
                desc: "Alignment surfaces a broader opportunity set. Multiple agents deployed in priority order with coordinated dashboards and a dedicated operator team.",
              },
              {
                tier: "Enterprise",
                detail: "Multi-site · full operator network",
                desc: "A complete AI operations layer across locations — with shared visibility at the executive level and operators embedded at every site.",
              },
            ].map((p, i) => (
              <div
                key={i}
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

        <div style={{ position: "relative", zIndex: 3, maxWidth: "780px", margin: "0 auto" }}>
          <span className="section-label-orange" style={{ justifyContent: "center" }}>
            Ready to start
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
            The alignment session<br />is where it{" "}
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
            One session with your leadership team to surface where AI moves your
            operation — and what it&apos;s worth to move it.
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
              Book an alignment session
            </Link>
            <Link href="/how-it-works" className="forge-btn-orange-ghost">
              See how it works →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
