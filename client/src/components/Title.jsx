import React from "react";

const Title = ({ Title, underTitle, align }) => {
  return (
    <div className="t-container" style={{ alignSelf: align }}>
      <div className="title-container">
        <div className="title-line"></div>
        <p>{Title}</p>
      </div>
      {underTitle ? <p className="under-title">{underTitle}</p> : null}
    </div>
  );
};

export default Title;
