import React from 'react';
import PropTypes from 'prop-types';
import { Award } from 'react-feather';

import './style.scss';

const BadgesUser = () => (
  <div className="badgesUser">
    <div className="badgesUser__content">
      <Award size={40} className="badgesUser__award"/>
      <Award size={40} className="badgesUser__award"/>
      <Award size={40} className="badgesUser__award"/>
      <Award size={40} className="badgesUser__award"/>
    </div>
  </div>
);

BadgesUser.propTypes = {

};

export default BadgesUser;
