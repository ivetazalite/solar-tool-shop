import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Compact Solar Audio Recorder",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=500&fit=crop",
      rating: 4.8,
      category: "Recording",
      brand: "TechPro",
      type: "Audio Recorder",
    },
  ];

  const brands = ["TechPro"];
  const types = ["Audio Recorder"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              {/* Search */}
              <div>
                <Label htmlFor="search" className="text-base font-semibold mb-3 block">
                  Search
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <Label className="text-base font-semibold mb-3 block">
                  Price Range: €{priceRange[0]} - €{priceRange[1]}
                </Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={10}
                  step={1}
                  className="mt-4"
                />
              </div>

              {/* Brand Filter */}
              <div>
                <Label className="text-base font-semibold mb-3 block">Brand</Label>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={brand} />
                      <label
                        htmlFor={brand}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <Label className="text-base font-semibold mb-3 block">Type</Label>
                <div className="space-y-3">
                  {types.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label
                        htmlFor={type}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Reset Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-muted-foreground">Showing {products.length} products</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
