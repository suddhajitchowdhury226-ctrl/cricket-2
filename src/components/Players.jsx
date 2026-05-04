import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import './Players.css';

const patrons = [
  { name: 'Ken Jacobs OAM', title: 'Chairman',         img: '/Patners/Ken Jacobs OAM Chairman.png' },
  { name: 'Swan Richards OAM', title: 'Director',      img: '/Patners/Swan Richards OAM Director.png' },
  { name: 'Tegan Richards',  title: 'Co Director',     img: '/Patners/Tegan Richards Co Director.png' },
  { name: 'David L Richards OAM', title: 'Patron',     img: '/Patners/David L Richards OAM.png' },
  { name: 'Belinda Clark AO', title: 'Patron',         img: '/Patners/Belinda Clark AO.png' },
  { name: 'John Wylie AM',    title: 'Patron',         img: '/Patners/John Wylie AM.png' },
  { name: 'Malcolm Gray AM',  title: 'Patron',         img: '/Patners/Malcolm Gray AM.png' },
  { name: 'Noel Boys',        title: 'Patron',         img: '/Patners/Noel Boys.png' },
  { name: 'Sir Michael Parkinson CBE', title: 'Patron',img: '/Patners/Sir Michael Parkinson CBE.png' },
  { name: 'Sir Tim Rice',     title: 'Patron',         img: '/Patners/Sir Tim Rice.png' },
  { name: 'The Hon. John Howard OM, AC', title: 'Patron', img: '/Patners/The Hon. John Howard OM, AC.png' },
  { name: 'The Hon. Julia Gillard AC',   title: 'Patron', img: '/Patners/The Hon. Julia Gillard AC.png' },
];

export default function Players() {
  return (
    <section id="players" className="players section-padding">
      <div className="players-bg-decor"></div>
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle" style={{ justifyContent: 'center' }}>The PATRONS</p>
          <h2 className="section-title">MEET OUR <span>PATRONS</span></h2>
          <p className="section-desc">
            Crusaders Cricket Australia is honoured to be supported by distinguished patrons who share our passion for the game.
          </p>
        </div>

        <div className="players-swiper-wrap">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={4}
            spaceBetween={24}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            breakpoints={{
              0:    { slidesPerView: 1, spaceBetween: 16 },
              480:  { slidesPerView: 2, spaceBetween: 16 },
              768:  { slidesPerView: 3, spaceBetween: 20 },
              1100: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="players-swiper"
          >
            {patrons.map((patron, i) => (
              <SwiperSlide key={i}>
                <div className="patron-card">
                  <div className="patron-img-wrap">
                    <img src={patron.img} alt={patron.name} />
                  </div>
                  <div className="patron-info">
                    <h3 className="patron-name">{patron.name}</h3>
                    <span className="patron-title">{patron.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
