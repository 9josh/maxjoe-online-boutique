
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
    <div className="page-container">
      <Header />
      <main className="padding-top-xl">
        <div className="section-container padding-vertical-xl">
          <div className="text-center margin-bottom-2xl">
            <h1 className="heading-md sm\:heading-lg font-light text-primary margin-bottom-base">
              Designer Bracelets
            </h1>
            <p className="body-lg text-secondary container-small margin-auto">
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
