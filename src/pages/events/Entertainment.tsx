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
      serviceImg:
        "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7222/1746443927222-i",
      icon: Music,
      title: "Live Concerts",
      description: "World-class artist management and concert production",
    },
    {
      serviceImg:
        "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7222/1746443927222-i",
      icon: Mic,
      title: "Comedy Shows",
      description: "Stand-up nights and comedy festival organization",
    },
    {
      serviceImg:
        "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7222/1746443927222-i",
      icon: PartyPopper,
      title: "Festivals",
      description: "Multi-day cultural and music festival management",
    },
    {
      serviceImg:
        "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7222/1746443927222-i",
      icon: Film,
      title: "Award Shows",
      description: "Glamorous entertainment industry celebrations",
    },
    {
      serviceImg:
        "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7222/1746443927222-i",
      icon: Theater,
      title: "Theater Events",
      description: "Stage productions and theatrical performances",
    },
    {
      serviceImg:
        "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7222/1746443927222-i",
      icon: Sparkle,
      title: "Private Performances",
      description: "Exclusive entertainment for intimate gatherings",
    },
  ];

  return (
    <div className="h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 h-3/4 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${entertainmentHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-entertainment/90 to-entertainment/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Entertainment Spectacular
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-sans">
            Creating unforgettable entertainment experiences that captivate
            audiences
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
              // <Card
              //   key={index}
              //   className="p-6 hover:shadow-luxury transition-elegant border-entertainment/20 bg-card"
              // >
              //   <div className="mb-4">
              //     <service.icon className="h-10 w-10 text-entertainment-secondary" />
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#9b84ff]/10 mb-3">
                    <service.icon className="h-8 w-8 text-[#A770C2]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-[#56337a]/80 text-xs font-sans">
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
                description:
                  "State-of-the-art sound, lighting, and stage production",
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
              <Card key={index} className="p-6 border-entertainment/20 bg-card">
                <h3 className="text-xl font-bold mb-2 text-entertainment">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-sans">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Venues */}
      <section className="py-5 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Entertainment Venues
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
                name: "Concert Arena",
                capacity: "5,000-15,000",
                features:
                  "Full concert production, VIP areas, professional sound",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
                name: "Theater Complex",
                capacity: "500-2,000",
                features:
                  "Theatrical staging, intimate acoustics, elegant setting",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
                name: "Festival Grounds",
                capacity: "10,000+",
                features: "Multiple stages, outdoor space, camping facilities",
              },
            ].map((venue, index) => (
              // <Card
              //   key={index}
              //   className="p-8 hover:shadow-luxury transition-elegant border-entertainment/20 bg-card"
              // >
              //   <h3 className="text-2xl font-bold mb-2 text-entertainment">
              //     {venue.name}
              //   </h3>
              //   <p className="text-entertainment-secondary font-bold mb-4">
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
                  <p className="text-[#A770C2] font-extrabold text-sm ml-2 mr-2">
                    {venue.capacity}
                  </p>
                  {/* <div className="absolute bottom-0 left-0 w-full flex justify-center opacity-0 translate-y-6 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                      
                    </div> */}
                  {/* <p className="font-sans px-4">{venue.features}</p> */}
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
             bg-[length:200%_200%] bg-gradient-to-r from-[#903EBA] via-[#a24bd1] to-[#7d24ad]
             transition-all duration-700 ease-out hover:scale-105 hover:animate-gradientMove"
            >
              {/* Inner white layer to mask gradient background */}
              <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

              {/* Step Circle */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-r from-[#A770C2] to-[#7d24ad] flex items-center justify-center text-primary-foreground  text-white font-bold text-lg  shadow-md mb-3">
                {process.step}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#43274c] mb-2">
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
      {/* <section className="py-20 px-4 gradient-entertainment">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default Entertainment;
