import React from "react";
import { Link } from "react-router-dom";
import { AppWrap } from "../../wrapper";

const NotFoundPage = () => {
  return (
    <div>
      <div>404</div>
      <Link to="/"> Go Back Home</Link>
    </div>
  );
};

export default AppWrap(NotFoundPage, "404");
