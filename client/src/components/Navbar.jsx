import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { ThemeContext } from '../../src/context/ThemeContext';
import { LanguageContext } from '../../src/context/LanguageContext';
import { RiMenuFill, RiCloseFill } from 'react-icons/ri';

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { language, changeLanguage, t } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="/" className="logo" onClick={closeMenu}>MyApp</Link>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <RiCloseFill /> : <RiMenuFill />}
        </button>

        <div className={`navbar-right ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/home" onClick={closeMenu}>{t('home')}</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>{t('blog')}</Link></li>
            <li><Link to="/about" onClick={closeMenu}>{t('about')}</Link></li>
            <li><Link to="/login" className="btn login" onClick={closeMenu}>{t('signIn')}</Link></li>
            <li><Link to="/register" className="btn signup" onClick={closeMenu}>{t('signUp')}</Link></li>
          </ul>

          <div className="actions">
            <input
              type="text"
              placeholder={t('search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="az">AZ</option>
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
