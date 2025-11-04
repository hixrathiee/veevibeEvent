import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Trophy, Medal, Flag, Users, Target, Award } from "lucide-react";
import sportsHero from "@/assets/sports-hero.jpg";

const Sports = () => {
  const services = [
    {
      icon: Trophy,
      title: "Tournaments",
      description: "Complete tournament organization and management",
    },
    {
      icon: Medal,
      title: "Championships",
      description: "Professional championship events with live coverage",
    },
    {
      icon: Flag,
      title: "Opening Ceremonies",
      description: "Spectacular ceremonies with cultural performances",
    },
    {
      icon: Users,
      title: "Team Events",
      description: "Inter-corporate and community sports competitions",
    },
    {
      icon: Target,
      title: "Training Camps",
      description: "Athlete camps and sports development programs",
    },
    {
      icon: Award,
      title: "Award Functions",
      description: "Sports achievement recognition events",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section with Tricolor Theme */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sportsHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sports-green/90 via-sports-white/50 to-sports-saffron/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Sports Excellence
          </h1>
          <p className="text-xl md:text-2xl text-primary/80 mb-8 font-sans">
            Celebrating the spirit of sportsmanship and athletic achievement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              asChild
              className="bg-sports-saffron text-primary-foreground hover:bg-sports-saffron/90"
            >
              <Link to="/booking">Plan Your Event</Link>
            </Button>
            <Button
              variant="default"
              size="lg"
              asChild
              className="bg-sports-green text-primary-foreground hover:bg-sports-green/90"
            >
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sports Event Services
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Professional sports event management that inspires excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-luxury transition-elegant border-sports-saffron/20 bg-card"
              >
                <div className="mb-4">
                  <service.icon className="h-10 w-10 text-sports-saffron" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-sans">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tricolor Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="bg-sports-saffron p-12 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Courage</h3>
              <p className="text-primary-foreground/90 font-sans">
                Celebrating the bravery and determination of athletes
              </p>
            </div>
            <div className="bg-sports-white p-12 text-center border-y border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Unity</h3>
              <p className="text-muted-foreground font-sans">
                Bringing communities together through the power of sports
              </p>
            </div>
            <div className="bg-sports-green p-12 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Growth</h3>
              <p className="text-primary-foreground/90 font-sans">
                Fostering development and excellence in athletic pursuits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Professional Timing Systems",
                description: "Accurate scoring and real-time results management",
              },
              {
                title: "Live Broadcasting",
                description: "HD streaming and media coverage coordination",
              },
              {
                title: "Athlete Services",
                description: "Registration, hospitality, and support facilities",
              },
              {
                title: "Safety & Medical",
                description: "Comprehensive medical support and emergency planning",
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sports-saffron flex items-center justify-center text-primary-foreground font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground font-sans">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Sports Venues</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Olympic Stadium",
                capacity: "50,000+ spectators",
                features: "Track & field, opening ceremonies, championships",
              },
              {
                name: "Sports Complex",
                capacity: "10,000+ spectators",
                features: "Multi-sport facilities, indoor arenas, training grounds",
              },
              {
                name: "Cricket Stadium",
                capacity: "30,000+ spectators",
                features: "International matches, tournament hosting, VIP boxes",
              },
            ].map((venue, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-luxury transition-elegant border-sports-saffron/20 bg-card"
              >
                <h3 className="text-2xl font-bold mb-2 text-sports-saffron">{venue.name}</h3>
                <p className="text-sports-green font-bold mb-4">{venue.capacity}</p>
                <p className="text-muted-foreground font-sans">{venue.features}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-sports-saffron via-sports-white to-sports-green">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Champion Your Event
          </h2>
          <p className="text-xl text-primary/80 mb-8 font-sans max-w-2xl mx-auto">
            Let's create a sports event that celebrates excellence and inspires greatness
          </p>
          <Button variant="luxury" size="lg" asChild>
            <Link to="/booking">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sports;
