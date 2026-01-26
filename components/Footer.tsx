import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ocean-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Mission */}
          <div>
            <h3 className="text-white text-lg font-serif font-bold mb-4">ZenFlow Yoga</h3>
            <p className="text-sm leading-relaxed mb-4">
              Democratizing mental wellness through accessible yoga routines and science-backed breathing techniques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors" hidden><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors" hidden><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors" hidden><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-ocean-mist transition-colors">Home</Link></li>
              <li><Link to="/tools/breathing" className="hover:text-ocean-mist transition-colors">Breathing Tool</Link></li>
              <li><Link to="/about" className="hover:text-ocean-mist transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-ocean-mist transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Medical Disclaimer Highlight */}
          <div className="bg-ocean-light/20 p-4 rounded-xl border border-ocean-light/30">
            <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-2">Medical Disclaimer</h3>
            <p className="text-xs leading-relaxed text-slate-200">
              Content on this site is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} ZenFlow Yoga. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={12} className="mx-1 text-red-400 fill-current" />
            <span>for Inner Peace</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;