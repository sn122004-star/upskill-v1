import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Laptop, Award, Users, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import RegisterModal from '../components/features/RegisterModal';

// High-quality, contextually matching stock images from Unsplash
const HERO_WOMAN = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop";
const IMPRINTS_WOMAN = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
const WHY_1_WOMAN = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop";
const WHY_2_MEETING = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop";
const WHY_3_LAPTOP = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop";

// Trainer data for carousel
const TRAINERS = [
  {
    id: 1,
    name: "Stephen Mercer",
    title: "(PMP)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    bio: "Stephen Mercer is a highly qualified professional with expertise in project management, process consulting, and various related disciplines. With 24 years of experience as a proces..."
  },
  {
    id: 2,
    name: "Todd Lowe",
    title: "(PMP, LSS)",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    bio: "Todd Lowe, a seasoned executive with extensive global experience in Manufacturing, Operations, and Distribution for Public/PE firms, offers comprehensive training in Operational Ex..."
  },
  {
    id: 3,
    name: "Christopher Blado",
    title: "(PMP, CAPM)",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    bio: "Christopher Blado, a Seattle-based professional, holds degrees in English, International Studies, and Public Administration, complemented by certifications in conflict resolution, ..."
  },
  {
    id: 4,
    name: "Jennylyn Quilidro",
    title: "(PMP, PMI - RMP, SSM, SAFe 6.0)",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    bio: "Jennylyn or Jen is a seasoned project management professional with a passion for shaping the next generation of project managers. With over 14 years of extensive experience in proj..."
  },
  {
    id: 5,
    name: "Alex Rohrs",
    title: "(PMP)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    bio: "Alex is a problem solver and recognized leader with a deep passion for Agile and SAFe, helping individuals, teams and organizations achieve better results through smarter working..."
  }
];

// Testimonial data for carousel
const TESTIMONIALS = [
  {
    id: 1,
    name: "John Garrity",
    location: "USA",
    text: "Stephen was very knowledgeable in PMP subject matter. When questions were asked, which sometimes referenced other materials learned or to be learned, he was able to answer them quickly and effectively. Have yet to see how his exam prep questions stand up to the actual test questions, but he at least got me thinking in a different way."
  },
  {
    id: 2,
    name: "Vinod Kumar",
    location: "India",
    text: "I registered for certified scrum master training through UPSKILLSUSA LLC and I must say the overall experience was above my expectation. The enrollment process was smooth and the two days training provided all the knowledge and insights required to pass the exam in the first attempt. All Thanks to UPSKILLSUSA LLC."
  },
  {
    id: 3,
    name: "Jaime",
    location: "USA",
    text: "Stephen Mercer is an amazing trainer. His teaching methods are engaging, clear, and highly practical. He tries his hardest to ensure all students are well prepared for the exam. I would highly recommend UPSKILLSUSA LLC to anyone seeking professional growth."
  }
];

const Home: React.FC = () => {
  const [activeTrainerIndex, setActiveTrainerIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Carousel Next/Prev Handlers
  const nextTrainer = () => {
    setActiveTrainerIndex((prev) => (prev + 1) % (TRAINERS.length - 3 > 0 ? TRAINERS.length - 3 : 1));
  };
  const prevTrainer = () => {
    setActiveTrainerIndex((prev) => (prev - 1 + (TRAINERS.length - 3 > 0 ? TRAINERS.length - 3 : 1)) % (TRAINERS.length - 3 > 0 ? TRAINERS.length - 3 : 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % (TESTIMONIALS.length - 1));
  };
  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + (TESTIMONIALS.length - 1)) % (TESTIMONIALS.length - 1));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 overflow-x-hidden"
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-white to-slate-50 py-16 lg:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-navy">
              <span className="text-primary block lg:inline mr-2">Empowering</span> 
              Professionals for Tomorrow
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Prepare to take the next step in your career with the leading training provider globally. Begin your immersive learning journey with us.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/trainers"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 flex items-center space-x-2 active:scale-95"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Circle Block (with gentle floating parallax animations) */}
          <div className="flex justify-center items-center relative">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center"
            >
              
              {/* Outer Dashed Rotating Circle */}
              <div className="absolute inset-0 rounded-full border-dashed border-2 border-primary/40 animate-[spin_60s_linear_infinite]" />
              
              {/* Blue Circular Background */}
              <div className="absolute w-[80%] h-[80%] rounded-full bg-primary overflow-hidden shadow-2xl">
                <img 
                  src={HERO_WOMAN} 
                  alt="Trainer portrait" 
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>

              {/* Floating Badge 1 (Left) */}
              <motion.div 
                animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-[-20px] top-[30%] bg-white/95 rounded-xl border border-slate-100 shadow-xl p-3 flex items-center space-x-3 max-w-[150px] glass-panel select-none hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-navy text-sm leading-none">2K+</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Video Courses</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Top Right) */}
              <motion.div 
                animate={{ y: [0, -5, 0], x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute right-[-10px] top-[10%] bg-white/95 rounded-xl border border-slate-100 shadow-xl p-3 flex items-center space-x-3 max-w-[150px] glass-panel select-none hover:scale-105 transition-transform cursor-pointer"
              >
                {/* Circular progress SVG */}
                <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="20" cy="20" r="16" stroke="#E2E8F0" strokeWidth="3" fill="transparent" />
                    <circle cx="20" cy="20" r="16" stroke="#1D70B8" strokeWidth="3.5" fill="transparent" strokeDasharray="100" strokeDashoffset="25" strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-[8px] font-bold text-navy">75%</span>
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-navy text-sm leading-none">5K+</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Online Courses</span>
                </div>
              </motion.div>

              {/* Floating Badge 3 (Bottom Right) */}
              <motion.div 
                animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.2 }}
                className="absolute right-[-15px] bottom-[15%] bg-white/95 rounded-xl border border-slate-100 shadow-xl p-3 flex items-center space-x-3 max-w-[150px] glass-panel select-none hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-navy text-sm leading-none">250+</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tutors</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. COLLABORATION LOGOS STRIP */}
      <section className="bg-white border-y border-slate-100 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-left font-heading text-lg font-bold text-navy shrink-0 select-none">
            <span className="text-accent-green block text-2xl font-black">250+</span>
            Collaboration
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
      </section>

      {/* 3. IMPRINTS STATS SECTION */}
      <section className="bg-navy py-20 px-4 sm:px-6 text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Image) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <img 
                src={IMPRINTS_WOMAN} 
                alt="Enrolled student" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column (Text + Stats Grid) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
                Imprints of UPSKILLSUSA!
              </h2>
              <div className="w-16 h-1 bg-primary rounded" />
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {/* Stat 1 */}
              <div className="space-y-2">
                <h3 className="text-4xl sm:text-5xl font-extrabold font-heading text-primary">50 +</h3>
                <p className="text-slate-300 font-semibold text-sm sm:text-base">Curated Courses</p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2">
                <h3 className="text-4xl sm:text-5xl font-extrabold font-heading text-primary">15 +</h3>
                <p className="text-slate-300 font-semibold text-sm sm:text-base">Students Enrolled</p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-2">
                <h3 className="text-4xl sm:text-5xl font-extrabold font-heading text-primary">30 +</h3>
                <p className="text-slate-300 font-semibold text-sm sm:text-base">Countries</p>
              </div>

              {/* Stat 4 */}
              <div className="space-y-2">
                <h3 className="text-4xl sm:text-5xl font-extrabold font-heading text-primary">100 +</h3>
                <p className="text-slate-300 font-semibold text-sm sm:text-base">Trainers</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY UPSKILLS CERTIFICATIONS ? */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Centered Heading */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy">
              Why UPSKILLSUSA <span className="text-primary">LLC?</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded" />
          </div>

          {/* Row 1: Career Advancement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-extrabold font-heading text-navy">Career Advancement</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our healthy learning environment empowers you to progress at your own momentum without investing in time-consuming and expensive training programs. You'll get the same value and your desired career advancement without making a hole in your pocket. Grab the eyes of potential recruiters and let your resume stand apart from the crowd.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                <motion.img 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  src={WHY_1_WOMAN} 
                  alt="Career Advancement" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Row 2: Cost-effective Solutions (Meeting) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                <motion.img 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  src={WHY_2_MEETING} 
                  alt="Cost-effective Solutions" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-extrabold font-heading text-navy">Cost-effective Solutions</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our corporate learning solutions are overall cost-effective for both facilitators and learners as, on the one hand, remote education cuts transportation costs, resources costs, and other crucial costs drastically.
              </p>
            </div>
          </div>

          {/* Row 3: Cost-effective Solutions (Global Access) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-extrabold font-heading text-navy">Cost-effective Solutions</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Simpliaxis has opened a new door of success for professionals by allowing them to attend web-based career advancement courses. Learners can enroll in corporate learning programs from anywhere globally to assist organizations that run multiple branches simultaneously around the globe.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                <motion.img 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  src={WHY_3_LAPTOP} 
                  alt="Simpliaxis Global Solutions" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. OUR TRAINERS CAROUSEL */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy">Our Trainers</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded" />
          </div>

          {/* Carousel Wrapper */}
          <div className="relative px-2">
            
            {/* Desktop Carousel View (Slides 3 cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden transition-all duration-300">
              {TRAINERS.slice(activeTrainerIndex, activeTrainerIndex + 3).map((trainer) => (
                <div 
                  key={trainer.id}
                  className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center text-center shadow-md hover-elevate h-full animate-in fade-in duration-300"
                >
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-24 h-24 rounded-full object-cover border-2 border-slate-100 shadow-sm mb-4"
                  />
                  <h3 className="font-heading font-bold text-navy text-lg leading-tight">{trainer.name}</h3>
                  <span className="text-accent-green font-bold text-xs mt-1.5 block uppercase tracking-wider">{trainer.title}</span>
                  <p className="text-slate-500 text-sm mt-4 leading-relaxed line-clamp-3">
                    {trainer.bio}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Dots and Controls */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              {Array.from({ length: TRAINERS.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTrainerIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTrainerIndex === index ? 'w-6 bg-primary' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Link
              to="/trainers"
              className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-2.5 rounded-lg font-bold transition-all text-sm active:scale-95 shadow-sm"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHAT THEY SAY? TESTIMONIALS CAROUSEL */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy">What They Say?</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base font-medium">
              UPSKILLSUSA has got more than 100k positive ratings from our users around the world.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded" />
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-5xl mx-auto px-4 md:px-12 flex items-center">
            
            {/* Left arrow trigger (if not at start) */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 p-2.5 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors z-10 active:scale-90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Testimonials grid layout (2 side by side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full overflow-hidden py-2">
              {TESTIMONIALS.slice(activeTestimonialIndex, activeTestimonialIndex + 2).map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white rounded-2xl border border-slate-100 p-8 shadow-md hover-elevate flex flex-col justify-between h-full min-h-[220px] animate-in fade-in duration-300 relative overflow-hidden"
                >
                  <span className="absolute right-6 top-4 text-slate-100/70 text-7xl font-serif leading-none select-none pointer-events-none">“</span>
                  <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-6 border-t border-slate-50 pt-4 flex flex-col">
                    <span className="font-heading font-bold text-navy text-sm">{testimonial.name}</span>
                    <span className="text-slate-400 text-xs mt-0.5 font-bold uppercase tracking-wider">{testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right arrow trigger */}
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 p-2.5 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors z-10 shadow-md shadow-primary/10 active:scale-90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Slider indicators */}
          <div className="flex justify-center space-x-2 pt-4">
            {Array.from({ length: TESTIMONIALS.length - 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonialIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTestimonialIndex === index ? 'w-6 bg-primary' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER (EDISON LIGHTBULBS) */}
      <section className="mx-4 sm:mx-6 my-16 max-w-7xl lg:mx-auto relative rounded-2xl overflow-hidden bg-navy text-white text-center py-20 px-6 sm:px-12 select-none shadow-xl">
        {/* Bulbs Background Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.15),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800')` }} />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <span className="text-accent-green font-bold text-sm tracking-widest uppercase block">Join Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight">
            Join Us by Creating Account
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-medium">
            Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/trainers"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-all text-sm shadow-lg shadow-primary/20 active:scale-95 w-full sm:w-auto"
            >
              View Courses
            </Link>
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="bg-white hover:bg-slate-50 text-primary px-8 py-3 rounded-lg font-bold transition-all text-sm active:scale-95 w-full sm:w-auto"
            >
              Get Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Register Modal instance */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />

    </motion.div>
  );
};

export default Home;
