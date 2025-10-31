import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const categories = [
    { name: "Solar Devices", icon: Leaf, description: "Eco-friendly power solutions" },
    { name: "Recording Equipment", icon: Zap, description: "Professional audio tools" },
    { name: "Smart Tools", icon: Shield, description: "Advanced tech hardware" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
            🎉 New Arrival: Solar-Powered Recording Devices
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
           TombRaidio 
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hardware for Timeless Connections
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to="/products"
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">TombRaidio</h3>
              <p className="text-muted-foreground">
                Premium tech hardware with eco-friendly solar solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/products" className="hover:text-primary transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-primary transition-colors">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 TombRaidio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
