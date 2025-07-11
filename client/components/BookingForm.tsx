import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, MessageCircle, Users, Phone, Mail } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  tourType: z.string().min(1, "Please select a tour type"),
  travelers: z.string().min(1, "Number of travelers is required"),
  preferredDate: z.date({
    required_error: "Please select a preferred date",
  }),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  tourTitle?: string;
  children: React.ReactNode;
}

const BookingForm = ({ tourTitle, children }: BookingFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const selectedDate = watch("preferredDate");

  const tourTypes = [
    "Cultural Triangle Tour",
    "Beach & Whale Watching",
    "Hill Country Adventure",
    "Wildlife Safari",
    "Colombo City Tour",
    "South Coast Explorer",
    "Custom Tour Package",
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    // Format the booking details for WhatsApp
    const whatsappMessage = `
🌟 NEW TOUR BOOKING REQUEST 🌟

👤 Customer Details:
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}

🗓️ Tour Information:
${tourTitle ? `Interested Tour: ${tourTitle}` : ""}
Tour Type: ${data.tourType}
Travelers: ${data.travelers} people
Preferred Date: ${format(data.preferredDate, "MMMM dd, yyyy")}

${data.specialRequests ? `📝 Special Requests:\n${data.specialRequests}` : ""}

Please confirm availability and send quotation.

Thank you!
Space Travels & Tours
    `.trim();

    const whatsappNumber = "+94705220449";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappLink, "_blank");

    // Reset form and close modal
    setTimeout(() => {
      reset();
      setIsOpen(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Book Your Sri Lanka Adventure
          </DialogTitle>
          {tourTitle && (
            <p className="text-center text-primary font-medium">{tourTitle}</p>
          )}
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                {...register("fullName")}
                placeholder="Your full name"
                className={cn(errors.fullName && "border-red-500")}
              />
              {errors.fullName && (
                <p className="text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+94 XX XXX XXXX"
                className={cn(errors.phone && "border-red-500")}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your.email@example.com"
              className={cn(errors.email && "border-red-500")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tour Type *</Label>
              <Select onValueChange={(value) => setValue("tourType", value)}>
                <SelectTrigger
                  className={cn(errors.tourType && "border-red-500")}
                >
                  <SelectValue placeholder="Select tour type" />
                </SelectTrigger>
                <SelectContent>
                  {tourTypes.map((tour) => (
                    <SelectItem key={tour} value={tour}>
                      {tour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.tourType && (
                <p className="text-sm text-red-500">
                  {errors.tourType.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="travelers">Number of Travelers *</Label>
              <Select onValueChange={(value) => setValue("travelers", value)}>
                <SelectTrigger
                  className={cn(errors.travelers && "border-red-500")}
                >
                  <SelectValue placeholder="Select travelers" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Person" : "People"}
                    </SelectItem>
                  ))}
                  <SelectItem value="10+">10+ People</SelectItem>
                </SelectContent>
              </Select>
              {errors.travelers && (
                <p className="text-sm text-red-500">
                  {errors.travelers.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Preferred Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground",
                    errors.preferredDate && "border-red-500",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setValue("preferredDate", date)}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.preferredDate && (
              <p className="text-sm text-red-500">
                {errors.preferredDate.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Textarea
              id="specialRequests"
              {...register("specialRequests")}
              placeholder="Any special requirements, dietary restrictions, or preferences..."
              rows={3}
            />
          </div>

          <div className="border-t pt-6">
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending to WhatsApp..."
              ) : (
                <>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send Booking Request via WhatsApp
                </>
              )}
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">
              This will open WhatsApp with your booking details pre-filled
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
