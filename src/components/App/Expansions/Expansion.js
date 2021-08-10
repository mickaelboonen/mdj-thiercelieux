/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';

const Expansion = ({ name, image, hash }) => {
  // const location = useLocation();
  const linkStyle = {
    height: '100%',
    width: '35%',
  };
  return (
    <div className="expansion">
      <div className="expansion__image">
        <img className="expansion__image-item" src={image} alt="" />
      </div>
      <div className="expansion__title">
        <Link to={(location) => `${location.pathname}/${hash}`}>
          <h3 className="expansion__title">{name}</h3>
        </Link>
      </div>
      <Link style={linkStyle} to={(location) => `${location.pathname}/${hash}`}>
        <div className="expansion__link" />
      </Link>
    </div>
  );
};

Expansion.propTypes = {
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Expansion;
