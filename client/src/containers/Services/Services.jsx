import React from 'react';
import { motion } from 'framer-motion';

import { TitleText } from '../../components';
import { fadeIn, staggerContainer } from '../../utils/motion';

import { abouts } from '../../utils/constant';

const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="Services"
      className="services app__flex"
    >
      <TitleText Title={'Services'} underTitle={'Specialized in'} />

      <motion.div
        variants={fadeIn('up', 'tween', 0.1, 0.85)}
        className="services__cards"
      >
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="services__card-item"
            key={index}
          >
            <div className="icon">{about.icon}</div>

            <h2 style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
