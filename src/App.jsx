import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurJourney from './components/OurJourney';
import Fixtures from './components/Fixtures';
import Achievements from './components/Achievements';
import Players from './components/Players';
import PointTable from './components/PointTable';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

import './App.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div className="app">
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <OurJourney />
        <Fixtures />
        <Achievements />
        <Players />
        <PointTable />
        <Testimonials />
        <Blog />
        <Sponsors />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const btn = document.getElementById('back-to-top');
    const onScroll = () => {
      if (btn) btn.classList.toggle('visible', window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button id="back-to-top" className="back-to-top" onClick={handleClick} aria-label="Back to top">
      ↑
    </button>
  );
}
