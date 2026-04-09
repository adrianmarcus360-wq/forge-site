"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, Crosshair, GlowDivider } from "@/components/Motion";

const industries = [
  {
    name: "Automotive",
    desc: "Assembly line optimization, weld quality prediction, and just-in-time supply coordination.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="0.8">
        <circle cx="20" cy="20" r="15" />
        <circle cx="20" cy="20" r="8" />
        <circle cx="20" cy="20" r="2" />
        <line x1="20" y1="5" x2="20" y2="12" />
        <line x1="20" y1="28" x2="20" y2="35" />
        <line x1="5" y1="20" x2="12" y2="20" />
        <line x1="28" y1="20" x2="35" y2="20" />
      </svg>
    ),
  },
  {
    name: "Food & Beverage",
    desc: "Batch consistency, contamination detection, and regulatory compliance automation.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="0.8">
        <rect x="8" y="12" width="24" height="22" rx="1" />
        <line x1="8" y1="20" x2="32" y2="20" />
        <line x1="20" y1="12" x2="20" y2="34" />
        <path d="M14 6 L20 12 L26 6" />
      </svg>
    ),
  },
  {
    name: "Heavy Industry",
    desc: "Equipment health monitoring, blast furnace optimization, and safety incident prediction.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="0.8">
        <polygon points="20,4 36,34 4,34" />
        <line x1="20" y1="14" x2="20" y2="26" />
        <circle cx="20" cy="30" r="1.5" />
      </svg>
    ),
  },
  {
    name: "Pharmaceuticals",
    desc: "Process analytical technology, deviation detection, and GMP compliance through continuous monitoring.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="0.8">
        <rect x="10" y="4" width="20" height="32" rx="10" />
        <line x1="10" y1="20" x2="30" y2="20" />
        <circle cx="20" cy="12" r="3" />
        <circle cx="20" cy="28" r="3" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-28 lg:py-40 bg-graphite noise-overlay">
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <Crosshair />
              <span className="text-[10px] tracking-[0.3em] uppercase text-teal/60 font-medium">
                05 — Industries
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-stone mb-6">
              Built for environments where downtime costs millions.
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {industries.map((ind) => (
            <StaggerItem key={ind.name}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="group flex gap-6 p-8 border border-white/[0.04] hover:border-teal/15 bg-white/[0.01] hover:bg-teal/[0.02] transition-all duration-500"
              >
                <div className="text-teal/30 group-hover:text-teal/60 transition-colors duration-500 shrink-0 mt-1">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone mb-3 group-hover:text-white transition-colors duration-300">
                    {ind.name}
                  </h3>
                  <p className="text-[14px] text-steel/60 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <GlowDivider className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
