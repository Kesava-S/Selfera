import { motion } from 'framer-motion';
import HeroAvatar from './HeroAvatar';
import HeroShapes from './HeroShapes';

interface HeroProps {
  show: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- Word-by-word headline ---------- */

interface HeadlineWord {
  text: string;
  accent?: boolean;
}

const HEADLINE: HeadlineWord[] = [
  { text: 'Save' },
  { text: '10+ hours', accent: true },
  { text: 'a' },
  { text: 'week' },
  { text: 'on' },
  { text: 'Management' },
  { text: 'and' },
  { text: 'Marketing' },
  { text: 'without' },
  { text: 'hiring' },
  { text: 'a' },
  { text: 'team' },
];

function Headline({ show }: { show: boolean }) {
  return (
    <h1
      className="relative z-10 text-left sm:text-center font-bold leading-[1.08] tracking-tightest text-ink w-[64%] sm:w-full"
      style={{ fontSize: 'clamp(1.6rem, 5vw, 3.6rem)' }}
    >
      {HEADLINE.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-1 align-bottom"
          style={{
            // white halo so the text stays readable over the avatar video
            filter:
              'drop-shadow(0 0 10px rgba(255,255,255,0.95)) drop-shadow(0 0 22px rgba(255,255,255,0.8))',
          }}
        >
          <motion.span
            className={`inline-block ${word.accent ? 'text-gradient-blue' : ''}`}
            initial={{ y: '110%', opacity: 0, filter: 'blur(8px)' }}
            animate={show ? { y: 0, opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.15 + i * 0.08, ease: EASE }}
          >
            {word.text}
          </motion.span>
          {i < HEADLINE.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </h1>
  );
}

/* ---------- Hero ---------- */

export default function Hero({ show }: HeroProps) {
  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-5 pt-24 pb-16">
      <HeroShapes show={show} />

      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-4 py-1.5 text-center text-[11px] sm:text-xs font-semibold tracking-wide text-brand-deep max-w-[92vw]"
      >
        Welcome to Selfera! Empowering SME Owners with Simple and Effective AI Automations
      </motion.div>

      {/* Headline with the avatar parked slightly behind its right end */}
      <div className="relative w-full max-w-4xl flex flex-row-reverse items-center justify-between gap-0 sm:block px-4 sm:px-0">
        <HeroAvatar show={show} />
        <Headline show={show} />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
        className="relative z-10 mt-6 max-w-2xl text-center text-base sm:text-lg leading-relaxed text-ink-secondary"
      >
        Sounds complicated? Not at all, we do all the setup customised for you.<br className="hidden sm:inline" /> It all starts with a simple consultation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#roi"
          className="rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-deep hover:scale-[1.04] hover:shadow-lg hover:shadow-brand-blue/30 active:scale-95"
        >
          Calculate Savings
        </a>
        <a
          href="#booking"
          className="rounded-full border border-ink/15 bg-white/60 px-7 py-3 text-sm font-semibold text-ink backdrop-blur transition-all duration-200 hover:border-ink/30 hover:scale-[1.04] active:scale-95"
        >
          Book Strategy Call
        </a>
      </motion.div>
    </section>
  );
}
