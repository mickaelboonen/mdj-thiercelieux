import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Messages = ({
  name,
  icon,
  object,
}) => (
  <div className="messages">
      <div className="messages__content">
          <img src={icon} alt="" className="messages__content-avatar" />
          <div className="messages__content-object">
          <span className="messages__content-object-username">{name}</span>
          <span className="messages__content-object-title">{object}</span>
          </div>
          <input type="checkbox"></input>
      </div>
  </div>
);

Messages.propTypes = {

};

export default Messages;
