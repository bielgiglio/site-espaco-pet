import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
