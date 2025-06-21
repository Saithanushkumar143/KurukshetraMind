
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAnalytics } from "@/hooks/useAnalytics";

interface FeedbackData {
  name: string;
  feedback: string;
  timestamp: string;
  id: string;
}

interface FeedbackFormProps {
  onFeedbackSubmit: (feedback: FeedbackData) => void;
}

const FeedbackForm = ({ onFeedbackSubmit }: FeedbackFormProps) => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackEvent } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !feedback.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      const feedbackData: FeedbackData = {
        name: name.trim(),
        feedback: feedback.trim(),
        timestamp: new Date().toISOString(),
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
      };
      
      // Store feedback in localStorage for persistence
      const existingFeedback = JSON.parse(localStorage.getItem('user_feedback') || '[]');
      existingFeedback.push(feedbackData);
      localStorage.setItem('user_feedback', JSON.stringify(existingFeedback));
      
      // Track feedback submission
      trackEvent('feedback_submitted', {
        feedback_length: feedback.length,
        name_provided: !!name
      });
      
      onFeedbackSubmit(feedbackData);
      
      // Reset form
      setName("");
      setFeedback("");
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-spiritual-charcoal/50 rounded-lg p-6 border border-spiritual-gold/20 max-w-md mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-2xl">📝</span>
        <h3 className="text-spiritual-gold font-semibold text-lg">Share Your Wisdom</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-spiritual-charcoal/30 border-spiritual-gold/30 text-spiritual-beige placeholder:text-spiritual-beige/50"
            required
          />
        </div>
        
        <div>
          <Textarea
            placeholder="Share your thoughts about this sacred journey..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="bg-spiritual-charcoal/30 border-spiritual-gold/30 text-spiritual-beige placeholder:text-spiritual-beige/50 min-h-[80px]"
            required
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting || !name.trim() || !feedback.trim()}
          className="w-full bg-spiritual-gold hover:bg-spiritual-gold/80 text-spiritual-charcoal font-semibold"
        >
          {isSubmitting ? "Sharing..." : "Share Wisdom"}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
