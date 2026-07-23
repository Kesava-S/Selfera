import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-emerald-500/10 bg-[#001f19] py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row text-xs sm:text-sm text-emerald-100/60">
        {/* Left: Company Name with Year */}
        <div>
          <span>&copy; {currentYear} Selfera. All rights reserved.</span>
        </div>

        {/* Right: Policy Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/privacy-policy"
            className="hover:text-[#00f5c0] transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            className="hover:text-[#00f5c0] transition-colors duration-200"
          >
            Terms of Service
          </Link>
          <Link
            to="/refund-policy"
            className="hover:text-[#00f5c0] transition-colors duration-200"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
