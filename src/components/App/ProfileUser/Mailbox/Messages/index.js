import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Messages = () => (
  <div className="messages">
      <div className="messages__content">
          <img src="https://zupimages.net/up/21/31/tonc.png" alt="" className="messages__content-avatar" />
          <div className="messages__content-object">
          <span className="messages__content-object-username">Pseudo</span>
          <span className="messages__content-object-title">Objet du message super mega trop long de la mort qui tue trolololololololoooooooooooooooooool</span>
          </div>
          <input type="checkbox"></input>
      </div>
  </div>
);

Messages.propTypes = {

};

export default Messages;
