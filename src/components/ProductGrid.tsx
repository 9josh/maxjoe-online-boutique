
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

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
              <Button className="btn btn-primary">
                <ShoppingCart className="size-4 margin-right-sm" />
                Add to Cart
              </Button>
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
