import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, MessageSquare, X } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface EnquireFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquireForm({ isOpen, onClose }: EnquireFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    whatsAppNumber: '',
    websiteUrl: '',
    industry: '',
    companySize: '',
    enquiryType: '',
    message: '',
    contactMethod: 'Email',
    bestTime: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        whatsAppNumber: '',
        websiteUrl: '',
        industry: '',
        companySize: '',
        enquiryType: '',
        message: '',
        contactMethod: 'Email',
        bestTime: '',
        consent: false,
      });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              onClose();
              setIsSubmitted(false);
            }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="bg-[#002b22] border border-emerald-500/10 rounded-[28px] max-w-4xl w-full p-6 sm:p-8 md:p-10 relative shadow-2xl z-10 overflow-y-auto max-h-[90vh] text-white"
            style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                onClose();
                setIsSubmitted(false);
              }}
              className="absolute top-6 right-6 text-emerald-100/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/[0.04] cursor-pointer z-50"
            >
              <X size={18} />
            </button>

            {/* Subtle Glows inside Modal */}
            <div className="absolute top-0 left-1/4 h-[250px] w-[250px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-[#0071e3]/5 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-20">
              
              {/* Left Column: Context / Perks */}
              <div className="lg:col-span-5 flex flex-col gap-5 text-left">
                <div>
                  <p className="text-xs font-bold text-[#00f5c0] uppercase tracking-widest mb-2">
                    Start a Conversation
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tightest text-white leading-tight">
                    Enquire Now
                  </h2>
                </div>
                
                <p className="text-xs sm:text-sm text-emerald-100/70 font-semibold leading-relaxed">
                  Have a question about our services, partnerships, or need technical support? Fill out the form and our team will get back to you promptly.
                </p>

                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00f5c0]/10 text-[#00f5c0]">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Rapid Response</h4>
                      <p className="text-[11px] text-emerald-100/60 font-semibold">We aim to reply to all enquiries within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00f5c0]/10 text-[#00f5c0]">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Expert Advice</h4>
                      <p className="text-[11px] text-emerald-100/60 font-semibold">Speak directly with our automation and integration specialists.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7">
                <div className="bg-[#00382c] border border-emerald-500/10 rounded-[24px] p-5 sm:p-6 md:p-8 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="enquire-form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 text-left"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Full Name <span className="text-emerald-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="John Doe"
                              value={formData.fullName}
                              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Business Name <span className="text-emerald-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Acme Corp"
                              value={formData.businessName}
                              onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Email Address <span className="text-emerald-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              WhatsApp Number <span className="text-emerald-500">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+44 123 456 7890"
                              value={formData.whatsAppNumber}
                              onChange={(e) => setFormData(prev => ({ ...prev, whatsAppNumber: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Business Website <span className="opacity-50">(Optional)</span>
                            </label>
                            <input
                              type="url"
                              placeholder="https://example.com"
                              value={formData.websiteUrl}
                              onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Industry <span className="text-emerald-500">*</span>
                            </label>
                            <select
                              required
                              value={formData.industry}
                              onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white appearance-none cursor-pointer"
                            >
                              <option value="" disabled>Select...</option>
                              <option value="Restaurant">Restaurant</option>
                              <option value="Salon">Salon</option>
                              <option value="Retail">Retail</option>
                              <option value="Clinic">Clinic</option>
                              <option value="Professional Services">Professional Services</option>
                              <option value="Hospitality">Hospitality</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Company Size <span className="text-emerald-500">*</span>
                            </label>
                            <select
                              required
                              value={formData.companySize}
                              onChange={(e) => setFormData(prev => ({ ...prev, companySize: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white appearance-none cursor-pointer"
                            >
                              <option value="" disabled>Select...</option>
                              <option value="Just me">Just me</option>
                              <option value="2–10 employees">2–10 employees</option>
                              <option value="11–50 employees">11–50 employees</option>
                              <option value="50+">50+</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Type of enquiry <span className="text-emerald-500">*</span>
                            </label>
                            <select
                              required
                              value={formData.enquiryType}
                              onChange={(e) => setFormData(prev => ({ ...prev, enquiryType: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white appearance-none cursor-pointer"
                            >
                              <option value="" disabled>Select...</option>
                              <option value="Partnership">Partnership</option>
                              <option value="Press">Press</option>
                              <option value="Careers">Careers</option>
                              <option value="General question">General question</option>
                              <option value="Technical support">Technical support</option>
                              <option value="Billing">Billing</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                            Tell us about your business or challenge <span className="text-emerald-500">*</span>
                          </label>
                          <textarea
                            required
                            rows={3}
                            placeholder="Write your message here..."
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white resize-none"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase mb-2 block">
                              Preferred Contact Method
                            </label>
                            <div className="flex items-center gap-4 text-xs font-semibold">
                              {['WhatsApp', 'Email', 'Phone'].map(method => (
                                <label key={method} className="flex items-center gap-1.5 cursor-pointer">
                                  <input 
                                    type="radio" 
                                    name="contactMethod" 
                                    value={method}
                                    checked={formData.contactMethod === method}
                                    onChange={(e) => setFormData(prev => ({ ...prev, contactMethod: e.target.value }))}
                                    className="accent-brand-blue cursor-pointer"
                                  />
                                  <span>{method}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Best Time to Contact <span className="opacity-50">(Optional)</span>
                            </label>
                            <select
                              value={formData.bestTime}
                              onChange={(e) => setFormData(prev => ({ ...prev, bestTime: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white appearance-none cursor-pointer"
                            >
                              <option value="">Select...</option>
                              <option value="Morning">Morning</option>
                              <option value="Afternoon">Afternoon</option>
                              <option value="Evening">Evening</option>
                            </select>
                          </div>
                        </div>

                        <label className="flex items-start gap-2.5 mt-1 cursor-pointer">
                          <input 
                            type="checkbox" 
                            required
                            checked={formData.consent}
                            onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                            className="mt-1 accent-brand-blue shrink-0 cursor-pointer"
                          />
                          <span className="text-[11px] sm:text-xs font-medium text-emerald-100/70 leading-tight">
                            I agree to be contacted regarding my enquiry.
                          </span>
                        </label>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-2 py-3.5 rounded-full bg-brand-blue hover:bg-brand-deep disabled:bg-brand-blue/70 text-white font-bold text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {isSubmitting ? (
                            'Sending Enquiry...'
                          ) : (
                            <>
                              <MessageSquare size={14} />
                              <span>Start the Conversation</span>
                            </>
                          )}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="enquiry-success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="text-center py-6 flex flex-col items-center gap-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-[#00f5c0] flex items-center justify-center mb-2">
                          <Check size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Enquiry Sent!</h3>
                        <p className="text-xs sm:text-sm text-emerald-100/75 font-semibold max-w-sm leading-relaxed">
                          Thank you for reaching out. A member of our team will review your enquiry and get back to you shortly via your preferred contact method.
                        </p>
                        <button
                          onClick={() => {
                            onClose();
                            setIsSubmitted(false);
                          }}
                          className="mt-4 px-6 py-2 rounded-full border border-white/10 hover:bg-white/[0.04] text-xs font-bold text-white transition-all cursor-pointer"
                        >
                          Close Window
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
