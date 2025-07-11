import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Users,
  Clock,
  Camera,
  Wifi,
  Car,
  Utensils,
  Shield,
  Award,
  CheckCircle,
  Heart,
  Share2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BookingForm from "@/components/BookingForm";
import AnimatedBackground from "@/components/AnimatedBackground";

const TourDetail = () => {
  const { id } = useParams();
  const whatsappNumber = "+94705220449";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

  // Tour data - in a real app this would come from an API
  const tours = {
    "1": {
      id: 1,
      title: "Sigiriya Rock Fortress & Ancient Cities",
      location: "Central Province, Sri Lanka",
      duration: "2 Days, 1 Night",
      maxPeople: "8 people",
      price: "Contact for pricing",
      rating: 4.9,
      reviews: 324,
      category: "Cultural Heritage",
      description:
        "Explore the magnificent Sigiriya Rock Fortress, one of Sri Lanka's most iconic landmarks and a UNESCO World Heritage Site. This comprehensive tour takes you through ancient kingdoms, stunning frescoes, and architectural marvels that showcase Sri Lanka's rich cultural heritage.",
      highlights: [
        "UNESCO World Heritage Site exploration",
        "Ancient Sigiriya Rock Fortress climb",
        "Royal gardens and water features",
        "1,500-year-old frescoes viewing",
        "Dambulla Cave Temple complex",
        "Professional archaeological guide",
        "Traditional Sri Lankan lunch",
        "Photography opportunities",
      ],
      included: [
        "Professional English-speaking guide",
        "Air-conditioned transportation",
        "Entrance fees to all sites",
        "Traditional Sri Lankan lunch",
        "Bottled water throughout the tour",
        "Hotel pickup and drop-off",
        "Photography assistance",
        "First aid kit and safety equipment",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips for guide and driver",
        "Travel insurance",
        "Additional meals not mentioned",
        "Accommodation (can be arranged)",
        "Items of personal nature",
      ],
      itinerary: [
        {
          time: "6:00 AM",
          activity: "Hotel Pickup",
          description: "Pickup from your hotel in Colombo or nearby areas",
        },
        {
          time: "9:30 AM",
          activity: "Arrive at Sigiriya",
          description:
            "Welcome refreshments and briefing about the historical significance",
        },
        {
          time: "10:00 AM",
          activity: "Sigiriya Rock Fortress Climb",
          description:
            "Guided climb to the summit with stops at the frescoes and Mirror Wall",
        },
        {
          time: "12:30 PM",
          activity: "Traditional Sri Lankan Lunch",
          description: "Authentic local cuisine at a nearby restaurant",
        },
        {
          time: "2:00 PM",
          activity: "Dambulla Cave Temple",
          description:
            "Explore the Golden Temple and five cave temples with ancient Buddhist murals",
        },
        {
          time: "4:00 PM",
          activity: "Local Village Visit",
          description:
            "Optional visit to a traditional village to experience local life",
        },
        {
          time: "5:30 PM",
          activity: "Return Journey",
          description: "Departure back to Colombo with scenic route",
        },
        {
          time: "8:30 PM",
          activity: "Hotel Drop-off",
          description: "Arrival back at your hotel",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
      ],
      location_info: {
        meeting_point: "Your hotel lobby (Colombo area)",
        difficulty: "Moderate (climbing required)",
        weather: "Best during dry season (May-September)",
        clothing: "Comfortable walking shoes, hat, sunscreen",
      },
    },
    "2": {
      id: 2,
      title: "Mirissa Blue Whale Watching Adventure",
      location: "Southern Province, Sri Lanka",
      duration: "1 Day",
      maxPeople: "12 people",
      price: "Contact for pricing",
      rating: 4.8,
      reviews: 287,
      category: "Marine Wildlife",
      description:
        "Experience the thrill of encountering the magnificent blue whales in their natural habitat off the coast of Mirissa. This unforgettable marine adventure offers the best whale watching experience in Sri Lanka with professional marine biologists as guides.",
      highlights: [
        "Blue whale spotting (90% success rate)",
        "Dolphin encounters",
        "Professional marine biologist guide",
        "Scenic boat ride along southern coast",
        "Marine conservation education",
        "Mirissa beach relaxation time",
        "Fresh seafood lunch",
        "Photography opportunities",
      ],
      included: [
        "Professional marine biologist guide",
        "Boat transportation with safety equipment",
        "Life jackets and safety briefing",
        "Fresh seafood lunch at Mirissa",
        "Bottled water and light snacks",
        "Hotel pickup and drop-off",
        "Marine wildlife identification guide",
        "Conservation certificate",
      ],
      notIncluded: [
        "Personal expenses",
        "Sea sickness medication",
        "Underwater camera rental",
        "Additional meals not mentioned",
        "Travel insurance",
        "Tips for crew and guide",
      ],
      itinerary: [
        {
          time: "4:30 AM",
          activity: "Hotel Pickup",
          description:
            "Early morning pickup for the best whale watching conditions",
        },
        {
          time: "6:30 AM",
          activity: "Arrive at Mirissa Harbor",
          description: "Safety briefing and meet your marine biologist guide",
        },
        {
          time: "7:00 AM",
          activity: "Boat Departure",
          description: "Head out to sea for the whale watching experience",
        },
        {
          time: "7:30 AM - 11:30 AM",
          activity: "Whale & Dolphin Watching",
          description:
            "Search for blue whales, sperm whales, and various dolphin species",
        },
        {
          time: "12:00 PM",
          activity: "Return to Harbor",
          description: "Return to Mirissa harbor",
        },
        {
          time: "12:30 PM",
          activity: "Fresh Seafood Lunch",
          description: "Enjoy fresh catch of the day at a beachside restaurant",
        },
        {
          time: "2:00 PM",
          activity: "Mirissa Beach Time",
          description: "Relax on the beautiful Mirissa beach",
        },
        {
          time: "4:00 PM",
          activity: "Return Journey",
          description: "Departure back to Colombo",
        },
        {
          time: "7:00 PM",
          activity: "Hotel Drop-off",
          description: "Arrival back at your hotel",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
      ],
      location_info: {
        meeting_point: "Mirissa Harbor",
        difficulty: "Easy (boat-based activity)",
        weather: "Best during November-April",
        clothing: "Light clothing, hat, sunscreen, sea sickness prevention",
      },
    },
    "3": {
      id: 3,
      title: "Kandy & Ella Hill Country Journey",
      location: "Central Province, Sri Lanka",
      duration: "3 Days, 2 Nights",
      maxPeople: "6 people",
      price: "Contact for pricing",
      rating: 4.7,
      reviews: 198,
      category: "Nature & Culture",
      description:
        "Journey through Sri Lanka's breathtaking hill country, visiting ancient temples, scenic tea plantations, and experiencing the world-famous train ride through the mountains. This tour combines cultural heritage with natural beauty in the cool mountain climate.",
      highlights: [
        "Temple of the Tooth Relic in Kandy",
        "Traditional Kandyan cultural show",
        "Scenic train ride to Ella",
        "Tea plantation and factory visits",
        "Nine Arch Bridge photography",
        "Little Adam's Peak hike",
        "Ella Rock climbing opportunity",
        "Mountain village experiences",
      ],
      included: [
        "Professional cultural guide",
        "Air-conditioned transportation",
        "Train tickets (Kandy to Ella)",
        "2 nights accommodation",
        "All meals (breakfast, lunch, dinner)",
        "Temple entrance fees",
        "Tea plantation tour and tasting",
        "Cultural show tickets",
      ],
      notIncluded: [
        "Personal expenses",
        "Travel insurance",
        "Tips for guides and drivers",
        "Items of personal nature",
        "Additional activities not mentioned",
        "Alcoholic beverages",
      ],
      itinerary: [
        {
          time: "Day 1 - 8:00 AM",
          activity: "Departure to Kandy",
          description: "Scenic drive through the mountains to Kandy",
        },
        {
          time: "11:00 AM",
          activity: "Temple of the Tooth",
          description:
            "Visit the sacred temple and learn about Buddhist culture",
        },
        {
          time: "2:00 PM",
          activity: "Kandy City Tour",
          description: "Explore Kandy Lake, markets, and colonial architecture",
        },
        {
          time: "7:00 PM",
          activity: "Cultural Show",
          description: "Traditional Kandyan dancing and music performance",
        },
        {
          time: "Day 2 - 8:00 AM",
          activity: "Train to Ella",
          description: "One of the world's most scenic train journeys",
        },
        {
          time: "1:00 PM",
          activity: "Arrive in Ella",
          description: "Check-in and lunch at mountain resort",
        },
        {
          time: "3:00 PM",
          activity: "Nine Arch Bridge",
          description: "Visit the iconic railway bridge and surrounding area",
        },
        {
          time: "Day 3 - 6:00 AM",
          activity: "Little Adam's Peak",
          description: "Early morning hike for sunrise views",
        },
        {
          time: "10:00 AM",
          activity: "Tea Plantation Tour",
          description: "Learn about tea production and enjoy tastings",
        },
        {
          time: "2:00 PM",
          activity: "Return Journey",
          description: "Departure back to Colombo",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
      ],
      location_info: {
        meeting_point: "Your hotel lobby (Colombo area)",
        difficulty: "Moderate (some hiking involved)",
        weather: "Cool mountain climate year-round",
        clothing: "Warm clothing for evenings, comfortable hiking shoes",
      },
    },
  };

  const tour = tours[id as keyof typeof tours];

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour Not Found</h1>
          <Button asChild>
            <Link to="/tours">Back to Tours</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedBackground
        variant="particles"
        className="relative h-96 bg-gradient-to-r from-primary to-blue-600 text-white"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.images[0]})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <Button
              variant="ghost"
              asChild
              className="text-white hover:bg-white/20 mb-4"
            >
              <Link to="/tours">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tours
              </Link>
            </Button>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {tour.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 text-white/90"
            >
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {tour.location}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                {tour.rating} ({tour.reviews} reviews)
              </div>
              <Badge className="bg-white/20 text-white border-white/30">
                {tour.category}
              </Badge>
            </motion.div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {tour.description}
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* Highlights */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Tour Highlights</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Detailed Itinerary */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Detailed Itinerary
                  </h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 w-20">
                          <Badge variant="outline" className="text-xs">
                            {item.time}
                          </Badge>
                        </div>
                        <div className="flex-1 ml-4">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {item.activity}
                          </h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* What's Included/Not Included */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-700">
                      What's Included
                    </h3>
                    <div className="space-y-2">
                      {tour.included.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-700">
                      Not Included
                    </h3>
                    <div className="space-y-2">
                      {tour.notIncluded.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-red-500 mr-2 mt-0.5">×</span>
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Photo Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {tour.images.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${tour.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {tour.price}
                      </div>
                      <p className="text-gray-600">per person</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="text-sm">Duration</span>
                        </div>
                        <span className="text-sm font-medium">
                          {tour.duration}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="text-sm">Max People</span>
                        </div>
                        <span className="text-sm font-medium">
                          {tour.maxPeople}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="text-sm">Difficulty</span>
                        </div>
                        <span className="text-sm font-medium">
                          {tour.location_info.difficulty}
                        </span>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-3">
                      <BookingForm tourTitle={tour.title}>
                        <Button size="lg" className="w-full">
                          Book This Tour
                        </Button>
                      </BookingForm>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-full"
                        >
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="mr-2 h-3 w-3" />
                            WhatsApp
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-full"
                        >
                          <a href={`tel:${whatsappNumber}`}>
                            <Phone className="mr-2 h-3 w-3" />
                            Call
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tour Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Important Information</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium">Meeting Point:</span>
                        <p className="text-gray-600">
                          {tour.location_info.meeting_point}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">Best Time:</span>
                        <p className="text-gray-600">
                          {tour.location_info.weather}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">What to Bring:</span>
                        <p className="text-gray-600">
                          {tour.location_info.clothing}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Tour Features</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="flex flex-col items-center">
                        <Car className="h-6 w-6 text-primary mb-2" />
                        <span className="text-xs">Transport</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Utensils className="h-6 w-6 text-primary mb-2" />
                        <span className="text-xs">Meals</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Camera className="h-6 w-6 text-primary mb-2" />
                        <span className="text-xs">Photography</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Shield className="h-6 w-6 text-primary mb-2" />
                        <span className="text-xs">Safety</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
