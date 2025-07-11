import { ReactNode } from "react";
import Navigation from "./Navigation";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const whatsappNumber = "+94705220449";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Space Travels & Tours</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner for exploring the beautiful island of Sri
                Lanka. We create unforgettable experiences for local and
                international travelers.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/tours"
                    className="hover:text-white transition-colors"
                  >
                    All Tours
                  </a>
                </li>
                <li>
                  <a
                    href="/destinations"
                    className="hover:text-white transition-colors"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Tour Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tour Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/tours/beach"
                    className="hover:text-white transition-colors"
                  >
                    Beach Tours
                  </a>
                </li>
                <li>
                  <a
                    href="/tours/nature"
                    className="hover:text-white transition-colors"
                  >
                    Nature Tours
                  </a>
                </li>
                <li>
                  <a
                    href="/tours/cultural"
                    className="hover:text-white transition-colors"
                  >
                    Cultural Tours
                  </a>
                </li>
                <li>
                  <a
                    href="/tours/adventure"
                    className="hover:text-white transition-colors"
                  >
                    Adventure Tours
                  </a>
                </li>
                <li>
                  <a
                    href="/tours/luxury"
                    className="hover:text-white transition-colors"
                  >
                    Luxury Tours
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a
                    href={`tel:${whatsappNumber}`}
                    className="hover:text-white transition-colors"
                  >
                    {whatsappNumber}
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a
                    href="mailto:info@spacetravels.lk"
                    className="hover:text-white transition-colors"
                  >
                    info@spacetravels.lk
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Space Travels & Tours. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with ❤️ by{" "}
              <a
                href="https://ruvex.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Ruwees
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </div>
  );
};

export default Layout;
