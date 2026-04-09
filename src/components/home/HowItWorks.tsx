"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, Crosshair, GlowDivider } from "@/components/Motion";

const phases = [
  {
    number: "01",
    title: "Diagnose",
    subtitle: "Weeks 1–4",
    desc: "We embed with your operations team. Map data sources, identify high-value AI targets, and build a business case your CFO will believe.",
    deliverables: ["Data audit report", "AI opportunity map", "ROI model", "Executive briefing"],
  },
  {
    number: "02",
    title: "Build",
    subtitle: "Weeks 5–16",
    desc: "Custom ML models built on your actual production data. No generic solutions — everything is trained on your equipment, your patterns, your edge cases.",
    deliverables: ["Trained models", "Integration specs", "Operator dashboards", "Validation results"],
  },
  {
    number: "03",
    title: "Scale",
    subtitle: "Ongoing",
    desc: "Roll out to additional lines, shifts, and sites. Continuous model retraining. The system gets smarter the longer it runs.",
    deliverables: ["Multi-site rollout plan", "Model monitoring", "Performance reviews", "Expansion roadmap"],
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="method" ref={containerRef} className="relative py-28 lg:py-40 bg-graphite noise-overlay">
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <Crosshair />
              <span className="text-[10px] tracking-[0.3em] uppercase text-teal/60 font-medium">
                03 — Method
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-stone mb-6">
              Three phases. Zero guesswork.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-steel leading-relaxed">
              Every engagement follows a proven path from data audit to operational impact.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-px bg-white/5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-teal/60 to-teal/10 glow-line"
            />
          </div>

          <div className="space-y-20 lg:space-y-32">
            {phases.map((phase, i) => (
              <FadeIn key={phase.number} delay={i * 0.15}>
                <div className={`relative flex flex-col lg:flex-row gap-8 lg:gap-20 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-[12px] lg:left-1/2 lg:-translate-x-1/2 top-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="w-[15px] h-[15px] rounded-full border-2 border-teal bg-obsidian"
                    />
                  </div>

                  {/* Content */}
                  <div className={`pl-12 lg:pl-0 lg:w-1/2 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                    <span className="text-[11px] font-mono text-teal/50 tracking-wider block mb-2">
                      {phase.number} — {phase.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl lg:text-4xl text-stone mb-4">
                      {phase.title}
                    </h3>
                    <p className="text-[15px] text-steel leading-relaxed mb-6">
                      {phase.desc}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 1 ? "lg:justify-end" : ""}`}>
                      {phase.deliverables.map((d) => (
                        <span
                          key={d}
                          className="text-[10px] tracking-[0.1em] uppercase text-teal/40 border border-teal/10 px-2.5 py-1"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <GlowDivider className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
