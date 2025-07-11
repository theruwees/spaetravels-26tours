import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import PlaceholderPage from "@/components/PlaceholderPage";
import Index from "./pages/Index";
import Tours from "./pages/Tours";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Main Pages */}
            <Route path="/about" element={<About />} />
            <Route
              path="/story"
              element={
                <PlaceholderPage
                  title="Our Story"
                  description="Discover the journey of Space Travels & Tours and how we became Sri Lanka's trusted travel partner."
                />
              }
            />

            {/* Tours */}
            <Route path="/tours" element={<Tours />} />
            <Route
              path="/tours/nature"
              element={
                <PlaceholderPage
                  title="Nature Tours"
                  description="Explore Sri Lanka's stunning natural landscapes and wildlife."
                />
              }
            />
            <Route
              path="/tours/cultural"
              element={
                <PlaceholderPage
                  title="Cultural Tours"
                  description="Immerse yourself in Sri Lanka's rich cultural heritage and history."
                />
              }
            />
            <Route
              path="/tours/beach"
              element={
                <PlaceholderPage
                  title="Beach Tours"
                  description="Relax on pristine beaches and enjoy water activities along Sri Lanka's coast."
                />
              }
            />
            <Route
              path="/tours/luxury"
              element={
                <PlaceholderPage
                  title="Luxury Tours"
                  description="Experience premium accommodations and exclusive tour experiences."
                />
              }
            />
            <Route
              path="/tours/budget"
              element={
                <PlaceholderPage
                  title="Budget Tours"
                  description="Affordable tour packages without compromising on quality experiences."
                />
              }
            />
            <Route
              path="/tours/adventure"
              element={
                <PlaceholderPage
                  title="Adventure Tours"
                  description="Thrilling activities for adventure seekers and outdoor enthusiasts."
                />
              }
            />
            <Route
              path="/tour/:id"
              element={
                <PlaceholderPage
                  title="Tour Details"
                  description="Detailed information about this specific tour package."
                />
              }
            />

            {/* Booking */}
            <Route
              path="/book"
              element={
                <PlaceholderPage
                  title="Book a Tour"
                  description="Book your perfect Sri Lankan adventure with our easy booking system."
                />
              }
            />
            <Route
              path="/bookings"
              element={
                <PlaceholderPage
                  title="My Bookings"
                  description="View and manage your tour bookings and reservations."
                />
              }
            />

            {/* Interactive Map */}
            <Route
              path="/map"
              element={
                <PlaceholderPage
                  title="Sri Lanka Interactive Map"
                  description="Explore Sri Lanka's destinations through our interactive map feature."
                />
              }
            />
            <Route path="/destinations" element={<Destinations />} />

            {/* Content Pages */}
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/testimonials"
              element={
                <PlaceholderPage
                  title="Customer Testimonials"
                  description="Read reviews and experiences from our satisfied customers."
                />
              }
            />
            <Route
              path="/offers"
              element={
                <PlaceholderPage
                  title="Offers & Discounts"
                  description="Discover current promotions and special deals on tour packages."
                />
              }
            />
            <Route path="/gallery" element={<Gallery />} />

            {/* Company Info */}
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/agents"
              element={
                <PlaceholderPage
                  title="Our Agents & Guides"
                  description="Meet our experienced local guides and travel agents."
                />
              }
            />
            <Route
              path="/fleet"
              element={
                <PlaceholderPage
                  title="Our Fleet"
                  description="Learn about our modern vehicles and transportation options."
                />
              }
            />
            <Route
              path="/events"
              element={
                <PlaceholderPage
                  title="Events"
                  description="Discover special events and seasonal celebrations in Sri Lanka."
                />
              }
            />
            <Route
              path="/careers"
              element={
                <PlaceholderPage
                  title="Careers"
                  description="Join our team and build a career in Sri Lanka's tourism industry."
                />
              }
            />

            {/* Legal Pages */}
            <Route
              path="/faq"
              element={
                <PlaceholderPage
                  title="Frequently Asked Questions"
                  description="Find answers to commonly asked questions about our tours and services."
                />
              }
            />
            <Route
              path="/terms"
              element={
                <PlaceholderPage
                  title="Terms & Conditions"
                  description="Read our terms and conditions for booking and tour services."
                />
              }
            />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
