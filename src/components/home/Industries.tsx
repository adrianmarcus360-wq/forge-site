"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const industries = [
  "Plastics and packaging",
  "Automotive suppliers",
  "Food and beverage",
  "Heavy industrial and process manufacturing",
];

export default function Industries() {
  return (
    <section className="bg-bone py-20 lg:py-28">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
              Industries
            </p>
            <h2 className="font-serif text-display-sm lg:text-display text-charcoal mb-6">
              Built for complex manufacturing environments
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-base leading-relaxed text-slate">
              Each manufacturing environment has different constraints, systems, and economics. Forge is intentionally built around operational reality, not generic AI messaging.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <StaggerItem key={i}>
              <div className="bg-ivory p-8 border border-stone/60 hover:border-teal/30 transition-colors duration-300 h-full flex flex-col justify-between min-h-[160px]">
                <h3 className="font-serif text-xl text-charcoal leading-snug">
                  {industry}
                </h3>
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel mt-6">
                  Learn more →
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-teal hover:text-teal-dark transition-colors"
          >
            View all industries →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
