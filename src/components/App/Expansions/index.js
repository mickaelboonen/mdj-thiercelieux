import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Expansion from './Expansion';
import Path from '../../Path';

const Expansions = ({ expansionsArray }) => (
  <div className="games">
    <Path />
    <h2 className="games__title">Les Extensions</h2>
    <div className="games__list">
      {expansionsArray.map((expansion) => <Expansion key={expansion.id} {...expansion} />)}
    </div>
  </div>
);

Expansions.propTypes = {
  expansionsArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Expansions;
