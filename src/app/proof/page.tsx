import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proof — Forge",
  description: "How Forge engagements are structured to create measurable, durable transformation value.",
};

const scenarios = [
  {
    title: "Reducing unplanned downtime at a multi-line plastics facility",
    context: "A plastics manufacturer running 12 extrusion and injection molding lines across two shifts was experiencing 15–20% unplanned downtime, driven primarily by bearing failures, hydraulic system issues, and heating element degradation.",
    approach: "Forge deployed vibration and temperature monitoring on critical assets, built predictive models for the three dominant failure modes, and integrated alerting into the existing maintenance workflow.",
    outcome: "Unplanned downtime on monitored assets reduced by 40% within the first 6 months. Maintenance shifted from reactive to condition-based on 80% of critical equipment.",
  },
  {
    title: "Building quality intelligence across an automotive supplier network",
    context: "A Tier 1 automotive supplier with four plants was managing quality through manual SPC and reactive root cause analysis. Defect patterns that were obvious across plants were invisible to individual site teams.",
    approach: "Forge built a cross-plant quality analytics layer that aggregated SPC data, correlated defect patterns with process variables, and provided each plant with benchmarked performance views.",
    outcome: "First-pass yield improved by 3.2% across the network. Time to root cause on recurring defects dropped from weeks to days. Two plants achieved their best quality scores in company history.",
  },
  {
    title: "Energy optimization in a food & beverage processing environment",
    context: "A food processor with significant refrigeration, compressed air, and steam loads was spending $4M+ annually on energy with limited visibility into consumption patterns or optimization opportunities.",
    approach: "Forge deployed sub-metering analytics, built consumption models by production mode, and identified scheduling and setpoint changes that reduced waste without impacting product quality.",
    outcome: "Energy cost reduced by 12% in the first year through operational changes alone — no capital equipment required. The analytics platform provided ongoing visibility for continuous improvement.",
  },
];

export default function ProofPage() {
  return (
    <PageLayout
      label="Proof"
      title="How Forge engagements are structured to create value"
      subtitle="Forge is an early firm with a rigorous approach. Rather than fabricated testimonials, we show how our engagement models and methods create measurable outcomes."
    >
      {/* Engagement Models */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-12">
            Engagement models
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Plant-level pilot",
                duration: "30–45 days",
                description: "Focused on one line, one plant, or one operational priority. Designed to prove value quickly and build the business case for expansion.",
                scope: ["Single plant or production area", "One primary use case", "Data assessment and system mapping", "Executive-ready findings and roadmap"],
              },
              {
                title: "Regional rollout",
                duration: "12–24 months",
                description: "3–5 plants aligned around a shared operating model and measurable outcomes. The bridge between pilot success and enterprise transformation.",
                scope: ["Multi-plant deployment", "Standardized operating model", "Cross-site benchmarking", "Embedded specialist teams"],
              },
              {
                title: "Enterprise network program",
                duration: "3–5 years",
                description: "Multi-plant transformation with executive visibility and a scalable governance layer. Built for manufacturers committed to durable operational advantage.",
                scope: ["Full network coverage", "Enterprise governance layer", "Executive dashboards and scorecards", "Continuous improvement and expansion"],
              },
            ].map((model, i) => (
              <div key={i} className="bg-ivory p-8 lg:p-10 border border-stone/60">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-2">
                  Model 0{i + 1}
                </span>
                <h3 className="font-serif text-heading text-charcoal mb-2 mt-4">
                  {model.title}
                </h3>
                <p className="text-xs text-teal font-medium tracking-wide uppercase mb-4">
                  {model.duration}
                </p>
                <p className="text-sm leading-relaxed text-slate mb-6">
                  {model.description}
                </p>
                <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel mb-3">
                  Typical scope
                </h4>
                <ul className="space-y-2">
                  {model.scope.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-teal rounded-full mt-1.5 shrink-0" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anonymized Scenarios */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
              Sample scenarios
            </p>
            <h2 className="font-serif text-display-sm text-charcoal mb-4">
              What successful Forge programs look like
            </h2>
            <p className="text-sm text-slate">
              The following scenarios represent the types of engagements and outcomes Forge is built to deliver. Details have been generalized to protect client confidentiality.
            </p>
          </div>

          <div className="space-y-12">
            {scenarios.map((scenario, i) => (
              <div key={i} className="border border-stone/60 p-8 lg:p-12">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-4">
                  Scenario 0{i + 1}
                </span>
                <h3 className="font-serif text-heading text-charcoal mb-8">
                  {scenario.title}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal mb-3">
                      Context
                    </h4>
                    <p className="text-sm leading-relaxed text-slate">{scenario.context}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal mb-3">
                      Approach
                    </h4>
                    <p className="text-sm leading-relaxed text-slate">{scenario.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal mb-3">
                      Outcome
                    </h4>
                    <p className="text-sm leading-relaxed text-slate">{scenario.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Framework */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
              Outcome framework
            </p>
            <h2 className="font-serif text-display-sm text-charcoal mb-4">
              How Forge measures transformation success
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "Uptime", description: "Reduction in unplanned downtime and improvement in asset availability" },
              { metric: "Quality", description: "Improvement in first-pass yield and reduction in scrap, rework, and defects" },
              { metric: "Efficiency", description: "Reduction in energy waste, cycle time, and operational overhead" },
              { metric: "Maturity", description: "Progress on operational AI readiness, adoption, and governance capability" },
            ].map((item, i) => (
              <div key={i} className="bg-ivory p-6 border border-stone/60">
                <div className="w-8 h-px bg-teal mb-5" />
                <h3 className="font-serif text-xl text-charcoal mb-3">{item.metric}</h3>
                <p className="text-sm leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite text-ivory py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm text-ivory mb-6">
              Built for outcomes, not optics.
            </h2>
            <p className="text-base text-ivory/60 mb-8">
              Forge measures success in uptime, quality, efficiency, and operational maturity — not slide decks and status reports.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-ivory text-charcoal text-[13px] font-medium tracking-wide uppercase hover:bg-bone transition-colors"
            >
              Discuss a pilot
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
