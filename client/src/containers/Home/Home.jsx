import React, {useState, useEffect} from 'react';
import {AppWrap} from '../../wrapper';
import {Loader} from '../../components';

import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
// import Testimonials from '../Testimonials/Testimonials';
import Education from '../Education/ES';
import Contact from '../Contact/Contact';

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Services />
          <Experience />
          <Education />
          <Contact />
          {/* <Testimonials /> */}
        </>
      )}
    </>
  );
};

export default AppWrap(Home, 'home');
