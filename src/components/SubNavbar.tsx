import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SubNavbar = () => {
  const location = useLocation();

  const eventLinks = [
    { path: "/events/wedding", label: "Weddings" },
    { path: "/events/corporate", label: "Corporate" },
    { path: "/events/entertainment", label: "Entertainment" },
    { path: "/events/sports", label: "Sports" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-full bg-gradient-to-r from-white/95 via-[#FFF9E5]/70 to-white/95 backdrop-blur-md border-b border-[#E5D4A1]/40 sticky top-16 z-40 shadow-sm">
      <div
        className="
          container mx-auto flex flex-wrap justify-center items-center
          gap-4 md:gap-12 py-2 md:py-4 px-3
        "
      >
        {eventLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="relative flex flex-col items-center"
          >
            <span
              className={`text-sm md:text-lg font-semibold transition-all duration-300 ${
                isActive(link.path)
                  ? "text-[#B8860B]"
                  : "text-gray-700 hover:text-[#D6A419]"
              }`}
            >
              {link.label}
            </span>

            {isActive(link.path) && (
              <motion.div
                key={link.path}
                className="h-[2.5px] w-[50%] md:w-[70%] mt-[3px] bg-gradient-to-r from-[#B8860B] to-[#FFD700] rounded-full"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.25 }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
