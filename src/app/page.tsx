import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Jardins de Prestige | Paysagiste de Luxe à Lyon",
  description:
    "Paysagiste haut de gamme à Lyon. Création de jardins d'exception, aménagement paysager, entretien et élagage. Devis gratuit.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <StatsSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
