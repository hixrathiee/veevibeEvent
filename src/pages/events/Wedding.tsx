import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart, Camera, Music, Utensils, Flower, Sparkles } from "lucide-react";
import weddingHero from "@/assets/wedding-hero.jpg";
import "./event.css";
import ProcessSteps from "./ProcessSteps";

const Wedding = () => {
  const services = [
    {
      serviceImg:
        "https://i.pinimg.com/1200x/75/0e/94/750e94aa13ea11e25a6b75d5dcac1007.jpg",
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete planning from engagement to reception",
    },
    {
      serviceImg:
        "https://cdn0.weddingwire.in/vendor/3081/3_2/960/jpg/perfect-for-your-big-day_15_43081.jpeg",
      icon: Camera,
      title: "Photography & Video",
      description: "Capture every precious moment beautifully",
    },
    {
      serviceImg:
        "https://gokapture.com/wp-content/uploads/2024/10/The-Zorbing-Ball-Roll.jpg",
      icon: Music,
      title: "Entertainment",
      description: "Live bands, DJs, and special performances",
    },
    {
      serviceImg:
        "https://media.istockphoto.com/id/1249206724/photo/banquet-catering-buffet-food.jpg?s=612x612&w=0&k=20&c=EDQZDZDQYeWT0UYasMivgDXwEa-QWPWEQn62szACVVM=",
      icon: Utensils,
      title: "Catering",
      description: "Exquisite menus tailored to your taste",
    },
    {
      serviceImg:
        "https://cdn0.weddingwire.in/vendor/9582/3_2/640/jpeg/whatsapp-image-2025-10-29-at-11-55-30-am_15_39582-176181939536615.jpeg",
      icon: Flower,
      title: "Floral Design",
      description: "Stunning arrangements and décor",
    },
    {
      serviceImg:
        "https://www.amazingspaceweddings.co.uk/uploads/hylands_estate/34-3.jpg",
      icon: Sparkles,
      title: "Venue Styling",
      description: "Transform spaces into dreamscapes",
    },
  ];

  const venues = [
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/070/987/333/small/the-ballroom-at-the-palace-of-versailles-photo.jpg",
      name: "Royal Ballroom",
      capacity: "300-500 guests",
      features: "Crystal chandeliers, gold accents, grand entrance",
    },
    {
      image:
        "https://everydaybride.com/wp-content/uploads/2022/06/zcG8b7GQIfixs2K1jSLttBWifVKcSSZQ1653407148.jpg",
      name: "Garden Paradise",
      capacity: "150-300 guests",
      features: "Outdoor ceremony, floral arches, natural beauty",
    },
    {
      image:
        "https://i.pinimg.com/736x/aa/ef/78/aaef784b140dce27b24173c2c534c6f5.jpg",
      name: "Heritage Palace",
      capacity: "200-400 guests",
      features: "Historic elegance, marble halls, royal ambiance",
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
          style={{ backgroundImage: `url(${weddingHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/90 via-[#800000]/70 to-[#FFD700]/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Dream Wedding Events
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/90 mb-8 font-sans">
            Your love story deserves a celebration as unique as your journey
            together
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#800000]/10 mb-3">
                    <service.icon className="h-8 w-8 text-[#800000]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#800000] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[#5A0000]/80 text-xs font-sans">
                    {service.description}
                  </p>
                </div>
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
              // <Card
              //   key={index}
              //   className="p-8 bg-white border border-[#FFD700]/40 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              // >
              //   <h3 className="text-2xl font-bold text-[#800000] mb-1">
              //     {venue.name}
              //   </h3>
              //   <p className="text-[#FFD700] font-medium mb-3">
              //     {venue.capacity}
              //   </p>
              //   <p className="text-[#5A0000]/80">{venue.features}</p>
              // </Card>
              <figure
                key={index}
                className="relative overflow-hidden rounded-2xl w-90 h-72 bg-black text-white shadow-md group"
              >
                {/* Background image */}
                <img
                  src={`${venue.image}`}
                  alt={venue.name}
                  className="w-full h-full object-cover opacity-90 transition-all duration-500 ease-in-out group-hover:opacity-35 group-hover:scale-110"
                />

                {/* Circular animation overlay */}
                <figcaption className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-40 rounded-full bg-black/30 transition-all duration-500 ease-in-out group-hover:bg-transparent">
                    {/* Rotating semi-borders */}
                    <span className="absolute inset-0 rounded-full border-2 border-white border-b-transparent transition-all duration-500 ease-in-out group-hover:rotate-[22deg]"></span>
                    <span className="absolute inset-0 rounded-full border-2 border-white border-b-transparent transition-all duration-500 ease-in-out group-hover:-rotate-[22deg]"></span>

                    {/* Capacity (animated number) */}
                    <div className="absolute bottom-12 left-0 w-full flex justify-center opacity-0 translate-y-6 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-[#E99E00] font-extrabold ml-2 mr-2">
                        {venue.capacity}
                      </p>
                    </div>

                    {/* Title */}
                    <h2 className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 text-xl font-light uppercase transition-all duration-500 group-hover:font-semibold">
                      {venue.name.split(" ")[0]}
                      <span className="block font-bold">
                        {venue.name.split(" ")[1] || ""}
                      </span>
                    </h2>
                    {/* Features (fade-in later for staggered elegance) */}
                    <div className="absolute bottom-3 left-0 w-full text-center opacity-0 translate-y-3 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-[#FFD700]/90 font-sans text-sm px-4">
                        {venue.features}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#800000] mb-4">
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
             bg-[length:200%_200%] bg-gradient-to-r from-[#800000] via-[#FFD700] to-[#800000] 
             transition-all duration-700 ease-out hover:scale-105 hover:animate-gradientMove hover:border-[#FFD700]/50"
            >
              {/* Inner white layer to mask gradient background */}
              <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

              {/* Step Circle */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#800000] to-[#FFD700] text-white font-bold text-lg flex items-center justify-center shadow-md mb-3">
                {process.step}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#800000] mb-1">
                  {process.title}
                </h3>
                <p className="text-[#5A0000]/80 text-sm">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 px-4 gradient-wedding">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default Wedding;
