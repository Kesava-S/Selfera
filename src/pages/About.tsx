import { motion } from 'framer-motion';
import { Target, Eye, Shield } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <>
      <section 
        className="relative z-10 flex min-h-[90vh] flex-col justify-center pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 pt-32 pb-20 bg-[#002b22] text-white overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
      >
        {/* Background Glows */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#0071e3]/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-20">
          
          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Headline */}
            <h1 
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tightest text-white flex flex-col items-start"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              <motion.span
                initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                className="block"
              >
                Empowering SMEs.
              </motion.span>
              <motion.span
                initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="inline-block bg-gradient-to-r from-[#00f5c0] to-[#0284c7] bg-clip-text text-transparent"
              >
                AI Automation is not a luxury anymore.
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
              className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium"
            >
              We help SMEs (owners, managers and staffs) with simple and effective automations that saves at least 10+ hours a week and help you to make data backed decisions and increase productivity.
            </motion.p>
          </div>

          {/* Visualizations Column */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6 select-none">
            {/* Time Saved Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[28px] p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tightest bg-gradient-to-r from-[#00f5c0] to-emerald-400 bg-clip-text text-transparent">
                  10h+
                </span>
                <span className="text-sm sm:text-base font-semibold text-emerald-100/80 leading-snug">
                  saved every single week per operation.
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

            {/* Decision Making Card */}
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
                  data-backed business strategy decisions
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

      {/* Mission Vision Values Section */}
      <section className="relative z-10 py-16 md:py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-white text-ink border-t border-ink/5">
        <div className="mx-auto max-w-7xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest text-ink mb-12">
            Mission, Vision and Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col gap-4 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-bold text-ink tracking-tight">Mission</h3>
              <p className="text-sm text-ink-secondary leading-relaxed font-medium">
                To empower owner-led SMEs with effective AI Automations through personalised business operations, finance and marketing automation services.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col gap-4 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Eye size={20} />
              </div>
              <h3 className="text-xl font-bold text-ink tracking-tight">Vision</h3>
              <p className="text-sm text-ink-secondary leading-relaxed font-medium">
                A future where Owner-Led Small enterprises can compete on a level playing field with global corporations by leveraging custom-fit, self-managing AI agents that work silently in the background and also a solid growth in the employment for youths.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col gap-4 hover:border-brand-blue/10 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-bold text-ink tracking-tight">Values</h3>
              <p className="text-sm text-ink-secondary leading-relaxed font-medium">
                Every role across our company is empowered to take ownership and accountability, put customers first, and uphold the highest standards of security and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
