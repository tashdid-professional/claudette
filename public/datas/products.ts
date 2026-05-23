export interface ProductVariant {
  name: string;
  image: string;
  gallery: string[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: "Sale" | "New";
  description: string;
  slug: string;
  tags: string[];
  gallery: string[];
  videos: string[]; // YouTube video IDs
  purchaseLink?: string;
  variantType?: string; // e.g., "Colors", "Flavors", "Sizes"
  variants?: ProductVariant[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Film Eyeshadow",
    category: "Lip Gloss",
    price: 23.0,
    oldPrice: 27.0,
    image: "/images/products/1.jpg",
    badge: "Sale",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne.",
    slug: "film-eyeshadow",
    tags: ["Cosmetic", "Make Up"],
    gallery: ["/images/products/1.jpg", "/images/products/2.jpg", "/images/products/3.jpg"],
    variantType: "Colors",
    variants: [
      {
        name: "Classic Pink",
        image: "/images/products/1.jpg",
        gallery: ["/images/products/1.jpg", "/images/products/2.jpg", "/images/products/3.jpg"]
      },
      {
        name: "Velvet Red",
        image: "/images/products/4.jpeg",
        gallery: ["/images/products/4.jpeg", "/images/products/5.jpeg"]
      },
      {
        name: "Deep Ocean",
        image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
        gallery: ["https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg", "/images/products/2.jpg"]
      }
    ],
    videos: ["vP9X2V9c3Uw", "6H85SjZ6BIA"],
    purchaseLink: "#"
  },
  {
    id: 2,
    name: "WILD PALETTES",
    category: "Lip Gloss",
    price: 25.0,
    image: "/images/products/2.jpg",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam.",
    slug: "wild-palettes",
    tags: ["Cosmetic", "Palettes"],
    gallery: ["/images/products/2.jpg", "/images/products/4.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 3,
    name: "ROSE SAFARI",
    category: "Lip Gloss",
    price: 35.0,
    image: "/images/products/3.jpg",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec.",
    slug: "rose-safari",
    tags: ["Classic", "Lipstick"],
    gallery: ["/images/products/3.jpg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 4,
    name: "SUMMER MIRAGE",
    category: "Lip Gloss",
    price: 32.0,
    image: "/images/products/4.jpeg",
    badge: "New",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "summer-mirage",
    tags: ["Summer", "Limited"],
    gallery: ["/images/products/4.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 5,
    name: "SUMMER DRAMA",
    category: "Lip Gloss",
    price: 32.0,
    image: "/images/products/5.jpeg",
    badge: "New",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "summer-drama",
    tags: ["Drama", "Intense"],
    gallery: ["/images/products/5.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 6,
    name: "VELVET MATTE",
    category: "Lipstick",
    price: 18.0,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
    badge: "Sale",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "velvet-matte",
    tags: ["Matte", "Velvet"],
    gallery: ["https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 7,
    name: "GLOW SERUM",
    category: "Skin Care",
    price: 45.0,
    image: "https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg",
    badge: "New",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "glow-serum",
    tags: ["Serum", "Glow"],
    gallery: ["https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 8,
    name: "SILK FOUNDATION",
    category: "Skin Care",
    price: 38.0,
    image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "silk-foundation",
    tags: ["Foundation", "Silk"],
    gallery: ["https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 9,
    name: "EYELASH CURLER",
    category: "Eye Care",
    price: 12.0,
    image: "https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "eyelash-curler",
    tags: ["Tools", "Curler"],
    gallery: ["https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 10,
    name: "BROW GEL",
    category: "Eye Care",
    price: 15.0,
    image: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg",
    badge: "New",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "brow-gel",
    tags: ["Brows", "Gel"],
    gallery: ["https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 11,
    name: "PEACH BLUSH",
    category: "Cheek",
    price: 22.0,
    image: "https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg",
    badge: "Sale",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "peach-blush",
    tags: ["Blush", "Peach"],
    gallery: ["https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 12,
    name: "MATTE BRONZER",
    category: "Cheek",
    price: 28.0,
    image: "https://images.pexels.com/photos/3321411/pexels-photo-3321411.jpeg",
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    slug: "matte-bronzer",
    tags: ["Bronzer", "Matte"],
    gallery: ["https://images.pexels.com/photos/3321411/pexels-photo-3321411.jpeg"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
];
