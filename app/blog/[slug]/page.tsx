"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogs } from "@/public/datas/blogs";
import BlogSidebar from "@/components/blog/Sidebar";

export default function BlogDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Blog Not Found</h1>
          <Link href="/blog" className="text-[#ef4626] border-b border-[#ef4626] pb-1 uppercase tracking-widest text-[12px] font-bold">Back to News</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen font-sans">
    
      <hr className="text-gray-300"></hr>
      {/* Content Section */}
      <section className="pb-16 md:pb-20 container pt-10">
        <div className=" flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar - Desktop Left, Mobile Bottom */}
          <div className="w-full lg:w-1/4 order-2 lg:order-1 ">
            <BlogSidebar />
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 order-1 lg:order-2">
            <div className="relative aspect-video overflow-hidden mb-8 bg-neutral-50">
              <Image
                src={blog.image.startsWith('/') ? (blog.image.startsWith('/Images') ? blog.image.replace('/Images', '/images') : blog.image) : blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Detailed Meta */}
              <div className="flex items-center gap-4 text-[11px] font-sans font-medium uppercase tracking-[0.15em] text-neutral-500">
                 <span>{blog.month} {blog.day}, 2024</span>
                 <span className="w-1.5 h-px bg-neutral-300" />
                 <span className="text-[#ef4626]">{blog.category}</span>
                 <span className="w-1.5 h-px bg-neutral-300" />
                 <span>By {blog.author}</span>
              </div>

            <div className="my-4">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-serif  mb-6 leading-tight">
                {blog.title}
              </h1>
              
              
            </div>

            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-600 text-[16px] md:text-[18px] leading-[1.8] mb-8">
                {blog.description}
              </p>
              
              {/* This space is for future-proofing with more content if needed */}
              <div className="mt-12 pt-12 border-t border-neutral-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                 <div className="flex items-center gap-4">
                    <span className="text-[12px] font-bold uppercase tracking-widest">Tags:</span>
                    <div className="flex gap-2">
                       <span className="px-3 py-1 bg-neutral-100 text-[10px] uppercase font-bold tracking-tighter text-neutral-500">{blog.category}</span>
                       <span className="px-3 py-1 bg-neutral-100 text-[10px] uppercase font-bold tracking-tighter text-neutral-500">Beauty</span>
                    </div>
                 </div>
              </div>

              {/* Comment Section */}
              <div className="mt-20 pt-16 border-t border-neutral-100">
                <h3 className="text-3xl font-serif mb-8 text-neutral-900">Leave a Reply</h3>
                <p className="text-[14px] text-neutral-500 mb-8 italic">Your email address will not be published. Required fields are marked *</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="Name *" 
                        className="w-full border border-neutral-200 px-5 py-4 text-[14px] focus:border-neutral-900 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="email" 
                        placeholder="Email *" 
                        className="w-full border border-neutral-200 px-5 py-4 text-[14px] focus:border-neutral-900 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="Website" 
                        className="w-full border border-neutral-200 px-5 py-4 text-[14px] focus:border-neutral-900 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <textarea 
                      placeholder="Comment *" 
                      rows={6}
                      className="w-full border border-neutral-200 px-5 py-4 text-[14px] focus:border-neutral-900 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="save-info" className="w-4 h-4 accent-neutral-900" />
                    <label htmlFor="save-info" className="text-[13px] text-neutral-500 select-none">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="bg-neutral-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#ef4626] transition-colors duration-300"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
