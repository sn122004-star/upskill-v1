import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import ExploreDropdown from '../features/ExploreDropdown';
import RegisterModal from '../features/RegisterModal';

const Header: React.FC = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b border-slate-100 z-40 h-20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6">
          
          {/* Logo on the left */}
          <Link to="/" className="flex items-center space-x-2.5 shrink-0 group">
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

          {/* Search bar inside header (desktop) */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8 relative">
            <div className="w-full flex items-center border border-slate-200 rounded-lg overflow-hidden shadow-inner focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <div className="pl-3.5 text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="button"
                className="bg-slate-50 border-l border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors flex items-center space-x-1.5 active:bg-slate-200 select-none shrink-0"
                onClick={() => setIsExploreOpen(!isExploreOpen)}
              >
                <span>Explore</span>
                {isExploreOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
            
            {/* Category Dropdown */}
            <ExploreDropdown 
              isOpen={isExploreOpen} 
              onClose={() => setIsExploreOpen(false)} 
            />
          </div>

          {/* Navigation Links (desktop) */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 text-slate-600 text-sm font-semibold">
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-1.5 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/corporate" 
              className={({ isActive }) => 
                `px-1.5 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              Corporate
            </NavLink>
            <NavLink 
              to="/trainers" 
              className={({ isActive }) => 
                `px-1.5 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              Trainers
            </NavLink>
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => 
                `px-1.5 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              Blogs
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-1.5 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Action buttons on the right */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="hidden sm:inline-flex bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-md shadow-primary/10 active:scale-[0.98] select-none"
            >
              Register Now
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-slate-500 hover:text-slate-700 transition-colors hover:bg-slate-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 z-30 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              {/* Search Bar for Mobile */}
              <div className="w-full flex items-center border border-slate-200 rounded-lg overflow-hidden pr-3">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full px-4 py-2 text-sm text-slate-800 focus:outline-none"
                />
                <Search className="w-4 h-4 text-slate-400" />
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col space-y-3.5 font-medium text-slate-700">
                <NavLink 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `text-sm hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : ''}`}
                >
                  About Us
                </NavLink>
                <NavLink 
                  to="/corporate" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `text-sm hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : ''}`}
                >
                  Corporate
                </NavLink>
                <NavLink 
                  to="/trainers" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `text-sm hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : ''}`}
                >
                  Trainers
                </NavLink>
                <NavLink 
                  to="/blogs" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `text-sm hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : ''}`}
                >
                  Blogs
                </NavLink>
                <NavLink 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `text-sm hover:text-primary transition-colors ${isActive ? 'text-primary font-bold' : ''}`}
                >
                  Contact Us
                </NavLink>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsRegisterOpen(true);
                }}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-md text-center"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Register Now Modal */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </>
  );
};

export default Header;
