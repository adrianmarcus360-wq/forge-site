"use client";

import Link from "next/link";
import { FadeIn } from "@/components/Motion";

export default function FinalCTA() {
  return (
    <section className="bg-graphite text-ivory py-20 lg:py-28">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-display-sm lg:text-display text-ivory mb-6">
              If your plants already know they need help, Forge is built for that moment.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-base lg:text-lg leading-relaxed text-ivory/60 mb-12">
              Whether you want to start with one plant or design a broader operating model, Forge begins with a focused conversation around where value is getting lost today and what a practical first step looks like.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-ivory text-charcoal text-[13px] font-medium tracking-wide uppercase hover:bg-bone transition-colors duration-200"
              >
                Book a strategy call
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-ivory/20 text-ivory text-[13px] font-medium tracking-wide uppercase hover:border-ivory/40 transition-colors duration-200"
              >
                Discuss a pilot
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
