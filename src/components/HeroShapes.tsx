import { motion, useScroll, useTransform } from 'framer-motion';

interface ShapeProps {
  show: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/** Glassy isometric cube — slow float + sway */
function GlassCube({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="cube-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#42a1ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0071e3" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="cube-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0071e3" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#005fc0" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="cube-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#005fc0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0071e3" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <polygon points="50,8 88,28 50,48 12,28" fill="url(#cube-top)" stroke="rgba(0,95,192,0.4)" strokeWidth="1" />
      <polygon points="12,28 50,48 50,92 12,72" fill="url(#cube-left)" stroke="rgba(0,95,192,0.35)" strokeWidth="1" />
      <polygon points="88,28 50,48 50,92 88,72" fill="url(#cube-right)" stroke="rgba(0,95,192,0.35)" strokeWidth="1" />
    </svg>
  );
}

/** Gradient sphere with an orbiting satellite dot on an elliptical ring */
function Orbital({ size = 150 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="orb-body" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#8dc4ff" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#42a1ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#005fc0" stopOpacity="0.35" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="26" fill="url(#orb-body)" />
      <ellipse cx="60" cy="60" rx="52" ry="18" stroke="rgba(0,113,227,0.35)" strokeWidth="1.2" />
      {/* satellite dot orbiting along the elliptical ring */}
      <circle r="6" fill="#0071e3" opacity="0.85">
        <animateMotion
          dur="9s"
          repeatCount="indefinite"
          path="M 112 60 A 52 18 0 1 1 8 60 A 52 18 0 1 1 112 60"
        />
      </circle>
    </svg>
  );
}

/** Large, faint dashed halo that rotates very slowly behind the headline */
function Halo({ size = 560 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
    >
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="rgba(0,113,227,0.14)"
        strokeWidth="1"
        strokeDasharray="3 10"
      />
      <circle cx="100" cy="8" r="3" fill="rgba(0,113,227,0.4)" />
      <circle cx="192" cy="100" r="2" fill="rgba(66,161,255,0.45)" />
    </motion.svg>
  );
}

/** Four-point spark that twinkles */
function Spark({ size = 22, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      animate={{ scale: [0.6, 1, 0.6], opacity: [0.35, 0.9, 0.35], rotate: [0, 45, 0] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <path
        d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z"
        fill="#42a1ff"
        opacity="0.8"
      />
    </motion.svg>
  );
}

/**
 * Decorative animated graphics layered behind the hero content —
 * glassy geometry in the brand's blue family, always pointer-transparent.
 */
export default function HeroShapes({ show }: ShapeProps) {
  const { scrollY } = useScroll();

  // Accelerated parallax scroll offsets (moving downward)
  const cube1Y = useTransform(scrollY, [0, 800], [0, 320]);
  const orbitalY = useTransform(scrollY, [0, 800], [0, 420]);
  const cube2Y = useTransform(scrollY, [0, 800], [0, 220]);
  const haloY = useTransform(scrollY, [0, 800], [0, 140]);
  const spark1Y = useTransform(scrollY, [0, 800], [0, 260]);
  const spark2Y = useTransform(scrollY, [0, 800], [0, 360]);
  const spark3Y = useTransform(scrollY, [0, 800], [0, 180]);
  const aurora1Y = useTransform(scrollY, [0, 800], [0, 100]);
  const aurora2Y = useTransform(scrollY, [0, 800], [0, 120]);

  // Parallax rotation scroll mappings
  const cube1Rotate = useTransform(scrollY, [0, 800], [0, 180]);
  const cube2Rotate = useTransform(scrollY, [0, 800], [0, -120]);
  const orbitalRotate = useTransform(scrollY, [0, 800], [0, 90]);
  const spark1Rotate = useTransform(scrollY, [0, 800], [0, 270]);
  const spark2Rotate = useTransform(scrollY, [0, 800], [0, -180]);
  const spark3Rotate = useTransform(scrollY, [0, 800], [0, 120]);
  const haloRotate = useTransform(scrollY, [0, 800], [0, 45]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Aurora blobs — slow drifting soft light */}
      <motion.div
        className="absolute left-[8%] top-[14%] h-72 w-72 rounded-full"
        style={{ y: aurora1Y, background: 'radial-gradient(circle, rgba(66,161,255,0.16) 0%, transparent 70%)', filter: 'blur(30px)' }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[6%] top-[30%] h-80 w-80 rounded-full"
        style={{ y: aurora2Y, background: 'radial-gradient(circle, rgba(0,113,227,0.13) 0%, transparent 70%)', filter: 'blur(34px)' }}
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Halo behind headline */}
      <motion.div
        className="absolute left-1/2 top-[8%] -translate-x-1/2"
        style={{ y: haloY, rotate: haloRotate }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.6, delay: 0.4, ease: EASE }}
      >
        <Halo />
      </motion.div>

      {/* Glass cube — upper left */}
      <motion.div
        className="absolute left-[6%] top-[22%] hidden md:block"
        style={{ y: cube1Y, rotate: cube1Rotate }}
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={show ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.9, ease: EASE }}
        >
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GlassCube />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Orbital sphere — right side */}
      <motion.div
        className="absolute right-[5%] top-[18%] hidden md:block"
        style={{ y: orbitalY, rotate: orbitalRotate }}
      >
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={show ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, delay: 1.05, ease: EASE }}
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Orbital />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Small companion cube — lower right, deeper */}
      <motion.div
        className="absolute bottom-[24%] right-[12%] hidden lg:block"
        style={{ y: cube2Y, rotate: cube2Rotate }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={show ? { opacity: 0.7, scale: 1 } : {}}
          transition={{ duration: 1.1, delay: 1.3, ease: EASE }}
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GlassCube size={56} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Sparks */}
      <motion.div
        className="absolute left-[22%] top-[15%]"
        style={{ y: spark1Y, rotate: spark1Rotate }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          <Spark delay={0} />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-[24%] top-[12%]"
        style={{ y: spark2Y, rotate: spark2Rotate }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ delay: 1.55 }}
        >
          <Spark size={16} delay={1.2} />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-[14%] top-[52%] hidden md:block"
        style={{ y: spark3Y, rotate: spark3Rotate }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ delay: 1.7 }}
        >
          <Spark size={14} delay={2.1} />
        </motion.div>
      </motion.div>
    </div>
  );
}
