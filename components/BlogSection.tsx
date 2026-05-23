import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { blogs } from "@/public/datas/blogs";

export default function BlogSection() {
  // Take the first 3 blogs for the section as per typical design
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="container mx-auto w-full  py-16 md:py-24 bg-white font-sans">
      <div className="mx-auto">
        {/* Header - Matching FeaturedProducts design */}
        <div className="flex justify-between items-center mb-8 ">
          <h2 className="text-xl md:text-[16px] font-medium text-[16px] text-black tracking-tight">
            Latest News
          </h2>
          <Link 
            href="/blog" 
            className="flex items-center gap-2 lg:text-[12px] font-semibold text-black hover:opacity-60 transition-opacity tracking-wider text-[8px]"
          >
            View All Posts <ChevronRight size={16} />
          </Link>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 px-1">
          {featuredBlogs.map((blog) => (
            <Link 
              key={blog.id} 
              href={`/blog/${blog.slug}`}
              className="group flex flex-col"
            >
              {/* Image Container - Updated to 16:9 ratio */}
              <div className="relative aspect-video overflow-hidden mb-6 bg-neutral-100">
                <Image
                  src={blog.image.startsWith('/') ? (blog.image.startsWith('/Images') ? blog.image.replace('/Images', '/images') : blog.image) : blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-3 mb-2 text-[10px]  font-sans font-medium uppercase tracking-[0.15em]">
                <span className="text-neutral-400">
                  {blog.day} {blog.month} 2021
                </span>
                <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                <span className="text-[#ef4626]">
                  {blog.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-serif text-neutral-900 leading-[1.4] mb-2 transition-all duration-500 ease-in-out  line-clamp-2 hover:underline  underline-offset-4">
                {blog.title}
              </h3>

              {/* Author */}
              <div className="mt-auto">
                <span className="text-[13px] italic font-serif text-neutral-500">
                  By <span className="text-neutral-900 not-italic font-sans font-medium">{blog.author}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}