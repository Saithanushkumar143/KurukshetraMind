
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CharactersSection from "@/components/CharactersSection";
import ExamplesSection from "@/components/ExamplesSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      <HowItWorksSection />
      <CharactersSection />
      <ExamplesSection />
      <TrustSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
