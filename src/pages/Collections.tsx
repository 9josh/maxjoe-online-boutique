
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-800 mb-4">
              Our Collections
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections, each telling a unique story of craftsmanship and elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div key={collection.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </AspectRatio>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">{collection.name}</h3>
                    <p className="text-gray-200 mb-2">{collection.description}</p>
                    <p className="text-sm text-gray-300">{collection.itemCount} pieces</p>
                  </div>
                  
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm">
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
