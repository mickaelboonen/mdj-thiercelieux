import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import './style.scss';


const MessagePrive = ({ conversations }) => {

  console.log(conversations);

  return (
    <div className="messageprive">
        <div className="messageprive__title">Ma conversation</div>
          {conversations.map((conversation) =>  {
          let isFromMe = false;
          conversation.expeditor === "Hel" ? isFromMe = true : isFromMe = false;
          return <Message key={conversation.id} {...conversation} isFromMe={isFromMe} />;}
        )};
    </div>
  );
}

MessagePrive.propTypes = {

};

export default MessagePrive;
