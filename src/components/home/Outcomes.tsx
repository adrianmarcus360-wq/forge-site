"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeIn, AnimatedCounter, Crosshair } from "@/components/Motion";

const outcomes = [
  { metric: 40, suffix: "%", label: "Downtime reduction", desc: "Average across predictive maintenance deployments" },
  { metric: 25, suffix: "%", label: "Scrap reduction", desc: "Through AI-powered quality inspection" },
  { metric: 15, suffix: "%", label: "Energy savings", desc: "Optimized scheduling and load balancing" },
  { metric: 3, suffix: "x", label: "ROI in year one", desc: "Typical return on transformation investment" },
  { metric: 90, suffix: "%", label: "Operator adoption", desc: "Tools built for the floor, not the boardroom" },
  { metric: 8, suffix: "wk", label: "Time to first value", desc: "From kickoff to measurable impact" },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="relative py-28 lg:py-40 bg-obsidian noise-overlay">
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      {/* Large background number */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[25vw] font-serif text-white/[0.015] leading-none select-none pointer-events-none">
        ROI
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <Crosshair />
              <span className="text-[10px] tracking-[0.3em] uppercase text-teal/60 font-medium">
                04 — Outcomes
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-stone mb-6">
              Numbers that survive the boardroom.
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]" staggerDelay={0.08}>
          {outcomes.map((o) => (
            <StaggerItem key={o.label}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(26,107,106,0.04)" }}
                className="p-8 lg:p-10 bg-obsidian transition-colors duration-500 group"
              >
                <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-serif text-stone leading-none mb-2 tracking-tight">
                  <AnimatedCounter target={o.metric} suffix={o.suffix} duration={2} />
                </div>
                <h4 className="text-[13px] tracking-[0.1em] uppercase text-teal/60 font-medium mb-3">
                  {o.label}
                </h4>
                <p className="text-[14px] text-steel/60 leading-relaxed">
                  {o.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
