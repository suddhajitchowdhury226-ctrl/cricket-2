import { useState } from 'react';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaHeart
} from 'react-icons/fa';
import './Footer.css';

const quickLinks = ['Home', 'About Us', 'Our Players', 'Fixtures', 'Gallery', 'Shop', 'News', 'Contact'];
const competitions = ['Premier League', 'T20 Cup', 'One Day Trophy', 'Youth Championships', 'Women\'s League', 'Veterans Cup'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  const scrollTo = (section) => {
    const el = document.querySelector(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer">
      {/* Newsletter Bar */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest match updates, club news, and exclusive content delivered to your inbox.</p>
            </div>
            {subscribed ? (
              <div className="subscribed-msg">✅ Thank you for subscribing! Welcome to the Crusaders family.</div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary">
                  Subscribe <FaArrowRight />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <img src="/image.png" alt="Crusaders Cricket Club" className="footer-logo-img" />
                <div>
                  <span className="footer-logo-main">CRUSADERS</span>
                  <span className="footer-logo-sub">Cricket Club</span>
                </div>
              </div>
              <p className="footer-about">
                Crusaders Cricket Club — Est. 2013. We are a community-driven cricket club dedicated to developing players of all ages and abilities, building champions both on and off the field.
              </p>
              <div className="footer-socials">
                {[
                  { icon: <FaFacebookF />, label: 'Facebook' },
                  { icon: <FaTwitter />, label: 'Twitter' },
                  { icon: <FaInstagram />, label: 'Instagram' },
                  { icon: <FaYoutube />, label: 'YouTube' },
                  { icon: <FaLinkedinIn />, label: 'LinkedIn' },
                ].map((s) => (
                  <a key={s.label} href="#" aria-label={s.label} className="footer-social-btn">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map(link => (
                  <li key={link}>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>
                      <FaArrowRight className="link-arrow" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitions */}
            <div className="footer-col">
              <h4 className="footer-col-title">Competitions</h4>
              <ul className="footer-links">
                {competitions.map(c => (
                  <li key={c}>
                    <a href="#">
                      <FaArrowRight className="link-arrow" /> {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact-list">
                <li>
                  <FaMapMarkerAlt />
                  <span>Melbourne, Victoria, Australia</span>
                </li>
                <li>
                  <FaPhone />
                  <a href="tel:+61000000000">+61 000 000 000</a>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:info@crusaderscricket.com.au">info@crusaderscricket.com.au</a>
                </li>
              </ul>

              <div className="footer-hours">
                <h5>Club Office Hours</h5>
                <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 2:00 PM</p>
                <p>Sun: Closed (Match Days Open)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Crusaders Cricket Club. All rights reserved. Built with <FaHeart className="heart" /> for cricket.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
