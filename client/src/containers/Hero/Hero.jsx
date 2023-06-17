import React from 'react';

import {TitleText} from '../../components';
import {staggerContainer} from '../../utils/motion';

import {motion} from 'framer-motion';
import {socials} from '../../utils/constant';
import {fadeIn} from '../../utils/motion';
import {ReactSVG} from 'react-svg';
import Typewriter from 'typewriter-effect';

const variants = {
  hidden: {
    opacity: 0,
    rotate: 0,
  },
  show: {
    opacity: 1,
    rotate: -360,
    transition: {
      type: 'spring',
      duration: 2,
      stiffness: 80,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      id="hero"
      className="hero app__flex"
    >
      <motion.div variants={fadeIn('right', 'tween', 0.1, 0.85)} className="hero__left">
        <TitleText Title={'My Name Is'} />

        <Typewriter
          className="name"
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<span>Kfir</span> <span style="color: rgba(126, 116, 241, 1);"> Hashay</span>`
              )
              .pauseFor(3000)
              .deleteAll()
              .typeString(
                `<span>Web</span> <span style="color: rgba(126, 116, 241, 1);"> Dev!</span>`
              )
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />

        <div className="description">
          Creative Web developer able to build a web presence from the ground up. Proficient array
          of scripting languages and multimedia web tools. Passionate about UI/UX
          <hr className="hero_hr" />
        </div>

        <div className="social-icons">
          {socials.map((social) => (
            <motion.a
              whileInView={{opacity: 1, rotate: 0}}
              whileHover={{scale: 1.7, rotate: 360}}
              transition={{type: 'spring', duration: 0.7, ease: 'easeOut'}}
              variants={variants}
              className={`social-button ${social.name}`}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              key={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{opacity: [0, 0, 1]}}
        transition={{type: 'spring', duration: 0.7, ease: 'easeOut'}}
        className="hero__right"
      >
        <div className="overlap">
          <motion.div
            className="back"
            initial={{rotate: 0}}
            animate={{rotate: -9.95}}
            whileHover={{rotate: -12.95}}
            transition={{
              type: 'spring',
              duration: 3,
              ease: 'easeOut',
            }}
          ></motion.div>
          <motion.div className="front">
            <div className="overlap-1">
              <div className="person">
                <img
                  className="img"
                  src="assets/images/profile-removebg-preview.png"
                  alt="profile"
                />

                {/* src="assets/images/profile-removebg-preview.png" */}
              </div>
              <div className="lines">
                <ReactSVG src="assets/images/lines.svg" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
