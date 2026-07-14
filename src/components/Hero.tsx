import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroAvatar from './HeroAvatar';

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
      className="relative z-10 text-left sm:text-center font-bold leading-[1.08] tracking-tightest text-ink w-[72%] sm:w-full"
      style={{ fontSize: 'clamp(1.75rem, 5.2vw, 3.6rem)' }}
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
  const WORDS = ['Bookings', 'Follow-Ups', 'Data Management', 'Finance', 'Reporting'];
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeoutId: any;

    const tick = () => {
      setWordIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % WORDS.length;
        // 2.5 seconds stay for Bookings (index 0) to allow for the elastic pop, 1.5 seconds for others
        const nextDelay = nextIndex === 0 ? 2500 : 1500;
        timeoutId = setTimeout(tick, nextDelay);
        return nextIndex;
      });
    };

    // Initialize the first timer
    timeoutId = setTimeout(tick, 2500);

    // Reset loop back to Bookings (index 0) whenever the user scrolls back to the homepage Hero
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWordIndex(0);
          clearTimeout(timeoutId);
          timeoutId = setTimeout(tick, 2500);
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
    <section ref={sectionRef} className="relative z-10 flex min-h-[100vh] flex-col items-center justify-center px-5 pt-24 pb-16">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-4 py-1.5 text-center text-[11px] sm:text-xs font-semibold tracking-wide max-w-[92vw]"
      >
        <span className="shimmer-text bg-clip-text text-transparent">
          Empowering SME Owners with Simple and Effective AI Automations
        </span>
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
        className="relative z-10 mt-6 max-w-2xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-ink-secondary font-medium flex flex-col items-center gap-1"
      >
        <span>One Agentic Solution for all your</span>
        <span className="inline-grid grid-cols-1 grid-rows-1 justify-items-center h-[1.25em] align-middle overflow-hidden relative min-w-[150px] sm:min-w-[185px] text-brand-blue font-bold">
          <AnimatePresence mode="wait">
            <motion.span
              key={WORDS[wordIndex]}
              initial={
                wordIndex === 0
                  ? { y: 24, scale: 0.8, opacity: 0 }
                  : { y: 24, scale: 0.9, opacity: 0 }
              }
              animate={
                wordIndex === 0
                  ? {
                      y: 0,
                      scale: [1, 1.08, 0.96, 1.03, 1], // elastic spring-like bounce on pop
                      opacity: 1,
                    }
                  : { y: 0, scale: 1, opacity: 1 }
              }
              exit={{ y: -24, scale: 0.85, opacity: 0 }}
              transition={
                wordIndex === 0
                  ? {
                      y: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                      scale: { duration: 0.65, ease: 'easeInOut' },
                      opacity: { duration: 0.25 },
                    }
                  : { duration: 0.22, ease: [0.34, 1.56, 0.64, 1] }
              }
              className="[grid-area:1/1]"
            >
              {WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span>built for you</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#how-it-works"
          className="rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-deep hover:scale-[1.04] hover:shadow-lg hover:shadow-brand-blue/30 active:scale-95"
        >
          See How It Works
        </a>
        <a
          href="#booking"
          className="rounded-full border border-ink/15 bg-white/90 px-7 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:border-ink/30 hover:scale-[1.04] active:scale-95"
        >
          Book Strategy Call
        </a>
      </motion.div>
    </section>
  );
}
