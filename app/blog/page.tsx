"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { blogs } from "@/public/datas/blogs";
import { socialLinks } from "@/public/datas/homepage";
import BlogSidebar from "@/components/blog/Sidebar";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Page Header */}
      <section className="bg-[#FCF6F4] py-16 md:py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <nav className="flex justify-center items-center gap-2 text-[12px] uppercase tracking-widest text-neutral-400 mb-6 font-medium">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            <span className="text-neutral-900">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-[80px] font-serif text-[#ef4626] mb-8">
            Our News
          </h1>
          <p className=" text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar - Desktop Left, Mobile Bottom */}
          <div className="w-full lg:w-1/4 order-2 lg:order-1 ">
            <BlogSidebar />
          </div>

          {/* Main Blog List */}
          <div className="w-full lg:w-3/4 order-1 lg:order-2">
            <div className="space-y-20">
              {currentBlogs.map((blog) => (
                <article key={blog.id} className="">
                  {/* Featured Image */}
                  <Link href={`/blog/${blog.slug}`} className="block relative aspect-video overflow-hidden mb-8 bg-neutral-50">
                    <Image
                      src={blog.image.startsWith('/') ? (blog.image.startsWith('/Images') ? blog.image.replace('/Images', '/images') : blog.image) : blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </Link>

                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-4 text-[11px] font-sans font-medium uppercase tracking-[0.15em]">
                    <span className="text-neutral-400">
                      {blog.month} {blog.day}, 2021
                    </span>
                    <span className="w-1.5 h-px bg-neutral-300" />
                    <span className="text-[#ef4626]">
                      {blog.category}
                    </span>
                    <span className="w-1.5 h-px bg-neutral-300" />
                    <span className="text-neutral-500">
                      {blog.isFeatured ? 'Trending' : 'Online'}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${blog.slug}`}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 leading-tight hover:text-[#ef4626] transition-colors">
                      {blog.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-[15px] leading-[1.8] mb-8 max-w-4xl">
                    {blog.description.substring(0, 180)}...
                  </p>

                  {/* Read More Button */}
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="inline-block border border-neutral-300 px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-800 hover:bg-[#ef4626] hover:border-[#ef4626] hover:text-white transition-all duration-300"
                  >
                    Read More
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-20 flex items-center justify-center gap-2">
                <button 
                  onClick={() => {
                    setCurrentPage(prev => Math.max(prev - 1, 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="p-3 border border-neutral-200 text-neutral-400 hover:border-black hover:text-black transition-all disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:text-neutral-400"
                >
                  <ChevronLeft size={18} />
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-11 h-11 text-[13px] font-bold transition-all border ${
                      currentPage === i + 1 
                      ? "bg-[#ef4626] border-[#ef4626] text-white" 
                      : "border-neutral-200 text-neutral-600 hover:border-black hover:text-black"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  onClick={() => {
                    setCurrentPage(prev => Math.min(prev + 1, totalPages));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className="p-3 border border-neutral-200 text-neutral-400 hover:border-black hover:text-black transition-all disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:text-neutral-400"
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
