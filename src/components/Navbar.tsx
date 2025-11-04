import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const eventLinks = [
    { path: "/events/wedding", label: "Wedding" },
    { path: "/events/corporate", label: "Corporate" },
    { path: "/events/entertainment", label: "Entertainment" },
    { path: "/events/sports", label: "Sports" },
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
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-elegant ${isActive(link.path)
                    ? "text-[#D6A419]"
                    : "text-foreground hover:text-[#D6A419]"
                  }`}
              >
                {link.label}
              </Link>
            ))}

          {/* Events Dropdown */}
<DropdownMenu>
  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-[#D6A419] transition-colors duration-300 ease-in-out border-none outline-none">
    Events
    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
  </DropdownMenuTrigger>

  <DropdownMenuContent
    className="bg-popover border border-border z-50 mt-2 rounded-xl shadow-lg animate-fade-slide"
    sideOffset={5}
  >
    {eventLinks.map((link) => {
      const active = isActive(link.path);
      return (
        <DropdownMenuItem
          key={link.path}
          asChild
          className={`cursor-pointer px-4 py-2 text-sm rounded-lg transition-all duration-300 ease-in-out hover:text-[#D6A419]
            ${active
              ? "text-[#D6A419] bg-[#D6A419]/10 font-semibold"
              : "text-foreground hover:text-[#D6A419] hover:bg-[#D6A419]/10"
            }`}
        >
          <Link to={link.path}>{link.label}</Link>
        </DropdownMenuItem>
      );
    })}
  </DropdownMenuContent>
</DropdownMenu>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-elegant ${isActive(link.path)
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
                  className={`text-sm font-medium transition-elegant ${isActive(link.path)
                      ? "text-secondary"
                      : "text-foreground hover:text-secondary"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pl-4 space-y-2">
                <p className="text-xs font-semibold text-muted-foreground">Events</p>
                {eventLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm font-medium text-foreground hover:text-secondary transition-elegant"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
