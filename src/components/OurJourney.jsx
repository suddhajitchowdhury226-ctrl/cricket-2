import { useState, useEffect } from 'react';
import './OurJourney.css';

const chapters = [
  {
    num: 1, year: '1977',
    heading: 'The Beginning',
    subtitle: 'A Vision Takes Shape',
    text: 'In 1977, Ben Barnett — a former Australian Test cricketer — joined forces with Swan Richards, David Richards and the late Ray Steele with a single purpose: to give young cricketers the opportunity to play the game they love. From that founding moment, Crusaders Cricket Australia was born.',
    img: '/story/1.jpeg',
    quote: '"Swan" Richards: The story of a Crusader',
    caption: '"If you\'ve ever owned a Gray Nicolls bat, you have "Swan" Richards to thank."',
    cta: 'Swipe to read his inspirational story',
  },
  {
    num: 2, year: '1980s',
    heading: 'Growing the Game',
    subtitle: 'Youth Cricket Takes Root',
    text: 'Through the 1980s, the Outright Program became the heartbeat of the club — giving boys aged 12 to 18 the chance to compete against schools, association teams, academies and cricket clubs across Melbourne every summer. Talent was everywhere. It just needed a home.',
    img: '/story/2.jpeg',
    quote: 'Autism. Dyslexia. A debilitating stutter.',
    caption: 'He was bullied by his own family. Why? All because he failed to speak before the age of five.',
  },
  {
    num: 3, year: '1985–1995',
    heading: 'Champions Emerge',
    subtitle: 'From Crusaders to Test Cricket',
    text: 'The names began to appear on the national stage. Paul Reiffel. Damien Fleming. Shane Warne. Simon O\'Donnell. Each of them passed through the Crusaders system before going on to represent Australia. The club wasn\'t just developing cricketers — it was shaping legends.',
    img: '/story/3.jpeg',
    quote: 'At three, he was removed from his mother\'s care.',
    caption: 'His grandmother — his rock in an unreliable support system — took him in. At 11, his special needs teacher Colin Burchett recognized that Swan had an aptitude for woodwork.',
  },
  {
    num: 4, year: '1990s',
    heading: 'Flashbacks & Friendships',
    subtitle: 'Cricket for Life',
    text: 'Cricket doesn\'t have to end at 30. The Flashbacks Program was created for cricketers who refused to hang up their whites — men aged 30 and over who still had the fire to compete, to connect, and to be part of something bigger than themselves.',
    img: '/story/4.jpeg',
    quote: 'Swan\'s life changed when Barry Jarman visited his school.',
    caption: 'Barry was so impressed with Swan\'s handiwork, he got special government permission for Swan to leave school and take up a job at his workshop.',
  },
  {
    num: 5, year: '2000s',
    heading: 'Taking Cricket to the World',
    subtitle: 'International Tours Begin',
    text: 'Mid-year cricket tours opened a new chapter. Europe. The United Kingdom. Asia. Sri Lanka. Crusaders players were now experiencing cricket on the world stage — playing at iconic grounds, forging international friendships, and carrying the navy, sky blue and gold across the globe.',
    img: '/story/5.jpeg',
    quote: 'After 10 years with Jarman, Swan went to England.',
    caption: 'He learned bat-making under Len Newbery at Gray Nicolls. In 1971, he returned to Australia to set up a new Gray Nicolls workshop… right in time for Kerry Packer\'s World Series Cricket venture!',
  },
  {
    num: 6, year: '2010s',
    heading: 'Building Futures',
    subtitle: 'Programs That Transform Lives',
    text: 'The club expanded its reach, launching structured development pathways for junior cricketers. Partnerships with schools, local associations and Cricket Victoria brought Crusaders into the modern era — ensuring the next generation had every opportunity to succeed.',
    img: '/story/6.jpeg',
    quote: 'Swan became one of Australia\'s finest bat-makers.',
    caption: 'His craftsmanship helped shape the careers of Australia\'s greatest cricketers. Behind every great bat, there was a great man.',
  },
  {
    num: 7, year: '2017',
    heading: 'Cricket Victoria Partnership',
    subtitle: 'A New Level of Competition',
    text: 'In 2017, Crusaders partnered with Cricket Victoria to provide long-format development matches for players within the pathway system — competing against Cricket Victoria\'s Academy and Sub-District Representative Squads.',
    img: '/story/7.jpeg',
    quote: 'A partnership built on shared values.',
    caption: 'The Cricket Victoria alliance gave Crusaders players access to elite-level competition and pathways previously unavailable to club cricketers.',
  },
  {
    num: 8, year: '2020s',
    heading: 'Resilience & Renewal',
    subtitle: 'Rising Through Adversity',
    text: 'Through the global challenges of the pandemic era, Crusaders adapted and strengthened. The club emerged with renewed purpose — committed to providing every cricketer, regardless of age or ability, with the opportunity to play, develop, and belong.',
    img: '/story/8.jpeg',
    quote: 'Cricket brings people together.',
    caption: 'Even through the hardest of times, the Crusaders community held firm — proving that the bonds forged through sport are unbreakable.',
  },
  {
    num: 9, year: '2024–25',
    heading: "Men's Premiers",
    subtitle: 'Victorian Premier Cricket Champions',
    text: 'The 2025/26 season brought the ultimate reward. Crusaders Cricket Australia\'s 1st XI were crowned Men\'s Premiers in Victorian Premier Cricket — a historic achievement that stands as a testament to decades of dedication, culture, and commitment to excellence.',
    img: '/story/9.jpeg',
    quote: 'Champions on and off the field.',
    caption: 'Winning the Victorian Premier Cricket title validated everything the club stands for — developing great cricketers, and even greater people.',
  },
  {
    num: 10, year: 'Today',
    heading: 'The Story Continues',
    subtitle: 'Almost Five Decades Strong',
    text: 'Crusaders has been developing cricketers for almost five decades — producing first-class players, test cricketers, and more importantly, great people. The journey that started in 1977 is far from over. The best chapters are still to be written.',
    img: '/story/10.jpeg',
    quote: 'The best is yet to come.',
    caption: 'With programs spanning youth development, senior cricket, international tours and Flashbacks, Crusaders Cricket Australia continues to give the gift of cricket to all who love the game.',
  },
];

export default function OurJourney() {
  const [active, setActive]     = useState(0);
  const [animDir, setAnimDir]   = useState('');   // 'slide-left' | 'slide-right'
  const [animating, setAnimating] = useState(false);

  const go = (idx, dir) => {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimDir('');
      setAnimating(false);
    }, 500);
  };

  const prev = () => go((active - 1 + chapters.length) % chapters.length, 'slide-right');
  const next = () => go((active + 1) % chapters.length, 'slide-left');

  // Auto-advance every 6 seconds
  useEffect(() => {
    const t = setTimeout(() => next(), 6000);
    return () => clearTimeout(t);
  }, [active]);

  const ch = chapters[active];

  return (
    <section className="our-journey" id="journey">
      {/* Label */}
      <div className="oj-label-bar">
        <span className="oj-label">OUR JOURNEY</span>
      </div>

      <div className={`oj-inner ${animDir} ${animating ? 'is-animating' : ''}`}>
        {/* Left: Text */}
        <div className="oj-left">
          <div className="oj-chapter-badge">
            <span className="oj-ch-pill">Chapter {ch.num}</span>
            <span className="oj-year">{ch.year}</span>
          </div>
          <h2 className="oj-heading">{ch.heading}</h2>
          <p className="oj-subtitle">{ch.subtitle}</p>
          <p className="oj-text">{ch.text}</p>
        </div>

        {/* Right: Card */}
        <div className="oj-right">
          <div className="oj-card">
            {ch.quote && <p className="oj-card-title">{ch.quote}</p>}
            <div className="oj-card-img">
              <img src={ch.img} alt={ch.heading} />
            </div>
            {ch.caption && <p className="oj-card-caption">{ch.caption}</p>}
            {ch.cta && (
              <p className="oj-card-cta">
                {ch.cta} <span className="oj-arrow">→</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="oj-nav">
        <div className="oj-dots">
          {chapters.map((_, i) => (
            <button
              key={i}
              className={`oj-dot ${i === active ? 'active' : ''}`}
              onClick={() => go(i, i > active ? 'slide-left' : 'slide-right')}
              aria-label={`Chapter ${i + 1}`}
            />
          ))}
        </div>
        <div className="oj-nav-right">
          <span className="oj-counter">
            {String(active + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
          </span>
          <button className="oj-btn" onClick={prev} aria-label="Previous">←</button>
          <button className="oj-btn oj-btn-next" onClick={next} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  );
}
