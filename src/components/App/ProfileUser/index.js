import React from 'react';
import PropTypes from 'prop-types';

import ProfileInfo from './ProfileInfo';
import BadgesUser from './BadgesUser';
import MenuUser from './MenuUser';

import './style.scss';


const ProfileUser = () => (
  <div>
      <ProfileInfo />
      <BadgesUser />
      <MenuUser />
  </div>
);

ProfileUser.propTypes = {

};

export default ProfileUser;
