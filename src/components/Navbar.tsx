import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  show: boolean;
}

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Team', href: '#team' },
  { label: 'Sustainability Practices', href: '#sustainability' },
];

export default function Navbar({ show }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] border-b border-ink/5 bg-white md:bg-white/72 md:backdrop-blur-md"
      initial={{ y: -64, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 py-3.5">
        <div className="flex flex-col items-start leading-none">
          <a href="#" className="text-2xl sm:text-3xl font-bold tracking-tightest text-ink leading-none">
            Selfera<span className="text-brand-blue">.</span>
          </a>
          <span className="mt-1 text-[10px] sm:text-xs font-semibold text-brand-blue tracking-wide uppercase">
            Build Your(Self) AI Era
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
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
              {LINKS.map((link) => (
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
