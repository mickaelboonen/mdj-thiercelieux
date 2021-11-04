import React from 'react';
import PropTypes from 'prop-types';
import { ChartDonut } from '@patternfly/react-charts';

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
  const array = [rolesStatsArray, soloSideRolesArray, ambiguousSideRolesArray, werewolfSideRolesArray];
  console.log(array);
  const chartData = setChartData(array, stats.played_parties);
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
        <div className="stats__category-list stats__category-list--hidden-roles">
          <div className="stats__category-chart">
            {/* {otherRolesArray.map((key) => (
              <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
            ))} */}
            <ChartDonut
              ariaDesc="Average number of pets"
              ariaTitle="Donut chart example"
              constrainToVisibleArea={true}
              data={// chartData
                [
                  { x: 'Village', y: 4 },
                  { x: 'Loup-Garou', y: 10 },
                  { x: 'Ambigü', y: 2 },
                  { x: 'Solitaire', y: 1 },
                ]
              }
              height={200}
              labels={({ datum }) => `${datum.x}: ${datum.y}%`}
              // legendData={[
              //   { name: `Village: ${rolesStatsArray[rolesStatsArray.length - 1][1]}` },
              //   { name: `Loup-Garou: ${werewolfSideRolesArray[werewolfSideRolesArray.length - 1][1]}` },
              //   { name: `Ambigü: ${ambiguousSideRolesArray[ambiguousSideRolesArray.length - 1][1]}` },
              //   { name: `Solitaire: ${soloSideRolesArray[soloSideRolesArray.length - 1][1]}` },
              // ]}
              // legendPosition="bottom"
              // padding={{
              //   bottom: 70, // Adjusted to accommodate legend
              //   left: 20,
              //   right: 50, // Adjusted to accommodate subTitle
              //   top: 20,
              // }}
              subTitle="Pets"
              subTitlePosition="center"
              title=""
              width={400}
            />
            <div>
              {chartData.map((data) => (
                <p className={`p-${data.color}`}>{data.x} : {data.y}</p>
              ))}
            </div>
          </div>
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
