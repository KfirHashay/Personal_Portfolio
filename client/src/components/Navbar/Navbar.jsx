import React, {useEffect} from 'react';

import ResumePdf from '../../utils/files/KfirHashay_Resume.pdf';

import {Link} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {motion} from 'framer-motion';
import {navVariants} from '../../utils/motion';

import SidePanel from './SidePanel';
import {OutsideAlerter, HiMenuAlt1, SunMoon, Button} from '../index';

import {useStateContext} from '../../state/context/ContextProvider';
import {ReactSVG} from 'react-svg';

function NavBar() {
  const {activeMenu, setActiveMenu, setScreenSize, screenSize} = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  console.log(screenSize);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="app__navbar"
      >
        <button type="button" onClick={() => setActiveMenu(true)} className="brgr">
          <HiMenuAlt1 className="brgr" />
        </button>

        <div className="app__navbar-logo">
          <Link to={'/'}>
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
          </Link>
        </div>

        <ul className="app__navbar-links">
          {['Home', 'Portfolio', 'Skills', 'Contact'].map((item) => (
            <li className="p-text" key={`link-${item}`}>
              {item === 'Home' || item === 'Portfolio' ? (
                <Link className="p-text" to={`/${item}`}>
                  {item}
                </Link>
              ) : (
                <Link
                  className="p-text"
                  to={`#${item}`}
                  onClick={() => window.location.replace(`/#${item}`)}
                >
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="right">
          <div className="sunmoon">
            <SunMoon />
          </div>
          <Link to={ResumePdf} target="_blank" download>
            <Button
              customClass={'Resume__btn'}
              text={'Resume'}
              borderRadius={'4px'}
              width={'85px'}
              height={'45px'}
              onClick={() => console.log('Resume Clicked')}
            />
          </Link>
        </div>
      </motion.nav>

      <OutsideAlerter>
        <AnimatePresence initial={false}>{activeMenu && <SidePanel />}</AnimatePresence>
      </OutsideAlerter>
    </>
  );
}

export default NavBar;
