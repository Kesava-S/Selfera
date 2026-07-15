import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  show: boolean;
}

const LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

const SOLUTIONS = [
  { label: 'Micro Automation Systems', href: '#solutions-micro' },
  { label: 'End to End Systems', href: '#solutions-end-to-end' },
  { label: 'Customise Your Solution', href: '#solutions-custom', badge: 'Most Popular' },
];

export default function Navbar({ show }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] border-b border-ink/5 bg-white md:bg-white/72 md:backdrop-blur-md shadow-[0_4px_20px_rgba(29,29,31,0.04)]"
      initial={{ y: -64, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        willChange: 'transform, opacity',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-3.5">
        <div className="flex flex-col items-start leading-none">
          <a href="#" className="text-2xl sm:text-3xl font-bold tracking-tightest text-ink leading-none">
            Selfera<span className="text-brand-blue">.</span>
          </a>
          <span className="mt-1 text-[10px] sm:text-xs font-semibold text-brand-blue tracking-wide uppercase">
            Enterprise Grade AI for Owner-Led SMEs
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {/* Solutions Dropdown Menu */}
          <div
            ref={dropdownRef}
            className="relative"
          >
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="relative group flex items-center gap-1 rounded-full px-4 py-1.5 text-[15px] font-semibold text-ink-secondary transition-colors duration-200 hover:text-ink cursor-pointer focus:outline-none"
            >
              <span className="relative py-0.5">
                Solutions
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue transition-transform origin-center duration-200 ${isSolutionsOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </span>
              <motion.span
                animate={{ rotate: isSolutionsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <ChevronDown size={14} className="opacity-70" />
              </motion.span>
            </button>

            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 mt-1 w-64 rounded-2xl border border-ink/5 bg-white p-2.5 shadow-xl shadow-ink/5 backdrop-blur-lg z-50"
                >
                  {SOLUTIONS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsSolutionsOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-ink-secondary hover:bg-ink/5 hover:text-ink transition-all duration-200"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-[9px] font-bold text-brand-blue uppercase tracking-wider whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {LINKS.filter((l) => l.label !== 'Solutions').map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-[15px] font-semibold text-ink-secondary transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-2">
          <a
            href="#booking"
            className="hidden md:inline-flex rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-deep hover:scale-[1.04] hover:shadow-lg hover:shadow-brand-blue/25 active:scale-95"
          >
            Book Call
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-ink/5 text-ink transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-0 right-0 border-b border-ink/5 bg-white overflow-hidden shadow-lg"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {/* Solutions mobile menu */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="flex items-center justify-between w-full text-[17px] font-bold text-ink-secondary hover:text-brand-blue transition-colors duration-200 py-1 cursor-pointer focus:outline-none"
                >
                  Solutions
                  <motion.span
                    animate={{ rotate: isMobileSolutionsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isMobileSolutionsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden pl-4 flex flex-col gap-2.5 mt-2 border-l border-ink/5 ml-2"
                    >
                      {SOLUTIONS.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileSolutionsOpen(false);
                          }}
                          className="flex items-center justify-between gap-3 text-sm font-semibold text-ink-secondary hover:text-brand-blue transition-colors duration-200 py-1"
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-[9px] font-bold text-brand-blue uppercase tracking-wider whitespace-nowrap">
                              {item.badge}
                            </span>
                          )}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {LINKS.filter((l) => l.label !== 'Solutions').map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[17px] font-bold text-ink-secondary hover:text-brand-blue transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-deep active:scale-95"
              >
                Book Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
