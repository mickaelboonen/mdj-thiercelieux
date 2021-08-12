import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import classNames from 'classnames';
import Role from 'src/containers/App/Roles/Role';
import Flipcard from 'src/components/Flipcard';

import './style.scss';

const Results = ({
  data,
  flipcardData,
  onFocus,
  toggleFocus,
}) => {
  const handleClickOnX = () => {
    toggleFocus();
  };
  return (
    <div className="roles__results">
      {data.map((role) => <Role key={role.id} {...role} />)}
      <div className={classNames('roles__results-info', { 'roles__results-info--open': onFocus })}>
        <X size={40} onClick={handleClickOnX} />
        <div className="roles__results-info-flipcard">
          <Flipcard role={flipcardData} />
        </div>
      </div>
    </div>
  );
};

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,

  flipcardData: PropTypes.object.isRequired,
  // toggleFocus: PropTypes.func.isRequired,
  onFocus: PropTypes.bool.isRequired,
};

export default Results;
