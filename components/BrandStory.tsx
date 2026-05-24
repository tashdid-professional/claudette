import React from "react";
import Image from "next/image";
import { brandStoryData } from "@/public/datas/homepage";

export default function BrandStory() {
  return (
    <section className="container  w-full  py-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Left Side - Image */}
        <div className="relative w-full h-[350px]  md:h-auto">
          <Image
            src={brandStoryData.image}
            alt={brandStoryData.title}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center bg-[#f9e2bf] px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-lg text-center flex flex-col items-center">
            <span className="text-[10px] md:text-[10px] font-sans font-semibold tracking-[0.3em] uppercase lg:mb-7 mb-5 ">
              {brandStoryData.subtitle}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-serif leading-[1.2] lg:mb-10 mb-5 0 max-w-sm md:max-w-md">
              {brandStoryData.title}
            </h1>
            
            <p className="text-[14px] md:text-[15px] leading-relaxed mb-12 font-sans max-w-xs md:max-w-sm">
              {brandStoryData.description}
            </p>
            
            <a
              href={brandStoryData.buttonLink}
              className="inline-block border border-neutral-900 px-12 py-4 text-[13px] font-sans font-bold tracking-[0.2em] uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              {brandStoryData.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}