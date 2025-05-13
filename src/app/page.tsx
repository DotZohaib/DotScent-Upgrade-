/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useState } from "react";
import {
  heroSlides,
  FeatureCard,
  FeatureBigCard,
  FeatureFlex,
} from "./lib/database";
import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Fix: Add to Cart handler with proper event prevention
  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Hero Slider Section - Responsive */}
<section className="relative h-[500px] sm:h-[600px] md:h-screen w-full overflow-hidden group">
  <div
    className="flex transition-transform duration-700 ease-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {heroSlides.map((slide) => (
      <div
        key={slide.id}
        className="relative h-[500px] sm:h-[600px] md:h-screen w-full flex-shrink-0"
      >
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover object-center md:object-left-top"
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-start">
          <div className="text-left text-white max-w-xs sm:max-w-lg md:max-w-2xl px-4 sm:px-8 md:pl-12 space-y-4 sm:space-y-6 animate-fade-in-up">
            <span className="text-sm sm:text-lg font-medium tracking-wide sm:tracking-widest block text-rose-300">
              {slide.subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-snug sm:leading-tight">
              {slide.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light text-gray-200 line-clamp-3">
              {slide.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Custom Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full hover:bg-white/30 transition-all duration-300 opacity-100 md:opacity-0 group-hover:opacity-100"
    aria-label="Previous slide"
  >
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full hover:bg-white/30 transition-all duration-300 opacity-100 md:opacity-0 group-hover:opacity-100"
    aria-label="Next slide"
  >
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>

  {/* Animated Progress Dots */}
  <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
    {heroSlides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
          index === currentSlide
            ? "bg-rose-500 scale-125"
            : "bg-white/50 hover:bg-white/80"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</section>

      <section className="container mx-auto  px-6 py-4 lg:py-24">
        <div className="flex overflow-x-auto pb-8 gap-8 scrollbar-hide">
          {FeatureFlex.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="relative min-w-[300px] h-[400px] flex-shrink-0 bg-white rounded-2xl shadow-lg 
                        hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-2/3 overflow-hidden rounded-t-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-rose-500 font-bold">
                    Rs{product.price}
                  </span>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FeatureCard Section - Grid Layout */}
      <section className="container md:-mt-24 mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {FeatureCard.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.discount > 0 && (
                  <span className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-rose-500 font-bold">
                      Rs{product.price}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-gray-400 line-through ml-2">
                        Rs
                        {(product.price / (1 - product.discount / 100)).toFixed(
                          2
                        )}
                      </span>
                    )}
                  </div>
                 <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FeatureBigCard Section - Large Cards */}
      <section className="container md:-mt-24 mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FeatureBigCard.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">Rs{product.price}</span>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
