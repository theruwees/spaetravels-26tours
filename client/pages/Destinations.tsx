import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Camera,
  Clock,
  Users,
  Mountain,
  Waves,
  TreePine,
  Globe,
  Navigation,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import AnimatedBackground from "@/components/AnimatedBackground";

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const regions = [
    "all",
    "Central",
    "Southern",
    "Western",
    "Northern",
    "Eastern",
  ];

  const destinations = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      region: "Central",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      description:
        "Ancient rock fortress rising 200 meters above the surrounding plains, featuring magnificent frescoes and royal gardens.",
      highlights: [
        "UNESCO World Heritage",
        "Ancient Frescoes",
        "Royal Palace Ruins",
        "Mirror Wall",
      ],
      category: "Cultural",
      rating: 4.9,
      tours: 12,
      icon: Mountain,
    },
    {
      id: 2,
      name: "Kandy",
      region: "Central",
      image:
        "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
      description:
        "The cultural capital of Sri Lanka, home to the sacred Temple of the Tooth Relic and surrounded by lush hills.",
      highlights: [
        "Temple of the Tooth",
        "Kandy Lake",
        "Royal Botanical Gardens",
        "Cultural Performances",
      ],
      category: "Cultural",
      rating: 4.8,
      tours: 15,
      icon: Globe,
    },
    {
      id: 3,
      name: "Mirissa",
      region: "Southern",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      description:
        "Perfect crescent-shaped beach known for blue whale watching and stunning sunset views.",
      highlights: [
        "Blue Whale Watching",
        "Coconut Tree Hill",
        "Secret Beach",
        "Snorkeling",
      ],
      category: "Beach",
      rating: 4.7,
      tours: 8,
      icon: Waves,
    },
    {
      id: 4,
      name: "Ella",
      region: "Central",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      description:
        "Charming hill station with tea plantations, waterfalls, and the famous Nine Arch Bridge.",
      highlights: [
        "Nine Arch Bridge",
        "Little Adam's Peak",
        "Tea Plantations",
        "Ravana Falls",
      ],
      category: "Nature",
      rating: 4.8,
      tours: 10,
      icon: TreePine,
    },
    {
      id: 5,
      name: "Galle",
      region: "Southern",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
      description:
        "Historic port city with well-preserved Dutch colonial architecture and fortifications.",
      highlights: [
        "Dutch Fort",
        "Lighthouse",
        "Colonial Architecture",
        "Art Galleries",
      ],
      category: "Cultural",
      rating: 4.6,
      tours: 9,
      icon: Globe,
    },
    {
      id: 6,
      name: "Yala National Park",
      region: "Southern",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
      description:
        "Premier wildlife destination famous for leopards, elephants, and diverse bird species.",
      highlights: [
        "Leopard Spotting",
        "Elephant Herds",
        "Bird Watching",
        "Scenic Landscapes",
      ],
      category: "Wildlife",
      rating: 4.9,
      tours: 7,
      icon: Mountain,
    },
    {
      id: 7,
      name: "Colombo",
      region: "Western",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
      description:
        "Vibrant capital city blending modern architecture with colonial heritage and bustling markets.",
      highlights: [
        "Pettah Market",
        "Gangaramaya Temple",
        "Galle Face Green",
        "Red Mosque",
      ],
      category: "Urban",
      rating: 4.4,
      tours: 6,
      icon: Globe,
    },
    {
      id: 8,
      name: "Nuwara Eliya",
      region: "Central",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      description:
        "Cool mountain retreat known as 'Little England' with tea estates and colonial architecture.",
      highlights: [
        "Tea Factories",
        "Gregory Lake",
        "Horton Plains",
        "Victoria Park",
      ],
      category: "Nature",
      rating: 4.7,
      tours: 11,
      icon: TreePine,
    },
    {
      id: 9,
      name: "Anuradhapura",
      region: "Northern",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      description:
        "Ancient capital with magnificent stupas, monasteries, and the sacred Bodhi Tree.",
      highlights: [
        "Sacred Bodhi Tree",
        "Ruwanwelisaya Stupa",
        "Abhayagiri Monastery",
        "Jetavanaramaya",
      ],
      category: "Cultural",
      rating: 4.5,
      tours: 5,
      icon: Globe,
    },
  ];

  const filteredDestinations = destinations.filter(
    (dest) => selectedRegion === "all" || dest.region === selectedRegion,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with 3D Animation */}
      <AnimatedBackground
        variant="particles"
        className="bg-gradient-to-r from-primary to-blue-600 text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <Navigation className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Sri Lankan Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            From ancient kingdoms to pristine beaches, mountain retreats to
            wildlife sanctuaries - discover the incredible diversity of Sri
            Lanka's destinations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <Mountain className="h-4 w-4 mr-2" />9 Provinces
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 mr-2" />
              50+ Destinations
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <Camera className="h-4 w-4 mr-2" />
              UNESCO Sites
            </div>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Interactive Map Section */}
      <AnimatedBackground variant="geometric" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Explore by Region</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Sri Lanka's compact size allows you to experience incredible
              diversity in a short time. Filter destinations by region to plan
              your perfect itinerary.
            </p>
          </motion.div>

          {/* Region Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "outline"}
                onClick={() => setSelectedRegion(region)}
                className="capitalize"
              >
                {region === "all" ? "All Regions" : `${region} Province`}
              </Button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: MapPin,
                label: "Destinations",
                value: filteredDestinations.length,
              },
              { icon: Star, label: "Avg Rating", value: "4.7" },
              { icon: Camera, label: "Photo Spots", value: "200+" },
              { icon: Users, label: "Happy Visitors", value: "10K+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Destinations Grid */}
      <AnimatedBackground variant="dots" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              Showing {filteredDestinations.length} destinations
              {selectedRegion !== "all" && ` in ${selectedRegion} Province`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">
                        {destination.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary/20 p-2 rounded-full backdrop-blur-sm">
                        <destination.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">
                          {destination.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {destination.region} Province
                          </div>
                          <div className="flex items-center text-sm">
                            <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                            {destination.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {destination.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">
                        Highlights:
                      </h4>
                      {destination.highlights
                        .slice(0, 3)
                        .map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            {highlight}
                          </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {destination.tours} tours available
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        1-3 days
                      </div>
                    </div>

                    <BookingForm tourTitle={`${destination.name} Tour`}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Explore {destination.name}
                      </Button>
                    </BookingForm>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Travel Tips Section */}
      <AnimatedBackground
        variant="waves"
        className="py-16 bg-primary text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Travel Smart in Sri Lanka
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Essential tips to make the most of your Sri Lankan adventure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Best Time to Visit",
                tip: "November to April for west/south coasts, May to September for east coast",
              },
              {
                icon: Mountain,
                title: "Getting Around",
                tip: "Private driver recommended for comfort, trains scenic for hill country",
              },
              {
                icon: Camera,
                title: "Photography",
                tip: "Golden hour at sunrise/sunset, respect local customs at religious sites",
              },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-blue-100">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Sri Lanka?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let us create a personalized itinerary based on your interests and
              preferred destinations.
            </p>
            <BookingForm>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Plan My Sri Lankan Journey
              </Button>
            </BookingForm>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
