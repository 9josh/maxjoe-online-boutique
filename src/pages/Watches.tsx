
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
    <div className="page-container">
      <Header />
      <main className="padding-top-xl">
        <div className="section-container padding-vertical-xl">
          <div className="text-center margin-bottom-2xl">
            <h1 className="heading-md sm\:heading-lg font-light text-primary margin-bottom-base">
              Luxury Watches
            </h1>
            <p className="body-lg text-secondary container-small margin-auto">
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
