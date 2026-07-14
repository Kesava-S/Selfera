import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroOverlay from './components/IntroOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MagicText from './components/MagicText';
import ConcernCards from './components/ConcernCards';
import ConfidenceText from './components/ConfidenceText';
import AboutSelfera from './components/AboutSelfera';
import Industries from './components/Industries';
import Footer from './components/Footer';
import Orchestration from './components/Orchestration';

export default function App() {
  // During build-time prerendering (no window) the intro is skipped so the
  // static HTML snapshot contains the full page content for crawlers. In the
  // browser this is always false and the intro plays as normal.
  const [introDone, setIntroDone] = useState(() => typeof window === 'undefined');

  // Temporary sample gallery: open /?orch-preview to review the orchestration
  // diagram in isolation. Remove once its home on the site is decided.
  if (typeof window !== 'undefined' && window.location.search.includes('orch-preview')) {
    return (
      <div className="grid min-h-screen place-items-center bg-white px-4 py-10">
        <Orchestration />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {!introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      <Navbar show={introDone} />
      <main>
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
        {/* Further sections (ROI calculator, case studies, booking, tech engine)
            live on separate pages — built one at a time on approval. */}
      </main>
      <Footer />
    </div>
  );
}
