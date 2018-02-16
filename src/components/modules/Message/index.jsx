import React from 'react';
import PropTypes from 'prop-types';

import MessageDisplay from '../MessageDisplay';
import MessageButton from '../MessageButton';

import './style.scss';

const Message = ({ message, onHelloClick, onByeClick }) => (
  <div className="message">
    <MessageDisplay {...{ message }} />
    <MessageButton {...{ message, onHelloClick, onByeClick }} />
  </div>
);

export default Message;

Message.propTypes = {
  message: PropTypes.string.isRequired,
  onHelloClick: PropTypes.func.isRequired,
  onByeClick: PropTypes.func.isRequired,
};
