import React from 'react';

import wolf from 'src/assets/pictures/wolf.svg';

import './style.scss';

// TODO : Regarder pourquoi le svg ne fonctionne pas (les animations)

const Logo = () => (
  <img className="logo" src={wolf} alt="Logo" />
);

export default Logo;
