import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { setSidesArray } from 'src/selectors/victoryFunctions';

import Table from './Table';
import './style.scss';

const Victory = ({
  players,
  winner,
  patch,
}) => {
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

  const werewolves = setSidesArray(players, 'Loup-Garou');
  const villagers = setSidesArray(players, 'Village');
  // const lonely = setSidesArray(players, 'Solitaire');

  useEffect(() => {
    // TODO change name
    patch();
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
  players: PropTypes.array.isRequired,
  winner: PropTypes.string.isRequired,
  patch: PropTypes.func.isRequired,
};

export default Victory;
