import React from 'react';
import PropTypes from 'prop-types';
import { ChartPie } from '@patternfly/react-charts';
import {
  ChevronDown,
  ChevronUp,
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
  setVillageChartData,
} from 'src/selectors/statsFunctions';

import './style.scss';
import BiDataChart from './BiDataChart';
import SideStats from './SideStats';

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
    || key === 'id'
    || key === 'user_id'
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
    werewolfSideRolesArray,
    soloSideRolesArray,
    // ambiguousSideRolesArray,
  ];
  const chartData = setChartData(array, stats.played_parties);
  const villageChartData = setVillageChartData(villagesStatsArray);
  const newVillageChartData = villageChartData;
  newVillageChartData.pop();
  const handleClick = (event) => {
    const statsElement = document.querySelector(`#${event.currentTarget.id}-list`);
    statsElement.classList.toggle('stats__category-data-lists--open');
    const spanElement = document.querySelector(`#${event.currentTarget.id}-span`);

    const isDivClosed = spanElement.textContent === 'Plus de statistiques';
    const chevronUpElement = document.querySelectorAll(`.${event.currentTarget.id}-chevron-up`);
    const chevronDownElement = document.querySelectorAll(`.${event.currentTarget.id}-chevron-down`);

    if (isDivClosed) {
      spanElement.textContent = 'Cacher les statistiques';
      chevronUpElement.forEach((el) => {
        el.style.display = 'block';
      });
      chevronDownElement.forEach((el) => {
        el.style.display = 'none';
      });
    }
    else {
      spanElement.textContent = 'Plus de statistiques';
      chevronUpElement.forEach((el) => {
        el.style.display = 'none';
      });
      chevronDownElement.forEach((el) => {
        el.style.display = 'block';
      });
    }
  };
  return (
    <div className="stats">
      <h3>MES STATISTIQUES</h3>
      <div className="stats__category">
        <h5 className="stats__category-title">NOMBRES DE PARTIES :</h5>
        <ul className="stats__category-list">
          <li className="stats__category-list-item">Nombre de parties animées: {stats.hosted_parties}</li>
          <li className="stats__category-list-item">Nombre de parties jouées: {stats.played_parties}</li>
        </ul>
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">NOMBRES DE VICTOIRES :</h5>
        <BiDataChart firstField={'Victoire'} secondField={'Défaite'} data={winningStatsArray} totalGameNumber={stats.played_parties} />
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">NOMBRES DE MORTS :</h5>
        <BiDataChart firstField={'Mort'} secondField={'Survie'} data={deathStatsArray} totalGameNumber={stats.played_parties} />
      </div>
      <div className="stats__category">
        <h5 className="stats__category-title">STATISTIQUES PAR ROLES CACHÉS :</h5>
        <div className="stats__category-list stats__category-list--hidden-roles">
          <div className="stats__category-data">
            <ChartPie
              style={{ data: { fill: ({ datum }) => `#${datum.fill}`, stroke: '#3c4b65', strokeWidth: '5px' } }}
              ariaDesc="Average number of pets"
              ariaTitle="Donut chart example"
              constrainToVisibleArea
              data={chartData}
              height={230}
              labels={({ datum }) => `${datum.x}: ${datum.y}%`}
              width={600}
            />
            <div className="stats__category-data-legend stats__category-data-legend--sides">
              <span>Camp des Villageois</span>
              <span>Camp des Loups-Garous</span>
              <span>En Solitaire</span>
            </div>
            <div className="stats__category-data-more" id="roles-stats" onClick={handleClick}>
              <ChevronDown size={20} className="roles-stats-chevron-down" />
              <ChevronUp size={20} className="roles-stats-chevron-up" style={{ display: 'none' }} />
              <span id="roles-stats-span">Plus de statistiques</span>
              <ChevronUp size={20} className="roles-stats-chevron-up" style={{ display: 'none' }} />
              <ChevronDown size={20} className="roles-stats-chevron-down" />
            </div>
            <div id="roles-stats-list" className="stats__category-data-lists">
              <SideStats title={'Titres et Autres Rôles'} data={otherRolesArray} id={'title'} />
              <SideStats title={'Les Villageois'} data={rolesStatsArray} id={'roles'} />
              <SideStats title={'Les Loups-Garous'} data={werewolfSideRolesArray} id={'werewolves'} />
              <SideStats title={'Les Solitaires'} data={soloSideRolesArray} id={'solos'} />
              <SideStats title={'Les Ambigüs'} data={ambiguousSideRolesArray} id={'ambiguous'} />
            </div>
          </div>

        </div>
      </div>
      {villagesStatsArray[10][1] > 0 && (
        <div className="stats__category">
          <h5 className="stats__category-title">STATISTIQUES PAR ROLES DU VILLAGE :</h5>
          <div className="stats__category-data">
            <ChartPie
              style={{ data: { fill: ({ datum }) => `${datum.fill}`, stroke: '#3c4b65', strokeWidth: '5px' } }}
              ariaDesc="Average number of pets"
              ariaTitle="Pie chart example"
              constrainToVisibleArea
              data={newVillageChartData}
              height={230}
              labels={({ datum }) => `${datum.x}: ${datum.y}`}
              width={600}
            />
            <ul className="stats__category-data-legend stats__category-data-legend--village">
              {newVillageChartData.map((villager) => <li className="stats__category-data-legend-li" key={villager.x}>{villager.x}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default Stats;
