/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
// TODO
const Victory = () => (
  <div className="victory">
    <p>Victoire</p>
    <p>Afficher la team gagnante</p>
    Possiblement un tableau pour montrer les différentes teams ?
    colonne = team ; ligne = player
    Au premier rendu, executer toutes les requetes pour modifier toutes les stats des joueurs qui ont un player id
  </div>
);

Victory.propTypes = {

};

export default Victory;
