import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Award, BookOpen, Heart, Users } from "lucide-react";

const About = () => {
  const credentials = [
    "Certified Pet Nutrition Specialist",
    "Animal Nutrition Science Degree",
    "5+ Years of Experience",
    "500+ Successful Pet Transformations"
  ];

  const specializations = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Health Conditions",
      description: "Specialized nutrition for diabetes, kidney disease, allergies, and digestive issues"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "All Life Stages",
      description: "From puppies and kittens to senior pets, tailored nutrition for every life stage"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Evidence-Based",
      description: "Science-backed recommendations using latest research in pet nutrition"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Holistic Approach",
      description: "Considering lifestyle, preferences, and budget alongside health requirements"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Meet Vinay Pendyala
                </h1>
                <p className="text-xl text-white/90">
                  Your trusted pet nutrition expert dedicated to transforming lives through proper nutrition.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {credentials.map((credential, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {credential}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/book">Book a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/shop">View Plans</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-strong">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-white" />
                </div>
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">500+</h3>
                  <p className="text-white/80">Happy Pet Families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">My Journey in Pet Nutrition</h2>
            </div>

            <Card className="shadow-soft border-0">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Hi, I'm Vinay Pendyala, a certified pet nutrition specialist with over 5 years of experience helping pet parents provide the best possible nutrition for their beloved companions. My journey into pet nutrition began when my own rescue dog, Rocky, struggled with digestive issues that traditional veterinary approaches couldn't fully resolve.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    After extensive research and working with various nutrition experts, I discovered the transformative power of personalized nutrition plans. Rocky's complete recovery ignited my passion for pet nutrition science, leading me to pursue formal certification and dedicate my career to helping other pets achieve optimal health through proper nutrition.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Today, I've had the privilege of working with over 500 pet families, helping them navigate everything from basic nutrition optimization to managing complex health conditions through dietary interventions. My approach combines evidence-based nutrition science with practical, real-world solutions that fit into busy lifestyles.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    I believe that every pet deserves personalized nutrition care, which is why I offer both comprehensive meal planning services and one-on-one consultations. Whether you're dealing with a specific health concern, want to optimize your pet's current diet, or simply ensure you're providing the best nutrition possible, I'm here to guide you every step of the way.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Credentials & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Backed by science, driven by passion, proven by results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white">
                    {spec.icon}
                  </div>
                  <CardTitle className="text-lg">{spec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{spec.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Master's in Animal Nutrition Science</h3>
                    <p className="text-muted-foreground text-sm">University of Veterinary Sciences</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Certified Pet Nutrition Specialist</h3>
                    <p className="text-muted-foreground text-sm">International Association for Animal Nutrition</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Advanced Canine & Feline Nutrition</h3>
                    <p className="text-muted-foreground text-sm">Continuing Education Program</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <Award className="h-6 w-6 text-primary" />
                    <span>Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">5+ Years in Pet Nutrition</h3>
                    <p className="text-muted-foreground text-sm">Specializing in personalized nutrition plans</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">500+ Successful Cases</h3>
                    <p className="text-muted-foreground text-sm">Dogs and cats of all breeds and ages</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Health Condition Specialist</h3>
                    <p className="text-muted-foreground text-sm">Diabetes, kidney disease, allergies, digestive issues</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Methodology */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">My Approach to Pet Nutrition</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold">Assess</h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation of your pet's current health, diet, lifestyle, and specific needs
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold">Customize</h3>
                <p className="text-muted-foreground">
                  Create personalized meal plans based on scientific research and your pet's unique requirements
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold">Support</h3>
                <p className="text-muted-foreground">
                  Ongoing guidance and adjustments to ensure your pet's optimal health and happiness
                </p>
              </div>
            </div>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground italic">
                  "Every pet is unique, and their nutrition should be too. My goal is to provide practical, science-based solutions that fit seamlessly into your life while delivering exceptional results for your pet's health and happiness."
                </p>
                <p className="text-primary font-semibold mt-4">— Vinay Pendyala</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Pet's Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's work together to create the perfect nutrition plan for your beloved companion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">Book a Consultation – ₹899</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/shop">Browse Meal Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;