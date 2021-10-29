/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  setSidesArray,
  setFinalStats,
} from 'src/selectors/victoryFunctions';

import Table from './Table';
import './style.scss';

// TODO
const Victory = ({ setStats, players, winner, patch, finalStats, changeForVictoryReducer }) => {
  const setTitle = (currentWinner) => {
    let title = '';
    if (currentWinner === 'Village') {
      title = 'Victoire du Village !';
    }
    else if (currentWinner === 'Amoureux') {
      title = 'Victoire des Amoureux';
    }
    else if (currentWinner === 'Loup-Garou') {
      title = 'Victoire des Loups-Garous';
    }
    return title;
  };
  const title = setTitle(winner);

  const componentArray = [];
  players.forEach((player) => {
    componentArray.push(player);
  });
  const werewolves = setSidesArray(componentArray, 'Loup-Garou');
  const villagers = setSidesArray(componentArray, 'Village');
  const lonely = setSidesArray(componentArray, 'Solitaire');

  useEffect(() => {
    changeForVictoryReducer();
  }, []);



  let aaaa = [...finalStats];
  if (aaaa.length > 0) {
    aaaa = setFinalStats(aaaa, winner);
  }
  // TODO TOUJOURS CE FOUTU PROBLEME D'ARRAY
  console.log(aaaa, players);

  const handleClickStats = () => {
    // const el = document.querySelector('.victory__message');
    // el.style.display = 'none';
    // setStats();
    // newFunctionForStats
  };
  return (
    <div className="victory">
      <p>{title}</p>
      <div className="victory__tables">
        <Table data={villagers} title={'Les Villageois'} />
        <Table data={werewolves} title={'Les Loups-Garous'} />
      </div>
      <div>
        {/* Seulement visible une fois que les requetes sont finies */}
        <a type="button">Nouvelle partie</a>
        <a type="button">Quitter</a>
      </div>
      <div className="victory__message">
        <div>
          {title}
          <button type="button" onClick={handleClickStats}>Cliquez sur moi</button>
        </div>
      </div>
    </div>
  );
};

Victory.propTypes = {

};

export default Victory;
