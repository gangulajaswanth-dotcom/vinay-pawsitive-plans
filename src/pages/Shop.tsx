import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Download, Clock, HeadphonesIcon } from "lucide-react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Complete Nutrition Plan",
      description: "Comprehensive meal planning with detailed guidelines, portion guides, ingredient lists, and feeding schedules tailored specifically for your pet.",
      price: "₹999",
      originalPrice: "₹1,299",
      rating: 4.9,
      reviews: 127,
      delivery: "Instant Digital Download",
      popular: true,
      features: [
        "Custom meal plans for 30 days",
        "Detailed portion guidelines by weight",
        "Complete ingredient shopping lists",
        "Feeding schedule templates",
        "Nutrition tips and guidelines",
        "Email support for 30 days",
        "Plan adjustment guidelines",
        "Healthy treat recommendations"
      ]
    },
    {
      id: 2,
      name: "Quick Start Diet Sheet",
      description: "Essential nutrition guide with easy-to-follow meal recommendations for immediate implementation. Perfect for getting started quickly.",
      price: "₹499",
      originalPrice: "₹699",
      rating: 4.8,
      reviews: 89,
      delivery: "Instant Digital Download",
      popular: false,
      features: [
        "Basic meal plans for 14 days",
        "Simple feeding schedule",
        "Essential nutrition tips",
        "Quick reference guide",
        "Basic portion guidelines",
        "Email support for 14 days"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Download className="h-5 w-5" />,
      title: "Instant Access",
      description: "Download immediately after purchase"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Save Time",
      description: "No more guessing about meal planning"
    },
    {
      icon: <HeadphonesIcon className="h-5 w-5" />,
      title: "Expert Support",
      description: "Email support included with every plan"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Digital Meal Plans for Your Pet
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Science-backed nutrition plans delivered instantly. Choose the perfect plan for your pet's needs and start their health journey today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full mx-auto mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-white/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className={`relative shadow-soft hover:shadow-medium transition-all duration-300 ${product.popular ? 'ring-2 ring-primary ring-opacity-50' : ''}`}>
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{product.name}</CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-current text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{product.price}</div>
                      <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                  
                  <div className="flex items-center space-x-2 pt-2">
                    <Download className="h-4 w-4 text-success" />
                    <span className="text-sm text-success font-medium">{product.delivery}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      variant={product.popular ? "booking" : "accent"} 
                      size="lg" 
                      className="w-full" 
                      asChild
                    >
                      <Link to={`/shop/${product.id}`}>
                        Buy Now - {product.price}
                      </Link>
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      Secure payment • Instant download • 7-day money-back guarantee
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Plans */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Digital Plans?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get professional-grade nutrition guidance at a fraction of the cost of traditional consultations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-white font-bold">₹</span>
                </div>
                <CardTitle className="text-lg">Affordable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional nutrition guidance at a fraction of consultation costs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Instant Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Download immediately and start implementing today
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Expert Created</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Developed by certified pet nutrition specialist with 5+ years experience
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Support Included</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Email support included to help you implement the plans successfully
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <Card className="max-w-4xl mx-auto shadow-medium border-success/20">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-success rounded-full mx-auto flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-success-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">7-Day Money-Back Guarantee</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We're confident you'll love our nutrition plans. If you're not completely satisfied within 7 days of purchase, we'll refund your money, no questions asked.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="success" size="lg" asChild>
                  <Link to="/shop/1">Try Complete Plan Risk-Free</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/policies/refund">View Refund Policy</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a 1:1 consultation for personalized guidance tailored specifically to your pet's unique needs
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book">Book a Consultation – ₹899</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Shop;