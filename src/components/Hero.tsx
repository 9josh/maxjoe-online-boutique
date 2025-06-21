
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background with glass effect */}
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6 tracking-wide">
          Timeless
          <span className="block font-extralight text-gray-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
            Luxury
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          Discover our exquisite collection of handcrafted jewelry. 
          Each piece tells a story of elegance, sophistication, and timeless beauty.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Link to="/collections">
            <Button 
              size="lg" 
              className="btn btn-primary px-6 sm:px-8 py-3 text-base sm:text-lg font-medium w-full sm:w-auto"
            >
              Explore Collection
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="btn btn-outline px-6 sm:px-8 py-3 text-base sm:text-lg font-medium w-full sm:w-auto"
          >
            Watch Our Story
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-gray-200/40 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
