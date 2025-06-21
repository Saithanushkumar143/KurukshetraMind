
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CharactersSection from "@/components/CharactersSection";
import ExamplesSection from "@/components/ExamplesSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import VisitorCounter from "@/components/VisitorCounter";
import FeedbackSection from "@/components/FeedbackSection";

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
      <FeedbackSection />
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;
