import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Briefcase,
  Users,
  Presentation,
  Trophy,
  Globe,
  Lightbulb,
} from "lucide-react";
import corporateHero from "@/assets/corporate-hero.jpg";
import SubNavbar from "@/components/SubNavbar";

const Corporate = () => {
  const services = [
    {
      serviceImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bNKU4DeUoqjr0c2ougGAigAnGQGlVDqxwQ&s",
      icon: Briefcase,
      title: "Conferences",
      description: "Professional multi-day conferences with full tech support",
    },
    {
      serviceImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bNKU4DeUoqjr0c2ougGAigAnGQGlVDqxwQ&s",
      icon: Users,
      title: "Team Building",
      description: "Engaging activities that strengthen workplace bonds",
    },
    {
      serviceImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bNKU4DeUoqjr0c2ougGAigAnGQGlVDqxwQ&s",
      icon: Presentation,
      title: "Product Launches",
      description: "Memorable reveals that generate buzz and excitement",
    },
    {
      serviceImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bNKU4DeUoqjr0c2ougGAigAnGQGlVDqxwQ&s",
      icon: Trophy,
      title: "Award Ceremonies",
      description: "Elegant galas celebrating achievements and milestones",
    },
    {
      serviceImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bNKU4DeUoqjr0c2ougGAigAnGQGlVDqxwQ&s",
      icon: Globe,
      title: "Trade Shows",
      description: "Impactful exhibition experiences and booth management",
    },
    {
      serviceImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bNKU4DeUoqjr0c2ougGAigAnGQGlVDqxwQ&s",
      icon: Lightbulb,
      title: "Workshops",
      description:
        "Interactive learning experiences for professional development",
    },
  ];

  return (
    <div className="h-screen bg-background">
      <Navbar />
      <SubNavbar />
      <WhatsAppButton />

      {/* Hero Section */}

      <section className="relative pt-32 pb-20 px-4 h-3/4 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${corporateHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-corporate/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Corporate Excellence
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/90 mb-8 font-sans">
            Elevate your business presence with world-class corporate events
          </p>
          <Button variant="corporate" size="lg" asChild>
            <Link to="/booking">Plan Your Event</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 px-4">
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
              // <Card
              //   key={index}
              //   className="p-6 hover:shadow-luxury transition-elegant border-corporate/20 bg-card"
              // >
              //   <div className="mb-4">
              //     <service.icon className="h-10 w-10 text-corporate-secondary" />
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
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-luxury transition-all duration-500 border border-corporate/20"
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#dbd6d6]/10 mb-3">
                    <service.icon className="h-8 w-8  text-corporate-secondary text-[#305296]" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs font-sans">
                    {service.description}
                  </p>
                </div>
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
              Corporate Venues
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://executive.mit.edu/dw/image/v2/BFHZ_PRD/on/demandware.static/-/Sites-master-catalog-msee/default/dwe9d5a8e1/courseimages/IPP.png?sw=417&sh=235",
                name: "Executive Conference Center",
                capacity: "500-1000 attendees",
                features: "Full AV, breakout rooms, premium catering",
              },
              {
                image:
                  "https://executive.mit.edu/dw/image/v2/BFHZ_PRD/on/demandware.static/-/Sites-master-catalog-msee/default/dwe9d5a8e1/courseimages/IPP.png?sw=417&sh=235",
                name: "Innovation Hub",
                capacity: "100-300 attendees",
                features: "Modern tech, flexible layouts, creative spaces",
              },
              {
                image:
                  "https://executive.mit.edu/dw/image/v2/BFHZ_PRD/on/demandware.static/-/Sites-master-catalog-msee/default/dwe9d5a8e1/courseimages/IPP.png?sw=417&sh=235",
                name: "Grand Convention Hall",
                capacity: "1000+ attendees",
                features: "Exhibition space, multiple stages, VIP areas",
              },
            ].map((venue, index) => (
              // <Card
              //   key={index}
              //   className="p-8 hover:shadow-luxury transition-elegant border-corporate/20 bg-card"
              // >
              //   <h3 className="text-2xl font-bold mb-2 text-corporate">
              //     {venue.name}
              //   </h3>
              //   <p className="text-corporate-secondary font-bold mb-4">
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
                  <p className="text-[#9EADCD] font-extrabold text-md ml-2 mr-2">
                    {venue.capacity}
                  </p>
                  {/* <div className="absolute bottom-0 left-0 w-full flex justify-center opacity-0 translate-y-6 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                    
                  </div> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 pb-20 px-6">
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
             bg-[length:200%_200%] bg-gradient-to-r from-[#335597] via-[#3b60a5] to-[#929AAA]
             transition-all duration-700 ease-out hover:scale-105 hover:animate-gradientMove"
            >
              {/* Inner white layer to mask gradient background */}
              <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

              {/* Step Circle */}
              <div className="relative z-10 w-12 h-12 rounded-full gradient-corporate flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md text-white font-bold text-lg flex items-center justify-center shadow-md mb-3">
                {process.step}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground font-sans">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 px-4 gradient-corporate">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default Corporate;
