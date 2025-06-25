
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    const success = addToCart(product);
    
    if (success) {
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    } else {
      toast({
        title: "Item already in cart",
        description: "This item is already added to your cart.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
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
