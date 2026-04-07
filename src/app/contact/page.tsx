import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Forge",
  description: "Book a strategy call or discuss a pilot engagement with Forge.",
};

export default function ContactPage() {
  return (
    <PageLayout
      label="Contact"
      title="Start with a conversation, not a commitment."
      subtitle="Whether you're exploring a pilot for one plant or thinking about a broader transformation strategy, Forge begins with understanding your operational reality."
    >
      <section className="bg-bone py-16 lg:py-24">
        <div className="max-w-wide mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div>
              <h2 className="font-serif text-heading text-charcoal mb-8">
                Tell us about your situation
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-ivory border border-stone/60 text-charcoal text-sm focus:outline-none focus:border-teal transition-colors"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-ivory border border-stone/60 text-charcoal text-sm focus:outline-none focus:border-teal transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-ivory border border-stone/60 text-charcoal text-sm focus:outline-none focus:border-teal transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-ivory border border-stone/60 text-charcoal text-sm focus:outline-none focus:border-teal transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-ivory border border-stone/60 text-charcoal text-sm focus:outline-none focus:border-teal transition-colors"
                    placeholder="Your title or role"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-steel block mb-2">
                    What are you looking to solve?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-ivory border border-stone/60 text-charcoal text-sm focus:outline-none focus:border-teal transition-colors resize-none"
                    placeholder="Brief description of your situation or what you'd like to discuss"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-ivory text-[13px] font-medium tracking-wide uppercase hover:bg-graphite transition-colors w-full sm:w-auto"
                >
                  Book a strategy call
                </button>
              </form>
            </div>

            {/* Context */}
            <div className="lg:pt-12">
              <h2 className="font-serif text-heading text-charcoal mb-6">
                What to expect
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Initial conversation",
                    description: "A focused 30-minute call to understand your operational environment, current challenges, and what transformation success looks like for your organization.",
                  },
                  {
                    title: "Assessment",
                    description: "If there's a fit, Forge will outline what a pilot engagement would look like — scope, timeline, expected outcomes, and investment.",
                  },
                  {
                    title: "No pressure",
                    description: "Forge works with manufacturers who are ready. If the timing isn't right, we're happy to stay in touch and reconnect when it makes sense.",
                  },
                ].map((step, i) => (
                  <div key={i} className="border-t border-stone/60 pt-5">
                    <h3 className="text-sm font-medium text-charcoal mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-ivory border border-stone/60">
                <p className="text-sm text-slate leading-relaxed">
                  Forge works best with mid-sized and large manufacturers that have multiple plants or clear expansion potential. If you&apos;re exploring what AI transformation means for your operations, this is a good place to start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
