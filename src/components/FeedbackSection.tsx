
import { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackScroller from "./FeedbackScroller";

interface FeedbackData {
  name: string;
  feedback: string;
  timestamp: string;
  id: string;
}

const FeedbackSection = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFeedbackSubmit = (feedback: FeedbackData) => {
    // Force refresh of the scroller component
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="py-12 bg-spiritual-charcoal/10">
      <div className="container mx-auto px-4">
        {/* Feedback Form */}
        <div className="mb-8">
          <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
        </div>
        
        {/* Scrolling Feedback Display */}
        <div>
          <div className="text-center mb-4">
            <h3 className="text-spiritual-gold font-semibold text-lg flex items-center justify-center gap-2">
              <span>🌟</span>
              Community Wisdom
              <span>🌟</span>
            </h3>
          </div>
          <FeedbackScroller key={refreshKey} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
