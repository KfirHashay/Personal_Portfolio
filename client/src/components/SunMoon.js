import React, { useState, useEffect } from "react";

const SunMoon = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "light" ? true : false
  );
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  };

  return (
    <div id="Dark">
      <input
        id="toggle"
        className="toggle"
        type="checkbox"
        defaultChecked={checked}
        onChange={() => toggleThemeChange()}
      />

      <label htmlFor="toggle" className="title"></label>
    </div>
  );
};

export default SunMoon;
