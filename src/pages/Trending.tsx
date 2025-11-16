import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Calendar, Users, MapPin, CheckCircle, Shield, 
  ArrowRight, Heart, Star, Sparkles, Trophy, Music, Zap, 
  Crown, Award, Flame, Search, Filter, ArrowUpRight,
  Eye, Clock, ThumbsUp, Share2, Bookmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

const Trending = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [savedEvents, setSavedEvents] = useState(new Set());

  const trendingEvents = [
    {
      id: 1,
      title: "Luxury Weddings",
      category: "Wedding",
      description: "Exotic locations with premium packages for unforgettable ceremonies. Featuring custom decor and world-class catering.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      popularity: 98,
      bookings: 250,
      trending: "hot",
      views: 1250,
      duration: "Full Day",
      location: "Multiple Venues",
      price: "Premium",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      tags: ["Premium", "Luxury", "Custom"],
    },
    {
      id: 2,
      title: "Hybrid Corporate Events",
      category: "Corporate",
      description: "Blend in-person and virtual experiences for maximum engagement with advanced streaming technology.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      popularity: 95,
      bookings: 180,
      trending: "rising",
      views: 980,
      duration: "4-8 Hours",
      location: "Virtual + Physical",
      price: "Custom",
      icon: Trophy,
      color: "from-blue-500 to-cyan-500",
      tags: ["Hybrid", "Tech", "Professional"],
    },
    {
      id: 3,
      title: "Immersive Art Shows",
      category: "Entertainment",
      description: "360° projection mapping and interactive performances that transport guests to another world.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      popularity: 92,
      bookings: 320,
      trending: "hot",
      views: 2100,
      duration: "3-5 Hours",
      location: "Art Galleries",
      price: "$$",
      icon: Music,
      color: "from-purple-500 to-pink-500",
      tags: ["Immersive", "Art", "Interactive"],
    },
    {
      id: 4,
      title: "Sustainable Green Events",
      category: "Eco-Friendly",
      description: "Sustainable celebrations with zero-waste solutions and carbon-neutral planning.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      popularity: 89,
      bookings: 145,
      trending: "new",
      views: 760,
      duration: "Custom",
      location: "Eco Venues",
      price: "$$$",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
      tags: ["Eco", "Sustainable", "Green"],
    },
    {
      id: 5,
      title: "Themed Birthday Experiences",
      category: "Birthday",
      description: "Creative themes from vintage to futuristic designs with personalized experiences.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      popularity: 94,
      bookings: 290,
      trending: "rising",
      views: 1500,
      duration: "4-6 Hours",
      location: "Any Venue",
      price: "$$",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      tags: ["Themed", "Personal", "Creative"],
    },
    {
      id: 6,
      title: "E-Sports Tournaments",
      category: "Sports",
      description: "Professional gaming tournaments with live streaming and interactive fan experiences.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      popularity: 91,
      bookings: 210,
      trending: "hot",
      views: 1800,
      duration: "Full Day",
      location: "Arenas & Online",
      price: "$$",
      icon: Zap,
      color: "from-red-500 to-orange-500",
      tags: ["Gaming", "Tech", "Competitive"],
    },
  ];

  const trendingThemes = [
    {
      id: 1,
      name: "Vintage Elegance",
      description: "Classic sophistication with a modern twist featuring timeless decor",
      popularity: "High",
      image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
      applications: "Weddings, Corporate Galas",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 2,
      name: "Minimalist Chic",
      description: "Less is more with clean, contemporary designs and neutral palettes",
      popularity: "Rising",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      applications: "Modern Events, Product Launches",
      color: "from-gray-400 to-slate-600",
    },
    {
      id: 3,
      name: "Bohemian Luxe",
      description: "Free-spirited style meets upscale comfort with natural elements",
      popularity: "Hot",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
      applications: "Outdoor Weddings, Festivals",
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: 4,
      name: "Tech-Forward Futurism",
      description: "Cutting-edge technology integration with cyberpunk aesthetics",
      popularity: "Trending",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      applications: "Tech Events, Product Launches",
      color: "from-blue-400 to-purple-600",
    },
  ];

  const upcomingEvents = [
    {
      id: 7,
      title: "New Year's Eve Gala",
      category: "Celebration",
      description: "Ring in the new year with an unforgettable night of music, dining, and celebration.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      date: "December 31, 2024",
      time: "8:00 PM - 2:00 AM",
      location: "Grand Ballroom, Downtown",
      price: "$150 - $300",
      featured: true,
      tags: ["Premium", "Celebration", "Live Music"]
    },
    {
      id: 8,
      title: "Winter Wonderland Festival",
      category: "Festival",
      description: "A magical winter experience with ice sculptures, holiday markets, and seasonal treats.",
      image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
      date: "December 15-23, 2024",
      time: "10:00 AM - 10:00 PM",
      location: "City Park",
      price: "$25 (Kids under 12 free)",
      featured: true,
      tags: ["Family", "Holiday", "Outdoor"]
    },
    {
      id: 9,
      title: "Tech Conference 2025",
      category: "Conference",
      description: "Annual technology conference featuring industry leaders and innovative startups.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f96d55f2?w=800&q=80",
      date: "January 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Convention Center",
      price: "Early Bird $299",
      featured: false,
      tags: ["Technology", "Networking", "Workshops"]
    },
    {
      id: 10,
      title: "Spring Music Festival",
      category: "Music",
      description: "Three days of live music across multiple stages featuring top artists and local talent.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      date: "April 25-27, 2025",
      time: "12:00 PM - 11:00 PM",
      location: "Riverside Park",
      price: "$199 (3-day pass)",
      featured: true,
      tags: ["Music", "Outdoor", "Festival"]
    }
  ];

  const filters = [
    { key: "all", label: "All Trends", count: trendingEvents.length },
    { key: "hot", label: "Hot", count: trendingEvents.filter(e => e.trending === "hot").length },
    { key: "rising", label: "Rising", count: trendingEvents.filter(e => e.trending === "rising").length },
    { key: "new", label: "New", count: trendingEvents.filter(e => e.trending === "new").length },
  ];

  const toggleSaveEvent = (eventId) => {
    setSavedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const filteredEvents = trendingEvents
    .filter(event => 
      activeFilter === "all" || event.trending === activeFilter
    )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navbar />
      <WhatsAppButton />


      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden min-h-[100vh] flex items-center">
        {/* Video Background with Overlay */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110"
            style={{ minHeight: '100vh' }}
          >
            <source src="https://res.cloudinary.com/dqvkcq4e0/video/upload/v1763051118/2432400-hd_1920_1080_24fps_gq4gyt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          
          {/* Animated Gradient Orbs */}
          <motion.div 
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <Badge 
                variant="secondary" 
                className="mb-6 px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white border-0 text-sm font-medium tracking-wide"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Industry Insights
                </span>
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="relative inline-block">
                <span className="relative z-10">Trending</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400/30 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <motion.span
                className="block mt-2 md:mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Now & Beyond
                </span>
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed mb-10 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Discover the hottest event trends, innovative themes, and industry insights shaping the future of celebrations. Stay ahead with real-time updates and expert analysis.
            </motion.p>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
        
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Floating Particles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Main Content with Tabs */}
      <section className="py-12 md:py-20 px-4 relative bg-white/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="relative">
          <div className="mx-auto w-full max-w-[97%] sm:max-w-7xl">
          <Tabs defaultValue="events" className="space-y-12">
            <TabsList className="grid w-full grid-cols-2 lg:max-w-md mx-auto p-1 bg-muted/50 rounded-2xl">
              <TabsTrigger value="events" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending Events
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg">
                <Calendar className="w-4 h-4 mr-2" />
                Upcoming Events
              </TabsTrigger>
            </TabsList>

            {/* Trending Events Tab */}
            <TabsContent value="events" className="space-y-8">
              {/* Events Grid */}
              <AnimatePresence>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card rounded-2xl h-full flex flex-col">
                        {/* Header with Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          
                          
                          {/* Action Buttons Removed */}

                          {/* Category */}
                          <div className="absolute bottom-3 left-3">
                            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-0">
                              <event.icon className="w-3 h-3 mr-1" />
                              {event.category}
                            </Badge>
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-5 flex-grow">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-card-foreground group-hover:text-yellow-600 transition-colors line-clamp-2">
                              {event.title}
                            </h3>
                          </div>
                          
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                            {event.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {event.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>{event.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{event.bookings}+</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{event.popularity}%</span>
                            </div>
                          </div>
                        </CardContent>

                        {/* Footer */}
                        <CardFooter className="p-5 pt-0">
                          <Button className="w-full group" variant="luxury" asChild>
                            <Link to={`/event/${event.id}`}>
                              Explore Event
                              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </TabsContent>

            {/* Popular Themes Tab */}
            <TabsContent value="themes">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trendingThemes.map((theme, index) => (
                  <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 rounded-2xl h-full flex flex-col">
                      <div className="flex flex-col md:flex-row h-full">
                        {/* Image Section - Fixed height */}
                        <div className="relative h-48 w-full md:w-2/5 overflow-hidden">
                          <img
                            src={theme.image}
                            alt={theme.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${theme.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                        </div>
                        
                        {/* Content Section - Fixed height container */}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex-1 min-h-0">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl font-bold text-card-foreground line-clamp-1">
                                {theme.name}
                              </h3>
                              <Badge 
                                variant={
                                  theme.popularity === "Hot" ? "destructive" :
                                  theme.popularity === "High" ? "default" : "outline"
                                } 
                                className="flex-shrink-0 ml-2"
                              >
                                {theme.popularity}
                              </Badge>
                            </div>
                            
                            <p className="text-muted-foreground mb-3 leading-relaxed line-clamp-3 h-[4.5rem] overflow-hidden">
                              {theme.description}
                            </p>
                            
                            <div className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10 overflow-hidden">
                              <strong>Best for:</strong> {theme.applications}
                            </div>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            className="w-full group mt-auto"
                            asChild
                          >
                            <Link to={`/event/theme/${theme.id}?type=theme`}>
                              View Theme Details
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Upcoming Events Tab */}
            <TabsContent value="upcoming" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card rounded-2xl h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Featured Badge */}
                        {event.featured && (
                          <Badge className="absolute top-3 left-3 bg-yellow-400 text-black hover:bg-yellow-400/90 px-3 py-1 rounded-full font-medium text-xs">
                            Featured
                          </Badge>
                        )}
                        
                        {/* Category */}
                        <div className="absolute bottom-3 left-3">
                          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-0">
                            {event.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-5 flex-grow">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-card-foreground group-hover:text-yellow-600 transition-colors line-clamp-2">
                            {event.title}
                          </h3>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                          {event.description}
                        </p>
                        
                        {/* Event Details */}
                        <div className="space-y-2 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="flex items-center justify-between pt-2">
                          <span className="font-semibold text-lg">{event.price}</span>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-5 pt-0">
                        <Button className="w-full group" variant="luxury" asChild>
                          <Link to={`/event/${event.id}`}>
                            View Details
                            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          </div>
        </div>
      </section>

      {/* Popular Themes Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-blue-100 bg-blue-50 text-blue-600 font-medium">
              <Star className="w-4 h-4 mr-2" />
              Popular Themes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trending Event Themes
              <span className="relative ml-2">
                <span className="relative z-10">This Season</span>
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-200/60 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the most sought-after event themes that are making waves in the industry.
              Perfect for any occasion, from intimate gatherings to grand celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingThemes.map((theme) => (
              <motion.div
                key={theme.id}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent`} />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className={`px-3 py-1 text-xs font-medium ${
                        theme.popularity === 'Hot' ? 'bg-red-100 text-red-800' :
                        theme.popularity === 'Rising' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {theme.popularity}
                    </Badge>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{theme.name}</h3>
                    <p className="text-slate-600 mb-4">{theme.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <span className="inline-flex items-center">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        {theme.applications.split(', ')[0]}
                      </span>
                      {theme.applications.split(', ').length > 1 && (
                        <span className="mx-2">•</span>
                      )}
                      {theme.applications.split(', ').length > 1 && (
                        <span>{theme.applications.split(', ')[1]}</span>
                      )}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-slate-900 group-hover:text-white transition-colors" asChild>
                      <Link to={`/event/theme/${theme.id}?type=theme`} className="flex items-center justify-center">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Enhanced CTA Section */}

      <Footer />
    </div>
  );
};

export default Trending;