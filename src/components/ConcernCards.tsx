import { motion } from 'framer-motion';
import { ArrowRight, PiggyBank, Blocks, ShieldCheck, HeartHandshake, type LucideIcon } from 'lucide-react';

interface ConcernCard {
  icon: LucideIcon;
  title: string;
  line: string;
  href?: string;
  hasLink?: boolean;
}

const CARDS: ConcernCard[] = [
  {
    icon: PiggyBank,
    title: 'Worried on high cost of implementation?',
    line: "It's not what you think. See why our clients say it's worth every penny",
    href: '#',
  },
  {
    icon: Blocks,
    title: "Concerned you'll need technical skills to get started?",
    line: "Absolutely not, and here's why and how we make it easy",
    href: '#',
  },
  {
    icon: ShieldCheck,
    title: 'Fear of disruptions during the transition?',
    line: 'See how we make it happen with a clear timeline, parallel testing, and a smooth transition',
    href: '#',
  },
  {
    icon: HeartHandshake,
    title: 'Trust issues?',
    line: 'Not trusting AI to make the right decisions? Cool! No decisions are made without a human in the loop.',
    hasLink: false,
  },
];

function DeckCard({ card }: { card: ConcernCard }) {
  const isInteractive = card.hasLink !== false;
  const Component = isInteractive ? 'a' : 'div';

  return (
    <Component
      {...(isInteractive ? { href: card.href } : {})}
      className={`block h-full ${isInteractive ? 'group cursor-pointer' : ''}`}
    >
      <div className={`relative h-[340px] sm:h-[380px] overflow-hidden rounded-[32px] border border-ink/10 bg-white p-6 shadow-[0_16px_48px_-16px_rgba(0,95,192,0.12)] transition-all duration-300 sm:p-8 ${isInteractive ? 'hover:border-brand-blue/25 hover:shadow-[0_24px_64px_-16px_rgba(0,95,192,0.18)] hover:scale-[1.01]' : ''}`}>
        {/* soft corner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-sky/10 blur-3xl"
        />

        <div className="relative flex flex-col justify-between h-full gap-6">
          <div>
            <span className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 ${isInteractive ? 'group-hover:bg-brand-blue group-hover:text-white' : ''}`}>
              <card.icon size={22} strokeWidth={2.1} />
            </span>

            <h3 className="text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
              {card.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base">
              {card.line}
              {isInteractive && (
                <ArrowRight
                  size={16}
                  strokeWidth={2.4}
                  className="ml-1.5 inline-block align-[-2px] text-brand-blue transition-transform duration-300 group-hover:translate-x-1.5"
                />
              )}
            </p>
          </div>

          <div className="border-t border-ink/5 pt-4 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-brand-blue uppercase tracking-wider">
              Selfera Assurance
            </span>
          </div>
        </div>
      </div>
    </Component>
  );
}

export default function ConcernCards() {
  // Combine two sets of cards for a seamless infinite loop marquee.
  const marqueeCards = [...CARDS, ...CARDS];

  return (
    <section id="concerns" className="relative z-10 py-12 overflow-hidden">
      {/* Marquee Wrapper */}
      <div className="relative flex w-full overflow-hidden py-4">
        {/* Soft edge-fading gradients */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <motion.div
          className="flex gap-6 sm:gap-8 flex-nowrap"
          animate={{
            x: ['-50%', '0%'], // Slide from left to right continuously
          }}
          transition={{
            ease: 'linear',
            duration: 30,
            repeat: Infinity,
          }}
          style={{ width: 'max-content' }}
        >
          {marqueeCards.map((card, i) => (
            <div key={`${card.title}-${i}`} className="w-[280px] sm:w-[360px] md:w-[400px] flex-shrink-0">
              <DeckCard card={card} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
