'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { BsCart3, BsPersonCircle } from 'react-icons/bs';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import CartSidebar from './CartSidebar';

const Header: React.FC = () => {
  const { cartCount, setIsCartVisible } = useCart();

  return (
    <>
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-500">
            <b className="text-purple-900">Dot</b> <span className="text-gray-500">Scent</span>
          </Link>

          {/* Icons & auth */}
          <div className="flex items-center space-x-4">
            {/* Cart button */}
            <button
              className="text-gray-700 cursor-pointer hover:text-purple-600 relative"
              onClick={() => setIsCartVisible(true)}
            >
              <BsCart3 size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* when signed out: show only the person‑icon as SignInButton */}
            <SignedOut>
              <SignInButton>
                <button className="text-gray-700 cursor-pointer hover:text-purple-600">
                  <BsPersonCircle size={20} />
                </button>
              </SignInButton>
            </SignedOut>

            {/* when signed in: show Clerk’s UserButton (avatar + menu) */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
    <CartSidebar />
   </>
  );
};

export default Header;
