import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Star, Users, ArrowRight } from 'lucide-react';
import RegisterModal from '../components/features/RegisterModal';
import Breadcrumbs from '../components/common/Breadcrumbs';

// Course data categorized by tabs
interface Course {
  id: string;
  title: string;
  description: string;
  enrolled: string;
  rating: number;
  starts?: string;
  type?: string;
  image: string;
}

const COURSES_DATA: Record<string, Course[]> = {
  'Project Management': [
    {
      id: 'pgmp',
      title: 'PgMP® Certification Training',
      description: 'PgMP® Certification Training - Program Management Professional Short Description (hero intro paragraph) The Program Management Professional (PgMP)® is a visible sign of your advanced experience and skill.',
      enrolled: '0+ Enrolled',
      rating: 4.8,
      starts: 'Starts 12 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'rmp',
      title: 'PMI-RMP® Certification Training',
      description: 'Unmanaged risk is one of the leading causes of project failure. The PMI Risk Management Professional (PMI-RMP)® certification recognizes your unique expertise in identifying and mitigating project risks.',
      enrolled: '0+ Enrolled',
      rating: 4.5,
      starts: 'Starts 15 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'pmp',
      title: 'Project Management Professional (PMP)® Certification Training',
      description: 'The PMP Certification is a recognized and international credential for project managers. Compliant with the most recent PMBOK Guide, this program equips you to lead complex projects globally.',
      enrolled: '500+ Enrolled',
      rating: 4.9,
      starts: 'Starts 08 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'capm',
      title: 'CAPM® Certification Training',
      description: 'Certified Associate in Project Management (CAPM)® is an essential asset that will distinguish you in the job market and enhance your credibility to work on project teams.',
      enrolled: '120+ Enrolled',
      rating: 4.6,
      starts: 'Starts 20 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop'
    }
  ],
  'SAFE': [
    {
      id: 'ssm',
      title: 'SAFe® 6.0 Scrum Master Certification',
      description: 'Understand the Scrum Master role in a SAFe enterprise. Learn to facilitate Scrum events, support program increment (PI) execution, and foster relentless team improvement.',
      enrolled: '340+ Enrolled',
      rating: 4.8,
      starts: 'Starts 10 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'spc',
      title: 'SAFe® 6.0 Practice Consultant',
      description: 'Lead Lean-Agile transformations within your organization. Gain the knowledge to configure SAFe, train teams, and implement Agile Release Trains (ARTs) for strategic success.',
      enrolled: '80+ Enrolled',
      rating: 4.9,
      starts: 'Starts 18 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop'
    }
  ],
  'Lean and Six Sigma': [
    {
      id: 'lssgb',
      title: 'Lean Six Sigma Green Belt (LSSGB) Certification',
      description: 'Master DMAIC methodologies to optimize processes and drive operational excellence. Gain high-value credentials to improve quality, cut cycle times, and increase customer satisfaction.',
      enrolled: '450+ Enrolled',
      rating: 4.7,
      starts: 'Starts 11 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=400&auto=format&fit=crop'
    }
  ],
  'Agile and Scrum': [
    {
      id: 'csm',
      title: 'Certified ScrumMaster (CSM)® Training',
      description: 'Gain a solid foundation in the Scrum framework, roles, events, and artifacts. Learn agile principles and build high-performing self-organizing teams.',
      enrolled: '1,200+ Enrolled',
      rating: 4.9,
      starts: 'Starts 09 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'cspo',
      title: 'Certified Scrum Product Owner (CSPO)® Training',
      description: 'Understand how to manage product backlogs, define user stories, prioritize deliverables, and collaborate with teams to ship valuable software iterations.',
      enrolled: '850+ Enrolled',
      rating: 4.8,
      starts: 'Starts 14 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop'
    }
  ],
  'IT Service and Architecture': [
    {
      id: 'itil',
      title: 'ITIL® 4 Foundation Training',
      description: 'Learn the modern ITIL service management framework. Understand service value systems, IT service guidelines, and key practices to align IT with business operations.',
      enrolled: '600+ Enrolled',
      rating: 4.7,
      starts: 'Starts 19 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop'
    }
  ],
  'Information Security': [
    {
      id: 'cissp',
      title: 'CISSP® Certification Training',
      description: 'Achieve the gold standard in information security. Master topics in risk management, asset security, security engineering, network security, and IAM controls.',
      enrolled: '400+ Enrolled',
      rating: 4.9,
      starts: 'Starts 22 August, 2026',
      type: 'Live Online Classroom',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop'
    }
  ]
};

const TABS = [
  'Project Management',
  'SAFE',
  'Lean and Six Sigma',
  'Agile and Scrum',
  'IT Service and Architecture',
  'Information Security'
];

const Courses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'Project Management';

  const [activeTab, setActiveTab] = useState(categoryParam);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Sync tab active state with search parameter changes
  useEffect(() => {
    if (categoryParam && TABS.includes(categoryParam)) {
      setActiveTab(categoryParam);
      setCarouselIndex(0);
    }
  }, [categoryParam]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSearchParams({ category: tabId });
    setCarouselIndex(0);
  };

  const activeCourses = COURSES_DATA[activeTab] || [];

  // Carousel controls
  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, activeCourses.length - 3)));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < activeCourses.length - 3 ? prev + 1 : 0));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 overflow-hidden"
    >
      {/* Hidden SVG scalloped border template */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="scalloped-border" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 
                     C 0.05,0.02 0.08,0.02 0.12,0 
                     C 0.17,0.02 0.20,0.02 0.25,0 
                     C 0.29,0.02 0.32,0.02 0.37,0 
                     C 0.41,0.02 0.44,0.02 0.49,0 
                     C 0.53,0.02 0.56,0.02 0.61,0 
                     C 0.65,0.02 0.68,0.02 0.73,0 
                     C 0.77,0.02 0.80,0.02 0.85,0 
                     C 0.89,0.02 0.92,0.02 0.97,0 
                     L 1,0 
                     L 1,0.12 
                     C 0.98,0.17 0.98,0.20 1,0.25 
                     C 0.98,0.29 0.98,0.32 1,0.37 
                     C 0.98,0.41 0.98,0.44 1,0.49 
                     C 0.98,0.53 0.98,0.56 1,0.61 
                     C 0.98,0.65 0.98,0.68 1,0.73 
                     C 0.98,0.77 0.98,0.80 1,0.85 
                     C 0.98,0.89 0.98,0.92 1,0.97 
                     L 1,1 
                     L 0.97,1 
                     C 0.92,0.98 0.89,0.98 0.85,1 
                     C 0.80,0.98 0.77,0.98 0.73,1 
                     C 0.68,0.98 0.65,0.98 0.61,1 
                     C 0.56,0.98 0.53,0.98 0.49,1 
                     C 0.44,0.98 0.41,0.98 0.37,1 
                     C 0.32,0.98 0.29,0.98 0.25,1 
                     C 0.20,0.98 0.17,0.98 0.12,1 
                     L 0,1 
                     L 0,0.97 
                     C 0.02,0.92 0.02,0.89 0,0.85 
                     C 0.02,0.80 0.02,0.77 0,0.73 
                     C 0.02,0.68 0.02,0.65 0,0.61 
                     C 0.02,0.56 0.02,0.53 0,0.49 
                     C 0.02,0.44 0.02,0.41 0,0.37 
                     C 0.02,0.32 0.02,0.29 0,0.25 
                     C 0.02,0.20 0.02,0.17 0,0.12 
                     Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. HERO SECTION */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/' },
                { label: 'All Courses' }
              ]} 
            />
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading leading-tight text-navy">
              Where Learning Meets Excellence
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Master In-Demand Skills with Upskills — Your Path to Career Success. Immerse yourself in our flexible learning environment designed for global facilitators and professionals.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition-all text-sm active:scale-95 shadow-md shadow-primary/10"
              >
                Contact Learning Advisor
              </button>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 px-6 py-3 rounded-xl font-bold transition-all text-sm active:scale-95 shadow-sm"
              >
                Free Consultation
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Graphic Image with Custom Bezel Rounded Shape */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[480px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/60">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop" 
                alt="Presentation Classroom Session" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. CATEGORY TABS BAR */}
      <section className="bg-white border-b border-slate-100 py-6 sticky top-20 z-20 shadow-sm overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-start lg:justify-center space-x-1.5 sm:space-x-4 min-w-[900px]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`py-2.5 px-4 text-sm font-bold transition-all relative select-none whitespace-nowrap rounded-xl ${
                  isActive 
                    ? 'text-primary bg-primary-light/50' 
                    : 'text-slate-500 hover:text-navy hover:bg-slate-50'
                }`}
              >
                <span>{tab}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. COURSES CAROUSEL / GRID LIST */}
      <section className="bg-slate-50/30 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Heading + Carousel Navigation arrows */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">
              {activeTab} ({activeCourses.length})
            </h2>
            {activeCourses.length > 3 && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors shadow-sm active:scale-90"
                  aria-label="Previous courses"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors shadow-md shadow-primary/10 active:scale-90"
                  aria-label="Next courses"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Grid Layout Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {activeCourses.slice(carouselIndex, carouselIndex + 3).map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-lg hover-elevate flex flex-col justify-between h-full group"
                >
                  {/* Top: Wavy Scalloped Image */}
                  <div className="p-4 bg-slate-50/50">
                    <div className="w-full h-48 overflow-hidden rounded-xl border border-slate-100 flex items-center justify-center bg-white relative">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        style={{ clipPath: 'url(#scalloped-border)' }}
                        className="w-[92%] h-[92%] object-cover transition-transform duration-300 group-hover:scale-103"
                      />
                    </div>
                  </div>

                  {/* Mid: Card Info */}
                  <div className="p-6 flex-grow space-y-4 flex flex-col justify-between">
                    <div className="space-y-3.5">
                      
                      {/* Starts info badges */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
                        {course.starts && (
                          <span className="bg-red-50 text-accent-red px-2.5 py-1 rounded-lg flex items-center space-x-1 shrink-0">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{course.starts}</span>
                          </span>
                        )}
                        {course.type && (
                          <span className="text-accent-green bg-green-50 px-2.5 py-1 rounded-lg flex items-center space-x-1 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                            <span>{course.type}</span>
                          </span>
                        )}
                        <span className="bg-yellow-50 text-accent-orange px-2.5 py-1 rounded-lg flex items-center space-x-1 ml-auto shrink-0">
                          <Star className="w-3.5 h-3.5 fill-accent-orange" />
                          <span>{course.rating.toFixed(1)}</span>
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-navy text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        {course.description}
                      </p>
                    </div>

                    {/* Bottom: Action trigger + enrolled badge */}
                    <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.enrolled}</span>
                      </span>

                      <button
                        onClick={() => setIsRegisterOpen(true)}
                        className="inline-flex items-center space-x-1 text-xs font-bold text-primary group-hover:text-primary-hover transition-colors"
                      >
                        <span>Enroll Now</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Register consultation Modal */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </motion.div>
  );
};

export default Courses;
