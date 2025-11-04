import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart, Camera, Music, Utensils, Flower, Sparkles } from "lucide-react";
import weddingHero from "@/assets/wedding-hero.jpg";

const Wedding = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete planning from engagement to reception",
    },
    {
      icon: Camera,
      title: "Photography & Video",
      description: "Capture every precious moment beautifully",
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Live bands, DJs, and special performances",
    },
    {
      icon: Utensils,
      title: "Catering",
      description: "Exquisite menus tailored to your taste",
    },
    {
      icon: Flower,
      title: "Floral Design",
      description: "Stunning arrangements and décor",
    },
    {
      icon: Sparkles,
      title: "Venue Styling",
      description: "Transform spaces into dreamscapes",
    },
  ];

  const venues = [
    {
      name: "Royal Ballroom",
      capacity: "300-500 guests",
      features: "Crystal chandeliers, gold accents, grand entrance",
    },
    {
      name: "Garden Paradise",
      capacity: "150-300 guests",
      features: "Outdoor ceremony, floral arches, natural beauty",
    },
    {
      name: "Heritage Palace",
      capacity: "200-400 guests",
      features: "Historic elegance, marble halls, royal ambiance",
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
          style={{ backgroundImage: `url(${weddingHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/90 via-[#800000]/70 to-[#FFD700]/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Dream Wedding Events
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-sans">
            Your love story deserves a celebration as unique as your journey together
          </p>
          <Button variant="wedding" size="lg" asChild>
            <Link to="/booking">Plan Your Wedding</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 ">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4">
              Complete Wedding Services
            </h2>
            <p className="text-lg text-[#5A0000] font-sans max-w-2xl mx-auto">
              Every detail meticulously planned to perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-white border border-[#FFD700]/30 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#800000]/10 mb-4 mx-auto">
                  <service.icon className="h-8 w-8 text-[#800000]" />
                </div>
                <h3 className="text-xl font-semibold text-[#800000] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#5A0000]/80 font-sans">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#800000]/5 to-[#FFD700]/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#800000] mb-4">
              Premium Wedding Venues
            </h2>
            <p className="text-lg text-[#5A0000]/80 font-sans">
              Exquisite locations for your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {venues.map((venue, index) => (
              <Card
                key={index}
                className="p-8 bg-white border border-[#FFD700]/40 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-[#800000] mb-1">{venue.name}</h3>
                <p className="text-[#FFD700] font-medium mb-3">{venue.capacity}</p>
                <p className="text-[#5A0000]/80">{venue.features}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 ">
  <div className="container mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold text-[#800000] mb-4">Our Planning Process</h2>
  </div>

  <div className="max-w-3xl mx-auto space-y-8">
    {[
      { step: "1", title: "Initial Consultation", description: "Share your vision..." },
      { step: "2", title: "Design & Proposal", description: "Receive a customized plan..." },
      { step: "3", title: "Coordination", description: "We handle all vendors..." },
      { step: "4", title: "Your Perfect Day", description: "Relax and enjoy..." },
    ].map((process, index) => (
      <div key={index} className="flex gap-6 items-start">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#800000] to-[#FFD700] text-white font-bold text-lg flex items-center justify-center shadow-md">
          {process.step}
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#800000] mb-1">{process.title}</h3>
          <p className="text-[#5A0000]/80">{process.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* CTA */}
      <section className="py-20 px-4 gradient-wedding">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Begin Your Journey
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 font-sans max-w-2xl mx-auto">
            Let's create the wedding of your dreams together
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/booking">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wedding;
