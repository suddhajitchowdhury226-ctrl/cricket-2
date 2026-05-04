import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { FaPlay, FaArrowRight, FaTrophy } from 'react-icons/fa';
import './Hero.css';

const slides = [
  {
    id: 1,
    tagline: 'SEASON 2025',
    title: 'PLAY HARD',
    titleRed: 'WIN BIG',
    subtitle: 'Champions Cricket Club — Where champions are made. Join us for the most thrilling season of cricket.',
    bg: 'https://images.unsplash.com/photo-1540747913346-19212a4cf655?w=1920&q=80',
    btnText: 'Our Team',
    btnHref: '#players',
  },
  {
    id: 2,
    tagline: 'UPCOMING FIXTURES',
    title: 'NEXT MATCH',
    titleRed: 'IS HERE',
    subtitle: 'Don\'t miss the action! Champions CC vs Warriors XI — Live at National Stadium, May 20, 2025.',
    bg: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1920&q=80',
    btnText: 'Get Tickets',
    btnHref: '#fixtures',
  },
  {
    id: 3,
    tagline: 'JOIN THE CLUB',
    title: 'BECOME A',
    titleRed: 'CHAMPION',
    subtitle: 'Train with the best coaches, play on world-class pitches and represent your club with pride.',
    bg: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&q=80',
    btnText: 'Join Now',
    btnHref: '#about',
  },
];

const stats = [
  { value: '24+', label: 'Trophies Won' },
  { value: '150+', label: 'Club Members' },
  { value: '12', label: 'Years of Glory' },
  { value: '98%', label: 'Win Rate Home' },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        className="hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.bg})` }}>
              <div className="hero-overlay"></div>
              <div className="hero-overlay-red"></div>
              <div className="container hero-content">
                <div className={`hero-text ${activeIndex === i ? 'active' : ''}`}>
                  <p className="hero-tagline">
                    <span className="red-line"></span>
                    {slide.tagline}
                  </p>
                  <h1 className="hero-title">
                    {slide.title}<br />
                    <span className="hero-title-red">{slide.titleRed}</span>
                  </h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <div className="hero-buttons">
                    <button className="btn-primary hero-btn" onClick={() => scrollTo(slide.btnHref)}>
                      {slide.btnText} <FaArrowRight />
                    </button>
                    <button className="hero-play-btn" onClick={() => {}}>
                      <span className="play-circle"><FaPlay /></span>
                      <span>Watch Highlights</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Stats Bar */}
      <div className="hero-stats">
        <div className="container hero-stats-inner">
          {stats.map((stat, i) => (
            <div className="hero-stat-item" key={i}>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">
                <FaTrophy /> {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
