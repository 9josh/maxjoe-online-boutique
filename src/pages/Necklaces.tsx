
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const Necklaces = () => {
  const necklaceProducts = [
    {
      id: 5,
      name: "Diamond Statement Necklace",
      price: 5999,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "necklaces"
    },
    {
      id: 6,
      name: "Pearl Elegance Chain",
      price: 1299,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop",
      category: "necklaces"
    },
    {
      id: 7,
      name: "Gold Infinity Pendant",
      price: 899,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      category: "necklaces"
    },
    {
      id: 8,
      name: "Sapphire Royal Collection",
      price: 7499,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "necklaces"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-800 mb-4">
              Exquisite Necklaces
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Statement pieces that capture hearts and turn heads. Our necklace collection embodies grace, beauty, and timeless elegance.
            </p>
          </div>
          <ProductGrid products={necklaceProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Necklaces;
