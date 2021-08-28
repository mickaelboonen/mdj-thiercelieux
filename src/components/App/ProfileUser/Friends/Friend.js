import React from 'react';
import PropTypes from 'prop-types';
import { XSquare } from 'react-feather';

import './style.scss';
import { Link } from 'react-router-dom';

const Friend = ({ username }) => {
  const handleClickToDelete = (event) => {
    let clickedButtonValue = event.target.id;
    if (clickedButtonValue === '') {
      clickedButtonValue = event.target.parentNode.id;
    }
    if (window.confirm(`Voulez-vous supprimer ${clickedButtonValue} de vos amis ?`)) {

    }
  }
  return (
    <div className="friend">
      <Link to="#">
        <div className="friend__infos">
          {/* <img className="friend__infos-image" src="" alt="" /> */}
          <div className="friend__infos-image" />
          <p className="friend__infos-name">
            {username}
          </p>
        </div>
      </Link>
      <XSquare onClick={handleClickToDelete} id={username} />
    </div>
  );
};

Friend.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Friend;
