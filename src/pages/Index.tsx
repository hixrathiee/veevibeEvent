import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import corporateImage from "@/assets/corporate-hero.jpg";
import { FaLightbulb, FaHeart, FaGem, FaPalette, FaMusic } from "react-icons/fa";
import entertainmentImage from "@/assets/entertainment-hero.jpg";
import sports from "@/assets/sports-hero.jpg";
import { motion } from "framer-motion";
const Index = () => {
  const heroSlides = [
    {
      image: heroImage,
      title: "Luxury Weddings",
      subtitle: "Where dreams meet elegance",
      category: "Wedding",
    },
    {
      image: corporateImage,
      title: "Corporate Events",
      subtitle: "Professional perfection, redefined",
      category: "Corporate",
    },
    {
      image: entertainmentImage,
      title: "Entertainment & Shows",
      subtitle: "Creating experiences that captivate",
      category: "Entertainment",
    },
    {
      image: sports,
      title: "Sports Events",
      subtitle: "Creating experiences that captivate",
      category: "Sports",
    },
  ];
  const services = [
    {
      title: "Wedding Events",
      description: "Create your dream wedding with our bespoke planning services.",
      image: "https://blog.getyourvenue.com/wp-content/uploads/2019/12/jaipur-destination-wedding-venue.jpg",
      link: "/events/wedding",
    },
    {
      title: "Corporate Events",
      description: "Professional events that elevate your business presence.",
      image: "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=",
      link: "/events/corporate",
    },
    {
      title: "Entertainment",
      description: "Spectacular entertainment experiences for all occasions.",
      image: "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/34.webp",
      link: "/events/entertainment",
    },
    {
      title: "Sports Events",
      description: "World-class sports event management and execution.",
      image: "https://res.cloudinary.com/ddqplrtt2/image/upload/v1762276260/sports_dz1tqa.jpg",
      link: "/events/sports",
    },
  ];

  const testimonials = [
    {
      quote: "When we saw the mandap, I wept. It wasn’t décor—it was my grandmother’s temple.",
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
    {
      quote: "In Dubai, they gave us both: the luxury we wanted and the soul we feared we’d lose.",
      author: "Groom, Dubai",
      image: "https://res.cloudinary.com/dqtuapdkq/image/upload/v1760882852/Screenshot_2025-10-19_193333_vpfcqt.png",
      rating: 5,
    },
    {
      quote: "From registration to farewell , the experience felt intentional.",
      author: "Investor, Delhi",
      image: "https://res.cloudinary.com/dqtuapdkq/image/upload/v1760882854/Screenshot_2025-10-19_193348_ilzkud.png",
      rating: 5,
    },
  ];

  const founderSections = [
    {
      icon: <FaLightbulb />,
      title: "The Veevibe Origin",
      text: "I searched for something deeper: the fragrance of jasmine, the warmth of a mother’s blessing, the sound of temple bells at dawn. They were missing. And so, Veevibe was born.",
    },
    {
      icon: <FaHeart />,
      title: "The Promise",
      text: "I wanted to create a world where luxury and tradition could hold hands. Veevibe is my promise: that your celebration will not just shine, but breathe.",
    },
    {
      icon: <FaGem />,
      title: "The Guiding Principle",
      text: '"LUXURY DOES NOT ERASE TRADITION — IT ELEVATES IT."',
    },
    {
      icon: <FaPalette />,
      title: "The Art of Design",
      text: "Because the true art of event design is not in decoration; it is in emotion. An event is not a date on a calendar—it is a heartbeat.",
    },
    {
      icon: <FaMusic />,
      title: "Sensory Detail",
      text: "Every detail is a verse in the poetry of celebration: the scent of jasmine, the rhythm of a flute, the silk of drapes echoing the bride’s jewels. We design not for the eyes alone, but for the soul.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          speed={1000}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="h-full relative hero-swiper"
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
                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 drop-shadow-md animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-sans animate-fade-in delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt- animate-fade-in delay-300">
                  <Button variant="gold" size="lg" asChild>
                    <Link to="/booking">Book Your Event</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Link to={`/gallery?category=${slide.category}`}>View Gallery</Link>
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom arrows */}
        <div
          className="custom-prev absolute left-6 md:left-32 top-1/2 -translate-y-[40%] z-20 cursor-pointer text-[1.5rem] md:text-[5rem] text-[#d4af37] hover:text-[#f0c75e] transition-colors duration-300"
        >
          &#10094; {/* Left arrow */}
        </div>
        <div
          className="custom-next absolute right-6 md:right-32 top-1/2 -translate-y-[40%] z-20 cursor-pointer text-[1.5rem] md:text-[5rem] text-[#d4af37] hover:text-[#f0c75e] transition-colors duration-300"
        >
          &#10095; {/* Right arrow */}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Expertise — The Four Pillars
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life with impeccable attention to detail
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link} className="group block">
                  <Card className="relative overflow-hidden rounded-2xl shadow-lg border-none cursor-pointer transition-all duration-500 hover:-translate-y-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-all duration-500">
                      <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-lg">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-sm font-sans mb-2">
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
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

      {/* Founder’s Vision & Philosophy */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Founder’s Vision & Philosophy
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              A message from the heart — where luxury meets emotion, and design finds its soul.
            </p>
          </div>
          {/* Top Row - 3 Cards */}
          <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 space-y-6 lg:space-y-0 mb-8">
            {founderSections.slice(0, 3).map((section, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#D6A419] rounded-3xl shadow-md p-6 flex-1 flex flex-col items-start 
      transform transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:border-[#3C1E3D]"
              >
                <div className="text-[#D6A419] text-4xl mb-3">{section.icon}</div>
                <h3 className="text-[#3C1E3D] text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-[#2C2C2C] text-sm leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-6 md:space-y-0">
            {founderSections.slice(3, 5).map((section, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#D6A419] rounded-3xl shadow-md p-6 flex-1 flex flex-col items-start 
      transform transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:border-[#3C1E3D]"
              >
                <div className="text-[#D6A419] text-4xl mb-3">{section.icon}</div>
                <h3 className="text-[#3C1E3D] text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-[#2C2C2C] text-sm leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              Excellence reflected in every testimonial
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="overflow-visible">
                <Card className="relative z-10 p-6 bg-card border-border shadow-md hover:shadow-xl transition-transform duration-500 hover:scale-105 min-h-[200px]">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
