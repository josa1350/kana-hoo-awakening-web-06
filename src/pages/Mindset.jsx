
import React from 'react';
import { Link } from 'react-router-dom';
import './Mindset.css';

const Mindset = () => {
  const quotes = [
    "Be proud of challenges that dare to challenge you.",
    "Growth begins at the end of your comfort zone.",
    "Every setback is a setup for a comeback.",
    "Your mindset determines your reality."
  ];

  return (
    <div className="mindset-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">Kana Hoo</Link>
          </div>
          
          <div className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/books" className="nav-link">Books</Link>
            <Link to="/quote" className="nav-link">Quote</Link>
            <Link to="/jocode" className="nav-link">Jocode</Link>
            <Link to="/study-buddy" className="nav-link">Study Buddy</Link>
            <Link to="/mindset" className="nav-link active">Mindset</Link>
          </div>

          <div className="nav-auth">
            <Link to="/login" className="sign-in-btn">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <div className="mindset-container">
        <div className="container">
          <div className="mindset-hero">
            <div className="mindset-icon">🧠</div>
            <h1>Mindset</h1>
            <p className="mindset-subtitle">
              Daily inspiration, growth videos, and transformational content rooted in psychology
            </p>
          </div>

          <div className="quotes-section">
            <h2>Daily Quotes</h2>
            <div className="quotes-grid">
              {quotes.map((quote, index) => (
                <div key={index} className="quote-card">
                  <blockquote>"{quote}"</blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="features-section">
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Growth Books</h3>
              <p>Curated psychology and self-development books</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h3>Inspiring Videos</h3>
              <p>Daily motivational and educational content</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Personal Growth</h3>
              <p>Tools and techniques for transformation</p>
            </div>
          </div>

          <div className="mindset-cta">
            <h2>Start Your Growth Journey</h2>
            <p>Transform your mindset and unlock your potential with psychology-based content</p>
            <Link to="/login" className="cta-button primary">
              Begin Transformation
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Kana Hoo</h4>
              <p>Be proud of challenges that dare to challenge you</p>
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
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Kana Hoo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mindset;
