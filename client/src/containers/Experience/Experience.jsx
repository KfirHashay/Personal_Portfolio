import React from 'react';
import { useState } from 'react';
import { TitleText } from '../../components';
import { useStateContext } from '../../state/context/ContextProvider';
import { motion, MotionConfig } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';

import { companies } from '../../utils/constant';

import { CompSelection, ResizablePanel, CompanyText } from '../../components';

const Experience = () => {
  let duration = 0.75;

  const { screenSize } = useStateContext();
  const [active, setActive] = useState('company-1');

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="Experience"
      className="exp app__flex"
    >
      <div className="exp-left">
        <TitleText
          Title={'Career Path'}
          underTitle={'Work Experience'}
          align={'flex-start'}
        />

        {screenSize < 981 ? (
          <ul className="company-list-mobile">
            {companies.map((company, index) => (
              <CompSelection
                key={company.id}
                {...company}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </ul>
        ) : (
          <ul className="company-list">
            {companies.map((company, index) => (
              <CompSelection
                key={company.id}
                {...company}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </ul>
        )}
      </div>

      <MotionConfig transition={{ duration }}>
        <div className="exp-right">
          <div className="Panel-Container">
            <motion.div
              //animation
              className="Panel"
            >
              <ResizablePanel>
                <CompanyText active={active} />
              </ResizablePanel>
            </motion.div>
          </div>
        </div>
      </MotionConfig>
    </motion.div>
  );
};

export default Experience;
