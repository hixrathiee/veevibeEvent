import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Music, Mic, PartyPopper, Film, Theater, Sparkle } from "lucide-react";
import entertainmentHero from "@/assets/entertainment-hero.jpg";

const Entertainment = () => {
  const services = [
    {
      icon: Music,
      title: "Live Concerts",
      description: "World-class artist management and concert production",
    },
    {
      icon: Mic,
      title: "Comedy Shows",
      description: "Stand-up nights and comedy festival organization",
    },
    {
      icon: PartyPopper,
      title: "Festivals",
      description: "Multi-day cultural and music festival management",
    },
    {
      icon: Film,
      title: "Award Shows",
      description: "Glamorous entertainment industry celebrations",
    },
    {
      icon: Theater,
      title: "Theater Events",
      description: "Stage productions and theatrical performances",
    },
    {
      icon: Sparkle,
      title: "Private Performances",
      description: "Exclusive entertainment for intimate gatherings",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${entertainmentHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-entertainment/90 to-entertainment/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Entertainment Spectacular
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-sans">
            Creating unforgettable entertainment experiences that captivate audiences
          </p>
          <Button variant="entertainment" size="lg" asChild>
            <Link to="/booking">Book Entertainment</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entertainment Services
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              From intimate performances to grand spectacles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-luxury transition-elegant border-entertainment/20 bg-card"
              >
                <div className="mb-4">
                  <service.icon className="h-10 w-10 text-entertainment-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-sans">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Artist Network",
                description: "Access to top performers and emerging talent",
              },
              {
                title: "Technical Excellence",
                description: "State-of-the-art sound, lighting, and stage production",
              },
              {
                title: "Creative Direction",
                description: "Innovative concepts that wow audiences",
              },
              {
                title: "Full Production",
                description: "End-to-end management from concept to execution",
              },
              {
                title: "Safety First",
                description: "Comprehensive security and crowd management",
              },
              {
                title: "Marketing Support",
                description: "Promotion and ticket sales assistance",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 border-entertainment/20 bg-card"
              >
                <h3 className="text-xl font-bold mb-2 text-entertainment">{feature.title}</h3>
                <p className="text-muted-foreground font-sans">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Entertainment Venues
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Concert Arena",
                capacity: "5,000-15,000",
                features: "Full concert production, VIP areas, professional sound",
              },
              {
                name: "Theater Complex",
                capacity: "500-2,000",
                features: "Theatrical staging, intimate acoustics, elegant setting",
              },
              {
                name: "Festival Grounds",
                capacity: "10,000+",
                features: "Multiple stages, outdoor space, camping facilities",
              },
            ].map((venue, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-luxury transition-elegant border-entertainment/20 bg-card"
              >
                <h3 className="text-2xl font-bold mb-2 text-entertainment">{venue.name}</h3>
                <p className="text-entertainment-secondary font-bold mb-4">{venue.capacity}</p>
                <p className="text-muted-foreground font-sans">{venue.features}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 gradient-entertainment">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Let's Create Magic Together
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 font-sans max-w-2xl mx-auto">
            Book an entertainment experience that will be remembered forever
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/booking">Start Planning</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Entertainment;
