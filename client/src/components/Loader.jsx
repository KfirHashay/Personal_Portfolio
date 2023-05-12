import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      id="preloader"
      animate={{ opacity: [1, 0, 0] }}
      transition={{ type: 'spring', duration: 3.8, ease: 'easeOut' }}
    >
      <div id="loader"></div>
    </motion.div>
  );
};

export default Loader;
