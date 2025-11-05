import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";

interface ImageData {
  src: string;
  title: string;
  category: string;
  loaded?: boolean;
  aspectRatio?: number;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<ImageData[]>([]);
  
  // Initial image data
  const initialImages: ImageData[] = [
    // Wedding Events
    { 
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Grand Wedding Ceremony", 
      category: "Wedding",
      loaded: false
    },
    { 
      src: "https://images.unsplash.com/photo-1513151233557-df62cb53cdc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Luxury Wedding Reception", 
      category: "Wedding",
      loaded: false
    },
    { 
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Outdoor Wedding Setup", 
      category: "Wedding" 
    },
    { 
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Bridal Entry Setup", 
      category: "Wedding" 
    },
    
    // Corporate Events
    { 
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Annual Corporate Conference", 
      category: "Corporate" 
    },
    { 
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Corporate Team Building", 
      category: "Corporate" 
    },
    { 
      src: "https://images.unsplash.com/photo-1431540015161-0bf868a66537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Product Launch Event", 
      category: "Corporate" 
    },
    { 
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Business Seminar", 
      category: "Corporate" 
    },
    
    // Entertainment Shows
    { 
      src: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Live Concert Night", 
      category: "Entertainment" 
    },
    { 
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "DJ Night Extravaganza", 
      category: "Entertainment" 
    },
    { 
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Cultural Dance Performance", 
      category: "Entertainment" 
    },
    { 
      src: "https://images.unsplash.com/photo-1514525252781-5f7d9b5f5a9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Celebrity Performance", 
      category: "Entertainment" 
    },
    
    // Sports Events
    { 
      src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Championship Finals", 
      category: "Sports" 
    },
    { 
      src: "https://images.unsplash.com/photo-1517649763962-0c2a416d50da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Marathon Event", 
      category: "Sports" 
    },
    { 
      src: "https://images.unsplash.com/photo-1508098682722-e99c47a06b43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Award Ceremony", 
      category: "Sports" 
    },
    { 
      src: "https://images.unsplash.com/photo-1517649763962-0c2a416d50da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Sports Day Event", 
      category: "Sports" 
    },
    
    // Special Events
    { 
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Charity Gala Night", 
      category: "Special" 
    },
    { 
      src: "https://images.unsplash.com/photo-1445208390239-c9c12762858c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Fashion Show", 
      category: "Special" 
    },
    { 
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Award Night", 
      category: "Special" 
    },
    { 
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Exhibition Launch", 
      category: "Special" 
    }
  ];

  // Load initial images on component mount
  useEffect(() => {
    setLoading(true);
    
    // Simulate network delay
    const loadImages = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setImages(initialImages);
      setLoading(false);
    };
    
    loadImages();
  }, []);
  
  // Handle image load and get dimensions
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    const img = e.target as HTMLImageElement;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    
    setImages(prev => {
      const newImages = [...prev];
      newImages[index] = { 
        ...newImages[index], 
        loaded: true,
        aspectRatio
      };
      return newImages;
    });
  };

  const categories = ["All", "Wedding", "Corporate", "Entertainment", "Sports", "Special"];

  // Filtered Images
  const filteredImages = useMemo(() => {
    return activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);
  
const location = useLocation();

useEffect(() => {
  if (!images.length) return; // wait until images are loaded

  const params = new URLSearchParams(location.search);
  const categoryParam = params.get("category");
console.log("Effect ran | images:", images.length, "| category param:", categoryParam);
  if (categoryParam) {
    const matchedCategory = categories.find(
      (cat) => cat.toLowerCase() === categoryParam.toLowerCase()
    );
    setActiveCategory(matchedCategory || "All");
  } else {
    setActiveCategory("All");
  }
}, [location.search, images]); // run again when images finish loading


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-luxury">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-white">
            Event Gallery
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto text-white">
            Explore our portfolio of exceptional events and celebrations
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-10 px-4 bg-background">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 
                ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-muted text-foreground hover:bg-primary/10"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="container mx-auto">
          {loading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filteredImages.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg">
              No events found in this category.
            </p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filteredImages.map((image, index) => {
                // Determine the row span based on index to create the masonry effect
                const rowSpan = index % 5 === 0 ? 'sm:row-span-2' : 'sm:row-span-1';
                const colSpan = index % 7 === 0 ? 'sm:col-span-2' : 'sm:col-span-1';
                
                return (
                  <div
                    key={index}
                    className="group relative break-inside-avoid overflow-hidden rounded-lg cursor-pointer shadow-elegant hover:shadow-luxury transition-elegant mb-4"
                    onClick={() => setSelectedImage(image.src)}
                    style={{
                      aspectRatio: image.aspectRatio ? 'auto' : '1',
                      height: image.aspectRatio ? 'auto' : '250px'
                    }}
                  >
                    <div className="w-full h-full overflow-hidden relative">
                      {!image.loaded && (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
                      )}
                      <img
                        src={image.src}
                        alt={image.title}
                        className={`w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 ${
                          image.loaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="lazy"
                        onLoad={(e) => handleImageLoad(e, index)}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/800x600/1a1a1a/ffffff?text=${encodeURIComponent(image.title)}`;
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-xs text-yellow-400 font-sans uppercase tracking-wider mb-1">
                        {image.category}
                      </p>
                      <h3 className="text-sm font-medium text-white">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl p-0 bg-transparent border-0">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-elegant z-10"
            >
              <X className="h-6 w-6 text-primary-foreground" />
            </button>
            <div className="max-h-[80vh] overflow-auto flex items-center justify-center p-4">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Full size preview"
                  className="max-w-full max-h-[75vh] object-contain rounded-lg"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src = 'https://placehold.co/1200x800/1a1a1a/ffffff?text=Image+Not+Available';
                  }}
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default Gallery;
