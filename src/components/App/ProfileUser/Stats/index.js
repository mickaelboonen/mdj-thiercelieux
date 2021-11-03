import React from 'react';
import PropTypes from 'prop-types';

import {
  setWinningStats,
  setDeathStats,
} from 'src/selectors/statsFunctions';

import './style.scss';

const Stats = ({ stats, fetchStatsForProfile }) => {
  // useEffect(() => {
  //   fetchStatsForProfile();
  // }, []);
  console.log(stats);
  const keys = Object.keys(stats);

  const winningStats = keys.filter((key) => key.includes('won'));
  const winningStatsArray = setWinningStats(winningStats, stats);
  const deathStats = keys.filter((key) => key.includes('death'));
  const deathStatsArray = setDeathStats(deathStats, stats);
  const rolesStats = keys.map((key) => {
    if (key.includes('death')
    || key.includes('won')
    || key.includes('parties')
    || key.includes('id')
    || key.includes('at')) {
      return;
    }
    return key;
  });
  const filteredRolesStats = rolesStats.filter((key) => key !== undefined);
  return (
    <div className="stats">
      <h3>Stats</h3>
      <div className="stats__category">
        <h5 className="stats__category-title">NOMBRES DE PARTIES :</h5>
        <ul className="stats__category-list">
          <li className="stats__category-list-item">Animées: {stats.hosted_parties}</li>
          <li className="stats__category-list-item">Jouées : {stats.played_parties}</li>
        </ul>
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">NOMBRES DE VICTOIRES :</h5>
        <ul className="stats__category-list">
          {winningStatsArray.map((key) => (
            <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
          ))}
        </ul>
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">NOMBRES DE MORTS :</h5>
        <ul className="stats__category-list">
          {deathStatsArray.map((key) => (
            <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
          ))}
        </ul>
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">STATISTIQUES PAR ROLES CACHÉS :</h5>
        <ul className="stats__category-list">
          {filteredRolesStats.map((key) => (
            <li className="stats__category-list-item">{key}: {stats[key]}</li>
          ))}
        </ul>
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">STATISTIQUES PAR ROLES DU VILLAGE :</h5>
        <ul className="stats__category-list">
          {filteredRolesStats.map((key) => (
            <li className="stats__category-list-item">{key}: {stats[key]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Stats.propTypes = {
  fetchStatsForProfile: PropTypes.func.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Stats;
