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
            We're pioneering the future of hardware technology by combining innovative design
            with sustainable solar power. Since 2020, we've been empowering professionals and
            enthusiasts with tools that don't compromise on performance or environmental responsibility.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="p-12 mb-16 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            To revolutionize the hardware tools industry by creating innovative, solar-powered
            devices that empower professionals to work anywhere, anytime, without compromising
            on quality or environmental impact.
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
            <p>
              Hardware Tools was founded in 2020 by a team of engineers and environmental
              advocates who shared a vision: to create professional-grade tools that harness
              the power of the sun. What started as a small workshop in California has grown
              into a leading innovator in sustainable technology.
            </p>
            <p>
              Our flagship product, the Solar-Powered Audio Recorder Pro, revolutionized field
              recording by eliminating the need for disposable batteries while maintaining
              studio-quality performance. This breakthrough technology earned us recognition
              from industry leaders and environmental organizations alike.
            </p>
            <p>
              Today, we continue to expand our product line, always guided by our core
              commitment to sustainability, innovation, and uncompromising quality. Every
              device we create is designed to last, perform, and minimize environmental impact.
            </p>
            <p>
              We're proud to serve a growing community of professionals who refuse to choose
              between performance and responsibility. Join us in building a more sustainable
              future, one innovative tool at a time.
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
