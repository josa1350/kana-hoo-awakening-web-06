
import React from 'react';
import { Link } from 'react-router-dom';
import './Jocode.css';

const Jocode = () => {
  const features = [
    {
      icon: "💻",
      title: "Real-World Projects",
      description: "Build actual applications that you can showcase in your portfolio"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and milestones"
    },
    {
      icon: "🏆",
      title: "Certificates",
      description: "Earn verified certificates upon completing courses and projects"
    },
    {
      icon: "🎯",
      title: "Hands-On Learning",
      description: "Learn by doing with interactive exercises and coding challenges"
    },
    {
      icon: "👥",
      title: "Community Support",
      description: "Connect with fellow learners and experienced developers"
    },
    {
      icon: "🔄",
      title: "Regular Updates",
      description: "Stay current with the latest technologies and best practices"
    }
  ];

  return (
    <div className="jocode-page">
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
            <Link to="/jocode" className="nav-link active">Jocode</Link>
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

      <div className="jocode-container">
        <div className="container">
          <div className="jocode-hero">
            <div className="jocode-icon">💻</div>
            <h1>Jocode</h1>
            <p className="jocode-subtitle">
              Learn programming from scratch with real-world projects and hands-on experience
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="jocode-cta">
            <h2>Ready to Start Your Coding Journey?</h2>
            <p>Join thousands of learners who have transformed their careers with Jocode</p>
            <div className="cta-buttons">
              <Link to="/login" className="cta-button primary">
                Start Learning Free
              </Link>
              <Link to="/login" className="cta-button secondary">
                View Premium Plans
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

export default Jocode;
