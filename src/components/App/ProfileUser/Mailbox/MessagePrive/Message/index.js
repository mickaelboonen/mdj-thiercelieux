import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './style.scss';

const Message = ( {
  expeditor,
  icon,
  message,
  date,
  isFromMe
} ) => (
  <div className={classNames('message', { 'message--me' : isFromMe})}>
    <div className="message__icon">
      <img src={icon} alt={`icon profile de ${expeditor}`} />
    </div>
    <div className="message__content">
      <div className="message__content-pseudo">{expeditor} - <span>{date}</span></div>
      <div className="message__content-msg">{message}</div>
    </div>
  </div>
);

Message.propTypes = {

};

export default Message;
