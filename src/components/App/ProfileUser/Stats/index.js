import React from 'react';
import PropTypes from 'prop-types';
import { ChartDonut, ChartPie } from '@patternfly/react-charts';
// TEMPORARY
import {
  ChevronDown,
  User,
  Heart,
  Users,
  Gitlab,
  Target,
  Coffee,
} from 'react-feather';

import {
  setWinningStats,
  setDeathStats,
  setVillageSideRolesStats,
  setVillageStats,
  setWerewolfSideRolesStats,
  setSoloSideRolesStats,
  setAmbiguousSideRolesStats,
  setOtherRolesStats,
  setChartData,
} from 'src/selectors/statsFunctions';

import './style.scss';

const Stats = ({ stats }) => {
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
    || key.includes('ed_at')) {
      return;
    }
    return key;
  });
  const filteredRolesStats = rolesStats.filter((key) => key !== undefined);
  const rolesStatsArray = setVillageSideRolesStats(filteredRolesStats, stats);
  const villagesStatsArray = setVillageStats(rolesStats, stats);
  const werewolfSideRolesArray = setWerewolfSideRolesStats(filteredRolesStats, stats);
  const soloSideRolesArray = setSoloSideRolesStats(filteredRolesStats, stats);
  const ambiguousSideRolesArray = setAmbiguousSideRolesStats(filteredRolesStats, stats);
  const otherRolesArray = setOtherRolesStats(filteredRolesStats, stats);
  const array = [
    rolesStatsArray,
    soloSideRolesArray,
    ambiguousSideRolesArray,
    werewolfSideRolesArray,
  ];
  const chartData = setChartData(array, stats.played_parties);
  console.log(chartData);
  const handleClick = (event) => {
    const statsElement = document.querySelector(`#${event.currentTarget.parentNode.id}-list`);
    statsElement.classList.toggle('stats__category-data-list--open');
  };
  return (
    <div className="stats">
      <h3>Stats</h3>
      <div className="stats__category">
        <h5 className="stats__category-title">NOMBRES DE PARTIES :</h5>
        <ul className="stats__category-list">
          <li className="stats__category-list-item">Animées: {stats.hosted_parties}</li>
          <li className="stats__category-list-item">Jouées: {stats.played_parties}</li>
        </ul>
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">NOMBRES DE VICTOIRES :</h5>
        {/* <div style={{ :height: '230px', width: '350px' }}> */}

        <div className="stats__category-data">
          <ChartPie
            style={{ data: { fill: ({ datum }) => datum.fill } }}
            ariaDesc="Winning statistics of the player"
            ariaTitle="Winning pie chart"
            constrainToVisibleArea
            data={[{ x: 'Défaite', y: stats.played_parties - winningStatsArray[0][1], fill: '#760817' }, { x: 'Victoire', y: winningStatsArray[0][1], fill: '#1a1a1a' }]}
            height={230}
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
            width={600}
          />
          <div>Legend</div>
          <p id="winning-stats">Plus de statistiques <ChevronDown onClick={handleClick} /></p>
          <ul id="winning-stats-list" className="stats__category-data-list">
            {/* {winningStatsArray.map((key) => (
              <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
            ))} */}
            <li><Users /> = 70%</li>
            <li><Gitlab /> = 15%</li>
            <li><User /> = 10%</li>
            <li><Heart /> = 5%</li>
          </ul>
        </div>
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">NOMBRES DE MORTS :</h5>
        <div className="stats__category-data">
          <ChartPie
            style={{ data: { fill: ({ datum }) => datum.fill } }}
            ariaDesc="Winning statistics of the player"
            ariaTitle="Winning pie chart"
            constrainToVisibleArea
            data={[{ x: 'Défaite', y: stats.played_parties - deathStatsArray[0][1], fill: '#760817' }, { x: 'Victoire', y: deathStatsArray[0][1], fill: '#1a1a1a' }]}
            height={230}
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
            width={600}
          />
          <div>Legend</div>
          <p id="death-stats">Plus de statistiques <ChevronDown onClick={handleClick} /></p>
          <ul id="death-stats-list" className="stats__category-data-list">
            {/* {deathStatsArray.map((key) => (
              <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
            ))} */}
            <li><Users /> = 70%</li>
            <li><Gitlab /> = 15%</li>
            <li><Target /> = 10%</li>
            <li><Heart /> = 5%</li>
            <li><Coffee /> = 5%</li>
          </ul>
        </div>
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">STATISTIQUES PAR ROLES CACHÉS :</h5>
        <div className="stats__category-list stats__category-list--hidden-roles">
          <div className="stats__category-data">
            {/* {otherRolesArray.map((key) => (
              <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
            ))} */}
            <ChartPie
              style={{ data: { fill: ({ datum }) => `#${datum.fill}` } }}
              ariaDesc="Average number of pets"
              ariaTitle="Donut chart example"
              constrainToVisibleArea
              data={chartData}
              height={230}
              labels={({ datum }) => `${datum.x}: ${datum.y}%`}
              width={600}
            />
            <div>
              {chartData.map((data) => (
                <p className={`p-${data.fill}`}>{data.x} : {data.y}</p>
              ))}
            </div>
            <div>Legend</div>
            <p id="roles-stats">Plus de statistiques <ChevronDown onClick={handleClick} /></p>
            <div id="roles-stats-list" className="stats__category-data-list">
              {/* A ARRANGER */}
              <ul className="stats__category-list__sublist">
                {rolesStatsArray.map((key) => (
                  <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
                ))}
              </ul>
              <ul className="stats__category-list__sublist">
                {werewolfSideRolesArray.map((key) => (
                  <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
                ))}
              </ul>
              <ul className="stats__category-list__sublist">
                {soloSideRolesArray.map((key) => (
                  <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
                ))}
              </ul>
              <ul className="stats__category-list__sublist">
                {ambiguousSideRolesArray.map((key) => (
                  <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">STATISTIQUES PAR ROLES DU VILLAGE :</h5>
        <ul className="stats__category-list">
          {villagesStatsArray.map((key) => (
            <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default Stats;
