import { motion } from 'framer-motion';

interface AutomationSceneProps {
  show: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Centerpiece motion graphic: a glassy "automation core" sphere with two
 * tilted orbital rings, satellite dots, and dashed data-flow arcs animating
 * toward the core. Pure SVG in the brand's blue family.
 */
export default function AutomationScene({ show }: AutomationSceneProps) {
  return (
    <motion.div
      className="relative mx-auto flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={show ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: 1.2, ease: EASE }}
    >
      <svg viewBox="0 0 640 460" className="w-full max-w-2xl" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="core-body" cx="35%" cy="28%" r="80%">
            <stop offset="0%" stopColor="#a8d2ff" />
            <stop offset="45%" stopColor="#42a1ff" />
            <stop offset="100%" stopColor="#005fc0" />
          </radialGradient>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#42a1ff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#42a1ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mini-sphere" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#8dc4ff" />
            <stop offset="100%" stopColor="#0071e3" />
          </radialGradient>
          <linearGradient id="ring-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0071e3" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#42a1ff" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* ambient glow */}
        <circle cx="320" cy="230" r="170" fill="url(#core-glow)" />

        {/* dashed data-flow arcs converging on the core */}
        {[
          'M 40 70 C 150 110, 210 160, 288 204',
          'M 600 60 C 500 100, 430 150, 352 200',
          'M 50 400 C 160 370, 230 320, 292 262',
          'M 595 395 C 490 370, 420 320, 350 260',
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="rgba(0,113,227,0.28)"
            strokeWidth="1.4"
            strokeDasharray="3 9"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, -60] }}
            transition={{ duration: 3.2 + i * 0.4, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* outer orbital ring (tilted) with two satellites */}
        <g transform="rotate(12 320 230)">
          <ellipse cx="320" cy="230" rx="240" ry="84" stroke="url(#ring-stroke)" strokeWidth="1.4" />
          <circle r="9" fill="url(#mini-sphere)">
            <animateMotion
              dur="16s"
              repeatCount="indefinite"
              path="M 560 230 A 240 84 0 1 1 80 230 A 240 84 0 1 1 560 230"
            />
          </circle>
          <circle r="5.5" fill="#42a1ff" opacity="0.8">
            <animateMotion
              dur="16s"
              begin="-7s"
              repeatCount="indefinite"
              path="M 560 230 A 240 84 0 1 1 80 230 A 240 84 0 1 1 560 230"
            />
          </circle>
        </g>

        {/* inner orbital ring (counter-tilted, counter-rotating) */}
        <g transform="rotate(-20 320 230)">
          <ellipse cx="320" cy="230" rx="165" ry="56" stroke="rgba(0,113,227,0.3)" strokeWidth="1.2" strokeDasharray="1 6" strokeLinecap="round" />
          <circle r="7" fill="#0071e3" opacity="0.9">
            <animateMotion
              dur="11s"
              repeatCount="indefinite"
              keyPoints="1;0"
              keyTimes="0;1"
              calcMode="linear"
              path="M 485 230 A 165 56 0 1 1 155 230 A 165 56 0 1 1 485 230"
            />
          </circle>
        </g>

        {/* halo just outside the core */}
        <motion.circle
          cx="320"
          cy="230"
          r="86"
          stroke="rgba(0,113,227,0.22)"
          strokeWidth="1"
          animate={{ r: [86, 94, 86], opacity: [0.9, 0.3, 0.9] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* the core sphere, breathing gently */}
        <motion.g
          animate={{ scale: [1, 1.035, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '320px 230px' }}
        >
          <circle cx="320" cy="230" r="66" fill="url(#core-body)" />
          {/* specular highlight */}
          <ellipse cx="298" cy="204" rx="26" ry="16" fill="rgba(255,255,255,0.35)" transform="rotate(-24 298 204)" />
          {/* meridian lines for 3D readability */}
          <ellipse cx="320" cy="230" rx="66" ry="22" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
          <ellipse cx="320" cy="230" rx="24" ry="66" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        </motion.g>

        {/* floating mini spheres at varying depths */}
        <motion.g animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
          <circle cx="120" cy="150" r="14" fill="url(#mini-sphere)" opacity="0.85" />
        </motion.g>
        <motion.g animate={{ y: [0, 10, 0] }} transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}>
          <circle cx="540" cy="330" r="10" fill="url(#mini-sphere)" opacity="0.7" />
        </motion.g>
        <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
          <circle cx="500" cy="120" r="6" fill="#42a1ff" opacity="0.55" />
        </motion.g>
        <motion.g animate={{ y: [0, 9, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
          <circle cx="150" cy="340" r="7" fill="#0071e3" opacity="0.45" />
        </motion.g>
      </svg>

      {/* soft floor shadow to seat the composition */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 left-1/2 h-12 w-1/2 -translate-x-1/2 rounded-full bg-brand-blue/10 blur-2xl"
      />
    </motion.div>
  );
}
