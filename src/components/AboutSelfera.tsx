import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutSelfera() {
  return (
    <section className="relative z-20 pb-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-16 sm:gap-24 text-center items-center">
        {/* Column 1: What Selfera is */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col items-center justify-start max-w-3xl"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tightest text-ink leading-tight mb-4">
            What Selfera is
          </h3>
          <span className="text-lg sm:text-xl font-semibold tracking-tight text-brand-blue mb-6 block">
            Enterprise level capabilities. Built for you
          </span>
          <div className="text-base sm:text-lg text-ink-secondary leading-relaxed space-y-4 font-normal max-w-2xl">
            <p>
              We empower SME owners with customised AI-powered business systems that bring management, marketing, automation, and analytics together in one connected platform.
            </p>
            <p>
              Instead of investing in multiple teams and expensive tools, owners gain the clarity and capabilities needed to understand performance, identify opportunities, and make data-backed decisions.
            </p>
          </div>
        </motion.div>

        {/* Column 2: Why Selfera */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col items-center justify-start max-w-3xl"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tightest text-ink leading-tight mb-4">
            Why Selfera
          </h3>
          <span className="text-lg sm:text-xl font-semibold tracking-tight text-brand-blue mb-6 block">
            You get a dedicated Automation Associate with your product
          </span>
          <div className="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal max-w-2xl">
            <p>
              Our solutions can also be paired with an Automation Associate who works alongside your business, supported by experienced mentors, to assist with analytics, reporting, and operational tasks, giving you access to greater capabilities at a fraction of the cost.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
