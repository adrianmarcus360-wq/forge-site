"use client";

import dynamic from "next/dynamic";

const ScrollProgress = dynamic(() => import("@/components/Motion").then((m) => m.ScrollProgress), { ssr: false });

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Credibility from "@/components/home/Credibility";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Outcomes from "@/components/home/Outcomes";
import Industries from "@/components/home/Industries";
import Proof from "@/components/home/Proof";
import About from "@/components/home/About";
import FinalCTA from "@/components/home/FinalCTA";

const sections = [
  { id: "hero", label: "Home", number: "00" },
  { id: "credibility", label: "Impact", number: "01" },
  { id: "services", label: "Services", number: "02" },
  { id: "method", label: "Method", number: "03" },
  { id: "outcomes", label: "Outcomes", number: "04" },
  { id: "industries", label: "Industries", number: "05" },
  { id: "proof", label: "Proof", number: "06" },
  { id: "about", label: "About", number: "07" },
];

export default function Home() {
  return (
    <>
      <Header />
      <ScrollProgress sections={sections} />
      <main>
        <Hero />
        <Credibility />
        <Services />
        <HowItWorks />
        <Outcomes />
        <Industries />
        <Proof />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
