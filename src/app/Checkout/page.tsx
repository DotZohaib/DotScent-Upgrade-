/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiShoppingCart, FiCheckCircle, FiUser, FiMapPin } from "react-icons/fi";


const Checkout = () => {
  const { cart, cartTotal} = useCart();
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const sellerWhatsappNumber = "+923194635913";

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.match(/^\+92\d{10}$/)) {
      toast.error("Phone number must include country code (e.g., +923123456789)");
      return false;
    }
    if (!formData.address.trim()) {
      toast.error("Please enter your delivery address");
      return false;
    }
    if (!formData.city.trim()) {
      toast.error("Please enter your city");
      return false;
    }
    if (!formData.country.trim()) {
      toast.error("Please enter your country");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!validateForm()) return;
    setShowConfirmation(true);
  };

  const generateOrderMessage = () => {
    // Add emojis and better formatting for WhatsApp
    let message = "🛍 *New Order Received!* 🛒\n\n";
    message += "👤 *Customer Details*\n";
    message += `▫️ *Name:* ${formData.name}\n`;
    message += `▫️ *Email:* ${formData.email}\n`;
    message += `▫️ *Phone:* ${formData.phone}\n`;
    message += `▫️ *Address:* ${formData.address}, ${formData.city}, ${formData.country}\n\n`;
    message += "📦 *Order Summary*\n";

    cart.forEach((item, index) => {
      message += `➡️ ${index + 1}. ${item.name} (Qty: ${item.quantity}) - Rs ${(
        item.finalPrice * item.quantity
      ).toFixed(2)}\n`;
    });

    message += `\n💰 *Total Amount:* Rs ${cartTotal.toFixed(2)}`;
    return encodeURIComponent(message);
  };

  const handleConfirmOrder = async () => {
    try {
      setIsSubmitting(true);
      const message = generateOrderMessage();
      const formattedNumber = sellerWhatsappNumber.replace('+', '');
      const whatsappUrl = `https://wa.me/${formattedNumber}?text=${message}`;

      window.open(whatsappUrl, "_blank");
      
      setTimeout(() => {
        setShowConfirmation(false);
        router.push("/");
        toast.success("Order placed successfully! Order details sent to seller.");
      }, 1000);
    } catch (error) {
      toast.error("Error sending order. Please try again.");
      console.error("Order submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20 min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">No items in cart</h1>
        <Link href="/" className="text-rose-500 hover:text-rose-600">
          Return to Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20 min-h-screen relative">
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-springUp shadow-2xl">
            <div className="text-center mb-6">
              <FiCheckCircle className="text-4xl text-green-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Confirm Your Order</h3>
              <p className="text-gray-600">Review your details before sending to the seller</p>
            </div>
            
            {/* Mini Order Summary */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl mb-6">
              <div className="flex items-center gap-3 mb-4">
                <FiShoppingCart className="text-indigo-600 text-xl" />
                <h4 className="font-semibold text-gray-800">Order Summary</h4>
              </div>
              {cart.slice(0, 2).map((item) => (
                <div key={item.id} className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700 truncate">{item.name}</span>
                  <span className="text-gray-600">Rs {(item.finalPrice * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              {cart.length > 2 && (
                <div className="text-sm text-gray-500 mt-2">+ {cart.length - 2} more items</div>
              )}
              <div className="border-t pt-3 mt-4">
                <div className="flex justify-between font-semibold text-gray-800">
                  <span>Total</span>
                  <span>Rs {cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-between">
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  toast("Order confirmation canceled", { icon: "⚠️" });
                }}
                className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmOrder}
                className="px-6 py-3 bg-gradient-to-br from-indigo-600 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all flex-1 font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Confirm & Pay"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <FiUser className="text-indigo-600" />
              Contact Information
            </h2>
            
            {/* Form Fields with improved styling */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="^\+92\d{10}$"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all pr-16"
                    onChange={handleInputChange}
                    placeholder="+923123456789"
                  />
                  <span className="absolute right-4 top-4 text-gray-400">📱</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Include country code (e.g., +92...)</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Delivery Address *</label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all pr-16"
                    onChange={handleInputChange}
                  />
                  <FiMapPin className="absolute right-4 top-4 text-gray-400 text-xl" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Country *</label>
                  <input
                    type="text"
                    name="country"
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-5 px-8 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              Proceed to Secure Checkout
            </button>
          </form>
        </div>

        {/* Enhanced Order Summary Sidebar */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-fit sticky top-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <FiShoppingCart className="text-indigo-600" />
            Order Summary
          </h2>

          <div className="space-y-6 mb-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-100">
                <div className="relative w-20 h-20 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-xl border-2 border-gray-100"
                  />
                  <span className="absolute -top-2 -right-2 bg-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Rs {item.finalPrice.toFixed(2)} each</p>
                </div>
                <p className="font-semibold text-gray-800">
                  Rs {(item.finalPrice * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-indigo-600">Rs {cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="font-semibold text-gray-800">Total</span>
              <span className="font-bold text-2xl text-gray-800">Rs {cartTotal.toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/cart"
            className="mt-8 flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Return to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;