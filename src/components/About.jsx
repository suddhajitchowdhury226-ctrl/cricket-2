import { useState, useEffect, useRef } from 'react';
import { FaCheckCircle, FaTrophy, FaUsers, FaCalendarAlt, FaMedal } from 'react-icons/fa';
import './About.css';

const stats = [
  { value: 47, suffix: '+', label: 'Years Active', IconComp: FaCalendarAlt },
  { value: 4, suffix: '', label: 'Programs', IconComp: FaTrophy },
  { value: 30, suffix: '+', label: 'Countries Toured', IconComp: FaMedal },
  { value: 1000, suffix: '+', label: 'Cricketers Developed', IconComp: FaUsers },
];

const features = [
  'Outright Program — boys aged 12–18 vs schools, academies & clubs',
  'Flashbacks Program — cricketers aged 30+ playing across Melbourne',
  'International cricket tours to Europe, UK, Asia & Sri Lanka',
  'Partnership with Cricket Victoria since 2017',
  'Long-format matches vs Cricket Victoria Academy & Sub-District squads',
  'Producing first-class, test cricketers & great people since 1977',
];

function useCountUp(end, duration, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    setCount(0);
    let startTime = null;
    let rafId;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, started]);
  return count;
}

function StatCard({ stat, started }) {
  const count = useCountUp(stat.value, 2000, started);
  const Icon = stat.IconComp;
  return (
    <div className="about-stat-card">
      <div className="stat-icon">
        <Icon />
      </div>
      <div className="stat-info">
        <span className="about-stat-number">{count}{stat.suffix}</span>
        <span className="stat-label">{stat.label}</span>
      </div>
    </div>
  );
}

export default function About() {
  const [statsStarted, setStatsStarted] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const statsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="about"
      className={`about section-padding${sectionVisible ? ' visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="about-grid">
          {/* Image column */}
          <div className="about-image-col">
            <div className="about-img-wrapper">
              <img
                src="/aboutus.png"
                alt="Crusaders Cricket Australia - Men's Premiers 1st XI 2025/26"
                className="about-main-img"
              />
              <img
                src="/aboutus.png"
                alt="Crusaders Cricket Club team celebration"
                className="about-secondary-img"
              />
              <div className="about-experience-badge">
                <span className="exp-number">1977</span>
                <span className="exp-label">Est.<br />Melbourne, AU</span>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="about-content-col">
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title">
              ABOUT <span>CRUSADERS CRICKET</span><br />AUSTRALIA
            </h2>
            <div className="section-divider"></div>
            <p className="about-text">
              Crusaders Cricket Australia is a non-for-profit organisation established in 1977 by Ben Barnett (former Australian Cricketer), Swan Richards, David Richards and the late Ray Steele to provide the opportunity of playing the game of cricket.
            </p>
            <p className="about-text">
              Crusaders is made up of multiple programs including the <strong>Outright Program</strong> (boys aged 12–18), the <strong>Flashbacks Program</strong> (cricketers aged 30+), and once-in-a-lifetime international cricket tours to Europe, UK, Asia, Sri Lanka and beyond. In 2017, Crusaders partnered with Cricket Victoria to provide long-format development matches for players within the pathway system.
            </p>
            <p className="about-text">
              Crusaders has been developing cricketers for almost four decades, producing first-class, test cricketers and more importantly, great people.
            </p>
            <ul className="about-features">
              {features.map((f, i) => (
                <li key={i}>
                  <FaCheckCircle className="feature-icon" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="about-buttons">
              <button className="btn-primary" onClick={() => scrollTo('#players')}>
                Meet The Team
              </button>
              <button className="btn-outline" onClick={() => scrollTo('#fixtures')}>
                View Fixtures
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="about-stats" ref={statsRef}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} started={statsStarted} />
          ))}
        </div>
      </div>
    </section>
  );
}
