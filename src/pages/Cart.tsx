
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

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
          <div className="flex-between margin-bottom-xl">
            <h1 className="heading-sm sm:heading-md font-light text-primary">
              Shopping Cart
            </h1>
            <Link to="/">
              <Button variant="outline" className="btn btn-outline">
                Continue Shopping
              </Button>
            </Link>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="text-center padding-vertical-2xl">
              <p className="subheading-lg text-secondary margin-bottom-lg">Your cart is empty</p>
              <Link to="/">
                <Button className="btn btn-primary">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid-layout grid-1 lg:grid-3 gap-xl">
              <div className="lg:col-span-2">
                <div className="space-vertical-lg">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-enhanced bg-white padding-lg rounded-lg shadow-sm">
                      <div className="cart-item-layout">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-image object-cover rounded-md flex-shrink-0"
                        />
                        <div className="cart-item-details">
                          <h3 className="subheading-lg font-medium text-primary">{item.name}</h3>
                          <div className="cart-item-price-section">
                            <span className="cart-unit-price-label">Unit Price</span>
                            <p className="text-secondary">${item.price.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="cart-item-controls">
                          <div className="cart-quantity-controls">
                            <div className="flex-start space-horizontal-sm">
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
                            <div className="cart-item-total">
                              <span className="cart-total-label">Item Quantity Total</span>
                              <span className="cart-total-price">${(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="btn btn-ghost text-error hover:text-error-dark padding-sm cart-remove-btn"
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      </div>
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
                  <div className="cart-checkout-container">
                    <Button className="btn btn-primary cart-checkout-btn">
                      Proceed to Checkout
                    </Button>
                  </div>
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
