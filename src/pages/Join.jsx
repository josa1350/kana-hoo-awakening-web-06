
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Join.css';

const Join = () => {
  const benefits = [
    "Early access to books",
    "Project templates (Jocode)",
    "Free chapters & content",
    "Growth dashboards",
    "Certificates & recognition",
    "Community access"
  ];

  return (
    <div className="join-page">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Join;
