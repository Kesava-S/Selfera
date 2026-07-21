import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const CIRCLE_DEFS: Record<string, {
  label: string;
  cx: number;
  cy: number;
  ctrlX: number;
  ctrlY: number;
  color: string;
  glowId: string;
  logos: Array<{ src: string, x: number, y: number, className?: string }>;
}> = {
  finance: {
    label: 'FINANCE',
    cx: 300,
    cy: 100,
    ctrlX: 280,
    ctrlY: 180,
    color: '#eab308',
    glowId: 'glow-finance',
    logos: [
      { src: '/logos/left_logo_1.svg', x: 50, y: 15 },
      { src: '/logos/left_logo_2.svg', x: 85, y: 50 },
      { src: '/logos/left_logo_3.svg', x: 50, y: 85 },
      { src: '/logos/left_logo_4.svg', x: 15, y: 50 },
    ]
  },
  service: {
    label: 'AI COGNITIVE',
    cx: 480,
    cy: 235,
    ctrlX: 420,
    ctrlY: 210,
    color: '#a855f7',
    glowId: 'glow-service',
    logos: [
      { src: '/logos/logo_1.webp', x: 50, y: 15, className: 'invert brightness-[3.0] opacity-90' },
      { src: '/logos/logo_2.webp', x: 80, y: 35 },
      { src: '/logos/logo_3.webp', x: 70, y: 75 },
      { src: '/logos/logo_4.webp', x: 30, y: 75 },
      { src: '/logos/logo_5.webp', x: 20, y: 35 },
    ]
  },
  analytics: {
    label: 'REPORTING',
    cx: 410,
    cy: 450,
    ctrlX: 390,
    ctrlY: 390,
    color: '#f43f5e',
    glowId: 'glow-analytics',
    logos: [
      { src: '/logos/left_logo_11.svg', x: 30, y: 50 },
      { src: '/logos/left_logo_12.svg', x: 70, y: 50 },
    ]
  },
  operations: {
    label: 'MANAGEMENT',
    cx: 190,
    cy: 450,
    ctrlX: 210,
    ctrlY: 390,
    color: '#38bdf8',
    glowId: 'glow-operations',
    logos: [
      { src: '/logos/left_logo_5.svg', x: 50, y: 15 },
      { src: '/logos/left_logo_6.svg', x: 83, y: 33 },
      { src: '/logos/left_logo_7.svg', x: 83, y: 67 },
      { src: '/logos/left_logo_8.svg', x: 50, y: 85 },
      { src: '/logos/left_logo_9.svg', x: 17, y: 67 },
      { src: '/logos/left_logo_10.svg', x: 17, y: 33 },
    ]
  },
  marketing: {
    label: 'MARKETING',
    cx: 120,
    cy: 235,
    ctrlX: 180,
    ctrlY: 210,
    color: '#00f5c0',
    glowId: 'glow-marketing',
    logos: [
      { src: '/logos/chan_1.webp', x: 50, y: 15 },
      { src: '/logos/chan_2.webp', x: 80, y: 30 },
      { src: '/logos/chan_3.webp', x: 85, y: 60 },
      { src: '/logos/chan_4.webp', x: 65, y: 85 },
      { src: '/logos/chan_5.webp', x: 35, y: 85 },
      { src: '/logos/chan_6_square.svg', x: 15, y: 60, className: 'rounded-[3px]' },
      { src: '/logos/chan_7_new.svg', x: 20, y: 30 },
    ]
  }
};

export default function CustomSolutions() {
  const [selectedAreas, setSelectedAreas] = useState<Record<string, boolean>>({
    marketing: false,
    operations: false,
    service: false,
    analytics: false,
    finance: false,
  });
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    restaurant: true,
    bakery: false,
    beauty: false,
  });

  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [dashboardFormData, setDashboardFormData] = useState({
    name: '',
    email: '',
    restaurantName: '',
    location: '',
    postCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const [activatedCircles, setActivatedCircles] = useState<Record<string, boolean>>({
    marketing: false,
    operations: false,
    service: false,
    analytics: false,
    finance: false,
  });

  const [circlePositions, setCirclePositions] = useState<Record<string, { cx: number, cy: number, ctrlX: number, ctrlY: number }>>({
    marketing: { cx: 120, cy: 190, ctrlX: 310, ctrlY: 100 },
    operations: { cx: 310, cy: 220, ctrlX: 410, ctrlY: 110 },
    service: { cx: 500, cy: 170, ctrlX: 500, ctrlY: 100 },
    analytics: { cx: 690, cy: 210, ctrlX: 590, ctrlY: 110 },
    finance: { cx: 880, cy: 190, ctrlX: 690, ctrlY: 100 },
  });

  const [isBuilding, setIsBuilding] = useState(false);
  const [buildStep, setBuildStep] = useState<'idle' | 'charging' | 'firing' | 'pulling' | 'form' | 'complete'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
  });

  const randomizePosition = (key: string) => {
    const bands: Record<string, [number, number]> = {
      marketing: [80, 200],
      operations: [260, 420],
      service: [460, 540],
      analytics: [580, 740],
      finance: [800, 920],
    };
    const [minX, maxX] = bands[key] || [100, 900];
    const cx = Math.floor(minX + Math.random() * (maxX - minX));
    const cy = Math.floor(160 + Math.random() * 60); // Y between 160 and 220
    const ctrlX = Math.floor((500 + cx) / 2 + (Math.random() * 60 - 30));
    const ctrlY = Math.floor(65 + Math.random() * 55); // Y between 65 and 120
    return { cx, cy, ctrlX, ctrlY };
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBuilding(true);
    setBuildStep('complete');
    setIsBuilding(false);
  };

  const toggleArea = (key: string) => {
    if (isBuilding || buildStep === 'form' || buildStep === 'pulling' || buildStep === 'complete') return;
    setSelectedAreas(prev => {
      const isActivating = !prev[key];
      const next = { ...prev, [key]: isActivating };
      setActivatedCircles(prevAct => ({ ...prevAct, [key]: isActivating }));
      if (isActivating) {
        setCirclePositions(pos => ({
          ...pos,
          [key]: randomizePosition(key)
        }));
      }
      return next;
    });
  };

  const handleBuildNow = async () => {
    if (isBuilding || buildStep === 'form' || buildStep === 'pulling' || buildStep === 'complete') return;

    let keysToBuild = Object.keys(selectedAreas).filter(k => selectedAreas[k]);
    if (keysToBuild.length === 0) {
      const allSelect = {
        marketing: true,
        operations: true,
        service: true,
        analytics: true,
        finance: true,
      };
      // Randomize positions for all
      const randomized: Record<string, { cx: number, cy: number, ctrlX: number, ctrlY: number }> = {};
      Object.keys(allSelect).forEach(k => {
        randomized[k] = randomizePosition(k);
      });
      setCirclePositions(randomized);
      setSelectedAreas(allSelect);
      keysToBuild = Object.keys(allSelect);
    }

    setIsBuilding(true);
    // Phase 1: Jitter/shake the hub and attraction vortex for 2 seconds
    setBuildStep('charging');
    
    // Animate active status to true so they glow fully
    setActivatedCircles({
      marketing: true,
      operations: true,
      service: true,
      analytics: true,
      finance: true,
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Phase 2: Pull the circles straightly into the hub (1.2s duration)
    setBuildStep('pulling');
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Open form details collection
    setBuildStep('form');
    setIsBuilding(false);
  };
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative z-10 flex min-h-[85vh] flex-col justify-center pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 pt-32 pb-20 bg-[#002b22] text-white overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
      >
        {/* Background Glows */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#0071e3]/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl w-full z-20 text-center">
          <h1 
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tightest text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            <motion.span
              initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="block"
            >
              Custom AI Agents
            </motion.span>
            <motion.span
              initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="inline-block bg-gradient-to-r from-[#00f5c0] to-[#0284c7] bg-clip-text text-transparent"
            >
              For Your Business
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="mt-6 mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-emerald-100/80 font-medium"
          >
            AI Automations built around your marketing, Operations, and Finance to empower your team and drive sustainable growth.
          </motion.p>
        </div>
      </section>


      {/* Example Solutions Section */}
      <section className="relative z-10 py-16 md:py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-white text-ink border-t border-ink/5">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest text-ink leading-[1.1] mb-6">
                Example Solutions We Built
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed font-medium">
                SMEs have highly specialized requirements depending on their industries. Here are some of the fully custom systems we construct.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-5">
              {/* Dropdown 1: Restaurant */}
              <div className="border border-ink/10 rounded-[20px] overflow-hidden bg-white/50 backdrop-blur-sm transition-all duration-300">
                <button
                  onClick={() => toggleSection('restaurant')}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-ink text-lg md:text-xl hover:bg-ink/[0.02] transition-colors duration-200"
                >
                  <span>Restaurant</span>
                  <motion.div
                    animate={{ rotate: openSections.restaurant ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-ink-secondary"
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.restaurant && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-ink/5 bg-[#fbfbfd]/30 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-[20px] bg-[#fbfbfd] border border-ink/5 flex flex-col justify-between h-full col-span-1 md:col-span-2">
                          <div>
                            <h4 className="font-bold text-ink text-base">Self-Learning Restaurant Dashboard (Southwark, London)</h4>
                            <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                              Customised Dashboard with Self Learning Automation for Operations, Finance and Marketing.
                            </p>
                          </div>
                          <button
                            onClick={() => setShowDashboardModal(true)}
                            className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-1.5 text-xs font-bold text-white transition-all duration-200 hover:bg-brand-deep hover:scale-[1.04] active:scale-95 w-fit cursor-pointer"
                          >
                            Try the Dashboard here
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dropdown 2: Bakery */}
              <div className="border border-ink/10 rounded-[20px] overflow-hidden bg-white/50 backdrop-blur-sm transition-all duration-300">
                <button
                  onClick={() => toggleSection('bakery')}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-ink text-lg md:text-xl hover:bg-ink/[0.02] transition-colors duration-200"
                >
                  <span>Bakery</span>
                  <motion.div
                    animate={{ rotate: openSections.bakery ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-ink-secondary"
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.bakery && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-ink/5 bg-[#fbfbfd]/30 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-[20px] bg-[#fbfbfd] border border-ink/5">
                          <h4 className="font-bold text-ink text-base">Staff & Task Management (Bakery, Hackney, London)</h4>
                          <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                            Intelligent task queueing, automated notifications to shift managers, and calendar synchronization.
                          </p>
                        </div>

                        <div className="p-6 rounded-[20px] bg-[#fbfbfd] border border-ink/5">
                          <h4 className="font-bold text-ink text-base">Inventory Automation (Bakery, Hackney, London)</h4>
                          <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                            Connecting suppliers to recipes, alerting teams when stock is low, and predicting volume ordering.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dropdown 3: Beauty saloon */}
              <div className="border border-ink/10 rounded-[20px] overflow-hidden bg-white/50 backdrop-blur-sm transition-all duration-300">
                <button
                  onClick={() => toggleSection('beauty')}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-ink text-lg md:text-xl hover:bg-ink/[0.02] transition-colors duration-200"
                >
                  <span>Beauty saloon</span>
                  <motion.div
                    animate={{ rotate: openSections.beauty ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-ink-secondary"
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openSections.beauty && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-ink/5 bg-[#fbfbfd]/30 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-[20px] bg-[#fbfbfd] border border-ink/5">
                          <h4 className="font-bold text-ink text-base">Lead Management System (Beauty Salon, Bloomsbury, London)</h4>
                          <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                            Automatic capturing, classification, data-sync to CRM, and instant 60s reply pipelines.
                          </p>
                        </div>

                        <div className="p-6 rounded-[20px] bg-[#fbfbfd] border border-ink/5">
                          <h4 className="font-bold text-ink text-base">Customer Retention Engine (Beauty Salon, Bloomsbury, London)</h4>
                          <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                            Automatically flags inactive regulars, invites feedback, and triggers personalized retention campaigns.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section id="builder" className="relative z-10 py-16 md:py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-[#002b22] text-white border-t border-emerald-500/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest text-white mb-4">
              Choose your business area to build around it
            </h2>
            <p className="text-sm text-emerald-100/60 font-semibold max-w-2xl mx-auto">
              Select one or more functional areas of your business below, then click "Build Now" to watch Selfera orchestrate your bespoke AI workspace.
            </p>
          </div>

          <div className="relative w-full flex flex-col items-center overflow-visible">
            {/* SVG Visual Canvas (Hub and connection lines) */}
            <div className="relative w-full h-[260px] overflow-visible pointer-events-none">
              <svg viewBox="0 0 1000 260" className="w-full h-full overflow-visible">
                {/* SVG Definitions for Gradients, Shadows, Filters */}
                <defs>
                  <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.4" />
                  </filter>
                  <filter id="orb-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  
                  {/* Radial glows for outer circles */}
                  {Object.entries(CIRCLE_DEFS).map(([key, config]) => (
                    <radialGradient key={key} id={config.glowId} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={config.color} />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  ))}
                  
                  <radialGradient id="hub-glow-def" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0071e3" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>

                {/* Outer Pulling Wrapper Group: Pulls all connection elements into the Core Hub when built */}
                <motion.g
                  animate={
                    (buildStep === 'pulling' || buildStep === 'form' || buildStep === 'complete') 
                      ? { scale: 0, opacity: 0 } 
                      : { scale: 1, opacity: 1 }
                  }
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                  style={{ transformOrigin: '500px 40px' }}
                >
                  {/* Connection lines from hub */}
                  {Object.entries(CIRCLE_DEFS).map(([key, config]) => {
                    const isSelected = selectedAreas[key];
                    const isActivated = activatedCircles[key];
                    const pos = circlePositions[key] || config;

                    return (
                      <g key={`line-${key}`}>
                        {/* Active Connection Line - only visible if selected */}
                        {isSelected && (
                          <motion.line
                            x1="500" 
                            y1="40" 
                            x2={pos.cx} 
                            y2={pos.cy} 
                            stroke={config.color} 
                            strokeWidth="1.5" 
                            opacity={0.35}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, ease: EASE }}
                          />
                        )}
                        {/* Laser Transmission Pulse */}
                        {isActivated && (
                          <motion.line
                            x1="500" 
                            y1="40" 
                            x2={pos.cx} 
                            y2={pos.cy} 
                            stroke={config.color} 
                            strokeWidth="1.5" 
                            opacity={0.6}
                            strokeDasharray="10, 40"
                            animate={{ strokeDashoffset: [0, -50] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          />
                        )}
                      </g>
                    );
                  })}

                  {/* Outer circles */}
                  {Object.entries(CIRCLE_DEFS).map(([key, config]) => {
                    const isSelected = selectedAreas[key];
                    const isActivated = activatedCircles[key];
                    const pos = circlePositions[key] || config;

                    return (
                      <motion.g
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: isSelected ? 1 : 0, 
                          scale: isActivated ? 1.05 : 1 
                        }}
                        transition={{ duration: 0.6, ease: EASE }}
                        style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}
                      >
                        {/* Radial glows behind activated circle */}
                        {isActivated && (
                          <circle cx={pos.cx} cy={pos.cy} r={50} fill={`url(#${config.glowId})`} opacity={0.12} />
                        )}
                        
                        {/* Outline circle */}
                        <circle 
                          cx={pos.cx} 
                          cy={pos.cy} 
                          r={40} 
                          fill="#001e18" 
                          stroke={isActivated ? config.color : 'rgba(255,255,255,0.15)'} 
                          strokeWidth={isActivated ? 2 : 1.2}
                          strokeDasharray={isActivated ? '0' : '4, 4'}
                          className="transition-colors duration-300"
                        />

                        {/* Text curved label */}
                        <path 
                          id={`textPath-${config.label}`} 
                          d={`M ${pos.cx - 34} ${pos.cy} A 34 34 0 0 1 ${pos.cx + 34} ${pos.cy}`} 
                          fill="none" 
                        />
                        <text fill={isActivated ? config.color : 'rgba(255,255,255,0.3)'} fontSize="5.5" fontWeight="bold" letterSpacing="0.8" className="font-mono">
                          <textPath href={`#textPath-${config.label}`} startOffset="50%" textAnchor="middle">
                            {config.label}
                          </textPath>
                        </text>

                        {/* Cluster Logos inside circle - Rotates when active/selected */}
                        <motion.g
                          animate={(isSelected || isActivated) ? { rotate: 360 } : { rotate: 0 }}
                          transition={(isSelected || isActivated) ? { duration: 25, repeat: Infinity, ease: 'linear' } : { duration: 0.5 }}
                          style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}
                        >
                          {config.logos.map((logo: any, idx: number) => {
                            const lx = pos.cx + (logo.x - 50) * (40 / 65) - 8;
                            const ly = pos.cy + (logo.y - 50) * (40 / 65) - 8;
                            return (
                              <image 
                                key={idx}
                                href={logo.src}
                                x={lx}
                                y={ly}
                                width="16"
                                height="16"
                                opacity={isActivated ? 0.95 : 0.05}
                                className={`transition-opacity duration-300 ${logo.className || ''}`}
                              />
                            );
                          })}
                        </motion.g>
                      </motion.g>
                    );
                  })}

                  {/* Particle Attraction Vortex during charging */}
                  {buildStep === 'charging' && Array.from({ length: 15 }).map((_, idx) => {
                    const angle = (idx * 360) / 15 + Math.random() * 15;
                    const rad = angle * (Math.PI / 180);
                    const startR = 100 + Math.random() * 50;
                    const startX = 500 + startR * Math.cos(rad);
                    const startY = 40 + startR * Math.sin(rad);

                    return (
                      <motion.circle
                        key={idx}
                        cx={startX}
                        cy={startY}
                        r={1.5 + Math.random() * 2}
                        fill="#00f5c0"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ 
                          cx: 500, 
                          cy: 40, 
                          opacity: [0, 0.8, 0],
                          scale: [0.5, 1, 0.2]
                        }}
                        transition={{ 
                          duration: 1.1, 
                          ease: 'easeIn', 
                          delay: idx * 0.06,
                          repeat: Infinity
                        }}
                      />
                    );
                  })}
                </motion.g>

                {/* Central Selfera Hub (Stays visible as header when collapsed) */}
                <motion.g
                  animate={buildStep === 'charging' ? { 
                    x: [0, -2, 2, -1, 1, -2, 1, 0], 
                    y: [0, 1, -2, 1, -1, 2, -1, 0],
                    scale: [1, 1.12, 1.08, 1.15, 1]
                  } : buildStep === 'pulling' ? {
                    scale: [1, 1.3, 1.1, 1.2, 1]
                  } : {}}
                  transition={buildStep === 'charging' ? { 
                    repeat: Infinity, 
                    duration: 0.15 
                  } : { duration: 0.8, ease: EASE }}
                  style={{ transformOrigin: '500px 40px' }}
                >
                  <circle cx="500" cy="40" r="60" fill="url(#hub-glow-def)" opacity={buildStep === 'charging' ? 0.35 : 0.15} />
                  <circle 
                    cx="500" 
                    cy="40" 
                    r="38" 
                    fill="#001e18" 
                    stroke="rgba(0,113,227,0.3)" 
                    strokeWidth="1.5" 
                    filter="url(#soft-shadow)" 
                  />
                  <text x="500" y="37" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff" letterSpacing="-0.5">
                    Selfera<tspan fill="#0071e3">.</tspan>
                  </text>
                  <text x="500" y="49" textAnchor="middle" fontSize="5" fontWeight="700" fill="rgba(255,255,255,0.4)" letterSpacing="1">
                    CORE HUB
                  </text>
                </motion.g>
              </svg>
            </div>

            {/* Switch dynamically between Options Cards and Lead collection form */}
            {(buildStep === 'form' || buildStep === 'pulling' || buildStep === 'complete') ? (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="w-full max-w-xl mx-auto bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-[32px] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)] relative z-30"
              >
                {buildStep === 'complete' ? (
                  <div className="text-center py-8">
                    <div className="mx-auto h-16 w-16 bg-[#00f5c0]/10 border border-[#00f5c0]/30 rounded-full flex items-center justify-center mb-6">
                      <svg className="h-8 w-8 text-[#00f5c0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Workspace Assembled!</h3>
                    <p className="text-sm text-emerald-100/70 leading-relaxed font-semibold mb-6">
                      Your custom AI systems layout is mapped. Let's walk through your bespoke workspace configurations.
                    </p>
                    <button
                      onClick={() => {
                        const target = document.querySelector('#contact');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-block py-3 px-8 rounded-xl bg-gradient-to-r from-[#00f5c0] to-[#0284c7] text-[#002b22] font-black text-sm uppercase tracking-wider hover:shadow-[0_0_24px_rgba(0,245,192,0.3)] transition-all duration-300"
                    >
                      Book Strategy Consultation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                    <div className="text-center mb-4">
                      <span className="text-xs font-bold text-[#00f5c0] uppercase tracking-widest block mb-2">Blueprints Mapped</span>
                      <h3 className="text-xl font-bold text-white">Custom Workspace Personnel</h3>
                      <p className="text-xs text-emerald-100/60 mt-1 leading-relaxed font-semibold">
                        Enter your details to link the custom modules (
                        <span className="text-[#00f5c0]">
                          {Object.keys(selectedAreas).filter(k => selectedAreas[k]).join(', ')}
                        </span>
                        ) to your business workspace profile.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5 group cursor-pointer" onClick={() => setBuildStep('idle')}>
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-emerald-100/70 tracking-wide cursor-pointer group-hover:text-[#00f5c0] transition-colors">
                          Selected AI Modules
                        </label>
                        <span className="text-[10px] text-emerald-100/40 font-semibold group-hover:text-[#00f5c0]/70 transition-colors">
                          (Click to edit configuration)
                        </span>
                      </div>
                      <input
                        readOnly
                        type="text"
                        value={Object.keys(selectedAreas)
                          .filter(k => selectedAreas[k])
                          .map(k => k === 'service' ? 'Customer Service' : k === 'analytics' ? 'Reporting & Analytics' : k === 'operations' ? 'Operations & Management' : k.charAt(0).toUpperCase() + k.slice(1))
                          .join(', ')}
                        className="w-full bg-emerald-500/10 border border-[#00f5c0]/30 rounded-xl px-4 py-3 text-sm text-[#00f5c0] font-bold focus:outline-none cursor-pointer shadow-[0_0_12px_rgba(0,245,192,0.05)] hover:border-[#00f5c0]/50 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-emerald-100/70 tracking-wide">Contact Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Alex Carter"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00f5c0] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-emerald-100/70 tracking-wide">Business Name</label>
                      <input
                        required
                        type="text"
                        value={formData.businessName}
                        onChange={e => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                        placeholder="e.g. Selfera Cafe & Clinics"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00f5c0] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-emerald-100/70 tracking-wide">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="alex@business.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00f5c0] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-emerald-100/70 tracking-wide">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00f5c0] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f5c0] to-[#0284c7] text-[#002b22] font-black text-sm uppercase tracking-widest hover:shadow-[0_0_24px_rgba(0,245,192,0.3)] transition-all duration-300 mt-2"
                    >
                      Assemble My Workspace
                    </button>
                  </form>
                )}
              </motion.div>
            ) : (
              <>
                {/* Horizontal Cards row */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full relative z-20 mt-2">
                  {/* Card 1: Marketing */}
                  <div 
                    onClick={() => toggleArea('marketing')}
                    className={`p-5 rounded-[22px] bg-white/[0.01] border flex flex-col justify-between transition-all duration-300 cursor-pointer select-none ${selectedAreas.marketing ? 'border-[#00f5c0] bg-white/[0.04]' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'}`}
                  >
                    <div>
                      <h3 className="text-base font-bold mb-2">Marketing</h3>
                      <p className="text-xs text-emerald-100/50 leading-relaxed font-semibold">
                        Multi-channel lead collection, target lead response inside 60s, custom social profile scheduling.
                      </p>
                    </div>
                    <div className="mt-4 flex justify-start">
                      <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all duration-200 ${selectedAreas.marketing ? 'bg-[#00f5c0] border-[#00f5c0]' : 'border-white/20 bg-white/5'}`}>
                        <svg className="h-3.5 w-3.5 stroke-[3] text-[#002b22]" fill="none" viewBox="0 0 24 24">
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={selectedAreas.marketing ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Operations */}
                  <div 
                    onClick={() => toggleArea('operations')}
                    className={`p-5 rounded-[22px] bg-white/[0.01] border flex flex-col justify-between transition-all duration-300 cursor-pointer select-none ${selectedAreas.operations ? 'border-[#00f5c0] bg-white/[0.04]' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'}`}
                  >
                    <div>
                      <h3 className="text-base font-bold mb-2">Operations & Management</h3>
                      <p className="text-xs text-emerald-100/50 leading-relaxed font-semibold">
                        Automated scheduling and matching engines, inventory monitoring, task dispatch.
                      </p>
                    </div>
                    <div className="mt-4 flex justify-start">
                      <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all duration-200 ${selectedAreas.operations ? 'bg-[#00f5c0] border-[#00f5c0]' : 'border-white/20 bg-white/5'}`}>
                        <svg className="h-3.5 w-3.5 stroke-[3] text-[#002b22]" fill="none" viewBox="0 0 24 24">
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={selectedAreas.operations ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Customer Service */}
                  <div 
                    onClick={() => toggleArea('service')}
                    className={`p-5 rounded-[22px] bg-white/[0.01] border flex flex-col justify-between transition-all duration-300 cursor-pointer select-none ${selectedAreas.service ? 'border-[#00f5c0] bg-white/[0.04]' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'}`}
                  >
                    <div>
                      <h3 className="text-base font-bold mb-2">Customer Service</h3>
                      <p className="text-xs text-emerald-100/50 leading-relaxed font-semibold">
                        Complex natural conversational chatbots, review feedback intercept loops, booking assistants.
                      </p>
                    </div>
                    <div className="mt-4 flex justify-start">
                      <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all duration-200 ${selectedAreas.service ? 'bg-[#00f5c0] border-[#00f5c0]' : 'border-white/20 bg-white/5'}`}>
                        <svg className="h-3.5 w-3.5 stroke-[3] text-[#002b22]" fill="none" viewBox="0 0 24 24">
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={selectedAreas.service ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Reporting & Analytics */}
                  <div 
                    onClick={() => toggleArea('analytics')}
                    className={`p-5 rounded-[22px] bg-white/[0.01] border flex flex-col justify-between transition-all duration-300 cursor-pointer select-none ${selectedAreas.analytics ? 'border-[#00f5c0] bg-white/[0.04]' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'}`}
                  >
                    <div>
                      <h3 className="text-base font-bold mb-2">Reporting & Analytics</h3>
                      <p className="text-xs text-emerald-100/50 leading-relaxed font-semibold">
                        Plain English business summaries, cross-platform performance cards, ad attribution.
                      </p>
                    </div>
                    <div className="mt-4 flex justify-start">
                      <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all duration-200 ${selectedAreas.analytics ? 'bg-[#00f5c0] border-[#00f5c0]' : 'border-white/20 bg-white/5'}`}>
                        <svg className="h-3.5 w-3.5 stroke-[3] text-[#002b22]" fill="none" viewBox="0 0 24 24">
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={selectedAreas.analytics ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Finance & Admin */}
                  <div 
                    onClick={() => toggleArea('finance')}
                    className={`p-5 rounded-[22px] bg-white/[0.01] border flex flex-col justify-between transition-all duration-300 cursor-pointer select-none ${selectedAreas.finance ? 'border-[#00f5c0] bg-white/[0.04]' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'}`}
                  >
                    <div>
                      <h3 className="text-base font-bold mb-2">Finance & Admin</h3>
                      <p className="text-xs text-emerald-100/50 leading-relaxed font-semibold">
                        Overdue invoice reminders, bookkeeping synchronisation pipelines, allergen checklists.
                      </p>
                    </div>
                    <div className="mt-4 flex justify-start">
                      <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all duration-200 ${selectedAreas.finance ? 'bg-[#00f5c0] border-[#00f5c0]' : 'border-white/20 bg-white/5'}`}>
                        <svg className="h-3.5 w-3.5 stroke-[3] text-[#002b22]" fill="none" viewBox="0 0 24 24">
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={selectedAreas.finance ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Centered Build Now Button */}
                <div className="mt-12 w-full max-w-xs relative z-20">
                  <button
                    disabled={isBuilding}
                    onClick={handleBuildNow}
                    className="relative group w-full overflow-hidden py-4 rounded-2xl bg-gradient-to-r from-[#00f5c0] to-[#0284c7] text-[#002b22] font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_32px_rgba(0,245,192,0.25)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isBuilding ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-[#002b22]" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Assembling Workspace...
                        </>
                      ) : (
                        'Build Now'
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative z-10 py-16 md:py-24 pl-4 sm:pl-8 md:pl-10 pr-6 sm:pr-12 md:pr-24 bg-white text-ink border-t border-ink/5">
        <div className="mx-auto max-w-7xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest text-ink text-center mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-center text-center relative group hover:border-brand-blue/15 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue font-black text-lg">
                1
              </div>
              <h3 className="text-lg font-bold mt-4 text-ink">Discover</h3>
              <p className="text-xs text-ink-secondary mt-2 leading-relaxed font-semibold">
                We sit down to understand your business flow and bottlenecks.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-center text-center relative group hover:border-brand-blue/15 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue font-black text-lg">
                2
              </div>
              <h3 className="text-lg font-bold mt-4 text-ink">Design</h3>
              <p className="text-xs text-ink-secondary mt-2 leading-relaxed font-semibold">
                Our architect creates a custom automation flowchart tailored to you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-center text-center relative group hover:border-brand-blue/15 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue font-black text-lg">
                3
              </div>
              <h3 className="text-lg font-bold mt-4 text-ink">Build</h3>
              <p className="text-xs text-ink-secondary mt-2 leading-relaxed font-semibold">
                We construct the AI systems, bots, pipelines, and direct database connects.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-center text-center relative group hover:border-brand-blue/15 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue font-black text-lg">
                4
              </div>
              <h3 className="text-lg font-bold mt-4 text-ink">Deploy</h3>
              <p className="text-xs text-ink-secondary mt-2 leading-relaxed font-semibold">
                We safely launch the workflows into your existing daily channels.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-[24px] bg-[#fbfbfd] border border-ink/5 flex flex-col items-center text-center relative group hover:border-brand-blue/15 hover:shadow-[0_12px_32px_-12px_rgba(0,113,227,0.08)] transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue font-black text-lg">
                5
              </div>
              <h3 className="text-lg font-bold mt-4 text-ink">Support</h3>
              <p className="text-xs text-ink-secondary mt-2 leading-relaxed font-semibold">
                Continuous monitoring, data-refinements, and custom associate audits.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative z-10 py-16 md:py-24 px-6 bg-[#002b22] text-white text-center overflow-hidden border-t border-emerald-500/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001e18] to-[#002b22] opacity-50" />
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl w-full flex flex-col items-center justify-center z-20 relative">
          <p className="text-base sm:text-lg font-bold text-[#00f5c0] mb-4 uppercase tracking-widest">
            Ready to reclaim your time?
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tightest text-white leading-tight mb-4">
            Let us know your expectations
          </h2>
          
          <p className="text-sm sm:text-base text-emerald-100/60 font-semibold mb-8 max-w-md">
            We'll design a solution specifically for your business.
          </p>

          <a
            href="/#booking"
            className="inline-flex rounded-full bg-brand-blue px-8 py-3 text-base font-bold text-white transition-all duration-200 hover:bg-brand-deep hover:scale-[1.04] hover:shadow-lg hover:shadow-brand-blue/25 active:scale-95 cursor-pointer"
          >
            Book Your Consultation
          </a>
        </div>
      </section>

      {/* Credentials Modal */}
      <AnimatePresence>
        {showDashboardModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowDashboardModal(false);
                setIsSubmitted(false);
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="bg-white border border-ink/10 rounded-[28px] max-w-md w-full p-8 relative shadow-2xl z-10"
            >
              <button
                onClick={() => {
                  setShowDashboardModal(false);
                  setIsSubmitted(false);
                }}
                className="absolute top-6 right-6 text-ink-secondary hover:text-ink transition-colors p-1.5 rounded-full hover:bg-ink/[0.04] cursor-pointer"
              >
                <X size={18} />
              </button>

              {!isSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    // Simulate API request
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setIsSubmitted(true);
                      setDashboardFormData({
                        name: '',
                        email: '',
                        restaurantName: '',
                        location: '',
                        postCode: '',
                      });
                    }, 1200);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-ink">Get Dashboard Credentials</h3>
                    <p className="text-xs text-ink-secondary mt-1 font-semibold leading-relaxed">
                      Enter your details below to receive temporary access credentials for the Self-Learning Restaurant Dashboard.
                    </p>
                  </div>

                  <div className="mt-2">
                    <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={dashboardFormData.name}
                      onChange={(e) => setDashboardFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@restaurant.com"
                      value={dashboardFormData.email}
                      onChange={(e) => setDashboardFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Southwark Bistro"
                      value={dashboardFormData.restaurantName}
                      onChange={(e) => setDashboardFormData(prev => ({ ...prev, restaurantName: e.target.value }))}
                      className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                        Location
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. London"
                        value={dashboardFormData.location}
                        onChange={(e) => setDashboardFormData(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold tracking-wider text-ink-secondary uppercase">
                        Postcode
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. SE1 0AA"
                        value={dashboardFormData.postCode}
                        onChange={(e) => setDashboardFormData(prev => ({ ...prev, postCode: e.target.value }))}
                        className="w-full mt-1.5 px-4 py-3 rounded-xl bg-ink/[0.02] border border-ink/10 focus:border-brand-blue focus:bg-white focus:outline-none text-sm transition-all font-semibold text-ink"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-3.5 rounded-full bg-brand-blue hover:bg-brand-deep disabled:bg-brand-blue/70 text-white font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? 'Generating...' : 'Get Credentials'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-2">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-ink">Credentials Generated!</h3>
                  <p className="text-sm text-ink-secondary font-semibold max-w-sm">
                    We've sent temporary login details and access link for the dashboard to your email inbox. Please check it shortly.
                  </p>
                  <button
                    onClick={() => {
                      setShowDashboardModal(false);
                      setIsSubmitted(false);
                    }}
                    className="mt-4 px-6 py-2 rounded-full border border-ink/10 hover:bg-ink/[0.02] text-xs font-bold text-ink transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
