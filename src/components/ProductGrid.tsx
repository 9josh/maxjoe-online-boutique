
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const { addToCart } = useCart();
  const [notifications, setNotifications] = useState<{[key: number]: {message: string, type: 'success' | 'error'}}>({});

  const handleAddToCart = (product: Product) => {
    const success = addToCart(product);
    
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
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
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
              <div className="flex-start space-horizontal-sm">
                <Button 
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="size-4 margin-right-sm" />
                  Add to Cart
                </Button>
                <Link to={`/product/${product.category}/${product.id}`}>
                  <Button variant="outline" className="btn btn-outline">
                    <Eye className="size-4 margin-right-sm" />
                    Details
                  </Button>
                </Link>
              </div>
            </div>
            <div className="position-absolute" style={{top: '16px', right: '16px'}}>
              <Button
                variant="ghost"
                size="sm"
                className="btn btn-ghost bg-glass size-10 padding-none"
              >
                <Heart className="size-4" />
              </Button>
            </div>
          </div>
          <div className="product-info">
            <div className="product-category">{product.category}</div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
