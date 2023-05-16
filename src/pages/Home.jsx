import React from 'react';
import { Hero } from '../component/Hero/Hero';
import { Navbar } from '../component/Navbar/Navbar';

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
    </React.Fragment>
  );
};

export default Home;
