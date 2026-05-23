"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingBag, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { socialLinks } from "@/public/datas/homepage";
import { products } from "@/public/datas/products";
import { useRouter } from "next/navigation";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isSearchOpen || isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSearchOpen, isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = searchQuery.trim() !== ""
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent | React.KeyboardEvent) => {
    if ('key' in e && e.key !== 'Enter') return;
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="w-full ">
      {/* Top Bar */}
      <div className="hidden md:flex bg-[#F9F2ED] py-2 px-4 md:px-10 justify-center items-center text-[13px] font-serif border-b border-black/5 ">
        <div >Powder Foundation 20% Discount</div>
      </div>

      {/* Main Navbar */}
      <nav className={cn( 
        "container  w-full  py-10 flex items-center justify-between transition-all duration-300 bg-white z-50",
        scrolled && "py-3 shadow-sm sticky top-0"
      )}>
        {/* Left: Menu & Logo */}
        <div className="flex-1 flex items-center gap-4">
          {/* Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link href="/">
            <div className="relative w-35 h-10">
              <Image 
                src="/images/logo.png" 
                alt="Cosmetsy Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Middle: Desktop Navigation */}
        <div className="hidden lg:flex flex-2 justify-center items-center gap-14 text-[14px] font-sans  ">
          <Link href="/" className="hover:text-[#ef4626] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#ef4626] transition-colors">About Us</Link>
          <Link href="/shop" className="hover:text-[#ef4626] transition-colors">Shop</Link>
          <Link href="/contact" className="hover:text-[#ef4626] transition-colors">Contact Us</Link>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex items-center justify-end gap-1 md:gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Search size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-100 flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X size={30} strokeWidth={1} />
            </button>
            <div className="w-full max-w-4xl px-6 text-center group">
              <input 
                autoFocus
                type="text" 
                placeholder="Search any Product" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchSubmit}
                className="w-full text-4xl md:text-7xl text-center border-none outline-none font-serif placeholder:text-gray-200 bg-transparent text-black"
              />
              <div className="h-px w-full bg-black/10 mt-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black translate-x-[-101%] group-focus-within:translate-x-0 transition-transform duration-500 ease-in-out" />
              </div>
              
              {/* Search Results Preview */}
              <div className="mt-12 max-w-2xl mx-auto w-full">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredProducts.map((product) => (
                      <Link 
                        key={product.id}
                        href={`/product/${product.slug}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center gap-6 p-4 hover:bg-neutral-50 transition-colors group/item border border-transparent hover:border-neutral-100"
                      >
                        <div className="relative w-16 h-16 bg-neutral-100 flex-shrink-0">
                          <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="text-left flex-1">
                          <h4 className="text-[14px] font-bold text-black uppercase tracking-wider">{product.name}</h4>
                          <p className="text-[12px] text-neutral-400 mt-1 uppercase font-medium">{product.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[14px] font-bold text-black">${product.price.toFixed(2)}</p>
                          <ArrowRight size={16} className="ml-auto mt-2 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                    <button 
                      onClick={handleSearchSubmit}
                      className="mt-6 py-4 px-10 bg-black text-white text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-[#ef4626] transition-all flex items-center justify-center gap-3 mx-auto"
                    >
                      View All Results <ArrowRight size={16} />
                    </button>
                  </div>
                ) : searchQuery.trim() !== "" ? (
                  <p className="text-neutral-400 font-sans italic">No products found for "{searchQuery}"</p>
                ) : (
                  <p className="text-black/40 text-[13px] font-sans tracking-wide">
                    Please type the word you want to search and press enter.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-99"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-90 bg-white z-100 flex flex-col shadow-2xl"
            >
              <div className="px-9 py-6 flex justify-between items-center border-b border-black/5">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <div className="relative w-30 h-8.75">
                    <Image 
                      src="/images/logo.png" 
                      alt="Cosmetsy Logo" 
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 border border-black/5 rounded hover:bg-black/5">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto font-sans  text-black font-normal">
                <div className="divide-y divide-black/5">
                  <MobileNavItem label="Home" href="/" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavItem label="Shop" href="/shop" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavItem label="About Us" href="/about" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavItem label="Contact Us" href="/contact" onClick={() => setIsMenuOpen(false)} />
                </div>
              </div>

              <div className="p-6 border-t border-black/5 space-y-6">
                <div className="flex gap-6 text-black/60 px-3">
                   <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-black transition-colors">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                   </a>
                   
                   <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-black transition-colors">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                   </a>

                   <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-black transition-colors">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                   </a>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] text-gray-400">
                    © Claudette   {new Date().getFullYear()} - 
                  
                    Powered by <a href="https://thebigdogdigital.com/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">BigDog Digital</a>.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavItem({ label, href, hasSubmenu, onClick }: { label: string; href: string; hasSubmenu?: boolean; onClick?: () => void }) {
  return (
    <div className="flex items-center justify-between px-9 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
      <Link href={href} onClick={onClick} className="flex-1 text-[14px] font-normal text-black">{label}</Link>
      {hasSubmenu && <ChevronDown size={16} className="text-gray-400 group-hover:text-black transition-colors" />}
    </div>
  );
}
