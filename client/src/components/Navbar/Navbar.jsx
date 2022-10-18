import React from "react";

import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import SidePanel from "./SidePanel";
import { OutsideAlerter, HiMenuAlt1, SunMoon, Button } from "../index";

import { useStateContext } from "../../state/context/ContextProvider";
import { ReactSVG } from "react-svg";

function NavBar() {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <>
      <nav className="app__navbar">
        <button
          type="button"
          onClick={() => setActiveMenu(true)}
          className="brgr"
        >
          <HiMenuAlt1 className="brgr" />
        </button>

        <div className="app__navbar-logo">
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

        <ul className="app__navbar-links">
          {["Home", "About", "Skills", "Contact"].map((item) => (
            <li className="p-text" key={`link-${item}`}>
              <div />
              <Link className="p-text" href={`#${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="right">
          <div className="sunmoon">
            <SunMoon />
          </div>
          <Button
            customClass={"Resume__btn"}
            text={"Resume"}
            borderRadius={"4px"}
            width={"85px"}
            height={"45px"}
          />
        </div>
      </nav>

      <OutsideAlerter>
        <AnimatePresence initial={false}>
          {activeMenu && <SidePanel />}
        </AnimatePresence>
      </OutsideAlerter>
    </>
  );
}

export default NavBar;
