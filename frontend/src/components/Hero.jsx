import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Leaf, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-[#060913] px-6 py-16 md:py-24 overflow-hidden flex justify-center items-center">
      {/* Background Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-5 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-gray-800/80 glass-card">
        {/* Background Image with Deep Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter brightness-40 transform scale-105 transition duration-1000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1400&auto=format&fit=crop')` }}
        ></div>
        
        <div className="relative z-10 px-8 py-20 md:py-32 text-center flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          
          <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md animate-float">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct from Maharashtra Orchards</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-6 max-w-4xl drop-shadow-2xl">
            Purely Organic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400">Kesar Mangoes</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8 font-medium leading-relaxed">
            Experience the unmatched aroma, sweetness, and juicy perfection of nature's finest handpicked harvest.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-black/40 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md text-xs font-semibold text-gray-200">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>100% Organic Natural</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/40 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md text-xs font-semibold text-gray-200">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Handpicked With Care</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/40 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md text-xs font-semibold text-gray-200">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Hygienically Packed</span>
            </div>
          </div>

          <div>
            <a 
              href="#products" 
              className="group bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold px-9 py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 text-sm uppercase tracking-wider"
            >
              <span>Order Now !!!</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}