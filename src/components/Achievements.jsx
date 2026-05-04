import { useState } from 'react';
import { FaFilter, FaExpand, FaTimes } from 'react-icons/fa';
import './Achievements.css';

const filters = ['All', 'Matches', 'Training', 'Events', 'Trophies'];

const gallery = [
  { id: 1, cat: 'Trophies', img: 'https://images.unsplash.com/photo-1569426939760-ce4ead96e73e?w=600&q=80', title: 'Regional Championship 2024', span: 'wide' },
  { id: 2, cat: 'Matches', img: 'https://images.unsplash.com/photo-1540747913346-19212a4cf655?w=600&q=80', title: 'Quarter Final vs Warriors' },
  { id: 3, cat: 'Training', img: 'https://images.unsplash.com/photo-1594570192735-63e37cb63e5a?w=600&q=80', title: 'Pre-Season Camp 2025' },
  { id: 4, cat: 'Events', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80', title: 'Annual Club Gala Night' },
  { id: 5, cat: 'Matches', img: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&q=80', title: 'Finals Day Action', span: 'tall' },
  { id: 6, cat: 'Training', img: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80', title: 'Batting Masterclass' },
  { id: 7, cat: 'Trophies', img: 'https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=600&q=80', title: 'National Cup Winners 2023' },
  { id: 8, cat: 'Events', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', title: 'Youth Awards Ceremony' },
];

export default function Achievements() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? gallery : gallery.filter(g => g.cat === active);

  return (
    <section id="achievements" className="achievements section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle" style={{ justifyContent: 'center' }}>Our Portfolio</p>
          <h2 className="section-title">OUR <span>GALLERY</span></h2>
          <p className="section-desc">Relive the greatest moments from our club's history — victories, milestones, and memories that define champions.</p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              <FaFilter className="filter-icon" /> {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`gallery-item ${item.span ? `span-${item.span}` : ''}`}
              onClick={() => setLightbox(item)}
            >
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <span className="gallery-cat">{item.cat}</span>
                  <h4 className="gallery-title">{item.title}</h4>
                  <button className="gallery-expand"><FaExpand /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close"><FaTimes /></button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} />
            <div className="lightbox-info">
              <span className="gallery-cat">{lightbox.cat}</span>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
