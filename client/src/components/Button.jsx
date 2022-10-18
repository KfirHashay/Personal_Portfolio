import React from "react";

const Button = ({
  bgColor,
  color,
  text,
  borderRadius,
  width,
  height,
  customClass,
}) => {
  return (
    <button
      type="button"
      style={{ background: bgColor, color, borderRadius, width, height }}
      className={`button ${customClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
