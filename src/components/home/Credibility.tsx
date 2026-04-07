"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const proofTiles = [
  { text: "Starts with a focused 30–45 day pilot" },
  { text: "Expands into 3–5 year transformation partnerships" },
  { text: "Built for plant-level execution and executive visibility" },
  { text: "Designed for multi-site manufacturers" },
];

export default function Credibility() {
  return (
    <section className="bg-bone py-20 lg:py-28">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <h2 className="font-serif text-display-sm lg:text-display text-charcoal mb-6">
              Built for the plants where inefficiency gets expensive fast.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-base lg:text-lg leading-relaxed text-slate">
              Forge partners with manufacturers that know operational waste compounds across lines, shifts, and locations. We help teams move from disconnected data and isolated initiatives to a structured AI operating model that improves uptime, quality, and efficiency over time.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofTiles.map((tile, i) => (
            <StaggerItem key={i}>
              <div className="bg-ivory p-6 lg:p-8 border border-stone/60 h-full">
                <div className="w-8 h-px bg-teal mb-5" />
                <p className="text-sm leading-relaxed text-charcoal font-medium">
                  {tile.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
