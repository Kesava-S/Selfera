import { motion, useReducedMotion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Database,
  FileSpreadsheet,
  LayoutDashboard,
  Users,
  Building2,
  PoundSterling,
  Megaphone,
  type LucideIcon,
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- building blocks ---------- */

interface ChipProps {
  x: number;
  y: number;
  w?: number;
  h?: number;
  icon: LucideIcon;
  color: string;
  label: string;
  delay: number;
}

function Chip({ x, y, w = 170, h = 60, icon: Icon, color, label, delay }: ChipProps) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      <rect x={x} y={y} width={w} height={h} rx={16} fill="#fff" stroke="rgba(29,29,31,0.1)" filter="url(#chip-shadow)" />
      <Icon x={x + 18} y={y + h / 2 - 11} size={22} color={color} strokeWidth={1.9} />
      <text x={x + 52} y={y + h / 2 + 5.5} fontSize="15" fontWeight="600" fill="#1d1d1f">
        {label}
      </text>
    </motion.g>
  );
}

interface FlowProps {
  d: string;
  delay?: number;
  dur?: number;
  dotted?: boolean;
  still: boolean;
}

/** Connector path + a pulse that travels along it in the data-flow direction. */
function Flow({ d, delay = 0, dur = 3.4, dotted = false, still }: FlowProps) {
  return (
    <g>
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(0,113,227,0.18)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={dotted ? '2 7' : undefined}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.35, ease: 'easeOut' }}
      />
      {!still && (
        <circle r="4.5" fill="#0071e3" opacity="0.9">
          <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" path={d} />
        </circle>
      )}
    </g>
  );
}

/* ---------- data ---------- */

const CHANNELS = [
  { icon: Instagram, color: '#E4405F', label: 'Instagram', y: 120 },
  { icon: Facebook, color: '#1877F2', label: 'Facebook', y: 230 },
  { icon: MessageCircle, color: '#25D366', label: 'WhatsApp', y: 340 },
  { icon: Linkedin, color: '#0A66C2', label: 'LinkedIn', y: 450 },
];

const BRAINS = [
  { color: '#D97757', label: 'Claude', x: 400 },
  { color: '#1d1d1f', label: 'OpenAI', x: 535 },
  { color: '#4285F4', label: 'Gemini', x: 670 },
];

const DASH_ROWS = [
  { icon: Users, label: 'Staff' },
  { icon: Building2, label: 'Business info' },
  { icon: PoundSterling, label: 'Finance' },
  { icon: Megaphone, label: 'Marketing' },
];

/* ---------- the diagram ---------- */

/**
 * Selfera orchestration diagram: enquiries flow in from the social channels
 * (left), the AI brains reason on top, and everything lands in storage and
 * the client's own dashboard (right). Pulses travel the connectors in the
 * real direction of data flow.
 */
export default function Orchestration() {
  const still = !!useReducedMotion();

  return (
    <div className="w-full max-w-6xl">
      <svg viewBox="0 0 1200 590" className="h-auto w-full" aria-label="How Selfera orchestrates your business automation">
        <defs>
          <filter id="chip-shadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#005fc0" floodOpacity="0.08" />
          </filter>
          <filter id="hub-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="10" stdDeviation="18" floodColor="#005fc0" floodOpacity="0.16" />
          </filter>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#42a1ff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#42a1ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ---- connectors (behind everything) ---- */}
        {/* channels → hub (enquiries flowing in) */}
        <Flow d="M 230 150 C 350 165, 430 245, 516 316" delay={0} still={still} />
        <Flow d="M 230 260 C 350 268, 430 295, 517 331" delay={0.9} still={still} />
        <Flow d="M 230 370 C 350 368, 430 372, 517 351" delay={1.7} still={still} />
        <Flow d="M 230 480 C 350 470, 440 420, 521 373" delay={2.5} still={still} />

        {/* brains ↕ hub (reasoning, dotted like a thought line) */}
        <Flow d="M 465 88 C 470 155, 520 205, 572 264" dotted delay={0.5} dur={2.6} still={still} />
        <Flow d="M 600 88 C 600 150, 600 200, 600 252" dotted delay={1.3} dur={2.6} still={still} />
        <Flow d="M 735 88 C 730 155, 680 205, 628 264" dotted delay={2.1} dur={2.6} still={still} />

        {/* hub → storage + dashboard (results flowing out) */}
        <Flow d="M 682 316 C 790 262, 870 185, 950 142" delay={0.4} still={still} />
        <Flow d="M 685 332 C 790 305, 870 265, 950 240" delay={1.5} still={still} />
        <Flow d="M 681 369 C 780 402, 845 425, 918 438" delay={2.3} still={still} />

        {/* ---- left: the channels Selfera listens on ---- */}
        {CHANNELS.map((c, i) => (
          <Chip key={c.label} x={60} y={c.y} icon={c.icon} color={c.color} label={c.label} delay={0.1 + i * 0.1} />
        ))}

        {/* ---- top: the AI brains ---- */}
        {BRAINS.map((b, i) => (
          <motion.g
            key={b.label}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 + i * 0.1, ease: EASE }}
          >
            <rect x={b.x} y={40} width={130} height={48} rx={14} fill="#fff" stroke="rgba(29,29,31,0.1)" filter="url(#chip-shadow)" />
            <circle cx={b.x + 24} cy={64} r={6} fill={b.color} />
            <text x={b.x + 42} y={69} fontSize="14.5" fontWeight="600" fill="#1d1d1f">
              {b.label}
            </text>
          </motion.g>
        ))}

        {/* ---- center hub ---- */}
        <circle cx="600" cy="340" r="150" fill="url(#hub-glow)" />
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          style={{ transformOrigin: '600px 340px' }}
        >
          {!still && (
            <motion.circle
              cx="600"
              cy="340"
              r="100"
              fill="none"
              stroke="rgba(0,113,227,0.25)"
              strokeWidth="1.4"
              animate={{ r: [100, 112, 100], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          <motion.g
            animate={still ? undefined : { scale: [1, 1.025, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '600px 340px' }}
          >
            <circle cx="600" cy="340" r="88" fill="#fff" stroke="rgba(0,113,227,0.16)" strokeWidth="1.5" filter="url(#hub-shadow)" />
            <text x="600" y="338" textAnchor="middle" fontSize="30" fontWeight="700" fill="#1d1d1f" letterSpacing="-0.5">
              Selfera<tspan fill="#0071e3">.</tspan>
            </text>
            <text x="600" y="362" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#6e6e73" letterSpacing="2">
              ORCHESTRATION
            </text>
          </motion.g>
        </motion.g>

        {/* ---- right: storage ---- */}
        <Chip x={950} y={112} icon={Database} color="#3ECF8E" label="Supabase" delay={0.5} />
        <Chip x={950} y={212} icon={FileSpreadsheet} color="#34A853" label="Sheets" delay={0.6} />

        {/* ---- right: the client dashboard card ---- */}
        <motion.g
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
        >
          <rect x={920} y={330} width={252} height={216} rx={20} fill="#fff" stroke="rgba(0,113,227,0.2)" strokeWidth="1.5" filter="url(#chip-shadow)" />
          <LayoutDashboard x={942} y={348} size={19} color="#0071e3" strokeWidth={2} />
          <text x={970} y={362} fontSize="14.5" fontWeight="700" fill="#1d1d1f">
            Your Dashboard
          </text>
          <line x1={938} y1={378} x2={1154} y2={378} stroke="rgba(29,29,31,0.08)" />
          {DASH_ROWS.map((row, i) => {
            const ry = 392 + i * 37;
            return (
              <g key={row.label}>
                <rect x={938} y={ry} width={216} height={30} rx={9} fill="rgba(0,113,227,0.05)" />
                <row.icon x={948} y={ry + 6} size={17} color="#0071e3" strokeWidth={2} />
                <text x={974} y={ry + 20} fontSize="13" fontWeight="600" fill="#1d1d1f">
                  {row.label}
                </text>
                {/* live tick on the marketing row — the flows land here */}
                {row.label === 'Marketing' && !still && (
                  <motion.circle
                    cx={1140}
                    cy={ry + 15}
                    r={4}
                    fill="#0071e3"
                    animate={{ opacity: [1, 0.25, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </g>
            );
          })}
        </motion.g>
      </svg>
    </div>
  );
}
