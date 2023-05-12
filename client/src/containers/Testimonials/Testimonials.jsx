import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';

import { TitleText, TestimonialCard } from '../../components';

import { TestimonialCardText } from '../../utils/constant';

const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carusel = useRef();

  useEffect(() => {
    setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="Testimonials"
      className="testimonials"
    >
      <TitleText
        Title={'My Clients'}
        underTitle={'Testimonials'}
        align={'flex'}
      />

      <motion.div
        ref={carusel}
        className="carusel"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag={'x'}
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carusel"
        >
          {TestimonialCardText.map((cardText, index) => {
            return (
              <motion.div key={index} className="item">
                <TestimonialCard text={cardText.text} name={cardText.name} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
