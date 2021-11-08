import React from 'react';
import PropTypes from 'prop-types';
import { ChartPie } from '@patternfly/react-charts';
import {
  ChevronDown,
  ChevronUp,
  User,
  Heart,
  Users,
  Gitlab,
  Target,
  Coffee,
} from 'react-feather';

import './style.scss';

const BiDataChart = ({
  firstField,
  secondField,
  data,
  totalGameNumber,
}) => {
  let className = firstField === 'Victoire' ? 'winning' : 'death';
  if (firstField === 'Village') {
    className = 'village';
  }
  const percent = (x, y) => Math.round((x * 100) / y);
  const handleClick = (event) => {
    const statsElement = document.querySelector(`#${event.currentTarget.id}-list`);
    statsElement.classList.toggle('stats__category-data-list--open');

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
    <div className="stats__category-data">
      <ChartPie
        style={{ data: { fill: ({ datum }) => datum.fill, stroke: '#3c4b65', strokeWidth: '5px' } }}
        ariaDesc="Winning statistics of the player"
        ariaTitle="Winning pie chart"
        constrainToVisibleArea
        data={[
          { x: secondField, y: percent(totalGameNumber - data[0][1], totalGameNumber), fill: '#760817' },
          { x: firstField, y: percent(data[0][1], totalGameNumber), fill: '#dfc68a' },
        ]}
        height={230}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        width={600}
      />
      <div className="stats__category-data-legend">
        <span>{firstField}</span>
        <span>{secondField}</span>
      </div>
      <div className="stats__category-data-more" id={`${className}-stats`} onClick={handleClick}>
        <ChevronDown size={20} className={`${className}-stats-chevron-down`} />
        <ChevronUp size={20} className={`${className}-stats-chevron-up`} style={{ display: 'none' }} />
        <span id={`${className}-stats-span`}>Plus de statistiques</span>
        <ChevronUp size={20} className={`${className}-stats-chevron-up`} style={{ display: 'none' }} />
        <ChevronDown size={20} className={`${className}-stats-chevron-down`} />
      </div>
      {firstField === 'Victoire' && (
        <ul id={`${className}-stats-list`} className="stats__category-data-list">
          <li><Users /> = {percent(data[1][1], data[0][1])}%</li>
          <li><Gitlab /> = {percent(data[2][1], data[0][1])}%</li>
          <li><User /> = {percent(data[3][1], data[0][1])}%</li>
          <li><Heart /> = {percent(data[4][1], data[0][1])}%</li>
        </ul>
      )}

      {firstField === 'Mort' && (
        <ul id={`${className}-stats-list`} className="stats__category-data-list">
          <li><Users /> = {percent(data[4][1], data[0][1])}%</li>
          <li><Gitlab /> = {percent(data[1][1], data[0][1])}%</li>
          <li><Target /> = {percent(data[2][1], data[0][1])}%</li>
          <li><Heart /> = {percent(data[5][1], data[0][1])}%</li>
          <li><Coffee /> = {percent(data[3][1], data[0][1])}%</li>
        </ul>
      )}
      {firstField === 'Village' && (
        <ul id={`${className}-stats-list`} className="stats__category-data-list">
          {data.map((key) => (
            <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

BiDataChart.propTypes = {
  firstField: PropTypes.string.isRequired,
  secondField: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  totalGameNumber: PropTypes.number.isRequired,
};

export default BiDataChart;
