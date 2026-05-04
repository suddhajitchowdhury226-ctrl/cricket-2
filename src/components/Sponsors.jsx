import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './Sponsors.css';

const sponsors = [
  { name: 'Partner 1', img: '/1.png' },
  { name: 'Partner 2', img: '/2.png' },
  { name: 'Partner 3', img: '/3.png' },
  { name: 'Partner 4', img: '/4.png' },
  { name: 'Partner 5', img: '/5.png' },
  { name: 'Partner 6', img: '/6.png' },
];

export default function Sponsors() {
  return (
    <section className="sponsors section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle" style={{ justifyContent: 'center' }}>Our Partners</p>
          <h2 className="section-title">OUR <span>PARTNERS</span></h2>
          <p className="section-desc">We are proud to partner with leading brands who share our passion for cricket and excellence.</p>
        </div>

        <div className="sponsors-swiper-wrap">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={24}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            speed={800}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="sponsors-swiper"
          >
            {sponsors.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="sponsor-card">
                  <img src={s.img} alt={s.name} className="sponsor-img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="become-sponsor">
          <div className="sponsor-cta-content">
            <h3>Become a Partner</h3>
            <p>Join our growing family of sponsors and get your brand in front of thousands of passionate cricket fans. Flexible sponsorship packages available.</p>
          </div>
          <a href="mailto:sponsors@championscc.com" className="btn-primary">
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
