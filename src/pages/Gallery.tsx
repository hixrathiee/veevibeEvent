import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";
import GalleryImage1 from "../assets/gallary/gallary_image_1.jpg";
import GalleryImage2 from "../assets/gallary/gallary_image_2.jpg";
import GalleryImage3 from "../assets/gallary/gallary_image_3.jpg";
import GalleryImage4 from "../assets/gallary/gallary_image_4.jpg";
import SportsImage1 from "../assets/gallary/sports_images_1.png";
import EventsImage1 from "../assets/gallary/events_image_1.jpg";
import EventsImage2 from "../assets/gallary/events_image_2.jpg";
import EventsImage3 from "../assets/gallary/events_image_3.png";
import EventsImage4 from "../assets/gallary/events_image_4.jpg";
import SportsImage2 from "../assets/gallary/sports_images_2.png";
import SportsImage3 from "../assets/gallary/sports_images_3.jpg";
import SportsImage4 from "../assets/gallary/sports_images_4.jpg";
import CorpImage1 from "../assets/gallary/corp_image_1.jpg";
import CorpImage2 from "../assets/gallary/corp_image_2.jpg";
import CorpImage3 from "../assets/gallary/corp_image_3.jpg";
import CorpImage4 from "../assets/gallary/corp_image_4.jpg";

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
  const [images, setImages] = useState<ImageData[]>([]);

  // Initial image data
  //   const initialImages: ImageData[] = [
  //     // Wedding Events
  //     {
  //       src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //       title: "Grand Wedding Ceremony",
  //       category: "Wedding",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1513151233557-df62cb53cdc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //       title: "Luxury Wedding Reception",
  //       category: "Wedding",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //       title: "Outdoor Wedding Setup",
  //       category: "Wedding",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //       title: "Bridal Entry Setup",
  //       category: "Wedding",
  //     },

  //     // Corporate Events
  //     {
  //       src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Annual Corporate Conference",
  //       category: "Corporate",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Corporate Team Building",
  //       category: "Corporate",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Product Launch Event",
  //       category: "Corporate",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Business Seminar",
  //       category: "Corporate",
  //     },

  //     // Entertainment Shows
  //     {
  //       src: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Live Concert Night",
  //       category: "Entertainment",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "DJ Night Extravaganza",
  //       category: "Entertainment",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Cultural Dance Performance",
  //       category: "Entertainment",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //       title: "Celebrity Performance",
  //       category: "Entertainment",
  //     },

  //     // Sports Events
  //     {
  //       src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Championship Finals",
  //       category: "Sports",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1579952363872-3f1d9b7d1f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Marathon Event",
  //       category: "Sports",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Award Ceremony",
  //       category: "Sports",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1517649763962-0c2a416d50da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Sports Day Event",
  //       category: "Sports",
  //     },

  //     // Special Events
  //     {
  //       src: "https://images.unsplash.com/photo-1511578310942-9f2d77db47ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Charity Gala Night",
  //       category: "Special",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1445208390239-c9c12762858c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Fashion Show",
  //       category: "Special",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Award Night",
  //       category: "Special",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //       title: "Exhibition Launch",
  //       category: "Special",
  //     },
  //   ];

  const initialImages: ImageData[] = [
    // Wedding Events
    {
      src: GalleryImage1,
      title: "Grand Wedding Ceremony",
      category: "Wedding",
      loaded: false,
    },
    {
      src: GalleryImage3,
      title: "Luxury Wedding Reception",
      category: "Wedding",
      loaded: false,
    },
    {
      src: GalleryImage4,
      title: "Outdoor Pre-wedding Setup",
      category: "Wedding",
    },
    {
      src: GalleryImage2,
      title: "Bridal Entry Setup",
      category: "Wedding",
    },

    // Corporate Events
    {
      src: CorpImage1,
      title: "Annual Corporate Conference",
      category: "Corporate",
    },
    {
      src: CorpImage3,
      title: "Corporate Team Building",
      category: "Corporate",
    },
    {
      src: CorpImage2,
      title: "Product Launch Event",
      category: "Corporate",
    },
    {
      src: CorpImage4,
      title: "Business Seminar",
      category: "Corporate",
    },

    // Entertainment Shows
    {
      src: EventsImage2,
      title: "Live Concert Night",
      category: "Entertainment",
    },
    {
      src: EventsImage3,
      title: "DJ Night Extravaganza",
      category: "Entertainment",
    },
    {
      src: EventsImage4,
      title: "Cultural Dance Performance",
      category: "Entertainment",
    },
    {
      src: EventsImage1,
      title: "Celebrity Performance",
      category: "Entertainment",
    },

    // Sports Events
    {
      src: SportsImage2,
      title: "Championship Finals",
      category: "Sports",
    },
    {
      src: SportsImage1,
      title: "Marathon Event",
      category: "Sports",
    },
    {
      src: SportsImage4,
      title: "Award Ceremony",
      category: "Sports",
    },
    {
      src: SportsImage3,
      title: "Sports Day Event",
      category: "Sports",
    },
    // Special Events
    // {
    //   src: "https://images.unsplash.com/photo-1511578310942-9f2d77db47ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    //   title: "Charity Gala Night",
    //   category: "Special",
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1445208390239-c9c12762858c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    //   title: "Fashion Show",
    //   category: "Special",
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    //   title: "Award Night",
    //   category: "Special",
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    //   title: "Exhibition Launch",
    //   category: "Special",
    // },
  ];

  // Initialize images on component mount
  useEffect(() => {
    const initializedImages = initialImages.map((img) => ({
      ...img,
      loaded: false,
      aspectRatio: 4 / 3, // Default aspect ratio
    }));
    setImages(initializedImages);
  }, []);

  // Handle image load
  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement>,
    index: number
  ) => {
    const img = e.target as HTMLImageElement;
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    setImages((prev) => {
      const newImages = [...prev];
      if (newImages[index]) {
        newImages[index] = {
          ...newImages[index],
          loaded: true,
          aspectRatio: Math.min(Math.max(0.5, aspectRatio), 2), // Constrain between 0.5 and 2
        };
      }
      return newImages;
    });
  };

  // Handle image error
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>,
    index: number
  ) => {
    const img = e.target as HTMLImageElement;
    const fallbackText = images[index]?.title
      ? encodeURIComponent(images[index].title.substring(0, 30))
      : "Image";
    const fallbackSrc = `https://placehold.co/800x600/1a1a1a/ffffff?text=${fallbackText}`;

    // Only update if the source is different to prevent infinite loops
    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc;

      // Update the images state with the fallback source
      setImages((prev) => {
        const newImages = [...prev];
        if (newImages[index]) {
          newImages[index] = {
            ...newImages[index],
            src: fallbackSrc,
            loaded: true,
            aspectRatio: 4 / 3,
          };
        }
        return newImages;
      });
    }
  };

  const categories = [
    "All",
    "Wedding",
    "Corporate",
    "Entertainment",
    "Sports",
    // "Special",
  ];

  // Filtered Images - Reset loading state when category changes
  const filteredImages = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? images
        : images.filter((img) => img.category === activeCategory);

    // Reset loaded state for filtered images to ensure they reload properly
    return filtered.map((img) => ({ ...img }));
  }, [images, activeCategory]);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      // Map URL parameters to actual category names
      const categoryMap: { [key: string]: string } = {
        wedding: "Wedding",
        corporate: "Corporate",
        sports: "Sports",
        entertainment: "Entertainment",
        // special: "Special",
      };

      const matchedCategory = categoryMap[categoryParam.toLowerCase()] || "All";
      setActiveCategory(matchedCategory);
    } else {
      setActiveCategory("All");
    }
  }, [location.search]);

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
      <section className="py-10 px-4 max-w-7xl mx-auto bg-background">
        <div className="container mx-auto">
          {filteredImages.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg">
              No events found in this category.
            </p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filteredImages.map((image, index) => (
                <div
                  key={`${image.category}-${image.title}-${index}`}
                  className="group relative break-inside-avoid overflow-hidden rounded-lg cursor-pointer shadow-elegant hover:shadow-luxury transition-elegant mb-4"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div
                    className="w-full overflow-hidden relative bg-gray-100 dark:bg-gray-800"
                    style={{
                      aspectRatio: image.aspectRatio || "4/3",
                    }}
                  >
                    {!image.loaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse flex flex-col items-center">
                          <div className="h-4 w-4 rounded-full bg-gray-400 mb-2"></div>
                          <span className="text-xs text-gray-500">
                            Loading...
                          </span>
                        </div>
                      </div>
                    )}
                    <img
                      src={image.src}
                      alt={image.title}
                      className={`w-full h-full transition-all duration-300 ease-in-out group-hover:scale-105 ${
                        image.loaded ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                      onLoad={(e) =>
                        handleImageLoad(
                          e,
                          images.findIndex(
                            (img) =>
                              img.src === image.src && img.title === image.title
                          )
                        )
                      }
                      onError={(e) =>
                        handleImageError(
                          e,
                          images.findIndex(
                            (img) =>
                              img.src === image.src && img.title === image.title
                          )
                        )
                      }
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
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
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
                    e.currentTarget.src =
                      "https://placehold.co/1200x800/1a1a1a/ffffff?text=Image+Not+Available";
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
