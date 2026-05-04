import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Senior Player',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: "Joining Champions CC was the best decision of my cricketing career. The coaching staff, facilities, and team spirit are absolutely world-class. I've improved my game tremendously and made lifelong friends.",
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: "Women's Team Captain",
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
    rating: 5,
    text: "Champions CC is more than a club — it's a family. The support we receive from the management and fans is incredible. Our women's team has grown from strength to strength under this amazing setup.",
  },
  {
    id: 3,
    name: 'Michael Torres',
    role: 'Parent / U14 Player',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
    text: "My son has been part of the youth academy for 2 years now. The progress he's made is phenomenal. The coaches genuinely care about each player's development, both on and off the field.",
  },
  {
    id: 4,
    name: 'Priya Kapoor',
    role: 'Club Member',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: "The atmosphere at Champions CC matches is electric. As a member and supporter, the hospitality and professionalism shown by everyone at the club is truly exceptional. Proud to be a part of this family!",
  },
  {
    id: 5,
    name: 'James O\'Brien',
    role: 'U19 Player',
    img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80',
    rating: 5,
    text: "The training facilities here are incredible. I've had access to professional coaches, video analysis, and sports science support that I never expected at club level. Champions CC is the real deal.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section-padding">
      <div className="testimonials-bg"></div>
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle" style={{ justifyContent: 'center' }}>What They Say</p>
          <h2 className="section-title">VOICES OF OUR <span>CHAMPIONS</span></h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map(t => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <div className="testimonial-rating">
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
