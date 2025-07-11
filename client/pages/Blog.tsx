import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  Eye,
  Heart,
  Share2,
  Search,
  Tag,
  ArrowRight,
  BookOpen,
  Camera,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AnimatedBackground from "@/components/AnimatedBackground";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "all",
    "Travel Tips",
    "Destinations",
    "Culture",
    "Wildlife",
    "Food",
    "Adventure",
  ];

  const featuredPost = {
    id: 1,
    title: "The Complete Guide to Sri Lankan Tea Country",
    excerpt:
      "Discover the rolling hills of Nuwara Eliya and Ella, where the world's finest Ceylon tea is grown. From plantation visits to scenic train rides...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&h=600&fit=crop",
    author: "Saman Perera",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Destinations",
    views: 2847,
    likes: 156,
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Must-Try Sri Lankan Street Foods",
      excerpt:
        "From kottu roti to hoppers, explore the vibrant street food scene of Sri Lanka...",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
      author: "Nimali Fernando",
      date: "December 12, 2024",
      readTime: "5 min read",
      category: "Food",
      views: 1923,
      likes: 89,
    },
    {
      id: 3,
      title: "Wildlife Photography in Yala National Park",
      excerpt:
        "Tips and techniques for capturing Sri Lanka's incredible wildlife, including the elusive leopard...",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop",
      author: "Rajesh Kumar",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Wildlife",
      views: 1654,
      likes: 134,
    },
    {
      id: 4,
      title: "Budget Travel Guide: Sri Lanka in 7 Days",
      excerpt:
        "How to experience the best of Sri Lanka without breaking the bank. Smart tips for budget-conscious travelers...",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      author: "Priya Jayawardena",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Travel Tips",
      views: 3241,
      likes: 198,
    },
    {
      id: 5,
      title: "The Sacred Sites of Ancient Anuradhapura",
      excerpt:
        "Journey through 2,500 years of Buddhist heritage in Sri Lanka's first capital city...",
      image:
        "https://images.unsplash.com/photo-1571122606740-b25a5fd5c4e3?w=800&h=600&fit=crop",
      author: "Sanduni Perera",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Culture",
      views: 1456,
      likes: 112,
    },
    {
      id: 6,
      title: "Surfing the Perfect Waves in Arugam Bay",
      excerpt:
        "Why Arugam Bay is considered one of the world's top surfing destinations...",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      author: "Kasun Silva",
      date: "December 3, 2024",
      readTime: "4 min read",
      category: "Adventure",
      views: 987,
      likes: 67,
    },
    {
      id: 7,
      title: "Monsoon Season Travel: What You Need to Know",
      excerpt:
        "Navigate Sri Lanka's monsoon seasons like a pro with our comprehensive weather guide...",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
      author: "Chaminda Rodrigo",
      date: "November 30, 2024",
      readTime: "6 min read",
      category: "Travel Tips",
      views: 2156,
      likes: 143,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Travel Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Discover insider tips, hidden gems, and travel inspiration for your
            Sri Lankan adventure. Written by local experts and experienced
            travelers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <BookOpen className="h-4 w-4 mr-2" />
              Travel Guides
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <Camera className="h-4 w-4 mr-2" />
              Photography Tips
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 mr-2" />
              Local Insights
            </div>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Search and Filter */}
      <AnimatedBackground variant="geometric" className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-48">
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
          </div>
        </div>
      </AnimatedBackground>

      {/* Featured Article */}
      <AnimatedBackground variant="waves" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              Featured Article
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Our editor's pick for the most helpful and inspiring travel
              content
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    Featured
                  </Badge>
                </div>

                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge
                    variant="outline"
                    className="w-fit mb-4 text-primary border-primary"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {featuredPost.category}
                  </Badge>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {featuredPost.views.toLocaleString()} views
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {featuredPost.likes} likes
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Blog Posts Grid */}
      <AnimatedBackground variant="dots" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              Showing {filteredPosts.length} articles
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">
                      {post.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <Button
                        variant="outline"
                        className="flex-1 mr-2 group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        Read More
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found matching your criteria. Try adjusting your
                search or filter.
              </p>
            </div>
          )}
        </div>
      </AnimatedBackground>

      {/* Newsletter Subscription */}
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
              Never Miss a Travel Tip!
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Subscribe to our newsletter for the latest travel guides, insider
              tips, and special offers for Sri Lankan adventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white text-gray-900 flex-1"
              />
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>

            <p className="text-blue-100 text-sm mt-4">
              Join 5,000+ travelers who get our weekly insights
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find exactly what you're looking for with our organized content
              categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory(category)}
                  className="w-full h-20 flex flex-col items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <Tag className="h-5 w-5 mb-1" />
                  <span className="text-sm">{category}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
