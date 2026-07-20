import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  show: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const AI_LOGOS = [
  { src: '/logos/logo_1.webp', alt: 'OpenAI', className: 'invert brightness-[3.0] opacity-90' },
  { src: '/logos/logo_2.webp', alt: 'Gemini Outline', className: '' },
  { src: '/logos/logo_3.webp', alt: 'Claude', className: '' },
  { src: '/logos/logo_4.webp', alt: 'Replicate', className: '' },
  { src: '/logos/logo_5.webp', alt: 'Gemini Colorful', className: '' },
];

const CHANNEL_LOGOS = [
  { src: '/logos/chan_1.webp', alt: 'TikTok', x: 50, y: 12 },
  { src: '/logos/chan_2.webp', alt: 'WhatsApp', x: 80, y: 26 },
  { src: '/logos/chan_3.webp', alt: 'Instagram', x: 87, y: 58 },
  { src: '/logos/chan_4.webp', alt: 'Google Ads', x: 66, y: 84 },
  { src: '/logos/chan_5.webp', alt: 'Meta Ads', x: 34, y: 84 },
  { src: '/logos/chan_6_square.svg', alt: 'LinkedIn', x: 13, y: 58, className: 'rounded-[5px]' },
  { src: '/logos/chan_7_new.svg', alt: 'Facebook', x: 20, y: 26 },
];

const BOTTOM_LEFT_LOGOS = [
  { src: '/logos/left_logo_1.svg', alt: 'Search', x: 50, y: 15 },
  { src: '/logos/left_logo_2.svg', alt: 'History', x: 85, y: 50 },
  { src: '/logos/left_logo_3.svg', alt: 'Invoice', x: 50, y: 85 },
  { src: '/logos/left_logo_4.svg', alt: 'Payroll', x: 15, y: 50 },
];

const THIRD_LEFT_LOGOS = [
  { src: '/logos/left_logo_5.svg', alt: 'Alert', x: 50, y: 12 },
  { src: '/logos/left_logo_6.svg', alt: 'Security', x: 83, y: 31 },
  { src: '/logos/left_logo_7.svg', alt: 'Sync', x: 83, y: 69 },
  { src: '/logos/left_logo_8.svg', alt: 'Cart', x: 50, y: 88 },
  { src: '/logos/left_logo_9.svg', alt: 'Calendar', x: 17, y: 69 },
  { src: '/logos/left_logo_10.svg', alt: 'Boxes', x: 17, y: 31 },
];

const FOURTH_LEFT_LOGOS = [
  { src: '/logos/left_logo_11.svg', alt: 'Google Analytics' },
  { src: '/logos/left_logo_12.svg', alt: 'Power BI' },
];

const RIGHT_LOGOS = [
  { src: '/logos/right_logo_1.svg', alt: 'Supabase', x: 25, y: 50 },
  { src: '/logos/right_logo_2.svg', alt: 'Integration', x: 75, y: 50 },
];

/* ---------- Word-by-word headline ---------- */

interface HeadlineWord {
  text: string;
  accent?: boolean;
}

const HEADLINE: HeadlineWord[] = [
  { text: 'Save' },
  { text: '10+ hours', accent: true },
  { text: 'a' },
  { text: 'week' },
  { text: 'on' },
  { text: 'your' },
  { text: 'Management' },
  { text: 'and' },
  { text: 'Marketing' },
];

function Headline({ show }: { show: boolean }) {
  return (
    <h1
      className="relative z-10 text-center font-bold leading-[1.08] tracking-tightest text-white w-full mx-auto flex flex-wrap justify-center"
      style={{ fontSize: 'clamp(1.75rem, 5.2vw, 3.6rem)' }}
    >
      {HEADLINE.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-4 -mb-4 align-bottom"
          style={{
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.45))',
          }}
        >
          <motion.span
            className={`inline-block ${
              word.accent
                ? 'bg-gradient-to-r from-[#00f5c0] to-[#0284c7] bg-clip-text text-transparent'
                : 'text-white'
            }`}
            initial={{ y: '110%', opacity: 0, filter: 'blur(8px)' }}
            animate={show ? { y: 0, opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.15 + i * 0.08, ease: EASE }}
          >
            {word.text}
          </motion.span>
          {i < HEADLINE.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </h1>
  );
}

/* ---------- Hero ---------- */

export default function Hero({ show }: HeroProps) {
  const WORDS = ['Marketing', 'Management', 'Finance', 'Data Management', 'Analytics & Reporting'];
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [junctionY, setJunctionY] = useState(520);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    let timeoutId: any;

    const tick = () => {
      setWordIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % WORDS.length;
        timeoutId = setTimeout(tick, 1500);
        return nextIndex;
      });
    };

    // Initialize the first timer
    timeoutId = setTimeout(tick, 1500);

    // Reset loop back to Bookings (index 0) whenever the user scrolls back to the homepage Hero
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWordIndex(0);
          clearTimeout(timeoutId);
          timeoutId = setTimeout(tick, 1500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update junction Y position dynamically based on CTA buttons bottom
  useEffect(() => {
    if (!show) return;

    const updateJunctionY = () => {
      if (buttonsRef.current && sectionRef.current) {
        const buttonsRect = buttonsRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const style = window.getComputedStyle(sectionRef.current);
        const paddingTop = parseFloat(style.paddingTop) || 96;
        const relativeY = (buttonsRect.bottom - sectionRect.top) - paddingTop + 24;
        setJunctionY(relativeY);
      }
    };

    const timer = setTimeout(updateJunctionY, 150);
    window.addEventListener('resize', updateJunctionY);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateJunctionY);
    };
  }, [show, wordIndex, windowWidth]);

  const containerWidth = Math.min(windowWidth, 1200);
  const cx = containerWidth / 2;
  const isMobile = windowWidth < 768;

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex min-h-[100vh] flex-col items-center justify-start px-5 pt-32 md:pt-40 pb-40 md:pb-[340px] bg-[#002b22] text-white overflow-hidden"
      style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
    >
      {/* Central Layout Wrapper */}
      <div className="relative w-full max-w-[1200px] flex flex-col items-center mx-auto">
        
        {/* Top Left Social Channels Cluster (Marketing) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={show ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="absolute left-[-16px] md:-left-12 lg:-left-4 top-[95px] sm:top-[130px] w-16 h-16 md:w-32 md:h-32 z-10 pointer-events-none block"
        >
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
            <defs>
              <linearGradient id="channelLineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(0, 245, 192, 0.4)" />
                <stop offset="100%" stopColor="rgba(0, 245, 192, 0)" />
              </linearGradient>
            </defs>
            <path 
              id="marketingTextPath" 
              d={isMobile ? "M 6 6 A 36 36 0 0 1 58 6" : "M 13 13 A 72 72 0 0 1 115 13"} 
              fill="none" 
            />
            <text fill="rgba(0, 245, 192, 0.7)" fontSize={isMobile ? "6" : "9"} fontWeight="bold" letterSpacing="1.5" className="font-mono">
              <textPath href="#marketingTextPath" startOffset="50%" textAnchor="middle">
                MARKETING
              </textPath>
            </text>
            {CHANNEL_LOGOS.map((logo, index) => (
              <g key={`chan-line-${index}`}>
                <line x1={`${logo.x}%`} y1={`${logo.y}%`} x2="50%" y2="50%" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
                <motion.line
                  x1={`${logo.x}%`} y1={`${logo.y}%`} x2="50%" y2="50%"
                  stroke="rgba(0, 245, 192, 0.4)" strokeWidth="1.5"
                  strokeDasharray="15, 60"
                  initial={{ strokeDashoffset: 75 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.15, repeat: Infinity, ease: 'linear' }}
                />
              </g>
            ))}
            {/* Output line drops to absolute junctionY, turns right to center */}
            <g>
              <path d={isMobile ? `M 32 32 L 92 32 L 92 ${junctionY - 95} L ${cx - 16} ${junctionY - 95}` : `M 64 64 L 296 64 L 296 ${junctionY - 130} L ${cx - 16} ${junctionY - 130}`} stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" fill="none" />
              <motion.path 
                d={isMobile ? `M 32 32 L 92 32 L 92 ${junctionY - 95} L ${cx - 16} ${junctionY - 95}` : `M 64 64 L 296 64 L 296 ${junctionY - 130} L ${cx - 16} ${junctionY - 130}`} 
                stroke="url(#channelLineGrad)" strokeWidth="1.5" fill="none"
                strokeDasharray="100, 300"
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </g>
          </svg>
          {CHANNEL_LOGOS.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`absolute h-4 md:h-8 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110 pointer-events-auto cursor-pointer -translate-x-1/2 -translate-y-1/2 z-10 ${logo.className || ''}`}
              style={{
                left: `${logo.x}%`,
                top: `${logo.y}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Bottom Right Finance Cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={show ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="absolute right-[-12px] md:-right-4 lg:right-4 top-[103px] sm:top-[162px] w-12 h-12 md:w-16 md:h-16 z-10 pointer-events-none block"
        >
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
            <defs>
              <linearGradient id="bottomRightLineGrad" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(0, 245, 192, 0.4)" />
                <stop offset="100%" stopColor="rgba(0, 245, 192, 0)" />
              </linearGradient>
            </defs>
            <path 
              id="financeTextPath" 
              d={isMobile ? "M 4 4 A 26 26 0 0 1 44 4" : "M 6 6 A 36 36 0 0 1 58 6"} 
              fill="none" 
            />
            <text fill="rgba(0, 245, 192, 0.7)" fontSize={isMobile ? "5" : "7"} fontWeight="bold" letterSpacing="1.5" className="font-mono">
              <textPath href="#financeTextPath" startOffset="50%" textAnchor="middle">
                FINANCE
              </textPath>
            </text>
            {BOTTOM_LEFT_LOGOS.map((logo, index) => (
              <g key={`feat-line-${index}`}>
                <line x1={`${logo.x}%`} y1={`${logo.y}%`} x2="50%" y2="50%" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
                <motion.line
                  x1={`${logo.x}%`} y1={`${logo.y}%`} x2="50%" y2="50%"
                  stroke="rgba(0, 245, 192, 0.4)" strokeWidth="1.5"
                  strokeDasharray="15, 60"
                  initial={{ strokeDashoffset: 75 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.15, repeat: Infinity, ease: 'linear' }}
                />
              </g>
            ))}
            {/* Output line drops to absolute junctionY, turns left to center */}
            <g>
              <path d={isMobile ? `M 24 24 L -60 24 L -60 ${junctionY - 103} L ${48 - cx} ${junctionY - 103}` : `M 32 32 L -224 32 L -224 ${junctionY - 162} L ${96 - cx} ${junctionY - 162}`} stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" fill="none" />
              <motion.path 
                d={isMobile ? `M 24 24 L -60 24 L -60 ${junctionY - 103} L ${48 - cx} ${junctionY - 103}` : `M 32 32 L -224 32 L -224 ${junctionY - 162} L ${96 - cx} ${junctionY - 162}`} 
                stroke="url(#bottomRightLineGrad)" strokeWidth="1.5" fill="none"
                strokeDasharray="100, 300"
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </g>
          </svg>
          {BOTTOM_LEFT_LOGOS.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="absolute h-3.5 md:h-6 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110 pointer-events-auto cursor-pointer -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${logo.x}%`,
                top: `${logo.y}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Third Right Management Cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={show ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="absolute right-[-14px] md:-right-8 lg:right-0 top-[300px] sm:top-[310px] w-16 h-16 md:w-24 md:h-24 z-10 pointer-events-none block"
        >
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
            <defs>
              <linearGradient id="thirdRightLineGrad" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(0, 245, 192, 0.4)" />
                <stop offset="100%" stopColor="rgba(0, 245, 192, 0)" />
              </linearGradient>
            </defs>
            <path 
              id="managementTextPath" 
              d={isMobile ? "M 6 6 A 36 36 0 0 1 58 6" : "M 10 10 A 54 54 0 0 1 86 10"} 
              fill="none" 
            />
            <text fill="rgba(0, 245, 192, 0.7)" fontSize={isMobile ? "6" : "8"} fontWeight="bold" letterSpacing="1.5" className="font-mono">
              <textPath href="#managementTextPath" startOffset="50%" textAnchor="middle">
                MANAGEMENT
              </textPath>
            </text>
            {THIRD_LEFT_LOGOS.map((logo, index) => (
              <g key={`third-line-${index}`}>
                <line x1={`${logo.x}%`} y1={`${logo.y}%`} x2="50%" y2="50%" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
                <motion.line
                  x1={`${logo.x}%`} y1={`${logo.y}%`} x2="50%" y2="50%"
                  stroke="rgba(0, 245, 192, 0.4)" strokeWidth="1.5"
                  strokeDasharray="15, 60"
                  initial={{ strokeDashoffset: 75 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.15, repeat: Infinity, ease: 'linear' }}
                />
              </g>
            ))}
            {/* Output line drops to absolute junctionY, turns left to center */}
            <g>
              <path d={isMobile ? `M 32 32 L -58 32 L -58 ${junctionY - 300} L ${64 - cx} ${junctionY - 300}` : `M 48 48 L -200 48 L -200 ${junctionY - 310} L ${96 - cx} ${junctionY - 310}`} stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" fill="none" />
              <motion.path 
                d={isMobile ? `M 32 32 L -58 32 L -58 ${junctionY - 300} L ${64 - cx} ${junctionY - 300}` : `M 48 48 L -200 48 L -200 ${junctionY - 310} L ${96 - cx} ${junctionY - 310}`} 
                stroke="url(#thirdRightLineGrad)" strokeWidth="1.5" fill="none"
                strokeDasharray="100, 300"
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </g>
          </svg>
          {THIRD_LEFT_LOGOS.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="absolute h-3.5 md:h-6 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110 pointer-events-auto cursor-pointer -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${logo.x}%`,
                top: `${logo.y}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Fourth Left Capsule Cluster (Reporting) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={show ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          className="absolute left-[-16px] md:-left-12 lg:-left-4 top-[308px] sm:top-[318px] w-20 h-12 md:w-32 md:h-20 z-10 pointer-events-none block flex flex-col justify-end pb-1 items-center"
        >
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
            <defs>
              <linearGradient id="fourthLeftLineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(0, 245, 192, 0.4)" />
                <stop offset="100%" stopColor="rgba(0, 245, 192, 0)" />
              </linearGradient>
            </defs>
            <path 
              id="reportingTextPath" 
              d={isMobile ? "M 12 10 A 38 38 0 0 1 68 10" : "M 24 16 A 56 56 0 0 1 104 16"} 
              fill="none" 
            />
            <text fill="rgba(0, 245, 192, 0.7)" fontSize={isMobile ? "6" : "9"} fontWeight="bold" letterSpacing="1.5" className="font-mono">
              <textPath href="#reportingTextPath" startOffset="50%" textAnchor="middle">
                REPORTING
              </textPath>
            </text>
            <g>
              <path d={isMobile ? `M 40 24 L 108 24 L 108 ${junctionY - 308} L ${cx - 16} ${junctionY - 308}` : `M 64 40 L 336 40 L 336 ${junctionY - 318} L ${cx - 16} ${junctionY - 318}`} stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" fill="none" />
              <motion.path 
                d={isMobile ? `M 40 24 L 108 24 L 108 ${junctionY - 308} L ${cx - 16} ${junctionY - 308}` : `M 64 40 L 336 40 L 336 ${junctionY - 318} L ${cx - 16} ${junctionY - 318}`} 
                stroke="url(#fourthLeftLineGrad)" strokeWidth="1.5" fill="none"
                strokeDasharray="100, 300"
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </g>
          </svg>
          <div className="flex flex-row justify-center gap-6 items-center sm:translate-y-2 translate-y-0">
            {FOURTH_LEFT_LOGOS.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-4 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 pointer-events-auto cursor-pointer z-10"
              />
            ))}
          </div>
        </motion.div>

        {/* Right Integrations Vertical Column (Database) - Centered below buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={show ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="absolute w-32 h-16 md:w-64 md:h-32 z-10 pointer-events-none block"
          style={{
            top: `${junctionY + (isMobile ? 24 : 50)}px`,
            left: `${cx - (isMobile ? 84 : 128)}px`
          }}
        >
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
            <defs>
              <linearGradient id="rightLineGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(0, 245, 192, 0.4)" />
                <stop offset="100%" stopColor="rgba(0, 245, 192, 0)" />
              </linearGradient>
            </defs>
            <path 
              id="databaseTextPath" 
              d={isMobile ? "M 24 16 A 40 40 0 0 1 104 16" : "M 48 32 A 80 80 0 0 1 208 32"} 
              fill="none" 
            />
            <text fill="rgba(0, 245, 192, 0.7)" fontSize={isMobile ? "6" : "9"} fontWeight="bold" letterSpacing="1.5" className="font-mono">
              <textPath href="#databaseTextPath" startOffset="50%" textAnchor="middle">
                DATABASE
              </textPath>
            </text>
            {/* T-Junction connection lines going up to the junctionY */}
            <g>
              <path 
                d={isMobile ? "M 32 32 L 96 32 M 64 32 L 64 -24" : "M 64 64 L 192 64 M 128 64 L 128 -50"} 
                stroke="rgba(255, 255, 255, 0.05)" 
                strokeWidth="1.5" 
                fill="none" 
              />
              {/* Left Branch Pulse */}
              <motion.path 
                d={isMobile ? "M 32 32 L 64 32 L 64 -24" : "M 64 64 L 128 64 L 128 -50"} 
                stroke="url(#rightLineGrad)" 
                strokeWidth="1.5" 
                fill="none"
                strokeDasharray="40, 150"
                initial={{ strokeDashoffset: 190 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              {/* Right Branch Pulse */}
              <motion.path 
                d={isMobile ? "M 96 32 L 64 32 L 64 -24" : "M 192 64 L 128 64 L 128 -50"} 
                stroke="url(#rightLineGrad)" 
                strokeWidth="1.5" 
                fill="none"
                strokeDasharray="40, 150"
                initial={{ strokeDashoffset: 190 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </g>
          </svg>
          {RIGHT_LOGOS.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="absolute h-4 md:h-8 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110 pointer-events-auto cursor-pointer -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${logo.x}%`,
                top: `${logo.y}%`,
              }}
            />
          ))}
        </motion.div>

        {/* AI Logos Row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.05, ease: EASE }}
        className="relative z-10 -mt-4 sm:-mt-10 mb-16 sm:mb-20 flex items-center justify-center gap-6 sm:gap-8 flex-wrap"
      >
        {AI_LOGOS.map((logo, index) => {
          // Lines drop straight down to absolute junctionY to join the bus
          const dx = (2 - index) * (isMobile ? 48 : 75); // -150, -75, 0, 75, 150
          const targetY = isMobile ? junctionY - 16 : junctionY - 24;
          const pathD = dx === 0 
            ? `M 0 0 L 0 ${targetY}` 
            : `M 0 0 L 0 ${targetY} L ${-dx} ${targetY}`;

          return (
          <div key={index} className="relative flex flex-col items-center">
            {/* The Logo Image */}
            <img
              src={logo.src}
              alt={logo.alt}
              className={`h-7 sm:h-8 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer z-10 ${logo.className}`}
            />
            
            {/* Vertical Connection Line and Flowing Pulse */}
            <div className="absolute top-[100%] left-1/2 pointer-events-none z-0">
              <svg className="absolute inset-0 overflow-visible" width="1" height="1">
                <defs>
                  <linearGradient id={`fade-${index}`} x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(1, 650)">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="70%" stopColor="white" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.3" />
                  </linearGradient>
                  <mask id={`mask-${index}`}>
                    <rect x="-300" y="0" width="600" height="1000" fill={`url(#fade-${index})`} />
                  </mask>
                </defs>
                <g mask={`url(#mask-${index})`}>
                  {/* Base Track */}
                  <path d={pathD} stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1.5" fill="none" />
                  {/* Flowing Pulse */}
                  <motion.path
                    d={pathD}
                    stroke="rgba(0, 245, 192, 0.5)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="40, 300"
                    initial={{ strokeDashoffset: 340 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{
                      duration: 3 + (index % 3) * 0.5,
                      delay: index * 0.25,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </g>
              </svg>
            </div>
          </div>
        )})}
      </motion.div>

      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        className="relative z-20 mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-center text-[10px] sm:text-xs font-semibold tracking-wide max-w-[65vw] md:max-w-none"
      >
        <span className="shimmer-text-emerald bg-clip-text text-transparent">
          Empowering SME Owners with Simple and Effective AI Automations
        </span>
      </motion.div>

      {/* Headline */}
      <div className="relative w-full max-w-4xl px-6 md:px-0 z-20 mt-4 sm:mt-0">
        <Headline show={show} />
      </div>

      {/* Tagline with cycling words */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
        className="relative z-20 mt-6 max-w-2xl text-center text-sm sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium flex flex-col items-center gap-1 px-6 md:px-0"
      >
        <span>One Agentic Solution for all your</span>
        <span className="inline-grid grid-cols-1 grid-rows-1 justify-items-center h-[1.25em] align-middle overflow-hidden relative min-w-[160px] sm:min-w-[200px] whitespace-nowrap text-[#00f5c0] font-bold drop-shadow-[0_0_12px_rgba(0,245,192,0.3)]">
          <AnimatePresence mode="wait">
            <motion.span
              key={WORDS[wordIndex]}
              initial={{ y: 24, scale: 0.85, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -24, scale: 0.85, opacity: 0 }}
              transition={{
                y: { type: 'spring', stiffness: 380, damping: 24 },
                scale: { type: 'spring', stiffness: 380, damping: 20 },
                opacity: { duration: 0.18 },
              }}
              className="[grid-area:1/1] whitespace-nowrap"
            >
              {WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span>built for you</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        ref={buttonsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
        className="relative z-20 mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#how-it-works"
          className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#002b22] transition-all duration-200 hover:bg-emerald-50 hover:scale-[1.04] hover:shadow-lg hover:shadow-white/10 active:scale-95"
        >
          See How It Works
        </a>
        <a
          href="#booking"
          className="rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-deep hover:scale-[1.04] hover:shadow-lg hover:shadow-brand-blue/25 active:scale-95"
        >
          Book Your Consultation
        </a>
      </motion.div>



      </div>
    </section>
  );
}
