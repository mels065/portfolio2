import React from 'react';
import PropTypes from 'prop-types';

import {
  MESSAGE_HELLO_MSG,
} from '../../../constants/Message';

import './style.scss';

const MessageButton = ({ message, onHelloClick, onByeClick }) => (
  <button
    className="message--btn"
    onClick={
      message === MESSAGE_HELLO_MSG ?
        onByeClick :
        onHelloClick
    }
  >
    Change Message
  </button>
);

export default MessageButton;

MessageButton.propTypes = {
  message: PropTypes.string.isRequired,
  onHelloClick: PropTypes.func.isRequired,
  onByeClick: PropTypes.func.isRequired,
};
