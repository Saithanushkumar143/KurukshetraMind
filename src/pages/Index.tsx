
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CharactersSection from "@/components/CharactersSection";
import ExamplesSection from "@/components/ExamplesSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import VisitorCounter from "@/components/VisitorCounter";
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackScroller from "@/components/FeedbackScroller";

interface Feedback {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Load existing feedbacks from localStorage
    const savedFeedbacks = localStorage.getItem('kurukshetramind_feedbacks');
    if (savedFeedbacks) {
      try {
        setFeedbacks(JSON.parse(savedFeedbacks));
      } catch (error) {
        console.error('Error loading feedbacks:', error);
      }
    }
  }, []);

  const handleFeedbackSubmit = (feedback: { name: string; message: string }) => {
    const newFeedback: Feedback = {
      id: Date.now().toString(),
      name: feedback.name,
      message: feedback.message,
      timestamp: Date.now()
    };

    const updatedFeedbacks = [newFeedback, ...feedbacks].slice(0, 50); // Keep only latest 50
    setFeedbacks(updatedFeedbacks);
    
    // Save to localStorage
    localStorage.setItem('kurukshetramind_feedbacks', JSON.stringify(updatedFeedbacks));
  };

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      <HowItWorksSection />
      <CharactersSection />
      <ExamplesSection />
      
      {/* Feedback Section */}
      <section className="py-16 px-4 bg-spiritual-charcoal/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Share Your Journey
            </h2>
            <p className="text-spiritual-beige/80 max-w-2xl mx-auto">
              Your wisdom and experiences inspire others on their path to enlightenment
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
            <div className="space-y-6">
              <FeedbackScroller feedbacks={feedbacks} />
            </div>
          </div>
        </div>
      </section>
      
      <TrustSection />
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;
