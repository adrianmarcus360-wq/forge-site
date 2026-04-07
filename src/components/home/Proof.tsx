"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const proofCards = [
  {
    title: "Plant-level pilot",
    description: "30–45 days focused on one line, one plant, or one operational priority.",
  },
  {
    title: "Regional rollout",
    description: "3–5 plants aligned around a shared operating model and measurable outcomes.",
  },
  {
    title: "Enterprise network program",
    description: "Multi-plant transformation with executive visibility and a scalable governance layer.",
  },
];

export default function Proof() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
              Proof
            </p>
            <h2 className="font-serif text-display-sm lg:text-display text-charcoal mb-6">
              How Forge engagements are structured to create value
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {proofCards.map((card, i) => (
            <StaggerItem key={i}>
              <div className="border border-stone/60 p-8 lg:p-10 h-full">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel mb-2 block">
                  Engagement model 0{i + 1}
                </span>
                <h3 className="font-serif text-heading text-charcoal mb-4 mt-4">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate">
                  {card.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-12">
          <p className="text-sm text-slate max-w-xl">
            Built to support multi-year relationships where transformation is measured in uptime, quality, efficiency, and operational maturity.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8">
          <Link
            href="/proof"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-teal hover:text-teal-dark transition-colors"
          >
            View proof architecture →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
