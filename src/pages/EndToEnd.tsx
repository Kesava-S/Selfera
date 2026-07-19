import { motion } from 'framer-motion';
import { Check, ShieldAlert, Zap, Globe, MessageSquare, LineChart } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function EndToEnd() {
  return (
    <>
      <section 
        className="relative z-10 flex min-h-[50vh] flex-col justify-center pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 pt-32 pb-16 bg-[#002b22] text-white overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
      >
        {/* Background Glows */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#0071e3]/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl w-full z-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-bold text-[#00f5c0] uppercase tracking-widest"
          >
            Complete Business Automation
          </motion.span>
          <h1 
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tightest text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            <motion.span
              initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="block"
            >
              End-to-End Systems
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium"
          >
            Connect your marketing, lead response, social presence, and reputation monitoring into one unified, fully automated workflow built for your business.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative z-10 py-16 md:py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-white text-ink border-t border-ink/5">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Starter Tier */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="rounded-[32px] border border-ink/5 bg-[#fbfbfd] p-8 sm:p-10 flex flex-col justify-between h-full transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_20px_48px_-12px_rgba(0,113,227,0.06)]"
            >
              <div>
                <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue uppercase tracking-wider">
                  Starter
                </span>
                <h2 className="text-3xl font-black mt-4 text-ink tracking-tightest">
                  STARTER
                </h2>
                <p className="text-sm font-semibold text-ink-secondary mt-2 leading-relaxed">
                  Best for businesses just getting started with automation
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-sm text-ink-secondary font-bold">Monthly retainer from</span>
                  <span className="text-3xl font-extrabold text-ink">£249</span>
                  <span className="text-sm text-ink-muted">/month</span>
                </div>

                {/* What happens automatically every day */}
                <div className="mt-8 border-t border-ink/5 pt-8">
                  <h3 className="text-base font-bold text-ink uppercase tracking-wider">
                    What happens automatically every day:
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue mt-0.5">
                        <ShieldAlert size={12} />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        Your ads on Google and Meta are monitored, so you get an instant alert if spend goes over budget
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue mt-0.5">
                        <Zap size={12} />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        Every lead that comes in gets a personalised reply within 60 seconds, sent by email and WhatsApp
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue mt-0.5">
                        <Globe size={12} />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        Your Google Business Profile stays active with weekly posts published for you
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue mt-0.5">
                        <MessageSquare size={12} />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        New reviews are flagged the moment they appear, allowing you to respond before they affect your reputation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue mt-0.5">
                        <LineChart size={12} />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        Every Monday you receive a clean report showing exactly how your marketing performed last week
                      </span>
                    </li>
                  </ul>
                </div>

                {/* What you get */}
                <div className="mt-8 border-t border-ink/5 pt-8">
                  <h3 className="text-base font-bold text-ink uppercase tracking-wider">
                    What you get:
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-[#008f6b] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-ink-secondary">
                        2 ad platforms connected (Google Ads + Meta Ads)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-[#008f6b] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-ink-secondary">
                        Instant lead response via email and WhatsApp
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-[#008f6b] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-ink-secondary">
                        Automated chatbot on Facebook, Instagram, and WhatsApp
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-[#008f6b] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-ink-secondary">
                        Google Business Profile automation
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={16} className="text-[#008f6b] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-ink-secondary">
                        Weekly performance report delivered to your inbox
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Pro Tier */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="rounded-[32px] border border-brand-blue/10 bg-gradient-to-b from-[#fbfbfd] to-[#f4f7fa] p-8 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 hover:border-brand-blue/20 hover:shadow-[0_20px_48px_-12px_rgba(0,113,227,0.08)]"
            >
              <div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Pro
                </span>
                <h2 className="text-3xl font-black mt-4 text-ink tracking-tightest">
                  PRO
                </h2>
                <p className="text-sm font-semibold text-ink-secondary mt-2 leading-relaxed">
                  Best for businesses ready to scale with a full automated marketing engine
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-sm text-ink-secondary font-bold">Monthly retainer from</span>
                  <span className="text-3xl font-extrabold text-ink">£349</span>
                  <span className="text-sm text-ink-muted">/month</span>
                </div>

                {/* Everything in Starter, plus */}
                <div className="mt-8 border-t border-ink/5 pt-8">
                  <h3 className="text-base font-bold text-ink uppercase tracking-wider">
                    Everything in Starter, plus:
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#008f6b]/10 text-[#008f6b] mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        All four ad platforms connected, including Google, Meta, LinkedIn, and TikTok
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#008f6b]/10 text-[#008f6b] mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        AI-powered chatbot that handles complex conversations naturally across all channels
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#008f6b]/10 text-[#008f6b] mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        Automated booking system where customers book, get confirmed, and receive reminders without you involved
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#008f6b]/10 text-[#008f6b] mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        Review requests sent automatically after every completed booking or purchase
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#008f6b]/10 text-[#008f6b] mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        Overdue invoice reminders sent automatically
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#008f6b]/10 text-[#008f6b] mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        AI-written weekly report providing a plain English summary of what worked, what did not, and what to do next week
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#008f6b]/10 text-[#008f6b] mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-ink-secondary leading-relaxed">
                        Full attribution tracking to see exactly which ad brought which customer
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="relative z-10 py-16 md:py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-[#002b22] text-white border-t border-emerald-500/10 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl w-full relative z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest text-center text-white mb-16">
            What to expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Timeline Item 1 */}
            <div className="relative p-6 rounded-[24px] bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
              <div>
                <span className="text-xs font-bold text-[#00f5c0] uppercase tracking-wider block mb-2">
                  Timeline
                </span>
                <h3 className="text-xl font-extrabold tracking-tight text-white">
                  Week 1-4
                </h3>
                <p className="mt-3 text-sm text-emerald-100/70 leading-relaxed font-semibold">
                  We set up your system, connect your platforms, and configure everything to your business.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative p-6 rounded-[24px] bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
              <div>
                <span className="text-xs font-bold text-[#00f5c0] uppercase tracking-wider block mb-2">
                  Launch
                </span>
                <h3 className="text-xl font-extrabold tracking-tight text-white">
                  Week 5-6
                </h3>
                <p className="mt-3 text-sm text-emerald-100/70 leading-relaxed font-semibold">
                  Your system goes live. Leads start being captured and responded to automatically. Your first weekly report arrives.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative p-6 rounded-[24px] bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
              <div>
                <span className="text-xs font-bold text-[#00f5c0] uppercase tracking-wider block mb-2">
                  Insights
                </span>
                <h3 className="text-xl font-extrabold tracking-tight text-white">
                  Week 7-8
                </h3>
                <p className="mt-3 text-sm text-emerald-100/70 leading-relaxed font-semibold">
                  You start seeing which channels are performing. We optimise based on real data.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative p-6 rounded-[24px] bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
              <div>
                <span className="text-xs font-bold text-[#00f5c0] uppercase tracking-wider block mb-2">
                  Growth
                </span>
                <h3 className="text-xl font-extrabold tracking-tight text-white">
                  Week 9 onwards
                </h3>
                <p className="mt-3 text-sm text-emerald-100/70 leading-relaxed font-semibold">
                  The system runs itself. You focus on the business. We monitor, refine, and improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
