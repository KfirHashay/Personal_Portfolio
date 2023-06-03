import { motion, useAnimation } from 'framer-motion';
import { BeatLoader } from 'react-spinners';
import { useState } from 'react';

function Uploadbtn({ children, variant, func }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const textControls = useAnimation();
  const loadingControls = useAnimation();
  const doneControls = useAnimation();
  const colorDarkGray = '#111827';
  const colorWhite = '#ffffff';

  const animate = async () => {
    setIsAnimating(true);
    textControls.start({
      opacity: 0,
      y: -2,
      transition: { duration: 0.45 },
    });

    await loadingControls.start({
      zIndex: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, delay: 0.25 },
    });
    textControls.start({
      x: 9,
    });
    await loadingControls.start({
      zIndex: 1,
      y: 4,
      opacity: 0,
      transition: { duration: 0.65, delay: 0.45 },
    });
    await Promise.all([
      doneControls.start({
        zIndex: 1,
        y: 0,
        opacity: 1,
        transition: { duration: 0.49 },
      }),
      textControls.start({
        zIndex: 1,
        y: 0,
        opacity: 1,
        transition: { duration: 0.55 },
      }),
    ]);
    doneControls.start({
      x: -9,
      opacity: 0,
      transition: { duration: 0.45, delay: 0.2 },
    });
    await textControls.start({
      y: 0,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    });
    doneControls.start({
      y: -4,
      x: 0,
      opacity: 0,
    });
    setIsAnimating(false);
  };

  return (
    <button
      className={`${variant} upload-button`}
      onClick={() => {
        !isAnimating && animate();
        func();
      }}
    >
      <motion.div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={doneControls}
          className="checkmark-wrapper"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgb(255, 2, 102)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
        <motion.span
          className="uploadBtnText"
          initial={{ opacity: 1 }}
          animate={textControls}
        >
          {children}
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={loadingControls}
          className="loader-wrapper"
        >
          <BeatLoader
            color={variant === 'primary' ? colorWhite : colorDarkGray}
            size={8}
          />
        </motion.div>
      </motion.div>
    </button>
  );
}

export default Uploadbtn;
