
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../components/AuthModal';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Kana Hoo</h1>
          <p className="text-gray-600">Join our community of learners and grow together</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <AuthModal isOpen={true} onClose={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Login;
