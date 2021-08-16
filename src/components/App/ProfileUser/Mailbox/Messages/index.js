import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Messages = ({
  id,
  name,
  icon,
  object,
  checked,
  selectMessage,
}) => {
  const handleChange = () => {
    selectMessage(id);
    console.log('click', name, id);
  }

  return (
    <div className="messages">
        <div className="messages__content">
            <img src={icon} alt={`icon profile de ${name}`} className="messages__content-avatar" />
            <NavLink to={`/ma-messagerie/${id}`} >
              <div className="messages__content-object">
              <span className="messages__content-object-username">{name}</span>
              <span className="messages__content-object-title">{object}</span>
              </div>
            </NavLink>
            <input type="checkbox" onChange={handleChange} checked={checked} />
        </div>
    </div>
  );
};

Messages.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  object: PropTypes.string.isRequired,
};

export default Messages;
