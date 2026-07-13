import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowRight, PiggyBank, Blocks, ShieldCheck, HeartHandshake, type LucideIcon } from 'lucide-react';

interface ConcernCard {
  icon: LucideIcon;
  title: string;
  line: string;
  href?: string; // destination page — TBD (likely testimonials)
  hasLink?: boolean;
}

const CARDS: ConcernCard[] = [
  {
    icon: PiggyBank,
    title: 'Worried on high cost of implementation?',
    line: "It's not what you think. See why our clients say it's worth every penny",
    href: '#', // TODO: point at the testimonials page once it exists
  },
  {
    icon: Blocks,
    title: "Concerned you'll need technical skills to get started?",
    line: "Absolutely not, and here's why and how we make it easy",
    href: '#', // TODO: destination page to be decided
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

interface DeckCardProps {
  card: ConcernCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function DeckCard({ card, index, total, progress }: DeckCardProps) {
  // Scroll slice this card uses to slide in from the left of the viewport.
  const start = index / total;
  const end = (index + 0.82) / total;

  // Slides from off-screen left to its resting spot (x = 0), while resting a
  // touch lower than the previous card (y = index * 3.2vh) so the pile's edges peek out.
  const x = useTransform(progress, [start, end], ['-100vw', '0px']);
  const y = `${index * 3.2}vh`;

  // Once covered by the next card, settle slightly smaller for depth.
  const scale = useTransform(
    progress,
    [(index + 1) / total, 1],
    [1, 1 - (total - 1 - index) * 0.045]
  );

  const isInteractive = card.hasLink !== false;
  const Component = isInteractive ? motion.a : motion.div;

  return (
    <div className="w-full max-w-4xl [grid-area:1/1]">
      <Component
        {...(isInteractive ? { href: card.href } : {})}
        className={`block ${isInteractive ? 'group cursor-pointer' : ''}`}
        style={{ x, y, scale, transformOrigin: 'top center', willChange: 'transform' }}
      >
        <div className={`relative h-[400px] overflow-hidden rounded-[32px] border border-ink/10 bg-white p-8 shadow-[0_24px_70px_-24px_rgba(0,95,192,0.28)] transition-colors duration-300 sm:h-[440px] sm:rounded-[40px] sm:p-12 ${isInteractive ? 'group-hover:border-brand-blue/25' : ''}`}>
          {/* soft corner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-sky/10 blur-3xl"
          />

          <div className="relative grid h-full items-center gap-8 md:grid-cols-[1.15fr_1fr]">
            {/* copy */}
            <div>
              <span className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 ${isInteractive ? 'group-hover:bg-brand-blue group-hover:text-white' : ''}`}>
                <card.icon size={26} strokeWidth={2.1} />
              </span>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl lg:text-[2.35rem]">
                {card.title}
              </h3>

              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-secondary sm:text-lg">
                {card.line}
                {isInteractive && (
                  <ArrowRight
                    size={19}
                    strokeWidth={2.4}
                    className="ml-2 inline-block align-[-3px] text-brand-blue transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                )}
              </p>
            </div>

            {/* dedicated animated avatar for this card mounts here (Higgsfield clips, pending credits) */}
            <div className="relative hidden h-full md:block" data-avatar-slot={index} aria-hidden="true">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-blue/[0.04] to-brand-sky/[0.08]" />
            </div>
          </div>
        </div>
      </Component>
    </div>
  );
}

/**
 * Concern cards below the hero: a pinned deck. The stage sticks in place
 * while each card slides in from the left of the screen and lands on top
 * of the pile; when every card has landed, the page releases and scrolls
 * on to the next section.
 */
export default function ConcernCards() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      id="concerns"
      className="relative z-10 -mt-40 sm:-mt-56"
      style={{ height: `${(CARDS.length + 0.2) * 100}vh` }}
    >
      {/* pinned stage — cards overlap in the same grid cell, later ones paint on top */}
      <div className="sticky top-0 grid h-[100vh] place-items-center overflow-hidden px-5 sm:px-8">
        {CARDS.map((card, i) => (
          <DeckCard
            key={card.title}
            card={card}
            index={i}
            total={CARDS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
