import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Inbox,
  Bot,
  RefreshCw,
  FileCheck2,
  Search,
  Bell,
  CheckCircle2,
  Mail,
  PoundSterling,
  PackageCheck,
} from 'lucide-react';

interface LiveDashboardProps {
  show: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- Animated count-up ---------- */

function useCountUp(target: number, start: boolean, duration = 1800, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value.toFixed(decimals);
}

/* ---------- Live activity feed ---------- */

const FEED_MESSAGES = [
  { icon: CheckCircle2, text: 'Tenant enquiry triaged — viewing auto-booked', tag: 'Lettings' },
  { icon: PoundSterling, text: 'Invoice #2841 posted to Sage 50', tag: 'Finance' },
  { icon: PackageCheck, text: 'Stock levels synced Shopify ↔ warehouse', tag: 'Retail' },
  { icon: Mail, text: 'Weekly ROI report emailed to director', tag: 'Reports' },
  { icon: CheckCircle2, text: 'Return authorised — refund released', tag: 'Retail' },
  { icon: Bot, text: 'New lead scored 92/100 — routed to sales', tag: 'CRM' },
];

interface FeedItem {
  id: number;
  msg: number;
}

function ActivityFeed({ show }: { show: boolean }) {
  const [items, setItems] = useState<FeedItem[]>([
    { id: 2, msg: 2 },
    { id: 1, msg: 1 },
    { id: 0, msg: 0 },
  ]);

  useEffect(() => {
    if (!show) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    const interval = window.setInterval(() => {
      setItems((prev) => {
        const nextId = prev[0].id + 1;
        return [{ id: nextId, msg: nextId % FEED_MESSAGES.length }, ...prev.slice(0, 2)];
      });
    }, 2800);
    return () => window.clearInterval(interval);
  }, [show]);

  return (
    <div className="flex flex-col gap-1.5 overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        {items.map((item, idx) => {
          const Icon = FEED_MESSAGES[item.msg].icon;
          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: -14, scale: 0.97 }}
              animate={{ opacity: idx === 0 ? 1 : 0.55, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-2 rounded-lg border border-ink/5 bg-surface-soft px-2.5 py-1.5"
            >
              <Icon size={13} className="shrink-0 text-brand-blue" strokeWidth={2.4} />
              <span className="truncate text-[10.5px] font-medium text-ink">
                {FEED_MESSAGES[item.msg].text}
              </span>
              <span className="ml-auto shrink-0 rounded-full bg-brand-blue/10 px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-wide text-brand-deep">
                {FEED_MESSAGES[item.msg].tag}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Workflow pipeline with traveling pulse ---------- */

const PIPELINE = [
  { icon: Inbox, label: 'Enquiry in' },
  { icon: Bot, label: 'AI agent' },
  { icon: RefreshCw, label: 'CRM sync' },
  { icon: FileCheck2, label: 'Invoiced' },
];

function Pipeline() {
  return (
    <div className="relative px-2 py-3">
      {/* track */}
      <div className="absolute left-[10%] right-[10%] top-[26px] h-px bg-brand-blue/15" />
      {/* traveling pulse */}
      <motion.div
        className="absolute top-[23px] h-[7px] w-[7px] rounded-full bg-brand-blue"
        style={{ boxShadow: '0 0 10px 2px rgba(0,113,227,0.5)' }}
        animate={{ left: ['10%', '88%'], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
      />
      <div className="relative flex items-start justify-between">
        {PIPELINE.map((step, i) => (
          <div key={step.label} className="flex w-14 flex-col items-center gap-1.5">
            <motion.span
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-blue/20 bg-white text-brand-blue shadow-sm"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 2.4,
                delay: 0.3 + i * 0.75,
                ease: 'easeOut',
              }}
            >
              <step.icon size={15} strokeWidth={2.2} />
            </motion.span>
            <span className="text-center text-[9px] font-semibold uppercase tracking-wide text-ink-muted">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Bar chart ---------- */

const BARS = [38, 52, 44, 68, 58, 82, 74];
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function BarChart({ show }: { show: boolean }) {
  return (
    <div className="flex h-[88px] items-end justify-between gap-1.5 px-1">
      {BARS.map((h, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1">
          <div className="flex h-[68px] w-full items-end">
            <motion.div
              className="w-full rounded-t-[3px]"
              style={{
                background:
                  i === 5
                    ? 'linear-gradient(180deg, #0071e3 0%, #42a1ff 100%)'
                    : 'rgba(0,113,227,0.22)',
              }}
              initial={{ height: 0 }}
              animate={show ? { height: `${h}%` } : {}}
              transition={{ duration: 0.9, delay: 1.7 + i * 0.08, ease: EASE }}
            />
          </div>
          <span className="text-[8px] font-medium text-ink-muted">{DAYS[i]}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Dashboard ---------- */

export default function LiveDashboard({ show }: LiveDashboardProps) {
  const hours = useCountUp(346, show, 2000);
  const automations = useCountUp(24, show, 1600);
  const successRate = useCountUp(99.4, show, 2200, 1);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white text-left shadow-[0_40px_80px_-24px_rgba(0,95,192,0.28)]">
      {/* Window header */}
      <div className="flex items-center justify-between border-b border-ink/5 bg-surface-soft px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight text-ink">
            Selfera<span className="text-brand-blue">.</span>
          </span>
          <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-brand-deep">
            Ops Console
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="hidden sm:flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-2.5 py-1 text-[10px] text-ink-muted">
            <Search size={11} /> Search workflows…
          </span>
          <span className="relative text-ink-muted">
            <Bell size={14} />
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-brand-blue" />
          </span>
          <span className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-sky to-brand-deep" />
        </div>
      </div>

      <div className="grid gap-3 p-3 sm:p-4">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Hours reclaimed', value: hours, suffix: ' hrs', delta: '+12% this month' },
            { label: 'Automations live', value: automations, suffix: '', delta: '3 deployed this week' },
            { label: 'Task success', value: successRate, suffix: '%', delta: 'across all pipelines' },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              className="rounded-xl border border-ink/5 bg-surface-soft p-3"
              initial={{ opacity: 0, y: 14 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.5 + i * 0.12, ease: EASE }}
            >
              <div className="text-[9px] font-semibold uppercase tracking-wider text-ink-muted">
                {kpi.label}
              </div>
              <div className="mt-0.5 text-lg sm:text-xl font-bold tracking-tight text-ink">
                {kpi.value}
                <span className="text-brand-blue">{kpi.suffix}</span>
              </div>
              <div className="text-[9px] font-medium text-brand-deep">{kpi.delta}</div>
            </motion.div>
          ))}
        </div>

        {/* Pipeline + chart */}
        <div className="grid gap-3 sm:grid-cols-5">
          <motion.div
            className="rounded-xl border border-ink/5 bg-surface-soft p-3 sm:col-span-3"
            initial={{ opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.85, ease: EASE }}
          >
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
              Live workflow — enquiry to invoice
            </div>
            <Pipeline />
          </motion.div>

          <motion.div
            className="rounded-xl border border-ink/5 bg-surface-soft p-3 sm:col-span-2"
            initial={{ opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.95, ease: EASE }}
          >
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
              Hours reclaimed / day
            </div>
            <BarChart show={show} />
          </motion.div>
        </div>

        {/* Activity feed */}
        <motion.div
          className="rounded-xl border border-ink/5 p-3"
          initial={{ opacity: 0, y: 14 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 2.05, ease: EASE }}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
              Live activity
            </span>
            <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-brand-deep">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
              </span>
              Streaming
            </span>
          </div>
          <ActivityFeed show={show} />
        </motion.div>
      </div>
    </div>
  );
}
