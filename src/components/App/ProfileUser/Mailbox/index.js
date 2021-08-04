import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Messages from './Messages';

const Mailbox = () => (
  <div className="mailbox">
    <span className="mailbox__title">Ma messagerie</span>
      <div className="mailbox__newmess">Nouveau</div>
      <div className="mailbox__select">
        <span className="mailbox__select-opt">Tout sélectionner</span>
        <span className="mailbox__select-opt">Tout désélectionner</span>
      </div>
      <div className="mailbox__content">
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
    </div>
    <div className="mailbox__select">
        <span className="mailbox__select-opt">Tout sélectionner</span>
        <span className="mailbox__select-opt">Tout désélectionner</span>
    </div>
    <div className="mailbox__newmess">Nouveau</div>
    <div className="mailbox__options">Supprimer</div>
  </div>
);

Mailbox.propTypes = {

};

export default Mailbox;
