// app/lib/database.ts

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    isWishlisted: boolean;
    category: string;
    description: string;
    discount?: number;
    date?: string;
    isNew?: boolean;
    stock?: number; // Added stock property
    recentlyAdded?: string; // Add this property
  }
  
  // Mock data - these would typically come from your database or API
  export const products: Product[] = [
    // Perfumes
    {
      id: 'perfume-1',
      name: 'RoyalBeen',
      price: 0,
      image: '/images/R.jpg',
      rating: 4.8,
      reviews: 142,
      isWishlisted: false,
      category: 'Perfumes',
      description: 'A captivating floral fragrance with notes of jasmine, lily, and amber that lasts all day.'
    },
    {
      id: 'perfume-2',
      name: 'Parisa',
      price: 120.00,
      image: '/images/Parisa.jpeg',
      rating: 4.5,
      reviews: 95,
      isWishlisted: false,
      category: 'Perfumes',
      discount: 15,
      description: 'A seductive blend of vanilla, oud, and black pepper for an unforgettable evening scent.'
    },
    {
      id: 'perfume-3',
      name: 'Deepseek',
      price: 120.00,
      image: '/images/Deepseek.jpeg',
      rating: 4.5,
      reviews: 98,
      isWishlisted: false,
      category: 'Perfumes',
      discount: 15,
      description: 'A seductive blend of vanilla, oud, and black pepper for an unforgettable evening scent.'
    },
    {
      id: 'perfume-4',
      name: 'Jaannisar',
      price: 120.00,
      image: '/images/Jaannisar.jpeg',
      rating: 4.5,
      reviews: 98,
      isWishlisted: false,
      category: 'Perfumes',
      discount: 15,
      description: 'A seductive blend of vanilla, oud, and black pepper for an unforgettable evening scent.'
    },
    {
      id: 'perfume-5',
      name: 'Pehchan',
      price: 120.00,
      image: '/images/Pehchan.jpg',
      rating: 4.5,
      reviews: 98,
      isWishlisted: false,
      category: 'Perfumes',
      discount: 15,
      description: 'A seductive blend of vanilla, oud, and black pepper for an unforgettable evening scent.'
    },
    {
      id: 'perfume-6',
      name: 'Zawar',
      price: 120.00,
      image: '/images/Zawar.jpg',
      rating: 4.5,
      reviews: 98,
      isWishlisted: false,
      category: 'Perfumes',
      discount: 15,
      description: 'A seductive blend of vanilla, oud, and black pepper for an unforgettable evening scent.'
    },
    {
      id: 'perfume-7',
      name: 'BeMolds',
      price: 120.00,
      image: '/images/Bemolds.jpg',
      rating: 4.5,
      reviews: 98,
      isWishlisted: false,
      category: 'Perfumes',
      discount: 15,
      description: 'A seductive blend of vanilla, oud, and black pepper for an unforgettable evening scent.'
    },
    {
      id: 'perfume-8',
      name: 'Azar',
      price: 120.00,
      image: '/images/Azar.jpg',
      rating: 4.5,
      reviews: 98,
      isWishlisted: false,
      category: 'Perfumes',
      discount: 15,
      description: 'A seductive blend of vanilla, oud, and black pepper for an unforgettable evening scent.'
    },
  
    // Covers
    {
      id: 'cover-1',
      name: 'iPhone 15 Pro Clear Case',
      price: 29.99,
      image: 'https://www.otterbox.com/dw/image/v2/BGMS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw00c68fce/productimages/dis/cases-screen-protection/symmetry-magsafe-iphd23/symmetry-magsafe-iphd23-clear-1.png?sw=800&sh=800',
      rating: 4.7,
      reviews: 83,
      isWishlisted: false,
      category: 'Covers',
      description: 'Crystal clear protection with MagSafe compatibility for your iPhone 15 Pro.'
    },
    {
      id: 'cover-2',
      name: 'MacBook Pro 16" Hardshell Case',
      price: 49.99,
      image: 'https://i5.walmartimages.com/seo/ELEHOLD-iPhone-14-Premium-Metal-Frameless-Bumper-Case-Luxury-Ring-Kickstand-Magnetic-Holder-Shockproof-Anti-Scratch-Slim-Borderless-Protective-Case-1_12248bf5-4b3e-4aa1-98cf-fb65f72ed3fa.fd86f42dec30fcbeb24c14771ea2fb9a.jpeg',
      rating: 4.3,
      reviews: 78,
      isWishlisted: false,
      category: 'Covers',
      discount: 10,
      description: 'Sleek protection for your MacBook Pro that shields against scratches and minor drops.'
    },
  
    // Shoes
    {
      id: 'shoe-1',
      name: 'UltraBoost Running Shoes',
      price: 129.99,
      image: 'https://i1.adis.ws/i/canon/pro-fashion-photography-technique-tips-1-new_e6eef04e6fe9434e9d9427a0220ef27c.jpeg',
      rating: 4.8,
      reviews: 215,
      isWishlisted: false,
      category: 'Shoes',
      discount: 15,
      description: 'Premium running shoes with responsive cushioning for ultimate comfort on any surface.'
    },
    {
      id: 'shoe-2',
      name: 'Suede Chelsea Boots',
      price: 119.99,
      image: 'https://thehouseofrare.com/cdn/shop/files/SAURONHIPROBLACKcopy.jpg?v=1743763988',
      rating: 4.7,
      reviews: 63,
      isWishlisted: false,
      category: 'Shoes',
      discount: 5,
      description: 'Classic suede Chelsea boots that blend comfort with timeless style.'
    },
  
    // Clothes
    {
      id: 'cl1',
      name: 'Essential Cotton T-Shirt',
      price: 24.99,
      discount: 0,
      rating: 4.6,
      reviews: 218,
      isNew: false,
      isWishlisted: false,
      category: 'Clothes',
      image: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/n/26/1ec5e449-1313-453f-8a3a-cdb1da190a51.jpg',
      description: 'Premium organic cotton tee with a classic fit and reinforced seams for durability.',
    },
    {
      id: 'cl2',
      name: 'Slim Fit Chino Pants',
      price: 59.99,
      discount: 10,
      rating: 4.5,
      reviews: 156,
      isNew: false,
      isWishlisted: true,
      category: 'Clothes',
      image: 'https://c8.alamy.com/comp/2M45X77/fashion-red-aesthetic-and-woman-with-lipstick-in-studio-for-beauty-products-designer-cosmetics-and-makeup-creative-art-luxury-clothes-and-portrait-2M45X77.jpg',
      description: 'Versatile stretch chinos perfect for casual and semi-formal occasions.',
    },
  ];
  
  // Helper functions for product data access
  export const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };
  
  export const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };
  
  export const getRelatedProducts = (product: Product, limit = 4) => {
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, limit);
  };
  
  export const getRecommendedProducts = (excludeIds: string[] = [], limit = 4) => {
    return products
      .filter(p => !excludeIds.includes(p.id))
      .sort(() => 0.5 - Math.random())
      .slice(0, limit);
  };
  
  // Categories data
  export const categories = [
    {
      name: 'Perfumes',
      image: 'https://png.pngtree.com/png-clipart/20241208/original/pngtree-perfume-bottle-golden-metallic-floral-design-spray-nozzle-elegant-luxury-fragrance-png-image_17735067.png',
      description: 'Discover signature scents for every occasion',
      link: '/category/Perfumes'
    },
    {
      name: 'Covers',
      image: 'https://www.sandmarc.com/cdn/shop/files/ProLeatherCase-BlackonBlack-iPhone15Pro-1_631fbd11-9f60-4dfd-b25d-93005c4aa0eb_1800x.jpg?v=1742869439',
      description: 'Protect your devices with style and durability',
      link: '/category/Covers'
    },
    {
      name: 'Shoes',
      image: 'https://imgv3.fotor.com/images/share/ai-product-photography.jpg',
      description: 'Step up your footwear game with trendy options',
      link: '/category/Shoes'
    },
    {
      name: 'Clothes',
      image: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/n/26/1ec5e449-1313-453f-8a3a-cdb1da190a51.jpg',
      description: 'Elevate your wardrobe with our latest collections',
      link: '/category/Clothes'
    }
  ];             
  // Hero slides data
  export const heroSlides = [
    {
      id: 1,
      title: 'New Collection',
      subtitle: 'Elevate Your Style',
      description: 'Discover our exclusive new arrivals crafted for the modern lifestyle',
      cta: 'Shop Now',
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/articles/best_20shopify_20themes_501b359b-8ddf-49ad-a3b8-699e76e919da.png?v=1743394980',
      link: '/category/all/new-arrivals',
      badge: 'New-arrivals', // Added badge property
    },
    {
      id: 2,
      title: 'Premium Fragrances',
      subtitle: 'Scents That Last',
      description: 'Explore our collection of luxury perfumes for every occasion',
      cta: 'View Collection',
      image: 'https://img.pikbest.com/backgrounds/20250324/luxury-perfume-bottle-product-photography--e2-80-93-elegant-and-aesthetic-fragrance-advertisement_11623490.jpg!w700wp',
      link: '/category/Perfumes',
      badge: 'Perfumes', // Added badge property
    },
    {
      id: 3,
      title: 'Summer Sale',
      subtitle: 'Up to 50% Off',
      description: 'Limited time offers on our best-selling products',
      cta: 'Shop Sale',
      image: 'https://cdn.shopify.com/theme-store/qqrj9a31u866mp8bkjw0ixc91urx.jpg',
      link: '/category/all/sale',
      badge: 'Limited Offer', // Added badge property
    },
  ];