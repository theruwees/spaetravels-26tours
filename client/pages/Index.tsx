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
      title: "Sigiriya & Dambulla Cultural Tour",
      image: "/placeholder.svg",
      price: "LKR 15,000",
      rating: 4.8,
      reviews: 234,
      duration: "2 Days",
      category: "Cultural",
    },
    {
      id: 2,
      title: "Mirissa Whale Watching & Beach",
      image: "/placeholder.svg",
      price: "LKR 8,500",
      rating: 4.9,
      reviews: 187,
      duration: "1 Day",
      category: "Beach",
    },
    {
      id: 3,
      title: "Kandy Hill Country Explorer",
      image: "/placeholder.svg",
      price: "LKR 12,000",
      rating: 4.7,
      reviews: 156,
      duration: "3 Days",
      category: "Nature",
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
            <Button size="lg" asChild className="min-w-48">
              <Link to="/tours">Explore Tours</Link>
            </Button>

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

      {/* Quick Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              Find Your Perfect Tour
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search destinations, activities..."
                  className="h-12"
                />
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="lg">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>

                <Button size="lg">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
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
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 relative">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4">
                      {tour.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm">{tour.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        ({tour.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        {tour.duration}
                      </div>
                      <div className="text-lg font-bold text-primary">
                        {tour.price}
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link to={`/tour/${tour.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
              <Button size="lg" asChild>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp: {whatsappNumber}
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${whatsappNumber}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
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
