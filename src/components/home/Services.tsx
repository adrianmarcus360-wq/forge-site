"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const services = [
  {
    title: "Predictive maintenance and reliability",
    description:
      "Reduce unplanned downtime and improve asset performance with AI-driven monitoring, diagnostics, and maintenance intelligence.",
  },
  {
    title: "Smart factory transformation",
    description:
      "Turn plant data into operational leverage through systems, dashboards, and decision support that actually get used on the floor.",
  },
  {
    title: "Quality and scrap intelligence",
    description:
      "Identify defect patterns, process instability, and waste drivers across lines, products, and plants.",
  },
  {
    title: "Multi-plant AI operating model",
    description:
      "Standardize how transformation gets deployed, measured, and improved across locations with leadership visibility built in.",
  },
];

export default function Services() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-wide mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
            Services
          </p>
          <h2 className="font-serif text-display-sm lg:text-display text-charcoal mb-16">
            What Forge helps manufacturers solve
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <div className="group p-8 lg:p-10 border border-stone/60 hover:border-teal/30 transition-colors duration-300 h-full">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-heading text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-teal hover:text-teal-dark transition-colors"
          >
            View all services →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
