import React, { useState, useEffect } from "react";
import { Navbar, Loader } from "../components";
//import { Footer } from "../components";

import { motion } from "framer-motion";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, []);

    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <motion.div
              animate={{ opacity: [0, 0, 1] }}
              transition={{ type: "spring", duration: 1, ease: "easeOut" }}
            >
              <Navbar />
            </motion.div>
            <div id={idName} className={`app__container ${classNames}`}>
              <div className="app__wrapper app__flex">
                <Component />
              </div>
            </div>
            {/* <Footer /> */}
          </div>
        )}
      </>
    );
  };

export default AppWrap;
