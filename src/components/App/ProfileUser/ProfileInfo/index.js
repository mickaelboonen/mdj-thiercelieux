import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProfileInfo = () => (
  <div className="profileinfo">
      <img src="https://zupimages.net/up/21/31/tonc.png" alt="" className="profileinfo__avatar" />
      <div className="profileinfo__username">pseudo</div>
  </div>
);

ProfileInfo.propTypes = {

};

export default ProfileInfo;
