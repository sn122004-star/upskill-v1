import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="inline-flex items-center space-x-1 bg-primary-light/45 border border-primary/10 px-3.5 py-1.5 rounded-full select-none">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={item.label} className="flex items-center text-xs font-semibold">
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-1" />}
            
            {isLast || !item.path ? (
              <span className="text-primary font-bold">{item.label}</span>
            ) : (
              <Link 
                to={item.path} 
                className="text-slate-500 hover:text-primary transition-colors flex items-center"
              >
                {item.label === 'Home' && <Home className="w-3.5 h-3.5 mr-1" />}
                {item.label !== 'Home' && item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
