
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { id, category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedColor, setSelectedColor] = useState("Gold");
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, this would be fetched by ID
  const product = {
    id: parseInt(id || "1"),
    name: "Classic Gold Timepiece",
    price: 2499,
    category: category || "watches",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop"
    ],
    colors: ["Gold", "Silver", "Rose Gold"],
    description: "A timeless piece that combines classic elegance with modern precision. Crafted with the finest materials and attention to detail.",
    features: [
      "Swiss movement",
      "Sapphire crystal glass",
      "Water resistant up to 100m",
      "Luxury leather strap"
    ]
  };

  const handleAddToCart = () => {
    const success = addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category
    });

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

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="page-container">
      <Header />
      <main className="padding-top-xl">
        <div className="section-container padding-vertical-xl">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="btn btn-ghost margin-bottom-lg"
          >
            <ArrowLeft className="size-4 margin-right-sm" />
            Back
          </Button>

          <div className="grid-layout grid-1 lg:grid-2 gap-xl">
            {/* Product Images */}
            <div>
              <div className="margin-bottom-base">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="layout-full-width aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="flex-start space-horizontal-sm">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className={`size-20 object-cover rounded-md cursor-pointer border-2 ${
                      selectedImage === index ? 'border-silver-primary' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="product-category margin-bottom-sm">{product.category}</div>
              <h1 className="heading-sm font-medium text-primary margin-bottom-base">{product.name}</h1>
              <p className="heading-xs text-primary margin-bottom-lg">${product.price.toLocaleString()}</p>
              
              <p className="body-base text-secondary margin-bottom-lg">{product.description}</p>
              
              {/* Color Selection */}
              <div className="margin-bottom-lg">
                <h3 className="subheading-lg font-medium margin-bottom-sm">Available Colors</h3>
                <div className="flex-start space-horizontal-sm">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      onClick={() => setSelectedColor(color)}
                      className="btn btn-outline"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="margin-bottom-xl">
                <h3 className="subheading-lg font-medium margin-bottom-sm">Features</h3>
                <ul className="space-vertical-sm">
                  {product.features.map((feature, index) => (
                    <li key={index} className="body-base text-secondary">• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex-start space-horizontal-base">
                <Button
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-grow"
                >
                  <ShoppingCart className="size-4 margin-right-sm" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="btn btn-outline">
                  <Heart className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
