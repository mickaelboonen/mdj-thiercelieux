import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ValidationBox = ({ role, currentFunction, firstValue, secondValue }) => {
  const boxElement = document.querySelector('.nightscript__confirmation');
  const handleYesClick = (event) => {
    currentFunction(boxElement.dataset.firstValue, boxElement.dataset.secondValue);
    boxElement.classList.toggle('nightscript__confirmation--open');
  };

  const handleNoClick = (event) => {
    boxElement.classList.toggle('nightscript__confirmation--open');


    // boxElement.classList.toggle('nightscript__confirmation--open');
    // if (name === 'Loup-Garou') {

    // }
    // boxElement.dataset.name = event.target.value;
  };
  return (
    <div className="nightscript__confirmation">
      <div className="nightscript__confirmation-box">
        <p>Confirmez-vous votre choix ?</p>
        <button id="buttons-button" type="button" value="yes" onClick={handleYesClick}>yes</button>
        <button type="button" value="no" onClick={handleNoClick}>no</button>
      </div>
    </div>
  );
};

ValidationBox.propTypes = {

};

export default ValidationBox;
