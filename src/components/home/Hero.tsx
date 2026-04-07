"use client";

import Link from "next/link";
import { FadeIn } from "@/components/Motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-ivory pt-[72px]">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(42,42,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(42,42,42,1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-wide mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-8">
              Premium AI transformation
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight text-charcoal mb-8">
              AI transformation for manufacturers who care about uptime.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-lg lg:text-xl leading-relaxed text-slate max-w-2xl mb-12">
              Forge helps manufacturers reduce downtime, scrap, and energy waste through premium AI transformation programs built for real plants, real operators, and multi-site operations.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-ivory text-[13px] font-medium tracking-wide uppercase hover:bg-graphite transition-colors duration-200"
              >
                Book a strategy call
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-charcoal/20 text-charcoal text-[13px] font-medium tracking-wide uppercase hover:border-charcoal/40 transition-colors duration-200"
              >
                Explore the Forge model
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.65}>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                "Predictive maintenance",
                "Smart factory transformation",
                "Quality analytics",
                "Multi-plant visibility",
              ].map((item) => (
                <span key={item} className="text-[13px] tracking-wide text-steel font-medium">
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone to-transparent" />
    </section>
  );
}
