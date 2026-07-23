import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col">
      <Navbar show={true} />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center mt-20">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-ink mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink/80 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-ink/60 max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="px-8 py-3 bg-brand-blue text-white rounded-full font-semibold tracking-wide hover:bg-brand-blue/90 transition-colors shadow-[0_0_15px_rgba(43,222,115,0.3)] hover:shadow-[0_0_25px_rgba(43,222,115,0.5)]"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
