import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">VEEVIBE</h3>
            <p className="text-sm text-primary-foreground/80">
              Creating unforgettable moments with elegance and precision since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-secondary transition-elegant">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-secondary transition-elegant">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-secondary transition-elegant">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm hover:text-secondary transition-elegant">
                  Book Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/events/wedding" className="text-sm hover:text-secondary transition-elegant">
                  Wedding Events
                </Link>
              </li>
              <li>
                <Link to="/events/corporate" className="text-sm hover:text-secondary transition-elegant">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/events/entertainment" className="text-sm hover:text-secondary transition-elegant">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to="/events/sports" className="text-sm hover:text-secondary transition-elegant">
                  Sports Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  123 Luxury Lane, Premium District, City 12345
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="+91 9030003025" className="text-sm hover:text-secondary transition-elegant">
                  +91 9030003025
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@prestigeevents.com" className="text-sm hover:text-secondary transition-elegant">
                  info@prestigeevents.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-secondary transition-elegant">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-elegant">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-elegant">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-elegant">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Veevibe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
