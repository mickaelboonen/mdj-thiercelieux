import React from 'react';
import PropTypes from 'prop-types';
import AddPlayer from 'src/containers/App/Configuration/AddPlayer';
import { Link, useHistory, useLocation } from 'react-router-dom';

import '../style.scss';
import Player from './Player';

const Step2 = ({
  configuration,
  players,
  addNewPlayer,
  addingNewPlayer,
  currentStep,
  setRolesRandomly,
}) => {
  let { playersNumber } = configuration;
  const numberSavedPlayers = players.length;
  playersNumber = Number(playersNumber);

  const history = useHistory();


  const handleClickToAdd = () => {
    addNewPlayer();
  };

  const handleClickToValidate = () => {
    // Transférer toutes les données dans un reducer pour le jeu et renommer celui la en config ?
    // Effectuer les calculs si besoin / Créer les objets players avec toutes les propriétés
    // Lancer l'animation
  };

  const handleClickToSetRoles = () => {
    // Fonction pour l'attribution des roles random
    setRolesRandomly();
    history.push('/configurer-ma-partie/les-joueurs?mode=aleatoire&visible=vrai');
  };
  let areRolesAttributed = false;
  const playerWithoutRole = players.filter((player) => player.hiddenRole === '');
  if (playerWithoutRole.length === 0) {
    areRolesAttributed = true;
  }
  const location = useLocation();
  let randomMode = false;
  let visibleMode = false;
  console.log(location.search);
  if (location.search === '?mode=aleatoire') {
    randomMode = true;
  } 
  if (location.search === '?mode=aleatoire&visible=vrai') {
    visibleMode = true;
  }
  return (
    <div className="configuration__settings">
      {!addingNewPlayer && (
      <div className="configuration__settings-container">
        <div className="configuration__settings-players">
          <div className="configuration__settings-players-header">
            <span>Liste des Joueurs</span>
            <span>{numberSavedPlayers} / {playersNumber}</span>
          </div>
          <ul className="configuration__settings-players-list">
            {players.map((player) => (
              <Player
                key={player.id}
                showRoles={!randomMode}
                {...player}
              />
            ))}
          </ul>
          {numberSavedPlayers !== playersNumber && (
          <div className="configuration__settings-players-add">
            <button type="button" onClick={handleClickToAdd}>+</button>
          </div>
          )}
        </div>
        <div className="configuration__settings-buttons">
          {(numberSavedPlayers === playersNumber && (randomMode || visibleMode)) && (
          <button
            className="configuration__settings-buttons-item"
            type="button"
            onClick={handleClickToSetRoles}
          >
            Attribuer les roles
          </button>
          )}
          {(numberSavedPlayers === playersNumber && areRolesAttributed) && (
          <button
            className="configuration__settings-buttons-item"
            type="button"
            onClick={handleClickToValidate}
          >
            Valider
          </button>
          )}
          <span className="configuration__settings-buttons-back">
            <Link to="/configurer-ma-partie/etape/1">
              Retour
            </Link>
          </span>
        </div>
      </div>
      )}
      {addingNewPlayer && <AddPlayer currentStep={currentStep} />}
    </div>
  );
};

Step2.propTypes = {
  // configuration: PropTypes.objectOf(PropTypes.shape({
  //   playersNumber: PropTypes.number.isRequired,
  // })).isRequired,
  configuration: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  addingNewPlayer: PropTypes.bool.isRequired,
  addNewPlayer: PropTypes.func.isRequired,
  currentStep: PropTypes.string.isRequired,

};

export default Step2;
