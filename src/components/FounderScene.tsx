import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FounderSceneProps {
  show: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The founder's 3D character video: plays the arms-fold animation once
 * (after the headline lands) and holds the final crossed-arms pose.
 * White gradient washes blend the video rectangle into the page and hide
 * the seam where the source pillarbox was repainted.
 */
export default function FounderScene({ show }: FounderSceneProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!show) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      // Skip the motion: jump straight to the final crossed-arms pose.
      const seekToEnd = () => {
        video.currentTime = Math.max(0, video.duration - 0.05);
      };
      if (video.readyState >= 1) seekToEnd();
      else video.addEventListener('loadedmetadata', seekToEnd, { once: true });
      return;
    }
    const timer = window.setTimeout(() => {
      video.play().catch(() => {});
    }, 1500);
    return () => window.clearTimeout(timer);
  }, [show]);

  return (
    <motion.div
      className="relative mx-auto w-[min(88vw,420px)]"
      initial={{ opacity: 0, y: 44, scale: 0.94 }}
      animate={show ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.1, delay: 1.3, ease: EASE }}
    >
      <video
        ref={videoRef}
        src="/assets/founder_fold.mp4"
        muted
        playsInline
        preload="auto"
        className="block w-full"
        aria-label="3D character of the Selfera founder folding his arms"
      />
      {/* white washes: blend video edges into the page background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #fff 4%, rgba(255,255,255,0.65) 16%, rgba(255,255,255,0) 34%, rgba(255,255,255,0) 66%, rgba(255,255,255,0.65) 84%, #fff 96%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #fff 1%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 76%, #fff 97%)',
        }}
      />
    </motion.div>
  );
}
