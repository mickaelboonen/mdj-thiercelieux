/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

import './style.scss';
import Expansion from './Expansion';

const Expansions = ({ expansionsArray }) => {
  const location = useLocation().pathname.split('/');

  useEffect(() => {
    const pathElementHeight = document.querySelector('.games__path').offsetHeight;
    console.log(pathElementHeight);
  })
  
  return (
    <div className="games">
      <div className="games__path">
        {/* <Link to={location[0]}> Accueil </Link> &gt; <Link to={`/${location[1]}`}>Les jeux </Link> */}
      </div>
      <h2 className="games__title">Les Extensions</h2>
      <div className="games__list">
        {expansionsArray.map((expansion) => <Expansion key={expansion.id} {...expansion} />)}
      </div>
    </div>
  );
};

Expansions.propTypes = {
  expansionsArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Expansions;
