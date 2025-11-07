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
      serviceImg:
        "https://t4.ftcdn.net/jpg/02/89/78/17/360_F_289781730_0OJWSY2pS9Q69KT4g2pr5liE8dmW9CL0.jpg",
      icon: Trophy,
      title: "Tournaments",
      description: "Complete tournament organization and management",
    },
    {
      serviceImg:
        "https://t4.ftcdn.net/jpg/02/89/78/17/360_F_289781730_0OJWSY2pS9Q69KT4g2pr5liE8dmW9CL0.jpg",
      icon: Medal,
      title: "Championships",
      description: "Professional championship events with live coverage",
    },
    {
      serviceImg:
        "https://t4.ftcdn.net/jpg/02/89/78/17/360_F_289781730_0OJWSY2pS9Q69KT4g2pr5liE8dmW9CL0.jpg",
      icon: Flag,
      title: "Opening Ceremonies",
      description: "Spectacular ceremonies with cultural performances",
    },
    {
      serviceImg:
        "https://t4.ftcdn.net/jpg/02/89/78/17/360_F_289781730_0OJWSY2pS9Q69KT4g2pr5liE8dmW9CL0.jpg",
      icon: Users,
      title: "Team Events",
      description: "Inter-corporate and community sports competitions",
    },
    {
      serviceImg:
        "https://t4.ftcdn.net/jpg/02/89/78/17/360_F_289781730_0OJWSY2pS9Q69KT4g2pr5liE8dmW9CL0.jpg",
      icon: Target,
      title: "Training Camps",
      description: "Athlete camps and sports development programs",
    },
    {
      serviceImg:
        "https://t4.ftcdn.net/jpg/02/89/78/17/360_F_289781730_0OJWSY2pS9Q69KT4g2pr5liE8dmW9CL0.jpg",
      icon: Award,
      title: "Award Functions",
      description: "Sports achievement recognition events",
    },
  ];

  return (
    <div className="h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section with Tricolor Theme */}
      <section className="relative pt-32 pb-20 px-4 h-3/4 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sportsHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sports-green/90 via-sports-white/50 to-sports-saffron/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Sports Excellence
          </h1>
          <p className="text-xl md:text-2xl text-primary/80 mb-8 font-sans">
            Celebrating the spirit of sportsmanship and athletic achievement
          </p>
            <Button
              variant="default"
              size="lg"
              asChild
              className="bg-sports-saffron text-primary-foreground hover:bg-sports-saffron/90"
            >
              <Link to="/booking">Plan Your Event</Link>
            </Button>
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
              // <Card
              //   key={index}
              //   className="p-6 hover:shadow-luxury transition-elegant border-sports-saffron/20 bg-card"
              // >
              //   <div className="mb-4">
              //     <service.icon className="h-10 w-10 text-sports-saffron" />
              //   </div>
              //   <h3 className="text-xl font-bold mb-2 text-card-foreground">
              //     {service.title}
              //   </h3>
              //   <p className="text-muted-foreground font-sans">
              //     {service.description}
              //   </p>
              // </Card>
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-[#FFD700]/30"
                style={{ height: "240px" }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
                  style={{
                    backgroundImage: `url('${service.serviceImg || ""}')`,
                  }}
                />

                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/5 transition-all duration-500 group-hover:bg-black/20" />

                {/* Default title */}
                <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xl min-w-full text-center font-semibold text-[#ffffff] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:translate-y-full">
                  {service.title}
                </h3>

                {/* Hidden content (reveals on hover) */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-center px-6 py-4 bg-white backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff9f72]/10 mb-3">
                    <service.icon className="h-8 w-8 text-sports-saffron" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#25122B] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[#70527A]/80 text-xs font-sans">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      {/* <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Professional Timing Systems",
                description:
                  "Accurate scoring and real-time results management",
              },
              {
                title: "Live Broadcasting",
                description: "HD streaming and media coverage coordination",
              },
              {
                title: "Athlete Services",
                description:
                  "Registration, hospitality, and support facilities",
              },
              {
                title: "Safety & Medical",
                description:
                  "Comprehensive medical support and emergency planning",
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sports-saffron flex items-center justify-center text-primary-foreground font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Venues */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Sports Venues
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/unouc9hjxq34d2qurea3",
                name: "Olympic Stadium",
                capacity: "50,000+ spectators",
                features: "Track & field, opening ceremonies, championships",
              },
              {
                image:
                  "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/unouc9hjxq34d2qurea3",
                name: "Sports Complex",
                capacity: "10,000+ spectators",
                features:
                  "Multi-sport facilities, indoor arenas, training grounds",
              },
              {
                image:
                  "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/unouc9hjxq34d2qurea3",
                name: "Cricket Stadium",
                capacity: "30,000+ spectators",
                features:
                  "International matches, tournament hosting, VIP boxes",
              },
            ].map((venue, index) => (
              // <Card
              //   key={index}
              //   className="p-8 hover:shadow-luxury transition-elegant border-sports-saffron/20 bg-card"
              // >
              //   <h3 className="text-2xl font-bold mb-2 text-sports-saffron">
              //     {venue.name}
              //   </h3>
              //   <p className="text-sports-green font-bold mb-4">
              //     {venue.capacity}
              //   </p>
              //   <p className="text-muted-foreground font-sans">
              //     {venue.features}
              //   </p>
              // </Card>
              <Card
                key={index}
                className="relative overflow-hidden rounded-2xl w-90 h-72 bg-black text-white shadow-md group transition-all duration-500 ease-in-out"
              >
                {/* Background image */}
                <img
                  src={`${venue.image}`}
                  alt={venue.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-500 ease-in-out group-hover:opacity-35 group-hover:scale-110"
                />

                {/* Circular animation overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-40 rounded-full bg-black/30 transition-all duration-500 ease-in-out group-hover:bg-transparent">
                    {/* Rotating semi-borders */}
                    <span className="absolute inset-0 rounded-full border-2 border-white border-b-transparent transition-all duration-500 ease-in-out group-hover:rotate-[22deg]"></span>
                    <span className="absolute inset-0 rounded-full border-2 border-white border-b-transparent transition-all duration-500 ease-in-out group-hover:-rotate-[22deg]"></span>

                    {/* Capacity (styled content reveal) */}
                    {/* <div className="absolute bottom-0 left-0 w-full flex justify-center opacity-0 translate-y-6 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-[#01A2CB] font-extrabold text-sm ml-2 mr-2">
                        {venue.capacity}
                      </p>
                    </div> */}

                    {/* Title */}
                    <h2 className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 text-xl font-light uppercase transition-all duration-500 group-hover:font-semibold">
                      {venue.name.split(" ")[0]}
                      <span className="block font-bold">
                        {venue.name.split(" ")[1] || ""}
                      </span>
                    </h2>
                  </div>
                </div>

                {/* Hidden details (revealed subtly on hover) */}
                <div className="absolute bottom-5 left-0 w-full text-center opacity-0 translate-y-5 transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-[#FF661A] font-extrabold text-sm ml-2 mr-2">
                    {venue.capacity}
                  </p>
                  {/* <p className="font-sans px-4">{venue.features}</p> */}
                </div>
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
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Courage
              </h3>
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
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Growth
              </h3>
              <p className="text-primary-foreground/90 font-sans">
                Fostering development and excellence in athletic pursuits
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-15 px-6" style={{ marginBottom: "6rem" }}>
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#25122B] mb-4">
            Our Planning Process
          </h2>
        </div>

        {/* <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              step: "1",
              title: "Initial Consultation",
              description: "Share your vision...",
            },
            {
              step: "2",
              title: "Design & Proposal",
              description: "Receive a customized plan...",
            },
            {
              step: "3",
              title: "Coordination",
              description: "We handle all vendors...",
            },
            {
              step: "4",
              title: "Your Perfect Day",
              description: "Relax and enjoy...",
            },
          ].map((process, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#800000] to-[#FFD700] text-white font-bold text-lg flex items-center justify-center shadow-md">
                {process.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#800000] mb-1">
                  {process.title}
                </h3>
                <p className="text-[#5A0000]/80">{process.description}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex justify-center flex-wrap items-center gap-8 py-3">
          {[
            {
              step: "1",
              title: "Initial Consultation",
              description: "Share your vision...",
            },
            {
              step: "2",
              title: "Design & Proposal",
              description: "Receive a customized plan...",
            },
            {
              step: "3",
              title: "Coordination",
              description: "We handle all vendors...",
            },
            {
              step: "4",
              title: "Your Perfect Day",
              description: "Relax and enjoy...",
            },
          ].map((process, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 w-80 border border-transparent 
             bg-[length:200%_200%] bg-gradient-to-r from-sports-saffron/90 via-sports-green/90 to-sports-saffron/90
             transition-all duration-700 ease-out hover:scale-105 hover:animate-gradientMove hover:border-[#FFD700]/50"
            >
              {/* Inner white layer to mask gradient background */}
              <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

              {/* Step Circle */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-sports-green/90 to-sports-saffron/90 text-white font-bold text-lg flex items-center justify-center shadow-md mb-3">
                {process.step}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#FF661A] mb-1">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-sports-saffron via-sports-white to-sports-green">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Champion Your Event
          </h2>
          <p className="text-xl text-primary/80 mb-8 font-sans max-w-2xl mx-auto">
            Let's create a sports event that celebrates excellence and inspires
            greatness
          </p>
          <Button variant="luxury" size="lg" asChild>
            <Link to="/booking">Get Started</Link>
          </Button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Sports;
