import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Destinations", path: "/destinations" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "+94705220449";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary to-blue-600 p-2 lg:p-3 rounded-xl shadow-md">
              <Plane className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                Space Travels & Tours
              </span>
              <span className="text-xs md:text-sm text-primary font-medium hidden sm:block">
                Explore Beautiful Sri Lanka
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-base font-semibold transition-all duration-300 hover:text-primary py-2 px-3 rounded-lg hover:bg-primary/5 ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-gray-700"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-3 right-3 h-1 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={`tel:${whatsappNumber}`}
              className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              title="Call"
            >
              <Phone className="h-5 w-5" />
            </a>
            <BookingForm>
              <Button size="lg" className="px-6">
                Book Now
              </Button>
            </BookingForm>
          </div>

          {/* Mobile & Tablet menu button */}
          <div className="lg:hidden">
            <div className="flex items-center space-x-3">
              {/* Quick contact icons for tablet */}
              <div className="hidden md:flex items-center space-x-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${whatsappNumber}`}
                  className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  title="Call"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 flex space-x-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${whatsappNumber}`}
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call</span>
                </a>
              </div>
              <BookingForm>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Book Now
                </Button>
              </BookingForm>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
