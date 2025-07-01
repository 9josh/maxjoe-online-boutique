
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
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="pt-20">
        {/* Back Button */}
        <div className="section-container py-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="flex items-center gap-2 text-grey-slate hover:text-silver-primary transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
        </div>

        {/* Product Details Container */}
        <div className="section-container pb-20">
          <div className="product-details-layout">
            {/* Product Images Column */}
            <div className="product-images-column">
              {/* Main Image Container with Slider */}
              <div className="product-image-slider">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-luxury">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                  
                  {/* Slider Navigation Buttons */}
                  {product.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={prevImage}
                        className="slider-btn slider-btn-left"
                      >
                        <ChevronLeft className="size-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={nextImage}
                        className="slider-btn slider-btn-right"
                      >
                        <ChevronRight className="size-5" />
                      </Button>
                    </>
                  )}
                </div>
                
                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="product-thumbnails">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className={`thumbnail ${selectedImage === index ? 'thumbnail-active' : ''}`}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info Column */}
            <div className="product-info-column">
              <div className="product-info-content">
                {/* Product Category */}
                <div className="product-category-badge">
                  {product.category}
                </div>
                
                {/* Product Name */}
                <h1 className="product-title">
                  {product.name}
                </h1>
                
                {/* Product Price */}
                <p className="product-price-main">
                  ${product.price.toLocaleString()}
                </p>
                
                {/* Product Description */}
                <p className="product-description">
                  {product.description}
                </p>
                
                {/* Color Selection */}
                <div className="product-section">
                  <h3 className="section-title">Available Colors</h3>
                  <div className="color-options">
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        variant={selectedColor === color ? "default" : "outline"}
                        onClick={() => setSelectedColor(color)}
                        className="color-option-btn"
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="product-section">
                  <h3 className="section-title">Features</h3>
                  <ul className="features-list">
                    {product.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-bullet"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="product-actions">
                  <Button
                    onClick={handleAddToCart}
                    className="add-to-cart-btn"
                  >
                    <ShoppingCart className="size-5 mr-3" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="wishlist-btn">
                    <Heart className="size-5" />
                  </Button>
                </div>
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
