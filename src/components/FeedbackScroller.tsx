
import { useEffect, useState } from 'react';

interface Feedback {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

interface FeedbackScrollerProps {
  feedbacks: Feedback[];
}

const FeedbackScroller = ({ feedbacks }: FeedbackScrollerProps) => {
  const [displayFeedbacks, setDisplayFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    // Add some sample feedbacks to demonstrate the feature
    const sampleFeedbacks: Feedback[] = [
      {
        id: '1',
        name: 'Arjuna',
        message: 'This platform helped me find clarity in my darkest moments. Thank you!',
        timestamp: Date.now() - 3600000
      },
      {
        id: '2',
        name: 'Priya',
        message: 'The wisdom here is profound. It connects ancient teachings with modern struggles beautifully.',
        timestamp: Date.now() - 7200000
      },
      {
        id: '3',
        name: 'Vikram',
        message: 'I found peace through the guidance provided here. Highly recommended for anyone seeking wisdom.',
        timestamp: Date.now() - 10800000
      }
    ];

    // Combine sample feedbacks with user feedbacks
    setDisplayFeedbacks([...feedbacks, ...sampleFeedbacks]);
  }, [feedbacks]);

  if (displayFeedbacks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-spiritual-beige/60">
          Be the first to share your wisdom...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-spiritual-charcoal/30 rounded-lg p-4 border border-spiritual-gold/10">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">💭</span>
        <h3 className="text-spiritual-gold font-semibold">Community Wisdom</h3>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-6 whitespace-nowrap">
          {[...displayFeedbacks, ...displayFeedbacks].map((feedback, index) => (
            <div
              key={`${feedback.id}-${index}`}
              className="flex-shrink-0 bg-spiritual-charcoal/50 rounded-lg p-4 border border-spiritual-gold/20 min-w-[300px] max-w-[400px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-spiritual-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-spiritual-gold text-sm font-semibold">
                    {feedback.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-spiritual-gold font-medium text-sm">
                  {feedback.name}
                </span>
              </div>
              <p className="text-spiritual-beige/80 text-sm whitespace-normal">
                "{feedback.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackScroller;
