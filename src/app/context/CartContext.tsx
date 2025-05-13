// context/CartContext.tsx
"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../lib/database';

interface CartItem {
  id: string;
  name: string;
  price: number;
  finalPrice: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  isCartVisible: boolean;
  setIsCartVisible: (visible: boolean) => void;
  addToCart: (product: Product) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let newCart: CartItem[];
    
    if (existingItem) {
      newCart = cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        finalPrice: product.price * (1 - (product.discount || 0) / 100),
        quantity: 1,
        image: product.image
      };
      newCart = [...cart, newItem];
    }
    
    saveCart(newCart);
  };

  const updateQuantity = (id: string, quantity: number) => {
    const newCart = cart.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    );
    saveCart(newCart);
  };

  const removeFromCart = (id: string) => {
    const newCart = cart.filter(item => item.id !== id);
    saveCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.reduce((count, item) => count + item.quantity, 0),
        isCartVisible,
        setIsCartVisible,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartTotal: cart.reduce((total, item) => 
          total + (item.finalPrice * item.quantity), 0)
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};