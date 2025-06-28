
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Services;
