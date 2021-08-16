import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';

import './style.scss';
import { Link } from 'react-router-dom';

const Expansions = ({ game, displayNewGame }) => {
  const handleClickOnChevron = (event) => {
    let newIndexValue = 1;
    if (event.currentTarget.id === 'characters__slider-left-chevron') {
      newIndexValue = -1;
    }
    displayNewGame(newIndexValue, game.id);
  };
  const divStyle = {
    backgroundImage: `url(${game.icon})`,
  };
  return (
    <section className="expansions">
      <h2 className="expansions__title">Les extensions</h2>
      <div className="expansions__slider">
        <ChevronLeft size={50} id="expansions__slider-left-chevron" onClick={handleClickOnChevron} />
        <Link to={`/les-jeux/${game.hash}`}>
          <div className="expansions__slider-item" style={divStyle}>
            <p className="expansions__slider-item-name">{game.name}</p>
          </div>
        </Link>
        <ChevronRight size={50} id="expansions__slider-right-chevron" onClick={handleClickOnChevron} />
      </div>
    </section>
  );
};

Expansions.propTypes = {

};

export default Expansions;
