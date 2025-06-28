
import React from 'react';
import { Link } from 'react-router-dom';

const MindsetPage = () => {
  const quotes = [
    "Be proud of challenges that dare to challenge you.",
    "Growth begins at the end of your comfort zone.",
    "Every setback is a setup for a comeback.",
    "Your mindset determines your reality."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          ← Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🧠</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mindset</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Daily inspiration, growth videos, and transformational content rooted in psychology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Daily Quotes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
                  <blockquote className="text-lg italic text-gray-700">
                    "{quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold mb-2">Growth Books</h3>
              <p className="text-gray-600 text-sm">Curated psychology and self-development books</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-3">🎥</div>
              <h3 className="font-bold mb-2">Inspiring Videos</h3>
              <p className="text-gray-600 text-sm">Daily motivational and educational content</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-bold mb-2">Personal Growth</h3>
              <p className="text-gray-600 text-sm">Tools and techniques for transformation</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/login" 
            className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Your Growth Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MindsetPage;
