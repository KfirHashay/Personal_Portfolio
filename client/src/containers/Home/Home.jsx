import React from 'react';
import { AppWrap } from '../../wrapper';

import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
// import Testimonials from '../Testimonials/Testimonials';
import Education from '../Education/ES';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>
      {/* <Testimonials /> */}
      <Hero />
      <Services />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

export default AppWrap(Home, 'home');
