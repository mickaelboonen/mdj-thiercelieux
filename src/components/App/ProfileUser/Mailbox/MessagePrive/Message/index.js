import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Message = () => (
  <div className="message">
    <div className="message__icon"><img src="https://zupimages.net/up/21/31/tonc.png" alt="" /></div>
    <div className="message__content">
    <div className="message__content-pseudo">pseudo</div>
    <div className="message__content-msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquid commodi recusandae fugiat obcaecati aliquam dolorum officiis incidunt, qui ut delectus accusamus voluptas quaerat tempora voluptatibus quod, id rerum perferendis?</div>
    </div>
  </div>
);

Message.propTypes = {

};

export default Message;
