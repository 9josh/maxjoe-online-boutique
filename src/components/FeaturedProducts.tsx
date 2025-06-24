import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Diamond Eternity Ring",
      price: "$2,450",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      category: "Rings"
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: "$890",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
      category: "Earrings"
    },
    {
      id: 3,
      name: "Gold Tennis Bracelet",
      price: "$1,650",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
      category: "Bracelets"
    },
    {
      id: 4,
      name: "Sapphire Pendant",
      price: "$3,200",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
      category: "Necklaces"
    }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="section-container">
        <div className="text-center section-header">
          <h2 className="heading-section gradient-text">Featured Pieces</h2>
          <p className="section-description">
            Handpicked selections from our master jewelers, each piece representing 
            the pinnacle of luxury and craftsmanship.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                <div className="product-overlay">
                  <Button className="btn btn-primary">
                    <span>Quick View</span>
                  </Button>
                </div>
              </div>
              
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="flex-between">
                  <span className="product-price">{product.price}</span>
                  <Button size="sm" className="btn btn-secondary">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center section-footer">
          <Link to="/all-products">
            <Button size="lg" variant="outline" className="btn btn-outline">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
