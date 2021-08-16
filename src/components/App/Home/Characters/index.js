import React, { useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'react-feather';
import { hiddenRoles } from 'src/data/hiddenRoles';

import { generateRandomNumber } from 'src/selectors/generateRandomNumber';
import PropTypes from 'prop-types';

import Flipcard from 'src/components/Flipcard';
import './style.scss';

const Characters = ({ fetchRandomRoles, roleToDisplay, displayNewRole }) => {
  useEffect(() => {
    fetchRandomRoles();
  }, []);

  const handleClickOnChevron = (event) => {
    let newIndexValue = 1;
    if (event.currentTarget.id === 'characters__slider-left-chevron') {
      newIndexValue = -1;
    }
    displayNewRole(newIndexValue, roleToDisplay.id);
  };

  return (
    <section className="characters">
      <h2 className="characters__title">Quelques personnages</h2>
      <div className="characters__slider">
        <ChevronLeft size={50} id="characters__slider-left-chevron" onClick={handleClickOnChevron} />
        <div className="characters__slider-flipcard">
          <Flipcard role={roleToDisplay} />
        </div>
        <ChevronRight size={50} id="characters__slider-right-chevron" onClick={handleClickOnChevron} />
      </div>
      {/* A METTRE EN LINK */}
      <a href="#" className="characters__link">Viens découvrir les autres rôles</a>
    </section>
  );
};

Characters.propTypes = {

};

export default Characters;
