import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';

// Stock images from Unsplash
const MOUNTAIN_CLIMB = "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop";
const DEVOPS_IMG = "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=500&auto=format&fit=crop";
const DEVOPS_ILLUST = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=500&auto=format&fit=crop";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  content: string;
}

const BLOGS_LIST: BlogPost[] = [
  {
    id: 'agile-best-practices',
    title: 'Agile Best Practices for Effective Team11',
    category: 'Development',
    date: '03 July 2026',
    image: MOUNTAIN_CLIMB,
    description: 'In the dynamic landscape of project management, Agile methodologies have emerged as a transformative force, transcending their origins in software development to become a guiding philosophy for teams across diverse industries. More than just a set of practices, Agile represents a mindset that values collaboration, adaptability, and continuous improvement.',
    content: `Agile methodologies have transformed how modern teams deliver value. By breaking down complex projects into iterative cycles, teams can adapt to changes swiftly and deliver value incrementally.

    Here are the core pillars of Agile best practices for effective teams:
    1. Daily Standups: Keep communication active and identify blockers immediately.
    2. Sprint Retrospectives: Learn from every sprint to improve processes continually.
    3. Backlog Grooming: Ensure work items are prioritized, detailed, and ready for future sprints.
    4. Focus on Team Collaboration: Encourage cross-functional collaboration and joint ownership of goals.
    
    Implementing these practices helps build trust, increases accountability, and ultimately leads to high-performance delivery outcomes.`
  },
  {
    id: 'scrum-master-roles',
    title: 'Role Responsibilities Of A Scrum Master',
    category: 'Travel',
    date: '13 March 2023',
    image: DEVOPS_IMG,
    description: 'The Scrum Guide mentions that the Scrum Master (SM) is the one who promotes and supports Scrum in an enterprise. It is his/her responsibility to ensure that the team and every stakeholder understand the methodologies and rules of Scrum.',
    content: `The Scrum Master is a servant-leader for the Scrum Team. They help those outside the Scrum Team understand which of their interactions with the Scrum Team are helpful and which aren't.

    Key responsibilities of a Scrum Master:
    - Facilitating Scrum events (Daily Scrum, Sprint Planning, Review, and Retrospective).
    - Removing obstacles/blockers that hinder the team's progress.
    - Coaching the team in self-management and cross-functionality.
    - Helping the Product Owner manage the backlog effectively.
    - Protecting the team from external distractions to maintain focus.`
  },
  {
    id: 'devops-foundation',
    title: 'Everything You Need To Know About The DevOps Foundation Certificate?',
    category: 'Travel',
    date: '13 March 2023',
    image: DEVOPS_ILLUST,
    description: 'The IT and software industries are rapidly evolving, and continuous upskilling and reskilling have become essential. 31% of IT leaders said lack of skilled professionals is the primary concern of the IT industry.',
    content: `DevOps Foundation training provides an introduction to DevOps—the cultural and professional movement that stresses communication, collaboration, integration, and automation between software developers and IT operations professionals.

    Why pursue the DevOps Foundation certification:
    - Understand DevOps objectives, vocabulary, and benefits.
    - Learn about relationship of DevOps to Agile, Lean, and ITSM.
    - Discover workflow automation, deployment pipelines, and continuous integration.
    - Master key cultural practices for building high-trust organizations.
    - Open doors to advanced careers in cloud engineering and site reliability engineering.`
  }
];

const Blogs: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Scroll helper
  const scrollToContent = () => {
    const el = document.getElementById('featured-posts-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      
      {/* 1. HERO SECTION */}
      <section className="bg-navy text-white py-16 lg:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/' },
                { label: 'Blogs' }
              ]} 
            />
            
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight tracking-tight mt-4">
              Agile Best Practices for Effective Team11
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              In the dynamic landscape of project management, Agile methodologies have emerged as a transformative force, transcending their origins in software development to become a guiding philosophy for teams across diverse industries. More than just a set of practices, Agile represents a mindset that values collaboration, adaptability, and continuous improvement.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => {
                  setSelectedPost(BLOGS_LIST[0]);
                }}
                className="bg-white hover:bg-slate-50 text-navy px-8 py-3 rounded-lg font-bold transition-all text-sm shadow-md active:scale-95"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Right Column (Kanban Illustration SVG) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px] bg-amber-400 rounded-2xl p-6 shadow-2xl flex flex-col justify-between aspect-square select-none">
              <div className="flex justify-between items-center border-b border-amber-500 pb-3">
                <span className="font-heading font-black text-amber-950 text-sm">KANBAN BOARD</span>
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Kanban Grid */}
              <div className="grid grid-cols-3 gap-3 flex-grow my-4">
                {/* TO DO (mirrored text placeholder) */}
                <div className="bg-amber-300/40 rounded-lg p-2.5 flex flex-col space-y-2 border border-amber-300/50">
                  <span className="text-[9px] font-bold text-amber-950 tracking-wider text-center">OD OT</span>
                  <div className="bg-white rounded p-1.5 shadow-sm space-y-1.5">
                    <div className="w-full h-1 bg-slate-200 rounded" />
                    <div className="w-2/3 h-1 bg-slate-200 rounded" />
                  </div>
                </div>
                {/* WORK (mirrored text) */}
                <div className="bg-amber-300/40 rounded-lg p-2.5 flex flex-col space-y-2 border border-amber-300/50">
                  <span className="text-[9px] font-bold text-amber-950 tracking-wider text-center">KЯOW</span>
                  <div className="bg-white rounded p-1.5 shadow-sm space-y-1.5 border-l-2 border-primary">
                    <div className="w-full h-1 bg-slate-300 rounded" />
                    <div className="w-3/4 h-1 bg-slate-200 rounded" />
                  </div>
                  <div className="bg-white rounded p-1.5 shadow-sm space-y-1.5">
                    <div className="w-full h-1 bg-slate-200 rounded" />
                  </div>
                </div>
                {/* DONE (mirrored text) */}
                <div className="bg-amber-300/40 rounded-lg p-2.5 flex flex-col space-y-2 border border-amber-300/50">
                  <span className="text-[9px] font-bold text-amber-950 tracking-wider text-center">∃ИOᗡ</span>
                  <div className="bg-white rounded p-1.5 shadow-sm space-y-1.5 border-l-2 border-accent-green">
                    <div className="w-full h-1 bg-slate-200 rounded" />
                    <div className="w-1/2 h-1 bg-slate-200 rounded" />
                  </div>
                </div>
              </div>

              {/* Mini characters layout */}
              <div className="flex items-center justify-between border-t border-amber-500/30 pt-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-white flex items-center justify-center text-[8px] font-bold text-white">👩</div>
                  <span className="text-[10px] text-amber-950 font-bold">Scrum Master</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] text-amber-950 font-bold">Developer</span>
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-white flex items-center justify-center text-[8px] font-bold text-white">👨</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. FEATURED POST SECTION */}
      <section id="featured-posts-section" className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 min-h-[320px] md:min-h-[440px] flex items-end">
            <img 
              src={MOUNTAIN_CLIMB} 
              alt="Mountain climbing team" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Dark bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Overlapping Floating Banner (Centered on tablet/desktop) */}
            <div className="relative z-10 w-full max-w-4xl mx-auto p-4 sm:p-8">
              <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 space-y-4 text-slate-800 border border-slate-100 max-w-3xl transform translate-y-4 md:translate-y-8">
                <div className="flex items-center space-x-3 text-slate-400 text-xs font-bold">
                  <span className="text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded">Development</span>
                  <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> 03 July 2026</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-navy leading-snug">
                  Agile Best Practices for Effective Team11
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  In the dynamic landscape of project management, Agile methodologies have emerged as a transformative force, transcending their origins in software development to become a guiding philosophy for teams across diverse industries. More than just a set of practices, Agile represents a mindset that values collaboration, adaptability, and continuous improvement.
                </p>
                <button
                  onClick={() => setSelectedPost(BLOGS_LIST[0])}
                  className="inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-bold transition-all text-xs active:scale-95"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Padding space to offset floating banner */}
      <div className="h-10 md:h-16" />

      {/* 3. OUR RECENT POST SECTION */}
      <section className="bg-slate-50/50 py-16 px-4 sm:px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">Our Recent Post</h2>
            <button 
              onClick={scrollToContent}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-sm"
            >
              View All
            </button>
          </div>

          {/* Large split layout for featured recent post */}
          <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
            <div className="lg:col-span-5 rounded-lg overflow-hidden h-64 lg:h-full">
              <img src={MOUNTAIN_CLIMB} alt="Mountain climbing" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-3 text-slate-400 text-xs font-bold">
                <span className="text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded">Development</span>
                <span>03 July 2026</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-navy leading-snug">
                Agile Best Practices for Effective Team11
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                In the dynamic landscape of project management, Agile methodologies have emerged as a transformative force, transcending their origins in software development to become a guiding philosophy for teams across diverse industries. More than just a set of practices, Agile represents a mindset that values collaboration, adaptability, and continuous improvement.
              </p>
              <div>
                <button
                  onClick={() => setSelectedPost(BLOGS_LIST[0])}
                  className="inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-bold transition-all text-xs active:scale-95"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Grid of smaller blog posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Scrum Master */}
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-md hover-elevate flex flex-col h-full bg-slate-50">
              <div className="h-56 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  src={DEVOPS_IMG} 
                  alt="Scrum Master" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-slate-400 text-xs font-bold">
                    <span className="text-slate-600 bg-slate-100 uppercase tracking-wider px-2.5 py-1 rounded">Travel</span>
                    <span>13 March 2023</span>
                  </div>
                  <h3 className="text-lg font-extrabold font-heading text-navy leading-snug hover:text-primary transition-colors">
                    Role Responsibilities Of A Scrum Master
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    The Scrum Guide mentions that the Scrum Master (SM) is the one who promotes and supports Scrum in an enterprise. It is his/her responsibility to ensure that the team and every stakeholder understand the methodologies and rules of Scrum.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedPost(BLOGS_LIST[1])}
                    className="inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-bold transition-all text-xs active:scale-95"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: DevOps Certificate */}
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-md hover-elevate flex flex-col h-full bg-slate-50">
              <div className="h-56 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  src={DEVOPS_ILLUST} 
                  alt="DevOps Loop" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-slate-400 text-xs font-bold">
                    <span className="text-slate-600 bg-slate-100 uppercase tracking-wider px-2.5 py-1 rounded">Travel</span>
                    <span>13 March 2023</span>
                  </div>
                  <h3 className="text-lg font-extrabold font-heading text-navy leading-snug hover:text-primary transition-colors">
                    Everything You Need To Know About The DevOps Foundation Certificate?
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    The IT and software industries are rapidly evolving, and continuous upskilling and reskilling have become essential. 31% of IT leaders said lack of skilled professionals is the primary concern of the IT industry.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedPost(BLOGS_LIST[2])}
                    className="inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-bold transition-all text-xs active:scale-95"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. POPULAR POST SECTION */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">Popular Post</h2>
            <button 
              onClick={scrollToContent}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-sm"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Popular Card 1 */}
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-md hover-elevate flex flex-col h-full bg-slate-50">
              <div className="h-56 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  src={DEVOPS_IMG} 
                  alt="Scrum Master" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-slate-400 text-xs font-bold">
                    <span className="text-slate-600 bg-slate-100 uppercase tracking-wider px-2.5 py-1 rounded">Travel</span>
                    <span>13 March 2023</span>
                  </div>
                  <h3 className="text-lg font-extrabold font-heading text-navy leading-snug hover:text-primary transition-colors">
                    Role Responsibilities Of A Scrum Master
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    The Scrum Guide mentions that the Scrum Master (SM) is the one who promotes and supports Scrum in an enterprise. It is his/her responsibility to ensure that the team and every stakeholder understand the methodologies and rules of Scrum.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedPost(BLOGS_LIST[1])}
                    className="inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-bold transition-all text-xs active:scale-95"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Popular Card 2 */}
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-md hover-elevate flex flex-col h-full bg-slate-50">
              <div className="h-56 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  src={DEVOPS_ILLUST} 
                  alt="DevOps Loop" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-slate-400 text-xs font-bold">
                    <span className="text-slate-600 bg-slate-100 uppercase tracking-wider px-2.5 py-1 rounded">Travel</span>
                    <span>13 March 2023</span>
                  </div>
                  <h3 className="text-lg font-extrabold font-heading text-navy leading-snug hover:text-primary transition-colors">
                    Everything You Need To Know About The DevOps Foundation Certificate?
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    The IT and software industries are rapidly evolving, and continuous upskilling and reskilling have become essential. 31% of IT leaders said lack of skilled professionals is the primary concern of the IT industry.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedPost(BLOGS_LIST[2])}
                    className="inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-bold transition-all text-xs active:scale-95"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INDIVIDUAL BLOG POST DETAILED VIEW OVERLAY */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPost(null)} />
          
          <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full z-10 max-h-[85vh] overflow-y-auto transform transition-all animate-in zoom-in-95 duration-200">
            {/* Cover Image */}
            <div className="h-64 sm:h-80 w-full relative">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-65" />
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 left-4 bg-white/95 hover:bg-white text-navy font-bold flex items-center space-x-1.5 px-4 py-2 rounded-full shadow-md text-xs transition-transform active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            </div>

            {/* Post Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400 items-center">
                <span className="text-primary bg-primary-light px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  {selectedPost.category}
                </span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 5 Min Read</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy leading-snug">
                {selectedPost.title}
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line border-t border-slate-100 pt-6">
                {selectedPost.content}
              </p>
            </div>
          </div>
        </div>
      )}

    </motion.div>
  );
};

export default Blogs;
