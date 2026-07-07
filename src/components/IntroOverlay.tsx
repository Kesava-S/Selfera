import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroOverlayProps {
  onComplete: () => void;
}

const HOLD_MS = 1900;

/**
 * Opening moment: clean white screen, the Selfera wordmark breathes in,
 * then the whole overlay lifts away and hands off to the hero headline.
 */
export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  useEffect(() => {
    // Force viewport reset to top on mount to avoid scroll restoration layout bugs on refresh
    window.scrollTo(0, 0);
    const prevRestoration = 'scrollRestoration' in window.history ? window.history.scrollRestoration : null;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      onComplete();
      return;
    }
    const timer = window.setTimeout(onComplete, HOLD_MS);
    return () => {
      window.clearTimeout(timer);
      if (prevRestoration && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = prevRestoration;
      }
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-white w-full h-full"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }}
      aria-hidden="true"
    >
      <motion.div
        className="flex items-baseline justify-center text-4xl sm:text-5xl font-bold tracking-tightest text-ink w-full text-center"
        initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        Selfera
        <motion.span
          className="text-brand-blue"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          .
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
