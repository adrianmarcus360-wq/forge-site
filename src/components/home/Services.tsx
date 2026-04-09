"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeIn, Crosshair } from "@/components/Motion";

const services = [
  {
    number: "01",
    title: "Predictive Maintenance",
    desc: "ML models trained on your equipment data. Predict failures before they happen, schedule maintenance when it makes sense.",
    tags: ["Vibration analysis", "Thermal modeling", "Failure prediction"],
  },
  {
    number: "02",
    title: "Quality Analytics",
    desc: "Computer vision and statistical process control powered by AI. Catch defects upstream, reduce scrap downstream.",
    tags: ["Vision inspection", "SPC automation", "Root cause"],
  },
  {
    number: "03",
    title: "Energy Optimization",
    desc: "Real-time energy modeling across production lines. Find waste, optimize schedules, cut costs without cutting output.",
    tags: ["Load balancing", "Peak shaving", "Carbon tracking"],
  },
  {
    number: "04",
    title: "Multi-Plant Visibility",
    desc: "Unified data layer across sites. Compare performance, share learnings, standardize best practices at scale.",
    tags: ["Cross-site analytics", "KPI dashboards", "Benchmarking"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-40 bg-obsidian noise-overlay">
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <Crosshair />
              <span className="text-[10px] tracking-[0.3em] uppercase text-teal/60 font-medium">
                02 — Services
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-stone mb-6">
              Engineered for the plant floor.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-steel leading-relaxed">
              Each service is built around real manufacturing problems — not theoretical AI use cases.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 lg:p-10 border border-white/[0.06] bg-white/[0.02] hover:border-teal/20 hover:bg-teal/[0.03] transition-all duration-500"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="text-[11px] font-mono text-teal/40 tracking-wider mb-4 block">
                  {service.number}
                </span>
                <h3 className="font-serif text-2xl text-stone mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[15px] text-steel leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.1em] uppercase text-teal/40 border border-teal/10 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
