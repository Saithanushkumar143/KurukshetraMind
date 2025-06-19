
const TrustSection = () => {
  const trustElements = [
    {
      icon: "📖",
      title: "Inspired by the Bhagavad Gita",
      description: "Founded on the most revered spiritual text in human history"
    },
    {
      icon: "🕉️",
      title: "5000+ Years of Wisdom",
      description: "Time-tested teachings that have guided countless souls"
    },
    {
      icon: "🌟",
      title: "Built with Ancient Wisdom",
      description: "Authentic interpretations from classical Sanskrit sources"
    },
    {
      icon: "🧘",
      title: "Modern Applications",
      description: "Ancient principles adapted for contemporary life challenges"
    }
  ];

  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-sanskrit text-2xl md:text-4xl font-semibold text-gradient mb-4">
              Rooted in Sacred Tradition
            </h2>
            <p className="text-spiritual-beige/80 max-w-2xl mx-auto">
              Our wisdom comes from the most trusted spiritual sources, 
              ensuring authenticity and depth in every guidance you receive.
            </p>
          </div>

          {/* Trust Elements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustElements.map((element, index) => (
              <div 
                key={index}
                className="text-center p-6 border border-spiritual-gold/20 rounded-lg bg-spiritual-charcoal/30 hover:border-spiritual-gold/40 transition-all duration-300 hover-glow"
              >
                <div className="text-3xl mb-3">{element.icon}</div>
                <h3 className="font-semibold text-spiritual-beige mb-2 text-sm">
                  {element.title}
                </h3>
                <p className="text-spiritual-beige/70 text-xs leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>

          {/* Sacred Quotes Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-spiritual-gold/30 rounded-lg bg-spiritual-charcoal/20 backdrop-blur-sm">
              <div className="font-devanagari text-spiritual-gold text-lg mb-3">
                तत्त्वमसि
              </div>
              <p className="text-spiritual-beige/80 text-sm mb-2">
                "Thou art That" - Chandogya Upanishad
              </p>
              <p className="text-spiritual-beige/60 text-xs">
                The fundamental truth of your divine nature
              </p>
            </div>
            
            <div className="p-6 border border-spiritual-gold/30 rounded-lg bg-spiritual-charcoal/20 backdrop-blur-sm">
              <div className="font-devanagari text-spiritual-gold text-lg mb-3">
                सत्यमेव जयते
              </div>
              <p className="text-spiritual-beige/80 text-sm mb-2">
                "Truth alone triumphs" - Mundaka Upanishad
              </p>
              <p className="text-spiritual-beige/60 text-xs">
                The eternal principle guiding all authentic wisdom
              </p>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-12">
            <p className="text-spiritual-beige/60 text-sm max-w-3xl mx-auto">
              Every piece of guidance you receive is grounded in classical Sanskrit texts, 
              interpreted through centuries of scholarly tradition, and made relevant for your modern journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
