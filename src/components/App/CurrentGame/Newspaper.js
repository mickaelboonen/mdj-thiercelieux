import React from 'react';
import PropTypes from 'prop-types';
import { X, Moon } from 'react-feather';
import { useHistory } from 'react-router-dom';
import hunterPicture from 'src/assets/pictures/roles/chasseur.png';

import './style.scss';

const Newspaper = ({ newspaper }) => {
  // On click, closes the newspaper
  const handleCloseClick = () => {
    const newspaperElement = document.querySelector('.newspaper');
    newspaperElement.classList.toggle('newspaper--closed');
  };

  const deadHunterMessage = "Le Chasseur a 30 secondes pour tuer quelqu'un avant de mourir de ses blessures.";
  // If the dead hunter message is in the array, returns true;
  const deadHunter = newspaper.indexOf(deadHunterMessage) >= 0;

  const history = useHistory();
  // Sends to the hunter action page
  const handleHunterClick = () => {
    history.push('/partie-en-cours/jour/chasseur');
  };
  return (
    <div className="newspaper">
      {!deadHunter && (
      <div className="newspaper__close-button">
        <X onClick={handleCloseClick} />
      </div>
      )}
      <div className="newspaper__container">
        <div className="newspaper__container-header">
          <Moon />
          <h5 className="newspaper__container-header__title">Le Lupin</h5>
          <Moon />
          <p className="newspaper__container-header__breaking-news">BREAKING NEWS</p>
        </div>
        <ul className="newspaper__container-list">
          {newspaper.map((news) => (
            <li className="newspaper__container-list-item" key={news}>
              {news}
            </li>
          ))}
        </ul>
        {deadHunter && (
          <div className="newspaper__container-hunter">
            <img src={hunterPicture} alt="Carte du Chasseur" onClick={handleHunterClick} />
            <p>Cliquez sur l'image</p>
          </div>
        )}
      </div>
    </div>
  );
};

Newspaper.propTypes = {
  newspaper: PropTypes.array.isRequired,
};

export default Newspaper;
