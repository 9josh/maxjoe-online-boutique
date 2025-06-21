
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
        <Card key={product.id} className="product-card group">
          <div className="product-image">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <div className="position-absolute opacity-0 group:hover .opacity-100 transition-smooth" style={{top: '1rem', right: '1rem'}}>
              <Button
                variant="ghost"
                size="sm"
                className="btn btn-ghost bg-glass hover\:bg-white text-primary-light size-10 padding-none"
              >
                <Heart className="size-4" />
              </Button>
            </div>
            <div className="position-absolute position-full bg-overlay opacity-0 group:hover .opacity-100 transition-smooth flex-center">
              <Button className="btn btn-primary">
                <ShoppingCart className="size-4 margin-right-sm" />
                Add to Cart
              </Button>
            </div>
          </div>
          <CardContent className="card-content padding-base">
            <h3 className="font-medium text-primary margin-bottom-sm text-truncate-2">{product.name}</h3>
            <p className="subheading-lg font-semibold text-primary">${product.price.toLocaleString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
