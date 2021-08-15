import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import './style.scss';


const MessagePrive = () => (
  <div className="messageprive">
      <div className="messageprive__title">Ma conversation</div>
      <Message />
  </div>
);

MessagePrive.propTypes = {

};

export default MessagePrive;
