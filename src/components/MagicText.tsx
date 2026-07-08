import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MagicText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Map progress to opacity, scale, and lens blur (tighter scroll intervals)
  const opacity = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [0.92, 1, 1, 0.92]);
  const blurValue = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [12, 0, 0, 12]);
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <section
      ref={containerRef}
      className="relative z-20 h-[24vh] -mt-16 sm:-mt-24 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ opacity, scale, filter: blur }}
        className="text-center px-6"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tightest text-ink leading-tight">
          Common concerns we hear from business owners
        </h2>
      </motion.div>
    </section>
  );
}
