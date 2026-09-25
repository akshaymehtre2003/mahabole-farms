import React from 'react';
import { Sprout, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-[#090d19] border-t border-b border-gray-800/60 relative overflow-hidden">
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mahabole Farms, Maharashtra</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
            Rooted in Passion, Grown with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">Nature's Care</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Spreading warmth from our orchards straight to your home. We follow strict organic practices, ensuring every fruit is nurtured with absolute purity, love, and dedication.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-2xl flex items-center space-x-3 border border-amber-500/20">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-gray-200">100% Organic Practices</span>
            </div>
            <div className="glass-card p-4 rounded-2xl flex items-center space-x-3 border border-amber-500/20">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-gray-200">Hygienic & Safe Harvest</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-amber-500 to-emerald-500 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative glass-card p-6 rounded-3xl border border-gray-700/80 shadow-2xl flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <img 
              src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=400&auto=format&fit=crop" 
              alt="Farm harvest" 
              className="w-full sm:w-36 h-36 object-cover rounded-2xl border border-gray-600 shadow-lg"
            />
            <div>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-amber-500/30">Direct from Farm</span>
              <h4 className="font-extrabold text-white text-lg mt-3 mb-1">Pure Farm Freshness</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Handpicked at the optimal time to deliver unmatched quality, taste, and freshness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}