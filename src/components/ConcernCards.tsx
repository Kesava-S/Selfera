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
      className="block h-full cursor-pointer group"
    >
      <div
        className="relative flex flex-col h-full overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[rgba(255,255,255,0.18)] hover:border-[rgba(255,255,255,0.3)] transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        }}
      >
        {/* Top Section: covers a fixed 160px height to prevent overflow */}
        <div className="relative h-40 w-full overflow-hidden bg-surface-soft border-b border-ink/5 flex-shrink-0">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-40" />

          {/* Accent icon overlaying the clean background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/10 shadow-sm transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
              <card.icon size={26} strokeWidth={2} />
            </span>
          </div>
        </div>

        {/* Content: flexible height area with flex-grow to stretch cards uniformly and prevent clipping */}
        <div className="relative flex-grow bg-white p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold leading-tight text-ink group-hover:text-brand-blue transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-secondary sm:text-base">
              {card.line}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-deep transition-colors duration-300 mt-auto pt-2">
            <span>Learn more</span>
            <ArrowRight
              size={16}
              strokeWidth={2.4}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Component>
  );
}

export default function ConcernCards() {
  return (
    <section id="concerns" className="relative z-10 py-12 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => (
          <div key={card.title} className="w-full h-full">
            <DeckCard card={card} />
          </div>
        ))}
      </div>
    </section>
  );
}
