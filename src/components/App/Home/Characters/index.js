import React from 'react';
import { ChevronRight, ChevronLeft } from 'react-feather';
import { hiddenRoles } from 'src/data/hiddenRoles';

import { generateRandomNumber } from 'src/selectors/generateRandomNumber';
import PropTypes from 'prop-types';

import Flipcard from 'src/components/Flipcard';
import './style.scss';

const Characters = () => {
  const idArray = [];

  /**
   * returns Array of numbers
   */
  generateRandomNumber(idArray);

  const rolesToDisplay = [];

  /**
   * Pushes into rolesToDisplay the roles whose ids match the numbers in the idArray
   */
  hiddenRoles.map((role) => {
    if (idArray.indexOf(role.id) >= 0) {
      rolesToDisplay.push(role);
    }
  });

  return (
    <section className="characters">
      <h2 className="characters__title">Quelques personnages</h2>
      <div className="characters__slider">
        <ChevronLeft size={50} />
        <div className="characters__slider-flipcard">
          <Flipcard role={rolesToDisplay[0]} />
        </div>
        <ChevronRight size={50} />
      </div>
      {/* A METTRE EN LINK */}
      <a href="#" className="characters__link">Viens découvrir les autres rôles</a>
    </section>
  );
};

Characters.propTypes = {

};

export default Characters;
