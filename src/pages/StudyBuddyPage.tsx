
import React from 'react';
import { Link } from 'react-router-dom';

const StudyBuddyPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          ← Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Study Buddy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium online tutorials with verified tutors and comprehensive progress monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-lg">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-bold mb-3">Verified Tutors</h3>
            <p className="text-gray-600">
              Connect with experienced, background-checked tutors across various subjects
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
            <p className="text-gray-600">
              Monitor learning progress with detailed analytics and performance insights
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
            <p className="text-gray-600">
              Engage with videos, tests, assignments, and live tutoring sessions
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/login" 
            className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors mr-4"
          >
            Find a Tutor
          </Link>
          <Link 
            to="/login" 
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Become a Tutor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudyBuddyPage;
