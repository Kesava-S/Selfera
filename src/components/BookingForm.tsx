import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function BookingForm() {
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
    <section
      id="booking"
      className="relative z-10 py-16 md:py-24 px-4 sm:px-8 md:px-10 bg-[#002b22] text-white overflow-hidden border-t border-emerald-500/10"
      style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
    >
      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/4 h-[350px] w-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context / Perks */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#00f5c0] uppercase tracking-widest mb-3">
                Partner with us
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tightest text-white leading-tight">
                Book Your Consultation
              </h2>
            </div>
            
            <p className="text-sm text-emerald-100/70 font-semibold leading-relaxed">
              We design custom AI agents and integrations tailor-made for your marketing, operations, and finance. Tell us what you want to automate.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00f5c0]/10 text-[#00f5c0]">
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Save 10+ Hours Every Week</h4>
                  <p className="text-xs text-emerald-100/60 font-semibold">Remove repetitive workflows and focus on business growth.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00f5c0]/10 text-[#00f5c0]">
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Custom-Built & Monitored</h4>
                  <p className="text-xs text-emerald-100/60 font-semibold">We handle setup, API integrations, and proactive continuous optimization.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00f5c0]/10 text-[#00f5c0]">
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Data Security First</h4>
                  <p className="text-xs text-emerald-100/60 font-semibold">Highest safety standards for customer data and business analytics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#00382c] border border-emerald-500/10 rounded-[28px] p-6 sm:p-8 md:p-10 relative shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-sm transition-all font-semibold text-white"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                          Business Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-sm transition-all font-semibold text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                          Company Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Corp"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-sm transition-all font-semibold text-white"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                          Monthly Budget for Automation
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                          className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-sm transition-all font-semibold text-white appearance-none cursor-pointer"
                        >
                          <option value="Less than £500">Less than £500</option>
                          <option value="£500 - £1,500">£500 - £1,500</option>
                          <option value="£1,500 - £5,000">£1,500 - £5,000</option>
                          <option value="£5,000+">£5,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold tracking-wider text-emerald-100/60 uppercase">
                        What would you like to automate?
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your current bottlenecks or ideas..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#002b22] border border-emerald-500/10 focus:border-brand-blue focus:outline-none text-sm transition-all font-semibold text-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-4 rounded-full bg-brand-blue hover:bg-brand-deep disabled:bg-brand-blue/70 text-white font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        'Scheduling...'
                      ) : (
                        <>
                          <Calendar size={16} />
                          <span>Book Your Consultation</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="text-center py-10 flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00f5c0]/10 text-[#00f5c0] flex items-center justify-center mb-2">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Consultation Requested!</h3>
                    <p className="text-sm text-emerald-100/70 font-semibold max-w-sm leading-relaxed">
                      Thank you for choosing Selfera. We will review your request and contact you within 24 hours to schedule your strategy call.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full border border-emerald-500/20 hover:bg-emerald-500/5 text-xs font-bold text-emerald-300 transition-all cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
