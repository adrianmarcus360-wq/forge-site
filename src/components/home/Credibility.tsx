"use client";

import { AnimatedCounter, FadeIn, GlowDivider, Crosshair } from "@/components/Motion";

const stats = [
  { value: 40, suffix: "%", label: "Downtime reduction" },
  { value: 25, suffix: "%", label: "Scrap reduction" },
  { value: 15, suffix: "%", label: "Energy savings" },
  { value: 100, suffix: "+", label: "Plant deployments" },
];

export default function Credibility() {
  return (
    <section id="credibility" className="relative py-24 lg:py-32 bg-graphite noise-overlay">
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Crosshair />
            <span className="text-[10px] tracking-[0.3em] uppercase text-teal/60 font-medium">Proven Outcomes</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.15}>
              <div className="relative group">
                <div className="text-[clamp(2.5rem,5vw,4rem)] font-serif text-stone leading-none mb-3 tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="text-[12px] tracking-[0.1em] uppercase text-steel/60 font-medium">
                  {stat.label}
                </p>
                <div className="absolute -bottom-4 left-0 w-8 h-px bg-teal/20 group-hover:w-16 transition-all duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <GlowDivider className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
