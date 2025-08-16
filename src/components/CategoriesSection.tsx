import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Utensils, UtensilsCrossed } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Cookware",
    description: "Pans, pots, and skillets",
    icon: ChefHat,
    color: "bg-gradient-to-br from-primary/10 to-accent/10",
    iconColor: "text-primary",
  },
  {
    id: 2,
    name: "Knives & Cutlery",
    description: "Professional chef knives",
    icon: UtensilsCrossed,
    color: "bg-gradient-to-br from-copper/10 to-copper-light/10",
    iconColor: "text-copper",
  },
  {
    id: 3,
    name: "Utensils",
    description: "Essential cooking tools",
    icon: Utensils,
    color: "bg-gradient-to-br from-accent/10 to-primary/10",
    iconColor: "text-accent",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect tools for every cooking task. From professional cookware to precision knives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group cursor-pointer border-0 shadow-elegant hover:shadow-copper transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className={`${category.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-10 w-10 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;