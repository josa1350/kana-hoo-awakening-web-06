
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "Be proud of challenges that dare to challenge you.",
      author: "Kana Hoo"
    },
    {
      text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
      author: "Alan Watts"
    },
    {
      text: "Growth begins at the end of your comfort zone.",
      author: "Neale Donald Walsch"
    }
  ];

  const bookCategories = [
    { name: "Psychology", icon: "🧠", count: "12+" },
    { name: "Business", icon: "💼", count: "8+" },
    { name: "Coding", icon: "💻", count: "15+" },
    { name: "Fiction", icon: "📚", count: "6+" },
    { name: "Self-Help", icon: "🌱", count: "10+" },
    { name: "More", icon: "➕", count: "25+" }
  ];

  const benefits = [
    "Early access to books",
    "Project templates (Jocode)",
    "Free chapters & content",
    "Growth dashboards",
    "Certificates & recognition",
    "Community access"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="kana-landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">Kana Hoo</Link>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => scrollToSection('hero')}>Home</a>
            <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a>
            <a href="#services" className="nav-link" onClick={() => scrollToSection('services')}>Services</a>
            <Link to="/books" className="nav-link">Books</Link>
            <Link to="/quote" className="nav-link">Quote</Link>
            <a href="#join" className="nav-link" onClick={() => scrollToSection('join')}>Join</a>
          </div>

          <div className="nav-auth">
            <Link to="/login" className="sign-in-btn">
              Sign In
            </Link>
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="book-cover">
                <div className="book-spine"></div>
                <div className="book-front">
                  <h3>Kana Hoo</h3>
                  <p>Psychology & Growth</p>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <h1>Kana Hoo</h1>
              <p className="slogan">"Be proud of challenges that dare to challenge you"</p>
              <p className="hero-description">
                More than a book — it's a digital hub for personal development and education, 
                transforming how you learn, grow, and overcome challenges.
              </p>
              <div className="hero-buttons">
                <button className="cta-button primary">Read Chapter One Free</button>
                <button className="cta-button secondary" onClick={() => scrollToSection('about')}>Learn More</button>
              </div>
              <div className="scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-arrow">↓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Kana Hoo</h2>
              <p className="about-description">
                Kana Hoo began as an unpublished psychology book exploring the transformative power of 
                embracing challenges. It has evolved into a comprehensive digital ecosystem designed to 
                support your personal and professional growth journey.
              </p>
              
              <div className="quote-block">
                <blockquote>
                  "Every challenge you face is an invitation to become stronger, wiser, and more resilient. 
                  The key is not to avoid difficulties, but to dance with them."
                </blockquote>
                <cite>— From Kana Hoo</cite>
              </div>
            </div>
            
            <div className="founder-message">
              <h3>Our Mission</h3>
              <p>
                We believe that growth happens at the intersection of challenge and support. 
                Kana Hoo provides the tools, community, and guidance you need to transform 
                obstacles into opportunities for profound personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Products & Services</h2>
          
          <div className="service-item">
            <div className="service-header">
              <div className="service-logo">
                <div className="logo-jocode">💻</div>
              </div>
              <div className="service-info">
                <h3>Jocode</h3>
                <p>Learn programming from scratch with real-world projects. Our platform offers both free and premium content with progress tracking and certification.</p>
                <ul>
                  <li>Real projects and hands-on learning</li>
                  <li>Progress tracking and certification</li>
                  <li>Free & premium content</li>
                </ul>
              </div>
            </div>
            <div className="service-cta">
              <Link to="/jocode" className="service-btn">Explore Jocode</Link>
            </div>
          </div>

          <div className="service-item">
            <div className="service-header">
              <div className="service-logo">
                <div className="logo-study-buddy">📚</div>
              </div>
              <div className="service-info">
                <h3>Study Buddy</h3>
                <p>Hire verified tutors and monitor student progress. Perfect for parents, teachers, and learners with videos, tests, and assignments.</p>
                <ul>
                  <li>Verified tutors and mentors</li>
                  <li>Progress monitoring tools</li>
                  <li>Interactive learning materials</li>
                </ul>
              </div>
            </div>
            <div className="service-cta">
              <Link to="/study-buddy" className="service-btn">Explore Study Buddy</Link>
            </div>
          </div>

          <div className="service-item">
            <div className="service-header">
              <div className="service-logo">
                <div className="logo-mindset">🧠</div>
              </div>
              <div className="service-info">
                <h3>Mindset</h3>
                <p>Daily quotes, videos, and books designed to support personal transformation. Rooted in psychology and growth principles.</p>
                <ul>
                  <li>Daily inspiration and motivation</li>
                  <li>Psychology-based content</li>
                  <li>Personal transformation tools</li>
                </ul>
              </div>
            </div>
            <div className="service-cta">
              <Link to="/mindset" className="service-btn">Explore Mindset</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Categories Section */}
      <section id="books" className="book-categories">
        <div className="container">
          <h2>Explore Our Book Categories</h2>
          <div className="categories-grid">
            {bookCategories.map((category, index) => (
              <Link 
                key={index} 
                to={`/books?category=${category.name.toLowerCase()}`}
                className="category-card"
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.count} books</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote of the Day */}
      <section id="quote-section" className="quote-section">
        <div className="container">
          <h2>Daily Inspiration</h2>
          <div className="quote-carousel">
            <blockquote className="daily-quote">
              {quotes[currentQuoteIndex].text}
              <cite>— {quotes[currentQuoteIndex].author}</cite>
            </blockquote>
            <div className="quote-indicators">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentQuoteIndex ? 'active' : ''}`}
                  onClick={() => setCurrentQuoteIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/quote" className="cta-button secondary">
              View More Quotes
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="join" className="why-join">
        <div className="container">
          <h2>Why Join Kana Hoo?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">✓</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
          <div className="join-cta">
            <Link to="/login" className="cta-button primary">Join for Free</Link>
            <Link to="/login" className="cta-button secondary">Try a Product</Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Want to grow weekly?</h2>
            <p>Get inspiring content, growth tips, and early access to new features delivered to your inbox.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="submit-btn">📬 Subscribe Now</button>
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
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#support">Support</a></li>
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
    </div>
  );
};

export default Home;
