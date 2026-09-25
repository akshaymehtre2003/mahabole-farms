import React from 'react';
import { ShoppingCart, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 glass-panel sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-emerald-500 flex items-center justify-center font-black text-black text-lg shadow-lg shadow-amber-500/20 group-hover:scale-105 transition">
          MF
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-base md:text-lg tracking-wide flex items-center gap-1.5">
            Mahabole Farms
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          </span>
          <span className="text-[10px] text-amber-400 uppercase tracking-widest font-semibold">Organic Excellence</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300 font-medium">
        <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
        <a href="#products" className="hover:text-amber-400 transition-colors">Products</a>
        <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
        <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={onOpenCart}
          className="relative bg-gray-900/80 hover:bg-gray-800 text-white p-2.5 rounded-2xl transition border border-gray-700/60 flex items-center justify-center group shadow-md"
        >
          <ShoppingCart className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 animate-bounce">
              {cartCount}
            </span>
          )}
        </button>
        <a 
          href="#products" 
          className="hidden sm:inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black px-6 py-2.5 rounded-2xl text-sm font-extrabold transition shadow-lg shadow-amber-500/20 transform hover:-translate-y-0.5"
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
}