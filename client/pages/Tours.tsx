import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Users, Calendar, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BookingForm from "@/components/BookingForm";

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const tours = [
    {
      id: 1,
      title: "Sigiriya Rock Fortress & Dambulla Cave Temple",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      description:
        "Explore ancient Sri Lankan heritage with the magnificent Sigiriya Rock and Buddhist cave temples.",
      category: "Cultural",
      location: "Central Province",
      rating: 4.9,
      reviews: 324,
      highlights: [
        "UNESCO World Heritage",
        "Ancient Frescoes",
        "Royal Gardens",
        "Cave Temples",
      ],
    },
    {
      id: 2,
      title: "Kandy Temple of the Tooth & Tea Country",
      image:
        "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
      description:
        "Visit the sacred Temple of the Tooth Relic and journey through scenic tea plantations.",
      category: "Cultural",
      location: "Central Province",
      rating: 4.8,
      reviews: 287,
      highlights: [
        "Sacred Temple",
        "Tea Factory Visits",
        "Kandy Lake",
        "Traditional Performances",
      ],
    },
    {
      id: 3,
      title: "Mirissa Blue Whale Watching Adventure",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      description:
        "Experience the world's largest mammals in their natural habitat off Sri Lanka's southern coast.",
      category: "Beach",
      location: "Southern Province",
      rating: 4.7,
      reviews: 198,
      highlights: [
        "Blue Whale Spotting",
        "Dolphin Encounters",
        "Scenic Boat Ride",
        "Marine Conservation",
      ],
    },
    {
      id: 4,
      title: "Yala National Park Safari Experience",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
      description:
        "Embark on an exciting safari to spot leopards, elephants, and diverse wildlife.",
      category: "Nature",
      location: "Southern Province",
      rating: 4.8,
      reviews: 245,
      highlights: [
        "Leopard Spotting",
        "Elephant Herds",
        "Bird Watching",
        "Scenic Landscapes",
      ],
    },
    {
      id: 5,
      title: "Galle Fort & Unawatuna Beach",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
      description:
        "Discover Dutch colonial architecture and relax on pristine golden beaches.",
      category: "Beach",
      location: "Southern Province",
      rating: 4.6,
      reviews: 156,
      highlights: [
        "Dutch Colonial Fort",
        "Historic Lighthouse",
        "Golden Beaches",
        "Stilt Fishermen",
      ],
    },
    {
      id: 6,
      title: "Adam's Peak Sacred Sunrise Trek",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description:
        "Spiritual pilgrimage to the sacred peak with breathtaking sunrise views.",
      category: "Adventure",
      location: "Central Province",
      rating: 4.9,
      reviews: 178,
      highlights: [
        "Sacred Footprint",
        "Sunrise Views",
        "Pilgrimage Trail",
        "Mountain Scenery",
      ],
    },
    {
      id: 7,
      title: "Ella Nine Arch Bridge & Little Adam's Peak",
      image:
        "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
      description:
        "Scenic hill country adventure with iconic railway bridges and mountain peaks.",
      category: "Nature",
      location: "Central Province",
      rating: 4.7,
      reviews: 212,
      highlights: [
        "Nine Arch Bridge",
        "Train Rides",
        "Tea Plantations",
        "Mountain Views",
      ],
    },
    {
      id: 8,
      title: "Anuradhapura Ancient City Tour",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      description:
        "Explore the ancient capital and first kingdom of Sri Lanka with sacred Buddhist sites.",
      category: "Cultural",
      location: "North Central Province",
      rating: 4.5,
      reviews: 134,
      highlights: [
        "Ancient Stupas",
        "Sacred Bodhi Tree",
        "Royal Palaces",
        "Archaeological Sites",
      ],
    },
    {
      id: 9,
      title: "Bentota River Safari & Beach Resort",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      description:
        "River adventure through mangroves followed by relaxation on golden beaches.",
      category: "Beach",
      location: "Western Province",
      rating: 4.4,
      reviews: 189,
      highlights: [
        "Mangrove Safari",
        "Water Sports",
        "Beach Resort",
        "Turtle Hatchery",
      ],
    },
  ];

  const categories = ["all", "Cultural", "Beach", "Nature", "Adventure"];

  const filteredTours = tours.filter((tour) => {
    const matchesCategory =
      selectedCategory === "all" || tour.category === selectedCategory;
    const matchesSearch =
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Explore Sri Lanka Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Discover the beauty of Sri Lanka with our carefully curated tour
            packages. From ancient temples to pristine beaches, wildlife safaris
            to mountain adventures.
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search tours, destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredTours.length} of {tours.length} tours
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">
                      {tour.category}
                    </Badge>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center text-white text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {tour.location}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2">
                      {tour.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {tour.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {tour.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        ({tour.reviews} reviews)
                      </span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
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
                      <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                        Book This Tour
                      </Button>
                    </BookingForm>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No tours found matching your criteria. Try adjusting your
                filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Let us create a custom tour package just for you. Contact our travel
            experts today!
          </p>
          <BookingForm>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Request Custom Tour
            </Button>
          </BookingForm>
        </div>
      </section>
    </div>
  );
};

export default Tours;
