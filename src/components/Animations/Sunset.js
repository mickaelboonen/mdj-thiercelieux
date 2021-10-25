import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

import { setWinnerStatus } from 'src/selectors/setGameFunctions';

const Sunset = ({ setGame, setNight, isGameSet, newspaper, players }) => {
  const history = useHistory();
  useEffect(() => {
    let countdown = 5000;
    let url = '/partie-en-cours';
    if (isGameSet) {
      countdown = 3000;
      // TODO : Lovers don't work
      const winner = setWinnerStatus(newspaper, players);
      console.log(winner);

      url += '/nuit-sur-thiercelieux';
      if (winner !== '') {
        // lien vers la page de victoire
        url = '';
      }
    }
    setTimeout(() => {
      history.push(url);
    }, countdown);

    if (isGameSet) {
      countdown = 3000;
      setNight();
    }
    else {
      setGame();
    }
  }, []);
  return (
    <div className="sunset">Sunset</div>
  );
};

Sunset.propTypes = {
  setGame: PropTypes.func.isRequired,
  setNight: PropTypes.func.isRequired,
  isGameSet: PropTypes.bool.isRequired,
};

export default Sunset;
