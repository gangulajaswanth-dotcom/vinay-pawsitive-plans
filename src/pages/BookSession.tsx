import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Video, FileText, Star, Calendar } from "lucide-react";

const BookSession = () => {
  const sessionIncludes = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "45-60 Minutes",
      description: "Comprehensive consultation via Zoom or Google Meet"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Pre-Session Intake",
      description: "Detailed form to understand your pet's current situation"
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: "Live Consultation",
      description: "One-on-one discussion about your pet's nutrition needs"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Custom Recommendations",
      description: "Personalized meal plan and nutrition advice"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Follow-up Summary",
      description: "Written summary with action items and recommendations"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Ongoing Support",
      description: "Email support for questions after the session"
    }
  ];

  const consultationProcess = [
    {
      step: "1",
      title: "Book & Pay",
      description: "Secure your slot with instant confirmation"
    },
    {
      step: "2",
      title: "Fill Intake Form",
      description: "Complete pre-session questionnaire about your pet"
    },
    {
      step: "3",
      title: "Join Session",
      description: "Meet online for your personalized consultation"
    },
    {
      step: "4",
      title: "Receive Summary",
      description: "Get written recommendations and action plan"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      pet: "Golden Retriever - Bella",
      text: "The consultation was incredibly thorough. Vinay gave me a complete nutrition overhaul that transformed Bella's health.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      pet: "Persian Cat - Whiskers",
      text: "Worth every rupee! The personalized advice helped resolve Whiskers' digestive issues completely.",
      rating: 5
    }
  ];

  // Placeholder time slots
  const availableSlots = [
    { date: "Tomorrow", time: "10:00 AM", available: true },
    { date: "Tomorrow", time: "2:00 PM", available: true },
    { date: "Tomorrow", time: "4:00 PM", available: false },
    { date: "Day After", time: "9:00 AM", available: true },
    { date: "Day After", time: "11:00 AM", available: true },
    { date: "Day After", time: "3:00 PM", available: true },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  1:1 Expert Consultation
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Book Your Personal Pet Nutrition Session
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Get expert, personalized nutrition guidance for your pet in a comprehensive one-on-one consultation.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">₹899</div>
                  <div className="text-white/80 mb-4">One-time payment • 45-60 minutes</div>
                  <div className="flex items-center justify-center space-x-2 text-white/90 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Includes follow-up summary</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-strong">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Quick Booking</CardTitle>
                <CardDescription>Secure your consultation slot in minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="booking" size="lg" className="w-full">
                  Book Now - ₹899
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Available this week:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {availableSlots.filter(slot => slot.available).slice(0, 3).map((slot, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {slot.date} {slot.time}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What's Included in Your Session</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive consultation designed to address all your pet's nutrition needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessionIncludes.map((item, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple 4-step process to get expert nutrition guidance for your pet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationProcess.map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Slots */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Available Time Slots</h2>
              <p className="text-xl text-muted-foreground">
                Choose a convenient time for your consultation
              </p>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle>Select Your Preferred Time</CardTitle>
                </div>
                <CardDescription>All times are in IST (Indian Standard Time)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availableSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant={slot.available ? "outline" : "ghost"}
                      className={`h-auto p-4 flex flex-col space-y-2 ${
                        slot.available 
                          ? "hover:bg-primary hover:text-primary-foreground" 
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={!slot.available}
                    >
                      <span className="font-semibold">{slot.date}</span>
                      <span className="text-sm">{slot.time}</span>
                      {!slot.available && (
                        <span className="text-xs text-muted-foreground">Booked</span>
                      )}
                    </Button>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="booking" size="lg">
                    Proceed to Payment - ₹899
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Payment processed securely • Instant booking confirmation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our consultation sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-base">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.pet}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee & Policies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-success mx-auto mb-4" />
                <CardTitle className="text-lg">Satisfaction Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Not satisfied? Get a full refund if cancelled 24 hours in advance
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Easy Rescheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reschedule up to 12 hours before your session at no extra cost
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <Video className="h-8 w-8 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Online Convenience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join from anywhere with Zoom or Google Meet - no travel required
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Pet's Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your consultation today and give your pet the nutrition they deserve
          </p>
          <Button variant="hero" size="lg">
            Book Your Session Now - ₹899
          </Button>
          <p className="text-white/80 mt-4 text-sm">
            Secure booking • Instant confirmation • Money-back guarantee
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookSession;