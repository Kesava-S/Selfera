import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroAvatarProps {
  show: boolean;
}

/**
 * The founder's 3D avatar with a fully transparent background: glides in from
 * the right edge of the screen while the fold animation plays (hands down →
 * arms folded), settling slightly behind the right end of the headline.
 *
 * Rendering: a preloaded WebP frame sequence drawn to a canvas. Alpha video
 * codecs (VP9/HEVC) render inconsistently across browsers — WebP alpha
 * decodes identically everywhere (Safari, Chrome, Firefox, Edge), so this is
 * one code path with no codec roulette.
 */

const FRAME_COUNT = 139; // optical-flow interpolated to a true 60fps timeline
const FRAME_W = 640;
const FRAME_H = 566;
const PLAY_DURATION_MS = 2317; // 139 frames / 60fps — matches the slide settling in
const PLAY_DELAY_MS = 950;

const frameSrc = (i: number) =>
  `/assets/avatar_seq60/f_${String(i + 1).padStart(4, '0')}.webp`;

export default function HeroAvatar({ show }: HeroAvatarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload and decode every frame up front (2.1 MB total, overlaps the intro).
  // img.decode() decodes the image asynchronously on background threads,
  // preventing main-thread layout blocks when we draw them for the first time.
  useEffect(() => {
    let cancelled = false;
    const images = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = frameSrc(i);
      return img;
    });
    framesRef.current = images;
    Promise.all(
      images.map(
        (img) =>
          img.decode()
            .then(() => {})
            .catch(() => {}) // fallback if decode fails or is not supported
      )
    ).then(() => {
      if (!cancelled) setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Play the fold once the intro hands off and frames are ready.
  useEffect(() => {
    if (!show || !loaded) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const usable = (img?: HTMLImageElement) => img?.complete && img.naturalWidth > 0;

    // Fractional position: draw the current frame, then cross-blend the next
    // frame on top — sub-frame interpolation so motion never visibly steps.
    const drawAt = (pos: number) => {
      const i = Math.min(FRAME_COUNT - 1, Math.floor(pos));
      const frac = pos - i;
      const cur = framesRef.current[i];
      const next = framesRef.current[i + 1];
      if (!usable(cur)) return;
      ctx.clearRect(0, 0, FRAME_W, FRAME_H);
      ctx.globalAlpha = 1;
      ctx.drawImage(cur, 0, 0, FRAME_W, FRAME_H);
      if (frac > 0.01 && usable(next)) {
        ctx.globalAlpha = frac;
        ctx.drawImage(next!, 0, 0, FRAME_W, FRAME_H);
        ctx.globalAlpha = 1;
      }
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      drawAt(FRAME_COUNT - 1); // hold the final crossed-arms pose
      return;
    }

    drawAt(0);
    let raf = 0;
    let start = 0;

    const loop = (t: number) => {
      if (!start) start = t;
      const progress = Math.min(1, (t - start) / PLAY_DURATION_MS);
      drawAt(progress * (FRAME_COUNT - 1));
      if (progress < 1) raf = requestAnimationFrame(loop);
    };

    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(loop);
    }, PLAY_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [show, loaded]);

  return (
    /* outer div owns the static placement; inner motion.div owns the slide */
    <div
      className="pointer-events-none absolute z-0 w-[140px] -right-2 top-1/2 -translate-y-[54%] flex justify-center items-center sm:w-[230px] sm:-right-[4.5rem] md:-right-[6.5rem] md:w-[300px] lg:-right-[9rem] lg:w-[350px]"
      aria-hidden="true"
    >
      <motion.div
        initial={{ x: '150%', opacity: 0 }}
        animate={show ? { x: '0%', opacity: 1 } : {}}
        transition={{ type: 'spring', damping: 28, stiffness: 75, mass: 1, delay: 0.75, restDelta: 0.0001 }}
        style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
        className="w-full flex justify-center"
      >
        <canvas
          ref={canvasRef}
          width={FRAME_W}
          height={FRAME_H}
          className="block h-auto w-full"
          style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}
        />
      </motion.div>
    </div>
  );
}
