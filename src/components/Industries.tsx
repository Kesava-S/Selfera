import { motion } from 'framer-motion';
import { Sparkles, Flower2, Dumbbell, Coffee, ShoppingBag, Flower, type LucideIcon } from 'lucide-react';

interface Industry {
  name: string;
  icon: LucideIcon;
}

const INDUSTRIES: Industry[] = [
  { name: 'Medical Aesthetics', icon: Sparkles },
  { name: 'Beauty & Selfcare', icon: Flower2 },
  { name: 'Training Studios', icon: Dumbbell },
  { name: 'Restaurants and Cafes', icon: Coffee },
  { name: 'Fashion Boutiques', icon: ShoppingBag },
  { name: 'Florist', icon: Flower },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Industries() {
  return (
    <section className="relative z-20 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tightest text-ink text-center mb-16"
        >
          Businesses we work with
        </motion.h2>

        {/* Grid stack */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
              className="relative flex flex-col items-center justify-center p-4 sm:p-8 rounded-[28px] border border-ink/5 bg-white/40 backdrop-blur-sm hover:border-brand-blue/20 hover:bg-white transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(0,113,227,0.1)] hover:-translate-y-1 group select-none"
            >
              {/* Icon slot */}
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/5 text-brand-blue/80 transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110">
                <ind.icon size={22} strokeWidth={2.1} />
              </span>

              {/* Title */}
              <h3 className="mt-4 text-center text-sm sm:text-base font-bold tracking-tight text-ink group-hover:text-brand-blue transition-colors duration-300">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
