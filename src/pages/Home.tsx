import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Heart, Star, Clock, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-pet-nutrition.jpg";

const Home = () => {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Personalized Plans",
      description: "Custom meal plans tailored to your pet's specific needs, age, breed, and health conditions."
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Evidence-Based Guidance",
      description: "Science-backed nutrition advice from certified pet nutrition expert with years of experience."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Ongoing Support",
      description: "Continuous support and plan adjustments to ensure your pet's optimal health journey."
    }
  ];

  const products = [
    {
      id: 1,
      name: "Complete Nutrition Plan",
      description: "Comprehensive meal planning with portion guides, ingredient lists, and feeding schedules.",
      price: "₹999",
      features: ["Custom meal plans", "Portion guidelines", "Shopping lists", "Email support"]
    },
    {
      id: 2,
      name: "Quick Start Diet Sheet",
      description: "Essential nutrition guide with easy-to-follow meal recommendations for immediate start.",
      price: "₹499",
      features: ["Basic meal plans", "Feeding schedule", "Nutrition tips", "Quick reference guide"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      pet: "Golden Retriever - Max",
      text: "Vinay's nutrition plan transformed Max's health completely. His energy levels are amazing now!",
      rating: 5
    },
    {
      name: "Rohit Patel",
      pet: "Persian Cat - Fluffy",
      text: "The personalized diet plan was exactly what Fluffy needed. Highly recommend Vinay's expertise!",
      rating: 5
    },
    {
      name: "Anita Gupta",
      pet: "Labrador - Bruno",
      text: "Professional guidance with genuine care. Bruno's digestion issues are completely resolved.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Who is this service for?",
      answer: "This service is for pet parents who want to provide optimal nutrition for their dogs and cats. Whether you have a puppy, adult, or senior pet, or if your pet has specific health concerns, our plans can help."
    },
    {
      question: "How do the meal plans work?",
      answer: "After purchase, you'll receive a detailed Google Sheet with customized meal plans, portion sizes, ingredient lists, and feeding schedules based on your pet's specific needs and preferences."
    },
    {
      question: "What's included in the 1:1 session?",
      answer: "The 45-60 minute online consultation includes a thorough discussion of your pet's health, dietary preferences, current issues, custom plan recommendations, and a Q&A session. You'll also receive a follow-up summary."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with your purchase. For sessions, refunds are available if cancelled 24 hours in advance."
    },
    {
      question: "Can I reschedule my session?",
      answer: "Absolutely! You can reschedule your session up to 12 hours before the scheduled time without any additional charges."
    },
    {
      question: "How do I contact you for support?",
      answer: "You can reach out via Instagram @pet.nutritioncoach, email, or WhatsApp for any questions or support. Response time is typically within 24 hours."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Personalized Pet Nutrition Coaching by{" "}
                  <span className="text-accent">Vinay Pendyala</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Expert meal plans and 1:1 guidance to keep your pet healthy and happy.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/shop">Buy Plans</Link>
                </Button>
                <Button variant="booking" size="lg" asChild>
                  <Link to="/book">Book a Session – ₹899</Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30" />
                  ))}
                </div>
                <span className="text-sm">Trusted by 500+ pet parents</span>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Pet Nutrition Coach Vinay Pendyala with healthy pets"
                className="rounded-2xl shadow-strong animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium">
                ⭐ 4.9/5 Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Why Choose Our Pet Nutrition Coaching?</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-medium">
              Science-backed nutrition plans designed specifically for your pet's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-card">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/70 font-medium leading-relaxed">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Embed Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Follow @pet.nutritioncoach</h2>
          <p className="text-muted-foreground mb-8">Get daily tips and success stories from our community</p>
          
          {/* Placeholder for Instagram embed */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-soft max-w-md mx-auto">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-lg">@pet.nutritioncoach</h3>
              <p className="text-muted-foreground text-sm">Join our Instagram community for daily pet nutrition tips and success stories!</p>
              <Button variant="outline" asChild>
                <a href="https://instagram.com/pet.nutritioncoach" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Digital Meal Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect nutrition plan for your pet's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="accent" className="w-full" asChild>
                    <Link to={`/shop/${product.id}`}>Buy Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Sessions */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">1:1 Nutrition Coaching Sessions</h2>
              <p className="text-xl text-muted-foreground">
                Get personalized guidance with a comprehensive 45-60 minute consultation designed specifically for your pet's needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>45-60 minutes online via Zoom/Google Meet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Detailed nutrition plan recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Q&A session for all your concerns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Follow-up summary and action plan</span>
                </div>
              </div>
            </div>

            <Card className="shadow-medium">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Book Your Session</CardTitle>
                <div className="text-3xl font-bold text-booking">₹899</div>
                <CardDescription>One-time payment • 45-60 minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="booking" size="lg" className="w-full" asChild>
                  <Link to="/book">Book a Session – ₹899</Link>
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Includes pre-session intake form and post-session summary
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real pet families who trust our nutrition guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
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

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our pet nutrition services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start Your Pet's Healthier Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of happy pet parents who've transformed their pets' health with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">Buy Meal Plans</Link>
            </Button>
            <Button variant="booking" size="lg" asChild>
              <Link to="/book">Book a Session – ₹899</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;