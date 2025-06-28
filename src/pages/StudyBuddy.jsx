
import React from 'react';
import { Link } from 'react-router-dom';
import './StudyBuddy.css';

const StudyBuddy = () => {
  return (
    <div className="study-buddy-page">
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
            <Link to="/study-buddy" className="nav-link active">Study Buddy</Link>
            <Link to="/mindset" className="nav-link">Mindset</Link>
          </div>

          <div className="nav-auth">
            <Link to="/login" className="sign-in-btn">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <div className="study-buddy-container">
        <div className="container">
          <div className="study-buddy-hero">
            <div className="study-buddy-icon">📚</div>
            <h1>Study Buddy</h1>
            <p className="study-buddy-subtitle">
              Premium online tutorials with verified tutors and comprehensive progress monitoring
            </p>
          </div>

          <div className="features-section">
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Verified Tutors</h3>
              <p>Connect with experienced, background-checked tutors across various subjects</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor learning progress with detailed analytics and performance insights</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Interactive Learning</h3>
              <p>Engage with videos, tests, assignments, and live tutoring sessions</p>
            </div>
          </div>

          <div className="study-buddy-cta">
            <h2>Transform Your Learning Experience</h2>
            <p>Perfect for students, parents, and educators seeking quality online education</p>
            <div className="cta-buttons">
              <Link to="/login" className="cta-button primary">
                Find a Tutor
              </Link>
              <Link to="/login" className="cta-button secondary">
                Become a Tutor
              </Link>
            </div>
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

export default StudyBuddy;
