import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ConfidenceText() {
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
    <div className="relative z-20">
      {/* Magic sentence section */}
      <section
        ref={containerRef}
        className="h-[45vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity, scale, filter: blur }}
          className="flex flex-col items-center gap-3 text-center px-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
            Here's how Selfera helps your business every day.
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-emerald-100/80 max-w-xl leading-relaxed">
            Now it's time to make it clear about what we do
          </p>
        </motion.div>
      </section>
    </div>
  );
}
