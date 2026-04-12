import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── Data ───────────────────────────────────────────────────────── */

const SERVICES = [
  {
    num: "01",
    title: "Alignment\nsession",
    body: "We sit with leaders across every department — not to pitch, but to listen. Together we surface where AI can save time, reduce cost, or eliminate friction, then rank every opportunity by time and cost to value.",
  },
  {
    num: "02",
    title: "Custom\nAI agents",
    body: "Internal knowledge agents, automated briefings, competitor tracking, scheduling logic — built around the specific problems your team identified in alignment. Nothing templated, nothing speculative.",
  },
  {
    num: "03",
    title: "Operations\ndashboards",
    body: "Every agent comes with visibility. Dashboards built for whoever needs to see it — plant managers, team leads, or the executive suite. Multiple locations, multiple access levels.",
  },
  {
    num: "04",
    title: "Embedded\noperators",
    body: "We hire and train the people who run your system. Two humans in the loop minimum — managing every agent, every output, every edge case. The technology works because people are accountable for it.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Align",
    timing: "Week 1",
    body: "Your leadership. Every department. One structured session to surface what AI could change across your operation and what each opportunity is worth. We leave with a ranked list — you leave with clarity.",
  },
  {
    num: "02",
    title: "Build",
    timing: "Weeks 2–6",
    body: "Agents and dashboards built around exactly what came out of alignment. Not a template, not a generic tool — the specific solutions your team said they needed, built to fit how your operation actually works.",
  },
  {
    num: "03",
    title: "Operate",
    timing: "Month 2 onward",
    body: "Trained operators embedded into your team to run the system. You stay in control of the decisions; we keep the agents running, accurate, and improving. The model scales as new needs emerge.",
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
  { name: "Plastics & packaging",       desc: "High-throughput operations where even small efficiency improvements compound quickly across shifts and lines." },
  { name: "Automotive suppliers",       desc: "Complex quality and compliance requirements that benefit most from automated tracking, alerts, and visibility." },
  { name: "Food & beverage",            desc: "Yield, regulatory, and changeover complexity that creates natural, high-value opportunities for agent automation." },
  { name: "Heavy industrial & process", desc: "Asset-intensive environments where better information systems change how decisions get made at every level." },
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Header />

      {/* ══ 1. Hero ══════════════════════════════════════════════════ */}
      <section style={{
        background: "#080808",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 40px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle radial accent */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 75% 40%, rgba(11,140,126,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1240px", margin: "0 auto", width: "100%", paddingTop: "160px" }}>
          {/* Label */}
          <span className="section-label" style={{ marginBottom: "40px" }}>
            AI execution for manufacturing
          </span>

          {/* Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(56px, 8.5vw, 112px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              maxWidth: "900px",
              marginBottom: "48px",
            }}
          >
            We find where AI<br />moves your operation.
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: "clamp(17px, 1.8vw, 22px)",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.48)",
            maxWidth: "540px",
            marginBottom: "52px",
          }}>
            Every engagement starts with an alignment session — not a pitch. We surface where AI closes the gap, then build and operate the system that closes it.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/contact" className="forge-btn-primary">
              Book an alignment session
            </Link>
            <Link href="/how-it-works" className="forge-btn-ghost">
              See how Forge works →
            </Link>
          </div>

          {/* Capability strip */}
          <div style={{
            display: "flex",
            gap: "0",
            flexWrap: "wrap",
            marginTop: "100px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}>
            {[
              "Alignment sessions",
              "Custom AI agents",
              "Operations dashboards",
              "Embedded operators",
            ].map((cap, i) => (
              <span
                key={i}
                className="font-mono"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.24)",
                  paddingRight: "40px",
                }}
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 2. Numbers ═══════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", padding: "0 40px" }}>
        <div style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}>
          {[
            { n: "1",     unit: "alignment session",  desc: "Every engagement starts here. One structured session with your leadership to surface every AI opportunity and rank it." },
            { n: "2+",    unit: "operators embedded",  desc: "Trained humans in the loop running every agent and dashboard we build — minimum. More for larger programs." },
            { n: "30–45", unit: "days to first agent", desc: "From alignment session to your first AI agent live in your operation. No multi-year ramp to see results." },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "80px 0",
                paddingRight: i < 2 ? "56px" : "0",
                paddingLeft: i > 0 ? "56px" : "0",
                borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
                borderTop: "4px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(48px, 6vw, 84px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#1D1D1F",
                  lineHeight: 1,
                  marginBottom: "10px",
                }}
              >
                {s.n}
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "#0B8C7E",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "24px",
              }}>
                {s.unit}
              </div>
              <p style={{
                fontSize: "15px",
                fontWeight: 300,
                color: "#6E6E73",
                lineHeight: 1.65,
                maxWidth: "240px",
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. Services ══════════════════════════════════════════════ */}
      <section style={{ background: "#1D1D1F", padding: "120px 40px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label">What we deliver</span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 700,
              letterSpacing: "-0.028em",
              color: "#FFFFFF",
              lineHeight: 1.0,
              maxWidth: "680px",
              marginBottom: "80px",
            }}
          >
            Four things every<br />Forge engagement includes.
          </h2>

          {/* 2×2 grid with hairline dividers */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(255,255,255,0.07)",
          }}>
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="forge-service-card"
              >
                <span className="font-mono" style={{ fontSize: "10px", color: "#0B8C7E", letterSpacing: "0.18em", display: "block", marginBottom: "28px" }}>
                  {s.num}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: 1.25,
                    marginBottom: "18px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.42)", lineHeight: 1.72 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. How it works ══════════════════════════════════════════ */}
      <section style={{ background: "#F5F5F7", padding: "120px 40px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label" style={{ color: "#0B8C7E" }}>The Forge model</span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 700,
              letterSpacing: "-0.028em",
              color: "#1D1D1F",
              lineHeight: 1.0,
              maxWidth: "680px",
              marginBottom: "80px",
            }}
          >
            Discover. Build.<br />Operate.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "72px" }}>
            {STEPS.map((s) => (
              <div key={s.num}>
                {/* Ghost step number */}
                <div
                  className="font-display"
                  style={{
                    fontSize: "80px",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "rgba(11,140,126,0.12)",
                    lineHeight: 1,
                    marginBottom: "20px",
                  }}
                >
                  {s.num}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: "24px", fontWeight: 700, color: "#1D1D1F", marginBottom: "6px" }}
                >
                  {s.title}
                </h3>
                <span className="font-mono" style={{ fontSize: "10px", color: "#0B8C7E", letterSpacing: "0.16em", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
                  {s.timing}
                </span>
                <p style={{ fontSize: "15px", fontWeight: 300, color: "#6E6E73", lineHeight: 1.72 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. Outcomes ══════════════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "120px 40px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label">What changes</span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 700,
              letterSpacing: "-0.028em",
              color: "#FFFFFF",
              lineHeight: 1.0,
              maxWidth: "600px",
              marginBottom: "80px",
            }}
          >
            What the right<br />model creates.
          </h2>

          {/* 2-column outcome list */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}>
            {OUTCOMES.map((o, i) => (
              <div
                key={i}
                style={{
                  padding: "36px 0",
                  paddingRight: i % 2 === 0 ? "72px" : "0",
                  paddingLeft: i % 2 === 1 ? "72px" : "0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: i % 2 === 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(18px, 2vw, 26px)",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                  }}
                >
                  {o}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. Industries ════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label" style={{ color: "#0B8C7E" }}>Where we work</span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 700,
              letterSpacing: "-0.028em",
              color: "#1D1D1F",
              lineHeight: 1.0,
              maxWidth: "640px",
              marginBottom: "80px",
            }}
          >
            Exclusively built<br />for manufacturing.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(0,0,0,0.07)",
            marginBottom: "40px",
          }}>
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="forge-industry-card"
              >
                <h3
                  className="font-display"
                  style={{ fontSize: "22px", fontWeight: 600, color: "#1D1D1F", marginBottom: "12px" }}
                >
                  {ind.name}
                </h3>
                <p style={{ fontSize: "15px", fontWeight: 300, color: "#6E6E73", lineHeight: 1.65 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "14px", fontWeight: 300, color: "#AEAEB2", lineHeight: 1.65, maxWidth: "520px" }}>
            Manufacturing is where we focus. Every agent, every dashboard, every operator we place is built around how these environments actually work.
          </p>
        </div>
      </section>

      {/* ══ 7. Engagement tiers ══════════════════════════════════════ */}
      <section style={{ background: "#F5F5F7", padding: "120px 40px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <span className="section-label" style={{ color: "#0B8C7E" }}>Engagement structure</span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 700,
              letterSpacing: "-0.028em",
              color: "#1D1D1F",
              lineHeight: 1.0,
              maxWidth: "600px",
              marginBottom: "80px",
            }}
          >
            Start focused.<br />Expand as you grow.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "48px",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            paddingTop: "52px",
          }}>
            {[
              {
                tier: "Core engagement",
                detail: "1 agent · 1 dashboard · 2 operators",
                desc: "One alignment session surfaces the highest-value problem. One agent solves it. One dashboard tracks it. Two trained operators run it.",
              },
              {
                tier: "Expanded program",
                detail: "3–5 agents · multi-dashboard · larger team",
                desc: "Alignment surfaces a broader opportunity set. Multiple agents deployed in priority order with coordinated dashboards and a dedicated operator team.",
              },
              {
                tier: "Enterprise network",
                detail: "Multi-site · full operator network",
                desc: "A complete AI operations layer across locations — with shared visibility at the executive level and operators embedded at every site.",
              },
            ].map((p, i) => (
              <div key={i}>
                <span className="font-mono" style={{ fontSize: "10px", color: "#AEAEB2", letterSpacing: "0.16em", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
                  {p.detail}
                </span>
                <h3
                  className="font-display"
                  style={{ fontSize: "22px", fontWeight: 600, color: "#1D1D1F", marginBottom: "14px" }}
                >
                  {p.tier}
                </h3>
                <p style={{ fontSize: "15px", fontWeight: 300, color: "#6E6E73", lineHeight: 1.68 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. Final CTA ═════════════════════════════════════════════ */}
      <section style={{
        background: "#080808",
        padding: "160px 40px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              lineHeight: 1.02,
              marginBottom: "36px",
            }}
          >
            The alignment session<br />is where it starts.
            <br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Everything else<br />follows from that.</span>
          </h2>

          <p style={{
            fontSize: "18px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
            marginBottom: "56px",
            lineHeight: 1.6,
          }}>
            One session with your leadership team to surface where AI moves your operation — and what it&apos;s worth to move it.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="forge-btn-primary">Book an alignment session</Link>
            <Link href="/how-it-works" className="forge-btn-ghost">See how it works →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
