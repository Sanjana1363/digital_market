import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './index.css'

const App: React.FC = () => {
  return (
    <><header className="header">
  <div className="container nav-container">
    <h1 className="logo">DigitalWave</h1>
    <nav className="navbar">
      <a href="/home">Home</a>
      <a href="/services">Services</a>
      <a href="/portfolio">Portfolio</a>
    
    </nav>
  </div>
</header>


      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
