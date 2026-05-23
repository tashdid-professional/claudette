import React from "react";
import Image from "next/image";
import { bannerData } from "@/public/datas/homepage";

export default function Banner() {
  return (
    <section className="bg-white lg:px-15 px-5 pb-12 w-full">
      <div className="relative w-full h-[400px] md:h-[570px] overflow-hidden ">
        {/* Background Image */}
        <Image
          src={bannerData.image}
          alt={bannerData.title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay - Subtle darken for text readability */}
        <div className="absolute inset-0 bg-black/5" />

        {/* Content Container */}
        <div className="container  relative h-full  flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <p className="text-[10px] md:text-[10px] font-semibold tracking-[0.25em] uppercase mb-4 opacity-90">
              {bannerData.subtitle}
            </p>
            
            <h1 className="text-3xl md:text-4xl lg:text-[72px] font-serif leading-[1.15] mb-6">
              {bannerData.title}
            </h1>
            
            <p className="hidden md:block text-sm md:text-[16px] leading-relaxed mb-8 max-w-lg opacity-90 font-sans ">
              {bannerData.description}
            </p>
            
            <a
              href={bannerData.buttonLink}
              className="inline-block border border-white px-8 py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              {bannerData.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
