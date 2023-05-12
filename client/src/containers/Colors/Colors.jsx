import React from 'react';
import { AppWrap } from '../../wrapper';
import { Title } from '../../components';

import { Colorcard } from '../../components';

const colors = [
  {
    name: 'Medium Slate Blue',
    role: 'Priamry',
    color: '#7E74F1',
  },
  {
    name: 'Lavender',
    role: 'Secondary',
    color: '#EAE6FE',
  },
  {
    name: 'title1',
    color: '#F86624',
  },
  {
    name: 'Lotion',
    role: 'Body',
    color: '#FBFBFB',
  },
];

const Colors = () => {
  return (
    <div className="color app__flex">
      <Title Title={'Style Guide'} underTitle={'Color Pallete'} />
      <section className="main-section">
        {colors.map((color, index) => (
          <Colorcard
            key={index}
            name={color.name}
            role={color.role}
            color={color.color}
          />
        ))}
      </section>
    </div>
  );
};

export default AppWrap(Colors, 'color');
