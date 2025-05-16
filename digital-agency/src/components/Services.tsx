import React from 'react';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'SEO Optimization',
    description: 'Improve your website ranking and drive organic traffic.',
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience with powerful social campaigns.',
  },
  {
    title: 'Content Creation',
    description: 'High-quality content to boost brand awareness.',
  },
];

const Services: React.FC = () => (
  <section id="services" className="section services">
    <div className="container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map(({ title, description }, i) => (
          <div key={i} className="service-card">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
