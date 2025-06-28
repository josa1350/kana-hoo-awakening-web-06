
import React from 'react';
import { Link } from 'react-router-dom';
import './Books.css';

const Books = () => {
  const bookCategories = [
    { name: "Psychology", icon: "🧠", count: "12+", color: "#9b59b6" },
    { name: "Business", icon: "💼", count: "8+", color: "#3498db" },
    { name: "Coding", icon: "💻", count: "15+", color: "#2ecc71" },
    { name: "Fiction", icon: "📚", count: "6+", color: "#e74c3c" },
    { name: "Self-Help", icon: "🌱", count: "10+", color: "#f39c12" },
    { name: "Science", icon: "🔬", count: "7+", color: "#1abc9c" }
  ];

  return (
    <div className="books-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">Kana Hoo</Link>
          </div>
          
          <div className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/books" className="nav-link active">Books</Link>
            <Link to="/quote" className="nav-link">Quote</Link>
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

      <div className="books-container">
        <div className="container">
          <div className="books-hero">
            <div className="books-icon">📚</div>
            <h1>Book Library</h1>
            <p className="books-subtitle">
              Discover curated books across various categories to support your growth journey
            </p>
          </div>

          <div className="categories-section">
            <h2>Browse by Category</h2>
            <div className="categories-grid">
              {bookCategories.map((category, index) => (
                <div key={index} className="category-card" style={{ borderColor: category.color }}>
                  <div className="category-icon" style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.count} books available</p>
                  <Link to="/login" className="category-btn" style={{ backgroundColor: category.color }}>
                    Explore
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="books-cta">
            <h2>Start Your Reading Journey</h2>
            <p>Access our full library of carefully selected books to accelerate your personal and professional growth</p>
            <Link to="/login" className="cta-button primary">
              Access Library
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

export default Books;
