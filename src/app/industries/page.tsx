import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries — Forge",
  description: "AI transformation built for plastics, automotive, food & beverage, and heavy industrial manufacturing.",
};

const industries = [
  {
    title: "Plastics and packaging",
    pain: "High-speed lines with thin margins mean every minute of unplanned downtime and every percentage point of scrap directly erodes profitability. Aging equipment, inconsistent quality across shifts, and limited visibility into process drift make continuous improvement difficult at scale.",
    opportunity: "AI-driven process monitoring can detect drift before it becomes scrap. Predictive maintenance on extruders, injection molders, and converting lines reduces unplanned stops. Cross-plant analytics help identify best practices and standardize performance.",
    fit: "Forge understands the operational cadence of plastics and packaging plants — fast cycles, tight tolerances, and the need for solutions that work on the floor without disrupting production.",
  },
  {
    title: "Automotive suppliers",
    pain: "Tier 1 and Tier 2 suppliers face relentless quality demands from OEMs, complex multi-part production environments, and the constant pressure to reduce cost while maintaining perfect delivery. Most plants have islands of data but no unified intelligence layer.",
    opportunity: "Quality prediction models can catch defects earlier in the process. Machine learning on SPC data reveals patterns human analysis misses. Maintenance intelligence reduces the unplanned downtime that threatens delivery commitments.",
    fit: "Forge builds programs that respect the rigor automotive suppliers already operate under while adding the AI capability layer that makes quality, maintenance, and efficiency gains compounding rather than incremental.",
  },
  {
    title: "Food and beverage",
    pain: "Perishable inputs, strict regulatory requirements, seasonal variability, and aging infrastructure create a uniquely complex operating environment. Energy costs are significant, and downtime on critical lines can mean spoiled product and missed shipments.",
    opportunity: "Energy optimization across refrigeration, heating, and compressed air systems offers measurable savings. Predictive maintenance on fillers, conveyors, and packaging lines reduces waste. Quality analytics improve consistency and reduce holds.",
    fit: "Forge designs programs that account for the regulatory, safety, and perishability constraints unique to food and beverage — building AI solutions that plant teams can trust and compliance teams can verify.",
  },
  {
    title: "Heavy industrial and process manufacturing",
    pain: "Capital-intensive operations with long asset lifecycles, complex process control, and high consequences for unplanned failures. Many plants run on decades-old control systems with limited digital infrastructure.",
    opportunity: "Condition monitoring and predictive analytics on critical rotating equipment, heat exchangers, and process units can prevent catastrophic failures and extend asset life. Process optimization models improve yield and energy efficiency simultaneously.",
    fit: "Forge has the patience and depth for heavy industrial environments — understanding that transformation here means working within existing control architectures, long maintenance windows, and the operational discipline these environments demand.",
  },
];

export default function IndustriesPage() {
  return (
    <PageLayout
      label="Industries"
      title="Built for complex manufacturing environments"
      subtitle="Each manufacturing environment has different constraints, systems, and economics. Forge is intentionally built around operational reality, not generic AI messaging."
    >
      <section className="bg-bone">
        {industries.map((industry, i) => (
          <div key={i} className={`py-16 lg:py-24 ${i > 0 ? "border-t border-stone/60" : ""}`}>
            <div className="max-w-wide mx-auto px-6 lg:px-12">
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel mb-4 block">
                0{i + 1}
              </span>
              <h2 className="font-serif text-display-sm text-charcoal mb-10">
                {industry.title}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                    Common operational pain
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {industry.pain}
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                    Where data and AI help
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {industry.opportunity}
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                    Why Forge fits
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {industry.fit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-graphite text-ivory py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm text-ivory mb-6">
              Operating in a different manufacturing vertical?
            </h2>
            <p className="text-base text-ivory/60 mb-8">
              Forge&apos;s operating model adapts to the specific constraints and economics of your environment. Let&apos;s talk about what transformation looks like for your plants.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-ivory text-charcoal text-[13px] font-medium tracking-wide uppercase hover:bg-bone transition-colors"
            >
              Book a strategy call
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
