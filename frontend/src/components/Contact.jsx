import React from 'react';
import { MessageCircle, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#060913] border-t border-gray-800/80 text-gray-300 py-20 px-6 md:px-16 relative">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div>
          <div className="flex items-center space-x-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-black text-black text-base shadow-lg">
              MF
            </div>
            <span className="text-white font-extrabold text-lg tracking-wide">Mahabole Farms</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Spreading warmth from our farm to your home with 100% organic, handpicked produce straight from Maharashtra.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Quick Links</span>
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
            <li><a href="#products" className="hover:text-amber-400 transition-colors">Our Products</a></li>
            <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-5">Get in Touch</h4>
          <div className="space-y-3.5 text-sm mb-8">
            <p className="flex items-center space-x-3 text-gray-400">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Mahabole Farms, Maharashtra</span>
            </p>
            <p className="flex items-center space-x-3 text-gray-400">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>contact@mahabolefarms.com</span>
            </p>
          </div>
          <a 
            href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20order%20organic%20produce%20from%20Mahabole%20Farms!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold px-6 py-3 rounded-2xl text-sm transition-all shadow-xl shadow-emerald-600/20 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-800/80 text-center text-xs text-gray-500 font-medium">
        &copy; {new Date().getFullYear()} Mahabole Farms. All rights reserved. Crafted with modern design.
      </div>
    </footer>
  );
}