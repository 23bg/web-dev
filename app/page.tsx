import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;