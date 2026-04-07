import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Forge",
  description: "A new firm built around a clear point of view on manufacturing AI transformation.",
};

export default function AboutPage() {
  return (
    <PageLayout
      label="About"
      title="A new firm built around a clear point of view"
      subtitle="Forge was created to serve manufacturers that need a more serious approach to AI transformation — one that respects plant reality, embeds the right expertise, and builds toward multi-year operational improvement."
    >
      {/* Point of View */}
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-display-sm text-charcoal mb-8">
              What we believe
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Manufacturing AI is an operating model problem, not a technology problem.",
                  body: "The technology exists. What's missing in most plants is the structured operating model that turns data and algorithms into operational decisions, adoption, and measurable improvement.",
                },
                {
                  title: "The unicorn hire doesn't work.",
                  body: "No single hire can cover the full spectrum of plant operations, data engineering, machine learning, change management, and executive communication that multi-site transformation requires. It takes a team — but the right team.",
                },
                {
                  title: "Transformation is measured in years, not sprints.",
                  body: "Real operational improvement compounds over time. Forge is built for multi-year partnerships where we earn the right to expand through results, not through vendor lock-in.",
                },
                {
                  title: "Plant reality comes first.",
                  body: "Every solution we design must work in the operational environment as it actually exists — with its constraints, its people, its systems, and its rhythms. We don't impose Silicon Valley on the shop floor.",
                },
              ].map((belief, i) => (
                <div key={i} className="border-t border-stone/60 pt-6">
                  <h3 className="font-serif text-heading text-charcoal mb-3">
                    {belief.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {belief.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-12">
            Partners
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Adrian",
                role: "Partner",
              },
              {
                name: "Keith",
                role: "Partner",
              },
              {
                name: "Keaton",
                role: "Partner",
              },
            ].map((partner, i) => (
              <div key={i} className="border border-stone/60 p-8 lg:p-10">
                <div className="w-16 h-16 bg-stone/40 mb-6" />
                <h3 className="font-serif text-xl text-charcoal mb-1">
                  {partner.name}
                </h3>
                <span className="text-xs text-steel tracking-wide uppercase">
                  {partner.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite text-ivory py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm text-ivory mb-6">
              Building something different takes conviction.
            </h2>
            <p className="text-base text-ivory/60 mb-8">
              If you&apos;re a manufacturer looking for a more serious approach to AI transformation, we&apos;d welcome the conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-ivory text-charcoal text-[13px] font-medium tracking-wide uppercase hover:bg-bone transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
