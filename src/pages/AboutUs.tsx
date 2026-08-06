import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';

// Stock images from Unsplash
const PRESENTER_IMG = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop";
const CITY_IMG = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop";

const AboutUs: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      
      {/* 1. HERO SECTION WITH BREADCRUMBS */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Area */}
          <div className="space-y-6">
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/' },
                { label: 'About Us' }
              ]} 
            />
            
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading leading-tight text-navy">
              Committed to Professional's Excellence
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Prepare to take the next step in your career with the leading training provider globally. Begin your immersive learning journey with us.
            </p>
          </div>

          {/* Image Area */}
          <div className="flex justify-center">
            <div className="w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
              <motion.img 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={PRESENTER_IMG} 
                alt="Presenter conducting training" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Brand Logo view) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white p-6 flex items-center justify-center">
              <motion.img 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src="/main_logo.jpeg" 
                alt="UPSKILLSUSA LLC Logo" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column (Text details) */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-primary font-heading font-extrabold text-lg uppercase tracking-wider block">Who We Are</span>
            <div className="w-12 h-1 bg-primary rounded" />
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At UPSKILLSUSA LLC, we are passionate about driving professional growth and empowering individuals and organizations to thrive in today’s rapidly evolving business landscape. As a leading provider of comprehensive corporate training solutions, we offer a wide range of certification courses designed to enhance the skills and expertise of working professionals across various industries.
            </p>
          </div>

        </div>
      </section>

      {/* 3. IMPRINTS STATS (Horizontal layout on white) */}
      <section className="bg-slate-50/50 border-y border-slate-100 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-extrabold font-heading text-navy">Imprints of UPSKILLSUSA!</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary">50 +</h3>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm">Curated Courses</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary">15,000 +</h3>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm">Students Enrolled</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary">30 +</h3>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm">Countries</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary">100 +</h3>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm">Trainers</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION CARDS */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-8 space-y-4 shadow-sm hover-elevate">
            <span className="text-primary font-heading font-extrabold text-xs tracking-wider uppercase block">Vision</span>
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-navy leading-snug">
              Driving Transformation: Our Vision for Personal and Professional Growth
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our vision at UPSKILLSUSA LLC is to be the catalyst for personal and professional transformation. We aim to become the go-to platform for individuals seeking to enhance their skills, gain industry-recognized certifications, and advance their careers. We envision a future where learning is accessible, engaging, and aligned with the demands of the modern workforce.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-8 space-y-4 shadow-sm hover-elevate">
            <span className="text-primary font-heading font-extrabold text-xs tracking-wider uppercase block">Mission</span>
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-navy leading-snug">
              Bridging the Skills Gap: Our Mission to Empower Individuals & Organizations
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our mission is to bridge the gap between current skills and future requirements by offering high-quality corporate training programs. We are committed to delivering comprehensive, practical, and industry-standard certifications that empower individuals and organizations to succeed. We strive to provide excellent training experiences that inspire growth and foster excellence.
            </p>
          </div>

        </div>
      </section>

      {/* 5. WHY UPSKILLS LIST & IMAGE */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (List) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-extrabold font-heading text-navy">Why UPSKILLSUSA LLC?</h2>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start space-x-3.5">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-navy text-base leading-tight">
                    Expert & Learners Friendly Instructors
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Learn from industry professionals and subject matter experts who bring extensive experience and insights to the training programs, providing valuable perspectives and guidance.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-3.5">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-navy text-base leading-tight">
                    Cost Effective Trainings
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We offer high-quality standards at competitive prices, ensuring accessibility and affordability for learners.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-3.5">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-navy text-base leading-tight">
                    Practical Learning Approach
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Our certifications focus on practical, hands-on learning experiences, enabling participants to apply their knowledge in real-world scenarios and projects.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start space-x-3.5">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-navy text-base leading-tight">
                    Recognition and Credibility
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Earn certifications that are widely recognized and respected in the industry, enhancing your professional credibility and opening doors to new opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Skyscrapers Image - repeated matching the reference) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
              <motion.img 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={CITY_IMG} 
                alt="Skyscrapers architecture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default AboutUs;
