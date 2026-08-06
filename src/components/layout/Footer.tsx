import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
          
          {/* Brand block (left) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <img 
                src="/logo_1.jpeg" 
                alt="UpskillsUSA Emblem" 
                className="w-11 h-11 object-contain rounded-full border border-slate-100 shadow-sm transform group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <div className="font-heading font-black text-xl leading-none tracking-tight flex items-center">
                  <span className="text-[#002B49]">UPSKILLS</span>
                  <span className="text-[#C8102E]">USA</span>
                </div>
                <div className="flex items-center justify-between text-[8px] font-black tracking-widest text-[#002B49] leading-none mt-0.5 select-none">
                  <span className="h-[1px] bg-[#C8102E]/40 flex-1 mr-1" />
                  <span>LLC</span>
                  <span className="h-[1px] bg-[#C8102E]/40 flex-1 ml-1" />
                </div>
              </div>
            </Link>
          </div>

          {/* Links grid (right) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* Column 1: Company */}
            <div className="flex flex-col space-y-3.5">
              <h3 className="font-heading font-bold text-navy text-sm tracking-wider uppercase">Company</h3>
              <ul className="space-y-2.5 text-sm font-semibold text-slate-500">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/corporate" className="hover:text-primary transition-colors">Corporate Training</Link></li>
                <li><Link to="/trainers" className="hover:text-primary transition-colors">Trainers</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col space-y-3.5">
              <h3 className="font-heading font-bold text-navy text-sm tracking-wider uppercase">Quick Links</h3>
              <ul className="space-y-2.5 text-sm font-semibold text-slate-500">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
              </ul>
            </div>

            {/* Column 3: Popular Courses */}
            <div className="flex flex-col space-y-3.5 col-span-1 sm:col-span-2">
              <h3 className="font-heading font-bold text-navy text-sm tracking-wider uppercase">Popular Courses</h3>
              <ul className="space-y-2.5 text-sm font-semibold text-slate-500">
                 <li><Link to="/courses?category=Project%20Management" className="hover:text-primary transition-colors">PMP® Certification Training</Link></li>
                 <li><Link to="/courses?category=Project%20Management" className="hover:text-primary transition-colors">CAPM® Certification Training</Link></li>
                 <li><Link to="/courses?category=Project%20Management" className="hover:text-primary transition-colors">PgMP® Certification Training</Link></li>
                 <li><Link to="/courses?category=IT%20Service%20and%20Architecture" className="hover:text-primary transition-colors">ITIL 4 Foundation Training</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Secure Payments bar */}
        <div className="border-t border-slate-100 pt-8 pb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col space-y-3">
            <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wider">Secure Payments</h4>
            <div className="flex flex-wrap gap-2.5">
              {/* Visa Card */}
              <div className="border border-slate-200 rounded px-2.5 py-1.5 flex items-center justify-center bg-white w-14 h-8 select-none shadow-sm">
                <span className="font-sans font-extrabold italic text-blue-800 text-sm">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="border border-slate-200 rounded px-2.5 py-1.5 flex items-center justify-center bg-white w-14 h-8 select-none shadow-sm space-x-0.5">
                <div className="w-3.5 h-3.5 bg-red-500 rounded-full opacity-90" />
                <div className="w-3.5 h-3.5 bg-amber-500 rounded-full -ml-2 opacity-90" />
              </div>
              {/* Amex */}
              <div className="border border-slate-200 rounded px-2.5 py-1.5 flex items-center justify-center bg-blue-600 text-white w-14 h-8 select-none shadow-sm font-extrabold text-[10px] tracking-tighter">
                AMEX
              </div>
              {/* Discover */}
              <div className="border border-slate-200 rounded px-2.5 py-1.5 flex items-center justify-center bg-white w-14 h-8 select-none shadow-sm flex-col leading-none">
                <span className="font-sans font-extrabold text-[8px] text-slate-800 tracking-tighter">DISCOVER</span>
                <div className="w-4 h-0.5 bg-orange-500 mt-0.5" />
              </div>
              {/* Paypal */}
              <div className="border border-slate-200 rounded px-2.5 py-1.5 flex items-center justify-center bg-white w-14 h-8 select-none shadow-sm font-sans font-black italic text-blue-900 text-xs">
                Pay<span className="text-blue-500">Pal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-400 gap-4">
          <p className="text-center sm:text-left leading-relaxed">
            Copyright &copy; 2024 UPSKILLSUSA LLC. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-4.5 h-4.5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-4.5 h-4.5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-4.5 h-4.5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Youtube className="w-4.5 h-4.5" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
