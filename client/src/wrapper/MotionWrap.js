import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div
        animate={{ y: [100, 70, 0], opacity: [0, 0, 1] }}
        transition={{ type: "spring", duration: 0.7, ease: "easeOut" }}
        className={`${classNames}`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
