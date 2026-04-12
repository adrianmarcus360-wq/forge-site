import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Forge Works — Forge",
  description: "Alignment session, custom AI agents, dashboards, and embedded operators. The Forge model.",
};

export default function HowItWorksPage() {
  return (
    <PageLayout
      label="How Forge Works"
      title="Discover. Build. Operate."
      subtitle="Three stages. Every engagement follows the same model — because the model works regardless of what your operation does or what AI has or hasn't touched yet."
    >
      {/* The Problem */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-display-sm text-charcoal mb-6">
              Why most AI programs stall
            </h2>
            <p className="text-base leading-relaxed text-slate mb-6">
              Most manufacturing operations know AI could change something. They just don&apos;t know where to start, what to prioritize, or how to make sure it actually gets used once it&apos;s built.
            </p>
            <p className="text-base leading-relaxed text-slate mb-6">
              So they hire a consultant who delivers a deck. Or they buy a platform that requires six months of integration before anything works. Or they build something internally that only one person understands.
            </p>
            <p className="text-base leading-relaxed text-charcoal font-medium">
              Forge starts differently — with a structured alignment session that surfaces what your team already knows, ranks it by impact, and produces a clear path forward. Then we build it. Then we run it.
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
                <h3 className="font-serif text-heading text-charcoal">Align</h3>
                <p className="text-sm text-steel mt-2">Week 1</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base leading-relaxed text-slate mb-6">
                  A structured session with your leadership across every department. The goal isn&apos;t to come in with answers — it&apos;s to surface the ones your team already has, then prioritize them together.
                </p>
                <ul className="space-y-3">
                  {[
                    "Leaders from operations, IT, finance, and the executive team in one room",
                    "Open discovery: what slows you down, what information you wish you had, what you&apos;d automate first",
                    "Every opportunity ranked by time to value and cost to value",
                    "Clear prioritized action list that your team owns and understands",
                    "Foundation for everything built in Stage 2",
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
                <h3 className="font-serif text-heading text-charcoal">Build</h3>
                <p className="text-sm text-steel mt-2">Weeks 2–6</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base leading-relaxed text-slate mb-6">
                  Agents and dashboards built around exactly what the alignment session produced. Not a template or a demo — the specific tools your team said they needed, configured for how your operation actually works.
                </p>
                <ul className="space-y-3">
                  {[
                    "Custom AI agents built to spec from alignment priorities",
                    "Dashboards configured for each stakeholder level",
                    "Integration with your existing systems and data sources",
                    "Full testing before any operator is placed",
                    "Documentation so your team understands what was built and why",
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
                <h3 className="font-serif text-heading text-charcoal">Operate</h3>
                <p className="text-sm text-steel mt-2">Month 2 onward</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base leading-relaxed text-slate mb-6">
                  Every system we build is run by trained people. We hire and place the operators who manage your agents day-to-day — at minimum two humans in the loop — so the technology works because someone is accountable for it.
                </p>
                <ul className="space-y-3">
                  {[
                    "Operator hiring, vetting, and placement matched to your operation",
                    "Full training on every agent and dashboard before go-live",
                    "Day-to-day management, output review, and exception handling",
                    "Ongoing performance tracking against alignment-session priorities",
                    "The model scales as new needs emerge from future alignment sessions",
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

      {/* Why it works */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-display-sm text-charcoal mb-6">
                Humans in the loop — by design
              </h2>
              <p className="text-base leading-relaxed text-slate">
                Every Forge engagement includes trained operators who run the system. Not because the AI can&apos;t handle it — but because accountability matters. When a person is responsible for every agent&apos;s output, the system stays accurate, the team stays informed, and nothing falls through the cracks.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-display-sm text-charcoal mb-6">
                Built around your data, not ours
              </h2>
              <p className="text-base leading-relaxed text-slate">
                The alignment session means every agent we build is trained on what you already have — your systems, your workflows, your language. We don&apos;t come in with a fixed product and force your operation to fit it. We come in with a process and build the product that fits you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite text-ivory py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm text-ivory mb-6">
              Start with the alignment session.
            </h2>
            <p className="text-base text-ivory/60 mb-8">
              One structured session with your leadership team. We surface every AI opportunity in your operation, rank it by impact, and leave with a clear path forward.
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
