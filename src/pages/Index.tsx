import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;
