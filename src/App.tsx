
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Watches from "./pages/Watches";
import Necklaces from "./pages/Necklaces";
import Bracelets from "./pages/Bracelets";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/necklaces" element={<Necklaces />} />
            <Route path="/bracelets" element={<Bracelets />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/product/:category/:id" element={<ProductDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
