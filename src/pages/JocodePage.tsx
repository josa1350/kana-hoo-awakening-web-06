
import React from 'react';
import { Link } from 'react-router-dom';

const JocodePage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          ← Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💻</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Jocode</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn programming from scratch with real-world projects and hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>JavaScript & React fundamentals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Backend development with Node.js</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Database design and management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Real-world project building</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">🎯</span>
                <span>Progress tracking & certification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">📚</span>
                <span>Free & premium content available</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">🚀</span>
                <span>Project-based learning approach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">👥</span>
                <span>Community support & mentorship</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/login" 
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Learning Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JocodePage;
