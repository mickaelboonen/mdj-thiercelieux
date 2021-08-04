import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { expansions } from 'src/data/expansions';

// Image temporaire
import loupGarou from 'src/assets/pictures/roles/loup-garou.png';

import './style.scss';

const Expansions = () => {
  console.log(expansions);
  const divStyle = {
    backgroundImage: `url(${loupGarou})`,
  };
  return (
    <section className="expansions">
      <h2 className="expansions__title">Les extensions</h2>
      <div className="expansions__slider">
        <ChevronLeft size={50} />
        <div className="expansions__slider-item" style={divStyle}>
          <p className="expansions__slider-item-name">{expansions[0].name}</p>
        </div>
        <ChevronRight size={50} />
      </div>
    </section>
  );
};

Expansions.propTypes = {

};

export default Expansions;
