
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
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
      <Footer />
    </div>
  );
};

export default About;
