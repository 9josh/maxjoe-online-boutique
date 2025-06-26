
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
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

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images Column */}
            <div className="space-y-4">
              {/* Main Image with Slider Controls */}
              <div className="relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                {product.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2"
                    >
                      <ChevronLeft className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2"
                    >
                      <ChevronRight className="size-4" />
                    </Button>
                  </>
                )}
              </div>
              
              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-3 justify-center">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all ${
                        selectedImage === index ? 'border-silver-primary shadow-md' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Column */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{product.category}</div>
                <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">{product.name}</h1>
                <p className="text-2xl lg:text-3xl text-gray-900 font-medium">${product.price.toLocaleString()}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
              
              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-medium mb-3">Available Colors</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      onClick={() => setSelectedColor(color)}
                      className="px-4 py-2"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-medium mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 h-12 text-base font-medium"
                >
                  <ShoppingCart className="size-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="h-12 px-4">
                  <Heart className="size-5" />
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
