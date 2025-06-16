
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const Watches = () => {
  const watchProducts = [
    {
      id: 1,
      name: "Classic Gold Timepiece",
      price: 2499,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
      category: "watches"
    },
    {
      id: 2,
      name: "Silver Executive Watch",
      price: 1899,
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&h=400&fit=crop",
      category: "watches"
    },
    {
      id: 3,
      name: "Diamond Luxury Watch",
      price: 4999,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop",
      category: "watches"
    },
    {
      id: 4,
      name: "Rose Gold Heritage",
      price: 3299,
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&h=400&fit=crop",
      category: "watches"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-800 mb-4">
              Luxury Watches
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our exquisite collection of handcrafted timepieces. Each watch represents precision, elegance, and timeless sophistication.
            </p>
          </div>
          <ProductGrid products={watchProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Watches;
