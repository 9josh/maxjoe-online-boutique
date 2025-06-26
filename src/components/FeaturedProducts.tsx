
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const [notifications, setNotifications] = useState<{[key: number]: {message: string, type: 'success' | 'error'}}>({});

  const products = [
    {
      id: 1,
      name: "Diamond Eternity Ring",
      price: 2450,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      category: "Rings"
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 890,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
      category: "Earrings"
    },
    {
      id: 3,
      name: "Gold Tennis Bracelet",
      price: 1650,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
      category: "Bracelets"
    },
    {
      id: 4,
      name: "Sapphire Pendant",
      price: 3200,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
      category: "Necklaces"
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    const success = addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    
    const notification = success 
      ? { message: "Added to cart!", type: 'success' as const }
      : { message: "Item already in cart!", type: 'error' as const };
    
    setNotifications(prev => ({ ...prev, [product.id]: notification }));
    
    setTimeout(() => {
      setNotifications(prev => {
        const newNotifications = { ...prev };
        delete newNotifications[product.id];
        return newNotifications;
      });
    }, 3000);
  };

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
              <div className="product-image relative">
                {/* Notification Popup */}
                {notifications[product.id] && (
                  <div className={`absolute top-2 left-2 right-2 z-10 px-3 py-2 rounded-md text-sm text-center font-medium transition-all ${
                    notifications[product.id].type === 'success' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {notifications[product.id].message}
                  </div>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                <div className="product-overlay">
                  <div className="flex gap-2">
                    <Link to={`/product/${product.category}/${product.id}`}>
                      <Button className="btn btn-primary flex items-center gap-2">
                        <Eye className="size-4" />
                        Quick View
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="flex-between">
                  <span className="product-price">${product.price.toLocaleString()}</span>
                  <Button 
                    size="sm" 
                    className="btn btn-secondary"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="size-4 mr-1" />
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
