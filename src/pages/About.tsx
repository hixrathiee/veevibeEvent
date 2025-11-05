import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaRegLightbulb, FaHandsHelping, FaBuilding, FaTheaterMasks } from "react-icons/fa";
import teamImage from "@/assets/team.jpg";

const About = () => {
  const values = [
    {
      title: "Universal Values",
      icon: <FaRegLightbulb size={40} className="text-[#D7A942] " />,
      points: [
        "Meaning over spectacle",
        "Aesthetics in harmony",
        "Integrity in delivery",
        "Safety & compliance",
        "Sustainability",
        "Accessibility & inclusion",
      ],
    },
    {
      title: "Wedding Values",
      icon: <FaHandsHelping size={40} className="text-[#D7A942] " />,
      points: [
        "Ritual sensitivity",
        "Family empathy",
        "Cultural authenticity",
        "Discretion",
      ],
    },
    {
      title: "Corporate Values",
      icon: <FaBuilding size={40} className="text-[#D7A942]" />,
      points: [
        "Brand alignment",
        "Measurable outcomes",
        "Governance & confidentiality",
        "Stakeholder experience",
      ],
    },
    {
      title: "Entertainment Values",
      icon: <FaTheaterMasks size={40} className="text-[#D7A942] " />,
      points: [
        "Artist care",
        "Audience journey",
        "Technical reliability",
        "Risk management",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-luxury">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-white">
            About Veevibe Events
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto text-white">
            Crafting extraordinary moments with unparalleled elegance and precision since 2010
          </p>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Founder Message</h2>
              <div className="space-y-4 font-sans text-muted-foreground">
                <p>
                  I’ve walked through the golden ballrooms of Mumbai, attended star-studded concerts in Dubai, and witnessed the sparkle of chandeliers across India’s and other countries’ finest venues.
                </p>
                <p>
                  But in that grandeur, I searched for something deeper: the fragrance of jasmine, the warmth of a mother’s blessing, the sound of temple bells at dawn. They were missing.
                </p>
                <p>And so, Veevibe was born. I wanted to create a world where luxury and tradition could hold hands.</p>
                <p>
                  Where a bride could walk down an aisle adorned in a handcrafted Sabyasachi lehenga, yet still feel the grounding grace of turmeric and rose petals.
                </p>
                <p>Where a corporate gala could be as elegant as Paris, yet carry the soulful warmth of Hyderabad.</p>
                <p>Veevibe is my promise: that your celebration will not just shine, but breathe. That it will not only impress, but also move hearts. Because the true art of event design is not in decoration; it is in emotion.</p>

              </div>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="Prestige Events Team"
                className="rounded-lg shadow-luxury w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto mb-12">
            To create unforgettable experiences that celebrate life's most precious moments, combining innovative design with flawless execution, while building lasting relationships with our clients through trust, creativity, and exceptional service.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              At Veevibe, our principles illuminate every celebration — from heartfelt weddings
              to prestigious corporate galas and mesmerizing entertainment experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-card shadow-md border border-border 
                     transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full 
                            bg-[#D6A419]/10 group-hover:bg-[#D6A419]/20 
                            transition-all duration-300">
                    {value.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-[#D6A419] transition-colors duration-300">
                  {value.title}
                </h3>

                <ul className="text-muted-foreground font-sans text-sm space-y-2 leading-relaxed">
                  {value.points.map((point, i) => (
                    <li key={i} className="transition-colors duration-200 group-hover:text-foreground">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
