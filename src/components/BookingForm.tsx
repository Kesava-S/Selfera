import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, X } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '£500 - £1,500',
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
        name: '',
        email: '',
        company: '',
        message: '',
        budget: '£500 - £1,500',
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
              className="absolute top-6 right-6 text-emerald-100/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/[0.04] cursor-pointer"
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
                    Partner with us
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tightest text-white leading-tight">
                    Book Your Consultation
                  </h2>
                </div>
                
                <p className="text-xs sm:text-sm text-emerald-100/70 font-semibold leading-relaxed">
                  We design custom AI agents and integrations tailor-made for your marketing, operations, and finance. Tell us what you want to automate.
                </p>

                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00f5c0]/10 text-[#00f5c0]">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Save 10+ Hours Every Week</h4>
                      <p className="text-[11px] text-emerald-100/60 font-semibold">Remove repetitive workflows and focus on business growth.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00f5c0]/10 text-[#00f5c0]">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Custom-Built & Monitored</h4>
                      <p className="text-[11px] text-emerald-100/60 font-semibold">We handle setup, API integrations, and proactive continuous optimization.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00f5c0]/10 text-[#00f5c0]">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Data Security First</h4>
                      <p className="text-[11px] text-emerald-100/60 font-semibold">Highest safety standards for customer data and business analytics.</p>
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
                        key="booking-form"
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
                              Full Name
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Business Email
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
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Company Name
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Acme Corp"
                              value={formData.company}
                              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                              Monthly Budget for Automation
                            </label>
                            <select
                              value={formData.budget}
                              onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                              className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white appearance-none cursor-pointer"
                            >
                              <option value="Less than £500">Less than £500</option>
                              <option value="£500 - £1,500">£500 - £1,500</option>
                              <option value="£1,500 - £5,000">£1,500 - £5,000</option>
                              <option value="£5,000+">£5,000+</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                            What would you like to automate?
                          </label>
                          <textarea
                            required
                            rows={3}
                            placeholder="Describe your current bottlenecks or ideas..."
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-xs sm:text-sm transition-all font-semibold text-white resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-2 py-3.5 rounded-full bg-brand-blue hover:bg-brand-deep disabled:bg-brand-blue/70 text-white font-bold text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {isSubmitting ? (
                            'Scheduling...'
                          ) : (
                            <>
                              <Calendar size={14} />
                              <span>Book Your Consultation</span>
                            </>
                          )}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="booking-success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="text-center py-6 flex flex-col items-center gap-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-[#00f5c0] flex items-center justify-center mb-2">
                          <Check size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Consultation Booked!</h3>
                        <p className="text-xs sm:text-sm text-emerald-100/75 font-semibold max-w-sm leading-relaxed">
                          Thank you for sharing your details. We have sent an email confirmation with calendar slots. Speak soon!
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
