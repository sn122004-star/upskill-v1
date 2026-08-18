import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, Sun, Moon, Palette } from 'lucide-react';
import ExploreDropdown from '../features/ExploreDropdown';
import RegisterModal from '../features/RegisterModal';

const Header: React.FC = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'red' | 'black' | 'blue'>(() => {
    return (localStorage.getItem('theme') as 'red' | 'black' | 'blue') || 'red';
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'red') return 'black';
      if (prev === 'black') return 'blue';
      return 'red';
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/50 z-40 h-20 shadow-[0_2px_15px_rgba(9,23,43,0.02)] transition-all duration-300">
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

          {/* Navigation Links centered (desktop) */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-7 text-slate-600 text-sm font-semibold">
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-1 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/corporate" 
              className={({ isActive }) => 
                `px-1 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              Corporate
            </NavLink>
            <NavLink 
              to="/trainers" 
              className={({ isActive }) => 
                `px-1 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              Trainers
            </NavLink>
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => 
                `px-1 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              Blogs
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-1 py-1 transition-colors fancy-link hover:text-primary ${
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Action buttons on the right (desktop/mobile toggle) */}
          <div className="flex items-center space-x-3.5">
            
            {/* Explore Courses Dropdown Action Button */}
            <div className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="inline-flex items-center space-x-2 text-sm font-bold text-slate-700 hover:text-primary hover:bg-slate-50 transition-all px-4 py-2 rounded-xl border border-slate-200/80 active:scale-95 select-none"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span>Explore Courses</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isExploreOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>
              
              <ExploreDropdown 
                isOpen={isExploreOpen} 
                onClose={() => setIsExploreOpen(false)} 
              />
            </div>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200/80 hover:bg-slate-50 text-slate-500 hover:text-primary transition-all active:scale-95 cursor-pointer mr-2 select-none"
              title={`Active: ${theme} - Toggle theme`}
            >
              {theme === 'red' && <Sun className="w-4 h-4 text-[#F59E0B] animate-pulse" />}
              {theme === 'black' && <Palette className="w-4 h-4 text-[#EF5350]" />}
              {theme === 'blue' && <Moon className="w-4 h-4 text-[#154E85]" />}
            </button>

            <button
              onClick={() => setIsRegisterOpen(true)}
              className="hidden sm:inline-flex bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-md shadow-primary/10 active:scale-[0.98] select-none"
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
          <div className="md:hidden fixed top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6 z-30 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-5">
              
              {/* Category Quick Selector for Mobile */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Explore Categories</span>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-600">
                  <button 
                    type="button"
                    onClick={() => { navigate('/courses?category=SAFE'); setIsMobileMenuOpen(false); }}
                    className="p-2 border border-slate-100 rounded-lg text-left hover:bg-slate-50 hover:text-primary"
                  >
                    SAFE
                  </button>
                  <button 
                    type="button"
                    onClick={() => { navigate('/courses?category=Project%20Management'); setIsMobileMenuOpen(false); }}
                    className="p-2 border border-slate-100 rounded-lg text-left hover:bg-slate-50 hover:text-primary"
                  >
                    Project Mgmt
                  </button>
                  <button 
                    type="button"
                    onClick={() => { navigate('/courses?category=Lean%20and%20Six%20Sigma'); setIsMobileMenuOpen(false); }}
                    className="p-2 border border-slate-100 rounded-lg text-left hover:bg-slate-50 hover:text-primary"
                  >
                    Six Sigma
                  </button>
                  <button 
                    type="button"
                    onClick={() => { navigate('/courses?category=Agile%20and%20Scrum'); setIsMobileMenuOpen(false); }}
                    className="p-2 border border-slate-100 rounded-lg text-left hover:bg-slate-50 hover:text-primary"
                  >
                    Agile & Scrum
                  </button>
                </div>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col space-y-4 font-semibold text-slate-700 border-t border-slate-50 pt-4">
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
                className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl text-sm font-bold transition-colors shadow-md text-center"
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
