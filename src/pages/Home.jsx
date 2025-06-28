
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
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
    <div className="home-page">
      <Header />
      
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
                <button className="cta-button secondary" onClick={() => scrollToSection('services')}>Learn More</button>
              </div>
              <div className="scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-arrow">↓</div>
              </div>
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
                <div className="service-cta">
                  <Link to="/jocode" className="service-btn">Explore Jocode</Link>
                </div>
              </div>
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
                <div className="service-cta">
                  <Link to="/study-buddy" className="service-btn">Explore Study Buddy</Link>
                </div>
              </div>
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
                <div className="service-cta">
                  <Link to="/mindset" className="service-btn">Explore Mindset</Link>
                </div>
              </div>
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

      <Footer />
    </div>
  );
};

export default Home;
