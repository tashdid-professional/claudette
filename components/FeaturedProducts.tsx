"use client";

import { products } from "@/public/datas/products";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive items per page
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Auto-slide on mobile only
  useEffect(() => {
    if (itemsPerPage !== 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(timer);
  }, [itemsPerPage]);
  
  // Clone products for loop
  const extendedProducts = [
    ...products.slice(-itemsPerPage),
    ...products,
    ...products.slice(0, itemsPerPage),
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="featured-products" className="container mx-auto w-full py-16 md:py-24 bg-white px-10 lg:px-16 relative font-sans">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8 px-4">
        <h2 className="text-xl md:text-[16px] font-medium text-[16px] text-black tracking-tight">
          Best Seller Products
        </h2>
        <Link 
          href="/shop" 
          className="flex items-center gap-2 lg:text-[12px] font-semibold text-black hover:opacity-60 transition-opacity  tracking-wider text-[8px]"
        >
          View All Products <ChevronRight size={16} />
        </Link>
      </div>

      {/* Products Slider Container */}
      <div className="relative group px-1">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex + itemsPerPage) * (100 / itemsPerPage)}%)`,
              }}
            >
              {extendedProducts.map((product, index) => (
                <div key={`${product.id}-${index}`} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 lg:-left-20 top-[40%] md:top-[35%] -translate-y-1/2 text-black/20 hover:text-black transition-colors z-20"
          >
            <ChevronLeft size={60} strokeWidth={0.5} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 lg:-right-20 top-[40%] md:top-[35%] -translate-y-1/2 text-black/20 hover:text-black transition-colors z-20"
          >
            <ChevronRight size={60} strokeWidth={0.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
