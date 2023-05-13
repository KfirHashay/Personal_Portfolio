import React from 'react';
import {
  motion,
  //MotionConfig
} from 'framer-motion';

import { staggerContainer } from '../../utils/motion';

import { TitleText } from '../../components';
import { SkillBar, Edu_objects } from '../../utils/constant';

const Education = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="Skills"
      className="edu app__flex"
    >
      <div className="edu_left">
        <TitleText
          Title={'Learning Path'}
          underTitle={'Education & Skills'}
          align={'flex-start'}
        />
        <div className="edu_container">
          <div className="line"></div>
          {Edu_objects.map((obj) => {
            return (
              <div className="edu_obj" key={obj.id}>
                <div className="title">{obj.title}</div>
                <div className="degree">{obj.degree}</div>
                <div className="date">{obj.date}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="edu_right">
        <p className="description">
          For 3+ years, I have been continuously learning (by myself) in the
          field of front-end/back-end and experimenting with new technologies
          and frameworks, and here you can see a summary of my skills.
        </p>

        <div className="skill_bars">
          {SkillBar.map((skill) => {
            return (
              <div className="bar_item" key={skill.id}>
                <div className="label">{skill.label}</div>
                <div className="bar">
                  <motion.div
                    className="fill"
                    initial={{
                      width: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      width: `${(skill.proggress / skill.total) * 100}%`,
                      opacity: 1,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 80,
                      delay: 0.2,
                      duration: 5.9,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
