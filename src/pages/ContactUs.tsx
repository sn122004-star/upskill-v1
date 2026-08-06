import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.email.trim()) newErrors.email = 'Email Address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email Address is invalid';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      
      {/* breadcrumbs strip */}
      <div className="bg-slate-50 py-4 px-4 sm:px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex">
          <Breadcrumbs 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Contact Us' }
            ]} 
          />
        </div>
      </div>

      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-navy tracking-tight">
                Get In Touch
              </h1>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
                We are committed to processing the information in order to contact you and talk about your project.
              </p>
              <div className="w-12 h-1 bg-primary rounded" />
            </div>

            <div className="space-y-8">
              {/* Phone contacts */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-50 rounded-lg text-accent-red shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  <p>USA: +1-3022311055</p>
                  <p>CANADA: +1-3023199684</p>
                  <p>INDIA: +91-8792667363</p>
                </div>
              </div>

              {/* Bengaluru Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-50 rounded-lg text-accent-red shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-slate-600 text-sm sm:text-base leading-relaxed font-semibold max-w-sm">
                  <p>3rd Floor, #11, Nitin Plaza, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102 INDIA.</p>
                </div>
              </div>

              {/* USA Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-50 rounded-lg text-accent-red shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-slate-600 text-sm sm:text-base leading-relaxed font-semibold max-w-sm">
                  <p>2055, Limestone road, STE 200-C Wilmington, DE United States.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-lg hover-elevate"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                <h3 className="text-xl font-heading font-bold text-navy mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-sm">Thank you. We have received your query and will reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name*"
                    className={`w-full px-4 py-3 border rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white transition-all text-sm ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number*"
                    className={`w-full px-4 py-3 border rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white transition-all text-sm ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email*"
                    className={`w-full px-4 py-3 border rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white transition-all text-sm ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-all text-sm shadow-md shadow-primary/10 active:scale-[0.98] select-none"
                >
                  Submit
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
};

export default ContactUs;
