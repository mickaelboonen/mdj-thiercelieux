/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Table from './Table';
// TODO
const Victory = ({ players, winner }) => {

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

  const allSides = [];
  players.forEach((player) => {
    if (allSides.indexOf(player.side) === -1) {
      allSides.push(player.side);
    }
  });
  const werewolves = [];
  const villagers = [];
  const lonely = [];
  players.forEach((player) => {
    if (player.side === 'Loup-Garou') {
      werewolves.push(player);
    }
    else if (player.side === 'Village') {
      villagers.push(player);
    }
    else if (player.side === 'Solitaire') {
      lonely.push(player);
    }
  });
  useEffect(() => {
    // TODO
    // Au premier rendu, executer toutes les requetes pour modifier toutes les stats des joueurs qui ont un player id
  }, []);
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
    </div>
  );
};

Victory.propTypes = {

};

export default Victory;
