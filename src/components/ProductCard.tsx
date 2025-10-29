import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const ProductCard = ({ id, name, price, image, rating, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)]">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden aspect-square bg-secondary">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? "fill-accent text-accent"
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">({rating})</span>
        </div>
        <p className="text-2xl font-bold text-primary">€{price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="default">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
