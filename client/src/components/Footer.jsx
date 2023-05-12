import React from 'react';

import { motion } from 'framer-motion';
import { socials } from '../utils/constant';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="footer_container"
  >
    <div className="footer">
      <div className="footer_bottom">
        <div className="footer_bottom-line" />

        <div className="footer_socials_container">
          <h4>Portfolio</h4>
          <p>Copyright © 2023 - 2022 Kfir Hashay. All rights reserved.</p>

          <div className="footer_socials">
            {socials.map((social) => (
              <motion.a
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.6, rotate: 360 }}
                transition={{ duration: 0.4, type: 'tween' }}
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
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
