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
      className="z-[200] bg-white"
      style={{
        // Inline styles on purpose: the splash must be positioned correctly
        // even if the stylesheet is still streaming in on a slow mobile
        // connection. inset:0 on a fixed box needs no viewport-height units,
        // so URL-bar resizing on phones can't shift it either.
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'grid',
        placeItems: 'center',
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }}
      aria-hidden="true"
    >
      <div style={{ gridArea: '1 / 1' }}>
        <motion.div
          className="flex items-baseline whitespace-nowrap text-4xl sm:text-5xl font-bold tracking-tightest text-ink"
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
      </div>
    </motion.div>
  );
}
