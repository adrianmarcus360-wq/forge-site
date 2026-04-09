"use client";

import { FadeIn, Crosshair, GlowDivider } from "@/components/Motion";

const partners = [
  { name: "Adrian Marcus", role: "Managing Partner", focus: "AI Strategy & Operations" },
  { name: "Keith", role: "Partner", focus: "Manufacturing Operations" },
  { name: "Keaton", role: "Partner", focus: "Technology & Engineering" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40 bg-graphite noise-overlay">
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Statement */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <Crosshair />
                <span className="text-[10px] tracking-[0.3em] uppercase text-teal/60 font-medium">
                  07 — About
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-stone mb-8">
                At Forge, we craft more than models. We shape operating advantage.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-steel leading-relaxed mb-6">
                We&apos;re operators who learned AI, not the other way around. Every model we build
                starts on the plant floor, not in a lab.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[15px] text-steel/60 leading-relaxed">
                Our partners have collectively spent decades inside manufacturing facilities.
                We understand that the best AI in the world is useless if the third-shift
                operator won&apos;t trust it.
              </p>
            </FadeIn>
          </div>

          {/* Right: Partners */}
          <div className="space-y-6">
            {partners.map((p, i) => (
              <FadeIn key={p.name} delay={0.2 + i * 0.1} direction="left">
                <div className="group p-6 border border-white/[0.04] hover:border-teal/15 bg-white/[0.01] transition-all duration-500">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-stone group-hover:text-white transition-colors duration-300">
                        {p.name}
                      </h3>
                      <p className="text-[12px] tracking-[0.1em] uppercase text-teal/50 mt-1">
                        {p.role}
                      </p>
                    </div>
                    <span className="text-[11px] text-steel/40 border border-white/5 px-2 py-1">
                      {p.focus}
                    </span>
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
