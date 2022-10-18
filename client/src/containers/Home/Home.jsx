import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";

import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Work from "../Work/Work";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Work />
    </>
  );
};

export default AppWrap(MotionWrap(Home, "home"), "home");
