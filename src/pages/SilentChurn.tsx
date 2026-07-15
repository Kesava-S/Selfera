import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SilentChurn() {
  const WORDS = ['win-back.', 'retention.', 'revenue.'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

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
                Recover lost customers.
              </motion.span>
              <motion.span
                initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="inline-flex items-baseline gap-x-2.5 text-left whitespace-nowrap"
              >
                <span>Automate the</span>
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
              Every business loses loyal customers without noticing. SilentChurn monitors customer activity, detects when a regular stops returning, and automatically sends a personalised AI-powered WhatsApp message at the right time to bring them back.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
              className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium"
            >
              No manual follow-ups. No spreadsheets. No chasing customers. Just an automated system that quietly recovers lost revenue while you focus on running your business.
            </motion.p>
          </div>

          {/* Visualizations Column */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6 select-none">
            {/* Churn Rate Visualization Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[28px] p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tightest bg-gradient-to-r from-rose-400 to-orange-500 bg-clip-text text-transparent">
                  35%
                </span>
                <span className="text-sm sm:text-base font-semibold text-emerald-100/80 leading-snug">
                  of regulars leave silently every year
                </span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '35%' }}
                  transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
                  className="h-full bg-gradient-to-r from-rose-500 to-orange-400 rounded-full"
                />
              </div>
            </motion.div>

            {/* Win-Back Rate Visualization Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[28px] p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tightest bg-gradient-to-r from-[#00f5c0] to-emerald-400 bg-clip-text text-transparent">
                  28%
                </span>
                <span className="text-sm sm:text-base font-semibold text-emerald-100/80 leading-snug">
                  win-back rate with the right message at the right time
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '28%' }}
                  transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
                  className="h-full bg-gradient-to-r from-[#00f5c0] to-emerald-400 rounded-full"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Set It Up Once Section */}
      <section className="relative z-10 py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-white text-ink border-t border-ink/5">
        <div className="mr-auto max-w-7xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest text-ink text-center w-full max-w-5xl mx-auto leading-tight md:whitespace-nowrap">
            Set it up once. Selfera Monitors for you
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
                  Step 1: Customers get added to your list
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  After each appointment, your customer scans a QR code at the till (10 seconds), or you send a quick WhatsApp message. That is all the input the system ever needs from you.
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
                  Step 2: The system learns their visit pattern
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  SilentChurn tracks how often each customer usually visits and builds a personal rhythm for every single client. Not a generic 4-week reminder, but one based on her actual behaviour.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                3
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 3: It spots when someone goes quiet
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  Every night, the system checks every customer. If someone is overdue based on their personal pattern, they are flagged automatically.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                4
              </span>
              <div className="w-full">
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 4: A personalised WhatsApp goes out
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  AI writes a warm, natural message and sends it from your salon's WhatsApp Business number. No action needed from you.
                </p>
                {/* Simulated WhatsApp Bubble */}
                <div className="mt-4 bg-[#e7ffdb] text-[#111b21] p-3.5 rounded-2xl rounded-tl-none border border-[#d9fdd3] text-xs font-normal max-w-xs shadow-sm relative">
                  <p className="leading-normal">
                    "Hey Priya! It's been a little while since your last visit 😊 We've got some slots this week if you fancy coming in, just reply here and we'll sort you out."
                  </p>
                  <span className="text-[9px] text-[#667781] block text-right mt-1.5 font-medium">10:14 AM</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                5
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 5: If no reply, one more message with an offer
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  Seven days later, if she has not responded, one final message goes out with a small gesture, such as 10% off or a free nail art design. After that, the system stops. No spam, ever.
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
                  Step 6: Weekly results report to your WhatsApp
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  Every week you get a summary: messages sent, customers recovered, and revenue saved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-[#002b22] text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001e18] to-[#002b22] opacity-50" />
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl w-full flex flex-col items-center justify-center z-20 relative">
          <p className="text-base sm:text-lg font-bold text-[#00f5c0] mb-6">
            SilentChurn earns back its cost from just one customer.
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

      {/* FAQ Floating Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsFaqOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-brand-blue text-white font-bold text-sm shadow-lg shadow-brand-blue/30 hover:bg-brand-blue/90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <HelpCircle size={18} />
          <span>FAQ</span>
        </button>
      </div>

      {/* FAQ Modal */}
      <AnimatePresence>
        {isFaqOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFaqOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative w-full max-w-2xl bg-white text-ink rounded-[28px] shadow-2xl overflow-hidden border border-ink/5 max-h-[85vh] flex flex-col z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-ink/5">
                <h3 className="text-xl font-extrabold text-ink tracking-tight">
                  Frequently Asked Questions
                </h3>
                <button
                  onClick={() => setIsFaqOpen(false)}
                  className="p-1 rounded-full hover:bg-ink/5 text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto p-6 sm:p-8 flex flex-col gap-6 scrollbar-thin">
                <div>
                  <h4 className="font-bold text-base text-ink tracking-tight">
                    Do I need a booking system?
                  </h4>
                  <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-1">
                    No. SilentChurn is built specifically for walk-in salons. You log visits with a 5-second WhatsApp message or your customers scan a QR code at the till.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-ink tracking-tight">
                    Will my customers know it is automated?
                  </h4>
                  <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-1">
                    The messages are written by AI to sound natural and personal. They come from your salon's own WhatsApp Business number. Most customers think it is a personal message from you.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-ink tracking-tight">
                    What if a customer does not want messages?
                  </h4>
                  <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-1">
                    They simply reply STOP. The system removes them permanently and immediately. No one is ever chased or spammed.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-ink tracking-tight">
                    How long does setup take?
                  </h4>
                  <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-1">
                    We handle the full setup. Most salons are live within 3 to 5 business days.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-ink tracking-tight">
                    Is there a contract?
                  </h4>
                  <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-1">
                    No. Month to month. Cancel any time with no penalty.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-ink tracking-tight">
                    What do I actually have to do?
                  </h4>
                  <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-1">
                    Just log each visit either via a QR code or a quick WhatsApp message. Everything else is fully automated.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
