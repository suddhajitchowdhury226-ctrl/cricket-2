import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Topbar.css';

const liveScores = [
  { match: 'IND vs AUS', score: 'IND: 287/6 (48.2 Ov) | AUS: 245/10 (42.1 Ov)  |  IND WON BY 42 RUNS', status: 'live' },
  { match: 'ENG vs SA', score: 'ENG: 312/7 (50 Ov) | SA: 176/5 (30 Ov)  |  SA NEEDS 137 RUNS IN 120 BALLS', status: 'live' },
  { match: 'PAK vs NZ', score: 'PAK vs NZ on 12 MAY 2025 at Lords Cricket Ground', status: 'upcoming' },
  { match: 'WI vs SL', score: 'WI: 198/8 (50 Ov) | SL: 156/10 (44 Ov)  |  WI WON BY 42 RUNS', status: 'result' },
];

export default function Topbar() {
  const scoreText = liveScores.map(s => `🏏 ${s.match}: ${s.score}`).join('   ★   ');

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <div className="live-badge">LIVE</div>
          <div className="marquee-wrapper">
            <div className="marquee-content">
              <span>{scoreText}&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;{scoreText}&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-contacts">
            <a href="tel:+61000000000" className="topbar-contact-item">
              <FaPhone />
              <span>+61 000 000 000</span>
            </a>
            <a href="mailto:info@crusaderscricket.com.au" className="topbar-contact-item">
              <FaEnvelope />
              <span>info@crusaderscricket.com.au</span>
            </a>
          </div>
          <div className="topbar-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
