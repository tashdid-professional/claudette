import React from "react";
import { aboutData } from "@/public/datas/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero & Overlay Content Wrapper */}
      <div className="relative">
        {/* Background Image - Spans deep into the content to appear under the white block */}
        <div className="absolute  top-0 left-0 w-full h-[500px] md:h-[600px] lg:h-[550px] overflow-hidden bg-[#0F1115]">
          <Image
            src={aboutData.hero.image}
            alt="About hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Hero Header Text */}
          <section className="max-w-7xl mx-auto px-6 lg:px-20 pt-16 md:pt-28 pb-24 md:pb-40">
            <div className="max-w-4xl">
              <p className="font-sans text-[10px] md:text-[11px] tracking-[0.3em] text-white/90 uppercase font-bold mb-6 md:mb-8">
                {aboutData.hero.subtitle}
              </p>
              <h1 className="font-serif text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-white leading-[1.1] md:leading-[1.02] tracking-tight drop-shadow-lg">
                {aboutData.hero.title}
              </h1>
            </div>
          </section>

          {/* This is the white block positioned OVER the image */}
          <section className="container -mt-10 md:-mt-20 lg:-mt-32">
            <div className="bg-white max-w-7xl mx-auto py-16 md:py-32 relative lg:px-20 px-6">
              <div className="max-w-6xl mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 lg:gap-x-32 gap-y-16  ">
                  {/* Left Column */}
                  <div className="flex flex-col">
                    {aboutData.intro.left.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <div className="max-w-md">
                          <h3 className="font-sans text-[14px] md:text-[15px] font-bold text-black mb-4 tracking-tight ">
                            {item.heading}
                          </h3>
                          <p className="font-sans text-[14px] md:text-[15px] leading-relaxed  mb-10 md:mb-12">
                            {item.text}
                          </p>
                        </div>
                        {idx !== aboutData.intro.left.length - 1 && (
                          <div className="w-full h-px bg-gray-100 mb-10 md:mb-12"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  {/* Right Column */}
                  <div className="flex flex-col">
                    <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[30px] text-black mb-8 md:mb-10 leading-[1.2] tracking-tight max-w-lg">
                      {aboutData.intro.right.title}
                    </h2>
                    <div className="space-y-6 md:space-y-8 max-w-md">
                      {aboutData.intro.right.paragraphs.map((para, i) => (
                        <p key={i} className="font-sans text-[14px] md:text-[15px] leading-relaxed text-gray-700">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Dynamic Sections */}
      <div className="container space-y-10 md:space-y-20 pb-20">
        {aboutData.sections.map((section, index) => {
          if (section.type === "image-text") {
            return (
              <section key={index} className="max-w-7xl mx-auto  py-10 md:py-20 overflow-hidden">
                <div className={`flex flex-col ${section.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-24`}>
                  {/* Image Wrap */}
                  <div className="w-full md:w-1/2">
                    <div className={`relative ${section.imageLeft ? 'aspect-[4/5]' : 'aspect-square'} w-full overflow-hidden shadow-sm`}>
                      <Image
                        src={section.image!}
                        alt="About section visual"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text Wrap */}
                  <div className="w-full md:w-1/2">
                    <h2 className="font-serif text-[32px] md:text-[44px] lg:text-[54px] text-black mb-6 md:mb-10 leading-[1.1]">
                      {section.title}
                    </h2>
                    <div className="space-y-4 md:space-y-6">
                      {section.description?.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="font-sans text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          
        })}
      </div>
    </div>
  );
}

