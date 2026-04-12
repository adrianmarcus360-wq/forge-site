import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Forge",
  description: "Alignment sessions, custom AI agents, operations dashboards, and embedded operators for manufacturing.",
};

const services = [
  {
    id: "alignment-session",
    title: "Alignment session",
    description:
      "The starting point for every Forge engagement. We bring your leadership together — across departments, across levels — to surface where AI can move the needle, then rank every opportunity by time and cost to value.",
    details: [
      "Structured discovery with leaders across operations, IT, finance, and the executive team",
      "Surfaces AI opportunities your team already knows exist but hasn't had a framework to act on",
      "Prioritization by time to value and cost to value — not by technical complexity",
      "Delivers a ranked action list your team owns and understands",
      "Creates the shared language needed to build the right things in the right order",
    ],
  },
  {
    id: "custom-ai-agents",
    title: "Custom AI agents",
    description:
      "Built around exactly what came out of your alignment session. Not templates, not off-the-shelf tools — agents designed for the specific workflows, data, and decisions your operation relies on.",
    details: [
      "Internal knowledge agents trained on your data, answering questions across every level of the company",
      "Automated briefing agents for executives, plant managers, and team leads",
      "Competitor tracking and market intelligence agents",
      "Scheduling, routing, and operational decision support agents",
      "AI receptionists and intake agents for internal and external workflows",
    ],
  },
  {
    id: "operations-dashboards",
    title: "Operations dashboards",
    description:
      "Every agent we build comes with visibility. Dashboards configured for whoever needs to see what — plant managers, team leads, or the executive suite — with multiple access levels and multi-site support built in.",
    details: [
      "Role-based dashboards so each level of leadership sees what they need",
      "Multi-site and multi-location visibility from a single interface",
      "Real-time output monitoring for every agent in your system",
      "Alert and exception tracking to surface what needs attention",
      "Custom metrics built around the outcomes your alignment session identified",
    ],
  },
  {
    id: "embedded-operators",
    title: "Embedded operators",
    description:
      "Every system we build is run by trained people. We hire and place the operators who manage your agents day-to-day — two humans in the loop at minimum — so the technology works because someone is accountable for it.",
    details: [
      "Operator hiring, vetting, and placement matched to your operation's needs",
      "Full training on every agent and dashboard in your system",
      "Day-to-day agent management, output review, and quality control",
      "Escalation protocols and exception handling procedures",
      "Ongoing performance reviews and system improvement recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageLayout
      label="Services"
      title="Four things every Forge engagement includes."
      subtitle="Every engagement starts with an alignment session to discover what matters. Everything else — agents, dashboards, operators — is built around what that session surfaces."
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
              The alignment session is where it starts.
            </h2>
            <p className="text-base text-ivory/60 mb-8">
              One structured session with your leadership team to surface every AI opportunity in your operation and rank it by impact. Everything else follows from that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-ivory text-charcoal text-[13px] font-medium tracking-wide uppercase hover:bg-bone transition-colors"
              >
                Book an alignment session
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
