
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Kana Hoo</h4>
            <p>Be proud of challenges that dare to challenge you</p>
            <div className="social-links">
              <a href="#telegram" aria-label="Telegram">📱</a>
              <a href="#linkedin" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link to="/jocode">Jocode</Link></li>
              <li><Link to="/study-buddy">Study Buddy</Link></li>
              <li><Link to="/mindset">Mindset</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/quote">Quote</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Kana Hoo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
