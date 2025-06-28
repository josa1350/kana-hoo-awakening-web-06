
import React from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../components/AuthModal';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
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
            <Link to="/mindset" className="nav-link">Mindset</Link>
          </div>

          <div className="nav-auth">
            <Link to="/" className="back-home-btn">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="login-container">
        <div className="login-content">
          <div className="text-center mb-8">
            <h1 className="login-title">Welcome to Kana Hoo</h1>
            <p className="login-subtitle">Join our community of learners and grow together</p>
          </div>
          
          <div className="auth-wrapper">
            <AuthModal isOpen={true} onClose={() => {}} />
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

export default Login;
