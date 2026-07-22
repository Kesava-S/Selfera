import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CaseStudies() {
  const [isRannaExpanded, setIsRannaExpanded] = useState(false);
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#case-study-ranna' || hash === '#case-studies-ranna') {
        setIsRannaExpanded(true);
      }
    }
  }, []);

  const handleBackToList = () => {
    setIsRannaExpanded(false);
    if (typeof window !== 'undefined') {
      window.location.hash = '#case-studies';
    }
  };

  const handleOpenRanna = () => {
    setIsRannaExpanded(true);
    if (typeof window !== 'undefined') {
      window.location.hash = '#case-study-ranna';
    }
  };

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
            How we partner with owner-led business managers and owners to replace repeated and complex admin operations with premium digital operations workflows.
          </motion.p>
        </div>
      </section>

      {/* Case Study Listing / Detail Section */}
      <section className="relative z-10 py-16 md:py-24 px-6 bg-white text-ink border-t border-ink/5">
        <div className="mx-auto max-w-4xl w-full">
          <AnimatePresence mode="wait">
            {!isRannaExpanded ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col gap-8"
              >
                {/* Case Study Card 1 */}
                <div 
                  onClick={handleOpenRanna}
                  className="group block p-8 sm:p-10 rounded-[32px] bg-[#fbfbfd] border border-ink/5 hover:border-ink/10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(29,29,31,0.02)] cursor-pointer text-left"
                >
                  <div className="flex flex-wrap gap-2 items-center text-xs text-brand-blue font-bold uppercase tracking-wider mb-4">
                    <span className="bg-brand-blue/5 px-2.5 py-1 rounded-full">Hospitality</span>
                    <span className="bg-brand-blue/5 px-2.5 py-1 rounded-full">5 London Branches</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tightest leading-snug group-hover:text-brand-blue transition-colors duration-200">
                    1. From Revenue to Rotas: Everything We Manage for Ranna
                  </h2>

                  <p className="mt-4 text-sm sm:text-base text-ink-secondary font-medium leading-relaxed max-w-3xl">
                    How a five-branch London restaurant group replaced Excel sheets, handwritten records, and guessed approximate commission rates with one accurate connected system. Every pound in, every fee out, cash control, staffing, and marketing. Here is the full scope of what that actually involved.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-blue group-hover:gap-3 transition-all duration-200">
                    Read Full Case Study <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                {/* Back Link */}
                <button
                  onClick={handleBackToList}
                  className="mb-8 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-ink-secondary hover:text-ink transition-colors cursor-pointer"
                >
                  <ArrowLeft size={16} /> Back to Case Studies
                </button>

                <article className="prose prose-lg prose-slate max-w-none">
                  {/* Header / Title */}
                  <header className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink mb-2 leading-tight">
                      From Paper and Excel to One Connected System: How Selfera Rebuilt Financial and Operational Control for Ranna, a Five-Branch London Restaurant Group, London
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-brand-blue uppercase tracking-widest mt-1">
                      (No extra tools and subscriptions)
                    </p>
                    <div className="flex flex-wrap gap-3 items-center text-xs text-ink-secondary font-bold uppercase mt-6 tracking-wider">
                      <span className="bg-ink/5 px-3 py-1.5 rounded-full">Industry: Hospitality</span>
                      <span className="bg-ink/5 px-3 py-1.5 rounded-full">Branches: 5 Sites</span>
                      <span className="bg-ink/5 px-3 py-1.5 rounded-full">Saved: 10+ Hours/Week</span>
                      <span className="bg-ink/5 px-3 py-1.5 rounded-full">First Release: 3 Weeks</span>
                    </div>
                  </header>

                  {/* Content Blocks */}
                  <div className="flex flex-col gap-10 text-[15px] sm:text-base leading-relaxed text-ink-secondary font-medium">
                    
                    {/* Block 1: Overview */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">Overview</h3>
                      <p className="mb-4">
                        Ranna is a growing restaurant group with five branches across London. Revenue was arriving from every direction at once: dine-in, in-house delivery, collection, and three delivery platforms (Uber Eats, Deliveroo, Just Eat), each with its own commission structure, its own VAT treatment, and its own invoice format.
                      </p>
                      <p>
                        The owner had no single view of how the business was actually performing. Records lived in a mix of Excel sheets and handwritten notes, different in every branch.
                      </p>
                      <p className="mt-4">
                        Selfera designed and built a complete digital operating system for the group: branch websites, a centralized financial dashboard, cash and expense controls, and staffing automation, all connected in one place. This is what we did, in the order we did it.
                      </p>
                    </div>

                    {/* Block 2: The Challenge */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">The Challenge</h3>
                      <p className="mb-4">
                        Every branch closed the day differently. End of Day figures were logged in Excel at some sites and handwritten at others. Platform sales, in-store sales, and cash takings were tracked separately, so understanding real performance meant piecing fragments together days later.
                      </p>
                      <p className="mb-4">
                        Three problems sat underneath everything:
                      </p>
                      <ul className="list-disc pl-5 flex flex-col gap-2 mb-6">
                        <li><strong>Nobody knew the real commission rates:</strong> Working out actual revenue meant estimating platform commissions, VAT, and ad spend by hand. The rates being used were assumptions, not facts.</li>
                        <li><strong>Small costs were hidden:</strong> Petty cash purchases and daily expenses were not tracked at all. Money left the till with no record.</li>
                        <li><strong>The paperwork did not match the business:</strong> Five physical branches were being billed by platforms under seven different account names, which made balancing the numbers close to impossible for anyone working from invoices alone.</li>
                      </ul>

                      <div className="my-6 p-6 rounded-[24px] bg-[#fbfbfd] border border-ink/5 border-l-4 border-l-brand-blue">
                        <p className="text-sm font-bold text-ink italic leading-relaxed">
                          "Bow and Dalston branches in particular were losing around 3 hours a day just manually working out petty expenses, commission percentages, and VAT. Across all five branches, that added up to over 10 hours a week spent on checking the figures instead of running the business."
                        </p>
                      </div>

                      <p className="mb-4 mt-6">
                        Sorting out the numbers was only the start. The full project covered every layer of the business:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm mt-4">
                        <div className="p-5 rounded-2xl bg-[#fbfbfd] border border-ink/5 flex flex-col gap-2">
                          <h4 className="font-bold text-ink text-sm uppercase tracking-wider text-xs text-brand-blue">Money In</h4>
                          <ul className="list-disc pl-4 flex flex-col gap-1.5 text-xs">
                            <li>All delivery platform revenue (Uber Eats, Deliveroo, Just Eat) with rates configured per branch and per order type</li>
                            <li>In-store cash and card, in-house delivery, collection, and online orders</li>
                            <li>Off-till income: catering, bulk orders, and corporate invoices</li>
                          </ul>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#fbfbfd] border border-ink/5 flex flex-col gap-2">
                          <h4 className="font-bold text-ink text-sm uppercase tracking-wider text-xs text-brand-blue">Money Out</h4>
                          <ul className="list-disc pl-4 flex flex-col gap-1.5 text-xs">
                            <li>Commission percentages audited from real invoices, not assumptions</li>
                            <li>VAT, including three different treatments across the three platforms</li>
                            <li>Petty expenses with an approval workflow and receipt uploads</li>
                            <li>Hidden platform fees: per-order admin fees, paid placement fees, bag fees, refunds, promotional vouchers, ad spend, and chargebacks</li>
                            <li>Card processing fees across three separate providers: in-store, driver, and online payments</li>
                          </ul>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#fbfbfd] border border-ink/5 flex flex-col gap-2">
                          <h4 className="font-bold text-ink text-sm uppercase tracking-wider text-xs text-brand-blue">Cash Control & Structure</h4>
                          <ul className="list-disc pl-4 flex flex-col gap-1.5 text-xs">
                            <li>Till float per branch, daily till differences, cash-in-bag at close, and loss tracking with reasons</li>
                            <li>Five branches billed as seven entities untangled by matching invoice addresses</li>
                            <li>Duplicate platform accounts identified</li>
                            <li>Double-counting between till records and the expense ledger designed out of the system</li>
                          </ul>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#fbfbfd] border border-ink/5 flex flex-col gap-2">
                          <h4 className="font-bold text-ink text-sm uppercase tracking-wider text-xs text-brand-blue">Operations & Marketing</h4>
                          <ul className="list-disc pl-4 flex flex-col gap-1.5 text-xs">
                            <li>Wages calculated Sunday to Saturday, sales reported Monday to Sunday</li>
                            <li>Rota learning, automatic leave reallocation, and WhatsApp notifications to managers</li>
                            <li>Automated lead capture, instant enquiry replies, daily performance pulls, and weekly reports, already live</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Block 3: What We Built */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">What We Built</h3>
                      
                      <div className="flex flex-col gap-6">
                        <div>
                          <h4 className="font-bold text-ink text-base">1. Branch websites, connected to the system</h4>
                          <p className="mt-1 text-sm">
                            We designed and built Ranna's websites and integrated them directly with the dashboard, so the web presence and the operations system work as one platform rather than two disconnected products. Online enquiries and orders flow into the same system the owner already checks every day.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-ink text-base">2. Detailed commission check, before writing a line of dashboard logic</h4>
                          <p className="mt-1 text-sm mb-2">
                            Instead of configuring the dashboard with assumed rates, we audited Ranna's actual platform invoices line by line. What we found changed the build:
                          </p>
                          <ul className="list-disc pl-5 flex flex-col gap-1 text-sm">
                            <li>Commission rates were not one number. They varied by platform, by branch, and by order type, ranging from 13% to 36%.</li>
                            <li>VAT treatment differed by platform. Some platforms add 20% VAT on top of their commission; others handle VAT through reverse charge so it never touches the payout at all. Treating them the same overstates or understates real revenue every single day.</li>
                            <li>Weekly platform fees existed that nobody was tracking: per-order admin fees, paid visibility placements, bag fees, refund deductions, and advertising spend, all quietly reducing payouts.</li>
                            <li>The group's five branches were billed as seven entities. Two branches were each running duplicate platform accounts under different trading names. We untangled this by matching registered addresses across every invoice.</li>
                          </ul>
                          <p className="mt-2 text-sm">Every rate in the dashboard is now configured per branch, per platform, per order type, from evidence rather than assumption.</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-ink text-base">3. Digital End of Day reporting with full cash control</h4>
                          <p className="mt-1 text-sm mb-2">
                            Branch managers now submit a standardized EOD report through one system. It captures every revenue channel separately: in-store cash and card, in-house delivery, collection, online orders, and each delivery platform, with commission and VAT calculated automatically using the audited rates.
                          </p>
                          <p className="text-sm font-semibold text-ink">The EOD is also a cash control system:</p>
                          <ul className="list-disc pl-5 flex flex-col gap-1 text-sm">
                            <li>A fixed till float per branch, with daily till difference tracked against it and against the previous day</li>
                            <li>Cash-in-bag calculation at close</li>
                            <li>Loss tracking with reasons, so missing cash is spotted instead of staying hidden</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-ink text-base">4. Expense tracking with approval, not just logging</h4>
                          <p className="mt-1 text-sm">
                            Staff and managers submit expenses through a dedicated form with receipt upload, category, payment mode, and VAT rate. Nothing enters the books until an admin approves it. The system is deliberately designed so till-side expense records and the approved expense ledger never double-count the same money, a subtle overlap that quietly corrupts most manual systems.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-ink text-base">5. Income log for revenue that never touches the till</h4>
                          <p className="mt-1 text-sm">
                            Bulk orders, catering, and corporate bookings paid by invoice or bank transfer are captured in a separate income log with customer records and VAT handling, so off-till revenue finally appears in the same financial picture as daily trade.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-ink text-base">6. Role-based access</h4>
                          <p className="mt-1 text-sm">
                            Owner, manager, and staff each see what their role requires. Financial data is visible to the owner only. Managers run their branch. Staff see what they need and nothing more.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-ink text-base">7. Reporting cycles that match how Ranna actually operates</h4>
                          <p className="mt-1 text-sm">
                            Wages are calculated Sunday to Saturday. Sales are reported Monday to Sunday. The dashboard follows Ranna's real working rhythm instead of forcing a generic calendar onto the business.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-ink text-base">8. Staffing and operations automation</h4>
                          <ul className="list-disc pl-5 flex flex-col gap-1 text-sm">
                            <li>An automated WhatsApp assistant sends report reminders and operations notifications straight to managers, in a channel they already use every day</li>
                            <li>AI-driven rota learning picks up how each branch schedules its team and helps managers automate future rotas</li>
                            <li>Automatic leave reallocation covers shifts when staff take unexpected or last-minute leave, without anyone scrambling</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-ink text-base">9. Marketing automation, already running</h4>
                          <p className="mt-1 text-sm">
                            Alongside the financial system, Ranna's marketing layer is live: automated lead capture from the websites, instant replies to enquiries, daily performance pulls, and an automated weekly report. The next phase integrates this marketing layer directly into the dashboard, so reviews, campaigns, and enquiries sit beside revenue in one view.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Block 4: What the Audit Found */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4">What the Audit Found (and Saved)</h3>
                      <p className="mb-4">
                        The invoice audit did more than fix configuration. It showed choices worth real money:
                      </p>
                      <ul className="list-disc pl-5 flex flex-col gap-2">
                        <li><strong>Advertising with negative return:</strong> One platform account was spending more on ads each month than it received in total payouts. The spend was provably losing money on every order, and nobody could see it because ad costs only appeared as a line buried in a monthly statement.</li>
                        <li><strong>Identical shops on very different deals:</strong> Branches doing comparable volumes were paying meaningfully different commission rates for the same service, giving the owner a factual basis to renegotiate the expensive contracts using the better ones as leverage.</li>
                        <li><strong>A permanent fix, not a one-off:</strong> Variable platform deductions (ad spend, refunds, promotional vouchers, bag fees, weekly placement fees) are now checked and sorted monthly by admin inside the dashboard, so costs can never stay hidden again.</li>
                      </ul>
                    </div>

                    {/* Block 5: The Results */}
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
                          <span className="text-3xl font-extrabold text-[#0071e3] block mb-1">100% Hidden Costs</span>
                          <h4 className="font-bold text-ink text-sm">Full Cost Visibility</h4>
                          <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                            Exact commission, VAT, petty cash, platform fees, and daily expenses are tracked in real-time.
                          </p>
                        </div>
                      </div>

                      <p className="mb-4">
                        <strong>Faster to real value than expected:</strong> The core financial dashboard and rota system went live for testing within <strong>3 weeks</strong>. Ranna's broader requirements, including staff training videos, kitchen safety checks, policy sign-offs, and structured onboarding built into the same dashboard, are rolling out over a <strong>4-month roadmap</strong>, alongside a finance module that will track weekly cash position, labour cost percentage, and alert the owner before cash reserves run thin.
                      </p>
                      <p className="mb-4">
                        All financial records are stored securely with receipts attached, retained in line with HMRC's 6-year requirement, without anyone having to think about it.
                      </p>
                      <p>
                        With reliable information in one place, Ranna's focus has shifted from sorting out numbers to identifying the most profitable branches, tightening day-to-day control, and planning marketing budgets and future investment with confidence.
                      </p>
                    </div>

                    {/* Block 6: Action Block */}
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
                        Selfera did not just digitise Ranna's paperwork. We audited the money first, corrected the numbers the business was running on, then built the websites, financial controls, staffing automation, and marketing layer around how Ranna actually operates. What used to take dozens of hours a month now takes about an hour a week, and every figure the owner sees is real.
                      </p>
                    </div>

                  </div>
                </article>
              </motion.div>
            )}
          </AnimatePresence>
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
