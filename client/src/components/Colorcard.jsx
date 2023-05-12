import React from "react";
import { MdOutlineContentCopy } from ".";
import { motion } from "framer-motion";

const Colorcard = ({ name, role, color }) => {
  const CopyColor = async () => {
    await navigator.clipboard.writeText(color).then(alert("Text copied"));
  };

  return (
    <motion.div
      whileHover={{ scale: [1, 1.02] }}
      transition={{ duration: 0.35 }}
      className="card"
    >
      <div className="color_card-title">
        <p>{name}</p>
      </div>
      <div className="color_card-top" style={{ backgroundColor: color }}></div>

      <div className="color_card-bottom">
        <div className="colorHex">
          <p>{role}</p>
          <p>{color}</p>
        </div>

        <motion.div
          className="copy"
          onClick={() => {
            CopyColor();
          }}
        >
          <motion.div
            whileHover={{ scale: [1, 0.92] }}
            transition={{ duration: 0.25 }}
          >
            <MdOutlineContentCopy />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Colorcard;
