
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "When I was overwhelmed by workplace stress, Krishna's teachings on detachment transformed my approach to challenges. I found peace in action without anxiety about results.",
      struggle: "Work Anxiety",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar", 
      role: "Entrepreneur",
      content: "Facing a major business decision, Arjuna's journey helped me understand that doubt is natural, but dharma provides clarity. The ancient wisdom felt perfectly relevant.",
      struggle: "Decision Paralysis", 
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Maya Patel",
      role: "Teacher",
      content: "After a difficult divorce, Draupadi's resilience inspired me. The app showed me how to transform suffering into strength, maintaining dignity through hardship.",
      struggle: "Relationship Pain",
      rating: 5,
      avatar: "MP"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sanskrit text-3xl md:text-5xl font-semibold text-gradient mb-6">
            Transformed Lives Speak
          </h2>
          <p className="text-spiritual-beige/80 text-lg max-w-2xl mx-auto">
            Real people finding real solutions through timeless wisdom. 
            See how the Mahabharata's teachings transform modern struggles.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-spiritual-charcoal/50 border-spiritual-gold/20 p-6 hover-glow transition-all duration-500 hover:border-spiritual-gold/50 relative"
            >
              {/* Struggle Badge */}
              <div className="absolute -top-3 left-6">
                <span className="inline-block px-3 py-1 bg-spiritual-deep-orange text-spiritual-beige text-xs rounded-full">
                  {testimonial.struggle}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-spiritual-beige/90 leading-relaxed mb-6 mt-4 font-body italic">
                "{testimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-spiritual-gold text-sm">⭐</span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-spiritual-gold rounded-full flex items-center justify-center text-spiritual-warm-black font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-spiritual-beige font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-spiritual-beige/60 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "10,000+", label: "Lives Guided" },
            { number: "500+", label: "Sacred Teachings" },
            { number: "4.9/5", label: "User Rating" },
            { number: "24/7", label: "Wisdom Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-sanskrit text-2xl md:text-3xl font-semibold text-spiritual-gold mb-2">
                {stat.number}
              </div>
              <div className="text-spiritual-beige/70 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block bg-spiritual-charcoal/30 border-spiritual-gold/30 p-8 hover-glow">
            <div className="text-3xl mb-4">🙏</div>
            <h3 className="font-sanskrit text-xl text-spiritual-gold mb-3">
              Join the Journey
            </h3>
            <p className="text-spiritual-beige/80 mb-6 max-w-md">
              Become part of a community finding strength, wisdom, and peace through ancient teachings.
            </p>
            <div className="font-devanagari text-spiritual-gold text-sm mb-4">
              सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
            </div>
            <div className="text-spiritual-beige/60 text-xs mb-6 italic">
              "May all beings be happy, may all beings be free from illness"
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
