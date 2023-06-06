import React from 'react';
import { motion } from 'framer-motion';

import { BsChevronRight } from '.';
import { fadeIn } from '../utils/motion';

const CompSelection = ({ id, name, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.4, 0.85)}
      onClick={() => handleClick(id)}
    >
      <motion.li
        className={`${active === id ? 'tabNoHover' : 'tabHover'} tab`}
        style={{
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        {active === id && (
          <motion.span
            layoutId="bubble"
            className="bubble_tab"
            style={{ borderRadius: 9999 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="span_tab">{name}</span>

        {active === id && (
          <motion.span
            layoutId="bubble_icon"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          >
            <BsChevronRight />
          </motion.span>
        )}
      </motion.li>
    </motion.div>
  );
};

export default CompSelection;
