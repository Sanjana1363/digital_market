import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section">
      <h2 className="">Our Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/images/alpha.jpeg" alt="Project Alpha" />
          <h3>Project Alpha</h3>
        </div>
        <div className="portfolio-item">
          <img src="/images/beta.jpeg" alt="Project Beta" />
          <h3>Project Beta</h3>
        </div>
        <div className="portfolio-item">
          <img src="/images/oo.jpeg" alt="Project Gamma" />
          <h3>Project Gamma</h3>
        </div>
        <div className="portfolio-item">
          <img src="/images/delta.jpeg" alt="Project Delta" />
          <h3>Project Delta</h3>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;