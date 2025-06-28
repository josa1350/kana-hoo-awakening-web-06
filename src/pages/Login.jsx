
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <Header />

      <div className="login-container">
        <div className="login-content">
          <div className="text-center mb-8">
            <h1 className="login-title">Welcome to Kana Hoo</h1>
            <p className="login-subtitle">Join our community of learners and grow together</p>
          </div>
          
          <div className="auth-wrapper">
            <AuthModal isOpen={true} onClose={() => {}} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
