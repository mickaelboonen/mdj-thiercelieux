import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Table = ({ data, title }) => (
  <table className="table">
    <thead className="table__header">
      <tr className="table__header-row">
        <th colSpan="3">{title}</th>
      </tr>
    </thead>
    <tbody className="table__body">
      {data.map((villager) => (
        <tr className="table__body-row" key={villager.id}>
          <td className="table__body-row-column">
            <img src={villager.picture} alt="" />
          </td>
          <td className="table__body-row-column">
            <p className={classNames('table__body-row-column-name', { 'table__body-row-column-name--alive': villager.isAlive })}>{villager.name}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Table;
