import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function PageLayout({
  children,
  title,
  subtitle,
  label,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  label?: string;
}) {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <section className="bg-ivory py-20 lg:py-28">
          <div className="max-w-wide mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              {label && (
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal mb-4">
                  {label}
                </p>
              )}
              <h1 className="font-serif text-display-sm lg:text-display-lg text-charcoal mb-6">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg leading-relaxed text-slate">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
