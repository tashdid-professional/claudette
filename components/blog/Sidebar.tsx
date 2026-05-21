"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { blogs } from "@/public/datas/blogs";
import { socialLinks } from "@/public/datas/homepage";

export default function BlogSidebar() {
  // Use first 3 blogs for popular posts (mockup)
  const popularPosts = blogs.slice(0, 3);
  
  // Tags (mockup)
  const tags = ["beauty", "cosmetics", "Claudette", "online", "shop"];

  return (
    <aside className="space-y-12">
      {/* Search */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full border-b border-neutral-200 py-3 pr-10 text-[14px] focus:border-black outline-none transition-colors italic font-serif"
        />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black">
          <Search size={18} />
        </button>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] mb-6 border-b border-neutral-100 pb-2">
          Social Media
        </h4>
        <div className="space-y-2">
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-[#F0F4FC] p-3 transition-colors hover:bg-[#3b599815]">
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b5998" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-600">Facebook</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">Follow</span>
          </a>
          
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-[#FFF0F4] p-3 transition-colors hover:bg-[#e1306c15]">
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-600">Instagram</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">Follow</span>
          </a>

          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-[#F3F3F3] p-3 transition-colors hover:bg-neutral-100">
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-600">TikTok</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">Follow</span>
          </a>
        </div>
      </div>

      {/* Popular Posts */}
      <div>
        <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] mb-8 border-b border-neutral-100 pb-2">
          Popular Posts
        </h4>
        <div className="space-y-5">
          {popularPosts.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-4">
              <div className="relative w-16 h-16 shrink-0 bg-neutral-100 overflow-hidden">
                <Image 
                  src={post.image.startsWith('/') ? (post.image.startsWith('/Images') ? post.image.replace('/Images', '/images') : post.image) : post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-[13px] font-serif leading-snug hover:text-[#ef4626] transition-colors line-clamp-2">
                  {post.title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] mb-6 border-b border-neutral-100 pb-2">
          Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button key={tag} className="border border-neutral-200 px-4 py-1.5 text-[10px] uppercase tracking-widest text-neutral-500 hover:bg-[#ef4626] hover:border-[#ef4626] hover:text-white transition-all duration-300">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
