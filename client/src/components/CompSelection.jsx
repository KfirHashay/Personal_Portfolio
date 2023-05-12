import React from 'react';
import { motion } from 'framer-motion';

import { BsChevronRight, BsChevronDown } from '.';
import { fadeIn } from '../utils/motion';
import { useStateContext } from '../state/context/ContextProvider';

const CompSelection = ({ id, name, index, active, handleClick }) => {
  const { screenSize } = useStateContext();

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.4, 0.85)}
      onClick={() => handleClick(id)}
    >
      <motion.li className={`${active === id ? 'selected' : 'selection'}`}>
        {name}{' '}
        {active === id ? (
          screenSize > 981 ? (
            <BsChevronRight />
          ) : (
            <BsChevronDown />
          )
        ) : null}
      </motion.li>
    </motion.div>
  );
};

export default CompSelection;
