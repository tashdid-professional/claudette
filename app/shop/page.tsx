"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, LayoutGrid, List, ChevronDown, Plus, ChevronLeft } from "lucide-react";
import { products } from "@/public/datas/products";
import ProductCard from "@/components/ProductCard";
import { shopHeader } from "@/public/datas/homepage";

export default function ShopPage() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("a-z");
  const productsPerPage = 9; // 3 rows * 3 columns on desktop

  // Filter products by category
  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;

  // Apply Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "a-z":
        return a.name.localeCompare(b.name);
      case "z-a":
        return b.name.localeCompare(a.name);
      case "low-high":
        return a.price - b.price;
      case "high-low":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filtering
    window.scrollTo({ top: 400, behavior: "smooth" });
  };
  
  // Extract unique categories and their counts
  const categories = Array.from(new Set(products.map(p => p.category))).map(cat => ({
    name: cat,
    count: products.filter(p => p.category === cat).length
  }));

  const bannerCategories = ["Face", "Hair Styling", "Lips", "Skincare"];

  return (
    <main className="bg-white min-h-screen">
      {/* Dynamic Banner */}
      <section className="px-6 md:px-10 lg:px-16 mt-6 md:mt-10">
        <div className="relative h-[75vh] min-h-100 flex items-center justify-center text-center px-6 overflow-hidden">
          {/* Background Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={shopHeader.image} 
              alt={shopHeader.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="container mx-auto relative z-10 text-white max-w-4xl">
            <nav className="flex justify-center items-center gap-2 text-[12px] uppercase tracking-widest text-white/80 mb-6 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <span>{shopHeader.breadcrumb}</span>
            </nav>
            
            <h1 className="text-5xl md:text-[100px] font-serif mb-8 leading-none">
              {shopHeader.title}
            </h1>
            
            <p className="text-[14px] md:text-[15px] leading-relaxed max-w-3xl mx-auto text-white/90">
              {shopHeader.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 container lg:py-24">
        <div className=" mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar - Product Categories Only */}
          <aside className="w-full lg:w-1/4 space-y-12">
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-10 pb-4 border-b border-neutral-100">
                Product Categories
              </h4>
              <ul className="space-y-5">
                <li 
                  onClick={() => handleCategorySelect(null)}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3.5 h-3.5 border transition-colors ${selectedCategory === null ? "bg-black border-black" : "border-neutral-300 group-hover:border-black"}`} />
                    <span className={`text-[13px] transition-colors font-medium ${selectedCategory === null ? "text-black" : "text-neutral-600 group-hover:text-black"}`}>All Products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] text-neutral-400">({products.length})</span>
                    <Plus size={14} className="text-neutral-400 group-hover:text-black transition-colors" />
                  </div>
                </li>
                {categories.map((cat) => (
                  <li 
                    key={cat.name} 
                    onClick={() => handleCategorySelect(cat.name)}
                    className="flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3.5 h-3.5 border transition-colors ${selectedCategory === cat.name ? "bg-black border-black" : "border-neutral-300 group-hover:border-black"}`} />
                      <span className={`text-[13px] transition-colors font-medium ${selectedCategory === cat.name ? "text-black" : "text-neutral-600 group-hover:text-black"}`}>{cat.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] text-neutral-400">({cat.count})</span>
                      <Plus size={14} className="text-neutral-400 group-hover:text-black transition-colors" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="w-full lg:w-3/4">
            
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div className="flex items-center">
                <button 
                  onClick={() => setViewType("grid")}
                  className={`border border-neutral-200 p-2.5 transition-colors ${viewType === "grid" ? "bg-[#f8f8f8] text-black" : "text-neutral-400 hover:text-black"}`}
                >
                  <LayoutGrid size={18} />
                </button>
               
              </div>

              <div className="relative w-full md:w-auto min-w-[220px]">
                <select 
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none border border-neutral-200 px-5 py-2.5 text-[13px] outline-none focus:border-black transition-colors bg-white pr-10 text-neutral-600 cursor-pointer"
                >
                  <option value="a-z">Alphabetically, A-Z</option>
                  <option value="z-a">Alphabetically, Z-A</option>
                  <option value="low-high">Price, low to high</option>
                  <option value="high-low">Price, high to low</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-20 flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-11 h-11 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:bg-[#ef4626] hover:text-white hover:border-[#ef4626] transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-neutral-400 disabled:hover:border-neutral-200"
                >
                  <ChevronLeft size={18} />
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-11 h-11 border text-[13px] font-bold transition-all duration-300 ${
                      currentPage === i + 1 
                      ? "bg-[#ef4626] border-[#ef4626] text-white" 
                      : "border-neutral-200 text-neutral-600 hover:bg-[#ef4626] hover:border-[#ef4626] hover:text-white"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-11 h-11 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:bg-[#ef4626] hover:text-white hover:border-[#ef4626] transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-neutral-400 disabled:hover:border-neutral-200"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
