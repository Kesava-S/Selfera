import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import NodeNetwork from './components/NodeNetwork';
import IntroOverlay from './components/IntroOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MagicText from './components/MagicText';
import ConcernCards from './components/ConcernCards';
import ConfidenceText from './components/ConfidenceText';
import AboutSelfera from './components/AboutSelfera';
import Industries from './components/Industries';
import Footer from './components/Footer';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {!introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      <NodeNetwork />
      <Navbar show={introDone} />
      <main>
        <Hero show={introDone} />
        <MagicText />
        <ConcernCards />
        <ConfidenceText />
        <AboutSelfera />
        <Industries />
        {/* Further sections (ROI calculator, case studies, booking, tech engine)
            live on separate pages — built one at a time on approval. */}
      </main>
      <Footer />
    </div>
  );
}
