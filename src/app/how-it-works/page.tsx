import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Forge Works — Forge",
  description: "From focused pilot to multi-year transformation. A premium operating model built for outcomes.",
};

export default function HowItWorksPage() {
  return (
    <PageLayout
      label="How Forge Works"
      title="A better model than hiring one unicorn and hoping it works."
      subtitle="Manufacturers often know they need AI transformation, but struggle to hire the exact mix of plant experience, data capability, and execution maturity required to make it real. Forge fills that gap."
    >
      {/* The Problem */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-display-sm text-charcoal mb-6">
              The hiring problem nobody talks about
            </h2>
            <p className="text-base leading-relaxed text-slate mb-6">
              Most manufacturers that attempt AI transformation try to hire a single leader or small team to figure it out. They need someone who understands plant operations, data engineering, machine learning, change management, and executive communication — all at once.
            </p>
            <p className="text-base leading-relaxed text-slate mb-6">
              That person barely exists. And when they do, they&apos;re expensive, hard to retain, and usually can&apos;t cover the full spectrum of what multi-site transformation requires.
            </p>
            <p className="text-base leading-relaxed text-charcoal font-medium">
              Forge replaces the impossible unicorn hire with a premium operating model that brings the right expertise at the right time — from pilot through enterprise scale.
            </p>
          </div>
        </div>
      </section>

      {/* Three Phases */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-12">
            The Forge engagement model
          </p>

          {/* Phase 1 */}
          <div className="border-t border-stone/60 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              <div>
                <span className="font-serif text-display text-teal/30 block mb-2">01</span>
                <h3 className="font-serif text-heading text-charcoal">Pilot</h3>
                <p className="text-sm text-steel mt-2">30–45 days</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base leading-relaxed text-slate mb-6">
                  A focused engagement to identify high-value opportunities, map systems and data, and prove value in one plant or production area.
                </p>
                <ul className="space-y-3">
                  {[
                    "Operational assessment and data landscape mapping",
                    "Identification of highest-ROI transformation opportunities",
                    "Proof of value on one focused use case",
                    "Executive-ready business case and roadmap",
                    "Clear go/no-go criteria for expansion",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal rounded-full mt-2 shrink-0" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="border-t border-stone/60 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              <div>
                <span className="font-serif text-display text-teal/30 block mb-2">02</span>
                <h3 className="font-serif text-heading text-charcoal">Deploy</h3>
                <p className="text-sm text-steel mt-2">6–18 months</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base leading-relaxed text-slate mb-6">
                  Forge helps stand up the right operating layer, embeds the right specialists, and works alongside plant and leadership teams to move from insight to execution.
                </p>
                <ul className="space-y-3">
                  {[
                    "Production-grade AI system deployment",
                    "Embedded specialists working alongside plant teams",
                    "Integration with existing OT/IT infrastructure",
                    "Operator training and adoption programs",
                    "Executive visibility and progress reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal rounded-full mt-2 shrink-0" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="border-t border-stone/60 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              <div>
                <span className="font-serif text-display text-teal/30 block mb-2">03</span>
                <h3 className="font-serif text-heading text-charcoal">Scale</h3>
                <p className="text-sm text-steel mt-2">Multi-year</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base leading-relaxed text-slate mb-6">
                  What works gets extended across lines, plants, and business units with a structure leadership can measure and support over time.
                </p>
                <ul className="space-y-3">
                  {[
                    "Cross-plant deployment with standardized playbooks",
                    "Enterprise governance and transformation scorecards",
                    "Best-practice transfer between sites",
                    "Continuous model improvement and new use cases",
                    "Internal capability building and knowledge transfer",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal rounded-full mt-2 shrink-0" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Specialists */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-display-sm text-charcoal mb-6">
                Embedded specialists, not outsourced labor
              </h2>
              <p className="text-base leading-relaxed text-slate">
                Forge doesn&apos;t send junior consultants with slide decks. We embed experienced specialists — data scientists who understand manufacturing processes, engineers who can bridge OT and IT, and program leaders who know how to drive adoption at the plant level.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-display-sm text-charcoal mb-6">
                Executive visibility built in
              </h2>
              <p className="text-base leading-relaxed text-slate">
                Every Forge program includes structured reporting and executive dashboards that give leadership real visibility into transformation progress, ROI tracking, and cross-site performance — without requiring them to dig through technical detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite text-ivory py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm text-ivory mb-6">
              Start with a conversation, not a contract.
            </h2>
            <p className="text-base text-ivory/60 mb-8">
              Every Forge engagement begins with understanding your operational reality — where value is getting lost, what systems are in place, and what a practical first step looks like.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-ivory text-charcoal text-[13px] font-medium tracking-wide uppercase hover:bg-bone transition-colors"
            >
              Book a strategy call
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
