
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const Bracelets = () => {
  const braceletProducts = [
    {
      id: 9,
      name: "Tennis Diamond Bracelet",
      price: 3499,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      category: "bracelets"
    },
    {
      id: 10,
      name: "Gold Chain Bracelet",
      price: 799,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "bracelets"
    },
    {
      id: 11,
      name: "Vintage Silver Cuff",
      price: 549,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "bracelets"
    },
    {
      id: 12,
      name: "Emerald Luxury Bracelet",
      price: 4299,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
      category: "bracelets"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-800 mb-4">
              Designer Bracelets
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elegant accessories for the discerning individual. Our bracelet collection offers sophisticated style for every occasion.
            </p>
          </div>
          <ProductGrid products={braceletProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bracelets;
