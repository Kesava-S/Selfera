import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, CalendarCheck, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function MicroAutomation() {
  const WORDS = ['boring.', 'routine.', 'lengthy.'];
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

        <div className="mr-auto max-w-4xl w-full flex flex-col items-start text-left z-20">
          
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
              Connect your apps.
            </motion.span>
            <motion.span
              initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="inline-flex items-baseline gap-x-2.5 text-left whitespace-nowrap"
            >
              <span>Automate the</span>
              <span className="inline-grid grid-cols-1 grid-rows-1 justify-items-start h-[1.1em] align-baseline overflow-hidden relative min-w-[200px] sm:min-w-[260px] md:min-w-[340px] text-transparent bg-clip-text bg-gradient-to-r from-[#00f5c0] to-[#0284c7]">
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
            Lightweight, targeted workflows that run silently in the background. Automate: Responses in Social Media, Lead Storage and Management, Followups, Marketing Messages, Bookings and everything you wish digitally.
          </motion.p>

        </div>
      </section>

      {/* Quick Start Solutions Section */}
      <section className="relative z-10 py-16 md:py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-white text-ink border-t border-ink/5">
        <div className="mr-auto max-w-7xl w-full">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tightest text-ink">
            Quick Start Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
            {/* SilentChurn Card */}
            <Link 
              to="/solutions-silentchurn" 
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-[24px] border border-ink/5 bg-[#fbfbfd] hover:border-brand-blue/20 hover:bg-white transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(0,113,227,0.12)] cursor-pointer decoration-none"
            >
              <div>
                {/* Shield Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/10 mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 animate-fade-in">
                  <MessageSquare size={20} />
                </div>

                {/* Subtitle */}
                <span className="text-[10px] font-bold tracking-wider uppercase text-brand-blue">
                  AI Customer Win-Back
                </span>

                {/* Title & Price */}
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-2xl font-extrabold text-ink tracking-tightest">
                    SilentChurn
                  </h3>
                  <span className="text-xs font-bold text-[#008f6b] bg-[#34d399]/10 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                    £49/Month
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-secondary mt-4 leading-relaxed font-medium">
                  SilentChurn automatically detects lost customers and recovers revenue with personalised AI-powered WhatsApp win-back messages.
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors duration-200">
                  Explore SilentChurn <ArrowRight size={14} />
                </span>
              </div>

              {/* Perfect For */}
              <div className="mt-6 border-t border-ink/5 pt-4">
                <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider block mb-2">
                  Perfect For
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Restaurants', 'Cafés', 'Salons', 'Barbers', 'Spas', 'Gyms', 'Clinics', 'Shisha Lounges', 'Hotels'].map((tag) => (
                    <span 
                      key={tag}
                      className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-semibold text-ink-secondary whitespace-nowrap animate-fade-in"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            {/* No-Show Recovery Bot Card */}
            <Link 
              to="/solutions-noshow" 
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-[24px] border border-ink/5 bg-[#fbfbfd] hover:border-brand-blue/20 hover:bg-white transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(0,113,227,0.12)] cursor-pointer decoration-none"
            >
              <div>
                {/* Calendar Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/10 mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 animate-fade-in">
                  <CalendarCheck size={20} />
                </div>

                {/* Subtitle */}
                <span className="text-[10px] font-bold tracking-wider uppercase text-brand-blue">
                  AI RESERVATION RECOVERY
                </span>

                {/* Title & Price */}
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-2xl font-extrabold text-ink tracking-tightest">
                    No-Show Recovery Bot
                  </h3>
                  <span className="text-xs font-bold text-[#008f6b] bg-[#34d399]/10 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                    £49/Month
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-secondary mt-4 leading-relaxed font-medium">
                  Automatically fills cancelled reservations by contacting your waitlist, matching customer preferences, and recovering lost bookings in minutes.
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors duration-200">
                  Explore No-Show Recovery Bot <ArrowRight size={14} />
                </span>
              </div>

              {/* Perfect For */}
              <div className="mt-6 border-t border-ink/5 pt-4">
                <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider block mb-2">
                  Perfect For
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Restaurants', 'Cafés', 'Bars', 'Shisha Lounges', 'Hotels', 'Events', 'Appointment Businesses'].map((tag) => (
                    <span 
                      key={tag}
                      className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-semibold text-ink-secondary whitespace-nowrap animate-fade-in"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Allergen Compliance Checker Card */}
            <Link 
              to="/solutions-allergen" 
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-[24px] border border-ink/5 bg-[#fbfbfd] hover:border-brand-blue/20 hover:bg-white transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(0,113,227,0.12)] cursor-pointer decoration-none"
            >
              <div>
                {/* Shield Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/10 mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 animate-fade-in">
                  <ShieldCheck size={20} />
                </div>

                {/* Subtitle */}
                <span className="text-[10px] font-bold tracking-wider uppercase text-brand-blue">
                  AI MENU COMPLIANCE
                </span>

                {/* Title & Price */}
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-2xl font-extrabold text-ink tracking-tightest">
                    Allergen Compliance Checker
                  </h3>
                  <span className="text-xs font-bold text-[#008f6b] bg-[#34d399]/10 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                    £49/Month
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-secondary mt-4 leading-relaxed font-medium">
                  Automatically verifies every menu item against the 14 major allergens and flags compliance issues before they become a legal risk.
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors duration-200">
                  Explore Allergen Compliance Checker <ArrowRight size={14} />
                </span>
              </div>

              {/* Perfect For */}
              <div className="mt-6 border-t border-ink/5 pt-4">
                <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider block mb-2">
                  Perfect For
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Restaurants', 'Cafés', 'Takeaways', 'Bakeries', 'Hotels', 'Catering', 'Food Businesses'].map((tag) => (
                    <span 
                      key={tag}
                      className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-semibold text-ink-secondary whitespace-nowrap animate-fade-in"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Post-Visit Loyalty & Feedback Loop Card */}
            <Link 
              to="/solutions-loyalty" 
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-[24px] border border-ink/5 bg-[#fbfbfd] hover:border-brand-blue/20 hover:bg-white transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(0,113,227,0.12)] cursor-pointer decoration-none"
            >
              <div>
                {/* Heart Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/10 mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 animate-fade-in">
                  <Heart size={20} />
                </div>

                {/* Subtitle */}
                <span className="text-[10px] font-bold tracking-wider uppercase text-brand-blue">
                  AI CUSTOMER LOYALTY
                </span>

                {/* Title & Price */}
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-2xl font-extrabold text-ink tracking-tightest">
                    Post-Visit Loyalty & Feedback Loop
                  </h3>
                  <span className="text-xs font-bold text-[#008f6b] bg-[#34d399]/10 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                    £49/Month
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-secondary mt-4 leading-relaxed font-medium">
                  Automatically collects customer feedback, boosts Google Reviews, and encourages repeat visits after every meal.
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors duration-200">
                  Explore Post-Visit Loyalty & Feedback Loop <ArrowRight size={14} />
                </span>
              </div>

              {/* Perfect For */}
              <div className="mt-6 border-t border-ink/5 pt-4">
                <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider block mb-2">
                  Perfect For
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Restaurants', 'Cafés', 'Takeaways', 'Hotels', 'Shisha Lounges', 'Bars', 'Food Businesses'].map((tag) => (
                    <span 
                      key={tag}
                      className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-semibold text-ink-secondary whitespace-nowrap animate-fade-in"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
