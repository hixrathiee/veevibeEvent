import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Briefcase, Heart, Music, Trophy, LucideIcon } from "lucide-react";
import SubNavbar from "@/components/SubNavbar";

interface EventType {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  link: string;
  color: string;
}

const Events: React.FC = () => {
  const eventTypes: EventType[] = [
    {
      title: "Luxury Weddings",
      description:
        "From décor to destination, we curate timeless weddings where every detail breathes emotion and elegance.",
      image:
        "https://res.cloudinary.com/ddqplrtt2/image/upload/v1762690869/DSC07175_xgjnv5.jpg",
      icon: Heart,
      link: "/events/wedding",
      color: "from-[#800000]/90 to-[#FFD700]/60", 
    },
    {
      title: "Corporate Events",
      description:
        "Elevate your brand presence through experiences that inspire, connect, and leave a mark of excellence.",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=80",
      icon: Briefcase,
      link: "/events/corporate",
      color: "from-[#1F3A93]/90 to-[#B0B0B0]/60", 
    },
    {
      title: "Entertainment Shows",
      description:
        "Stage shows, concerts, and live performances designed to captivate audiences and create unforgettable nights.",
      image:
        "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1200&q=80",
      icon: Music,
      link: "/events/entertainment",
      color: "from-[#7B2CBF]/80 to-[#F72585]/50", 
    },
    {
      title: "Sports Events",
      description:
        "From marathons to tournaments, we manage world-class sports events that inspire passion and unity.",
      image:
        "https://res.cloudinary.com/ddqplrtt2/image/upload/v1762691163/sports_12_cle3og.jpg",
      icon: Trophy,
      link: "/events/sports",
      color: "from-[#046A38]/80 via-[#FFFFFF]/50 to-[#FF671F]/90", 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center gradient-luxury text-white pt-10 md:pt-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg"
        >
          Curating Experiences Beyond Imagination
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-2xl max-w-3xl mx-auto mb-6 md:mb-8 text-white/90 font-sans px-4"
        >
          Explore the art of event perfection — where luxury, creativity, and
          precision meet.
        </motion.p>

        <Button
          size="lg"
          asChild
          className="bg-[#d4af37] hover:bg-[#C59B18] text-white font-semibold shadow-md"
        >
          <Link to="/booking">Start Your Journey</Link>
        </Button>
      </section>

      {/* Signature Events Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Our Signature Events
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Each event type tells a different story — yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {eventTypes.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link to={event.link}>
                    <Card className="group relative overflow-hidden rounded-3xl shadow-lg border-none transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-[300px] sm:h-[350px] md:h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-90`}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
                        <div className="bg-white/20 rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
                          <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">
                          {event.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm max-w-md font-sans mb-4 sm:mb-6">
                          {event.description}
                        </p>
                        <Button
                          size="lg"
                          className="bg-[#d4af37] hover:bg-[#C59B18] text-white font-semibold shadow-md border-none"
                        >
                          Explore More
                        </Button>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
