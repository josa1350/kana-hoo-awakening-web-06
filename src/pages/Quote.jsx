
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quote.css';

const Quote = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "Be proud of challenges that dare to challenge you.",
      author: "Kana Hoo",
      category: "Challenge"
    },
    {
      text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
      author: "Alan Watts",
      category: "Change"
    },
    {
      text: "Growth begins at the end of your comfort zone.",
      author: "Neale Donald Walsch",
      category: "Growth"
    },
    {
      text: "Your mindset determines your reality.",
      author: "Unknown",
      category: "Mindset"
    },
    {
      text: "Every setback is a setup for a comeback.",
      author: "T.D. Jakes",
      category: "Resilience"
    },
    {
      text: "The mind is everything. What you think you become.",
      author: "Buddha",
      category: "Mindset"
    }
  ];

  return (
    <div className="quote-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">Kana Hoo</Link>
          </div>
          
          <div className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/books" className="nav-link">Books</Link>
            <Link to="/quote" className="nav-link active">Quote</Link>
            <Link to="/jocode" className="nav-link">Jocode</Link>
            <Link to="/study-buddy" className="nav-link">Study Buddy</Link>
            <Link to="/mindset" className="nav-link">Mindset</Link>
          </div>

          <div className="nav-auth">
            <Link to="/login" className="sign-in-btn">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <div className="quote-container">
        <div className="container">
          <div className="quote-hero">
            <div className="quote-icon">💭</div>
            <h1>Daily Inspiration</h1>
            <p className="quote-subtitle">
              Discover powerful quotes to fuel your growth and transformation journey
            </p>
          </div>

          <div className="featured-quote">
            <div className="quote-carousel">
              <blockquote className="main-quote">
                "{quotes[currentQuoteIndex].text}"
                <cite>— {quotes[currentQuoteIndex].author}</cite>
                <span className="quote-category">{quotes[currentQuoteIndex].category}</span>
              </blockquote>
              <div className="quote-controls">
                <button 
                  className="quote-nav prev"
                  onClick={() => setCurrentQuoteIndex(currentQuoteIndex === 0 ? quotes.length - 1 : currentQuoteIndex - 1)}
                >
                  ←
                </button>
                <div className="quote-indicators">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentQuoteIndex ? 'active' : ''}`}
                      onClick={() => setCurrentQuoteIndex(index)}
                    />
                  ))}
                </div>
                <button 
                  className="quote-nav next"
                  onClick={() => setCurrentQuoteIndex((currentQuoteIndex + 1) % quotes.length)}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="quotes-grid">
            <h2>More Inspirational Quotes</h2>
            <div className="quotes-collection">
              {quotes.map((quote, index) => (
                <div key={index} className="quote-card">
                  <blockquote>"{quote.text}"</blockquote>
                  <cite>— {quote.author}</cite>
                  <span className="category-tag">{quote.category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="quote-cta">
            <h2>Get Daily Inspiration</h2>
            <p>Join our community to receive carefully curated quotes and wisdom delivered to your inbox</p>
            <Link to="/login" className="cta-button primary">
              Start Your Journey
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

export default Quote;
