"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { footerData, socialLinks } from "@/public/datas/homepage";
import { products } from "@/public/datas/products";

export default function Footer() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <footer className="w-full bg-[#f9e2bf] pt-20 pb-10  border-t border-black/5 font-sans">
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24 ">
        {/* About */}
        <div className="space-y-6">
          <h3 className="text-[13px] font-bold tracking-wider text-black">{footerData.about.title}</h3>
          <p className="text-[14px] leading-relaxed">
            {footerData.about.description}
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-[13px] font-bold tracking-wider text-black">{footerData.contact.title}</h3>
          <div className="space-y-6">
            {footerData.contact.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-[14px] text-black font-medium">{section.subtitle}</p>
                {section.items.map((item) => (
                  <p key={item} className="text-[14px] ">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div className="space-y-6">
          <h3 className="text-[13px] font-bold tracking-wider text-black">{footerData.shop.title}</h3>
          <ul className="space-y-3">
            {categories.map((category) => (
              <li key={category}>
                <Link 
                  href={`/shop?category=${encodeURIComponent(category)}`} 
                  className="text-[14px] hover:text-black transition-colors"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-6">
          <h3 className="text-[13px] font-bold tracking-wider text-black">{footerData.support.title}</h3>
          <ul className="space-y-3">
            {footerData.support.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-[14px] hover:text-black transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div className="space-y-6">
          <h3 className="text-[13px] font-bold tracking-wider text-black">{footerData.newsletter.title}</h3>
          <p className="text-[14px] leading-relaxed max-w-60">
            {footerData.newsletter.description}
          </p>
          <div className="relative pt-4 group">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent border-b border-black/20 pb-2 outline-none text-[14px] placeholder:text-black/30 group-focus-within:border-black transition-colors"
            />
            <button className="absolute right-0 bottom-2 text-black/40 hover:text-black transition-colors">
              <MoveRight size={20} strokeWidth={1} />
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Bottom Bar */}
      <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[13px] text-center md:text-left">
          © Claudette  {new Date().getFullYear()} - Powered by <a href="https://thebigdogdigital.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:underline">BigDog Digital</a>.
        </div>
        
        <div className="flex gap-6">
          {Object.entries(socialLinks).map(([key, url]) => (
            <a 
              key={key} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[13px] text-black hover:text-black/60 transition-colors capitalize"
            >
              {key}
            </a>
          ))}
        </div>
      </div>
      </div>

    </footer>
  );
}
