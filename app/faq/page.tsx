"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { legalData } from "@/public/datas/homepage";

export default function FAQPage() {
  const { faq } = legalData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="container min-h-screen bg-white">
        <hr className="text-gray-300 pb-15 "></hr>
      <div className=" max-w-4xl ">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-12 text-[11px] uppercase tracking-[0.2em] text-[#a1a1a1] font-medium">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">FAQ</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif text-black mb-12 leading-tight">
          {faq.title}
        </h1>

        <div className="divide-y divide-black/5">
          {faq.questions.map((item, idx) => (
            <div key={idx} className="py-8">
              <button 
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between text-left group"
              >
                <h2 className="text-xl md:text-2xl font-serif text-black group-hover:text-[#ef4626] transition-colors pr-8">
                  {item.question}
                </h2>
                <div className="flex-shrink-0">
                  {openIndex === idx ? (
                    <Minus size={20} className="text-black" />
                  ) : (
                    <Plus size={20} className="text-[#a1a1a1] group-hover:text-black transition-colors" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6">
                      <p className="text-[#333] font-sans text-[15px] leading-[1.8] whitespace-pre-line max-w-3xl">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

