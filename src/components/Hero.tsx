
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Timeless
          <span className="hero-subtitle display-block">
            Luxury
          </span>
        </h1>
        
        <p className="hero-description">
          Discover our exquisite collection of handcrafted jewelry. 
          Each piece tells a story of elegance, sophistication, and timeless beauty 
          that transcends generations.
        </p>
        
        <div className="hero-buttons">
          <Link to="/collections">
            <Button size="lg" className="btn btn-primary">
              Explore Collection
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="btn btn-outline">
            Watch Our Story
          </Button>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="position-absolute size-24 bg-glass rounded-full blur-strong" style={{top: '20%', left: '10%', animation: 'float 6s ease-in-out infinite'}}></div>
      <div className="position-absolute size-32 bg-glass rounded-full blur-strong" style={{bottom: '20%', right: '10%', animation: 'float 8s ease-in-out infinite reverse'}}></div>
    </section>
  );
};

export default Hero;
