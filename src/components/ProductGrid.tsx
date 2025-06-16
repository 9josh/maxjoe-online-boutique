
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="ghost"
                size="sm"
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 w-10 h-10 p-0"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
            <p className="text-lg font-semibold text-gray-900">${product.price.toLocaleString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
