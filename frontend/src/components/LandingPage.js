import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">AI Voice Agent</div>
        <div className="nav-links">
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup" className="cta-button">Sign Up</Link>
        </div>
      </nav>
      <div className="hero-section">
        <h1>Revolutionize Your Business Communication</h1>
        <p>AI-powered voice calling agent designed for the Middle East.</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </div>
      <div className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Multilingual Support</h3>
            <p>Arabic, English, French, and Turkish with regional nuances.</p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Sentiment Analysis</h3>
            <p>Understand customer emotions and adjust conversations.</p>
          </div>
          <div className="feature-card">
            <h3>Seamless Telephony Integration</h3>
            <p>Connect to global SIM networks with ease.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© 2023 AI Voice Agent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
