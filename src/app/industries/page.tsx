import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries — Forge",
  description: "AI execution built exclusively for manufacturing — plastics, automotive, food & beverage, and heavy industrial.",
};

const industries = [
  {
    title: "Plastics and packaging",
    pain: "High-throughput lines running tight margins. Every hour of unplanned downtime and every percentage point of scrap compounds quickly. The data exists — across machines, shifts, and plants — but no one has connected it to decisions.",
    opportunity: "Agent automation can surface process drift before it becomes defects, automate shift reporting, and give plant managers real-time visibility across lines. The alignment session surfaces which of these is worth solving first.",
    fit: "Forge comes in with the process, not the assumptions. The alignment session tells us where the friction is. We build the agents that remove it.",
  },
  {
    title: "Automotive suppliers",
    pain: "Quality requirements from OEMs are relentless. Compliance, traceability, and delivery pressure create constant demand for information that's buried in systems no one can query quickly. Most plants are doing more manual work than they should.",
    opportunity: "Automated quality tracking agents, compliance briefing agents, and production visibility dashboards eliminate the manual overhead that slows every department. The alignment session identifies which workflows are worth automating first.",
    fit: "Forge builds around what your alignment session surfaces — not around what a software vendor assumes you need. Every agent is built for how your operation actually works.",
  },
  {
    title: "Food and beverage",
    pain: "Regulatory requirements, perishable inputs, changeover complexity, and aging infrastructure make for a uniquely demanding environment. Most teams are operating with less visibility than they should have, across more variables than any individual can track.",
    opportunity: "Internal knowledge agents, automated compliance agents, and production briefing agents address the information burden that consumes team time and creates risk. The alignment session identifies the highest-leverage starting points.",
    fit: "We start with what your leadership team knows is broken. The alignment session turns that knowledge into a ranked action list. Then we build.",
  },
  {
    title: "Heavy industrial and process manufacturing",
    pain: "Asset-intensive operations with long equipment lifecycles, complex process control, and serious consequences for anything that fails or slows. Teams are often managing more complexity than their current information systems can support.",
    opportunity: "Executive briefing agents, maintenance decision support, and cross-department visibility dashboards address the information gaps that cost real money in these environments. The alignment session surfaces which ones matter most to your leadership.",
    fit: "Forge doesn't come in with a solution already in mind. The alignment session is how we learn your environment. The agents we build are the answer to what your team tells us they need.",
  },
];

export default function IndustriesPage() {
  return (
    <PageLayout
      label="Industries"
      title="Exclusively built for manufacturing."
      subtitle="Manufacturing is where Forge focuses. Every alignment session, every agent, every operator we place is built around how these environments actually work — and what's been left on the table."
    >
      <section className="bg-bone">
        {industries.map((industry, i) => (
          <div key={i} className={`py-16 lg:py-24 ${i > 0 ? "border-t border-stone/60" : ""}`}>
            <div className="max-w-wide mx-auto px-6 lg:px-12">
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel mb-4 block">
                0{i + 1}
              </span>
              <h2 className="font-serif text-display-sm text-charcoal mb-10">
                {industry.title}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                    What we hear most
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {industry.pain}
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                    Where agents help
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {industry.opportunity}
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                    How Forge approaches it
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {industry.fit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-graphite text-ivory py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm text-ivory mb-6">
              The alignment session works in any of these environments.
            </h2>
            <p className="text-base text-ivory/60 mb-8">
              We don&apos;t come in knowing exactly what you need. We come in with a process that surfaces it. That&apos;s the alignment session — and it&apos;s where every engagement starts.
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
