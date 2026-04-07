"use client";

import Link from "next/link";
import { FadeIn } from "@/components/Motion";

const partners = ["Adrian", "Keith", "Keaton"];

export default function About() {
  return (
    <section className="bg-bone py-20 lg:py-28">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <FadeIn>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
                About Forge
              </p>
              <h2 className="font-serif text-display-sm lg:text-display text-charcoal mb-6">
                A new firm built around a clear point of view
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-base leading-relaxed text-slate mb-8">
                Forge was created to serve manufacturers that need a more serious approach to AI transformation — one that respects plant reality, embeds the right expertise, and builds toward multi-year operational improvement.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <Link
                href="/about"
                className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-teal hover:text-teal-dark transition-colors"
              >
                Learn more about us →
              </Link>
            </FadeIn>
          </div>

          <div className="flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-steel mb-8">
                Partners
              </h3>
            </FadeIn>
            <div className="space-y-6">
              {partners.map((name, i) => (
                <FadeIn key={name} delay={0.3 + i * 0.1}>
                  <div className="border-t border-stone/60 pt-6">
                    <span className="font-serif text-xl text-charcoal">
                      {name}
                    </span>
                    <span className="block text-xs text-steel mt-1 tracking-wide uppercase">
                      Partner
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
