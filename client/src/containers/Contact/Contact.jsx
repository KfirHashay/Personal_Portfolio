import React, { useEffect, useState } from 'react';

import { staggerContainer } from '../../utils/motion';

import { motion } from 'framer-motion';
import { Uploadbtn } from '../../components';

import { MdOutlineLocationOn } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function setLoadingState() {
      await new Promise((resolve) =>
        setTimeout(() => resolve(setIsLoading(false)), 4000)
      );
    }

    setLoadingState();
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="Contact"
      className="contact app__flex"
    >
      <div className="contact_left">
        <div className="form">
          <input
            type="text"
            className="input name"
            placeholder="Name"
            required
          />
          <input className="input email" type="email" placeholder="Email" />
          <textarea type="text" className="message" placeholder="Message" />

          <div className="button-wrapper">
            <Uploadbtn isLoading={isLoading} variant="primary">
              Send Message
            </Uploadbtn>
          </div>
        </div>
      </div>

      <div className="contact_right">
        <div className="info">
          <div className="info_box">
            <div className="icon">
              <MdOutlineLocationOn />
            </div>
            <div className="info_content">
              <div className="title">Address</div>
              <div className="body">Ariel, Israel</div>
            </div>
          </div>

          <div className="info_box">
            <div className="icon">
              <FiPhoneCall />
            </div>
            <div className="info_content">
              <div className="title">Phone</div>
              <div className="body">050-8722452</div>
            </div>
          </div>

          <div className="info_box">
            <div className="icon">
              <AiOutlineMail />
            </div>
            <div className="info_content">
              <div className="title">E-mail</div>
              <div className="body">KfirHashay@outlook.com</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
