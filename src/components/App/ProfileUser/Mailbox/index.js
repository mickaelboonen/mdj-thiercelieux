import React from 'react';
import PropTypes from 'prop-types';


import './style.scss';
import Messages from 'src/containers/App/Mailbox/Messages';

const Mailbox = ({ mails, selectAll, deleteConversation })  => {

  const sortedMails = mails.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  const handleSelectOptions = (event) => {
    selectAll(event.currentTarget.textContent);
  };

  const handleDelete = () => {
    deleteConversation();
  };

  return (
    <div className="mailbox">
      <span className="mailbox__title">Ma messagerie</span>
      <div className="mailbox__newmess">Nouveau</div>
      <div className="mailbox__select">
        <span className="mailbox__select-opt" onClick={handleSelectOptions}>Tout sélectionner</span>
        <span className="mailbox__select-opt" onClick={handleSelectOptions}>Tout désélectionner</span>
      </div>
      <div className="mailbox__content">
          {sortedMails.map((mail) => 
          <Messages key={mail.id} {...mail} />
          )}
      </div>

      <div className="mailbox__select">
        <span className="mailbox__select-opt" onClick={handleSelectOptions} >Tout sélectionner</span>
        <span className="mailbox__select-opt" onClick={handleSelectOptions}>Tout désélectionner</span>
      </div>
      <div className="mailbox__newmess">Nouveau</div>
      <div className="mailbox__options" onClick={handleDelete}>Supprimer</div>
    </div>
  );
}

Mailbox.propTypes = {
  mails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,

  // FUNCTIONS
  selectAll: PropTypes.func.isRequired,
  deleteConversation: PropTypes.func.isRequired,
}

export default Mailbox;
