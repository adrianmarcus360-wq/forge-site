import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Forge",
  description: "Predictive maintenance, smart factory transformation, quality analytics, and multi-plant AI operating models.",
};

const services = [
  {
    id: "predictive-maintenance",
    title: "Predictive maintenance and reliability",
    description:
      "Reduce unplanned downtime and improve asset performance with AI-driven monitoring, diagnostics, and maintenance intelligence.",
    details: [
      "Condition-based monitoring and early fault detection",
      "Asset health scoring and remaining useful life estimation",
      "Maintenance scheduling optimization",
      "Integration with existing CMMS and historian systems",
      "Reliability-centered maintenance program design",
    ],
  },
  {
    id: "smart-factory",
    title: "Smart factory and Industry 4.0 transformation",
    description:
      "Turn plant data into operational leverage through systems, dashboards, and decision support that actually get used on the floor.",
    details: [
      "OEE improvement and real-time production visibility",
      "Operator decision support and alerting systems",
      "Data infrastructure and integration architecture",
      "Digital twin and simulation capabilities",
      "Change management and operator adoption programs",
    ],
  },
  {
    id: "quality-scrap",
    title: "Quality and scrap intelligence",
    description:
      "Identify defect patterns, process instability, and waste drivers across lines, products, and plants.",
    details: [
      "Root cause analysis and defect pattern recognition",
      "Statistical process control with AI augmentation",
      "Scrap reduction and yield optimization",
      "Cross-line and cross-plant quality benchmarking",
      "Supplier quality correlation and incoming inspection intelligence",
    ],
  },
  {
    id: "multi-plant",
    title: "Multi-plant AI operating model",
    description:
      "Standardize how transformation gets deployed, measured, and improved across locations with leadership visibility built in.",
    details: [
      "Enterprise AI governance and operating model design",
      "Cross-site performance benchmarking and best-practice transfer",
      "Executive dashboards and transformation scorecards",
      "Standardized deployment playbooks for new sites",
      "Organizational readiness and capability building",
    ],
  },
  {
    id: "embedded-specialists",
    title: "Embedded specialists and long-term support",
    description:
      "Access the exact mix of plant experience, data capability, and execution maturity required — without the impossible hiring challenge.",
    details: [
      "Embedded data scientists with manufacturing domain expertise",
      "Integration engineers for OT/IT convergence",
      "Program managers for multi-workstream coordination",
      "Ongoing model monitoring, tuning, and improvement",
      "Knowledge transfer and internal capability development",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageLayout
      label="Services"
      title="Strategy meets execution at the plant level."
      subtitle="Forge delivers premium AI transformation programs designed for operational outcomes, multi-year relationships, and real plant execution — not cheap implementations or disconnected experiments."
    >
      <section className="bg-bone">
        {services.map((service, i) => (
          <div
            key={service.id}
            id={service.id}
            className={`py-16 lg:py-24 ${i > 0 ? "border-t border-stone/60" : ""}`}
          >
            <div className="max-w-wide mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel mb-4 block">
                    0{i + 1}
                  </span>
                  <h2 className="font-serif text-display-sm text-charcoal mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base leading-relaxed text-slate">
                    {service.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel mb-6">
                    What this includes
                  </h3>
                  <ul className="space-y-4">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-teal rounded-full mt-2 shrink-0" />
                        <span className="text-sm leading-relaxed text-charcoal">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-graphite text-ivory py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm text-ivory mb-6">
              Ready to discuss what transformation looks like for your operations?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-ivory text-charcoal text-[13px] font-medium tracking-wide uppercase hover:bg-bone transition-colors"
              >
                Book a strategy call
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-ivory/20 text-ivory text-[13px] font-medium tracking-wide uppercase hover:border-ivory/40 transition-colors"
              >
                See how Forge works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
