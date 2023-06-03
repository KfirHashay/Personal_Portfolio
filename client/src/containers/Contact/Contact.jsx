import React, { useState } from 'react';

import { staggerContainer } from '../../utils/motion';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

import { motion } from 'framer-motion';

import {
  MdOutlineLocationOn,
  FiPhoneCall,
  AiOutlineMail,
} from '../../components';

import ContactPanel from '../../components/ContactPanel.jsx';

const Contact = () => {
  const [NewName, setName] = useState('');
  const [NewEmail, setEmail] = useState('');
  const [NewMessage, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const MessagesRef = collection(db, 'messages');

  const SendMessage = async () => {
    await addDoc(
      MessagesRef,
      {
        name: NewName,
        email: NewEmail,
        message: NewMessage,
      },

      setTimeout(() => setIsLoading(false), 3500)
    )
      .then(
        setName(''),
        setEmail(''),
        setMessage(''),

        console.log('Sent Successfully')
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const ResetForm = () => {
    setIsLoading(!isLoading);
  };

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
        <ContactPanel
          isLoading={isLoading}
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
          func={SendMessage}
          func2={ResetForm}
        />
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
