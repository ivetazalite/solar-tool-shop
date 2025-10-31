import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Leaf, Zap, Shield, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly solar-powered solutions for a greener future.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology that pushes the boundaries of what's possible.",
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Premium materials and rigorous testing ensure lasting reliability.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning products recognized by industry professionals worldwide.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Hardware Tools</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At TombRaidio, we believe in building more than structures—we build legacies. Our mission is to provide high-quality hardware tools and innovative solutions that help you create lasting memorials and meaningful spaces.
From durable construction tools to advanced technology for remembrance, TombRaidio combines strength, precision, and modern design. Every product we offer is crafted to support your projects with reliability and respect, ensuring that what you build today stands the test of time.
Whether you’re a professional craftsman or a passionate DIY creator, TombRaidio is your trusted partner for tools that honor stories beyond life.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="p-12 mb-16 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            We strive to help our customers craft meaningful spaces and lasting memorials by delivering products that stand the test of time.
Through innovation and quality, we aim to bridge tradition with technology—providing tools that not only build structures but also preserve stories and legacies for generations to come.
          </p>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto"></p>
            <p>
              TombRaidio was born in Latvia on October 31, 2025, with a vision to redefine how we honor memories and build lasting legacies. What started as an idea—to merge traditional craftsmanship with modern technology—has grown into a brand dedicated to providing premium hardware tools and innovative solutions for memorial spaces.
            </p>            
            <p>
              We believe that every story deserves to be remembered. 
              That’s why TombRaidio combines durable tools with cutting-edge tech, empowering builders and creators to craft spaces that stand the test of time. From the heart of Latvia, we are proud to serve those who value quality, respect, and innovation.
            </p>            
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">50K+</p>
            <p className="text-muted-foreground">Happy Customers</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-muted-foreground">Countries</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">24/7</p>
            <p className="text-muted-foreground">Support</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
