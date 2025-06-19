
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";

const ExamplesSection = () => {
  const { trackButtonClick, trackExternalLink, trackUserEngagement } = useAnalytics();

  const examples = [
    {
      struggle: "I feel betrayed",
      teacher: "Bhishma speaks",
      quote: "Even when others break their promises, your integrity remains your strength",
      context: "On maintaining honor despite others' betrayal",
      emotion: "😔",
      color: "from-saffron-500 to-spiritual-deep-orange"
    },
    {
      struggle: "I'm consumed by anger", 
      teacher: "Krishna guides",
      quote: "Anger clouds judgment like smoke clouds fire. Clear the smoke, reveal the light",
      context: "On transforming anger into wisdom",
      emotion: "😤",
      color: "from-spiritual-deep-orange to-spiritual-gold"
    },
    {
      struggle: "I doubt my purpose",
      teacher: "Arjuna learns",
      quote: "Your dharma is not what others expect, but what your soul knows to be true",
      context: "On finding one's true calling",
      emotion: "🤔",
      color: "from-spiritual-gold to-saffron-400"
    },
    {
      struggle: "I feel powerless",
      teacher: "Draupadi teaches",
      quote: "True power lies not in controlling outcomes, but in how you face the storm",
      context: "On finding strength in adversity",
      emotion: "😢",
      color: "from-saffron-400 to-spiritual-deep-orange"
    }
  ];

  const handleExploreTeaching = (teachingType: string) => {
    trackButtonClick('explore_teaching', 'examples_section');
    trackUserEngagement('teaching_exploration', teachingType);
    trackExternalLink('https://project-mahabharat.onrender.com/explore', `Explore ${teachingType} Teaching`);
    window.open('https://project-mahabharat.onrender.com/explore', '_blank');
  };

  const handleBeginJourney = () => {
    trackButtonClick('begin_journey', 'examples_section');
    trackExternalLink('https://project-mahabharat.onrender.com/explore', 'Begin Your Journey');
    window.open('https://project-mahabharat.onrender.com/explore', '_blank');
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sanskrit text-3xl md:text-5xl font-semibold text-gradient mb-6">
            From Struggle to Wisdom
          </h2>
          <p className="text-spiritual-beige/80 text-lg max-w-2xl mx-auto">
            See how ancient teachings transform modern pain into profound understanding. 
            Your struggles become gateways to timeless wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {examples.map((example, index) => (
            <Card 
              key={index}
              className="bg-spiritual-charcoal/50 border-spiritual-gold/20 p-6 hover-glow transition-all duration-500 hover:border-spiritual-gold/50 group"
            >
              {/* Struggle Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{example.emotion}</span>
                <div>
                  <p className="text-spiritual-beige/80 text-sm">You say:</p>
                  <p className="text-spiritual-beige font-semibold">"{example.struggle}"</p>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <div className={`w-8 h-0.5 bg-gradient-to-r ${example.color} relative`}>
                  <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-spiritual-gold border-t-2 border-b-2 border-t-transparent border-b-transparent`}></div>
                </div>
              </div>

              <div className="mb-4">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${example.color} text-spiritual-warm-black text-sm font-semibold rounded-full mb-3`}>
                  {example.teacher}
                </div>
                <blockquote className="text-spiritual-beige text-lg font-body italic leading-relaxed border-l-2 border-spiritual-gold pl-4">
                  "{example.quote}"
                </blockquote>
              </div>

              <p className="text-spiritual-beige/60 text-sm">
                {example.context}
              </p>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-spiritual-gold/50 text-spiritual-gold hover:bg-spiritual-gold hover:text-spiritual-warm-black text-xs"
                  onClick={() => handleExploreTeaching(example.teacher)}
                >
                  Explore This Teaching
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="text-center">
          <Card className="inline-block bg-spiritual-charcoal/30 border-spiritual-gold/30 p-8 hover-glow">
            <h3 className="font-sanskrit text-2xl text-spiritual-gold mb-4">
              Try It Yourself
            </h3>
            <p className="text-spiritual-beige/80 mb-6 max-w-md">
              Share what troubles your heart and receive personalized wisdom from the greatest teachers in history.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-spiritual-warm-black/50 rounded-lg border border-spiritual-gold/20">
                <p className="text-spiritual-beige/70 text-sm text-left">
                  💭 "I'm struggling with a difficult decision at work..."
                </p>
              </div>
              <div className="text-center">
                <div className="w-1 h-6 bg-spiritual-gold mx-auto rounded-full opacity-70"></div>
              </div>
              <div className="p-4 bg-spiritual-gold/10 rounded-lg border border-spiritual-gold/30">
                <p className="text-spiritual-gold text-sm font-semibold mb-1">Krishna guides:</p>
                <p className="text-spiritual-beige text-sm text-left">
                  "Focus on your duty, not the fruits of action. Right action comes from clarity, not anxiety."
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="spiritual-gradient text-spiritual-warm-black font-semibold px-8 py-3 hover:scale-105 transition-transform duration-300"
              onClick={handleBeginJourney}
            >
              🕉️ Begin Your Journey
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
