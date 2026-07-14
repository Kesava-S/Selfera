import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Sparkles,
  Bot,
  Terminal,
  BarChart3,
  TrendingUp,
  Linkedin,
  GitMerge,
  Cloud,
  Database,
  Layers,
  Search,
  PieChart,
  FileSpreadsheet,
  type LucideIcon
} from 'lucide-react';

interface NodeData {
  name: string;
  filename: string;
  x: number;
  y: number;
  icon: LucideIcon;
  color: string;
  type: 'top' | 'left' | 'right';
  xEnd: number;
  yEnd: number;
}

const NODES: NodeData[] = [
  // Top Row (5 AI Engines) - Centers: x=180, 290, 400, 510, 620; y=60
  { name: 'OpenAI', filename: 'openai.webp', x: 180, y: 60, icon: Brain, color: '#10a37f', type: 'top', xEnd: 350, yEnd: 240 },
  { name: 'Claude', filename: 'claude.webp', x: 290, y: 60, icon: Cpu, color: '#d97706', type: 'top', xEnd: 375, yEnd: 240 },
  { name: 'Gemini', filename: 'gemini.webp', x: 400, y: 60, icon: Sparkles, color: '#1a73e8', type: 'top', xEnd: 400, yEnd: 240 },
  { name: 'Llama', filename: 'llama.webp', x: 510, y: 60, icon: Bot, color: '#047857', type: 'top', xEnd: 425, yEnd: 240 },
  { name: 'Mistral', filename: 'mistral.webp', x: 620, y: 60, icon: Terminal, color: '#ea580c', type: 'top', xEnd: 450, yEnd: 240 },

  // Left Column (5 Data Sources) - Center: x=60; y=140, 220, 300, 380, 460
  { name: 'Google Analytics', filename: 'google-analytics.webp', x: 60, y: 140, icon: BarChart3, color: '#f9ab00', type: 'left', xEnd: 336, yEnd: 240 },
  { name: 'Google Ads', filename: 'google-ads.webp', x: 60, y: 220, icon: TrendingUp, color: '#1a73e8', type: 'left', xEnd: 336, yEnd: 270 },
  { name: 'LinkedIn', filename: 'linkedin.webp', x: 60, y: 300, icon: Linkedin, color: '#0077b5', type: 'left', xEnd: 336, yEnd: 300 },
  { name: 'HubSpot', filename: 'hubspot.webp', x: 60, y: 380, icon: GitMerge, color: '#ff7a59', type: 'left', xEnd: 336, yEnd: 330 },
  { name: 'Salesforce', filename: 'salesforce.webp', x: 60, y: 460, icon: Cloud, color: '#00a1e0', type: 'left', xEnd: 336, yEnd: 360 },

  // Right Column (5 Destinations) - Center: x=740; y=140, 220, 300, 380, 460
  { name: 'BigQuery', filename: 'bigquery.webp', x: 740, y: 140, icon: Database, color: '#4285f4', type: 'right', xEnd: 464, yEnd: 240 },
  { name: 'Snowflake', filename: 'snowflake.webp', x: 740, y: 220, icon: Layers, color: '#29b6f6', type: 'right', xEnd: 464, yEnd: 270 },
  { name: 'Looker', filename: 'looker.webp', x: 740, y: 300, icon: Search, color: '#4285f4', type: 'right', xEnd: 464, yEnd: 300 },
  { name: 'Tableau', filename: 'tableau.webp', x: 740, y: 380, icon: PieChart, color: '#e0301e', type: 'right', xEnd: 464, yEnd: 330 },
  { name: 'Sheets', filename: 'sheets.webp', x: 740, y: 460, icon: FileSpreadsheet, color: '#0f9d58', type: 'right', xEnd: 464, yEnd: 360 },
];

export default function NetworkDiagram() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setImageErrors((prev) => ({ ...prev, [name]: true }));
  };

  // Generate cubic Bezier path based on node type
  const getPathData = (node: NodeData) => {
    const { x, y, xEnd, yEnd, type } = node;
    if (type === 'left') {
      const startX = x + 24; // Right edge of left node (node size is 48x48)
      const ctrlX = (startX + xEnd) / 2;
      return `M ${startX} ${y} C ${ctrlX} ${y}, ${ctrlX} ${yEnd}, ${xEnd} ${yEnd}`;
    } else if (type === 'right') {
      const startX = x - 24; // Left edge of right node
      const ctrlX = (startX + xEnd) / 2;
      return `M ${startX} ${y} C ${ctrlX} ${y}, ${ctrlX} ${yEnd}, ${xEnd} ${yEnd}`;
    } else {
      const startY = y + 24; // Bottom edge of top node
      const ctrlY = (startY + yEnd) / 2;
      return `M ${x} ${startY} C ${x} ${ctrlY}, ${xEnd} ${ctrlY}, ${xEnd} ${yEnd}`;
    }
  };

  return (
    <div className="relative w-full max-w-[580px] lg:max-w-none aspect-[4/3] rounded-[32px] border border-white/5 bg-black/20 p-4 sm:p-6 shadow-[inset_0_1px_8px_rgba(255,255,255,0.03)] overflow-hidden backdrop-blur-md">
      {/* SVG Canvas */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glowing pulse color gradient */}
          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f5c0" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f5c0" stopOpacity="1" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </linearGradient>

          {/* Center glow filter */}
          <filter id="center-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- 1. Connection lines & Pulses --- */}
        {NODES.map((node, i) => {
          const pathD = getPathData(node);
          // Staggered durations & delays for pulse flow variation
          const pulseDuration = 2.5 + (i % 3) * 0.5;
          const pulseDelay = i * 0.18;

          return (
            <g key={`path-group-${node.name}`}>
              {/* Base SVG curve */}
              <path
                d={pathD}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Glowing animated pulse flowing into center */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#pulse-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="40, 240"
                initial={{ strokeDashoffset: 280 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: pulseDuration,
                  delay: pulseDelay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </g>
          );
        })}

        {/* --- 2. Center Hub (Selfera Node) --- */}
        {/* Soft backlighting */}
        <circle
          cx="400"
          cy="300"
          r="74"
          fill="rgba(0, 245, 192, 0.06)"
          filter="url(#center-glow)"
        />
        {/* White center circle */}
        <motion.circle
          cx="400"
          cy="300"
          r="64"
          fill="#ffffff"
          className="shadow-2xl"
          animate={{ scale: [1, 1.025, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Central Logo Text */}
        <text
          x="400"
          y="307"
          textAnchor="middle"
          fill="#002b22"
          fontSize="20"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.03em"
        >
          Selfera
        </text>

        {/* --- 3. Integration Nodes --- */}
        {NODES.map((node) => {
          const { x, y, name, filename, icon: IconComponent } = node;
          const isImageFailed = imageErrors[name] === true;

          return (
            <g key={`node-${name}`}>
              {/* Node container (Outer card) */}
              <rect
                x={x - 24}
                y={y - 24}
                width="48"
                height="48"
                rx="12"
                fill="rgba(255, 255, 255, 0.04)"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                className="transition-all duration-300"
              />

              {/* Integration image with fallback to Lucide vector icon */}
              {!isImageFailed ? (
                <image
                  href={`/logos/${filename}`}
                  x={x - 14}
                  y={y - 14}
                  width="28"
                  height="28"
                  onError={() => handleImageError(name)}
                />
              ) : (
                <foreignObject x={x - 14} y={y - 14} width="28" height="28" className="pointer-events-none">
                  <div className="flex h-full w-full items-center justify-center text-emerald-400/80">
                    <IconComponent size={18} strokeWidth={2} />
                  </div>
                </foreignObject>
              )}

              {/* Subtle hover tooltip or tag on node hover can be simulated with CSS */}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
