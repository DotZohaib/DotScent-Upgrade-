// app/lib/database.ts

export interface Product {
  _id?: string; // Make _id optional
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  discount: number;
}

// Mock data - these would typically come from your database or API
export const FeatureFlex: Product[] = [
  // Perfumes
  {
    id: "flex-1",
    name: "RoyalBeen",
    price: 1499,
    image: "/Royalbeen.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "flex-2",
    name: "Pehchan",
    price: 1699,
    image: "/Pehchan.jpg",
    rating: 4.5,
    reviews: 98,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "flex-3",
    name: "Azar",
    price: 1499,
    image: "/Azer.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "flex-4",
    name: "Deepseek",
    price: 1499,
    image: "/Deepseek.jpg",
    rating: 4.5,
    reviews: 98,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "flex-5",
    name: "Jaanissar",
    price: 1499,
    image: "/janisaar.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "flex-6",
    name: "Parisa",
    price: 1499,
    image: "/Parisa.jpg",
    rating: 4.5,
    reviews: 98,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "flex-7",
    name: "Zawar",
    price: 1499,
    image: "/Zawar.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
];

export const FeatureCard: Product[] = [
  // Perfumes
  {
    id: "card-1",
    name: "Pehchan",
    price: 1699,
    image: "/Pehchan.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "card-2",
    name: "Zawar",
    price: 1499,
    image: "/Zawar.jpg",
    rating: 4.5,
    reviews: 98,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "card-3",
    name: "Deepseek",
    price: 1499,
    image: "/Deepseek.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "card-4",
    name: "Parisa",
    price: 1499,
    image: "/Parisa.jpg",
    rating: 4.5,
    reviews: 98,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "card-5",
    name: "Jaanissar",
    price: 1499,
    image: "/janisaar.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "card-6",
    name: "Azar",
    price: 1499,
    image: "/Azer.jpg",
    rating: 4.5,
    reviews: 98,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "card-7",
    name: "RoyalBeen",
    price: 1499,
    image: "/Royalbeen.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
];

export const FeatureBigCard: Product[] = [
  // Perfumes
  {
    id: "big-1",
    name: "RoyalBeen",
    price: 1499,
    image: "/Royalbeen.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "big-2",
    name: "Azar",
    price: 1499,
    image: "/Azer.jpg",
    rating: 4.5,
    reviews: 98,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "big-3",
    name: "Zawar",
    price: 1499,
    image: "/Zawar.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "big-4",
    name: "Parisa",
    price: 1499,
    image: "/Parisa.jpg",
    rating: 4.5,
    reviews: 98,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "big-5",
    name: "Jaanissar",
    price: 1499,
    image: "/janisaar.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "big-6",
    name: "Pehchan",
    price: 1699,
    image: "/Pehchan.jpg",
    rating: 4.5,
    reviews: 98,
    category: "Perfumes",
    discount: 0,
  },
  {
    id: "big-7",
    name: "Deepseek",
    price: 1499,
    image: "/Deepseek.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Perfumes",
    discount: 0,
  },
];

// Hero slides data
export const heroSlides = [
  {
    id: 1,
    title: "New Collection",
    subtitle: "Elevate Your Style",
    description:
      "Discover our exclusive new arrivals crafted for the modern lifestyle",

    image: "/bg4.jpg",
  },
  {
    id: 2,
    title: "Premium Fragrances",
    subtitle: "Scents That Last",
    description: "Explore our collection of luxury perfumes for every occasion",

    image: "/back.webp",
  },
  {
    id: 3,
    title: "Summer Sale",
    subtitle: "Up to 50% Off",
    description: "Limited time offers on our best-selling products",

    image: "/peh.jpg",
  },
];
