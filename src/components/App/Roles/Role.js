import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Role = ({ image }) => (
  <div className="role">
    <img className="role__image" src={'image'} alt="" />
  </div>
);

Role.propTypes = {

};

export default Role;
