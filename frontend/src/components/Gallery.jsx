import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Camera, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/gallery')
      .then(res => setGallery(res.rows || res.data))
      .catch(err => console.error('Error fetching gallery:', err));
  }, []);

  return (
    <section id="gallery" className="py-24 px-6 md:px-16 bg-[#090d19] border-t border-gray-800/60 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Orchard Moments</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Farm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div key={item.id} className="glass-card rounded-3xl overflow-hidden border border-gray-800 shadow-xl group hover:border-emerald-500/40 transition-all duration-500">
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={item.image_url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h4 className="text-amber-400 font-extrabold text-base mb-1.5 group-hover:text-amber-300 transition-colors">{item.title}</h4>
                <p className="text-gray-300 text-xs leading-relaxed">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}