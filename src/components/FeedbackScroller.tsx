
import { useEffect, useState } from "react";

interface FeedbackData {
  name: string;
  feedback: string;
  timestamp: string;
  id: string;
}

const FeedbackScroller = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackData[]>([]);

  useEffect(() => {
    // Load existing feedbacks
    const loadFeedbacks = () => {
      const stored = localStorage.getItem('user_feedback');
      if (stored) {
        setFeedbacks(JSON.parse(stored));
      }
    };

    loadFeedbacks();

    // Listen for storage changes to update in real-time
    const handleStorageChange = () => {
      loadFeedbacks();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check for updates every few seconds
    const interval = setInterval(loadFeedbacks, 3000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  if (feedbacks.length === 0) {
    return (
      <div className="py-4 text-center">
        <p className="text-spiritual-beige/60 text-sm">
          Be the first to share your wisdom...
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-spiritual-charcoal/20 py-4">
      <div className="flex animate-scroll-left gap-8 whitespace-nowrap">
        {/* Duplicate feedbacks for seamless scrolling */}
        {[...feedbacks, ...feedbacks].map((feedback, index) => (
          <div
            key={`${feedback.id}-${index}`}
            className="inline-flex items-center gap-3 bg-spiritual-charcoal/40 rounded-full px-6 py-3 border border-spiritual-gold/20 min-w-fit"
          >
            <div className="w-8 h-8 bg-spiritual-gold rounded-full flex items-center justify-center text-spiritual-charcoal font-bold text-sm">
              {feedback.name.charAt(0).toUpperCase()}
            </div>
            <div className="text-spiritual-beige">
              <span className="font-semibold text-spiritual-gold">{feedback.name}:</span>
              <span className="ml-2">{feedback.feedback}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-spiritual-charcoal to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-spiritual-charcoal to-transparent pointer-events-none"></div>
    </div>
  );
};

export default FeedbackScroller;
