import React from "react";

import { FaLinkedinIn, FaGithub, Title } from "../../components";
import { motion } from "framer-motion";

import { ReactSVG } from "react-svg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="hero" className="hero app__flex">
      <div className="hero__left">
        <Title Title={"My Name Is"} />

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

        <p className="description">
          Creative front-end developer with more than +5 years of experience in
          enterprise companies and startups. Proficient in JavaScript, Angular,
          and React. Passionate about UI/UX
        </p>

        <div className="social-icons">
          <a
            className="social-button linkedin"
            href="https://www.linkedin.com/in/kfir-hashay"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>

          <a
            className="social-button github"
            href="https://github.com/KfirHashay"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon" />
          </a>

          <a
            className="social-button instagram"
            href="/#"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            className="social-button instagram"
            href="/#"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </div>

      <div className="hero__right">
        <div className="overlap">
          <motion.div
            className="back"
            initial={{ rotate: 0 }}
            animate={{ rotate: -9.95 }}
            transition={{
              type: "spring",
              duration: 5,
              ease: "easeOut",
            }}
          ></motion.div>
          <motion.div
            className="front"
            animate={{ opacity: [0, 0, 1] }}
            transition={{ type: "spring", duration: 0.7, ease: "easeOut" }}
          >
            <div className="overlap-1">
              <div className="person">
                <img className="img" src="assets/images/sssss 1.png" alt="" />
              </div>
              <div className="lines">
                <ReactSVG src="assets/images/lines.svg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
