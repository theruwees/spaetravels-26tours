import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Users,
  Calendar,
  Phone,
  MessageCircle,
  Search,
  Filter,
  ArrowRight,
  Globe,
  Mountain,
  Waves,
  TreePine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Scene3D from "@/components/Scene3D";
import BookingForm from "@/components/BookingForm";

const Index = () => {
  const whatsappNumber = "+94705220449";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

  const tourCategories = [
    { name: "Beach", icon: Waves, color: "bg-ocean-500", tours: 25 },
    { name: "Nature", icon: TreePine, color: "bg-green-500", tours: 18 },
    { name: "Cultural", icon: Globe, color: "bg-purple-500", tours: 15 },
    { name: "Adventure", icon: Mountain, color: "bg-orange-500", tours: 12 },
  ];

  const featuredTours = [
    {
      id: 1,
      title: "Sigiriya Rock Fortress & Ancient Cities",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      description:
        "Explore the ancient rock fortress of Sigiriya and discover Sri Lanka's rich cultural heritage with UNESCO World Heritage sites.",
      rating: 4.9,
      reviews: 324,
      category: "Cultural",
      highlights: [
        "UNESCO World Heritage Site",
        "Ancient Frescoes",
        "Royal Gardens",
      ],
    },
    {
      id: 2,
      title: "Mirissa Blue Whale Watching Adventure",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      description:
        "Experience the magnificent blue whales in their natural habitat off the southern coast of Sri Lanka.",
      rating: 4.8,
      reviews: 287,
      category: "Beach",
      highlights: [
        "Blue Whale Spotting",
        "Dolphin Encounters",
        "Scenic Boat Ride",
      ],
    },
    {
      id: 3,
      title: "Kandy & Ella Hill Country Journey",
      image:
        "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
      description:
        "Journey through Sri Lanka's breathtaking hill country, visiting tea plantations and scenic mountain railways.",
      rating: 4.7,
      reviews: 198,
      category: "Nature",
      highlights: [
        "Temple of the Tooth",
        "Tea Factory Visits",
        "Nine Arch Bridge",
      ],
    },
    {
      id: 4,
      title: "Galle Fort & Southern Coast Exploration",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
      description:
        "Discover the historic Dutch colonial architecture of Galle Fort and pristine southern beaches.",
      rating: 4.6,
      reviews: 156,
      category: "Cultural",
      highlights: [
        "Dutch Colonial Fort",
        "Historic Lighthouse",
        "Stilt Fishermen",
      ],
    },
    {
      id: 5,
      title: "Yala National Park Safari Experience",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
      description:
        "Embark on an exciting safari adventure to spot leopards, elephants, and diverse wildlife in Yala National Park.",
      rating: 4.8,
      reviews: 245,
      category: "Adventure",
      highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching"],
    },
    {
      id: 6,
      title: "Adam's Peak Sacred Mountain Climb",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description:
        "Experience the spiritual journey to the sacred summit of Adam's Peak and witness a breathtaking sunrise.",
      rating: 4.9,
      reviews: 178,
      category: "Adventure",
      highlights: ["Sacred Peak", "Sunrise Views", "Pilgrimage Trail"],
    },
  ];

  const testimonials = [
    {
      name: "Priya Jayawardena",
      location: "Colombo",
      rating: 5,
      comment:
        "Amazing experience! The guides were so knowledgeable about Sri Lankan history and culture. Highly recommend Space Travels!",
      tour: "Cultural Triangle Tour",
    },
    {
      name: "Rohan Silva",
      location: "Kandy",
      rating: 5,
      comment:
        "Perfect family trip! My kids loved the wildlife safari and the beaches. Professional service from start to finish.",
      tour: "Family Adventure Package",
    },
    {
      name: "Sanduni Perera",
      location: "Galle",
      rating: 5,
      comment:
        "Best whale watching experience ever! Saw multiple blue whales and dolphins. The boat crew was excellent.",
      tour: "Mirissa Whale Watching",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Scene */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Scene3D />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Discover the Pearl of the Indian Ocean
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl mx-auto"
          >
            Experience Sri Lanka's breathtaking landscapes, rich culture, and
            unforgettable adventures with our expert-guided tours
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <BookingForm>
              <Button
                size="lg"
                className="min-w-48 bg-white text-primary hover:bg-gray-100"
              >
                Book Your Adventure
              </Button>
            </BookingForm>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="min-w-48 bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Tour Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated tour categories to match your
              interests
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tourCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">
                      {category.tours} Tours
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked experiences that showcase the best of Sri Lanka
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">
                      {tour.category}
                    </Badge>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center text-white">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {tour.rating}
                        </span>
                        <span className="ml-2 text-sm opacity-90">
                          ({tour.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-gray-900">
                      {tour.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {tour.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {tour.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <BookingForm tourTitle={tour.title}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Book This Tour
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </BookingForm>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link to="/tours">
                View All Tours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from travelers who explored Sri Lanka with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.tour}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Space Travels & Tours?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We're Sri Lanka's trusted travel partner with years of experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Local Guides",
                description:
                  "Our certified guides know every hidden gem and story",
              },
              {
                icon: Star,
                title: "Premium Experience",
                description:
                  "Carefully curated tours with attention to every detail",
              },
              {
                icon: Phone,
                title: "24/7 Support",
                description:
                  "Round-the-clock assistance for your peace of mind",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to plan your perfect Sri Lankan getaway. Our
              travel experts are here to help!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingForm>
                <Button size="lg" className="min-w-48">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book via WhatsApp
                </Button>
              </BookingForm>

              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${whatsappNumber}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call: {whatsappNumber}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
