
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { trackButtonClick, trackExternalLink, trackUserEngagement } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Track when user scrolls past hero section
    const handleScrollEngagement = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        trackUserEngagement('scroll_past_hero');
        window.removeEventListener("scroll", handleScrollEngagement);
      }
    };
    window.addEventListener("scroll", handleScrollEngagement);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEngagement);
    };
  }, [trackUserEngagement]);

  const handleStartJourney = () => {
    trackButtonClick('start_journey', 'hero_section');
    trackExternalLink('https://project-mahabharat.onrender.com/explore', 'Start Your Journey');
    window.open('https://project-mahabharat.onrender.com/explore', '_blank');
  };

  const handleExploreWisdom = () => {
    trackButtonClick('explore_wisdom', 'hero_section');
    trackExternalLink('https://project-mahabharat.onrender.com/explore', 'Explore Wisdom');
    window.open('https://project-mahabharat.onrender.com/explore', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Battlefield Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-spiritual-warm-black/80 via-spiritual-charcoal/60 to-spiritual-warm-black/90" />
      
      <div className="absolute top-20 left-10 w-2 h-2 bg-spiritual-gold rounded-full opacity-70" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-saffron-400 rounded-full opacity-60" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-spiritual-gold/50 rounded-full opacity-50" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        {/* Main Headline */}
        <h1 className="font-sanskrit text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
          <span className="text-gradient">
            When Life Becomes
          </span>
          <br />
          <span className="text-spiritual-beige">
            Your Kurukshetra
          </span>
        </h1>
        
        <p className="font-body text-lg md:text-xl lg:text-2xl text-spiritual-beige/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Find guidance for your inner battles through the timeless wisdom of the Mahabharata. 
          Transform emotional struggles into spiritual growth.
        </p>
        
        <div className="mb-10 p-6 border border-spiritual-gold/30 rounded-lg bg-spiritual-charcoal/30 backdrop-blur-sm">
          <p className="font-devanagari text-spiritual-gold text-lg mb-2">
            यदा यदा हि धर्मस्य ग्लानिर्भवति भारत
          </p>
          <p className="text-spiritual-beige/70 text-sm italic">
            "Whenever dharma declines and adharma rises, I manifest myself" - Bhagavad Gita 4.7
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="spiritual-gradient text-spiritual-warm-black font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform duration-300"
            onClick={handleStartJourney}
          >
            🕉️ Start Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-spiritual-gold text-spiritual-gold hover:bg-spiritual-gold hover:text-spiritual-warm-black px-8 py-4 text-lg transition-all duration-300"
            onClick={handleExploreWisdom}
          >
            📖 Explore Wisdom
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-spiritual-beige/60">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-spiritual-gold rounded-full"></span>
            Inspired by the Bhagavad Gita
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-spiritual-gold rounded-full"></span>
            5000+ Years of Wisdom
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-spiritual-gold rounded-full"></span>
            Modern Guidance
          </span>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-spiritual-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-spiritual-gold rounded-full mt-2 opacity-80"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
