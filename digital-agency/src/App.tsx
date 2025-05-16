import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import './index.css';
import Testimonials from './components/Testimonial';

const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <h1 className="logo">DigitalWave</h1>
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Add id="home" here to scroll on "Home" */}
        <section id="home">
          <Hero />
        </section>
        <Services />
        <Portfolio />
        <Testimonials/>
      </main>

      <footer className="footer">
        <div className="container">
          &copy; 2025 DigitalWave Technology & Services LLP
        </div>
      </footer>
    </>
  );
};

export default App;
