/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 mt-12 md:mt-20 min-h-screen max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-8 md:py-12">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link href="/" className="text-rose-500 hover:text-rose-600">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 border-b pb-4 md:pb-6"
              >
                <div className="relative w-full md:w-32 h-32 md:h-32 aspect-square">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 150px"
                  />
                </div>
                <div className="flex-1 w-full">
                  <h2 className="text-lg md:text-xl font-semibold mb-2 truncate">{item.name}</h2>
                  <p className="text-gray-600 mb-4">
                    Rs{item.finalPrice.toFixed(2)}
                  </p>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-4 py-2 md:px-3 md:py-1 bg-gray-100 rounded-lg"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-4 py-2 md:px-3 md:py-1 bg-gray-100 rounded-lg"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-lg font-semibold md:hidden">
                        Rs{(item.finalPrice * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm md:text-base"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-lg font-semibold">
                    Rs{(item.finalPrice * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-4 md:p-6 rounded-xl h-fit md:sticky md:top-8">
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Order Summary</h2>
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-base md:text-lg mb-4 md:mb-6">
              <span>Total</span>
              <span>Rs{cartTotal.toFixed(2)}</span>
            </div>
            <Link
              href="/Checkout"
              className="w-full inline-block text-center bg-rose-500 text-white py-3 md:py-4 px-4 rounded-xl hover:bg-rose-600 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;