import { motion } from 'framer-motion';

interface NavbarProps {
  show: boolean;
}

const LINKS = [
  { label: 'ROI Calculator', href: '#roi' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Consultation', href: '#booking' },
  { label: 'Tech Engine', href: '#tech-deck' },
];

export default function Navbar({ show }: NavbarProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] border-b border-ink/5 bg-white/72 backdrop-blur-md"
      initial={{ y: -64, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 py-3.5">
        <div className="flex items-center gap-3">
          <a href="#" className="text-xl font-bold tracking-tightest text-ink">
            Selfera<span className="text-brand-blue">.</span>
          </a>
          <span className="hidden sm:inline-flex items-center rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 text-[11px] font-semibold text-brand-deep">
            For the Era of Owning Self- AI Automation
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-ink-secondary transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#booking"
          className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-deep hover:scale-[1.04] hover:shadow-lg hover:shadow-brand-blue/25 active:scale-95"
        >
          Book Call
        </a>
      </nav>
    </motion.header>
  );
}
