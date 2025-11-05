import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaRegLightbulb, FaHandsHelping, FaBuilding, FaTheaterMasks } from "react-icons/fa";
import teamImage from "@/assets/team.jpg";
import { GiPartyFlags, GiLaurelsTrophy } from "react-icons/gi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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

  const aboutSections = [
  {
    title: "The Genesis of Veevibe",
    icon: <GiPartyFlags size={40} className="text-[#D6A419]" />,
    content: `I’ve walked through the golden ballrooms of Mumbai, attended star-studded concerts in Dubai, and witnessed the sparkle of chandeliers across India’s finest venues. They dazzled me, yes, but I searched for something deeper. And so, Veevibe was born to create a world where luxury and tradition hold hands. Where a bride could walk down an aisle adorned in a handcrafted Sabyasachi lehenga, yet still feel the grounding grace of turmeric and rose petals. Where a corporate gala could be as elegant as Paris, yet carry the soulful warmth of Hyderabad.`,
    quote: "“We design not just for the eyes, but for the soul.”",
  },
  {
    title: "Guiding Principles",
    icon: <FaRegLightbulb size={40} className="text-[#D6A419]" />,
    content: `LUXURY DOES NOT ERASE TRADITION IT ELEVATES IT. At Veevibe, we do not choose between heritage and refinement; we create harmony. Because the true art of event design is not in decoration; it is in emotion. We design not for the eyes alone, but for the soul. What unites them is reverence. For a couple, the sacredness of vows. For a brand, the sacredness of vision. The devotion we bring to families, we extend to stakeholders. The rigor we bring to rituals, we bring to showflows.`,
    quote: "“Tradition and luxury walk hand in hand.”",
  },
  {
    title: "Our Values & Excellence",
    icon: <GiLaurelsTrophy size={40} className="text-[#D6A419]" />,
    content: `Meaning over spectacle. Aesthetics in harmony. Integrity in delivery. Safety & compliance. Sustainability. Accessibility & inclusion. The romance on stage rests on our rigor behind it. Technical precision: rehearsals with contingency trees. Audience safety: smooth crowd flow, trained medics, clear exits. Risk readiness: weather plans, emergency drills.`,
    quote: "“Excellence is felt, not just seen.”",
  },
  {
    title: "Corporate Commitment",
    icon: <MdOutlineBusinessCenter size={40} className="text-[#D6A419]" />,
    content: `We adhere to brand alignment, measurable outcomes, governance & confidentiality, ensuring each corporate event is precise, soulful, and intentional.`,
    quote: "“Precision in every detail, passion in every event.”",
  },
];

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-4 gradient-luxury overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.div 
          className="container mx-auto text-center"
          variants={item}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Veevibe Events
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting extraordinary moments with unparalleled elegance and precision since 2010
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Author Section */}
      <motion.section 
        className="py-20 px-4 bg-muted overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={container}
          >
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-4xl font-bold text-foreground mb-6"
                variants={item}
              >
                Founder Message
              </motion.h2>
              <motion.div 
                className="space-y-4 font-sans text-muted-foreground"
                variants={container}
              >
                {[/* ... */].map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    variants={item}
                    className="opacity-0"
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2
                  } 
                }
              }}
            >
              <motion.img
                src={teamImage}
                alt="Prestige Events Team"
                className="rounded-lg shadow-luxury w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#FAF7F0] to-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ... */}
          {/* Image side */}
          <div className="flex justify-center md:justify-start md:ml-16 lg:ml-32">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg w-[90%] h-48 sm:w-80 sm:h-64 md:w-[420px] md:h-[270px] lg:w-[500px] lg:h-[320px]">
              <img
                src="https://res.cloudinary.com/ddqplrtt2/image/upload/v1762341010/magazineCover_mzcvz0.png"
                alt="VeeVibe Magazine"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <a
                href="https://drive.google.com/file/d/1gtsVeuXRJfygqYuI1uX_ouvmiawc2pny/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <span className="text-white text-sm md:text-base font-semibold bg-[#D6A419]/80 px-3 py-2 rounded-full shadow-md">
                  View Presentation →
                </span>
              </a>
            </div>
          </div>

          {/* Text side */}
          <div className="text-center md:text-left space-y-6 md:pl-4 lg:pl-8 md:mr-10 max-w-xl mx-auto md:max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground relative inline-block">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              To create unforgettable experiences that celebrate life's most precious moments —
              blending creativity with seamless execution. We strive to build long-term
              relationships founded on trust, innovation, and excellence.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-[#D6A419]/10 rounded-xl">
                <h4 className="font-semibold text-[#D6A419]">Creativity</h4>
                <p className="text-sm text-muted-foreground">Innovative ideas that inspire emotions.</p>
              </div>
              <div className="p-5 bg-[#D6A419]/10 rounded-xl">
                <h4 className="font-semibold text-[#D6A419]">Trust</h4>
                <p className="text-sm text-muted-foreground">Strong, transparent client relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <motion.section 
        className="py-20 px-6 md:px-16 bg-muted overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div 
          className="max-w-6xl mx-auto text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-[#3C1E3D] mb-4 tracking-wide"
            variants={item}
          >
            About Veevibe
          </motion.h2>
          <motion.p 
            className="text-gray-700 text-lg md:text-xl font-light"
            variants={item}
          >
            We create events that don't just impress—they move hearts. Our commitment is to emotion, luxury, and tradition in perfect harmony.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4xl mx-auto"
          variants={container}
        >
          {aboutSections.map((section, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border-t-4 border-[#D6A419] hover:shadow-xl transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: idx * 0.1
                  }
                }
              }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Icon */}
              <motion.div 
                className="mb-6 p-4 rounded-full bg-[#FAF7F0] shadow-md"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {section.icon}
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="text-2xl font-bold text-[#3C1E3D] mb-2"
                whileHover={{ color: '#D6A419' }}
                transition={{ duration: 0.3 }}
              >
                {section.title}
              </motion.h3>

              {/* Quote */}
              <motion.p 
                className="text-[#D6A419] italic font-playfair mb-4"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {section.quote}
              </motion.p>

              {/* Content */}
              <motion.p 
                className="text-gray-700 text-sm md:text-base"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {section.content}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-20 px-4 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div 
          className="container mx-auto"
          variants={container}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide"
              variants={item}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto"
              variants={item}
            >
              At Veevibe, our principles illuminate every celebration — from heartfelt weddings
              to prestigious corporate galas and mesmerizing entertainment experiences.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={container}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group text-center p-8 rounded-2xl bg-card shadow-md border border-border 
                     transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <motion.div 
                  className="flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-20 h-20 flex items-center justify-center rounded-full 
                              bg-[#D6A419]/10 group-hover:bg-[#D6A419]/20 
                              transition-all duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    {value.icon}
                  </motion.div>
                </motion.div>

                <motion.h3 
                  className="text-2xl font-semibold text-foreground mb-4 group-hover:text-[#D6A419] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {value.title}
                </motion.h3>

                <motion.ul 
                  className="text-muted-foreground font-sans text-sm space-y-2 leading-relaxed"
                  variants={container}
                >
                  {value.points.map((point, i) => (
                    <motion.li 
                      key={i} 
                      className="transition-colors duration-200 group-hover:text-foreground"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        show: { 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.3,
                            delay: 0.1 * i
                          }
                        }
                      }}
                      whileHover={{ x: 5, color: '#D6A419' }}
                    >
                      • {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default About;
