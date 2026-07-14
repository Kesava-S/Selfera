import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  { text: 'your' },
  { text: 'Management' },
  { text: 'and' },
  { text: 'Marketing' },
];

function Headline({ show }: { show: boolean }) {
  return (
    <h1
      className="relative z-10 text-left sm:text-center font-bold leading-[1.08] tracking-tightest text-white w-[72%] sm:w-full"
      style={{ fontSize: 'clamp(1.75rem, 5.2vw, 3.6rem)' }}
    >
      {HEADLINE.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-1 align-bottom"
          style={{
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.45))',
          }}
        >
          <motion.span
            className={`inline-block ${
              word.accent
                ? 'bg-gradient-to-r from-[#00f5c0] to-[#0284c7] bg-clip-text text-transparent'
                : 'text-white'
            }`}
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
  const WORDS = ['Marketing', 'Management', 'Finance', 'Data Management', 'Analytics & Reporting'];
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeoutId: any;

    const tick = () => {
      setWordIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % WORDS.length;
        timeoutId = setTimeout(tick, 1500);
        return nextIndex;
      });
    };

    // Initialize the first timer
    timeoutId = setTimeout(tick, 1500);

    // Reset loop back to Bookings (index 0) whenever the user scrolls back to the homepage Hero
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWordIndex(0);
          clearTimeout(timeoutId);
          timeoutId = setTimeout(tick, 1500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex min-h-[100vh] flex-col items-center justify-center px-5 pt-24 pb-16 bg-[#002b22] text-white overflow-hidden"
      style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
    >
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-center text-[11px] sm:text-xs font-semibold tracking-wide max-w-[92vw]"
      >
        <span className="shimmer-text-emerald bg-clip-text text-transparent">
          Empowering SME Owners with Simple and Effective AI Automations
        </span>
      </motion.div>

      {/* Headline */}
      <div className="relative w-full max-w-4xl px-4 sm:px-0">
        <Headline show={show} />
      </div>

      {/* Tagline with cycling words */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
        className="relative z-10 mt-6 max-w-2xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium flex flex-col items-center gap-1"
      >
        <span>One Agentic Solution for all your</span>
        <span className="inline-grid grid-cols-1 grid-rows-1 justify-items-center h-[1.25em] align-middle overflow-hidden relative min-w-[160px] sm:min-w-[200px] whitespace-nowrap text-[#00f5c0] font-bold drop-shadow-[0_0_12px_rgba(0,245,192,0.3)]">
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
              className="[grid-area:1/1] whitespace-nowrap"
            >
              {WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span>built for you</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#how-it-works"
          className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#002b22] transition-all duration-200 hover:bg-emerald-50 hover:scale-[1.04] hover:shadow-lg hover:shadow-white/10 active:scale-95"
        >
          See How It Works
        </a>
        <a
          href="#booking"
          className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:scale-[1.04] active:scale-95"
        >
          Book Strategy Call
        </a>
      </motion.div>
    </section>
  );
}
