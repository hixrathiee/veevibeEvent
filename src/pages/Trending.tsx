import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Calendar, Users, MapPin, ArrowRight, Heart, Star, Sparkles, Trophy, Music, Zap, Crown, Award, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

const Trending = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const trendingEvents = [
    {
      id: 1,
      title: "Luxury Weddings",
      category: "Wedding",
      description: "Exotic locations with premium packages for unforgettable ceremonies.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      popularity: "98%",
      bookings: "250+",
      trending: "hot",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      title: "Hybrid Corporate",
      category: "Corporate",
      description: "Blend in-person and virtual experiences for maximum engagement.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      popularity: "95%",
      bookings: "180+",
      trending: "rising",
      icon: Trophy,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Immersive Shows",
      category: "Entertainment",
      description: "360° projection mapping and interactive performances.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      popularity: "92%",
      bookings: "320+",
      trending: "hot",
      icon: Music,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Green Events",
      category: "Eco-Friendly",
      description: "Sustainable celebrations with zero-waste solutions.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      popularity: "89%",
      bookings: "145+",
      trending: "new",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      title: "Themed Birthdays",
      category: "Birthday",
      description: "Creative themes from vintage to futuristic designs.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      popularity: "94%",
      bookings: "290+",
      trending: "rising",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      title: "E-Sports Events",
      category: "Sports",
      description: "Professional gaming tournaments with live streaming.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      popularity: "91%",
      bookings: "210+",
      trending: "hot",
      icon: Zap,
      color: "from-red-500 to-orange-500",
    },
  ];

  const trendingThemes = [
    {
      name: "Vintage Elegance",
      description: "Classic sophistication with a modern twist",
      popularity: "High",
      image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
    },
    {
      name: "Minimalist Chic",
      description: "Less is more with clean, contemporary designs",
      popularity: "Rising",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      name: "Bohemian Luxe",
      description: "Free-spirited style meets upscale comfort",
      popularity: "Hot",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    },
    {
      name: "Tech-Forward",
      description: "Cutting-edge technology integration",
      popularity: "Trending",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    },
  ];


  const upcomingTrends = [
    {
      icon: Star,
      title: "AI-Powered Personalization",
      description: "Smart event customization based on guest preferences",
    },
    {
      icon: Award,
      title: "Micro-Weddings",
      description: "Intimate celebrations with maximum impact",
    },
    {
      icon: Sparkles,
      title: "Experiential Dining",
      description: "Multi-sensory culinary adventures",
    },
    {
      icon: TrendingUp,
      title: "Virtual Reality Venues",
      description: "Explore and customize spaces in VR before booking",
    },
  ];

  const filters = ["all", "hot", "rising", "new", "upcoming"];

  const filteredEvents = activeFilter === "all"
    ? trendingEvents
    : trendingEvents.filter(event => event.trending === activeFilter);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-luxury relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-12 h-12 text-yellow-400" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                What's Trending
              </h1>
            </div>
            <p className="text-xl text-white/90 font-sans max-w-3xl mx-auto leading-relaxed">
              Discover the hottest event trends, themes, and innovations shaping the industry. Stay ahead with VEEVIBE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trending Events Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Most Popular Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These event types are making waves right now. Join the trend and create something extraordinary.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-3 rounded-full text-sm font-medium border capitalize transition-all duration-300 ${activeFilter === filter
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md"
                  : "bg-white text-muted-foreground border-border hover:bg-muted/50"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card flex flex-col w-full rounded-2xl relative">
                  {event.trending === "hot" && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg"
                    >
                      <Flame className="w-3.5 h-3.5" />
                      HOT
                    </motion.div>
                  )}
                  {/* Event Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute top-4 right-4 bg-gradient-to-r ${event.color} text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5`}
                    >
                      <TrendingUp className="w-3.5 h-3.5" />
                      {event.popularity}
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Event Details */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <event.icon
                        className={`w-4 h-4 bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}
                      />
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-yellow-500 transition-colors h-14 flex items-center">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-snug h-10">
                      {event.description}
                    </p>
                    <div className="mt-auto pt-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          <span>{event.bookings} Bookings</span>
                        </div>
                      </div>
                      <Button variant="luxury" size="sm" className="w-full group" asChild>
                        <Link to="/booking" className="text-sm">
                          Book This Event
                          <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Themes Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Hot Themes & Styles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most sought-after design aesthetics for events this season.
            </p>
          </motion.div>

          {/* Equal-height grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {trendingThemes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card rounded-2xl group hover:scale-105 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={theme.image}
                      alt={theme.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  </div>

                  {/* Text Section */}
                  <div className="p-6 text-center flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-yellow-500 transition-colors">
                        {theme.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {theme.description}
                      </p>
                    </div>
                    <span className="inline-block px-2 py-1 bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-semibold mt-auto">
                      {theme.popularity}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trends Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What's Coming Next
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with these emerging trends in event planning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 bg-card h-full group hover:border-yellow-400/50">
                  <div className="flex items-start gap-4 h-full">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <trend.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Text + Progress Line */}
                    <div className="flex flex-col justify-between flex-grow h-full">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-yellow-500 transition-colors">
                          {trend.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {trend.description}
                        </p>
                      </div>

                      <motion.div className="w-full h-1 bg-muted rounded-full overflow-hidden mt-auto">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${75 + index * 5}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full bg-gradient-to-r from-[hsl(45,90%,55%)] to-[hsl(280,60%,40%)]"
                        />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 gradient-luxury relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Trending Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-sans">
              Let's create something extraordinary together. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/booking">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-foreground" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Trending;
