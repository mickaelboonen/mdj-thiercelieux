/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Expansion from './Expansion';

const Expansions = ({ expansionsArray }) => (
  <div className="expansion-page">
    <h2 className="expansion-page__title">Les Extensions</h2>
    <div className="expansion-page__list">
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
