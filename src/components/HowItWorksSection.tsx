
import { Card } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Share Your Struggle",
      description: "Express what weighs on your heart - anger, fear, sadness, or doubt",
      icon: "💭",
      color: "from-saffron-500 to-spiritual-deep-orange"
    },
    {
      step: "02", 
      title: "Receive Ancient Wisdom",
      description: "Get personalized guidance from Mahabharata characters and sacred shlokas",
      icon: "📜",
      color: "from-spiritual-gold to-saffron-400"
    },
    {
      step: "03",
      title: "Transform & Grow",
      description: "Apply timeless teachings to find peace, clarity, and inner strength",
      icon: "🌟",
      color: "from-spiritual-deep-orange to-spiritual-gold"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sanskrit text-3xl md:text-5xl font-semibold text-gradient mb-6">
            How Ancient Wisdom Guides You
          </h2>
          <p className="text-spiritual-beige/80 text-lg max-w-2xl mx-auto">
            Experience the transformative power of the Mahabharata's teachings, 
            tailored to your modern struggles and emotional journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative bg-spiritual-charcoal/50 border-spiritual-gold/20 p-8 hover-glow group cursor-pointer transition-all duration-500 hover:border-spiritual-gold/50"
            >
              {/* Step Number */}
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-spiritual-warm-black font-bold text-sm mb-4`}>
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="font-sanskrit text-xl font-semibold text-spiritual-beige mb-3">
                {step.title}
              </h3>
              <p className="text-spiritual-beige/70 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-spiritual-gold to-transparent"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 border border-spiritual-gold/30 rounded-lg bg-spiritual-charcoal/30 backdrop-blur-sm">
            <p className="text-spiritual-beige/80 mb-4">
              Ready to receive guidance from Krishna, Arjuna, and other timeless teachers?
            </p>
            <div className="font-devanagari text-spiritual-gold text-sm">
              सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज
            </div>
            <div className="text-spiritual-beige/60 text-xs mt-1 italic">
              "Abandon all forms of dharma and surrender unto Me alone"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
