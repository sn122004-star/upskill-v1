import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ExploreDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  'Project Management',
  'SAFE',
  'Lean and Six Sigma',
  'Agile and Scrum',
  'IT Service and Architecture',
  'One Day Courses',
  'Information Security',
  'DevOps and Salesforce',
  'Analytics and Data Management',
  'Cloud Computing',
  'Digital Marketing'
];

const ExploreDropdown: React.FC<ExploreDropdownProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      {/* Click outside overlay to close */}
      <div 
        className="fixed inset-0 z-30" 
        onClick={onClose}
      />
      
      {/* Dropdown panel */}
      <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-border-gray rounded-2xl shadow-2xl py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-200">
        <ul className="flex flex-col">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <button
                type="button"
                className="w-full text-left px-5 py-3.5 hover:bg-slate-50 flex items-center justify-between text-slate-700 hover:text-primary transition-colors font-medium border-b border-slate-50 last:border-0"
                onClick={() => {
                  navigate(`/courses?category=${encodeURIComponent(category)}`);
                  onClose();
                }}
              >
                <span className="text-sm font-sans">{category}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExploreDropdown;
