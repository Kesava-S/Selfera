import { ArrowRight, PiggyBank, Blocks, ShieldCheck, HeartHandshake, type LucideIcon } from 'lucide-react';

interface ConcernCard {
  icon: LucideIcon;
  title: string;
  line: string;
  gradient: string;
  href?: string;
  hasLink?: boolean;
}

const CARDS: ConcernCard[] = [
  {
    icon: PiggyBank,
    title: 'Worried on high cost of implementation?',
    line: "It's not what you think. See why our clients say it's worth every penny",
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 50%, #FFD200 100%)',
    href: '#',
  },
  {
    icon: Blocks,
    title: "Concerned you'll need technical skills to get started?",
    line: "Absolutely not, and here's why and how we make it easy",
    gradient: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
    href: '#',
  },
  {
    icon: ShieldCheck,
    title: 'Fear of disruptions during the transition?',
    line: 'See how we make it happen with a clear timeline, parallel testing, and a smooth transition',
    gradient: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)',
    href: '#',
  },
  {
    icon: HeartHandshake,
    title: 'Trust issues?',
    line: 'Not trusting AI to make the right decisions? Cool! No decisions are made without a human in the loop.',
    gradient: 'linear-gradient(135deg, #39e09b 0%, #16a085 100%)',
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
        className="relative flex flex-col h-[440px] sm:h-[480px] overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[rgba(255,255,255,0.18)] hover:border-[rgba(255,255,255,0.3)] transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        }}
      >
        {/* Top Image: covers top 45% of the card */}
        <div className="relative h-[45%] w-full overflow-hidden">
          {/* Blurred colorful hero image inside card */}
          <div
            className="absolute inset-0 scale-125 filter blur-[18px]"
            style={{ background: card.gradient }}
          />
          {/* Subtle gradient overlay: rgba(255,255,255,.05) -> transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent" />

          {/* Accent icon overlaying the blurred graphic */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-md">
              <card.icon size={26} strokeWidth={2} />
            </span>
          </div>
        </div>

        {/* Content: white background on lower section */}
        <div className="relative h-[55%] bg-white p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold leading-tight text-ink group-hover:text-brand-blue transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-secondary sm:text-base">
              {card.line}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-deep transition-colors duration-300">
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
  // Duplicate list twice to make a seamless loop marquee.
  const marqueeCards = [...CARDS, ...CARDS];

  return (
    <section id="concerns" className="relative z-10 py-12 overflow-hidden">
      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden py-4">
        {/* Soft edge-fading gradients */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <div className="flex gap-6 animate-marquee-left-to-right">
          {marqueeCards.map((card, i) => (
            <div key={`${card.title}-${i}`} className="w-[280px] sm:w-[360px] md:w-[400px] flex-shrink-0">
              <DeckCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
