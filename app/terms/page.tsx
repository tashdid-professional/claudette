import React from "react";
import Link from "next/link";
import { legalData } from "@/public/datas/homepage";

export default function TermsPage() {
  const { terms } = legalData;

  return (
    
    <main className="container min-h-screen bg-white ">
        <hr className="text-gray-300 pb-15 "></hr>
      <div className=" max-w-4xl ">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-12 text-[11px] uppercase tracking-[0.2em] text-[#a1a1a1] font-medium">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">{terms.title}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif text-black mb-12 leading-tight">
          {terms.title}
        </h1>

        <div className="space-y-12">
          {terms.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-serif text-black">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-[#333] font-sans text-[15px] leading-[1.8] whitespace-pre-line">
                  {section.content}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
