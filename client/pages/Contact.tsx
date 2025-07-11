import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BookingForm from "@/components/BookingForm";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const whatsappNumber = "+94705220449";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [whatsappNumber, "Available 24/7"],
      action: "Call Now",
      link: `tel:${whatsappNumber}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [whatsappNumber, "Instant messaging"],
      action: "Chat Now",
      link: whatsappLink,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@spacetravels.lk", "hello@spacetravels.lk"],
      action: "Send Email",
      link: "mailto:info@spacetravels.lk",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Colombo, Sri Lanka", "Visit by appointment"],
      action: "Get Directions",
      link: "#",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Public Holidays", hours: "Emergency only" },
  ];

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    // Format the contact message for WhatsApp
    const whatsappMessage = `
📞 NEW CONTACT INQUIRY 📞

👤 Contact Details:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

📝 Message:
${data.message}

Please respond to this inquiry.

Thank you!
Space Travels & Tours
    `.trim();

    const contactWhatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(contactWhatsappLink, "_blank");

    // Reset form
    setTimeout(() => {
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Ready to plan your Sri Lankan adventure? Get in touch with our
            travel experts. We're here to help you create unforgettable
            memories.
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to contact us. We're available through
              multiple channels to assist you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <contact.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {contact.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      {contact.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className={
                            idx === 0
                              ? "font-semibold text-gray-900"
                              : "text-gray-600 text-sm"
                          }
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button asChild className="w-full">
                      <a
                        href={contact.link}
                        target={
                          contact.title === "WhatsApp" ? "_blank" : undefined
                        }
                        rel={
                          contact.title === "WhatsApp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {contact.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          {...register("name", { required: true })}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          placeholder="+94 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...register("message", { required: true })}
                        placeholder="Tell us about your travel plans, questions, or how we can help you..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending via WhatsApp..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message via WhatsApp
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      This will open WhatsApp with your message pre-filled
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Hours & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">Office Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="font-medium text-gray-900">
                          {schedule.day}
                        </span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      📱 WhatsApp is available 24/7 for urgent inquiries!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Booking */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                  <p className="text-gray-600 mb-6">
                    Skip the contact form and book your tour directly with our
                    easy booking system.
                  </p>
                  <BookingForm>
                    <Button size="lg" className="w-full">
                      <User className="mr-2 h-4 w-4" />
                      Book Your Tour Now
                    </Button>
                  </BookingForm>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Find quick answers to common questions about our tours,
                    booking process, and travel tips.
                  </p>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">24/7 Emergency Support</h2>
            <p className="text-blue-100 mb-6">
              Traveling with us? We provide round-the-clock support for all our
              guests during their Sri Lankan adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Emergency WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href={`tel:${whatsappNumber}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency Call
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
