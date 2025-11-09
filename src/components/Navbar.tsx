import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/trending", label: "Trending" },
    { path: "/gallery", label: "Gallery" },
    { path: "/events", label: "Events" }, 
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold text-primary">VEEVIBE</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 cursor-pointer">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-elegant ${
                  isActive(link.path) ||
                  (link.path === "/events" && location.pathname.startsWith("/events"))
                    ? "text-[#D6A419]"
                    : "text-foreground hover:text-[#D6A419]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Button variant="luxury" size="default" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-all duration-300 ${
                    isActive(link.path) ||
                    (link.path === "/events" && location.pathname.startsWith("/events"))
                      ? "text-[#D6A419]"
                      : "text-foreground hover:text-[#D6A419]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Book Now Button */}
              <Button
                variant="luxury"
                size="default"
                asChild
                className="mt-4 self-start"
              >
                <Link to="/booking" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
