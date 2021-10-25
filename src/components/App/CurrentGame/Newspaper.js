import React from 'react';
import PropTypes from 'prop-types';
import { X, Moon } from 'react-feather';
import hunterPicture from 'src/assets/pictures/roles/chasseur.png';

import './style.scss';
import { useHistory } from 'react-router-dom';

const Newspaper = ({ newspaper }) => {
  const handleClick = () => {
    const newspaperElement = document.querySelector('.newspaper');
    newspaperElement.classList.toggle('newspaper--closed');
  };

  const deadHunterMessage = "Le Chasseur a 30 secondes pour tuer quelqu'un avant de mourir de ses blessures.";
  const deadHunter = newspaper.indexOf(deadHunterMessage) >= 0;
  console.log(deadHunter);

  const history = useHistory();
  const handleHunterClick = () => {
    // const hunterElement = document.querySelector('.hunter');
    // hunterElement.classList.toggle('hunter--open');
    history.push('/partie-en-cours/jour/chasseur');
    // const newspaperElement = document.querySelector('.newspaper');
    // newspaperElement.classList.toggle('newspaper--closed');
  }
  return (
    <div className="newspaper">
      {!deadHunter && (
      <div className="newspaper__close-button">
        <X onClick={handleClick} />
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
            <img src={hunterPicture} alt="" onClick={handleHunterClick} />
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
