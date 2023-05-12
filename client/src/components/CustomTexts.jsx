import { motion } from 'framer-motion';
import { textContainer, textVariant2, textVariant3 } from '../utils/motion';

export const TitleText = ({ Title, underTitle, align }) => {
  return (
    <div className="t-container" style={{ alignSelf: align }}>
      <div className="title-container">
        <div className="title-line"></div>

        <motion.p variants={textContainer}>
          {Array.from(Title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
      </div>
      {underTitle ? (
        <motion.p
          variants={textVariant3}
          initial="hidden"
          whileInView="show"
          className="under-title"
        >
          {underTitle}
        </motion.p>
      ) : null}
    </div>
  );
};
