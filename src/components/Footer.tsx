
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";

const Footer = () => {
  const { trackButtonClick, trackExternalLink } = useAnalytics();

  const handleStartJourney = () => {
    trackButtonClick('start_journey', 'footer_section');
    trackExternalLink('https://project-mahabharat.onrender.com/explore', 'Start Your Journey Now');
    window.open('https://project-mahabharat.onrender.com/explore', '_blank');
  };

  const handleLinkClick = (linkName: string, url: string) => {
    trackExternalLink(url, linkName);
  };

  return (
    <footer className="py-16 px-6 border-t border-spiritual-gold/20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="font-sanskrit text-2xl font-semibold text-gradient mb-4">
              KurukshetraMind
            </h3>
            <p className="text-spiritual-beige/70 mb-6 max-w-md">
              Transforming modern struggles through ancient wisdom. 
              Find guidance, peace, and purpose through the timeless teachings of the Mahabharata.
            </p>
            <div className="font-devanagari text-spiritual-gold text-sm mb-2">
              योगः कर्मसु कौशलम्
            </div>
            <p className="text-spiritual-beige/60 text-xs italic">
              "Yoga is skill in action" - Bhagavad Gita 2.50
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-spiritual-beige mb-4">Quick Links</h4>
            <ul className="space-y-2 text-spiritual-beige/70 text-sm">
              <li><a href="https://project-mahabharat.onrender.com/explore" target="_blank" rel="noopener noreferrer" className="hover:text-spiritual-gold transition-colors" onClick={() => handleLinkClick('How It Works', 'https://project-mahabharat.onrender.com/explore')}>How It Works</a></li>
              <li><a href="https://project-mahabharat.onrender.com/explore" target="_blank" rel="noopener noreferrer" className="hover:text-spiritual-gold transition-colors" onClick={() => handleLinkClick('Our Teachers', 'https://project-mahabharat.onrender.com/explore')}>Our Teachers</a></li>
              <li><a href="https://project-mahabharat.onrender.com/explore" target="_blank" rel="noopener noreferrer" className="hover:text-spiritual-gold transition-colors" onClick={() => handleLinkClick('Sacred Texts', 'https://project-mahabharat.onrender.com/explore')}>Sacred Texts</a></li>
              <li><a href="https://project-mahabharat.onrender.com/explore" target="_blank" rel="noopener noreferrer" className="hover:text-spiritual-gold transition-colors" onClick={() => handleLinkClick('Community', 'https://project-mahabharat.onrender.com/explore')}>Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-spiritual-beige mb-4">Support</h4>
            <ul className="space-y-2 text-spiritual-beige/70 text-sm">
              <li><a href="https://project-mahabharat.onrender.com/explore" target="_blank" rel="noopener noreferrer" className="hover:text-spiritual-gold transition-colors" onClick={() => handleLinkClick('Help Center', 'https://project-mahabharat.onrender.com/explore')}>Help Center</a></li>
              <li><a href="mailto:kurukshetramind@gmail.com" className="hover:text-spiritual-gold transition-colors" onClick={() => handleLinkClick('Contact Us', 'mailto:kurukshetramind@gmail.com')}>Contact Us</a></li>
              <li><span className="text-spiritual-beige/50">kurukshetramind@gmail.com</span></li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-12 border-t border-spiritual-gold/10">
          <h3 className="font-sanskrit text-2xl font-semibold text-spiritual-gold mb-4">
            Begin Your Spiritual Journey Today
          </h3>
          <p className="text-spiritual-beige/80 mb-6 max-w-2xl mx-auto">
            Let the eternal wisdom of the Mahabharata guide you through life's challenges. 
            Your transformation awaits.
          </p>
          <Button size="lg" className="spiritual-gradient text-spiritual-warm-black font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform duration-300" onClick={handleStartJourney}>
            🕉️ Start Your Journey Now
          </Button>
        </div>

        <div className="pt-8 border-t border-spiritual-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-spiritual-beige/60 text-sm">© 2025 KurukshetraMind. Guided by eternal wisdom.</p>
          <div className="flex items-center gap-4 text-spiritual-beige/60 text-sm">
            <span>🕉️</span>
            <span>Made with devotion</span>
            <span>🙏</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
