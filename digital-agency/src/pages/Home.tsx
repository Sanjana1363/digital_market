import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonial';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
    </>
  );
};

export default Home;
