import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
}

const ProductCard = ({ name, price, originalPrice, image, rating, reviews }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-copper transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {originalPrice && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-semibold">
            Sale
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 text-sm">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < Math.floor(rating) ? "★" : "☆"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-muted-foreground text-sm ml-2">({reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">${price}</span>
          {originalPrice && (
            <span className="text-muted-foreground line-through">${originalPrice}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="copper">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;