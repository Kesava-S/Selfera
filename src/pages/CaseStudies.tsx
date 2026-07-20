import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CaseStudies() {
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [dashboardFormData, setDashboardFormData] = useState({
    name: '',
    email: '',
    restaurantName: '',
    location: '',
    postCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative z-10 flex min-h-[50vh] flex-col justify-center pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 pt-32 pb-16 bg-[#002b22] text-white overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
      >
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#0071e3]/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl w-full z-20">
          <p className="text-xs sm:text-sm font-bold text-[#00f5c0] uppercase tracking-widest mb-3">
            Real Results
          </p>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tightest text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            <motion.span
              initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="block"
            >
              Case Studies
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium"
          >
            How we partner with owner-led business managers to replace manual admin with premium digital operations workflows.
          </motion.p>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="relative z-10 py-16 md:py-24 px-6 bg-white text-ink border-t border-ink/5">
        <div className="mx-auto max-w-4xl w-full">
          <article className="prose prose-lg prose-slate max-w-none">
            
            {/* Header / Title */}
            <header className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink mb-4 leading-tight">
                Transforming Financial Management for Ranna, A Multi-Branch London Restaurant
              </h2>
              <div className="flex flex-wrap gap-3 items-center text-xs text-ink-secondary font-bold uppercase mt-6 tracking-wider">
                <span className="bg-ink/5 px-3 py-1.5 rounded-full">Industry: Hospitality</span>
                <span className="bg-ink/5 px-3 py-1.5 rounded-full">Branches: 5 Sites</span>
                <span className="bg-ink/5 px-3 py-1.5 rounded-full">Saved: 10+ Hours/Week</span>
              </div>
            </header>

            {/* Content Blocks */}
            <div className="flex flex-col gap-10 text-[15px] sm:text-base leading-relaxed text-ink-secondary font-medium">
              
              {/* Block 1: Overview */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">Overview</h3>
                <p>
                  Ranna is a growing restaurant group with five branches across London: Dalston, South Woodford, Walthamstow, Bow, and Old Kent Road. Like a lot of multi-site restaurants, revenue was coming in from several directions at once (dine-in customers plus Uber Eats, Deliveroo, and Just Eat) and the owner didn't have a clear, single view of how the business was actually performing. Selfera stepped in to design and build a centralized financial management dashboard that replaced manual reporting with a proper digital workflow.
                </p>
              </div>

              {/* Block 2: The Challenge */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">The Challenge</h3>
                <p className="mb-4">
                  Every branch was still using handwritten paper records to log End of Day (EOD) figures. Sales from Uber Eats, Deliveroo, Just Eat, and in-store orders were all tracked separately, so getting a real picture of overall performance meant piecing things together after the fact.
                </p>
                <p className="mb-4">
                  Working out actual revenue meant manually estimating delivery platform commissions, VAT, and ad spend on each platform, and there was no reliable way to know the exact percentages being taken. On top of that, small recurring costs like petty cash purchases and day-to-day expenses weren't being tracked at all, so there were real gaps in the numbers nobody could see.
                </p>
                <div className="my-6 p-6 rounded-[24px] bg-[#fbfbfd] border border-ink/5 border-l-4 border-l-brand-blue">
                  <p className="text-sm font-bold text-ink italic leading-relaxed">
                    "Bow and Dalston branches in particular were losing around 3 hours a day just manually working out petty expenses, commission percentages, and VAT. Across all five branches, that added up to over 10 hours a week spent on reconciliation instead of running the business."
                  </p>
                </div>
                <p>
                  As Ranna kept growing across London, the owner needed something reliable to monitor financial performance and make decisions without leaning on fragmented, inconsistent records.
                </p>
              </div>

              {/* Block 3: The Solution */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">The Solution</h3>
                <p className="mb-4">
                  Selfera built a centralized financial management dashboard shaped around how Ranna actually operates. Branch managers submit standardized EOD reports through one system, and the owner gets consolidated, real-time visibility across every location.
                </p>
                
                <h4 className="text-base font-bold text-ink mb-3 uppercase tracking-wider text-xs mt-6">Financial Capabilities:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-2 mb-6">
                  <li>Digital End of Day reporting for every branch</li>
                  <li>Consolidated revenue from Uber Eats, Deliveroo, Just Eat, and in-store sales</li>
                  <li>Automatic calculation of third-party platform commissions and VAT</li>
                  <li>Proper tracking of petty cash and small daily expenses that were previously invisible</li>
                  <li>Centralized financial reporting across all five branches</li>
                  <li>Real-time visibility into actual revenue after every deduction</li>
                </ul>

                <h4 className="text-base font-bold text-ink mb-3 uppercase tracking-wider text-xs">Staffing & Operations Capabilities:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>An automated WhatsApp assistant sends report and operations notifications straight to managers, in a channel they already use every day</li>
                  <li>AI-driven staff rota learning that picks up on how each branch schedules its team and helps managers automate future rotas</li>
                  <li>Automatic leave reallocation when staff take unexpected or last-minute leave, so shifts get covered without anyone scrambling</li>
                </ul>
              </div>

              {/* Block 4: The Results */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">The Results</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-6 rounded-[20px] bg-emerald-500/[0.03] border border-emerald-500/10">
                    <span className="text-3xl font-extrabold text-emerald-600 block mb-1">From 3h to 30m</span>
                    <h4 className="font-bold text-ink text-sm">Reduced Admin Workload</h4>
                    <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                      Admin work dropped from 3 hours a day to just 30 minutes once a week across the entire group.
                    </p>
                  </div>
                  <div className="p-6 rounded-[20px] bg-brand-blue/[0.03] border border-brand-blue/10">
                    <span className="text-3xl font-extrabold text-[#0071e3] block mb-1">100% Invisible Costs</span>
                    <h4 className="font-bold text-ink text-sm">Full Cost Visibility</h4>
                    <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                      Exact commission, VAT, petty cash, and daily expenses are tracked in real-time.
                    </p>
                  </div>
                </div>

                <p className="mb-4">
                  <strong>Faster to real value than expected:</strong> The core financial dashboard and staff rota system went live for testing within <strong>3 weeks</strong>. Ranna's broader requirements, including staff training videos and structured onboarding built right into the dashboard, are being rolled out over a longer roadmap, with full development expected to wrap up within <strong>4 months</strong>.
                </p>
                <p>
                  With reliable financial information all in one place, Ranna's focus has shifted from reconciling figures to identifying the most profitable branches, improving how things run day to day, and planning marketing budgets and future investment with real confidence.
                </p>
              </div>

              {/* Block 5: Action Block */}
              <div className="my-8 p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-ink text-base">See it for yourself</h4>
                  <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed max-w-lg">
                    Ranna's dashboard is available through a live sandbox login. Log in and get a feel for the actual interface instead of looking at a mockup.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={() => setShowDashboardModal(true)}
                    className="rounded-full bg-brand-blue px-5 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-brand-deep hover:scale-[1.04] active:scale-95 cursor-pointer"
                  >
                    Try the Live Sandbox
                  </button>
                  <a
                    href="#booking"
                    className="rounded-full border border-ink/10 px-5 py-2.5 text-xs font-bold text-ink hover:bg-ink/[0.02] transition-all flex items-center gap-1 cursor-pointer"
                  >
                    Book Walkthrough <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">Conclusion</h3>
                <p>
                  By digitizing financial reporting, automating commission and VAT calculations, and extending that same automation into staffing, Selfera turned a fragmented, paper-based process into a system Ranna can actually rely on. What used to take dozens of hours a month now takes about an hour a week, and that's given Ranna a stronger financial foundation to make better decisions, keep tighter control day to day, and grow with confidence across every branch.
                </p>
              </div>

            </div>
          </article>
        </div>
      </section>

      {/* Credentials Modal */}
      <AnimatePresence>
        {showDashboardModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowDashboardModal(false);
                setIsSubmitted(false);
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="bg-white border border-ink/10 rounded-[28px] max-w-md w-full p-8 relative shadow-2xl z-10"
            >
              <button
                onClick={() => {
                  setShowDashboardModal(false);
                  setIsSubmitted(false);
                }}
                className="absolute top-6 right-6 text-ink-secondary hover:text-ink transition-colors p-1.5 rounded-full hover:bg-ink/[0.04] cursor-pointer"
              >
                <X size={18} />
              </button>

              {!isSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    // Simulate API request
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setIsSubmitted(true);
                      setDashboardFormData({
                        name: '',
                        email: '',
                        restaurantName: '',
                        location: '',
                        postCode: '',
                      });
                    }, 1200);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-ink">Get Sandbox Credentials</h3>
                    <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                      Enter your details below to receive temporary access credentials for the Ranna Restaurant Sandbox Dashboard.
                    </p>
                  </div>

                  <div className="mt-2">
                    <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={dashboardFormData.name}
                      onChange={(e) => setDashboardFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink text-ink-secondary"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@restaurant.com"
                      value={dashboardFormData.email}
                      onChange={(e) => setDashboardFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink text-ink-secondary"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Southwark Bistro"
                      value={dashboardFormData.restaurantName}
                      onChange={(e) => setDashboardFormData(prev => ({ ...prev, restaurantName: e.target.value }))}
                      className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink text-ink-secondary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                        Location
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. London"
                        value={dashboardFormData.location}
                        onChange={(e) => setDashboardFormData(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink text-ink-secondary"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                        Postcode
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. SE1 0AA"
                        value={dashboardFormData.postCode}
                        onChange={(e) => setDashboardFormData(prev => ({ ...prev, postCode: e.target.value }))}
                        className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink text-ink-secondary"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-3.5 rounded-full bg-brand-blue hover:bg-brand-deep disabled:bg-brand-blue/70 text-white font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? 'Generating...' : 'Get Sandbox Access'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-2">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-ink">Credentials Generated!</h3>
                  <p className="text-sm text-ink-secondary font-semibold max-w-sm">
                    We've sent temporary sandbox details and the access link to your email inbox. Check it shortly!
                  </p>
                  <button
                    onClick={() => {
                      setShowDashboardModal(false);
                      setIsSubmitted(false);
                    }}
                    className="mt-4 px-6 py-2 rounded-full border border-ink/10 hover:bg-ink/[0.02] text-xs font-bold text-ink transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
