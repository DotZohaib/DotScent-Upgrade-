/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// product/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import {
  FeatureFlex,
  FeatureCard,
  FeatureBigCard,
  Product,
} from "../../lib/database";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const allProducts = [...FeatureFlex, ...FeatureCard, ...FeatureBigCard];
  const product = allProducts.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product)
    return <div className="text-center py-24">Product not found</div>;

  const suggestedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8 md:mt-20">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <div className="space-y-2">
            {product.discount > 0 ? (
              <>
                <div className="text-3xl font-bold text-rose-600">
                  Rs{(product.price * (1 - product.discount / 100)).toFixed(2)}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl line-through text-gray-500">
                    Rs{product.price.toFixed(2)}
                  </span>
                  <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">
                    Save {product.discount}%
                  </span>
                </div>
              </>
            ) : (
              <div className="text-3xl font-bold">
                Rs{product.price.toFixed(2)}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center">
              ★ {product.rating}
              <span className="ml-1 text-sm">({product.reviews} reviews)</span>
            </span>
            <span>•</span>
            <span>{product.category}</span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-rose-600 text-white py-4 rounded-xl hover:bg-rose-700 transition-colors"
          >
           <Link href="/cart"> Add to Cart</Link>
          </button>
        </div>
      </div>

      {/* Suggested Products */}
      <section className="border-t pt-12">
        <h2 className="text-2xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-csspan-3 lg:grid-cols-4 gap-6">
          {suggestedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                {product.discount > 0 && (
                  <span className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">
                    Rs
                    {(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  {product.discount > 0 && (
                    <span className="text-gray-400 line-through text-sm">
                      Rs{product.price.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
