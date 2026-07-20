import { lazy, Suspense, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroOverlay from './components/IntroOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MagicText from './components/MagicText';
import ConcernCards from './components/ConcernCards';
import ConfidenceText from './components/ConfidenceText';
import AboutSelfera from './components/AboutSelfera';
import Industries from './components/Industries';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

// Loaded on demand: only the temporary /?orch-preview route renders this, so
// its code (diagram + brand logo set) stays out of the main bundle.
const Orchestration = lazy(() => import('./components/Orchestration'));
const MicroAutomation = lazy(() => import('./pages/MicroAutomation'));
const SilentChurn = lazy(() => import('./pages/SilentChurn'));
const NoShowRecovery = lazy(() => import('./pages/NoShowRecovery'));
const AllergenChecker = lazy(() => import('./pages/AllergenChecker'));
const LoyaltyLoop = lazy(() => import('./pages/LoyaltyLoop'));
const EndToEnd = lazy(() => import('./pages/EndToEnd'));
const About = lazy(() => import('./pages/About'));
const CustomSolutions = lazy(() => import('./pages/CustomSolutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));

export default function App() {
  // During build-time prerendering (no window) the intro is skipped so the
  // static HTML snapshot contains the full page content for crawlers. In the
  // browser this is always false and the intro plays as normal.
  const [introDone, setIntroDone] = useState(() => typeof window === 'undefined');
  const [currentHash, setCurrentHash] = useState(() => typeof window !== 'undefined' ? window.location.hash : '#');
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#booking') {
        setShowBookingModal(true);
      } else {
        setCurrentHash(hash);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    if (typeof window !== 'undefined' && window.location.hash === '#booking') {
      setShowBookingModal(true);
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Temporary sample gallery: open /?orch-preview to review the orchestration
  // diagram in isolation. Remove once its home on the site is decided.
  if (typeof window !== 'undefined' && window.location.search.includes('orch-preview')) {
    return (
      <div className="grid min-h-screen place-items-center bg-white px-4 py-10">
        <Suspense fallback={null}>
          <Orchestration />
        </Suspense>
      </div>
    );
  }

  const isMicroAutomation = 
    currentHash === '#solutions-micro' || 
    currentHash === '#products';
  const isCustomSolutions = 
    currentHash === '#solutions' || 
    currentHash === '#solutions-custom';
  const isSilentChurn = currentHash === '#solutions-silentchurn';
  const isNoShowRecovery = currentHash === '#solutions-noshow';
  const isAllergenChecker = currentHash === '#solutions-allergen';
  const isLoyaltyLoop = currentHash === '#solutions-loyalty';
  const isEndToEnd = currentHash === '#solutions-end-to-end';
  const isAbout = currentHash === '#about';
  const isCaseStudies =
    currentHash === '#case-studies' ||
    currentHash === '#case-studies-ranna' ||
    currentHash === '#case-study-ranna';

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {!introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      <Navbar show={introDone} />
      <main>
        {isMicroAutomation ? (
          <Suspense fallback={null}>
            <MicroAutomation />
          </Suspense>
        ) : isSilentChurn ? (
          <Suspense fallback={null}>
            <SilentChurn />
          </Suspense>
        ) : isNoShowRecovery ? (
          <Suspense fallback={null}>
            <NoShowRecovery />
          </Suspense>
        ) : isAllergenChecker ? (
          <Suspense fallback={null}>
            <AllergenChecker />
          </Suspense>
        ) : isLoyaltyLoop ? (
          <Suspense fallback={null}>
            <LoyaltyLoop />
          </Suspense>
        ) : isEndToEnd ? (
          <Suspense fallback={null}>
            <EndToEnd />
          </Suspense>
        ) : isCustomSolutions ? (
          <Suspense fallback={null}>
            <CustomSolutions />
          </Suspense>
        ) : isAbout ? (
          <Suspense fallback={null}>
            <About />
          </Suspense>
        ) : isCaseStudies ? (
          <Suspense fallback={null}>
            <CaseStudies />
          </Suspense>
        ) : (
          <>
            <Hero show={introDone} />
            <MagicText />
            <ConcernCards />
            <div
              className="bg-[#002b22] text-white border-y border-emerald-500/10 py-16 sm:py-24"
              style={{ backgroundImage: 'linear-gradient(180deg, #002b22 0%, #001e18 100%)' }}
            >
              <ConfidenceText />
              <AboutSelfera />
            </div>
            <Industries />
          </>
        )}
        <BookingForm 
          isOpen={showBookingModal} 
          onClose={() => {
            setShowBookingModal(false);
            if (typeof window !== 'undefined' && window.location.hash === '#booking') {
              window.location.hash = '';
            }
          }} 
        />
      </main>
      <Footer />
    </div>
  );
}
