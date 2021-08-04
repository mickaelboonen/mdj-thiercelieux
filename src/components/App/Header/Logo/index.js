import React from 'react';
import { Link } from 'react-router-dom';

import wolf from 'src/assets/pictures/wolf.svg';

import './style.scss';

// TODO : Regarder pourquoi le svg ne fonctionne pas (les animations) + recadrer

const Logo = () => { 
  const linkStyle = {
    height: '100%',
    width: '4rem',
  };
  return (
    <Link to="/" style={linkStyle}>
      <img className="logo" src={wolf} alt="Logo" />
    </Link>
  );
};

export default Logo;
