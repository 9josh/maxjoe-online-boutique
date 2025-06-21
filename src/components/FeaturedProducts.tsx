
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
    <section className="padding-vertical-2xl sm\:padding-vertical-3xl padding-horizontal-base bg-light">
      <div className="section-container">
        <div className="text-center margin-bottom-2xl sm\:margin-bottom-3xl">
          <h2 className="heading-sm sm\:heading-md font-light text-primary margin-bottom-base">Featured Pieces</h2>
          <p className="body-base sm\:body-lg text-secondary container-small margin-auto padding-horizontal-base">
            Handpicked selections from our master jewelers, each piece representing 
            the pinnacle of luxury and craftsmanship.
          </p>
        </div>

        <div className="grid-layout grid-1 sm\:grid-2 lg\:grid-4 gap-base sm\:gap-lg">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-lg shadow-sm hover\:shadow-lg transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="position-relative overflow-hidden rounded-top-lg">
                <AspectRatio ratio={1}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="layout-full-width layout-full-height object-cover scale-hover transition-slower"
                  />
                </AspectRatio>
                <div className="position-absolute position-top position-right padding-sm opacity-0 group:hover .opacity-100 transition-base">
                  <Button size="sm" variant="secondary" className="btn btn-secondary bg-glass hover\:bg-white body-xs sm\:body-sm">
                    Quick View
                  </Button>
                </div>
              </div>
              
              <div className="padding-base sm\:padding-lg">
                <div className="body-xs sm\:body-sm text-muted margin-bottom-sm">{product.category}</div>
                <h3 className="body-base sm\:subheading-lg font-medium text-primary margin-bottom-sm line-height-tight">{product.name}</h3>
                <div className="flex-between flex-wrap gap-sm">
                  <span className="subheading-lg sm\:subheading-xl font-semibold text-primary">{product.price}</span>
                  <Button size="sm" className="btn btn-primary body-xs sm\:body-sm padding-horizontal-sm sm\:padding-horizontal-base">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center margin-top-xl sm\:margin-top-2xl">
          <Button size="lg" variant="outline" className="btn btn-outline layout-full-width sm\:width-auto">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
