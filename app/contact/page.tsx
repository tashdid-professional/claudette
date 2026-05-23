"use client";

import React, { useState } from "react";
import Link from "next/link";
import { contactPageData } from "@/public/datas/homepage";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data ready for submission:", formData);
    alert("Thank you! Your message has been prepared for submission.");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="bg-[#fdf9f7] py-20 md:py-32 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <nav className="flex justify-center items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a1a1a1] mb-8 font-medium">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </nav>
          
          <h1 className="text-5xl md:text-[80px] font-serif text-[#ef4626] mb-10 leading-none">
            {contactPageData.hero.title}
          </h1>
          
          <p className="font-sans text-[15px] leading-relaxed max-w-3xl mx-auto ">
            {contactPageData.hero.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Left Column: Form */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-[40px] font-serif mb-6 leading-tight">
                {contactPageData.form.title}
              </h2>
              <p className="font-sans text-base  mb-12 max-w-md">
                {contactPageData.form.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[11px] uppercase tracking-widest font-semibold text-black">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-[#eee] px-4 py-3 focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[11px] uppercase tracking-widest font-semibold text-black">
                      Your email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-[#eee] px-4 py-3 focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[11px] uppercase tracking-widest font-semibold text-black">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-[#eee] px-4 py-3 focus:outline-none focus:border-black transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[11px] uppercase tracking-widest font-semibold text-black">
                    Your message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-[#eee] px-4 py-4 focus:outline-none focus:border-black transition-colors resize-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-black text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#333] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Info */}
            <div className="order-1 lg:order-2 flex flex-col justify-start  ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
                <div>
                  <span className="text-[15px] uppercase tracking-[0.1em] text-[#ccc] font-bold block mb-2">Email</span>
                  <a href={`mailto:${contactPageData.sidebar.email}`} className="text-[#000] font-bold  md:text-[15px] hover:text-[#ef4626] transition-colors break-words">
                    {contactPageData.sidebar.email}
                  </a>
                </div>
                <div>
                  <span className="text-[15px] uppercase tracking-[0.1em] text-[#ccc] font-bold block mb-2">Fax</span>
                  <p className="text-[#000] font-bold md:text-[15px]">
                    {contactPageData.sidebar.fax}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
