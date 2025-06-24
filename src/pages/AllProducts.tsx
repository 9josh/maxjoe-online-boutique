
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  // Extended product list with more items
  const allProducts = [
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
    },
    {
      id: 5,
      name: "Rose Gold Band",
      price: 1200,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop",
      category: "Rings"
    },
    {
      id: 6,
      name: "Diamond Stud Earrings",
      price: 2800,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop",
      category: "Earrings"
    },
    {
      id: 7,
      name: "Silver Chain Necklace",
      price: 650,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
      category: "Necklaces"
    },
    {
      id: 8,
      name: "Emerald Ring",
      price: 4500,
      image: "https://images.unsplash.com/photo-1635767582909-345ba7ee776c?w=600&h=600&fit=crop",
      category: "Rings"
    },
    {
      id: 9,
      name: "Platinum Watch",
      price: 8900,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
      category: "Watches"
    },
    {
      id: 10,
      name: "Pearl Bracelet",
      price: 1100,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
      category: "Bracelets"
    },
    {
      id: 11,
      name: "Gold Hoop Earrings",
      price: 750,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
      category: "Earrings"
    },
    {
      id: 12,
      name: "Ruby Pendant",
      price: 3800,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
      category: "Necklaces"
    }
  ];

  return (
    <div className="page-container">
      <Header />
      
      <main className="section-padding bg-white-soft">
        <div className="section-container">
          {/* Back to Home Button */}
          <div className="margin-bottom-xl">
            <Link to="/">
              <Button variant="outline" className="btn btn-outline">
                <ArrowLeft className="size-4 margin-right-sm" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center section-header">
            <h1 className="heading-section gradient-text">All Products</h1>
            <p className="section-description">
              Discover our complete collection of luxury jewelry pieces, 
              each crafted with exceptional attention to detail and timeless elegance.
            </p>
          </div>

          {/* Products Grid */}
          <ProductGrid products={allProducts} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllProducts;
