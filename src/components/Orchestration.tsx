import { motion, useReducedMotion } from 'framer-motion';
import { LayoutDashboard, ClipboardCheck, Wallet, LineChart } from 'lucide-react';
import {
  Instagram,
  Facebook,
  WhatsApp,
  LinkedIn,
  GoogleAds,
  TikTok,
  Anthropic,
  OpenAI,
  Gemini,
  Gemma,
  Qwen,
  Supabase,
  Sheets,
  LogoAt,
} from './BrandLogos';

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- animated connector ---------- */

interface FlowProps {
  d: string;
  delay?: number;
  dur?: number;
  dotted?: boolean;
  still: boolean;
}

function Flow({ d, delay = 0, dur = 3.6, dotted = false, still }: FlowProps) {
  return (
    <g>
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(0,113,227,0.2)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray={dotted ? '2 7' : undefined}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
      />
      {!still && (
        <circle r="4" fill="#0071e3">
          <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" path={d} />
        </circle>
      )}
    </g>
  );
}

/* ---------- data ---------- */

const MARKETING_LOGOS = [Instagram, Facebook, WhatsApp, LinkedIn, GoogleAds, TikTok];

const MODELS = [
  { Comp: Anthropic, name: 'Claude', x: 332 },
  { Comp: OpenAI, name: 'OpenAI', x: 450 },
  { Comp: Gemini, name: 'Gemini', x: 568 },
  { Comp: Gemma, name: 'Gemma', x: 686 },
  { Comp: Qwen, name: 'Qwen', x: 804 },
];

const DASH_ROWS = ['Staff', 'Business info', 'Finance', 'Marketing'];

/* ---------- capability card (left) ---------- */

interface CapCardProps {
  y: number;
  h: number;
  label: string;
  icon: typeof ClipboardCheck;
  lines?: string[];
  delay: number;
  children?: React.ReactNode;
}

function CapCard({ y, h, label, icon: Icon, lines, delay, children }: CapCardProps) {
  return (
    <motion.g
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      <rect x="40" y={y} width="310" height={h} rx="18" fill="#fff" stroke="rgba(29,29,31,0.1)" filter="url(#soft)" />
      <rect x="60" y={y + 20} width="34" height="34" rx="10" fill="rgba(0,113,227,0.1)" />
      <Icon x={67} y={y + 27} size={20} color="#0071e3" strokeWidth={2} />
      <text x={106} y={y + 42} fontSize="16" fontWeight="700" fill="#1d1d1f">
        {label}
      </text>
      {lines?.map((ln, i) => (
        <g key={ln}>
          <circle cx={68} cy={y + 74 + i * 26} r="2.5" fill="#0071e3" />
          <text x={80} y={y + 79 + i * 26} fontSize="13.5" fill="#6e6e73">
            {ln}
          </text>
        </g>
      ))}
      {children}
    </motion.g>
  );
}

/**
 * Selfera orchestration diagram. Left = the four capability streams Selfera
 * runs (Marketing with the real platform logos, plus Management, Finance,
 * Analytics). Top = the AI brains. Right = storage. Bottom = the client's own
 * Selfera dashboard. Pulses travel the connectors in the real flow direction.
 */
export default function Orchestration() {
  const still = !!useReducedMotion();

  return (
    <div className="w-full max-w-6xl">
      <svg
        viewBox="0 0 1240 760"
        className="h-auto w-full"
        role="img"
        aria-label="How Selfera orchestrates marketing, management, finance and analytics through AI into your dashboard"
      >
        <defs>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="3" stdDeviation="7" floodColor="#005fc0" floodOpacity="0.09" />
          </filter>
          <filter id="hub-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="10" stdDeviation="20" floodColor="#005fc0" floodOpacity="0.16" />
          </filter>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#42a1ff" stopOpacity="0.22" />
            <stop offset="1" stopColor="#42a1ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ---- connectors (behind cards) ---- */}
        {/* left capabilities → hub (inbound) */}
        <Flow d="M 350 99 C 460 118, 470 250, 528 305" delay={0} still={still} />
        <Flow d="M 350 253 C 452 264, 470 308, 528 328" delay={0.8} still={still} />
        <Flow d="M 350 414 C 452 406, 470 366, 528 352" delay={1.6} still={still} />
        <Flow d="M 350 548 C 462 520, 470 400, 526 372" delay={2.4} still={still} />

        {/* top brains → hub (dotted thought lines) */}
        <Flow d="M 384 76 C 390 165, 520 212, 585 262" dotted delay={0.4} dur={2.8} still={still} />
        <Flow d="M 502 76 C 505 150, 575 208, 602 252" dotted delay={1.0} dur={2.8} still={still} />
        <Flow d="M 620 76 L 620 248" dotted delay={1.6} dur={2.8} still={still} />
        <Flow d="M 738 76 C 735 150, 665 208, 638 252" dotted delay={2.2} dur={2.8} still={still} />
        <Flow d="M 856 76 C 850 165, 720 212, 655 262" dotted delay={2.8} dur={2.8} still={still} />

        {/* hub → storage (outbound) */}
        <Flow d="M 712 314 C 800 250, 850 200, 924 184" delay={0.5} still={still} />
        <Flow d="M 714 332 C 810 312, 850 292, 924 284" delay={1.5} still={still} />

        {/* hub → dashboard (outbound) */}
        <Flow d="M 604 430 C 590 490, 560 512, 545 540" delay={0.8} still={still} />
        <Flow d="M 636 430 C 650 490, 680 512, 695 540" delay={1.8} still={still} />

        {/* ---- LEFT: four capability streams ---- */}
        <CapCard y={40} h={118} label="Marketing" icon={LayoutDashboard} delay={0.1}>
          <text x={106} y={62} fontSize="12" fill="#86868b">
            Social &amp; ad platforms
          </text>
          {MARKETING_LOGOS.map((Comp, i) => (
            <LogoAt key={i} Comp={Comp} x={62 + i * 46} y={110} size={30} />
          ))}
        </CapCard>

        <CapCard
          y={178}
          h={150}
          label="Management"
          icon={ClipboardCheck}
          delay={0.2}
          lines={['Compliance & daily/weekly ops', 'Inventory & purchasing', 'Maintenance & staff rota']}
        />

        <CapCard
          y={348}
          h={132}
          label="Finance"
          icon={Wallet}
          delay={0.3}
          lines={['Expense tracking & EOD', 'Payroll', 'Invoicing & billing']}
        />

        <CapCard
          y={500}
          h={96}
          label="Analytics"
          icon={LineChart}
          delay={0.4}
          lines={['Live reporting & insights']}
        />

        {/* ---- TOP: AI brains ---- */}
        {MODELS.map((m, i) => (
          <motion.g
            key={m.name}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.09, ease: EASE }}
          >
            <rect x={m.x} y={30} width="104" height="46" rx="13" fill="#fff" stroke="rgba(29,29,31,0.1)" filter="url(#soft)" />
            <LogoAt Comp={m.Comp} x={m.x + 14} y={41} size={24} />
            <text x={m.x + 46} y={58} fontSize="14" fontWeight="600" fill="#1d1d1f">
              {m.name}
            </text>
          </motion.g>
        ))}

        {/* ---- CENTER hub ---- */}
        <circle cx="620" cy="340" r="150" fill="url(#hub-glow)" />
        <motion.g
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          style={{ transformOrigin: '620px 340px' }}
        >
          {!still && (
            <motion.circle
              cx="620"
              cy="340"
              r="102"
              fill="none"
              stroke="rgba(0,113,227,0.25)"
              strokeWidth="1.4"
              animate={{ r: [102, 114, 102], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          <motion.g
            animate={still ? undefined : { scale: [1, 1.025, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '620px 340px' }}
          >
            <circle cx="620" cy="340" r="90" fill="#fff" stroke="rgba(0,113,227,0.16)" strokeWidth="1.5" filter="url(#hub-shadow)" />
            <text x="620" y="338" textAnchor="middle" fontSize="30" fontWeight="700" fill="#1d1d1f" letterSpacing="-0.5">
              Selfera<tspan fill="#0071e3">.</tspan>
            </text>
            <text x="620" y="362" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#6e6e73" letterSpacing="2">
              ORCHESTRATION
            </text>
          </motion.g>
        </motion.g>

        {/* ---- RIGHT: storage ---- */}
        {[
          { Comp: Supabase, name: 'Supabase', y: 152 },
          { Comp: Sheets, name: 'Sheets', y: 252 },
        ].map((s, i) => (
          <motion.g
            key={s.name}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease: EASE }}
          >
            <rect x="924" y={s.y} width="200" height="64" rx="16" fill="#fff" stroke="rgba(29,29,31,0.1)" filter="url(#soft)" />
            <LogoAt Comp={s.Comp} x={946} y={s.y + 19} size={26} />
            <text x={986} y={s.y + 39} fontSize="16" fontWeight="600" fill="#1d1d1f">
              {s.name}
            </text>
          </motion.g>
        ))}

        {/* ---- BOTTOM: the Selfera dashboard ---- */}
        <motion.g
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
        >
          <rect x="454" y="540" width="332" height="196" rx="22" fill="#fff" stroke="rgba(0,113,227,0.22)" strokeWidth="1.5" filter="url(#soft)" />
          <LayoutDashboard x={478} y={560} size={20} color="#0071e3" strokeWidth={2} />
          <text x={506} y={575} fontSize="15.5" fontWeight="700" fill="#1d1d1f">
            Your Selfera Dashboard
          </text>
          <text x={478} y={597} fontSize="12" fill="#86868b">
            Built for your business — everything in one place
          </text>
          <line x1={474} y1={610} x2={766} y2={610} stroke="rgba(29,29,31,0.08)" />
          {DASH_ROWS.map((row, i) => {
            const col = i % 2;
            const rowN = Math.floor(i / 2);
            const rx = 474 + col * 150;
            const ry = 624 + rowN * 44;
            return (
              <g key={row}>
                <rect x={rx} y={ry} width={140} height={34} rx={10} fill="rgba(0,113,227,0.05)" />
                <circle cx={rx + 17} cy={ry + 17} r={4} fill="#0071e3" />
                <text x={rx + 30} y={ry + 21} fontSize="13" fontWeight="600" fill="#1d1d1f">
                  {row}
                </text>
                {row === 'Marketing' && !still && (
                  <motion.circle
                    cx={rx + 126}
                    cy={ry + 17}
                    r={3.5}
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
