"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, Crosshair } from "@/components/Motion";

const scenarios = [
  {
    industry: "Automotive OEM",
    challenge: "Unplanned downtime on welding line costing $180K per incident",
    outcome: "43% reduction in unplanned stops within 12 weeks",
    approach: "Vibration + thermal sensor fusion with custom failure prediction model",
  },
  {
    industry: "Food Processing",
    challenge: "Batch inconsistency driving 18% scrap rate on packaging line",
    outcome: "Scrap reduced to 6% with real-time SPC automation",
    approach: "Computer vision quality gates + statistical process control integration",
  },
  {
    industry: "Heavy Manufacturing",
    challenge: "Energy costs 30% above benchmark, no visibility into waste sources",
    outcome: "19% energy reduction, $2.4M annual savings",
    approach: "Load pattern analysis + production schedule optimization engine",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="relative py-28 lg:py-40 bg-obsidian noise-overlay">
      <div className="absolute inset-0 blueprint-grid opacity-10" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <Crosshair />
              <span className="text-[10px] tracking-[0.3em] uppercase text-teal/60 font-medium">
                06 — Proof
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-stone mb-6">
              Real results. Anonymized for obvious reasons.
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
          {scenarios.map((s, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ borderColor: "rgba(26,107,106,0.25)" }}
                className="group border border-white/[0.06] bg-white/[0.01] p-8 lg:p-12 transition-all duration-500"
              >
                <div className="grid lg:grid-cols-[200px_1fr_1fr] gap-8 lg:gap-12">
                  <div>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-teal/40 block mb-2">Industry</span>
                    <h3 className="font-serif text-xl text-stone">{s.industry}</h3>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-teal/40 block mb-2">Challenge</span>
                    <p className="text-[14px] text-steel leading-relaxed mb-4">{s.challenge}</p>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-teal/40 block mb-2">Approach</span>
                    <p className="text-[13px] text-steel/50 leading-relaxed">{s.approach}</p>
                  </div>
                  <div className="lg:text-right">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-teal/40 block mb-2">Result</span>
                    <p className="font-serif text-2xl lg:text-3xl text-teal leading-tight">{s.outcome}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
