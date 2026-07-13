import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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

export default function Navbar({ show }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-6xl z-[100] rounded-2xl bg-[#7C3AED] shadow-[0_8px_32px_rgba(124,58,237,0.25)] border border-[#7C3AED]/20 text-white"
      initial={{ y: -100, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        willChange: 'transform, opacity',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 py-3.5">
        <div className="flex flex-col items-start leading-none">
          <a href="#" className="text-2xl sm:text-3xl font-bold tracking-tightest text-white leading-none">
            Selfera<span className="text-white/60">.</span>
          </a>
          <span className="mt-1 text-[10px] sm:text-xs font-semibold text-purple-200 tracking-wide uppercase">
            Enterprise Level AI Built for Small Businesses
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-[15px] font-semibold text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-2">
          <a
            href="#booking"
            className="hidden md:inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#7C3AED] transition-all duration-200 hover:bg-white/90 hover:scale-[1.04] hover:shadow-lg hover:shadow-white/20 active:scale-95"
          >
            Book Call
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors duration-200"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[17px] font-bold text-white/80 hover:text-white transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#7C3AED] transition-all duration-200 hover:bg-white/90 active:scale-95"
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
