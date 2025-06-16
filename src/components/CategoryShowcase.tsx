
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <section className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">Our Collections</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Explore our carefully curated collections, each piece selected for its exceptional 
          craftsmanship and timeless appeal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((category, index) => (
          <div 
            key={category.name} 
            className="group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
              <AspectRatio ratio={1}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </AspectRatio>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-200 opacity-90 leading-relaxed">{category.description}</p>
              </div>
              
              {/* Glass overlay effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium bg-black/30 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm text-sm sm:text-base">
                  Explore Collection
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
