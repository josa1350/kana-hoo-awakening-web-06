import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './StudyBuddy.css';

const StudyBuddy = () => {
  return (
    <div className="study-buddy-page">
      <Header />

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

      <Footer />
    </div>
  );
};

export default StudyBuddy;
