import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Briefcase, Users, Presentation, Trophy, Globe, Lightbulb } from "lucide-react";
import corporateHero from "@/assets/corporate-hero.jpg";

const Corporate = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Conferences",
      description: "Professional multi-day conferences with full tech support",
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Engaging activities that strengthen workplace bonds",
    },
    {
      icon: Presentation,
      title: "Product Launches",
      description: "Memorable reveals that generate buzz and excitement",
    },
    {
      icon: Trophy,
      title: "Award Ceremonies",
      description: "Elegant galas celebrating achievements and milestones",
    },
    {
      icon: Globe,
      title: "Trade Shows",
      description: "Impactful exhibition experiences and booth management",
    },
    {
      icon: Lightbulb,
      title: "Workshops",
      description: "Interactive learning experiences for professional development",
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
          style={{ backgroundImage: `url(${corporateHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-corporate/90 to-corporate/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Corporate Excellence
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-sans">
            Elevate your business presence with world-class corporate events
          </p>
          <Button variant="corporate" size="lg" asChild>
            <Link to="/booking">Plan Your Event</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Corporate Event Solutions
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Professional events that drive results and inspire excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-luxury transition-elegant border-corporate/20 bg-card"
              >
                <div className="mb-4">
                  <service.icon className="h-10 w-10 text-corporate-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-sans">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Strategic Planning",
                description: "Align events with your business objectives for maximum impact",
              },
              {
                title: "Cutting-Edge Technology",
                description: "State-of-the-art AV, streaming, and presentation equipment",
              },
              {
                title: "Professional Network",
                description: "Access to top-tier venues, vendors, and industry experts",
              },
              {
                title: "Measurable Results",
                description: "Comprehensive analytics and post-event reporting",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-corporate flex items-center justify-center text-primary-foreground font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground font-sans">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Corporate Venues</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Executive Conference Center",
                capacity: "500-1000 attendees",
                features: "Full AV, breakout rooms, premium catering",
              },
              {
                name: "Innovation Hub",
                capacity: "100-300 attendees",
                features: "Modern tech, flexible layouts, creative spaces",
              },
              {
                name: "Grand Convention Hall",
                capacity: "1000+ attendees",
                features: "Exhibition space, multiple stages, VIP areas",
              },
            ].map((venue, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-luxury transition-elegant border-corporate/20 bg-card"
              >
                <h3 className="text-2xl font-bold mb-2 text-corporate">{venue.name}</h3>
                <p className="text-corporate-secondary font-bold mb-4">{venue.capacity}</p>
                <p className="text-muted-foreground font-sans">{venue.features}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 gradient-corporate">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 font-sans max-w-2xl mx-auto">
            Let's create an impactful corporate event that drives your success
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/booking">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
