import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ClientMarquee from "@/components/ClientMarquee";
import ApproachIntro from "@/components/ApproachIntro";
import Phases from "@/components/Phases";
import CaseStudies from "@/components/CaseStudies";
import Technology from "@/components/Technology";
import WhyUs from "@/components/WhyUs";
import Outcomes from "@/components/Outcomes";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ClientMarquee />
      <ApproachIntro />
      <Phases />
      <CaseStudies />
      <Technology />
      <WhyUs />
      <Outcomes />
      <FinalCTA />
    </main>
  );
}
