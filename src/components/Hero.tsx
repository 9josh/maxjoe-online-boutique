
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
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
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-medium w-full sm:w-auto"
            >
              Explore Collection
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 text-base sm:text-lg font-medium w-full sm:w-auto"
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
