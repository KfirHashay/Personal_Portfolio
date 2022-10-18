import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

//const initialState = {};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <StateContext.Provider
      value={{
        screenSize,
        setScreenSize,
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
