"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/public/datas/products";
import { shopHeader } from "@/public/datas/homepage";

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [mainImage, setMainImage] = useState(product?.image || "");

  // Update image when product or variant changes
  React.useEffect(() => {
    if (product) {
      if (selectedVariant) {
        setMainImage(selectedVariant.image);
      } else {
        setMainImage(product.image);
      }
    }
  }, [product, selectedVariant]);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        
        
        <div className="container mx-auto px-4 py-40 text-center">
          <h2 className="text-2xl tracking-[0.08em] uppercase">Product Not Found</h2>
          <Link href="/shop" className="mt-8 inline-block text-sm tracking-[0.08em] uppercase border-b border-black pb-1">Back to Shop</Link>
        </div>
       
      </main>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const activeGallery = selectedVariant ? selectedVariant.gallery : product.gallery;

  return (
    <main className="min-h-screen bg-white">
     

      {/* Page Header (Matching Shop) */}
      <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden  bg-[#f9f9f9] flex items-center justify-center">
        <Image
          src={shopHeader.image}
          alt="Product Header"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative text-center z-10 px-4">
          <h1 className="text-3xl md:text-5xl tracking-[0.08em] font-light uppercase mb-4">
            SHOP
          </h1>
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-[11px] tracking-[0.08em] font-medium uppercase text-[#666]">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-black line-clamp-1">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
              {activeGallery.map((img, idx) => (
                <div 
                  key={idx}
                  className={`relative w-20 h-28 md:w-24 md:h-32 flex-shrink-0 cursor-pointer border transition-all ${mainImage === img ? 'border-[#d4b1a4]' : 'border-transparent'}`}
                  onClick={() => setMainImage(img)}
                >
                  <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="order-1 md:order-2 flex-1 relative aspect-[3/4] bg-[#fcf9f9]">
              <Image src={mainImage} alt={product.name} fill className="object-cover" priority />
              {product.badge && (
                <span className="absolute top-0 right-0 bg-[#fde9e4] px-6 md:px-8 py-2 text-[10px] md:text-xs font-cormorant italic tracking-[0.08em] z-10">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-center max-w-lg">
            <h1 className="text-2xl md:text-4xl tracking-[0.08em] uppercase text-black mb-4 font-light">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              {product.oldPrice && (
                <span className="font-cormorant text-[#999] line-through text-lg md:text-xl">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
              <span className="font-cormorant text-black text-xl md:text-2xl">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <p className="text-[#a1a1a1] font-cormorant text-base md:text-lg leading-relaxed mb-8 md:mb-10 whitespace-pre-line">
              {product.description}
            </p>

            {/* Variants / Dynamic Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8 md:mb-10">
                <span className="text-[10px] md:text-[11px] tracking-[0.08em] uppercase text-black font-semibold block mb-4">
                  {product.variantType || "Choose Option"}
                </span>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-3 md:px-4 py-2 border text-[9px] md:text-[10px] tracking-[0.08em] uppercase transition-all ${
                        selectedVariant?.name === variant.name
                          ? "border-black text-black bg-white"
                          : "border-[#eee] text-[#999] hover:border-black hover:text-black"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Purchase */}
            <div className="flex items-center gap-6 mb-8 md:mb-12">
              <a 
                href={product.purchaseLink || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto px-12 bg-black text-white h-14 flex items-center justify-center text-[11px] md:text-xs tracking-[0.08em] uppercase hover:bg-[#ffffff] hover:border-black hover:border hover:text-black transition-all duration-500"
              >
                Purchase
              </a>
            </div>

            {/* Meta */}
            <div className="space-y-2 pt-6 md:pt-8 border-t border-[#eee]">
              <p className="text-[10px] md:text-[11px] tracking-[0.08em] uppercase text-black font-semibold">
                Category: <span className="font-normal text-[#777] ml-2">{product.category}</span>
              </p>
              <p className="text-[10px] md:text-[11px] tracking-[0.08em] uppercase text-black font-semibold">
                Tags: <span className="font-normal text-[#777] ml-2">{product.tags.join(", ")}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20 md:mt-32">
          <div className="flex flex-wrap justify-start gap-4 mb-2">
            <button 
              onClick={() => setActiveTab("description")}
              className={`flex-1 md:flex-none px-6 md:px-8 py-3 text-[10px] md:text-[11px] tracking-[0.08em] uppercase transition-all border ${
                activeTab === 'description' 
                ? 'text-black border-black' 
                : 'text-[#a1a1a1] border-[#eee] hover:border-[#ccc]'
              }`}
            >
              Description
            </button>
            <button 
              onClick={() => setActiveTab("videos")}
              className={`flex-1 md:flex-none px-6 md:px-8 py-3 text-[10px] md:text-[11px] tracking-[0.08em] uppercase transition-all border ${
                activeTab === 'videos' 
                ? 'text-black border-black' 
                : 'text-[#a1a1a1] border-[#eee] hover:border-[#ccc]'
              }`}
            >
              Videos
            </button>
          </div>

          <div className="py-8 md:py-12">
            {activeTab === "description" ? (
              <div className="animate-fadeIn">
                <p className="text-[#a1a1a1] font-cormorant text-base md:text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fadeIn">
                {product.videos.map((vidId, idx) => (
                  <div key={idx} className="relative aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${vidId}`}
                      title="Product Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-sm"
                    ></iframe>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-32">
            <h2 className="text-xl md:text-2xl tracking-[0.08em] uppercase text-center mb-12 md:mb-16 font-light">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      
    </main>
  );
}
