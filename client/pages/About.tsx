import { motion } from "framer-motion";
import {
  Users,
  Award,
  MapPin,
  Clock,
  Heart,
  Shield,
  Star,
  Globe,
  Camera,
  Compass,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Travelers", value: "2,500+" },
    { icon: MapPin, label: "Destinations", value: "50+" },
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Star, label: "Average Rating", value: "4.8" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Sri Lanka",
      description:
        "We are passionate about showcasing the beauty, culture, and warmth of our beautiful island nation.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety and comfort are our top priorities. We ensure all our tours meet the highest safety standards.",
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description:
        "Our local guides have deep knowledge of Sri Lankan history, culture, and hidden gems.",
    },
    {
      icon: Compass,
      title: "Authentic Experiences",
      description:
        "We create authentic, memorable experiences that connect you with the real Sri Lanka.",
    },
  ];

  const team = [
    {
      name: "Saman Perera",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description:
        "8+ years in tourism industry, passionate about Sri Lankan heritage",
    },
    {
      name: "Nimali Fernando",
      role: "Tour Operations Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c6dc1b8a?w=400&h=400&fit=crop&crop=face",
      description: "Expert in wildlife tours and cultural experiences",
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Tour Guide",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Specialized in ancient cities and archaeological sites",
    },
  ];

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
            About Space Travels & Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Your trusted partner for exploring the pearl of the Indian Ocean. We
            specialize in creating unforgettable Sri Lankan experiences for
            local and international travelers.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2016, Space Travels & Tours began with a simple
                mission: to share the incredible beauty and rich cultural
                heritage of Sri Lanka with travelers from around the world.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small family business has grown into one of
                Sri Lanka's most trusted tour operators, known for our
                personalized service, local expertise, and commitment to
                sustainable tourism.
              </p>
              <p className="text-gray-600 mb-8">
                We believe that travel should be more than just sightseeing – it
                should be about creating meaningful connections with places,
                people, and cultures. That's why every tour we design is crafted
                to give you authentic Sri Lankan experiences.
              </p>
              <BookingForm>
                <Button size="lg">Plan Your Sri Lankan Adventure</Button>
              </BookingForm>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&h=400&fit=crop"
                alt="Sri Lankan landscape"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <span className="font-semibold">8+ Years of Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and ensure every traveler
              has an exceptional Sri Lankan experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of travel experts and local guides are
              passionate about creating unforgettable Sri Lankan experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Sri Lanka?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let our experienced team create the perfect Sri Lankan adventure
              for you. Contact us today to start planning your unforgettable
              journey.
            </p>
            <BookingForm>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Planning Your Trip
              </Button>
            </BookingForm>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
