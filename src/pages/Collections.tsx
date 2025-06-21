
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Collections = () => {
  const collections = [
    {
      name: "Heritage Collection",
      description: "Timeless pieces inspired by classical elegance",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
      itemCount: 24
    },
    {
      name: "Modern Luxury",
      description: "Contemporary designs for the modern connoisseur",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
      itemCount: 18
    },
    {
      name: "Diamond Signature",
      description: "Our most precious pieces featuring exceptional diamonds",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
      itemCount: 12
    },
    {
      name: "Vintage Revival",
      description: "Classic styles reimagined for today's taste",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
      itemCount: 16
    }
  ];

  return (
    <div className="page-container">
      <Header />
      <main className="padding-top-xl">
        <div className="section-container padding-vertical-xl">
          <div className="text-center margin-bottom-2xl">
            <h1 className="heading-md sm\:heading-lg font-light text-primary margin-bottom-base">
              Our Collections
            </h1>
            <p className="body-lg text-secondary container-small margin-auto">
              Explore our carefully curated collections, each telling a unique story of craftsmanship and elegance.
            </p>
          </div>
          
          <div className="grid-layout grid-1 md\:grid-2 gap-xl">
            {collections.map((collection, index) => (
              <div key={collection.name} className="group cursor-pointer">
                <div className="position-relative overflow-hidden rounded-lg bg-white shadow-lg hover\:shadow-xl transition-base translate-up-hover">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="layout-full-width layout-full-height object-cover scale-hover transition-slower"
                    />
                    <div className="position-absolute position-full bg-gradient-strong-overlay"></div>
                  </AspectRatio>
                  
                  <div className="position-absolute position-bottom position-left position-right padding-lg text-white">
                    <h3 className="heading-xs font-semibold margin-bottom-sm">{collection.name}</h3>
                    <p className="text-lightest margin-bottom-sm">{collection.description}</p>
                    <p className="body-sm text-lighter">{collection.itemCount} pieces</p>
                  </div>
                  
                  <div className="position-absolute position-full bg-semi-transparent backdrop-blur-sm opacity-0 group:hover .opacity-100 transition-smooth flex-center">
                    <span className="text-white font-medium bg-glass-dark padding-horizontal-lg padding-vertical-sm rounded-full backdrop-blur-sm">
                      View Collection
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
