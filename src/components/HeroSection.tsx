import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cooking.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Premium
              <span className="text-primary"> Cooking Tools</span>
              <br />
              for Every Chef
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Discover our curated collection of professional-grade cookware, knives, and utensils. 
              Elevate your culinary journey with tools trusted by chefs worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                Shop Collection
              </Button>
              <Button variant="outline" size="lg">
                View Catalog
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-copper">
              <img 
                src={heroImage} 
                alt="Premium cooking tools arranged beautifully" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-6 bg-copper text-primary-foreground px-6 py-3 rounded-xl shadow-copper">
              <p className="text-sm font-semibold">Free Shipping</p>
              <p className="text-xs opacity-90">On orders over $99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;