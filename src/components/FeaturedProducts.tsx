
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Diamond Eternity Ring",
      price: "$2,450",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "Rings"
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: "$890",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      category: "Earrings"
    },
    {
      id: 3,
      name: "Gold Tennis Bracelet",
      price: "$1,650",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      category: "Bracelets"
    },
    {
      id: 4,
      name: "Sapphire Pendant",
      price: "$3,200",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "Necklaces"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">Featured Pieces</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Handpicked selections from our master jewelers, each piece representing 
            the pinnacle of luxury and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <AspectRatio ratio={1}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-xs sm:text-sm">
                    Quick View
                  </Button>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-gray-500 mb-2">{product.category}</div>
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 leading-tight">{product.name}</h3>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-lg sm:text-xl font-semibold text-gray-900">{product.price}</span>
                  <Button size="sm" className="bg-gray-800 hover:bg-gray-900 text-white text-xs sm:text-sm px-3 sm:px-4">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
