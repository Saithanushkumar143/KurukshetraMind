
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface FeedbackFormProps {
  onFeedbackSubmit: (feedback: { name: string; message: string }) => void;
}

const FeedbackForm = ({ onFeedbackSubmit }: FeedbackFormProps) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and feedback are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      onFeedbackSubmit({
        name: name.trim(),
        message: message.trim()
      });

      // Track feedback submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'feedback_submitted', {
          feedback_length: message.length,
          has_name: !!name.trim()
        });
      }

      toast({
        title: "Thank you for your feedback!",
        description: "Your wisdom has been shared with our community.",
      });

      // Reset form
      setName('');
      setMessage('');
    } catch (error) {
      toast({
        title: "Error submitting feedback",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-spiritual-charcoal/50 rounded-lg p-6 border border-spiritual-gold/20 hover-glow">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📝</span>
        <h3 className="text-spiritual-gold font-semibold text-lg">Share Your Wisdom</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="feedback-name" className="text-spiritual-beige/80">
            Your Name
          </Label>
          <Input
            id="feedback-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="bg-spiritual-charcoal/30 border-spiritual-gold/30 text-spiritual-beige"
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <Label htmlFor="feedback-message" className="text-spiritual-beige/80">
            Your Feedback
          </Label>
          <Textarea
            id="feedback-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your thoughts, experiences, or suggestions..."
            rows={4}
            className="bg-spiritual-charcoal/30 border-spiritual-gold/30 text-spiritual-beige resize-none"
            disabled={isSubmitting}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-spiritual-gold hover:bg-spiritual-gold/80 text-spiritual-charcoal font-semibold"
        >
          {isSubmitting ? 'Sharing...' : 'Share Feedback'}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
