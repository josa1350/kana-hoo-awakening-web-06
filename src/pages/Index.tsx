
import React from 'react';
import './KanaHoo.css';

const Index = () => {
  const services = [
    {
      title: "Jocode",
      description: "Learn to code with structured lessons and hands-on projects that build real skills.",
      icon: "💻"
    },
    {
      title: "Study Buddy", 
      description: "Get tutorials and connect with qualified teachers for personalized learning.",
      icon: "📚"
    },
    {
      title: "Mindset",
      description: "Daily inspiration through curated quotes, videos, and transformative books.",
      icon: "🧠"
    }
  ];

  const books = [
    { title: "Kana Hoo", cover: "📖" },
    { title: "Growth Mindset", cover: "🌱" },
    { title: "Code & Soul", cover: "💙" },
    { title: "Learning Path", cover: "🛤️" },
    { title: "Inner Strength", cover: "💪" }
  ];

  return (
    <div className="kana-landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="book-cover">
                <div className="book-spine"></div>
                <div className="book-front">
                  <h3>Kana Hoo</h3>
                  <p>Psychology Guide</p>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <h1>Kana Hoo</h1>
              <p className="slogan">"Be proud of challenges that dare to challenge you"</p>
              <p className="hero-description">
                Transform your mindset and unlock your potential through psychology-backed learning and personal growth.
              </p>
              <button className="cta-button">Start Your Journey</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>What is Kana Hoo?</h2>
          <p className="about-text">
            Kana Hoo is more than just a philosophy—it's a transformative approach to life based on cutting-edge 
            psychology research. Our mission is to help you embrace challenges as opportunities for growth, 
            building resilience and confidence through evidence-based methods and supportive learning environments.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Showcase */}
      <section className="books">
        <div className="container">
          <div className="books-header">
            <h2>Featured Books</h2>
            <button className="explore-btn">Explore More ➤</button>
          </div>
          <div className="books-grid">
            {books.map((book, index) => (
              <div key={index} className="book-item">
                <div className="book-cover-small">
                  <span className="book-emoji">{book.cover}</span>
                </div>
                <p>{book.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote of the Day */}
      <section className="quote-section">
        <div className="container">
          <h2>Quote of the Day</h2>
          <blockquote className="daily-quote">
            "The only way to make sense out of change is to plunge into it, move with it, and join the dance."
            <cite>— Alan Watts</cite>
          </blockquote>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Start Your Free Trial</h2>
            <p>Join thousands who have transformed their mindset with Kana Hoo</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="submit-btn">Get Started Free</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Kana Hoo</h4>
              <p>Transforming lives through psychology and learning</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#jocode">Jocode</a></li>
                <li><a href="#study-buddy">Study Buddy</a></li>
                <li><a href="#mindset">Mindset</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#books">Books</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#community">Community</a></li>
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

export default Index;
