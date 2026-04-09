"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, TextReveal } from "@/components/Motion";

export default function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-48 bg-obsidian noise-overlay overflow-hidden">
      {/* Blueprint grid faint */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />

      {/* Large radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-teal/60 font-medium mb-8">
            Ready to start?
          </p>
        </FadeIn>

        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-stone mb-8 max-w-3xl mx-auto">
          <TextReveal text="Your data is already telling you something. Let's listen." />
        </h2>

        <FadeIn delay={0.6}>
          <p className="text-lg text-steel max-w-xl mx-auto mb-12">
            Book a 30-minute strategy call. No pitch deck. Just an honest conversation
            about where AI can actually move the needle in your operations.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-10 py-5 bg-teal text-white text-[13px] font-medium tracking-[0.15em] uppercase hover:bg-teal-light transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Book a Strategy Call</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              href="/proof"
              className="inline-flex items-center justify-center px-10 py-5 border border-white/10 text-stone text-[13px] font-medium tracking-[0.15em] uppercase hover:border-teal/30 transition-all duration-300"
            >
              See the Proof
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
