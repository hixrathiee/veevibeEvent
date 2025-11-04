import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import heroImage from "@/assets/hero-main.jpg";
import weddingImage from "@/assets/wedding-hero.jpg";
import corporateImage from "@/assets/corporate-hero.jpg";
import entertainmentImage from "@/assets/entertainment-hero.jpg";
import sportsImage from "@/assets/sports-hero.jpg";
import teamImage from "@/assets/team.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    { src: heroImage, title: "Luxury Ballroom Event", category: "Wedding" },
    { src: weddingImage, title: "Elegant Wedding Reception", category: "Wedding" },
    { src: corporateImage, title: "Corporate Conference", category: "Corporate" },
    { src: entertainmentImage, title: "Live Entertainment Show", category: "Entertainment" },
    { src: sportsImage, title: "Sports Championship", category: "Sports" },
    { src: teamImage, title: "Our Professional Team", category: "About Us" },
  ];

  const categories = ["All", "Wedding", "Corporate", "Entertainment", "Sports"];

  // Filtered Images
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

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
      <section className="py-10 px-4">
        <div className="container mx-auto">
          {filteredImages.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg">
              No events found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3] shadow-elegant hover:shadow-luxury transition-elegant"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-elegant flex flex-col justify-end p-6">
                    <p className="text-xs text-secondary font-sans uppercase tracking-wider mb-1">
                      {image.category}
                    </p>
                    <h3 className="text-xl font-bold text-primary-foreground">
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
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl p-0 bg-transparent border-0">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-elegant"
            >
              <X className="h-6 w-6 text-primary-foreground" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Full size preview"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-luxury">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 font-sans max-w-2xl mx-auto">
            Let us bring your vision to life with the same elegance and excellence
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
