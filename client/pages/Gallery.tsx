import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Heart, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedBackground from "@/components/AnimatedBackground";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Cultural",
    "Nature",
    "Beach",
    "Wildlife",
    "Adventure",
  ];

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      title: "Sigiriya Rock Fortress",
      location: "Central Province",
      category: "Cultural",
      description:
        "Ancient rock fortress with stunning frescoes and royal gardens",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
      title: "Kandy Temple",
      location: "Central Province",
      category: "Cultural",
      description: "Sacred Temple of the Tooth Relic in the heart of Kandy",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      title: "Mirissa Beach",
      location: "Southern Province",
      category: "Beach",
      description: "Perfect for whale watching and pristine beach relaxation",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
      title: "Yala National Park",
      location: "Southern Province",
      category: "Wildlife",
      description: "Home to Sri Lankan leopards and diverse wildlife",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
      title: "Galle Fort",
      location: "Southern Province",
      category: "Cultural",
      description: "Historic Dutch colonial fort by the ocean",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      title: "Adam's Peak",
      location: "Central Province",
      category: "Adventure",
      description: "Sacred mountain with breathtaking sunrise views",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      title: "Tea Plantations",
      location: "Central Province",
      category: "Nature",
      description: "Rolling hills covered in emerald tea gardens",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
      title: "Nine Arch Bridge",
      location: "Central Province",
      category: "Nature",
      description: "Iconic railway bridge surrounded by lush greenery",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
      title: "Stilt Fishermen",
      location: "Southern Province",
      category: "Cultural",
      description: "Traditional fishing method unique to Sri Lanka",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
      title: "Elephant Safari",
      location: "Multiple Locations",
      category: "Wildlife",
      description: "Gentle giants in their natural habitat",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      title: "Bentota Beach",
      location: "Western Province",
      category: "Beach",
      description: "Golden sands perfect for water sports and relaxation",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      title: "Horton Plains",
      location: "Central Province",
      category: "Nature",
      description: "Misty plateau with World's End cliff viewpoint",
    },
  ];

  const filteredImages = images.filter(
    (image) =>
      selectedCategory === "all" || image.category === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedBackground
        variant="waves"
        className="bg-gradient-to-r from-primary to-blue-600 text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Explore the stunning beauty of Sri Lanka through our curated
            collection of photographs from our tours and destinations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center space-x-2"
          >
            <Camera className="h-5 w-5" />
            <span>Over 500+ High-Quality Photos</span>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === "all" ? "All Photos" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <AnimatedBackground variant="dots" className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              Showing {filteredImages.length} photos
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="aspect-square">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold mb-1">{image.title}</h3>
                      <div className="flex items-center text-sm opacity-90">
                        <MapPin className="h-3 w-3 mr-1" />
                        {image.location}
                      </div>
                    </div>
                  </div>

                  <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800">
                    {image.category}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedBackground>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="aspect-[4/3] max-h-[70vh]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h2>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedImage.location}
                    </div>
                    <Badge variant="outline">{selectedImage.category}</Badge>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <AnimatedBackground
        variant="particles"
        className="py-16 bg-primary text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Want to Capture These Moments Yourself?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join us on one of our photography tours and create your own
              stunning memories of Sri Lanka.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Book a Photography Tour
            </Button>
          </motion.div>
        </div>
      </AnimatedBackground>
    </div>
  );
};

export default Gallery;
