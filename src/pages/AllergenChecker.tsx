import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertTriangle } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AllergenChecker() {
  const WORDS = ['customers.', 'compliance.', 'safety.'];
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
                Protect your customers.
              </motion.span>
              <motion.span
                initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="inline-flex items-baseline gap-x-2.5 text-left whitespace-nowrap"
              >
                <span>Automate allergen</span>
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
              Keeping allergen information accurate is a legal responsibility, especially when menus, recipes, or suppliers change. Allergen Compliance Checker continuously verifies every menu item against the UK's 14 major allergens and alerts you the moment something becomes non-compliant.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
              className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium"
            >
              No manual reviews. No missed ingredient changes. No compliance guesswork. Just an automated system that helps keep your menu accurate and Natasha's Law compliant.
            </motion.p>
          </div>

          {/* Visualizations Column */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6 select-none">
            {/* Allergens Checked Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[28px] p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tightest bg-gradient-to-r from-[#00f5c0] to-emerald-400 bg-clip-text text-transparent">
                  14
                </span>
                <span className="text-sm sm:text-base font-semibold text-emerald-100/80 leading-snug">
                  major allergens monitored automatically
                </span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                />
              </div>
            </motion.div>

            {/* Natasha's Law compliance Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[28px] p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tightest bg-gradient-to-r from-[#00f5c0] to-[#0071e3] bg-clip-text text-transparent">
                  100%
                </span>
                <span className="text-sm sm:text-base font-semibold text-emerald-100/80 leading-snug">
                  Natasha's Law compliance coverage
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
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
            Set it up once. Allergen Compliance Checker monitors for you.
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
                  Step 1: Upload your menu
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  Import your menu, recipes, or ingredient list once. The system builds an allergen profile for every dish.
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
                  Step 2: Every item is analysed
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  AI checks each menu item against all 14 legally recognised allergens and verifies that every declaration is complete.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-ink-secondary font-semibold mt-3.5 pl-1 w-full">
                  {[
                    'Cereals (gluten)', 'Crustaceans', 'Eggs', 'Fish', 
                    'Peanuts', 'Soybeans', 'Milk', 'Nuts', 
                    'Celery', 'Mustard', 'Sesame', 'Sulphites', 
                    'Lupin', 'Molluscs'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <Check size={12} className="text-[#008f6b] shrink-0" />
                      <span className="whitespace-nowrap">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                3
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 3: Menu changes are monitored
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  Whenever you update a recipe, ingredient, or supplier, the system automatically checks whether the allergen information is still accurate.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] md:col-span-2 lg:col-span-1">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                4
              </span>
              <div className="w-full">
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  Step 4: Instant compliance alerts
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  If an allergen declaration is missing or incorrect, you're notified immediately.
                </p>

                {/* Simulated Warning Alert */}
                <div className="mt-4 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 p-4 flex gap-3 relative shadow-sm">
                  <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider">
                      Compliance Warning
                    </span>
                    <p className="text-xs text-amber-950 leading-relaxed font-bold mt-1">
                      ⚠️ Chicken Caesar Wrap
                    </p>
                    <p className="text-xs text-amber-900 leading-relaxed font-medium">
                      Milk allergen declaration missing. Please review before publishing.
                    </p>
                  </div>
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
                  Step 5: Fix issues before customers see them
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  Correct the flagged item and keep your menu compliant before it reaches customers or creates legal risk.
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
                  Step 6: Weekly compliance report
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-medium mt-2">
                  Receive a weekly summary showing: menu items checked, compliance issues detected, items requiring review, and overall compliance status.
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
            One prevented compliance mistake can save far more than the monthly cost.
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
