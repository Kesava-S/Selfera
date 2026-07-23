import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { icon: Clock, value: 'Reclaim time', label: 'spent on manual tasks' },
  { icon: TrendingUp, value: '40%', label: 'less admin overhead' },
  { icon: CheckCircle2, value: '99.4%', label: 'automated task success' },
];

/** "Put your marketing on autopilot" claim with scroll-triggered word reveal and stats. */
export default function SaveHours() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-30% 0px -30% 0px' });

  return (
    <section ref={sectionRef} id="save-hours" className="relative z-10 px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mx-auto grid max-w-xl gap-3 sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl px-4 py-3 text-center">
              <span className="mb-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <stat.icon size={16} strokeWidth={2.2} />
              </span>
              <div className="text-lg font-bold tracking-tight text-ink">{stat.value}</div>
              <div className="text-xs text-ink-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
          className="mt-8"
        >
          <Link
            to="#roi"
            className="inline-block rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-deep hover:scale-[1.04] hover:shadow-lg hover:shadow-brand-blue/30 active:scale-95"
          >
            Calculate Your Savings
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
