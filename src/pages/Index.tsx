import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, Users, Award, Star } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import corporateImage from "@/assets/corporate-hero.jpg";
import entertainmentImage from "@/assets/entertainment-hero.jpg";
import sports from "@/assets/sports-hero.jpg";
const Index = () => {
  const heroSlides = [
  {
    image: heroImage,
    title: "Luxury Weddings",
    subtitle: "Where dreams meet elegance",
  },
  {
    image: corporateImage,
    title: "Corporate Events",
    subtitle: "Professional perfection, redefined",
  },
  {
    image: entertainmentImage,
    title: "Entertainment & Shows",
    subtitle: "Creating experiences that captivate",
  },
   {
    image: sports,
    title: "Sports Events",
    subtitle: "Creating experiences that captivate",
  },
];
  const services = [
    {
      icon: Calendar,
      title: "Wedding Events",
      description: "Create your dream wedding with our bespoke planning services",
      link: "/events/wedding",
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Professional events that elevate your business presence",
      link: "/events/corporate",
    },
    {
      icon: Star,
      title: "Entertainment",
      description: "Spectacular entertainment experiences for all occasions",
      link: "/events/entertainment",
    },
    {
      icon: Award,
      title: "Sports Events",
      description: "World-class sports event management and execution",
      link: "/events/sports",
    },
  ];

  const testimonials = [
    {
      quote: "When we saw the mandap, I wept. It wasn’t décor—it was my grandmother’s temple, reborn in elegance.",
      author: "Couple, Chennai",
      image: "https://res.cloudinary.com/dqtuapdkq/image/upload/v1760882758/Screenshot_2025-10-19_193328_agsqza.png",
      rating: 5,
    },
    {
      quote: "Our Bali gala was not just professional—it was soulful. Guests felt our purpose.",
      author: "CEO, Global Tech Firm",
      image: "https://res.cloudinary.com/dqtuapdkq/image/upload/v1760882853/Screenshot_2025-10-19_193344_di3enf.png",
      rating: 5,
    },
    {
      quote: "The pop concert staging was flawless; the audience became one heartbeat.",
      author: "Tour Manager",
      image: "https://res.cloudinary.com/dqtuapdkq/image/upload/v1760882854/Screenshot_2025-10-19_193355_rxshyn.png",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 drop-shadow-md animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-sans animate-fade-in delay-200">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/booking">Book Your Event</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life with impeccable attention to detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-luxury transition-elegant border-border bg-card"
              >
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-sans mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-secondary hover:text-secondary/80 font-medium transition-elegant font-sans"
                >
                  Learn More →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events CTA */}
      <section className="py-20 px-4 gradient-luxury">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 font-sans max-w-2xl mx-auto">
            Let us transform your vision into an extraordinary reality
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              Excellence reflected in every testimonial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-border shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover border-2 border-secondary shadow-sm"
                  />
                </div>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 font-sans italic text-center">
                  “{testimonial.quote}”
                </p>
                <div className="text-center">
                  <p className="font-bold text-card-foreground">{testimonial.author}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-12 text-center shadow-luxury bg-card border-border">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
              Start Planning Your Perfect Event
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-sans max-w-2xl mx-auto">
              Contact us today for a personalized consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg" asChild>
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
