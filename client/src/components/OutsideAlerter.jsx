import React, { useRef, useEffect } from "react";
import { useStateContext } from "../state/context/ContextProvider";

function useOutsideAlerter(ref) {
  const { setActiveMenu } = useStateContext();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActiveMenu(false);
        console.log("clicked2");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setActiveMenu]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideAlerter;
