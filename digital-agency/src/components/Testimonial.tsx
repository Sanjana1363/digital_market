import React from 'react';

interface Testimonial {
  name: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alice Johnson',
    feedback: 'Next24tech transformed our online presence. Highly recommend!',
  },
  {
    name: 'Mark Stevens',
    feedback: 'Professional and result-driven team.',
  },
  {
    name: 'Sophia Lee',
    feedback: 'Their SEO strategies brought us top rankings quickly.',
  },
];

const Testimonials: React.FC = () => (
  <section className="section testimonials">
    <div className="container">
      <h2>Client Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map(({ name, feedback }, i) => (
          <div key={i} className="testimonial-card">
            <p>"{feedback}"</p>
            <h4>- {name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
