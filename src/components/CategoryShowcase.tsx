
import { Link } from "react-router-dom";

const CategoryShowcase = () => {
  const categories = [
    {
      name: "Luxury Watches",
      description: "Precision meets elegance in our timepiece collection",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop",
      href: "/watches"
    },
    {
      name: "Exquisite Necklaces",
      description: "Statement pieces that capture hearts and turn heads",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
      href: "/necklaces"
    },
    {
      name: "Designer Bracelets",
      description: "Elegant accessories for the discerning individual",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop",
      href: "/bracelets"
    }
  ];

  return (
    <section className="section-padding section-container">
      <div className="text-center section-header">
        <h2 className="heading-section gradient-text">Our Collections</h2>
        <p className="section-description">
          Explore our carefully curated collections, each piece selected for its exceptional 
          craftsmanship and timeless appeal.
        </p>
      </div>

      <div className="collection-grid">
        {categories.map((category, index) => (
          <Link 
            key={category.name}
            to={category.href}
            className="collection-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="collection-image">
              <img
                src={category.image}
                alt={category.name}
                className="layout-full object-cover transition-slower scale-hover"
              />
              <div className="collection-overlay">
                <h3 className="collection-name">{category.name}</h3>
                <p className="collection-description">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
