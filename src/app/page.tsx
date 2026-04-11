import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── Data ───────────────────────────────────────────────────────── */

const SERVICES = [
  {
    num: "01",
    title: "Predictive maintenance\nand reliability",
    body: "Reduce unplanned downtime and improve asset performance with AI-driven monitoring, diagnostics, and maintenance intelligence built for how plants actually run.",
  },
  {
    num: "02",
    title: "Smart factory\ntransformation",
    body: "Turn plant data into operational leverage through systems, dashboards, and decision support that get used in real manufacturing environments.",
  },
  {
    num: "03",
    title: "Quality and scrap\nintelligence",
    body: "Identify defect patterns, process instability, and waste drivers across lines, products, and plants — before they compound.",
  },
  {
    num: "04",
    title: "Multi-plant AI\noperating model",
    body: "Standardize how transformation gets deployed, measured, and improved across locations — with leadership visibility built in from the start.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Pilot",
    timing: "30–45 days",
    body: "One plant. One line. One measurable outcome — downtime, scrap, or energy. Map data and systems, establish the baseline, deliver proof you can act on.",
  },
  {
    num: "02",
    title: "Deploy",
    timing: "Weeks 6–20",
    body: "Forge embeds the operating layer: specialists working alongside your plant and leadership teams to stand up the systems that get used, not just demonstrated.",
  },
  {
    num: "03",
    title: "Scale",
    timing: "Month 6 onward",
    body: "Extend the model across lines and plants with a consistent deployment framework and real-time visibility for leadership — not isolated experiments per location.",
  },
];

const OUTCOMES = [
  "More predictable uptime.",
  "Lower scrap and rework costs.",
  "Better energy economics.",
  "Faster visibility into plant issues.",
  "Stronger cross-site operating discipline.",
  "A transformation model — not an isolated experiment.",
];

const INDUSTRIES = [
  { name: "Plastics & packaging",           desc: "Cycle time, scrap, and energy across high-throughput lines." },
  { name: "Automotive suppliers",           desc: "Quality, OEE, and traceability under OEM pressure." },
  { name: "Food & beverage",                desc: "Yield, compliance, and changeover intelligence." },
  { name: "Heavy industrial & process",     desc: "Asset reliability and energy across complex continuous processes." },
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
            AI transformation for manufacturing
          </span>

          {/* Headline — big, tight, inevitable */}
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
            AI that works<br />in real plants.
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: "clamp(17px, 1.8vw, 22px)",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.48)",
            maxWidth: "520px",
            marginBottom: "52px",
          }}>
            Forge helps manufacturers reduce downtime, scrap, and energy waste — not in a demo, but on the floor.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/contact" className="forge-btn-primary">
              Book a strategy call
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
              "Predictive maintenance",
              "Smart factory",
              "Quality intelligence",
              "Multi-plant programs",
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
            { n: "30–45", unit: "days",          desc: "From pilot kickoff to your first measurable outcome on the floor." },
            { n: "3–5",   unit: "year programs",  desc: "Designed for manufacturers transforming at scale across sites." },
            { n: "4",     unit: "plant domains",  desc: "Maintenance, quality, energy, and smart factory — interconnected." },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "80px 0",
                paddingRight: i < 2 ? "56px" : "0",
                paddingLeft: i > 0 ? "56px" : "0",
                borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
                borderLeft: i > 0 ? "none" : "none",
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
          <span className="section-label">What we solve</span>
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
            What Forge helps<br />manufacturers solve.
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
            A better model than<br />hiring one unicorn.
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
            What the best<br />programs create.
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
            Built for complex<br />manufacturing environments.
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
            Each environment has different systems and constraints. Forge is built around operational reality, not generic AI messaging.
          </p>
        </div>
      </section>

      {/* ══ 7. Proof architecture ════════════════════════════════════ */}
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
            How engagements<br />are structured.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "48px",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            paddingTop: "52px",
          }}>
            {[
              { tier: "Pilot program",      detail: "30–45 days · 1 plant or line",  desc: "Map data and systems, define the metric, deliver measurable proof of value." },
              { tier: "Regional rollout",   detail: "3–5 plants · shared model",     desc: "Extend the proven approach across sites with a consistent operating framework." },
              { tier: "Enterprise network", detail: "10+ plants · multi-year",       desc: "A full transformation program with leadership visibility across the entire manufacturing network." },
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
            If your plants already<br />know they need help,<br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Forge is built for<br />that moment.</span>
          </h2>

          <p style={{
            fontSize: "18px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
            marginBottom: "56px",
            lineHeight: 1.6,
          }}>
            Start with a focused 30–45 day pilot. See what changes when AI actually works on your floor.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="forge-btn-primary">Book a strategy call</Link>
            <Link href="/contact" className="forge-btn-ghost">Discuss a pilot →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
