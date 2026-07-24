import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
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
import EnquireForm from './components/EnquireForm';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

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
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const SubProcessors = lazy(() => import('./pages/SubProcessors'));

function ScrollManager() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash && hash !== '#booking' && hash !== '#enquire') {
      setTimeout(() => {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 10);
    }
  }, [hash]);

  useEffect(() => {
    if (navigationType !== 'POP' && !hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType, hash]);

  return null;
}

export default function App() {
  const [introDone, setIntroDone] = useState(() => typeof window === 'undefined');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showEnquireModal, setShowEnquireModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === '#booking') {
      setShowBookingModal(true);
      setShowEnquireModal(false);
    } else if (location.hash === '#enquire') {
      setShowEnquireModal(true);
      setShowBookingModal(false);
    } else {
      setShowBookingModal(false);
      setShowEnquireModal(false);
    }
  }, [location.hash]);

  if (typeof window !== 'undefined' && location.search.includes('orch-preview')) {
    return (
      <div className="grid min-h-screen place-items-center bg-white px-4 py-10">
        <Suspense fallback={null}>
          <Orchestration />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <ScrollManager />
      <AnimatePresence>
        {!introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      <Navbar show={introDone} />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={
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
            } />
            <Route path="/solutions-micro" element={<MicroAutomation />} />
            <Route path="/products" element={<MicroAutomation />} />
            <Route path="/solutions-silentchurn" element={<SilentChurn />} />
            <Route path="/solutions-noshow" element={<NoShowRecovery />} />
            <Route path="/solutions-allergen" element={<AllergenChecker />} />
            <Route path="/solutions-loyalty" element={<LoyaltyLoop />} />
            <Route path="/solutions-end-to-end" element={<EndToEnd />} />
            <Route path="/solutions" element={<CustomSolutions />} />
            <Route path="/solutions-custom" element={<CustomSolutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies-ranna" element={<CaseStudies />} />
            <Route path="/case-study-ranna" element={<CaseStudies />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/sub-processors" element={<SubProcessors />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <BookingForm 
          isOpen={showBookingModal} 
          onClose={() => {
            navigate(location.pathname + location.search, { replace: true });
            setShowBookingModal(false);
          }} 
        />
        <EnquireForm 
          isOpen={showEnquireModal} 
          onClose={() => {
            navigate(location.pathname + location.search, { replace: true });
            setShowEnquireModal(false);
          }} 
        />
      </main>
      <Footer />
    </div>
  );
}
