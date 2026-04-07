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

export default function Home() {
  return (
    <>
      <Header />
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
