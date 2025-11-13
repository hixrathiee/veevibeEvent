import React, { useEffect, useState } from "react";
import { useParams, Link, useSearchParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Calendar, MapPin, Clock, Users, ChevronRight, 
  Star, Share2, Facebook, Twitter, Instagram, MessageCircle, 
  Sparkles, Check, ChevronLeft, Bookmark, Heart, Share, Map
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Base interface for common properties
interface BaseItem {
  id: number;
  description: string;
  longDescription: string;
  image: string;
  popularity: string;
  price: string;
  color?: string;
}

interface Event extends BaseItem {
  type: 'event';
  title: string;
  category: string;
  bookings: string;
  trending?: string;
  date: string;
  location: string;
}

interface Theme extends BaseItem {
  type: 'theme';
  name: string;
  applications: string;
  features: string[];
}

type DataType = Event | Theme;

// Type guards
const isTheme = (item: DataType): item is Theme => item.type === 'theme';
const isEvent = (item: DataType): item is Event => item.type === 'event';

// Event data
const eventsData: Event[] = [
  {
    type: 'event',
    id: 1,
    title: "Luxury Weddings",
    category: "Wedding",
    description: "Exotic locations with premium packages for unforgettable ceremonies.",
    longDescription: "Our Luxury Weddings package offers an unparalleled experience with exotic locations, premium decor, and personalized services to make your special day truly unforgettable. From beachfront ceremonies to grand ballroom receptions, we handle every detail with precision and care.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    popularity: "98%",
    bookings: "250+",
    trending: "hot",
    color: "from-pink-500 to-rose-500",
    date: "Flexible dates available",
    location: "Worldwide destinations",
    price: "Starting from $15,000"
  },
  {
    type: 'event',
    id: 2,
    title: "Hybrid Corporate",
    category: "Corporate",
    description: "Blend in-person and virtual experiences for maximum engagement.",
    longDescription: "Our Hybrid Corporate events combine the best of both worlds, offering engaging in-person experiences with seamless virtual access. Perfect for conferences, product launches, and corporate meetings, we ensure your message reaches every attendee, whether they're in the room or joining remotely.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    popularity: "95%",
    bookings: "180+",
    trending: "rising",
    color: "from-blue-500 to-cyan-500",
    date: "Custom scheduling available",
    location: "Global venues & virtual",
    price: "Custom quotes available"
  },
  {
    type: 'event',
    id: 3,
    title: "Immersive Shows",
    category: "Entertainment",
    description: "360° projection mapping and interactive performances.",
    longDescription: "Experience the future of entertainment with our Immersive Shows. Featuring cutting-edge 360° projection mapping, interactive performances, and multi-sensory experiences that transport your audience to another world. Perfect for product launches, brand activations, and exclusive private events.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    popularity: "92%",
    bookings: "320+",
    trending: "hot",
    color: "from-purple-500 to-indigo-600",
    date: "Custom scheduling available",
    location: "Custom venues worldwide",
    price: "Starting from $10,000"
  },
  {
    type: 'event',
    id: 4,
    title: "Themed Birthdays",
    category: "Birthday",
    description: "Creative themes from vintage to futuristic designs.",
    longDescription: "Make your birthday celebration truly unforgettable with our Themed Birthday packages. From vintage Hollywood glamour to futuristic space adventures, we'll bring your dream theme to life with custom decor, entertainment, and catering. Perfect for milestone celebrations and special occasions that deserve something extraordinary.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
    popularity: "88%",
    bookings: "200+",
    trending: "popular",
    color: "from-purple-400 to-indigo-500",
    date: "Available year-round",
    location: "Your venue or our recommended locations",
    price: "Packages from $5,000"
  },
  {
    type: 'event',
    id: 5,
    title: "Virtual Conferences",
    category: "Corporate",
    description: "Engaging online experiences with interactive elements.",
    longDescription: "Our Virtual Conferences are designed to captivate and engage your remote audience. Featuring interactive sessions, virtual networking opportunities, and professional production quality, we ensure your online event is as impactful as an in-person gathering. Perfect for global teams, industry summits, and professional development events.",
    image: "https://images.unsplash.com/photo-1581093057302-4c9e0e8a3776?w=800&q=80",
    popularity: "94%",
    bookings: "280+",
    trending: "rising",
    color: "from-blue-400 to-cyan-400",
    date: "Flexible scheduling",
    location: "Online platform",
    price: "Starting from $3,500"
  },
  {
    type: 'event',
    id: 6,
    title: "E-Sports Events",
    category: "Sports",
    description: "Professional gaming tournaments with live streaming.",
    longDescription: "Host the ultimate gaming experience with our E-Sports Events. We provide professional tournament setups, live streaming capabilities, and engaging audience experiences. Perfect for brand activations, gaming conventions, and competitive gaming tournaments.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    popularity: "91%",
    bookings: "210+",
    trending: "hot",
    color: "from-red-500 to-orange-500",
    date: "Year-round availability",
    location: "Venues worldwide & online",
    price: "Starting from $8,000"
  },
  {
    type: 'event',
    id: 7,
    title: "Green Events",
    category: "Eco-Friendly",
    description: "Sustainable celebrations with zero-waste solutions.",
    longDescription: "Our Green Events are designed with sustainability at their core. We offer zero-waste solutions, sustainable catering, and eco-friendly decor to minimize environmental impact. Perfect for environmentally conscious clients who want to celebrate without compromising their values.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
    popularity: "89%",
    bookings: "145+",
    trending: "new",
    color: "from-green-500 to-emerald-500",
    date: "Flexible scheduling",
    location: "Eco-venues worldwide",
    price: "Starting from $10,000"
  },
];

// Theme data
const themeData: Theme[] = [
  {
    type: 'theme',
    id: 1,
    name: "Vintage Elegance",
    description: "Classic sophistication with a modern twist featuring timeless decor",
    longDescription: "Our Vintage Elegance theme brings together the charm of bygone eras with contemporary design elements. Featuring ornate centerpieces, soft lighting, and a warm color palette, this theme creates an atmosphere of timeless sophistication. Perfect for weddings, anniversaries, and formal gatherings that call for a touch of classic glamour.",
    popularity: "High",
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
    applications: "Weddings, Corporate Galas, Anniversaries",
    color: "from-amber-500 to-orange-500",
    features: [
      "Vintage furniture and decor",
      "Classic floral arrangements",
      "Soft, romantic lighting",
      "Elegant table settings",
      "Timeless color palettes"
    ],
    price: "Starting from $5,000"
  },
  {
    type: 'theme',
    id: 2,
    name: "Modern Minimalist",
    description: "Clean lines, neutral palettes, and functional design elements",
    longDescription: "The Modern Minimalist theme is all about simplicity and functionality. Featuring clean lines, a neutral color palette, and uncluttered spaces, this theme creates a sophisticated and contemporary atmosphere. Perfect for corporate events, product launches, and modern weddings where less is more.",
    popularity: "Very High",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&q=80",
    applications: "Corporate Events, Product Launches, Modern Weddings",
    color: "from-gray-400 to-gray-600",
    features: [
      "Minimalist decor with clean lines",
      "Neutral color palette with monochromatic accents",
      "Functional and versatile furniture",
      "Ample negative space for visual impact",
      "High-quality materials and finishes"
    ],
    price: "Starting from $8,000"
  },
  {
    type: 'theme',
    id: 3,
    name: "Bohemian Luxe",
    description: "Free-spirited style meets upscale comfort with natural elements",
    longDescription: "Bohemian Luxe combines the carefree spirit of boho style with luxurious touches. This theme features rich textures, layered patterns, and natural elements like wood and greenery, all while maintaining an upscale, polished look. Perfect for outdoor weddings, festivals, and creative gatherings that call for both comfort and elegance.",
    popularity: "Hot",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    applications: "Outdoor Weddings, Festivals, Creative Gatherings",
    color: "from-emerald-400 to-teal-500",
    features: [
      "Layered textiles and rugs",
      "Mix of patterns and textures",
      "Natural wood elements",
      "Eclectic decor pieces",
      "Warm, ambient lighting"
    ],
    price: "Starting from $6,000"
  },
  {
    type: 'theme',
    id: 4,
    name: "Rustic Charm",
    description: "Rustic and natural elements with a cozy, welcoming feel",
    longDescription: "Our Rustic Charm theme brings the warmth and beauty of the countryside to your event. Featuring natural wood, burlap, lace, and wildflowers, this theme creates a cozy and inviting atmosphere. Perfect for barn weddings, country fairs, and outdoor celebrations with a touch of rustic elegance.",
    popularity: "High",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
    applications: "Barn Weddings, Country Fairs, Outdoor Celebrations",
    color: "from-amber-700 to-amber-900",
    features: [
      "Natural wood and burlap elements",
      "Wildflower arrangements",
      "Vintage and repurposed decor",
      "Soft, warm lighting",
      "Handcrafted details"
    ],
    price: "Starting from $7,500"
  },
  {
    type: 'theme',
    id: 5,
    name: "Tech-Forward Futurism",
    description: "Cutting-edge technology integration with cyberpunk aesthetics",
    longDescription: "Step into the future with our Tech-Forward Futurism theme. This high-tech design incorporates cutting-edge technology, LED lighting, and modern materials to create an immersive, futuristic experience. Perfect for tech events, product launches, and any gathering that aims to impress with innovation and style.",
    popularity: "Trending",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    applications: "Tech Events, Product Launches, Innovative Brand Activations",
    color: "from-blue-400 to-purple-600",
    features: [
      "Interactive digital displays",
      "Neon and LED lighting",
      "Sleek, modern furniture",
      "Augmented reality elements",
      "High-tech decor pieces"
    ],
    price: "Starting from $8,500"
  }
];

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get('type');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  const item = React.useMemo(() => {
    const data = type === 'theme' ? themeData : eventsData;
    return data.find((item) => item.id === Number(id));
  }, [id, type]);

  const isThemeItem = type === 'theme';

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold mb-4 text-slate-900">
              {isThemeItem ? 'Theme' : 'Event'} not found
            </h1>
            <p className="text-muted-foreground mb-6">
              The {isThemeItem ? 'theme' : 'event'} you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 3);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 3) % 3);
  };

  const formatPrice = (price: string) => {
    return price; // Return as-is since prices are already formatted as strings
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: isThemeItem ? (item as Theme).name : (item as Event).title,
        text: item.description,
        url: window.location.href,
      });
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section with Image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <img
          src={item.image}
          alt={isThemeItem ? (item as Theme).name : (item as Event).title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm">
                    {isThemeItem ? 'Theme' : (item as Event).category}
                  </Badge>
                  {!isThemeItem && (
                    <Badge variant="secondary" className="bg-amber-500/20 text-amber-500 border-amber-500/30">
                      <Star className="w-3 h-3 mr-1 fill-amber-500" />
                      {(item as Event).popularity}
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                  {isThemeItem ? (item as Theme).name : (item as Event).title}
                </h1>
                {!isThemeItem && (
                  <div className="flex items-center gap-4 text-sm text-white/90">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{(item as Event).location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{(item as Event).date}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                  onClick={() => setLiked(!liked)}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                  onClick={() => setSaved(!saved)}
                >
                  <Bookmark className={`w-5 h-5 ${saved ? 'fill-blue-500 text-blue-500' : 'text-white'}`} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                  onClick={handleShare}
                >
                  <Share className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            className="mb-6 group"
            onClick={() => navigate('/trending')}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Trending
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Section */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">About {isThemeItem ? 'Theme' : 'Event'}</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {item.longDescription || item.description}
                  </p>
                </CardContent>
              </Card>

              {/* Features / Details */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">
                    {isThemeItem ? 'Theme Features' : 'Event Details'}
                  </h2>
                </CardHeader>
                <CardContent>
                  {isThemeItem ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-foreground">Best For</h3>
                        <p className="text-muted-foreground">
                          {(item as Theme).applications}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Key Features</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
                          {(item as Theme).features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 mt-0.5 text-primary" />
                          <div>
                            <h3 className="font-medium text-foreground">Date & Time</h3>
                            <p className="text-muted-foreground">
                              {(item as Event).date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                          <div>
                            <h3 className="font-medium text-foreground">Location</h3>
                            <p className="text-muted-foreground">
                              {(item as Event).location}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 mt-0.5 text-primary" />
                          <div>
                            <h3 className="font-medium text-foreground">Capacity</h3>
                            <p className="text-muted-foreground">
                              {item.popularity} satisfied clients
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Star className="w-5 h-5 mt-0.5 text-primary" />
                          <div>
                            <h3 className="font-medium text-foreground">Category</h3>
                            <p className="text-muted-foreground">
                              {(item as Event).category}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Additional Details Section */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">
                    {isThemeItem ? 'Additional Details' : 'What\'s Included'}
                  </h2>
                </CardHeader>
                <CardContent>
                  {isThemeItem ? (
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                        <h3 className="font-medium mb-4">Theme Schedule & Requirements</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="bg-white dark:bg-gray-600 p-2 rounded-lg shadow-sm">
                              <Clock className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Setup Duration</h4>
                              <p className="text-sm text-muted-foreground">4-6 hours setup time</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-white dark:bg-gray-600 p-2 rounded-lg shadow-sm">
                              <Users className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Team Size</h4>
                              <p className="text-sm text-muted-foreground">Professional team of 5-8 people</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-white dark:bg-gray-600 p-2 rounded-lg shadow-sm">
                              <MapPin className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Venue Requirements</h4>
                              <p className="text-sm text-muted-foreground">Adequate space for theme setup</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h3 className="font-medium text-foreground">Event Highlights</h3>
                      <ul className="space-y-3">
                        {[
                          "Professional event planning and coordination",
                          "Customized event design and theming",
                          "Premium vendor selection and management",
                          "On-site event management and support",
                          "Post-event follow-up and support",
                        ].map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <ChevronRight className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold">
                      {isThemeItem ? 'Theme Package' : 'Event Price'}
                    </h2>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">
                        {formatPrice(item.price)}
                      </span>
                      {!isThemeItem && (
                        <span className="text-muted-foreground">starting price</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {isThemeItem ? (
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Full setup and teardown</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>All decorations included</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Professional design consultation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Customization options available</span>
                        </li>
                      </ul>
                    ) : (
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Professional event planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Venue selection and booking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Vendor coordination</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span>On-site management</span>
                        </li>
                      </ul>
                    )}
                    
                    <Button size="lg" className="w-full mt-6">
                      {isThemeItem ? 'Book This Theme' : 'Book Now'}
                    </Button>
                    
                    <div className="text-center text-sm text-muted-foreground mt-3">
                      {isThemeItem 
                        ? 'Contact us for customizations and additional services.'
                        : 'Limited spots available. Book now to secure your place.'
                      }
                    </div>
                  </CardContent>
                </Card>
                
                {/* Share Section */}
                <Card>
                  <CardHeader>
                    <h3 className="font-medium">Share this {isThemeItem ? 'theme' : 'event'}</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3 justify-center">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="w-4 h-4 text-blue-600" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="w-4 h-4 text-blue-400" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="w-4 h-4 text-pink-500" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;