import React from "react";

import { motion } from "framer-motion";

import { useStateContext } from "../../state/context/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";
import { ReactSVG } from "react-svg";

const variants = {
  open: { x: "100%", opactity: 0 },
  closed: { x: 0, opactity: 1 },
};

function SidePanel({ toggle, check }) {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <motion.div
      initial="open"
      animate={activeMenu ? "closed" : "open"}
      transition={{ duration: 0.7, ease: "easeOut", type: "spring" }}
      exit={{
        x: "100%",
        opactity: 0,
        transition: { duration: 0.5 },
      }}
      variants={variants}
      className="sidepanel__container nav-item"
    >
      <div className="sidepanel__panel">
        <div className="sidepanel__header">
          <div className="hold"></div>
          <div className="app__sidepanel-logo">
            <ReactSVG
              afterInjection={(error, svg) => {
                if (error) {
                  console.error(error);
                  return;
                }
              }}
              className="wrapper-logo"
              src="assets/images/logo-no-background.svg"
            />
          </div>
          <button
            type="button"
            onClick={() => setActiveMenu(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="closesidepanel_Btn"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <ul className="sidepanel__links">
          {["Home", "About", "Skills", "Contact"].map((item) => (
            <li key={`link-${item}`}>
              <div />
              <a
                className="p-text"
                href={`#${item}`}
                onClick={() => setActiveMenu(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default SidePanel;
