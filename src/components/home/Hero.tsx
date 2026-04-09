"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal, FadeIn } from "@/components/Motion";
import RoboticArm from "@/components/visuals/RoboticArm";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const armOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const armScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian to-graphite" />

      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      {/* Radial glow behind arm */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-teal/[0.04] rounded-full blur-[120px]" />

      {/* Robotic arm visual */}
      <motion.div
        style={{ opacity: armOpacity, scale: armScale }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] opacity-80 hidden md:block"
      >
        <RoboticArm />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: textY }} className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-3xl">
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-teal" />
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-teal">
                AI Transformation for Manufacturing
              </p>
            </div>
          </FadeIn>

          <h1 className="font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[1.02] tracking-tight text-stone mb-8">
            <TextReveal text="We turn factory data into" delay={0.5} />
            <br />
            <TextReveal text="operational advantage." delay={0.9} className="text-gradient" />
          </h1>

          <FadeIn delay={1.3}>
            <p className="text-lg lg:text-xl leading-relaxed text-steel max-w-xl mb-12">
              Forge helps manufacturers reduce downtime, scrap, and energy waste
              through premium AI programs built for real plants and real operators.
            </p>
          </FadeIn>

          <FadeIn delay={1.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-teal text-white text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-teal-light transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Book a Strategy Call</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-stone text-[12px] font-medium tracking-[0.15em] uppercase hover:border-teal/40 hover:text-teal transition-all duration-300"
              >
                Explore the Model
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          {/* Tags */}
          <FadeIn delay={1.9}>
            <div className="flex flex-wrap gap-3 mt-16">
              {["Predictive Maintenance", "Smart Factory", "Quality Analytics", "Multi-Plant Visibility"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase text-steel/60 border border-white/5 bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </motion.div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
        <div className="h-24 bg-gradient-to-t from-graphite/50 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-steel/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-teal/40 to-transparent" />
      </motion.div>
    </section>
  );
}
