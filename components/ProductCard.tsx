import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/public/datas/products";
import { Eye, X } from "lucide-react";
import { createPortal } from "react-dom";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  const closeQuickView = (e: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsQuickViewOpen(false);
  };

  return (
    <>
      <div className="text-left block relative group">
        <Link href={`/product/${product.slug}`}>
          {/* Image Container */}
          <div className="relative aspect-4/5 bg-[#f7f7f7] flex items-center justify-center mb-6 overflow-hidden group/image">
            {product.oldPrice && (
              <div className="absolute top-4 left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center z-10">
                <span className="text-white text-[13px] font-bold">
                  {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </span>
              </div>
            )}
            
            {/* Product Image */}
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={`object-cover transition-opacity duration-700 ${
                  product.gallery?.[1] ? "group-hover/image:opacity-0" : "group-hover/image:scale-105"
                }`}
              />
              {product.gallery?.[1] && (
                <Image
                  src={product.gallery[1]}
                  alt={`${product.name} alternate view`}
                  fill
                  className="object-cover opacity-0 group-hover/image:opacity-100 transition-opacity duration-700"
                />
              )}
            </div>

            {/* Quick View Button on Hover - Top Right */}
            <div className="absolute top-4 right-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-20">
              <button
                onClick={openQuickView}
                className="w-8 h-8 bg-white  flex items-center justify-center text-black shadow-md hover:bg-black hover:text-white transition-all duration-300"
                title="Quick View"
              >
                <Eye size={15} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-1.5 px-1">
            <p className="text-[10px] font-medium tracking-[0.1em] text-[#ef4626] uppercase">
              {product.category}
            </p>
            <h3 className="text-[14px] font-semibold text-black leading-tight group-hover:text-black/70 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              {product.oldPrice && (
                <span className="text-[14px] text-gray-400 line-through decoration-black/20">
                  £{product.oldPrice.toFixed(2)}
                </span>
              )}
              <span className="text-[14px] text-black">
                £{product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && isMounted && createPortal(
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={closeQuickView}
          />
          <div className="relative bg-white w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300 rounded-sm">
            <button 
              onClick={closeQuickView}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm md:bg-transparent rounded-full hover:rotate-90 transition-transform duration-300 text-gray-500 hover:text-black"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>

            <div className="w-full md:w-1/2 aspect-4/5 relative bg-[#fcf9f9] shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white">
              <div className="mb-6">
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.08em] mb-2 block font-medium text-gray-500">
                  {product.category}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] text-black uppercase mb-3 md:mb-4 leading-tight">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  {product.oldPrice && (
                    <span className="text-lg md:text-xl text-gray-400 line-through font-dm-sans">
                      £{product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xl md:text-2xl text-[#1a1a1a] font-dm-sans">
                    £{product.price.toFixed(2)}
                  </span>
                </div>
                <div className="w-12 h-px bg-[#d4b1a4] mb-4 md:mb-6" />
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-light mb-6 md:mb-8 italic">
                  Take a closer look at our {product.name.toLowerCase()}. This elegant piece from our {product.category.toLowerCase()} collection is designed for those who appreciate refined beauty and exceptional quality.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:gap-4 mt-auto">
                <Link 
                  href={`/product/${product.slug}`}
                  className="w-full bg-[#1a1a1a] text-white text-center py-4 text-[12px] uppercase tracking-[0.08em] border border-[#1a1a1a] hover:bg-white hover:border-black hover:text-black transition-colors duration-500"
                >
                  View Details
                </Link>
                <a 
                  href={product.purchaseLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-gray-200 text-[#1a1a1a] text-center py-4 text-[11px] md:text-[12px] uppercase tracking-[0.08em] hover:border-black transition-colors duration-500"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
