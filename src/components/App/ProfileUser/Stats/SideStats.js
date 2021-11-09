import React from 'react';
import PropTypes from 'prop-types';
import {
  ChevronDown,
  ChevronUp,
} from 'react-feather';

import './style.scss';

const SideStats = ({ title, data, id }) => {
  const currentData = data;
  if (currentData[currentData.length - 1][0] === 'Total') {
    currentData.pop();
  }
  const handleClick = () => {
    const listElement = document.querySelector(`#${id}-list`);
    listElement.classList.toggle('statistics__list--open');
    const headerElement = document.querySelector(`#${id}`);
    const chevronUpElement = document.querySelector(`#${id}-chevron-up`);
    const chevronDownElement = document.querySelector(`#${id}-chevron-down`);
    if (headerElement.dataset.open === 'open') {
      chevronUpElement.style.display = 'block';
      chevronDownElement.style.display = 'none';
      headerElement.dataset.open = 'closed';
    }
    else {
      chevronUpElement.style.display = 'none';
      chevronDownElement.style.display = 'block';
      headerElement.dataset.open = 'open';
    }
  };
  return (
    <div className="statistics">
      <div id={id} data-open="closed" className="statistics__header" onClick={handleClick}>
        {title} <ChevronDown size={20} id={`${id}-chevron-down`} /> <ChevronUp size={20} id={`${id}-chevron-up`} style={{ display: 'none' }} />
      </div>
      <ul id={`${id}-list`} className="statistics__list">
        {currentData.map((key) => (
          <li className="stats__category-list-item">{key[0]}: {key[1]}</li>
        ))}
      </ul>
    </div>
  );
};

SideStats.propTypes = {
  data: PropTypes.array.isRequired,

  // STRINGS
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SideStats;
