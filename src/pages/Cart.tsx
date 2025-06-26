
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

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
                    <div key={item.id} className="bg-white padding-lg rounded-lg shadow-sm">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="subheading-lg font-medium text-primary">{item.name}</h3>
                            <div className="mt-1">
                              <span className="text-sm text-gray-500">Unit Price: </span>
                              <span className="text-secondary">${item.price.toLocaleString()}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 p-0"
                              >
                                <Minus className="size-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 p-0"
                              >
                                <Plus className="size-4" />
                              </Button>
                            </div>

                            {/* Item Total - Shows under quantity controls on tablet/laptop */}
                            <div className="md:flex md:flex-col md:items-start">
                              <span className="text-sm text-gray-500 md:block hidden">Item Quantity Total</span>
                              <span className="font-medium text-lg">${(item.price * item.quantity).toLocaleString()}</span>
                            </div>

                            {/* Delete Button */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 md:ml-auto"
                            >
                              <Trash2 className="size-4" />
                            </Button>
                          </div>

                          {/* Item Total - Mobile view */}
                          <div className="md:hidden">
                            <span className="text-sm text-gray-500">Total: </span>
                            <span className="font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                          </div>
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
