
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Gold Timepiece",
      price: 2499,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Diamond Statement Necklace",
      price: 5999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping for luxury items
  const total = subtotal + shipping;

  return (
    <div className="page-container">
      <Header />
      <main className="padding-top-xl">
        <div className="container-large margin-auto padding-horizontal-base padding-vertical-xl" style={{ maxWidth: '1200px' }}>
          <h1 className="heading-sm sm\:heading-md font-light text-primary margin-bottom-xl">
            Shopping Cart
          </h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center padding-vertical-2xl">
              <p className="subheading-lg text-secondary margin-bottom-lg">Your cart is empty</p>
              <Button className="btn btn-primary">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid-layout grid-1 lg\:grid-3 gap-xl">
              <div className="lg\:col-span-2">
                <div className="space-vertical-lg">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex-start space-horizontal-base bg-white padding-lg rounded-lg shadow-sm cart-item-container">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-grow min-width-0">
                        <h3 className="subheading-lg font-medium text-primary">{item.name}</h3>
                        <p className="text-secondary">${item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex-start space-horizontal-sm flex-shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="btn btn-outline size-8 padding-none"
                        >
                          <Minus className="size-4" />
                        </Button>
                        <span className="size-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="btn btn-outline size-8 padding-none"
                        >
                          <Plus className="size-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="btn btn-ghost text-error hover\:text-error-dark padding-sm flex-shrink-0"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-white padding-lg rounded-lg shadow-sm">
                  <h3 className="subheading-lg font-semibold text-primary margin-bottom-base">Order Summary</h3>
                  <div className="space-vertical-sm">
                    <div className="flex-between">
                      <span className="text-secondary">Subtotal</span>
                      <span className="text-primary">${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex-between">
                      <span className="text-secondary">Shipping</span>
                      <span className="text-primary">Free</span>
                    </div>
                    <div className="border-top border-base padding-top-sm">
                      <div className="flex-between subheading-lg font-semibold">
                        <span>Total</span>
                        <span>${total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="btn btn-primary layout-full-width margin-top-lg">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
