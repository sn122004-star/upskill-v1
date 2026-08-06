import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import RegisterModal from '../components/features/RegisterModal';

// Stock images from Unsplash
const PRESENTER_IMG = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop";

const TRAINERS_LIST = [
  {
    id: 'mercer',
    name: 'Stephen Mercer',
    subtitle: '(PMP)',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    tags: ['All Categories', 'Project Management', 'Agile and Scrum'],
    bio: 'Stephen Mercer is a highly qualified professional with expertise in project management, process consulting, and various related disciplines. With 24 years of experience as a process consultant and project manager, Stephen brings a wealth of knowledge to his role. He teaches courses such as PMP, LSSGB, Project Management Fundamentals, CAPM, and Agile/Scrum Methodology. Additionally, Stephen holds certifications in process mapping, information systems auditing, senior advising, financial planning, investment advising, and FEMA disaster coordination. His diverse qualifications and practical experience make him a valuable asset for individuals and organizations seeking to improve their project management practices and streamline processes.'
  },
  {
    id: 'lowe',
    name: 'Todd Lowe',
    subtitle: '(PMP, LSS)',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop',
    tags: ['All Categories', 'Project Management', 'Lean and Six Sigma'],
    bio: 'Todd Lowe, a seasoned executive with extensive global experience in Manufacturing, Operations, and Distribution for Public/PE firms, offers comprehensive training in Operational Excellence, Capacity Analysis, Site Rationalization, Strategic Planning, Business Turnaround, Change Management, Talent Acquisition, Process Improvement & Optimization. His expertise includes FPA, Capital Planning, Supply Chain Optimization, ERP, LEAN, Six Sigma, and Industry 4.0 technologies. Todd’s training programs focus on building world-class teams, fostering a culture of continuous improvement, and equipping professionals with the skills needed to achieve and sustain competitive advantage in today’s dynamic business landscape.'
  },
  {
    id: 'blado',
    name: 'Christopher Blado',
    subtitle: '(PMP, CAPM)',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
    tags: ['All Categories', 'Project Management', 'Information Security'],
    bio: 'Christopher Blado, a Seattle-based professional, holds degrees in English, International Studies, and Public Administration, complemented by certifications in conflict resolution, project management and strategic research. With over 15 years of experience spanning non-profit, healthcare, and government sectors, Christopher excels in contract negotiation, financial analysis, and strategic planning. Outside work, Christopher enjoys travel, hiking, camping, improv comedy, and playing guitar. With a commitment to excellence and a passion for exploration, he continues to make impactful contributions to his field and his community.'
  },
  {
    id: 'quilidro',
    name: 'Jennylyn Quilidro',
    subtitle: '(PMP, PMI - RMP, SSM (SAFe Scrum Master), SAFe 6.0)',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop',
    tags: ['All Categories', 'Project Management', 'SAFE', 'Agile and Scrum'],
    bio: 'Jennylyn or Jen is a seasoned project management professional with a passion for shaping the next generation of project managers. With over 14 years of extensive experience in project and program management across diverse industries, Jen brings a wealth of knowledge and expertise to her role as a course instructor at Red River College. Jen’s journey in project management has been marked by a series of remarkable achievements and leadership roles. As a certified PMP®, PMI-ACP®, Prince2 Practitioner, SAFe® 6 Scrum Master, and SAFe® 6 Practice Consultant, she possesses a comprehensive understanding of agile methodologies and project management best practices. Throughout her career, Jen has excelled in various capacities, including serving as a Scrum Master for Test and Release Management teams, overseeing the transition from Waterfall to Agile methodologies, and facilitating the adoption of SAFe Framework. Her proficiency in utilizing tools such as JIRA and Confluence has been instrumental in streamlining project execution and collaboration. Beyond her technical skills, Jen’s ability to lead, coach, and mentor teams has been evident in her roles as a Sr. Project Manager, Sr. Consultant, and PMO Manager. She has successfully managed complex projects, implemented ERP solutions, and drove overall team performance.'
  },
  {
    id: 'rohrs',
    name: 'Alex Rohrs',
    subtitle: '(PMP)',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    tags: ['All Categories', 'Project Management', 'SAFE', 'Agile and Scrum', 'IT Service and Architecture', 'DevOps and Salesforce', 'Cloud Computing', 'Analytics and Data Management'],
    bio: 'Alex is a problem solver and recognized leader with a deep passion for Agile and SAFe and helping individuals, teams and organizations achieve better results by identifying the right market problems to solve and implementing smarter ways of working. He has a background in Program and Product Management and spent over 15 years in the educational technology field. He is expert in managing cross-functional teams from conception through product launch, including implementation and management of processes designed to identify value, streamline efficiency, improve quality and bring products to market quickly and efficiently. Alex has led Agile transformations at multiple organizations and successfully implemented SAFe at Scholastic, leading 3 Agile Release Trains through 14 PI\'s resulting in the release of industry leading Reading and Math intervention programs for the K-12 market.'
  }
];

const TABS = [
  { id: 'All Categories', label: 'All Categories' },
  { id: 'Project Management', label: 'Project Management' },
  { id: 'SAFE', label: 'SAFE' },
  { id: 'Lean and Six Sigma', label: 'Lean and Six Sigma' },
  { id: 'Agile and Scrum', label: 'Agile and Scrum' },
  { id: 'IT Service and Architecture', label: 'IT Service and Architecture' },
  { id: 'One Day Courses', label: 'One Day Courses' },
  { id: 'Information Security', label: 'Information Security' },
  { id: 'DevOps and Salesforce', label: 'DevOps and Salesforce' },
  { id: 'Analytics and Data Management', label: 'Analytics and Data Management' },
  { id: 'Cloud Computing', label: 'Cloud Computing' },
  { id: 'Digital Marketing', label: 'Digital Marketing' }
];

const Trainers: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All Categories';

  const [activeTab, setActiveTab] = useState(categoryParam);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Sync tab active state with search parameter changes
  useEffect(() => {
    if (categoryParam) {
      setActiveTab(categoryParam);
    }
  }, [categoryParam]);

  // Update tab status and url params
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSearchParams({ category: tabId });
  };

  // Filter logic
  const filteredTrainers = TRAINERS_LIST.filter(trainer => 
    trainer.tags.includes(activeTab)
  );

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
          <div className="space-y-6 text-center lg:text-left">
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/' },
                { label: 'Training' }
              ]} 
            />
            
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading leading-tight text-navy">
              Empowering Organizations with Future Ready Corporate Training Solutions
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Prepare to take the next step in your career with the leading training provider globally. Begin your immersive learning journey with us.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                className="border border-primary text-primary hover:bg-primary-light px-6 py-3 rounded-lg font-bold transition-all text-sm active:scale-95 shadow-sm"
                onClick={() => {
                  const element = document.getElementById('trainers-list-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Courses
              </button>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold transition-all text-sm active:scale-95 shadow-md shadow-primary/10"
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* Image Area */}
          <div className="flex justify-center">
            <div className="w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
              <motion.img 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={PRESENTER_IMG} 
                alt="Trainer presentation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS BAR */}
      <section className="bg-white border-b border-slate-100 py-6 sticky top-20 z-20 shadow-sm overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-start lg:justify-center space-x-1.5 sm:space-x-4 min-w-[800px]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`py-2.5 px-4 text-sm font-semibold transition-all relative select-none whitespace-nowrap ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-slate-500 hover:text-navy'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-navy rounded-full animate-in fade-in duration-300" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. TRAINERS LIST */}
      <section id="trainers-list-section" className="bg-slate-50/30 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {filteredTrainers.length > 0 ? (
            filteredTrainers.map((trainer, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div 
                  key={trainer.id}
                  className={`bg-white rounded-2xl border border-slate-100 p-6 md:p-8 flex flex-col items-center md:items-start gap-6 md:gap-8 shadow-md hover-elevate animate-in fade-in duration-300 ${
                    isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Photo + Name + Certification Column */}
                  <div className={`flex flex-col items-center text-center shrink-0 w-full md:w-56 border-b md:border-b-0 pb-6 md:pb-0 ${
                    isReversed 
                      ? 'md:border-l border-slate-100 md:pl-8' 
                      : 'md:border-r border-slate-100 md:pr-8'
                  }`}>
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner mb-4">
                      <motion.img 
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                        src={trainer.image} 
                        alt={trainer.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-heading font-extrabold text-navy text-lg leading-tight">{trainer.name}</h3>
                    <span className="text-accent-green font-bold text-xs mt-2 text-center leading-normal max-w-[180px]">
                      {trainer.subtitle}
                    </span>
                  </div>

                  {/* Biography text Column */}
                  <div className="flex-1 space-y-4">
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                      {trainer.bio}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-xl border border-slate-100 p-12 text-center text-slate-400">
              No trainers found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Register Modal */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />

    </motion.div>
  );
};

export default Trainers;
