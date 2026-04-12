import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Forge",
  description: "A niche AI execution firm built exclusively for manufacturing.",
};

export default function AboutPage() {
  return (
    <PageLayout
      label="About"
      title="Built exclusively for manufacturing."
      subtitle="Forge is a niche AI execution firm. We don't work across every industry. We work in manufacturing — because that's where our focus is sharpest, our network is deepest, and the opportunity is largest."
    >
      {/* Point of View */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-display-sm text-charcoal mb-8">
              What we believe
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "The alignment session is the product.",
                  body: "Every AI program fails for the same reason: it was built around what a vendor wanted to sell, not what the operation actually needed. Our alignment session changes that. It's how we learn your industry, your priorities, and your language — before a single line of code is written.",
                },
                {
                  title: "Humans in the loop aren't optional.",
                  body: "AI agents need oversight. Every system Forge builds comes with trained operators who run it, review it, and keep it accurate. The technology works because accountable people are behind it.",
                },
                {
                  title: "Manufacturing is decades behind — and that's the opportunity.",
                  body: "Most manufacturing operations have barely scratched the surface of what AI can change for them. The gap between what's possible and what's been deployed is enormous. That's not a problem for us. It's why we're here.",
                },
                {
                  title: "The model works before the expertise does.",
                  body: "We've learned dozens of industries across years of agency work. The approach to finding the right problem and building the right solution is always the same. Once you learn the language and the data, the execution is what matters. We're very good at execution.",
                },
              ].map((belief, i) => (
                <div key={i} className="border-t border-stone/60 pt-6">
                  <h3 className="font-serif text-heading text-charcoal mb-3">
                    {belief.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {belief.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why manufacturing */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-display-sm text-charcoal mb-6">
                Why manufacturing, exclusively
              </h2>
              <p className="text-base leading-relaxed text-slate mb-4">
                Forge focuses on manufacturing because we have the network, the context, and the conviction that this is where AI transformation has the most ground to cover — and the most value to unlock.
              </p>
              <p className="text-base leading-relaxed text-slate">
                The companies we work with are running complex operations with real constraints. They&apos;re not startups experimenting with AI. They&apos;re serious organizations that need serious execution. That&apos;s the work we built Forge to do.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-display-sm text-charcoal mb-6">
                What sets us apart
              </h2>
              <p className="text-base leading-relaxed text-slate mb-4">
                We don&apos;t come in as manufacturing consultants pretending to know your operation better than you do. We come in as execution experts who know how to surface what&apos;s possible, build what solves it, and place the people who run it.
              </p>
              <p className="text-base leading-relaxed text-slate">
                The alignment session is how we earn the right to build. The operators are how we earn the right to stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite text-ivory py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm text-ivory mb-6">
              If you&apos;re in manufacturing and AI feels like unfinished business —
            </h2>
            <p className="text-base text-ivory/60 mb-8">
              Start with an alignment session. One conversation to surface where the opportunity is and what it would take to close it.
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
