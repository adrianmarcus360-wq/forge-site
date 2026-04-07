"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const steps = [
  {
    number: "01",
    title: "Pilot",
    description:
      "A focused 30–45 day engagement to identify high-value opportunities, map systems and data, and prove value in one plant or production area.",
  },
  {
    number: "02",
    title: "Deploy",
    description:
      "Forge helps stand up the right operating layer, embeds the right specialists, and works alongside plant and leadership teams to move from insight to execution.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "What works gets extended across lines, plants, and business units with a structure leadership can measure and support over time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-graphite text-ivory py-20 lg:py-28">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal-light mb-4">
              How Forge Works
            </p>
            <h2 className="font-serif text-display-sm lg:text-display text-ivory mb-6">
              A better model than hiring one unicorn and hoping it works.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-base lg:text-lg leading-relaxed text-ivory/60">
              Manufacturers often know they need AI transformation, but struggle to hire the exact mix of plant experience, data capability, and execution maturity required to make it real. Forge fills that gap with a premium operating model built for outcomes.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="border-t border-ivory/15 pt-8">
                <span className="font-serif text-display-sm text-teal-light mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-serif text-heading text-ivory mb-4">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ivory/50">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-teal-light hover:text-ivory transition-colors"
          >
            Learn more about our model →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
