
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
        <h1 className="heading-md sm\:heading-lg md\:heading-xl lg\:heading-hero text-primary margin-bottom-lg letter-spacing-wide">
          Timeless
          <span className="display-block font-extralight text-secondary heading-sm sm\:heading-md md\:heading-lg lg\:heading-xl margin-top-sm">
            Luxury
          </span>
        </h1>
        
        <p className="body-lg sm\:subheading-lg text-secondary margin-bottom-xl container-small margin-auto line-height-relaxed padding-horizontal-base">
          Discover our exquisite collection of handcrafted jewelry. 
          Each piece tells a story of elegance, sophistication, and timeless beauty.
        </p>
        
        <div className="flex-column sm\:flex-row gap-base flex-center padding-horizontal-base">
          <Link to="/collections">
            <Button 
              size="lg" 
              className="btn btn-primary padding-horizontal-lg sm\:padding-horizontal-xl padding-vertical-sm body-base sm\:subheading-lg font-medium layout-full-width sm\:width-auto"
            >
              Explore Collection
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="btn btn-outline padding-horizontal-lg sm\:padding-horizontal-xl padding-vertical-sm body-base sm\:subheading-lg font-medium layout-full-width sm\:width-auto"
          >
            Watch Our Story
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="position-absolute size-24 sm\:size-32 bg-semi-transparent rounded-full blur-strong" style={{top: '5rem', left: '1rem'}}></div>
      <div className="position-absolute size-32 sm\:size-40 bg-glass rounded-full blur-strong" style={{bottom: '5rem', right: '1rem'}}></div>
    </section>
  );
};

export default Hero;
