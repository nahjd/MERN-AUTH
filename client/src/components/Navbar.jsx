import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { ThemeContext } from '../../src/context/ThemeContext';
import { LanguageContext } from '../../src/context/LanguageContext';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage, t } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <nav className={`navbar-container ${theme}`}>
      <div className="navbar-logo">
        <Link to="/">MyApp</Link>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/home">{t('home')}</Link></li>
          <li><Link to="/blog">{t('blog')}</Link></li>
          <li><Link to="/about">{t('about')}</Link></li>
          <li><Link to="/login" className="btn btn-login">{t('signIn')}</Link></li>
          <li><Link to="/register" className="btn btn-signup">{t('signUp')}</Link></li>
        </ul>
        <div className="navbar-actions">
          <input 
            type="text" 
            placeholder={t('search')} 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <select onChange={(e) => changeLanguage(e.target.value)} value={language}>
            <option value="az">AZ</option>
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✖' : '☰'}
      </div>
    </nav>
  );
}
