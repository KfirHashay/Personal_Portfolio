import React, { useState, useEffect } from 'react';
import { Navbar, Loader } from '../components';
import { Footer } from '../components';
import { AnimatePresence } from 'framer-motion';

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
        <AnimatePresence initial={false}>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div>
                <Navbar />
              </div>
              <div id={idName} className={`app__container ${classNames}`}>
                <div className="app__wrapper app__flex">
                  <br /> <br />
                  <Component />
                </div>
              </div>
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </>
    );
  };

export default AppWrap;
