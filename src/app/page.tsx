import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── Data ──────────────────────────────────────────────────── */

const SERVICES = [
  {
    num: "01",
    title: "Predictive maintenance & reliability",
    body: "Reduce unplanned downtime and improve asset performance with AI-driven monitoring, diagnostics, and maintenance intelligence built for production environments.",
  },
  {
    num: "02",
    title: "Smart factory transformation",
    body: "Turn plant data into operational leverage through systems, dashboards, and decision support that get used in real manufacturing environments — not just in the boardroom.",
  },
  {
    num: "03",
    title: "Quality & scrap intelligence",
    body: "Identify defect patterns, process instability, and waste drivers across lines, products, and plants. Stop chasing scrap after the fact.",
  },
  {
    num: "04",
    title: "Multi-plant AI operating model",
    body: "Standardize how transformation gets deployed, measured, and improved across locations. Leadership visibility built in from day one, not bolted on.",
  },
];

const OUTCOMES = [
  "More predictable uptime",
  "Lower scrap and rework costs",
  "Better energy economics",
  "Faster visibility into plant issues",
  "Stronger cross-site operating discipline",
  "A scalable transformation model — not isolated experiments",
];

const INDUSTRIES = [
  { num: "01", name: "Plastics & packaging",          desc: "High-volume, tight-tolerance production with scrap and energy exposure." },
  { num: "02", name: "Automotive suppliers",           desc: "Multi-plant, complex quality and traceability requirements." },
  { num: "03", name: "Food & beverage",                desc: "Regulatory compliance, yield management, and equipment uptime at scale." },
  { num: "04", name: "Heavy industrial & process",     desc: "Asset-intensive operations where reliability is the margin." },
];

const PROOF = [
  {
    tier: "Plant-level pilot",
    detail: "30–45 days. One plant or line.",
    desc: "A focused engagement with a clear metric — downtime, scrap, or energy. We map your data and systems, prove value fast, and build the foundation for what comes next.",
  },
  {
    tier: "Regional rollout",
    detail: "3–5 plants. Shared model.",
    desc: "Expand the operating layer across sites with consistent methodology, embedded specialists, and a governance structure that connects plant leadership to executive visibility.",
  },
  {
    tier: "Enterprise network program",
    detail: "10+ plants. Multi-year.",
    desc: "A structured transformation program with standardized deployment, measurement, and improvement across your manufacturing network. Built for the long run.",
  },
];

/* ─── Divider ───────────────────────────────────────────────── */
function Hr({ color = "#D4D0C8" }: { color?: string }) {
  return <div style={{ height: "1px", background: color }} />;
}

/* ─── Section wrapper ───────────────────────────────────────── */
function Section({ children, bg = "#F4F1EB", py = "100px", id }: { children: React.ReactNode; bg?: string; py?: string; id?: string }) {
  return (
    <section id={id} style={{ background: bg, padding: `${py} 48px` }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* ── 1. HERO ──────────────────────────────────────────── */}
        <div style={{ position: "relative", minHeight: "100vh", background: "#F4F1EB", display: "flex" }}>
          {/* Left content */}
          <div style={{
            flex: "1 1 55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "140px 64px 100px 48px",
            maxWidth: "720px",
            position: "relative",
            zIndex: 2,
          }}>
            <span className="section-label" style={{ marginBottom: "28px" }}>
              AI Transformation for Manufacturing
            </span>
            <h1 className="font-display" style={{
              fontWeight: 600,
              fontSize: "clamp(44px, 5.5vw, 76px)",
              lineHeight: 1.03,
              letterSpacing: "-0.025em",
              color: "#1C1C1A",
              marginBottom: "28px",
            }}>
              AI transformation for manufacturers who care about uptime.
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: 1.65,
              color: "#6B6660",
              maxWidth: "480px",
              marginBottom: "40px",
            }}>
              Forge helps manufacturers reduce downtime, scrap, and energy waste through premium AI transformation programs built for real plants and multi-site operations.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "56px" }}>
              <Link href="/contact" className="forge-btn-primary">Book a Strategy Call</Link>
              <Link href="/how-it-works" className="forge-btn-outline">Explore the Forge Model</Link>
            </div>
            {/* Capability strip */}
            <div style={{ borderTop: "1px solid #D4D0C8", paddingTop: "28px" }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "#9B978F",
                lineHeight: 1.8,
              }}>
                Predictive maintenance&nbsp;&nbsp;·&nbsp;&nbsp;Smart factory transformation&nbsp;&nbsp;·&nbsp;&nbsp;Quality intelligence&nbsp;&nbsp;·&nbsp;&nbsp;Multi-plant visibility
              </p>
            </div>
          </div>

          {/* Right image */}
          <div style={{ flex: "1 1 45%", position: "relative", minHeight: "600px" }} className="hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=85"
              alt="Industrial manufacturing plant"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            {/* Subtle overlay to blend edge into bone */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(244,241,235,0.25) 0%, transparent 20%)",
            }} />
          </div>
        </div>

        {/* ── 2. WHO WE'RE FOR ─────────────────────────────────── */}
        <Hr />
        <Section bg="#EDEAE3" py="96px">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "flex-start" }}>
            {/* Left */}
            <div style={{ flex: "1 1 44%", minWidth: "280px" }}>
              <span className="section-label">Who we're for</span>
              <h2 className="font-display" style={{
                fontWeight: 600,
                fontSize: "clamp(32px, 3.5vw, 50px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#1C1C1A",
              }}>
                Built for the plants where inefficiency gets expensive fast.
              </h2>
            </div>

            {/* Right */}
            <div style={{ flex: "1 1 44%", minWidth: "280px", paddingTop: "4px" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "16px", lineHeight: 1.7, color: "#6B6660", marginBottom: "36px" }}>
                We work with multi-plant manufacturers where downtime, scrap, and energy waste accumulate fast — and where the pressure to improve is real, not aspirational.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  "Starts with a focused 30–45 day pilot",
                  "Designed for 3–5 year transformation programs",
                  "Built for plant-level execution and executive visibility",
                  "Structured for multi-site manufacturers",
                ].map((pt, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "18px 0",
                    borderBottom: i < 3 ? "1px solid #D4D0C8" : "none",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: "3px", flexShrink: 0 }}>
                      <path d="M2.5 7L5.5 10.5L11.5 3.5" stroke="#1B5E6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "15px", color: "#1C1C1A", lineHeight: 1.5 }}>{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── 3. SERVICES ──────────────────────────────────────── */}
        <Hr />
        <Section bg="#F4F1EB" py="96px">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px", marginBottom: "56px" }}>
            <div>
              <span className="section-label">Services</span>
              <h2 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1C1A" }}>
                What Forge helps manufacturers solve
              </h2>
            </div>
            <Link href="/services" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#1B5E6B", textDecoration: "none", letterSpacing: "0.02em" }}>
              View all services →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#D4D0C8" }}>
            {SERVICES.map(s => (
              <div key={s.num} className="forge-service-card">
                <p className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#9B978F", marginBottom: "28px" }}>{s.num}</p>
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: "22px", lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1C1C1A", marginBottom: "16px" }}>
                  {s.title.charAt(0).toUpperCase() + s.title.slice(1)}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "14px", lineHeight: 1.7, color: "#6B6660" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── FULL-BLEED IMAGE BREAK (Waabi-style) ─────────────── */}
        <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
          <Image
            src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=2000&q=85"
            alt="Manufacturing production line"
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,58,66,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: "56px 96px" }}>
            <p className="font-display" style={{ fontWeight: 300, fontSize: "clamp(22px, 3vw, 38px)", fontStyle: "italic", color: "rgba(255,255,255,0.85)", letterSpacing: "-0.01em", maxWidth: "700px", lineHeight: 1.3 }}>
              "Most AI pilots fail not because the technology doesn't work — but because nobody designed the operating model around it."
            </p>
          </div>
        </div>

        {/* ── 4. HOW FORGE WORKS ───────────────────────────────── */}
        <Hr />
        <Section bg="#EDEAE3" py="96px">
          <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
            <span className="section-label">The Forge Model</span>
            <h2 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1C1A", marginBottom: "20px" }}>
              A better model than hiring one unicorn and hoping it works.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "16px", lineHeight: 1.7, color: "#6B6660" }}>
              Manufacturers can't hire one person who does plant operations, data engineering, AI, and change management. Forge provides a structured model instead — proven methodology, embedded specialists, governance built in.
            </p>
          </div>

          {/* Three steps */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", borderTop: "1px solid #D4D0C8" }} className="md:grid-cols-3">
            {[
              {
                num: "01",
                phase: "Pilot",
                span: "30–45 days",
                body: "One plant or line, one clear metric — downtime, scrap, or energy. Map data and systems, prove value quickly, and build the technical foundation.",
              },
              {
                num: "02",
                phase: "Deploy",
                span: "Months 2–6",
                body: "Stand up the operating layer, embed the right specialists, and work alongside your plant and leadership teams. This is where change actually happens.",
              },
              {
                num: "03",
                phase: "Scale",
                span: "Year 1–3+",
                body: "Extend across lines and plants with a consistent model, leadership visibility built in, and continuous improvement baked into the program.",
              },
            ].map((s, i) => (
              <div key={s.num} style={{
                padding: "40px 36px",
                borderRight: i < 2 ? "1px solid #D4D0C8" : "none",
                borderBottom: "1px solid #D4D0C8",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "28px" }}>
                  <span className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#1B5E6B" }}>{s.num}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", color: "#9B978F" }}>— {s.span}</span>
                </div>
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: "28px", lineHeight: 1.1, letterSpacing: "-0.01em", color: "#1C1C1A", marginBottom: "16px" }}>{s.phase}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "14px", lineHeight: 1.7, color: "#6B6660" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 5. OUTCOMES ──────────────────────────────────────── */}
        <section style={{ background: "#1C1C1A", padding: "100px 48px" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "flex-start" }}>
              <div style={{ flex: "1 1 36%", minWidth: "260px" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "block", marginBottom: "24px" }}>Outcomes</span>
                <h2 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
                  What the best programs create.
                </h2>
              </div>
              <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
                  {OUTCOMES.map((o, i) => (
                    <div key={i} style={{
                      padding: "24px 0",
                      borderBottom: i < OUTCOMES.length - 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                      paddingRight: i % 2 === 0 ? "40px" : "0",
                      borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                      paddingLeft: i % 2 === 1 ? "40px" : "0",
                    }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <div style={{ width: 4, height: 4, background: "#1B5E6B", borderRadius: "50%", marginTop: "8px", flexShrink: 0 }} />
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "15px", lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>{o}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. INDUSTRIES ────────────────────────────────────── */}
        <Hr color="#D4D0C8" />
        <Section bg="#F4F1EB" py="96px">
          <div style={{ marginBottom: "56px" }}>
            <span className="section-label">Industry focus</span>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
              <h2 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1C1A" }}>
                Built for complex manufacturing environments.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "14px", color: "#6B6660", maxWidth: "380px", lineHeight: 1.6 }}>
                Each environment has different systems and constraints. Forge is built around operational reality, not generic AI messaging.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", background: "#D4D0C8" }}>
            {INDUSTRIES.map(ind => (
              <div key={ind.num} className="forge-industry-tile">
                <p className="tile-num font-mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#9B978F", marginBottom: "40px", transition: "color 0.25s" }}>{ind.num}</p>
                <h3 className="tile-name font-display" style={{ fontWeight: 600, fontSize: "22px", lineHeight: 1.1, letterSpacing: "-0.01em", color: "#1C1C1A", marginBottom: "14px", transition: "color 0.25s" }}>{ind.name}</h3>
                <p className="tile-desc" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", lineHeight: 1.65, color: "#6B6660", transition: "color 0.25s" }}>{ind.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px", textAlign: "right" }}>
            <Link href="/industries" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#1B5E6B", textDecoration: "none" }}>
              See all industries →
            </Link>
          </div>
        </Section>

        {/* ── 7. PROOF ARCHITECTURE ───────────────────────────── */}
        <Hr />
        <Section bg="#EDEAE3" py="96px">
          <div style={{ marginBottom: "56px" }}>
            <span className="section-label">Engagement structure</span>
            <h2 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1C1A", maxWidth: "560px" }}>
              How engagements are structured.
            </h2>
          </div>

          <div>
            {PROOF.map((p, i) => (
              <div key={p.tier} className="forge-proof-card" style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start" }}>
                <div style={{ flex: "0 0 220px" }}>
                  <h3 className="font-display" style={{ fontWeight: 600, fontSize: "22px", lineHeight: 1.15, letterSpacing: "-0.01em", color: "#1C1C1A", marginBottom: "8px" }}>{p.tier}</h3>
                  <p className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#1B5E6B" }}>{p.detail}</p>
                </div>
                <p style={{ flex: "1 1 400px", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "15px", lineHeight: 1.7, color: "#6B6660", paddingTop: "4px" }}>{p.desc}</p>
                <div style={{ flex: "0 0 auto", paddingTop: "4px" }}>
                  <Link href="/proof" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.04em", color: "#1B5E6B", textDecoration: "none" }}>Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 8. ABOUT ─────────────────────────────────────────── */}
        <Hr />
        <section style={{ background: "#F4F1EB", padding: "96px 48px" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "flex-start" }}>
            {/* Left image */}
            <div style={{ flex: "1 1 42%", minWidth: "260px", position: "relative", minHeight: "480px" }} className="hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&q=85"
                alt="Manufacturing operations"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Right copy */}
            <div style={{ flex: "1 1 44%", minWidth: "280px" }}>
              <span className="section-label">About Forge</span>
              <h2 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1C1C1A", marginBottom: "24px" }}>
                A new firm built around a clear point of view.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "16px", lineHeight: 1.75, color: "#6B6660", marginBottom: "24px" }}>
                Forge exists to bring a serious, operations-first approach to AI in manufacturing. We don't sell software. We don't do generic AI strategy. We build transformation programs that run in real plants.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "16px", lineHeight: 1.75, color: "#6B6660", marginBottom: "48px" }}>
                Built by three partners — Adrian, Keith, and Keaton — who came up through manufacturing operations, data, and AI, not the other way around.
              </p>

              {/* Partners */}
              <div style={{ borderTop: "1px solid #D4D0C8" }}>
                {["Adrian", "Keith", "Keaton"].map((name, i) => (
                  <div key={name} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 0",
                    borderBottom: i < 2 ? "1px solid #D4D0C8" : "none",
                  }}>
                    <span className="font-display" style={{ fontWeight: 600, fontSize: "20px", letterSpacing: "-0.01em", color: "#1C1C1A" }}>{name}</span>
                    <span className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#9B978F" }}>Partner</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "36px" }}>
                <Link href="/about" className="forge-btn-outline">Learn about the firm</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA ─────────────────────────────────────── */}
        <section style={{ background: "#0F3A42", padding: "120px 48px" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto", textAlign: "center" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: "28px" }}>
              Get Started
            </span>
            <h2 className="font-display" style={{ fontWeight: 600, fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "#FFFFFF", maxWidth: "800px", margin: "0 auto 40px" }}>
              If your plants already know they need help, Forge is built for that moment.
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <Link href="/contact" className="forge-btn-primary" style={{ background: "#FFFFFF", color: "#0F3A42" }}>
                Book a Strategy Call
              </Link>
              <Link href="/contact" className="forge-btn-outline-light">Discuss a Pilot</Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
