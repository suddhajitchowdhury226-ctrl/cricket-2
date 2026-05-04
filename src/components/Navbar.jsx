import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'News', href: '#blog' },
  { label: 'Fixtures', href: '#fixtures' },
  {
    label: 'Our Team', href: '#players',
    children: [
      { label: 'Senior Team', href: '#players' },
      { label: 'U19 Team', href: '#players' },
      { label: "Women's Team", href: '#players' },
    ]
  },
  { label: 'Tours', href: '#fixtures' },
  { label: 'Membership', href: '#about' },
  { label: 'Photo Gallery', href: '#achievements' },
  { label: 'Policies', href: '#footer' },
  { label: 'Contact Us', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      {/* ── ROW 1: Logo + Actions ── */}
      <div className="navbar-top">
        <div className="container navbar-top-inner">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={() => handleNavClick('#home')}>
            <img src="/image.png" alt="Crusaders Cricket Club Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-main">CRUSADERS CRICKET AUSTRALIA</span>
              <span className="logo-sub">Official website of Crusaders Cricket Australia</span>
              <span className="logo-sub">NON-PROFIT ORGANISATION</span>
            </div>
          </a>

          {/* Right actions */}
          <div className="navbar-actions">
            <button className="search-toggle" onClick={() => setSearchOpen(!searchOpen)}>
              <FaSearch />
            </button>
            <a
              href="#fixtures"
              className="btn-primary navbar-btn"
              onClick={(e) => { e.preventDefault(); handleNavClick('#fixtures'); }}
            >
              Join Now
            </a>
            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* ── ROW 2: Nav Links ── */}
      <div className="navbar-bottom">
        <div className="container">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`nav-item ${link.children ? 'has-dropdown' : ''}`}
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                  {link.children && <FaChevronDown className="dropdown-arrow" />}
                </a>
                {link.children && (
                  <ul className={`dropdown ${activeDropdown === link.label ? 'active' : ''}`}>
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={(e) => { e.preventDefault(); handleNavClick(child.href); }}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`search-bar ${searchOpen ? 'active' : ''}`}>
        <div className="container">
          <input ref={searchRef} type="text" placeholder="Search players, matches, news..." />
          <button onClick={() => setSearchOpen(false)}><FaTimes /></button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
              {link.children && (
                <ul className="mobile-submenu">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a href={child.href} onClick={(e) => { e.preventDefault(); handleNavClick(child.href); }}>
                        — {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
