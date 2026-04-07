"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const outcomes = [
  "More predictable uptime",
  "Lower scrap and rework",
  "Better energy economics",
  "Faster visibility into plant issues",
  "Stronger cross-site operating discipline",
  "A scalable transformation model, not isolated experiments",
];

export default function Outcomes() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
            Outcomes
          </p>
          <h2 className="font-serif text-display-sm lg:text-display text-charcoal mb-16 max-w-2xl">
            What the best programs create
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 p-6 bg-bone border border-stone/40">
                <div className="w-2 h-2 bg-teal rounded-full mt-1.5 shrink-0" />
                <p className="text-base font-medium text-charcoal leading-snug">
                  {outcome}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-12">
          <p className="text-sm text-slate max-w-xl">
            Forge is designed for manufacturers that want a durable operating advantage, not another disconnected pilot.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
