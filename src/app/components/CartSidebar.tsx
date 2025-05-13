// components/CartSidebar.tsx
"use client"

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const CartSidebar = () => {
  const { isCartVisible, setIsCartVisible, cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartVisible) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl z-50 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <button
          onClick={() => setIsCartVisible(false)}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </div>
      
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Rs{item.finalPrice.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-100 rounded"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-100 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">Rs{cartTotal.toFixed(2)}</span>
            </div>
            <Link
              href="/cart"
              className="block w-full bg-rose-500 text-white py-3 rounded hover:bg-rose-600 text-center"
              onClick={() => setIsCartVisible(false)}
            >
              View Full Cart
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;