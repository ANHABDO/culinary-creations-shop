import ProductCard from "./ProductCard";
import copperPan from "@/assets/copper-pan.jpg";
import woodenUtensils from "@/assets/wooden-utensils.jpg";
import chefKnife from "@/assets/chef-knife.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Premium Copper Chef Pan",
    price: 149.99,
    originalPrice: 199.99,
    image: copperPan,
    rating: 4.8,
    reviews: 127,
  },
  {
    id: "2", 
    name: "Wooden Utensil Set",
    price: 39.99,
    image: woodenUtensils,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Professional Chef Knife",
    price: 89.99,
    originalPrice: 110.99,
    image: chefKnife,
    rating: 4.9,
    reviews: 156,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium tools that every professional and home chef should have in their kitchen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;