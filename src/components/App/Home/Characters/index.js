import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';

import Flipcard from 'src/components/Flipcard';
import './style.scss';

const Characters = ({ fetchRandomRoles, roleToDisplay, displayNewRole }) => {
  const { id } = roleToDisplay;
  useEffect(() => {
    fetchRandomRoles();
  }, []);

  const handleClickOnChevron = (event) => {
    let newIndexValue = 1;
    if (event.currentTarget.id === 'characters__slider-left-chevron') {
      newIndexValue = -1;
    }
    displayNewRole(newIndexValue, id);
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
      <Link to="/le-jeu/les-roles" className="characters__link">Viens découvrir les autres rôles</Link>
    </section>
  );
};

Characters.propTypes = {
  roleToDisplay: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,

  // FUNCTIONS
  displayNewRole: PropTypes.func.isRequired,
  fetchRandomRoles: PropTypes.func.isRequired,
};

export default Characters;
