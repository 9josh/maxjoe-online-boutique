
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const CategoryShowcase = () => {
  const categories = [
    {
      name: "Luxury Watches",
      description: "Precision meets elegance in our timepiece collection",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
      href: "/watches"
    },
    {
      name: "Exquisite Necklaces",
      description: "Statement pieces that capture hearts and turn heads",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
      href: "/necklaces"
    },
    {
      name: "Designer Bracelets",
      description: "Elegant accessories for the discerning individual",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
      href: "/bracelets"
    }
  ];

  return (
    <section className="padding-vertical-2xl sm\:padding-vertical-3xl padding-horizontal-base section-container">
      <div className="text-center margin-bottom-2xl sm\:margin-bottom-3xl">
        <h2 className="heading-sm sm\:heading-md font-light text-primary margin-bottom-base">Our Collections</h2>
        <p className="body-base sm\:body-lg text-secondary container-small margin-auto padding-horizontal-base">
          Explore our carefully curated collections, each piece selected for its exceptional 
          craftsmanship and timeless appeal.
        </p>
      </div>

      <div className="grid-layout grid-1 md\:grid-2 lg\:grid-3 gap-lg sm\:gap-xl">
        {categories.map((category, index) => (
          <Link 
            key={category.name}
            to={category.href}
            className="group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="position-relative overflow-hidden rounded-lg bg-white shadow-lg hover\:shadow-xl transition-base translate-up-hover">
              <AspectRatio ratio={1}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="layout-full-width layout-full-height object-cover scale-hover transition-slower"
                />
                <div className="position-absolute position-full bg-gradient-overlay"></div>
              </AspectRatio>
              
              <div className="position-absolute position-bottom position-left position-right padding-base sm\:padding-lg text-white">
                <h3 className="subheading-lg sm\:subheading-xl font-semibold margin-bottom-sm">{category.name}</h3>
                <p className="body-sm text-lightest opacity-90 line-height-relaxed">{category.description}</p>
              </div>
              
              {/* Glass overlay effect */}
              <div className="position-absolute position-full bg-semi-transparent backdrop-blur-sm opacity-0 group:hover .opacity-100 transition-smooth flex-center">
                <span className="text-white font-medium bg-glass-dark padding-horizontal-base sm\:padding-horizontal-lg padding-vertical-sm rounded-full backdrop-blur-sm body-sm sm\:body-base">
                  Explore Collection
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
