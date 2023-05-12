import React from 'react';

import { CgProfile } from '.';

const TestimonialCard = ({ text, name }) => {
  return (
    <div className="test_card">
      <CgProfile />
      <p className="p-text test_card-p">{text}</p>

      <p className="p-text test_card-p">{name}</p>
    </div>
  );
};

export default TestimonialCard;
