import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function LoyaltyLoop() {
  const WORDS = ['loyalty.', 'reviews.', 'growth.'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section 
        className="relative z-10 flex min-h-[100vh] flex-col justify-center pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 pt-32 pb-20 bg-[#002b22] text-white overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
      >
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#0071e3]/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-20">
          
          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tightest text-white flex flex-col items-start"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              <motion.span
                initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                className="block"
              >
                Turn every visit into loyalty.
              </motion.span>
              <motion.span
                initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="inline-flex items-baseline gap-x-2.5 text-left whitespace-nowrap"
              >
                <span>Automate reviews &amp;</span>
                <span className="inline-grid grid-cols-1 grid-rows-1 justify-items-start h-[1.1em] align-baseline overflow-hidden relative min-w-[180px] sm:min-w-[240px] md:min-w-[320px] text-transparent bg-clip-text bg-gradient-to-r from-[#00f5c0] to-[#0284c7]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={WORDS[wordIndex]}
                      initial={{ y: 24, scale: 0.85, opacity: 0 }}
                      animate={{ y: 0, scale: 1, opacity: 1 }}
                      exit={{ y: -24, scale: 0.85, opacity: 0 }}
                      transition={{
                        y: { type: 'spring', stiffness: 380, damping: 24 },
                        scale: { type: 'spring', stiffness: 380, damping: 20 },
                        opacity: { duration: 0.18 },
                      }}
                      className="[grid-area:1/1] whitespace-nowrap bg-gradient-to-r from-[#00f5c0] to-[#0284c7] bg-clip-text text-transparent"
                    >
                      {WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
              className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium"
            >
              Most customers leave without giving feedback—and many never return. Post-Visit Loyalty &amp; Feedback Loop automatically follows up after every visit, collects private feedback, directs happy customers to leave Google Reviews, and resolves unhappy experiences before they become public.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
              className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium"
            >
              No manual follow-ups. No chasing reviews. No damaged reputation. Just an automated system that grows your reputation while bringing customers back.
            </motion.p>
          </div>

          {/* Visualizations Column */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6 select-none">
            {/* Google Rating Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[28px] p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tightest bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent flex items-baseline">
                  4.9
                  <span className="text-2xl font-bold ml-1 text-amber-400">★</span>
                </span>
                <span className="text-sm sm:text-base font-semibold text-emerald-100/80 leading-snug">
                  target average rating boost on Google Reviews
                </span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '98%' }}
                  transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                />
              </div>
            </motion.div>

            {/* Response Rate Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[28px] p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tightest bg-gradient-to-r from-[#00f5c0] to-emerald-400 bg-clip-text text-transparent">
                  74%
                </span>
                <span className="text-sm sm:text-base font-semibold text-emerald-100/80 leading-snug">
                  feedback response rate via conversational WhatsApp
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '74%' }}
                  transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Set It Up Once Section */}
      <section className="relative z-10 py-16 md:py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-white text-ink border-t border-ink/5">
        <div className="mr-auto max-w-7xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest text-ink text-center w-full max-w-5xl mx-auto leading-tight md:whitespace-nowrap">
            Set it up once. Post-Visit Loyalty &amp; Feedback Loop works for you.
          </h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
            {/* Step 1 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                1
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 1: Customer finishes their visit
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  After dining, the customer automatically receives a friendly WhatsApp message thanking them for visiting.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                2
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 2: AI collects private feedback
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  The customer is asked about their experience with a quick, simple feedback request. No lengthy surveys. Just a natural conversation.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] md:col-span-2 lg:col-span-1">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                3
              </span>
              <div className="w-full">
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 3: Happy customers are invited to leave a review
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  If the feedback is positive, the system automatically sends a Google Review link.
                </p>

                {/* Simulated Google Review Invitation */}
                <div className="mt-4 rounded-2xl bg-[#efeae2] border border-ink/5 p-4 flex flex-col gap-2 relative shadow-sm font-sans">
                  <span className="text-[10px] text-ink-muted uppercase font-bold tracking-wider">
                    WhatsApp Business
                  </span>
                  <div className="rounded-[18px] rounded-tl-none bg-white p-3 text-xs text-ink shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                    <p className="leading-relaxed font-medium">
                      ⭐ We're so glad you enjoyed your visit! Would you mind sharing your experience with others? It only takes a minute.
                    </p>
                    <span className="text-[9.5px] text-brand-blue hover:underline font-bold block mt-2 cursor-pointer flex items-center gap-1">
                      g.page/selfera/review <Star size={10} className="fill-amber-400 text-amber-400" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                4
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 4: Unhappy customers stay private
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  If a customer reports a poor experience, they're invited to share more details directly with your team instead of posting publicly. Your staff is notified so the issue can be resolved quickly.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                5
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 5: Encourage the next visit
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  After positive feedback, AI sends a personalised message encouraging the customer to return, with an optional offer or reminder for their next visit.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                6
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 6: Weekly loyalty report
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  Every week you receive a summary showing: feedback collected, new Google Reviews generated, negative feedback intercepted, and repeat visits encouraged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-16 md:py-24 px-6 bg-[#002b22] text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001e18] to-[#002b22] opacity-50" />
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl w-full flex flex-col items-center justify-center z-20 relative">
          <p className="text-base sm:text-lg font-bold text-[#00f5c0] mb-6 leading-relaxed">
            One extra returning customer can cover the monthly cost.
          </p>

          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tightest bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              £49
            </span>
            <span className="text-xl sm:text-2xl font-bold text-emerald-100/50">
              / month
            </span>
          </div>

          <p className="mt-8 text-base sm:text-lg md:text-xl font-medium text-emerald-100/80 max-w-2xl leading-relaxed">
            Everything included. No setup fee. No long-term contract. Cancel any time.
          </p>
        </div>
      </section>
    </>
  );
}
