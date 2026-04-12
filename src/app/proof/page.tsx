import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Forge Engagements Work — Forge",
  description: "The structure behind every Forge engagement — from alignment through agents, dashboards, and embedded operators.",
};

const scenarios = [
  {
    title: "Internal knowledge agent for a multi-location manufacturing operation",
    context: "A mid-size manufacturing company with four locations was struggling with tribal knowledge — experienced employees holding critical operational information that wasn't documented, searchable, or accessible to new hires or other locations.",
    approach: "Forge ran an alignment session with department heads across locations. Knowledge agent identified as the highest-leverage starting point. Built an internal agent trained on documentation, SOPs, and recorded expertise — searchable by every employee across every location.",
    outcome: "Onboarding time for new operators reduced significantly. Team leads across locations could answer questions without interrupting senior staff. Cross-site knowledge sharing improved measurably. Two operators placed to manage the agent and expand its training over time.",
  },
  {
    title: "Executive and plant manager briefing automation",
    context: "A plant operations executive was spending two to three hours per day assembling information from different departments and locations into a coherent picture of what was happening across the operation.",
    approach: "Alignment session surfaced this as the #1 pain point for leadership. Forge built a briefing agent that automatically aggregated inputs from every department on a defined schedule, surfaced exceptions, and delivered a structured summary to the executive team.",
    outcome: "Executive briefing time eliminated entirely. Leadership had better information faster, with exceptions surfaced automatically instead of buried in reports. Plant managers received their own version of the same briefing tailored to their location.",
  },
  {
    title: "Competitor and market tracking agent for a plastics manufacturer",
    context: "A plastics manufacturer's sales and leadership team was tracking competitors manually — sporadic searches, fragmented information, no consistent cadence. They were often surprised by competitor moves in the market.",
    approach: "Alignment session identified competitive intelligence as a high-value, low-cost opportunity. Forge built a competitor tracking agent that monitored defined sources on a daily schedule and delivered structured updates to the relevant team members.",
    outcome: "Leadership received consistent, structured competitive intelligence every week without any manual effort. The sales team was better prepared for conversations with customers. One operator placed to manage the agent and expand its tracking scope over time.",
  },
];

export default function ProofPage() {
  return (
    <PageLayout
      label="Proof"
      title="What Forge engagements look like in practice"
      subtitle="Forge is a focused firm. Rather than fabricated testimonials, we show how our engagement model creates real outcomes — and what the structure behind those outcomes actually looks like."
    >
      {/* Engagement Models */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-12">
            Engagement tiers
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Core engagement",
                duration: "1 agent · 1 dashboard · 2 operators",
                description: "One alignment session identifies the highest-value starting point. One agent solves it. One dashboard tracks it. Two trained operators run it.",
                scope: ["Full alignment session with leadership", "One custom AI agent built to spec", "Role-appropriate dashboard", "Two embedded operators, fully trained", "30–45 days to first agent live"],
              },
              {
                title: "Expanded program",
                duration: "3–5 agents · multi-dashboard · larger team",
                description: "Alignment surfaces a broader opportunity set. Agents deployed in priority order with coordinated dashboards and a dedicated operator team.",
                scope: ["Alignment session with all departments", "Multiple agents deployed by priority", "Coordinated dashboards by role and location", "Dedicated operator team", "Ongoing alignment as new needs emerge"],
              },
              {
                title: "Enterprise network",
                duration: "Multi-site · full operator network",
                description: "A complete AI operations layer across locations — with executive-level visibility and operators embedded at every site.",
                scope: ["Multi-location alignment sessions", "Agent ecosystem built to enterprise spec", "Executive visibility across all sites", "Operators at every location", "Continuous expansion model"],
              },
            ].map((model, i) => (
              <div key={i} className="bg-ivory p-8 lg:p-10 border border-stone/60">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-2">
                  Tier 0{i + 1}
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
                  What&apos;s included
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

      {/* Scenarios */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
              Sample engagements
            </p>
            <h2 className="font-serif text-display-sm text-charcoal mb-4">
              What the model produces
            </h2>
            <p className="text-sm text-slate">
              The following represent the types of engagements Forge is built to deliver. Details have been generalized.
            </p>
          </div>

          <div className="space-y-12">
            {scenarios.map((scenario, i) => (
              <div key={i} className="border border-stone/60 p-8 lg:p-12">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-4">
                  Engagement 0{i + 1}
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

      <section className="bg-graphite text-ivory py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm text-ivory mb-6">
              Every engagement starts with alignment.
            </h2>
            <p className="text-base text-ivory/60 mb-8">
              One session with your leadership team. We surface every AI opportunity, rank it by impact, and leave with a clear path to the first agent.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-ivory text-charcoal text-[13px] font-medium tracking-wide uppercase hover:bg-bone transition-colors"
            >
              Book an alignment session
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
