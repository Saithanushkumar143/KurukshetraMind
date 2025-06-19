
import { Card } from "@/components/ui/card";

const CharactersSection = () => {
  const characters = [
    {
      name: "Lord Krishna",
      title: "The Divine Guide",
      wisdom: "Duty, Devotion & Inner Peace",
      description: "Master of dharma and divine consciousness, Krishna teaches us to act without attachment to results.",
      specialty: "Life Purpose & Spiritual Growth",
      nameDisplay: "कृष्ण"
    },
    {
      name: "Arjuna",
      title: "The Warrior's Dilemma", 
      wisdom: "Overcoming Doubt & Fear",
      description: "The greatest archer who faced his deepest fears on the battlefield of duty and morality.",
      specialty: "Courage & Decision Making",
      nameDisplay: "अर्जुन"
    },
    {
      name: "Draupadi",
      title: "The Resilient Queen",
      wisdom: "Strength Through Suffering",
      description: "A symbol of dignity and resilience, teaching us how to maintain honor in the face of injustice.",
      specialty: "Healing & Justice",
      nameDisplay: "द्रौपदी"
    },
    {
      name: "Bhishma",
      title: "The Noble Grandfather",
      wisdom: "Honor & Sacrifice",
      description: "The grand patriarch who chose duty over personal desires, teaching the power of commitment.",
      specialty: "Loyalty & Wisdom",
      nameDisplay: "भीष्म"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sanskrit text-3xl md:text-5xl font-semibold text-gradient mb-6">
            Your Divine Counselors
          </h2>
          <p className="text-spiritual-beige/80 text-lg max-w-3xl mx-auto">
            Meet the immortal teachers whose wisdom has guided souls for millennia. 
            Each character offers unique insights for different aspects of human struggle.
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {characters.map((character, index) => (
            <Card 
              key={index}
              className="group bg-spiritual-charcoal/50 border-spiritual-gold/20 overflow-hidden hover-glow transition-all duration-500 hover:border-spiritual-gold/50 hover:scale-105"
            >
              {/* Character Name Display */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-spiritual-charcoal to-spiritual-warm-black flex items-center justify-center">
                <div className="text-center">
                  <div className="font-devanagari text-4xl text-spiritual-gold mb-2">
                    {character.nameDisplay}
                  </div>
                  <div className="font-sanskrit text-lg text-spiritual-beige">
                    {character.name}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spiritual-charcoal via-transparent to-transparent opacity-30"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-spiritual-gold text-sm">
                    {character.title}
                  </p>
                </div>
              </div>
              
              {/* Character Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-spiritual-gold/20 text-spiritual-gold text-xs rounded-full">
                    {character.specialty}
                  </span>
                </div>
                
                <h4 className="font-semibold text-spiritual-beige mb-2">
                  {character.wisdom}
                </h4>
                
                <p className="text-spiritual-beige/70 text-sm leading-relaxed">
                  {character.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Element */}
        <div className="text-center">
          <div className="inline-block p-8 border-2 border-spiritual-gold/30 rounded-lg bg-spiritual-charcoal/30 backdrop-blur-sm hover:border-spiritual-gold/50 transition-all duration-300">
            <div className="text-3xl mb-4">🕉️</div>
            <h3 className="font-sanskrit text-xl text-spiritual-gold mb-3">
              Which Teacher Calls to You?
            </h3>
            <p className="text-spiritual-beige/80 mb-4 max-w-md">
              Your struggles will guide you to the right teacher. Each character resonates with different aspects of the human experience.
            </p>
            <div className="font-devanagari text-spiritual-gold text-sm">
              गुरुर्ब्रह्मा गुरुर्विष्णु गुरुर्देवो महेश्वरः
            </div>
            <div className="text-spiritual-beige/60 text-xs mt-2 italic">
              "The teacher is Brahma, Vishnu, and Shiva"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
