import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import RegisterModal from '../components/features/RegisterModal';

// Presenter image
const PRESENTER_IMG = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop";

const CorporateTraining: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 overflow-x-hidden"
    >
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/' },
                { label: 'Corporate Training' }
              ]} 
            />
            
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading leading-tight text-navy">
              Empowering Organizations with Future Ready Corporate Training Solutions
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Prepare to take the next step in your career with the leading training provider globally. Begin your immersive learning journey with us.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/courses"
                className="border border-primary text-primary hover:bg-primary-light px-6 py-3 rounded-lg font-bold transition-all text-sm active:scale-95 shadow-sm"
              >
                View Courses
              </Link>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold transition-all text-sm active:scale-95 shadow-md shadow-primary/10"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>

          {/* Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
              <motion.img 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={PRESENTER_IMG} 
                alt="Corporate Training session" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR CLIENTS SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-left font-heading text-2xl font-extrabold text-navy shrink-0 select-none">
            Our Clients
            <div className="w-8 h-1 bg-primary mt-1 rounded" />
          </div>
          
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 justify-center flex-grow">
            {/* Merck */}
            <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all opacity-75 hover:opacity-100">
              <div className="w-6 h-6 rounded-full bg-[#008A4B] flex items-center justify-center text-white font-extrabold text-xs">M</div>
              <span className="font-heading font-extrabold tracking-widest text-slate-800 text-sm">MERCK</span>
            </div>

            {/* Ferguson */}
            <div className="flex items-center space-x-1.5 grayscale hover:grayscale-0 transition-all opacity-75 hover:opacity-100">
              <div className="flex flex-col space-y-0.5">
                <div className="w-5.5 h-1.5 bg-[#004B87] skew-x-12" />
                <div className="w-5.5 h-1.5 bg-[#004B87] -skew-x-12" />
              </div>
              <span className="font-heading font-black tracking-tight text-[#004B87] text-lg leading-none">FERGUSON</span>
            </div>

            {/* Change Healthcare */}
            <div className="flex items-center space-x-1 grayscale hover:grayscale-0 transition-all opacity-75 hover:opacity-100">
              <span className="font-heading font-extrabold text-navy text-base leading-none tracking-tight">CH<span className="text-red-500 font-black">▲</span>NGE</span>
              <span className="text-[8px] text-red-500 font-extrabold tracking-widest uppercase ml-1">Healthcare</span>
            </div>

            {/* Dhec */}
            <div className="flex items-center space-x-1.5 grayscale hover:grayscale-0 transition-all opacity-75 hover:opacity-100">
              <div className="w-5 h-5 bg-teal-500 rounded-md flex items-center justify-center text-white text-[10px] font-black">d</div>
              <span className="font-heading font-extrabold text-slate-700 text-sm">dhec</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Register Modal */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />

    </motion.div>
  );
};

export default CorporateTraining;
